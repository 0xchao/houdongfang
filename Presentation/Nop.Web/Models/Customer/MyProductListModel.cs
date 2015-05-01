using System.Collections.Generic;
using Nop.Web.Framework.Mvc;
using Nop.Core.Domain.Catalog;
using Nop.Web.Models.Catalog;

namespace Nop.Web.Models.Customer
{
    public partial class MyProductListModel : BaseNopEntityModel
    {
        public MyProductListModel()
        {
            Products = new List<ProductOverviewModel>();
            PagingFilteringContext = new CatalogPagingFilteringModel();
        }

        public string VendorName { get; set; }
        public string VendorDescription { get; set; }


        public CatalogPagingFilteringModel PagingFilteringContext { get; set; }

        public IList<ProductOverviewModel> Products { get; set; }

        public CustomerNavigationModel NavigationModel { get; set; }

    }
}