using FluentValidation;
using Nop.Core.Domain.Customers;
using Nop.Services.Localization;
using Nop.Web.Models.Customer;

namespace Nop.Web.Validators.Customer
{
    public class CustomerApplyStoreValidator : AbstractValidator<CustomerApplyStoreModel>
    {
        public CustomerApplyStoreValidator(ILocalizationService localizationService, CustomerSettings customerSettings)
        {
            RuleFor(x => x.FirstName).NotEmpty().WithMessage(localizationService.GetResource("Account.Fields.FirstName.Required"));
            RuleFor(x => x.LastName).NotEmpty().WithMessage(localizationService.GetResource("Account.Fields.LastName.Required"));
            RuleFor(x => x.Phone).NotEmpty().WithMessage(localizationService.GetResource("Account.Fields.LastName.Phone"));
            RuleFor(x => x.IdCardNo).NotEmpty().WithMessage(localizationService.GetResource("Account.Fields.Fields.Required"));
            RuleFor(x => x.CollegeName).NotEmpty().WithMessage(localizationService.GetResource("Account.Fields.CollegeName.Required"));
            RuleFor(x => x.StudentId).NotEmpty().WithMessage(localizationService.GetResource("Account.Fields.StudentId.Required"));
        }
    }
}