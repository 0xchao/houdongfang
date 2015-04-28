using System.Web.Mvc;
using FluentValidation.Attributes;
using Nop.Web.Framework;
using Nop.Web.Framework.Mvc;
using Nop.Web.Validators.Customer;

namespace Nop.Web.Models.Customer
{
    //[Validator(typeof(MyProductValidator))]
    public partial class MyProductModel : BaseNopEntityModel
    {
        [NopResourceDisplayName("Admin.Catalog.Products.Fields.Name")]
        [AllowHtml]
        public string Name { get; set; }

        [NopResourceDisplayName("Admin.Catalog.Products.Fields.ShortDescription")]
        [AllowHtml]
        public string ShortDescription { get; set; }

        [NopResourceDisplayName("Admin.Catalog.Products.Fields.FullDescription")]
        [AllowHtml]
        public string FullDescription { get; set; }

        [NopResourceDisplayName("Admin.Catalog.Products.Fields.Origin")]
        [AllowHtml]
        public string Origin { get; set; }

        public int ProductTemplateId { get; set; }

        public int CategoryId { get; set; }

        public string OperationMode { get { return "Student"; } }

        [NopResourceDisplayName("Admin.Catalog.Products.Fields.Sku")]
        [AllowHtml]
        public string Sku { get; set; }

        [NopResourceDisplayName("Admin.Catalog.Products.Fields.StockQuantity")]
        public int StockQuantity { get; set; }

        [NopResourceDisplayName("Admin.Catalog.Products.Fields.Price")]
        public decimal Price { get; set; }

        [NopResourceDisplayName("Admin.Catalog.Products.Fields.ProductType")]
        public int ProductTypeId { get; set; }
        [NopResourceDisplayName("Admin.Catalog.Products.Fields.ProductType")]
        public string ProductTypeName { get; set; }

        public CustomerNavigationModel NavigationModel { get; set; }

    }

}