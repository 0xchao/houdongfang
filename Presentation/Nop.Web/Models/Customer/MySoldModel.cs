using System.Collections.Generic;
using Nop.Web.Framework.Mvc;
using Nop.Web.Models.Catalog;
using Nop.Admin.Models.Orders;

namespace Nop.Web.Models.Customer
{
    public partial class MySoldModel : BaseNopEntityModel
    {

        public OrderModel Order { get; set; }

        public CustomerNavigationModel NavigationModel { get; set; }

        public string TrackingNumber { get; set; }
    }
}