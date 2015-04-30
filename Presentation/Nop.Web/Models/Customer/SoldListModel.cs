using System.Collections.Generic;
using Nop.Web.Framework.Mvc;
using Nop.Web.Models.Catalog;
using Nop.Admin.Models.Orders;

namespace Nop.Web.Models.Customer
{
    public partial class SoldListModel : BaseNopModel
    {
        public SoldListModel()
        {
            Orders = new List<OrderModel>();
            PagingFilteringContext = new CatalogPagingFilteringModel();
        }

        public CatalogPagingFilteringModel PagingFilteringContext { get; set; }

        public IList<OrderModel> Orders { get; set; }

        public CustomerNavigationModel NavigationModel { get; set; }

    }
}