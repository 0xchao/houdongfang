using System.Web.Mvc;
using FluentValidation.Attributes;
using Nop.Web.Framework;
using Nop.Web.Framework.Mvc;
using Nop.Web.Validators.Customer;
using System.Collections.Generic;

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
        public int OriginId { get; set; }

        public Dictionary<int,string> OriginOptions { get; set; }

        public int ProductTemplateId { get { return 1; } }

        public int CategoryId { get; set; }

        public int OperationModeId { get { return 13; } }

        [NopResourceDisplayName("Admin.Catalog.Products.Fields.Sku")]
        [AllowHtml]
        public string Sku { get; set; }

        [NopResourceDisplayName("Admin.Catalog.Products.Fields.StockQuantity")]
        public int StockQuantity { get; set; }

        [NopResourceDisplayName("Admin.Catalog.Products.Fields.Price")]
        public decimal Price { get; set; }

        public int ProductTypeId { get { return 5; } }

        public CustomerNavigationModel NavigationModel { get; set; }

    }

}