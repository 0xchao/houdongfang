using FluentValidation;
using Nop.Core.Domain.Customers;
using Nop.Services.Localization;
using Nop.Web.Models.Customer;

namespace Nop.Web.Validators.Customer
{
    public class MyProductValidator : AbstractValidator<MyProductModel>
    {
        public MyProductValidator(ILocalizationService localizationService, CustomerSettings customerSettings)
        {
            RuleFor(x => x.Name).NotEmpty().WithMessage(localizationService.GetResource("Product.Fields.Name.Required"));
            RuleFor(x => x.ShortDescription).NotEmpty().WithMessage(localizationService.GetResource("Product.Fields.ShortDescription.Required"));
            RuleFor(x => x.Price).NotEmpty().WithMessage(localizationService.GetResource("Product.Fields.Price.Required"));
            RuleFor(x => x.StockQuantity).NotEmpty().WithMessage(localizationService.GetResource("Product.Fields.StockQuantity.Required"));
        }
    }
}