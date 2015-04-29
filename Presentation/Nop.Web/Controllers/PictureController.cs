using System;
using System.IO;
using System.Web;
using System.Web.Mvc;
using Nop.Services.Media;
using Nop.Core;
using Nop.Core.Domain.Customers;
using Nop.Web.Models.Customer;
using Nop.Services.Catalog;
using System.Collections.Generic;

namespace Nop.Web.Controllers
{
    public partial class PictureController : BasePublicController
    {
        private readonly IPictureService _pictureService;
        private readonly IWorkContext _workContext;
        private readonly IProductService _productService;

        public PictureController(IPictureService pictureService, IWorkContext workContext,
            IProductService productService)
        {
            this._pictureService = pictureService;
            this._workContext = workContext;
            this._productService = productService;
        }

        [HttpPost]
        public ActionResult AsyncUpload()
        {
            var customer = _workContext.CurrentCustomer;
            if (customer == null
                || !customer.IsRegistered()
                || customer.ApplyStoreState != (int)CustomerApplyStoreEnum.Approved)
                return Json(new { success = false, error = "You do not have required permissions" }, "text/plain");

            //we process it distinct ways based on a browser
            //find more info here http://stackoverflow.com/questions/4884920/mvc3-valums-ajax-file-upload
            Stream stream = null;
            var fileName = "";
            var contentType = "";
            if (String.IsNullOrEmpty(Request["qqfile"]))
            {
                // IE
                HttpPostedFileBase httpPostedFile = Request.Files[0];
                if (httpPostedFile == null)
                    throw new ArgumentException("No file uploaded");
                stream = httpPostedFile.InputStream;
                fileName = Path.GetFileName(httpPostedFile.FileName);
                contentType = httpPostedFile.ContentType;
            }
            else
            {
                //Webkit, Mozilla
                stream = Request.InputStream;
                fileName = Request["qqfile"];
            }

            var fileBinary = new byte[stream.Length];
            stream.Read(fileBinary, 0, fileBinary.Length);

            var fileExtension = Path.GetExtension(fileName);
            if (!String.IsNullOrEmpty(fileExtension))
                fileExtension = fileExtension.ToLowerInvariant();
            //contentType is not always available 
            //that's why we manually update it here
            //http://www.sfsu.edu/training/mimetype.htm
            if (String.IsNullOrEmpty(contentType))
            {
                switch (fileExtension)
                {
                    case ".bmp":
                        contentType = "image/bmp";
                        break;
                    case ".gif":
                        contentType = "image/gif";
                        break;
                    case ".jpeg":
                    case ".jpg":
                    case ".jpe":
                    case ".jfif":
                    case ".pjpeg":
                    case ".pjp":
                        contentType = "image/jpeg";
                        break;
                    case ".png":
                        contentType = "image/png";
                        break;
                    case ".tiff":
                    case ".tif":
                        contentType = "image/tiff";
                        break;
                    default:
                        break;
                }
            }

            var picture = _pictureService.InsertPicture(fileBinary, contentType, null, true);
            //when returning JSON the mime-type must be set to text/plain
            //otherwise some browsers will pop-up a "Save As" dialog.
            return Json(new
            {
                success = true,
                pictureId = picture.Id,
                imageUrl = _pictureService.GetPictureUrl(picture, 100)
            },
                "text/plain");
        }

        [HttpDelete]
        public ActionResult AsyncDelete(int id)
        {
            var customer = _workContext.CurrentCustomer;
            if (customer == null
                || !customer.IsRegistered()
                || customer.ApplyStoreState != (int)CustomerApplyStoreEnum.Approved)
                return Json(new { success = false, error = "You do not have required permissions" }, "text/plain");

            var picture = _pictureService.GetPictureById(id);
            if (picture != null)
            {
                _pictureService.DeletePicture(picture);
                return Json(new { success = true }, "text/plain");
            }
            return Json(new { success = false, error = "Delete picture failed." }, "text/plain");
        }

        public ActionResult BelongProduct(int productId)
        {
            var product = _productService.GetProductById(productId);
            if (product == null)
                return Json(null, "text/plain", JsonRequestBehavior.AllowGet);

            var customer = _workContext.CurrentCustomer;
            if (customer == null
                || !customer.IsRegistered()
                || customer.ApplyStoreState != (int)CustomerApplyStoreEnum.Approved
                || customer.VendorId != product.VendorId)
                return Json(null, "text/plain", JsonRequestBehavior.AllowGet);

            List<FinePicture> pictures = new List<FinePicture>();
            var productPictures = _productService.GetProductPicturesByProductId(productId);
            foreach (var p in productPictures)
            {
                var url = _pictureService.GetPictureUrl(p.PictureId);
                pictures.Add(new FinePicture()
                {
                    name = url.Substring(url.LastIndexOf('/') + 1),
                    uuid = p.PictureId.ToString(),
                    thumbnailUrl = url
                });
            }

            return Json(pictures, JsonRequestBehavior.AllowGet);
        }

        class FinePicture
        {
            public string name { get; set; }
            public string uuid { get; set; }
            public string thumbnailUrl { get; set; }
        }
    }
}
