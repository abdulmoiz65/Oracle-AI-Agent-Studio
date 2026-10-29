# Oracle Fusion Cloud Financials - REST API Endpoints Reference

> Source: https://docs.oracle.com/en/cloud/saas/financials/26b/farfa/rest-endpoints.html
> Version: 26B | API Version: 11.13.18.05 | Generated: 2026-05-06

---

**Base URL:** `/fscmRestApi/resources/11.13.18.05/`

**Total Endpoints: 2241 across 304 top-level resources**

---

## $b ul k

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/api/boss/data/objects/ora/erpCore/revenueManagement/v1/revenueContractStandaloneSellingPrices/$bulk` | Create standalone selling prices in bulk |

## $q ue ry

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/api/boss/data/objects/ora/erpCore/revenueManagement/v1/revenueContractStandaloneSellingPrices/{revenueContractStandaloneSellingPrices_id}/$query` | Get a standalone selling price using advanced query |
| `POST` | `/api/boss/data/objects/ora/erpCore/revenueManagement/v1/revenueContractStandaloneSellingPrices/$query` | Get all standalone selling prices using advanced query |

## {r ev en ue Co nt ra ct St an da lo ne Se ll in gP ri ce s_i d}

| Method | Path | Operation |
|--------|------|-----------|
| `POST` | `/api/boss/data/objects/ora/erpCore/revenueManagement/v1/revenueContractStandaloneSellingPrices/{revenueContractStandaloneSellingPrices_id}` | Get a standalone selling price |

## a cc ou nt Co mb in at io ns LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/accountCombinationsLOV/{_CODE_COMBINATION_ID}` | Get an account combination |
| `GET` | `/fscmRestApi/resources/11.13.18.05/accountCombinationsLOV` | Get all account combinations |

## a cc ou nt Co mb in at io ns Sh or th an dA li as es LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/accountCombinationsShorthandAliasesLOV` | Get all shorthand aliases |
| `GET` | `/fscmRestApi/resources/11.13.18.05/accountCombinationsShorthandAliasesLOV/{accountCombinationsShorthandAliasesLOVUniqID}` | Get a shorthand alias |

## a cc ou nt in gC al en da rs LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/accountingCalendarsLOV` | Get all calendars |
| `GET` | `/fscmRestApi/resources/11.13.18.05/accountingCalendarsLOV/{CalendarId}` | Get a calendar |

## a cc ou nt in gP er io ds LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/accountingPeriodsLOV` | Get all periods |
| `GET` | `/fscmRestApi/resources/11.13.18.05/accountingPeriodsLOV/{accountingPeriodsLOVUniqID}` | Get a period |

## a cc ou nt in gP er io dS ta tu sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/accountingPeriodStatusLOV` | Get all period statuses |
| `GET` | `/fscmRestApi/resources/11.13.18.05/accountingPeriodStatusLOV/{accountingPeriodStatusLOVUniqID}` | Get a period status |

## a lt er na te Na me Ma pp in gR ul es

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/alternateNameMappingRules` | Create an alternate name mapping rule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/alternateNameMappingRules` | Get all alternate name mapping rules |
| `GET` | `/fscmRestApi/resources/11.13.18.05/alternateNameMappingRules/{AlternateNameId}` | Delete an alternate name mapping rule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/alternateNameMappingRules/{AlternateNameId}` | Update an alternate name mapping rule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/alternateNameMappingRules/{AlternateNameId}` | Get an alternate name mapping rule |

## a tt ri bu te De ri va ti on Co nd it io ns

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/attributeDerivationConditions` | Get all condition validation statuses |
| `GET` | `/fscmRestApi/resources/11.13.18.05/attributeDerivationConditions/{Expression}` | Get a condition validation status |

## a tt ri bu te De ri va ti on En ti ty Ob je ct s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/attributeDerivationEntityObjects/{attributeDerivationEntityObjectsUniqID}` | Get an entity type |
| `GET` | `/fscmRestApi/resources/11.13.18.05/attributeDerivationEntityObjects` | Get all entity types |

## a tt ri bu te De ri va ti on Ma pp in gS et s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/attributeDerivationMappingSets/{MappingSetId}/child/FunAdmMappingSetInput` | Add an input source |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/attributeDerivationMappingSets/{MappingSetId}/child/FunAdmMappingSetFlavor/{MappingSetFlavorId}/child/FunAdmMappingSetValues` | Create a mapping |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/attributeDerivationMappingSets/{MappingSetId}/child/FunAdmMappingSetFlavor` | Create a value set |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/attributeDerivationMappingSets` | Create a mapping set |
| `GET` | `/fscmRestApi/resources/11.13.18.05/attributeDerivationMappingSets/{MappingSetId}/child/FunAdmMappingSetFlavor/{MappingSetFlavorId}/child/FunAdmMappingSetValues/{MappingSetValueId}` | Delete a mapping |
| `GET` | `/fscmRestApi/resources/11.13.18.05/attributeDerivationMappingSets/{MappingSetId}/child/FunAdmMappingSetInput/{MappingSetInputId}` | Delete an input source |
| `GET` | `/fscmRestApi/resources/11.13.18.05/attributeDerivationMappingSets/{MappingSetId}/child/FunAdmMappingSetFlavor/{MappingSetFlavorId}` | Delete a value set |
| `GET` | `/fscmRestApi/resources/11.13.18.05/attributeDerivationMappingSets/{MappingSetId}/child/FunAdmMappingSetFlavor/{MappingSetFlavorId}` | Get a value set |
| `GET` | `/fscmRestApi/resources/11.13.18.05/attributeDerivationMappingSets/{MappingSetId}` | Get a mapping set |
| `GET` | `/fscmRestApi/resources/11.13.18.05/attributeDerivationMappingSets/{MappingSetId}/child/FunAdmMappingSetFlavor/{MappingSetFlavorId}/child/FunAdmMappingSetValues/{MappingSetValueId}` | Get a mapping |
| `GET` | `/fscmRestApi/resources/11.13.18.05/attributeDerivationMappingSets/{MappingSetId}/child/FunAdmMappingSetInput` | Get all input sources |
| `GET` | `/fscmRestApi/resources/11.13.18.05/attributeDerivationMappingSets/{MappingSetId}` | Delete a mapping set |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/attributeDerivationMappingSets/{MappingSetId}/child/FunAdmMappingSetFlavor/{MappingSetFlavorId}/child/FunAdmMappingSetValues/{MappingSetValueId}` | Update a mapping |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/attributeDerivationMappingSets/{MappingSetId}/child/FunAdmMappingSetFlavor/{MappingSetFlavorId}/child/FunAdmMappingSetValues` | Get all mappings |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/attributeDerivationMappingSets/{MappingSetId}/child/FunAdmMappingSetFlavor/{MappingSetFlavorId}` | Update a value set |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/attributeDerivationMappingSets/{MappingSetId}` | Update a mapping set |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/attributeDerivationMappingSets` | Get all mapping sets |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/attributeDerivationMappingSets/{MappingSetId}/child/FunAdmMappingSetInput/{MappingSetInputId}` | Get an input source |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/attributeDerivationMappingSets/{MappingSetId}/child/FunAdmMappingSetFlavor` | Get all value sets |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/attributeDerivationMappingSets/{MappingSetId}/child/FunAdmMappingSetInput/{MappingSetInputId}` | Update an input source |

## a tt ri bu te De ri va ti on Ru le s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/attributeDerivationRules` | Create a derivation rule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/attributeDerivationRules/{AttributeRuleId}` | Get a derivation rule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/attributeDerivationRules/{AttributeRuleId}` | Delete a derivation rule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/attributeDerivationRules/{AttributeRuleId}` | Update a derivation rule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/attributeDerivationRules` | Get all derivation rules |

## a tt ri bu te De ri va ti on So ur ce At tr ib ut es

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/attributeDerivationSourceAttributes` | Get all source attributes |
| `GET` | `/fscmRestApi/resources/11.13.18.05/attributeDerivationSourceAttributes/{AttributeAssignmentId}` | Get a source attribute |

## a tt ri bu te De ri va ti on Ta rg et At tr ib ut es

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/attributeDerivationTargetAttributes` | Get all target attributes |
| `GET` | `/fscmRestApi/resources/11.13.18.05/attributeDerivationTargetAttributes/{TargetAttributeId}` | Get a target attribute |

## a tt ri bu te De ri va ti on Va lu eS et Va lu es

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/attributeDerivationValueSetValues` | Get all value sets |
| `GET` | `/fscmRestApi/resources/11.13.18.05/attributeDerivationValueSetValues/{ValueId}` | Get a value set |

## a ut oI nv oi ce In te rf ac eL in es

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/autoInvoiceInterfaceLines/{InterfaceLineGUID}/child/autoInvoiceLineInformationDFF` | Get all AutoInvoice line information descriptive flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/autoInvoiceInterfaceLines/{InterfaceLineGUID}/child/autoInvoiceInterfaceLineTransactionDFF/{InterfaceLineGuid}` | Get an AutoInvoice interface line transaction descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/autoInvoiceInterfaceLines/{InterfaceLineGUID}/child/autoInvoiceInterfaceLineTransactionDFF` | Get all AutoInvoice interface line transaction descriptive flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/autoInvoiceInterfaceLines/{InterfaceLineGUID}/child/autoInvoiceHeaderInformationDFF` | Get all AutoInvoice header information descriptive flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/autoInvoiceInterfaceLines` | Get all AutoInvoice interface lines |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/autoInvoiceInterfaceLines/{InterfaceLineGUID}/child/autoInvoiceLineInformationDFF/{InterfaceLineGuid}` | Get an AutoInvoice line information descriptive flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/autoInvoiceInterfaceLines/{InterfaceLineGUID}/child/autoInvoiceLineInformationDFF/{InterfaceLineGuid}` | Update an AutoInvoice line information descriptive flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/autoInvoiceInterfaceLines/{InterfaceLineGUID}` | Update an AutoInvoice interface line |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/autoInvoiceInterfaceLines/{InterfaceLineGUID}` | Get an AutoInvoice interface line |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/autoInvoiceInterfaceLines/{InterfaceLineGUID}/child/autoInvoiceHeaderInformationDFF/{InterfaceLineGuid}` | Update an AutoInvoice header information descriptive flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/autoInvoiceInterfaceLines/{InterfaceLineGUID}/child/autoInvoiceHeaderInformationDFF/{InterfaceLineGuid}` | Get an AutoInvoice header information descriptive flexfield |

## b an kA cc ou nt Us er Ru le s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/bankAccountUserRules/{CountrySpecificUIRuleId}` | Get a country-specific rule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/bankAccountUserRules` | Create a country-specific rule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/bankAccountUserRules/{CountrySpecificUIRuleId}` | Update an existing country-specific rule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/bankAccountUserRules` | Get all country-specific rules |

## b an kC ol le ct io nB us in es sU ni ts LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/bankCollectionBusinessUnitsLOV` | Get all bank collection business units |
| `GET` | `/fscmRestApi/resources/11.13.18.05/bankCollectionBusinessUnitsLOV/{BusinessUnitId}` | Get a bank collection business unit |

## b il lM an ag em en tU se rs

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/billManagementUsers` | Get all bill management users |
| `GET` | `/fscmRestApi/resources/11.13.18.05/billManagementUsers/{BillManagementUserRegistrationId}` | Get a bill management user |
| `GET` | `/fscmRestApi/resources/11.13.18.05/billManagementUsers` | Create a bill management user |

## b ra zi li an Fi sc al Do cu me nt s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/brazilianFiscalDocuments` | Get all fiscal documents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/brazilianFiscalDocuments/{DocumentRelationId}` | Get a fiscal document |

## b ud ge ta ry Co nt ro lB ud ge tT ra ns ac ti on s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/budgetaryControlBudgetTransactions` | Create and perform budgetary control validation on a budget entry transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/budgetaryControlBudgetTransactions/{budgetaryControlBudgetTransactionsUniqID}/enclosure/BudgetTransactionPayload` | Delete a BudgetTransactionPayload |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/budgetaryControlBudgetTransactions/{budgetaryControlBudgetTransactionsUniqID}` | PATCH action not supported |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/budgetaryControlBudgetTransactions/{budgetaryControlBudgetTransactionsUniqID}` | DELETE action not supported |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/budgetaryControlBudgetTransactions/{budgetaryControlBudgetTransactionsUniqID}/enclosure/BudgetTransactionPayload` | Replace a BudgetTransactionPayload |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/budgetaryControlBudgetTransactions/{budgetaryControlBudgetTransactionsUniqID}/enclosure/BudgetTransactionPayload` | Get a BudgetTransactionPayload |

## b ud ge ta ry Co nt ro lR es ul ts

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/budgetaryControlResults` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/budgetaryControlResults/{budgetaryControlResultsUniqID}` | Get a budgetary control result |

## b ud ge ta ry Co nt ro lR es ul ts Bu dg et Im pa ct s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/budgetaryControlResultsBudgetImpacts/{budgetaryControlResultsBudgetImpactsUniqID}` | Get the budget impacts of a budgetary control result |
| `GET` | `/fscmRestApi/resources/11.13.18.05/budgetaryControlResultsBudgetImpacts` | GET action not supported |

## b ud ge ta ry Co nt ro lR es ul ts Bu dg et Tr an sa ct io ns

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/budgetaryControlResultsBudgetTransactions` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/budgetaryControlResultsBudgetTransactions/{TransactionNumber}` | Get a budget entry transaction budgetary control result |

## b uy er In it ia te dE ar ly Pa ym en tO ff er s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/buyerInitiatedEarlyPaymentOffers/{discountOfferId}/child/assignments/{offerAssignmentId}/child/assignmentDff` | Create descriptive flexfields for a standing offer assignment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/buyerInitiatedEarlyPaymentOffers/{discountOfferId}/child/assignments/{offerAssignmentId}` | Get a standing offer assignment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/buyerInitiatedEarlyPaymentOffers/{discountOfferId}/child/assignments` | Create a standing offer assignment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/buyerInitiatedEarlyPaymentOffers/{discountOfferId}/child/assignments/{offerAssignmentId}/child/assignmentDff/{OfferAssignmentId}` | Get a descriptive flexfield for a standing offer assignment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/buyerInitiatedEarlyPaymentOffers/{discountOfferId}` | Get a standing early payment offer |
| `GET` | `/fscmRestApi/resources/11.13.18.05/buyerInitiatedEarlyPaymentOffers` | Create a standing early payment offer |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/buyerInitiatedEarlyPaymentOffers/{discountOfferId}/child/assignments/{offerAssignmentId}/child/assignmentDff` | Get all descriptive flexfields for a standing offer assignment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/buyerInitiatedEarlyPaymentOffers/{discountOfferId}/child/assignments/{offerAssignmentId}` | Update a standing offer assignment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/buyerInitiatedEarlyPaymentOffers/{discountOfferId}/child/assignments` | Get all standing offer assignments |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/buyerInitiatedEarlyPaymentOffers/action/sendEarlyPaymentOffers` | Send early payment offers to suppliers |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/buyerInitiatedEarlyPaymentOffers/{discountOfferId}/child/assignments/{offerAssignmentId}/child/assignmentDff/{OfferAssignmentId}` | Update a descriptive flexfield for a standing offer assignment |
| `POST` | `/fscmRestApi/resources/11.13.18.05/buyerInitiatedEarlyPaymentOffers` | Get all standing early payment offer |
| `POST` | `/fscmRestApi/resources/11.13.18.05/buyerInitiatedEarlyPaymentOffers/action/updateSupplierAssignments` | Update supplier contact for early payment offers |
| `POST` | `/fscmRestApi/resources/11.13.18.05/buyerInitiatedEarlyPaymentOffers/action/getCampaignDetailsUsingVendorId` | Retrieve the list of campaigns for a supplier |
| `POST` | `/fscmRestApi/resources/11.13.18.05/buyerInitiatedEarlyPaymentOffers/{discountOfferId}` | Update a standing early payment offer |
| `POST` | `/fscmRestApi/resources/11.13.18.05/buyerInitiatedEarlyPaymentOffers/action/getSupplierContacts` | Retrieve the list of supplier contacts for a vendor |

## c ar ri ed In te re st Ag re em en ts

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/carriedInterestAgreements/{agreementId}/child/stakeholderGroups` | Create a stakeholder group |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/carriedInterestAgreements/{agreementId}/child/stakeholderGroups/{stakeholderGroupId}/child/stakeholderPercentages` | Create a stakeholder percentage |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/carriedInterestAgreements` | Create a carried interest agreement |
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriedInterestAgreements/{agreementId}/child/stakeholderGroups/{stakeholderGroupId}/child/ownershipDefinitions/{ownershipDefinitionId}/child/ownershipPercentages` | Get all ownership percentages associated with an ownership definition |
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriedInterestAgreements/{agreementId}/child/stakeholderGroups/{stakeholderGroupId}/child/ownershipDefinitions/{ownershipDefinitionId}/child/ownershipPercentages/{ownershipPercentageId}` | Get an ownership percentage for a stakeholder |
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriedInterestAgreements/{agreementId}/child/stakeholderGroups/{stakeholderGroupId}/child/ownershipDefinitions/{ownershipDefinitionId}` | Delete an ownership definition |
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriedInterestAgreements/{agreementId}/child/stakeholderGroups/{stakeholderGroupId}/child/ownershipDefinitions` | Get all ownership definitions associated with a joint venture |
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriedInterestAgreements/{agreementId}/child/stakeholderGroups/{stakeholderGroupId}/child/ownershipDefinitions/{ownershipDefinitionId}` | Get an ownership definition |
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriedInterestAgreements/{agreementId}/child/stakeholderGroups/{stakeholderGroupId}/child/stakeholderPercentages/{stakeholderPercentageId}` | Get a stakeholder percentage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriedInterestAgreements/{agreementId}/child/stakeholderGroups/{stakeholderGroupId}/child/stakeholderPercentages/{stakeholderPercentageId}/child/stakeholderPercentageDFF` | Create the set of descriptive flexfields for a stakeholder percentage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriedInterestAgreements/{agreementId}/child/stakeholderGroups/{stakeholderGroupId}/child/stakeholderPercentages/{stakeholderPercentageId}/child/stakeholderPercentageDFF` | Get all descriptive flexfields for a stakeholder percentage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriedInterestAgreements/{agreementId}/child/stakeholderGroups/{stakeholderGroupId}/child/stakeholderGroupDFF` | Create the set of descriptive flexfields for a stakeholder group |
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriedInterestAgreements/{agreementId}/child/stakeholderGroups/{stakeholderGroupId}/child/stakeholderGroupDFF` | Get all descriptive flexfields for a stakeholder group |
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriedInterestAgreements/{agreementId}/child/stakeholderGroups/{stakeholderGroupId}/child/stakeholderPercentages/{stakeholderPercentageId}` | Delete a stakeholder percentage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriedInterestAgreements/{agreementId}` | Delete a carried interest agreement |
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriedInterestAgreements/{agreementId}/child/agreementDFF` | Create the set of descriptive flexfields for a carried interest agreement |
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriedInterestAgreements/{agreementId}/child/agreementDFF` | Get all descriptive flexfields for a carried interest agreement |
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriedInterestAgreements/{agreementId}/child/stakeholderGroups/{stakeholderGroupId}` | Delete a stakeholder group |
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriedInterestAgreements/{agreementId}` | Get a carried interest agreement |
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriedInterestAgreements/{agreementId}/child/stakeholderGroups/{stakeholderGroupId}` | Get a stakeholder group |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/carriedInterestAgreements` | Get all carried interest agreements |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/carriedInterestAgreements/{agreementId}/child/stakeholderGroups/{stakeholderGroupId}/child/stakeholderPercentages/{stakeholderPercentageId}/child/stakeholderPercentageDFF/{GroupLineId}` | Update descriptive flexfields for a stakeholder percentage |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/carriedInterestAgreements/{agreementId}/child/stakeholderGroups/{stakeholderGroupId}/child/stakeholderPercentages` | Get all stakeholder percentages for a stakeholder group |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/carriedInterestAgreements/{agreementId}/child/stakeholderGroups/{stakeholderGroupId}/child/stakeholderPercentages/{stakeholderPercentageId}` | Update a stakeholder percentage |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/carriedInterestAgreements/{agreementId}/child/stakeholderGroups/{stakeholderGroupId}/child/stakeholderPercentages/{stakeholderPercentageId}/child/stakeholderPercentageDFF/{GroupLineId}` | Get descriptive flexfields for a stakeholder percentage |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/carriedInterestAgreements/{agreementId}` | Update a carried interest agreement |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/carriedInterestAgreements/{agreementId}/child/agreementDFF/{AgreementId}` | Update descriptive flexfields for a carried interest agreement |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/carriedInterestAgreements/{agreementId}/child/stakeholderGroups` | Get all stakeholder groups for a carried interest agreement |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/carriedInterestAgreements/{agreementId}/child/stakeholderGroups/{stakeholderGroupId}` | Update a stakeholder group |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/carriedInterestAgreements/{agreementId}/child/stakeholderGroups/{stakeholderGroupId}/child/stakeholderGroupDFF/{StakeholderGroupId}` | Get descriptive flexfields for a stakeholder group |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/carriedInterestAgreements/{agreementId}/child/stakeholderGroups/{stakeholderGroupId}/child/stakeholderGroupDFF/{StakeholderGroupId}` | Update descriptive flexfields for a stakeholder group |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/carriedInterestAgreements/{agreementId}/child/agreementDFF/{AgreementId}` | Get descriptive flexfields for a carried interest agreement |
| `POST` | `/fscmRestApi/resources/11.13.18.05/carriedInterestAgreements/{agreementId}/child/stakeholderGroups/{stakeholderGroupId}/action/createOwnershipDefinition` | Create a carried interest ownership definition |

## c ar ri ed In te re st Ag re em en tS ta ke ho ld er sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriedInterestAgreementStakeholdersLOV/{carriedInterestAgreementStakeholdersLOVUniqID}` | Get nonconsenting and consenting stakeholders for an agreement |
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriedInterestAgreementStakeholdersLOV` | Get all nonconsenting and consenting stakeholders for an agreement |

## c ar ri ed In te re st Di st ri bu ti on s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriedInterestDistributions` | Get all carried interest distributions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriedInterestDistributions/{distributionId}` | Get a carried interest distribution |

## c ar ri ed In te re st Ge ne ra te dD is tr ib ut io ns

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriedInterestGeneratedDistributions/{distributionId}` | Get a carried interest generated distribution |
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriedInterestGeneratedDistributions/{distributionId}` | Delete a carried interest generated distribution |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/carriedInterestGeneratedDistributions/{distributionId}` | Update a carried interest generated distribution |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/carriedInterestGeneratedDistributions` | Get all carried interest generated distributions |

## c ar ri ed In te re st GL Di st ri bu ti on s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriedInterestGLDistributions/{distributionId}` | Get a carried interest general ledger distribution |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/carriedInterestGLDistributions/{distributionId}` | Update a carried interest general ledger distribution |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/carriedInterestGLDistributions` | Get all carried interest general ledger distributions |

## c ar ri ed In te re st Ov er he ad Di st ri bu ti on s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriedInterestOverheadDistributions/{distributionId}` | Get a carried interest overhead distribution |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/carriedInterestOverheadDistributions/{distributionId}` | Update a carried interest overhead distribution |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/carriedInterestOverheadDistributions` | Get all carried interest overhead distributions |

## c ar ri ed In te re st Pe na lt ie s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/carriedInterestPenalties/{penaltyId}/child/penaltyPercentages` | Create a penalty percentage |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/carriedInterestPenalties` | Create a carried interest penalty |
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriedInterestPenalties/{penaltyId}/child/penaltyPercentages/{percentageId}` | Delete a penalty percentage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriedInterestPenalties/{penaltyId}/child/penaltyPercentages/{percentageId}` | Get a penalty percentage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriedInterestPenalties/{penaltyId}` | Delete a carried interest penalty |
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriedInterestPenalties/{penaltyId}` | Get a carried interest penalty |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/carriedInterestPenalties/{penaltyId}/child/penaltyPercentages/{percentageId}` | Update a penalty percentage |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/carriedInterestPenalties/{penaltyId}/child/penaltyPercentages` | Get all penalty percentages for a carried interest penalty |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/carriedInterestPenalties` | Get all carried interest penalties |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/carriedInterestPenalties/{penaltyId}` | Update a carried interest penalty |

## c ar ri ed In te re st SL AD is tr ib ut io ns

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriedInterestSLADistributions/{distributionId}` | Get a carried interest subledger distribution |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/carriedInterestSLADistributions/{distributionId}` | Update a carried interest subledger distribution |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/carriedInterestSLADistributions` | Get all carried interest subledger distributions |

## c as hB an kA cc ou nt s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/cashBankAccounts/{BankAccountId}/child/bankAccountTransactionCreationRules` | Create a bank statement transaction creation rule for a bank account |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/cashBankAccounts/{BankAccountId}/child/bankAccountUses/{bankAccountUsesUniqID}/child/bankAccountPaymentDocumentCategories` | Create a payment document category for a business unit |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cashBankAccounts/{BankAccountId}/child/bankAccountUses/{bankAccountUsesUniqID}` | Get a bank account use for a bank account |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cashBankAccounts/{BankAccountId}/child/bankAccountPaymentDocuments` | Create a payment document for a bank account |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cashBankAccounts/{BankAccountId}/child/bankAccountGrants` | Create a grant for a bank account |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cashBankAccounts/{BankAccountId}/child/bankAccountGrants/{GrantId}` | Get a grant for a bank account |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cashBankAccounts/{BankAccountId}/child/bankAccountPaymentDocuments/{PaymentDocumentId}` | Get a payment document for a bank account |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cashBankAccounts/{BankAccountId}/child/bankAccountTransactionCreationRules/{AccountTrxCreationRuleId}` | Get a bank statement transaction creation rule for a bank account |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cashBankAccounts/{BankAccountId}/child/bankAccountTransactionCreationRules/{AccountTrxCreationRuleId}` | Delete a bank statement transaction creation rule for a bank account |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cashBankAccounts/{BankAccountId}/child/bankAccountPaymentDocuments/{PaymentDocumentId}/child/bankAccountCheckbooks/{CheckbookId}` | Get a checkbook for a bank account |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cashBankAccounts/{BankAccountId}/child/bankAccountUses` | Create a bank account use for a bank account |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cashBankAccounts/{BankAccountId}/child/bankAccountPaymentDocuments/{PaymentDocumentId}/child/bankAccountCheckbooks` | Create a checkbook for a bank account |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cashBankAccounts` | Create a bank account |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cashBankAccounts/{BankAccountId}/child/bankAccountUses/{bankAccountUsesUniqID}/child/bankAccountPaymentDocumentCategories/{ApPmDocumentCategoryId}` | Get a payment document category for a business unit |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cashBankAccounts/{BankAccountId}` | Get a bank account |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cashBankAccounts/{BankAccountId}/child/cashBankAccountDFF` | Create a descriptive flexfield for a bank account |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cashBankAccounts/{BankAccountId}/child/bankAccountUses/{bankAccountUsesUniqID}/child/bankAccountPaymentDocumentCategories/{ApPmDocumentCategoryId}` | Delete a payment document category for a business unit |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cashBankAccounts/{BankAccountId}/child/cashBankAccountDFF/{BankAccountId2}` | Get a descriptive flexfield for a bank account |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cashBankAccounts/{BankAccountId}/child/cashBankAccountGlobalDFF/{BankAccountId3}` | Get a global descriptive flexfield for a bank account |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cashBankAccounts/{BankAccountId}/child/cashBankAccountGlobalDFF` | Create a global descriptive flexfield for a bank account |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cashBankAccounts/{BankAccountId}/child/bankAccountUses/{bankAccountUsesUniqID}/child/bankAccountPaymentDocumentCategories/{ApPmDocumentCategoryId}` | Update a payment document category for a business unit |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cashBankAccounts/{BankAccountId}/child/bankAccountUses/{bankAccountUsesUniqID}` | Update a bank account use for a bank account |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cashBankAccounts/{BankAccountId}/child/bankAccountTransactionCreationRules` | Get all bank statement transaction creation rules for a bank account |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cashBankAccounts/{BankAccountId}/child/bankAccountUses` | Get all bank account uses for a bank account |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cashBankAccounts/{BankAccountId}/child/bankAccountTransactionCreationRules/{AccountTrxCreationRuleId}` | Update a bank statement transaction creation rule for a bank account |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cashBankAccounts/{BankAccountId}/child/bankAccountUses/{bankAccountUsesUniqID}/child/bankAccountPaymentDocumentCategories` | Get all payment document categories for a business unit |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cashBankAccounts/{BankAccountId}/child/cashBankAccountDFF/{BankAccountId2}` | Update a descriptive flexfield for a bank account |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cashBankAccounts/{BankAccountId}/child/cashBankAccountGlobalDFF` | Get all global descriptive flexfields for a bank account |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cashBankAccounts/{BankAccountId}/child/cashBankAccountGlobalDFF/{BankAccountId3}` | Update a global descriptive flexfield for a bank account |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cashBankAccounts` | Get all bank accounts |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cashBankAccounts/{BankAccountId}` | Update a bank account |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cashBankAccounts/{BankAccountId}/child/cashBankAccountDFF` | Get all descriptive flexfields for a bank account |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cashBankAccounts/{BankAccountId}/child/bankAccountPaymentDocuments/{PaymentDocumentId}` | Update a payment document for a bank account |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cashBankAccounts/{BankAccountId}/child/bankAccountPaymentDocuments/{PaymentDocumentId}/child/bankAccountCheckbooks` | Get all checkbooks for a bank account |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cashBankAccounts/{BankAccountId}/child/bankAccountPaymentDocuments/{PaymentDocumentId}/child/bankAccountCheckbooks/{CheckbookId}` | Update a checkbook for a bank account |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cashBankAccounts/{BankAccountId}/child/bankAccountGrants` | Get all grants for a bank account |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cashBankAccounts/{BankAccountId}/child/bankAccountGrants/{GrantId}` | Update a grant for a bank account |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cashBankAccounts/{BankAccountId}/child/bankAccountPaymentDocuments` | Get all payment documents for a bank account |

## c as hB an kA cc ou nt sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/cashBankAccountsLOV` | Get all bank accounts |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cashBankAccountsLOV/{BankAccountId}` | Get a bank account |

## c as hB an kA cc ou nt Tr an sf er s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/cashBankAccountTransfers/{BankAccountTransferId}` | Get a bank account transfer |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cashBankAccountTransfers` | Create a bank account transfer |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cashBankAccountTransfers/{BankAccountTransferId}` | Update a bank account transfer |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cashBankAccountTransfers` | Get all bank account transfers |

## c as hB an kB ra nc he s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/cashBankBranches` | Create a bank branch |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cashBankBranches/{BranchPartyId}` | Get a bank branch |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cashBankBranches/{BranchPartyId}` | Delete a bank branch |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cashBankBranches/{BranchPartyId}` | Update a bank branch |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cashBankBranches` | Get all bank branches |

## c as hB an kB ra nc he sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/cashBankBranchesLOV` | Get all bank branches |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cashBankBranchesLOV/{BranchPartyId}` | Get a bank branch |

## c as hB an ks

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/cashBanks` | Create a bank |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cashBanks/{BankPartyId}` | Get a bank |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cashBanks/{BankPartyId}` | Delete a bank |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cashBanks/{BankPartyId}` | Update a bank |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cashBanks` | Get all banks |

## c as hB an ks LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/cashBanksLOV` | Get all banks |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cashBanksLOV/{BankPartyId}` | Get a bank |

## c as hE xt er na lT ra ns ac ti on s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/cashExternalTransactions/{ExternalTransactionId}/child/attachments` | Create an attachment for an external transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cashExternalTransactions/{ExternalTransactionId}/child/cashExternalTransactionDFF/{ExternalTransactionId2}` | Get a descriptive flexfield for an external transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cashExternalTransactions/{ExternalTransactionId}/child/attachments` | Get all attachments for an external transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cashExternalTransactions/{ExternalTransactionId}/child/attachments/{attachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cashExternalTransactions/{ExternalTransactionId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cashExternalTransactions/{ExternalTransactionId}/child/cashExternalTransactionDFF` | Create a descriptive flexfield for an external transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cashExternalTransactions` | Create an external transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cashExternalTransactions` | Get all external transactions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cashExternalTransactions/{ExternalTransactionId}/child/attachments/{attachmentsUniqID}` | Delete an attachment for an external transaction |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cashExternalTransactions/{ExternalTransactionId}/child/cashExternalTransactionDFF/{ExternalTransactionId2}` | Update a descriptive flexfield for an external transaction |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cashExternalTransactions/{ExternalTransactionId}/child/cashExternalTransactionDFF` | Get all descriptive flexfields for an external transaction |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cashExternalTransactions/{ExternalTransactionId}/child/attachments/{attachmentsUniqID}` | Get an attachment for an external transaction |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cashExternalTransactions/{ExternalTransactionId}` | Update an external transaction |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cashExternalTransactions/{ExternalTransactionId}` | Get an external transaction |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cashExternalTransactions/{ExternalTransactionId}/child/attachments/{attachmentsUniqID}` | Update an attachment for an external transaction |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/cashExternalTransactions/{ExternalTransactionId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/cashExternalTransactions/{ExternalTransactionId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Get a FileContents |

## c as hP oo ls

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/cashPools/{CashPoolId}/child/cashPoolMembers` | Create a cash pool member |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/cashPools` | Create a cash pool |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cashPools/{CashPoolId}/child/cashPoolMembers/{CashPoolMemberId}` | Delete a cash pool member |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cashPools/{CashPoolId}/child/cashPoolMembers/{CashPoolMemberId}` | Get a cash pool member |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cashPools/{CashPoolId}` | Delete a cash pool |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cashPools/{CashPoolId}` | Get a cash pool |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cashPools/{CashPoolId}/child/cashPoolMembers/{CashPoolMemberId}` | Update a cash pool member |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cashPools/{CashPoolId}/child/cashPoolMembers` | Get all cash pool members |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cashPools` | Get all cash pools |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cashPools/{CashPoolId}` | Update a cash pool |

## c ha rt Of Ac co un ts Fi lt er s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/chartOfAccountsFilters/{chartOfAccountsFiltersUniqID}/child/filterCriteria` | Create a set of filter criteria |
| `GET` | `/fscmRestApi/resources/11.13.18.05/chartOfAccountsFilters/{chartOfAccountsFiltersUniqID}/child/filterCriteria` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/chartOfAccountsFilters/{chartOfAccountsFiltersUniqID}/child/filterCriteria/{filterCriteriaUniqID}` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/chartOfAccountsFilters` | Create a chart of accounts filter |
| `GET` | `/fscmRestApi/resources/11.13.18.05/chartOfAccountsFilters` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/chartOfAccountsFilters/{chartOfAccountsFiltersUniqID}` | GET action not supported |

## c ha rt Of Ac co un ts LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/chartOfAccountsLOV` | Get all chart of accounts |
| `GET` | `/fscmRestApi/resources/11.13.18.05/chartOfAccountsLOV/{StructureInstanceId}` | Get a chart of account |

## c ol le ct io nP ro mi se s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/collectionPromises/{PromiseDetailId}/child/collectionPromiseDFF` | Create a collection promise descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collectionPromises/{PromiseDetailId}/child/collectionPromiseDFF/{PromiseDetailId2}` | Get a collection promise descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collectionPromises/{PromiseDetailId}/child/collectionPromiseDFF` | Get all descriptive flexfields for a collection promise group |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collectionPromises` | Create a collection promise |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collectionPromises/{PromiseDetailId}` | Get a collection promise |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collectionPromises` | Get all collection promises |

## c ol le ct io ns De li nq ue nc ie s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/collectionsDelinquencies/{DelinquencyId}` | Get a collections delinquency |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collectionsDelinquencies` | Create a collections delinquency |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/collectionsDelinquencies/{DelinquencyId}` | Update a collections delinquency |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/collectionsDelinquencies` | Get all collections delinquencies |

## c ol le ct io nS tr at eg ie s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/collectionStrategies/{StrategyId}/child/strategyExecutionTasks/{WorkItemId}` | Get a task assignment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collectionStrategies/{StrategyId}/child/strategyExecutionTasks` | Create a task assignment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collectionStrategies/{StrategyId}/child/strategyUserTasks/{UserItemId}` | Get a user task assignment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collectionStrategies/{StrategyId}/child/strategyUserTasks` | Create a user task assignment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collectionStrategies/{StrategyId}/child/strategyTemplateTasks/{TemplateTaskId}` | Get a strategy template task |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collectionStrategies/{StrategyId}` | Get a strategy assignment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collectionStrategies` | Create a strategy assignment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/collectionStrategies/{StrategyId}/child/strategyExecutionTasks/{WorkItemId}` | Update a task assignment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/collectionStrategies/{StrategyId}/child/strategyUserTasks` | Get all user task assignments |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/collectionStrategies/{StrategyId}/child/strategyUserTasks/{UserItemId}` | Update a user task assignment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/collectionStrategies/{StrategyId}/child/strategyTemplateTasks/{TemplateTaskId}` | Update a strategy template task status |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/collectionStrategies/{StrategyId}/child/strategyTemplateTasks` | Get all strategy template tasks |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/collectionStrategies/{StrategyId}` | Update a strategy assignment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/collectionStrategies/{StrategyId}/child/strategyExecutionTasks` | Get all task assignments |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/collectionStrategies` | Get all strategy assignments |

## c on tr ol Bu dg et Pe ri od sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/controlBudgetPeriodsLOV` | Get all control budget periods |
| `GET` | `/fscmRestApi/resources/11.13.18.05/controlBudgetPeriodsLOV/{controlBudgetPeriodsLOVUniqID}` | Get a control budget period |

## c on tr ol Bu dg et sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/controlBudgetsLOV` | Get all control budgets |
| `GET` | `/fscmRestApi/resources/11.13.18.05/controlBudgetsLOV/{ControlBudgetId}` | Get a control budget |

## c re di tA nd Co ll ec ti on sD at aP oi nt s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/creditAndCollectionsDataPoints/{DataPointId}` | Get a credit and collections data point |
| `GET` | `/fscmRestApi/resources/11.13.18.05/creditAndCollectionsDataPoints` | Create a credit and collections data point |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/creditAndCollectionsDataPoints/{DataPointId}` | Update a credit and collections data point |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/creditAndCollectionsDataPoints` | Get all credit and collections data points |

## c ur re nc yC on ve rs io nT yp es LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/currencyConversionTypesLOV` | Get all currency conversion types |
| `GET` | `/fscmRestApi/resources/11.13.18.05/currencyConversionTypesLOV/{ConversionTypeId}` | Get a currency conversion type |

## c ur re nc yR at es

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/currencyRates` | Get all currency rates |
| `GET` | `/fscmRestApi/resources/11.13.18.05/currencyRates/{currencyRatesUniqID}` | GET action not supported |

## c us to me rA cc ou nt Si te sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/customerAccountSitesLOV` | Get all customer account sites details |
| `GET` | `/fscmRestApi/resources/11.13.18.05/customerAccountSitesLOV/{SiteUseId}` | Get a customer account site details |

## d at aA cc es sS et Le dg er sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/dataAccessSetLedgersLOV` | Get all ledgers or ledger sets |
| `GET` | `/fscmRestApi/resources/11.13.18.05/dataAccessSetLedgersLOV/{LedgerId}` | Get a ledger or ledger set |

## d at aA cc es sS et sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/dataAccessSetsLOV` | Get all data access sets |
| `GET` | `/fscmRestApi/resources/11.13.18.05/dataAccessSetsLOV/{AccessSetId}` | Get a data access set |

## d at aP oi nt Va lu es

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/dataPointValues/{DataPointRepositoryId}` | Get a data point value |
| `GET` | `/fscmRestApi/resources/11.13.18.05/dataPointValues` | Create a data point value |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/dataPointValues/{DataPointRepositoryId}` | Update a data point value |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/dataPointValues` | Get all data point values |

## d at aS ec ur it ie s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/dataSecurities/{UserRoleDataAssignmentId}` | Get a data assignment by user and role |
| `GET` | `/fscmRestApi/resources/11.13.18.05/dataSecurities` | Create a data assignment for a user |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/dataSecurities/{UserRoleDataAssignmentId}` | Update a data assignment for a user |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/dataSecurities` | Get all data assignments by user and role |

## d eb it Au th or iz at io ns

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/debitAuthorizations/{debitAuthorizationsUniqID}/child/debitAuthorizationVersions` | Get all debit authorization versions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/debitAuthorizations/{debitAuthorizationsUniqID}/child/debitAuthorizationVersions/{debitAuthorizationVersionsUniqID}` | Get a debit authorization version |
| `GET` | `/fscmRestApi/resources/11.13.18.05/debitAuthorizations` | Create a debit authorization |
| `GET` | `/fscmRestApi/resources/11.13.18.05/debitAuthorizations/{debitAuthorizationsUniqID}` | Get a debit authorization |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/debitAuthorizations` | Get all debit authorizations |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/debitAuthorizations/{debitAuthorizationsUniqID}` | Update a debit authorization |

## d is bu rs em en tP ay me nt Me th od sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/disbursementPaymentMethodsLOV` | Get all payment methods |
| `GET` | `/fscmRestApi/resources/11.13.18.05/disbursementPaymentMethodsLOV/{PaymentMethodCode}` | Get a payment method |

## d oc um en tF is ca lC la ss if ic at io ns LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/documentFiscalClassificationsLOV` | Get all document fiscal classifications |
| `GET` | `/fscmRestApi/resources/11.13.18.05/documentFiscalClassificationsLOV/{documentFiscalClassificationsLOVUniqID}` | Get a document fiscal classification |

## e nc um br an ce Ty pe sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/encumbranceTypesLOV` | Get all journal encumbrance types |
| `GET` | `/fscmRestApi/resources/11.13.18.05/encumbranceTypesLOV/{EncumbranceTypeId}` | Get a journal encumbrance type |

## e rp Bu si ne ss Ev en ts

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/erpBusinessEvents/{ErpBusinessEventId}` | Get a business event record |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/erpBusinessEvents/{ErpBusinessEventId}` | Update the enabled indicator for a business event |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/erpBusinessEvents` | Get all business event records |

## e rp in te gr at io ns

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/erpintegrations/{OperationName}` | Get job details |
| `GET` | `/fscmRestApi/resources/11.13.18.05/erpintegrations` | Get all job details |
| `GET` | `/fscmRestApi/resources/11.13.18.05/erpintegrations` | Create an inbound or outbound set of data |

## e rp Pr oc es se s

| Method | Path | Operation |
|--------|------|-----------|
| `POST` | `/fscmRestApi/resources/11.13.18.05/erpProcesses` | Retrieve an ERP process and related parameters |

## e xp en se Ac co mm od at io ns Po li ci es

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseAccommodationsPolicies/{AccommodationsPolicyId}/child/expenseAccommodationsPolicyLines/{PolicyLineId}` | Get a single accommodations expense policy line record using an accommodations expense policy rate line identifier |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseAccommodationsPolicies/{AccommodationsPolicyId}/child/expenseAccommodationsPolicyLines` | Get all accommodations expense policy line records |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseAccommodationsPolicies/{AccommodationsPolicyId}` | Get a single accommodations expense policy record for an accommodations expense policy identifier |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseAccommodationsPolicies` | Get all accommodations expense policy records |

## e xp en se Ai rf ar eP ol ic ie s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseAirfarePolicies/{AirfarePolicyId}/child/expenseAirfarePolicyLines` | Get all expense airfare policy lines |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseAirfarePolicies/{AirfarePolicyId}/child/expenseAirfarePolicyLines/{PolicyLineId}` | Get an expense airfare policy line |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseAirfarePolicies` | Get all expense airfare policies |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseAirfarePolicies/{AirfarePolicyId}` | Get an expense airfare policy |

## e xp en se Au di tP re di ct io ns

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseAuditPredictions/{expenseReportId}` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseAuditPredictions` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseAuditPredictions` | Create an audit recommendation |

## e xp en se Ca sh Ad va nc es

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/expenseCashAdvances/{expenseCashAdvancesUniqID}/child/Attachments` | Create an attachment |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/expenseCashAdvances` | Create a cash advance record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseCashAdvances/{expenseCashAdvancesUniqID}/child/CashAdvanceDff/{CashAdvanceId}` | Get a descriptive flexfield record for the cash advance |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseCashAdvances/{expenseCashAdvancesUniqID}/child/Attachments` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseCashAdvances/{expenseCashAdvancesUniqID}/child/Attachments/{AttachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseCashAdvances/{expenseCashAdvancesUniqID}/child/Attachments/{AttachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseCashAdvances/{expenseCashAdvancesUniqID}/child/CashAdvanceDff` | Create a cash advance descriptive flexfield record for a cash advance |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseCashAdvances/{expenseCashAdvancesUniqID}` | Delete a cash advance |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseCashAdvances/{expenseCashAdvancesUniqID}` | Get a cash advance record for the requested cash advance identifier |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseCashAdvances/{expenseCashAdvancesUniqID}/child/Attachments/{AttachmentsUniqID}` | Delete an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenseCashAdvances/{expenseCashAdvancesUniqID}/child/CashAdvanceDff/{CashAdvanceId}` | Update the descriptive flexfield record for a cash advance |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenseCashAdvances/{expenseCashAdvancesUniqID}/child/CashAdvanceDff` | Get all descriptive flexfield records for the related cash advance |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenseCashAdvances/{expenseCashAdvancesUniqID}/child/Attachments/{AttachmentsUniqID}` | Get an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenseCashAdvances/{expenseCashAdvancesUniqID}` | Update a cash advance |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenseCashAdvances` | Get all cash advance records |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenseCashAdvances/{expenseCashAdvancesUniqID}/child/Attachments/{AttachmentsUniqID}` | Update an attachment |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/expenseCashAdvances/{expenseCashAdvancesUniqID}/child/Attachments/{AttachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/expenseCashAdvances/{expenseCashAdvancesUniqID}/child/Attachments/{AttachmentsUniqID}/enclosure/FileContents` | Get a FileContents |

## e xp en se Co nv er si on Ra te Op ti on s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseConversionRateOptions/{ConversionRateId}/child/conversionRateTolerances/{ConversionRateToleranceId}` | Get a single conversion rate tolerance record for a given identifier of a conversion rate exception for a specific currency within a business unit |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseConversionRateOptions/{ConversionRateId}/child/conversionRateTolerances` | Get all conversion rate tolerance records |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseConversionRateOptions/{ConversionRateId}` | Get a single conversion rate option record for a given conversion rate option row identifier |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseConversionRateOptions` | Get all conversion rate option records |

## e xp en se Cr ed it Ca rd Tr an sa ct io ns

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseCreditCardTransactions` | Get all corporate card transactions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseCreditCardTransactions/{CreditCardTrxnId}` | Get a corporate card transaction |

## e xp en se De le ga ti on s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseDelegations` | Get all expense delegations |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseDelegations` | Create an expense delegation |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenseDelegations/{expenseDelegationsUniqID}` | Update an expense delegation |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenseDelegations/{expenseDelegationsUniqID}` | Get an expense delegation |

## e xp en se Df fC on te xt s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseDffContexts` | Get all descriptive flexfield contexts for expenses and expense reports |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseDffContexts/{RowIdentifier}` | Get a descriptive flexfield context for expenses and expense reports |

## e xp en se Df fS eg me nt s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseDffSegments` | Get all descriptive flexfield segments for expenses and expense reports |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseDffSegments/{RowIdentifier}` | Get a descriptive flexfield segment for expenses and expense reports |

## e xp en se Di st ri bu ti on s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseDistributions/{ExpenseDistId}/child/PJCDFF/{ExpenseDistId2}` | Get a project-related descriptive flexfield record for a specific expense distribution identifier |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseDistributions/{ExpenseDistId}/child/PJCDFF` | Create a project-related descriptive flexfield record for a specific expense distribution identifier |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseDistributions` | Create a distribution record for the related expense |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseDistributions` | Get all distribution records for the related expense |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenseDistributions/{ExpenseDistId}/child/PJCDFF/{ExpenseDistId2}` | Update a project-related descriptive flexfield record for a specific expense distribution identifier |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenseDistributions/{ExpenseDistId}/child/PJCDFF` | Get all project-related descriptive flexfield records for a specific expense distribution identifier |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenseDistributions/{ExpenseDistId}` | Get an expense distribution record for a specific expense distribution identifier |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenseDistributions/{ExpenseDistId}` | Update a distribution record for a specific expense distribution identifier |

## e xp en se En te rt ai nm en tP ol ic ie s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseEntertainmentPolicies/{EntertainmentPolicyId}/child/expenseEntertainmentPolicyLines` | Get all expense entertainment policy lines |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseEntertainmentPolicies/{EntertainmentPolicyId}/child/expenseEntertainmentPolicyLines/{PolicyLineId}` | Get an expense entertainment policy line |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseEntertainmentPolicies` | Get all expense entertainment policies |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseEntertainmentPolicies/{EntertainmentPolicyId}` | Get an expense entertainment policy |

## e xp en se Lo ca ti on s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseLocations` | Get all expense location records |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseLocations/{GeographyId}` | Get a single expense location record using the expense location identifier |

## e xp en se Me al sP ol ic ie s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseMealsPolicies/{MealsPolicyId}/child/expenseMealsPolicyLines/{PolicyLineId}` | Get a single expense meals policy line record for a meals policy rate line identifier |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseMealsPolicies/{MealsPolicyId}/child/expenseMealsPolicyLines` | Get all expense meals policy line records |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseMealsPolicies/{MealsPolicyId}` | Get a single expense meals policy record for a meals policy identifier |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseMealsPolicies` | Get all expense meals policy records |

## e xp en se Mi le ag eP ol ic ie s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseMileagePolicies/{MileagePolicyId}/child/expenseMileagePolicyLines/{PolicyLineId}` | Get a single expense mileage policy line record for a given mileage policy rate line identifier |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseMileagePolicies/{MileagePolicyId}/child/expenseMileagePolicyLines` | Get all expense mileage policy records |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseMileagePolicies/{MileagePolicyId}` | Get a single expense mileage policy record for a given mileage policy identifier |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseMileagePolicies` | Get all expense mileage policy line records |

## e xp en se Mi sc Po li ci es

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseMiscPolicies/{MiscPolicyId}/child/expenseMiscPolicyLines` | Get all expense miscellaneous policy lines |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseMiscPolicies/{MiscPolicyId}/child/expenseMiscPolicyLines/{PolicyLineId}` | Get an expense miscellaneous policy line |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseMiscPolicies` | Get all expense miscellaneous policies |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseMiscPolicies/{MiscPolicyId}` | Get an expense miscellaneous policy |

## e xp en se Or ga ni za ti on Se tt in gs

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseOrganizationSettings` | Get all business unit setting records |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseOrganizationSettings/{expenseOrganizationSettingsUniqID}` | Get a business unit setting record |

## e xp en se Pe rD ie mC al cu la ti on s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/expensePerDiemCalculations/{expensePerDiemCalculationsUniqID}` | Get an expense per diem policy |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expensePerDiemCalculations` | Get all expense per diem policies |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expensePerDiemCalculations` | Create a per diem calculation |

## e xp en se Pe rD ie mP ol ic ie s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/expensePerDiemPolicies/{PerDiemPolicyId}/child/expensePerDiemPolLines/{PolicyLineId}` | Get an expense per diem policy line |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expensePerDiemPolicies/{PerDiemPolicyId}/child/expensePerDiemPolValues` | Get all expense per diem policy values |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expensePerDiemPolicies/{PerDiemPolicyId}/child/expensePerDiemPolValues/{PolicyValueId}` | Get an expense per diem policy value |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expensePerDiemPolicies` | Get all expense per diem policies |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expensePerDiemPolicies/{PerDiemPolicyId}` | Get an expense per diem policy |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expensePerDiemPolicies/{PerDiemPolicyId}/child/expensePerDiemPolLines` | Get all expense per diem policy lines |

## e xp en se Pe rs on s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/expensePersons/{PersonId}` | Get an expense person record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expensePersons` | Get all expense person records |

## e xp en se Pr ef er en ce s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/expensePreferences` | Create an expense preferences record for a person |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expensePreferences` | Get all expense preferences records for a person |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expensePreferences/{PersonId}` | Delete an expense preferences record for a person |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expensePreferences/{PersonId}` | Update an expense preferences record for a person |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expensePreferences/{PersonId}` | Get an expense preferences record for a person |

## e xp en se Pr ef er re dT yp es

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/expensePreferredTypes` | Get all preferred expense types |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expensePreferredTypes/{RecordId}` | Get a single preferred expense type |

## e xp en se Pr of il eA tt ri bu te s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseProfileAttributes/{PersonId}` | Get the record of a person's expense profile attributes |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseProfileAttributes` | Get all records of a person's expense profile attributes |

## e xp en se Re po rt s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Attachments` | Create an attachment record for a specific attachment identifier |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Expense/{ExpenseUniqID}/child/Attachments` | Create an attachment record for a specific attachment identifier |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Expense/{ExpenseUniqID}/child/ExpenseDistribution/{ExpenseDistId}/child/PJCDFF` | Create a project-related descriptive flexfield record for a specific expense distribution identifier |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Expense` | Create an expense record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Expense/{ExpenseUniqID}/child/ExpenseDistribution` | Get all distribution records for the related expense |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Expense` | Get all expense records |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/ExpenseReportDff` | Get all expense report header descriptive flexfield records |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/ExpenseReportDff` | Create an expense report descriptive flexfield record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Expense/{ExpenseUniqID}/child/ExpenseDistribution/{ExpenseDistId}/child/PJCDFF/{ExpenseDistId2}` | Get a project-related descriptive flexfield record for a specific expense distribution identifier |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/ExpensePayment/{ExpenseReportId}` | Get an expense report payment record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/ExpensePayment` | Get all expense report payments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Expense/{ExpenseUniqID}/child/ExpenseDistribution` | Create a distribution record for the related expense |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Expense/{ExpenseUniqID}/child/duplicateExpenses/{duplicateExpensesUniqID}` | Get a duplicate expense record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Expense/{ExpenseUniqID}/child/Attachments/{AttachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Expense/{ExpenseUniqID}/child/ExpenseAttendee` | Create an expense attendee record for an expense identifier |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Expense/{ExpenseUniqID}/child/ExpenseAttendee` | Get all expense attendee records for an expense identifier |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Expense/{ExpenseUniqID}/child/ExpenseDff` | Create an expense descriptive flexfield record for a specific expense identifier |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Expense/{ExpenseUniqID}/child/Attachments/{AttachmentsUniqID}` | Get an attachment record related to an expense report |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Expense/{ExpenseUniqID}/child/Attachments/{AttachmentsUniqID}` | DELETE action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Expense/{ExpenseUniqID}/child/Attachments/{AttachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Expense/{ExpenseUniqID}/child/ExpenseDff/{ExpenseId}` | Get a descriptive flexfield record for the related expense |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/processingDetails` | Get all processing detail records of an expense report |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Attachments/{AttachmentsUniqID}` | Get an attachment record related to an expense report |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Attachments/{AttachmentsUniqID}` | DELETE action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Expense/{ExpenseUniqID}/child/expenseErrors/{ErrorSequence}` | Get an expense error record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Expense/{ExpenseUniqID}/child/ExpenseItemization` | Create an itemization record for a specific expense identifier |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseReports` | Get all expense report records |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseReports` | Create an expense report record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Expense/{ExpenseUniqID}/child/ExpenseItemization` | Get all expense itemization records |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Expense/{ExpenseUniqID}/child/matchedExpenses/{MatchReference}` | Get a matched expense record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Attachments/{AttachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/expenseNotes/{expenseNotesUniqID}` | Get a single expense note record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Attachments/{AttachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/expenseNotes/{expenseNotesUniqID}/enclosure/NoteText` | Get a NoteText |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/processingDetails/{processingDetailsUniqID}` | Get a single processing detail record of an expense report |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Expense/{ExpenseUniqID}/child/expenseErrors` | Get all expense error records |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/expenseNotes` | Get all expense note records |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Expense/{ExpenseUniqID}/child/ExpenseDistribution/{ExpenseDistId}/child/PJCDFF` | Get all project-related descriptive flexfield records for a specific expense distribution identifier |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Expense/{ExpenseUniqID}/child/ExpenseAttendee/{ExpenseAttendeeId}` | Update an expense attendee record for a specific expense identifier |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Expense/{ExpenseUniqID}/child/matchedExpenses` | Get all matched expense records |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Expense/{ExpenseUniqID}/child/ExpenseDistribution/{ExpenseDistId}` | Update a distribution record for a specific expense distribution identifier |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Expense/{ExpenseUniqID}/child/ExpenseAttendee/{ExpenseAttendeeId}` | Get an expense attendee record for a specific expense attendee identifier |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Expense/{ExpenseUniqID}/child/ExpenseDff` | Get all descriptive flexfield records for the related expense |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Expense/{ExpenseUniqID}/child/ExpenseDistribution/{ExpenseDistId}/child/PJCDFF/{ExpenseDistId2}` | Update a project-related descriptive flexfield record for a specific expense distribution identifier |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Expense/{ExpenseUniqID}/child/ExpenseDff/{ExpenseId}` | Update a descriptive flexfield record for a specific expense identifier |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Expense/{ExpenseUniqID}/child/ExpenseItemization/{ExpenseId}` | Update an expense itemization record for a specific expense identifier |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Expense/{ExpenseUniqID}/child/ExpenseItemization/{ExpenseId}` | Get an expense itemization record for a specific expense |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Expense/{ExpenseUniqID}/child/ExpenseDistribution/{ExpenseDistId}` | Get an expense distribution record for a specific expense distribution identifier |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/ExpenseReportDff/{ExpenseReportId}` | Update an expense report header descriptive flexfields for a specific expense report identifier |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/action/submit` | Submit an expense report |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Expense/action/sendEmailNotification` | Send email notifications for electronic receipt processing |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/ExpenseReportDff/{ExpenseReportId}` | Get an expense report header descriptive flexfield record for a specific expense report identifier |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Attachments/{AttachmentsUniqID}` | Update an attachment record for a specific attachment identifier |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Attachments` | Get attachment records |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}` | Update an expense report record for a specific expense report identifier |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Expense/{ExpenseUniqID}` | Update an expense record for a specific expense identifier |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Expense/{ExpenseUniqID}/child/Attachments/{AttachmentsUniqID}` | Update an attachment record for a specific attachment identifier |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Expense/{ExpenseUniqID}/child/duplicateExpenses` | Get all duplicate expense records |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Expense/{ExpenseUniqID}/child/duplicateExpenses/{duplicateExpensesUniqID}` | Update a duplicate expense record |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Expense/{ExpenseUniqID}/child/Attachments` | Get attachment records |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Expense/{ExpenseUniqID}/child/matchedExpenses/{MatchReference}` | PATCH action not supported |
| `POST` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/action/processWFAction` | Process a workflow action |
| `POST` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/action/revertCashAdvances` | Remove a cash advance |
| `POST` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}` | Get an expense report record |
| `POST` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/action/applyCashAdvances` | Apply a cash advance |
| `POST` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Expense/{ExpenseUniqID}/action/duplicate` | Create a duplicate of an expense |
| `POST` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Expense/action/notificationRequest` | Initiate a notification request |
| `POST` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Expense/{ExpenseUniqID}` | Get an expense record for a specific expense identifier |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Expense/{ExpenseUniqID}/child/Attachments/{AttachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Expense/{ExpenseUniqID}/child/Attachments/{AttachmentsUniqID}/enclosure/FileContents` | Get a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Attachments/{AttachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/expenseReports/{expenseReportsUniqID}/child/Attachments/{AttachmentsUniqID}/enclosure/FileContents` | Get a FileContents |

## e xp en se s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/Attachments` | Create an attachment record for an attachment identifier |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/ExpenseItemization` | Create an itemization record for an expense identifier |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/ExpenseItemization/{ExpenseId}/child/ExpenseItemizationAttendee` | Get all expense attendee records |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/ExpenseItemization/{ExpenseId}/child/ExpenseItemizationDistribution` | Get all expense distribution records |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/expenses` | Create an expense record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/ExpenseDff` | Create an expense descriptive flexfield record for an expense identifier |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/ExpenseItemization/{ExpenseId}/child/ExpenseItemizationDff` | Create an expense descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/ExpenseItemization/{ExpenseId}/child/ExpenseItemizationDff` | Get all descriptive flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/ExpenseItemization/{ExpenseId}` | DELETE action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/ExpenseAttendee` | Get all expense attendee records for an expense identifier |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/ExpenseAttendee/{ExpenseAttendeeId}/child/ExpenseAttendeeDff` | Get all descriptive flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/ExpenseAttendee/{ExpenseAttendeeId}/child/ExpenseAttendeeDff` | Create an expense descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/ExpenseItemization/{ExpenseId2}/child/ExpenseItemizationAttendee/{ExpenseAttendeeId}/child/ExpenseAttendeeDff` | Create an expense descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/ExpenseItemization/{ExpenseId2}/child/ExpenseItemizationAttendee/{ExpenseAttendeeId}/child/ExpenseAttendeeDff` | Get all descriptive flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/ExpenseDistribution/{ExpenseDistId}/child/PJCDFF` | Get all project-related descriptive flexfield records |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/ExpenseDistribution/{ExpenseDistId}/child/PJCDFF` | Create a project-related descriptive flexfield record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/ExpenseDistribution` | Get all distribution records for the related expense |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/expenseErrors/{ErrorSequence}` | Get an expense error record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/ExpenseDff` | Get all descriptive flexfield records for the related expense |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/ExpenseDistribution` | Create a distribution record for the related expense |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/expenseErrors` | Get all expense error records |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/Attachments/{AttachmentsUniqID}` | DELETE action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/ExpenseItemization/{ExpenseId2}/child/ExpenseItemizationDistribution/{ExpenseDistId}/child/PJCDFF` | Get all project-related descriptive flexfield records |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/ExpenseItemization/{ExpenseId2}/child/ExpenseItemizationDistribution/{ExpenseDistId}/child/PJCDFF` | Create a project-related descriptive flexfield record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/Attachments` | Get all attachment records |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}` | Delete an expense record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/ExpenseItemization/{ExpenseId}/child/ExpenseItemizationAttendee` | Create an expense attendee record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/matchedExpenses/{MatchReference}` | Get a matched expense record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenses` | Get all expense records |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/Attachments/{AttachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/ExpenseAttendee` | Create an expense attendee record for an expense identifier |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/ExpenseItemization/{ExpenseId}/child/ExpenseItemizationDistribution` | Create an expense distribution record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/duplicateExpenses/{duplicateExpensesUniqID}` | Get a duplicate expense record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/Attachments/{AttachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/ExpenseItemization/{ExpenseId2}/child/ExpenseItemizationAttendee/{ExpenseAttendeeId}` | Get an expense attendee record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/ExpenseItemization/{ExpenseId2}/child/ExpenseItemizationDistribution/{ExpenseDistId}` | Get an expense distribution record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/ExpenseItemization` | Get all expense itemization records |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/ExpenseItemization/{ExpenseId2}/child/ExpenseItemizationAttendee/{ExpenseAttendeeId}` | Get an expense attendee record |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/matchedExpenses` | Get all matched expense records |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/ExpenseItemization/{ExpenseId2}/child/ExpenseItemizationDistribution/{ExpenseDistId}` | Update an expense distribution record |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/ExpenseItemization/{ExpenseId2}/child/ExpenseItemizationDistribution/{ExpenseDistId}` | Get an expense distribution record |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/ExpenseItemization/{ExpenseId2}/child/ExpenseItemizationDistribution/{ExpenseDistId}/child/PJCDFF/{ExpenseDistId4}` | Update the project-related descriptive flexfield record for an expense distribution identifier |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/ExpenseItemization/{ExpenseId2}/child/ExpenseItemizationDistribution/{ExpenseDistId}/child/PJCDFF/{ExpenseDistId4}` | Get the project-related descriptive flexfield record for an expense distribution identifier |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/ExpenseItemization/{ExpenseId}/child/ExpenseItemizationDff/{ExpenseId3}` | Update an expense descriptive flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/ExpenseItemization/{ExpenseId2}/child/ExpenseItemizationAttendee/{ExpenseAttendeeId}/child/ExpenseAttendeeDff/{ExpenseAttendeeId4}` | Get an expense descriptive flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/ExpenseItemization/{ExpenseId2}/child/ExpenseItemizationAttendee/{ExpenseAttendeeId}` | Update an expense attendee record |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/ExpenseItemization/{ExpenseId}/child/ExpenseItemizationDff/{ExpenseId3}` | Get an expense descriptive flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/ExpenseItemization/{ExpenseId2}/child/ExpenseItemizationAttendee/{ExpenseAttendeeId}/child/ExpenseAttendeeDff/{ExpenseAttendeeId4}` | Update an expense descriptive flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/duplicateExpenses/{duplicateExpensesUniqID}` | Update a duplicate expense record |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/duplicateExpenses` | Get all duplicate expense records |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/ExpenseAttendee/{ExpenseAttendeeId}` | Update an expense attendee record for an expense identifier |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/ExpenseAttendee/{ExpenseAttendeeId}` | Get an expense attendee record for an expense attendee identifier |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/Attachments/{AttachmentsUniqID}` | Update an attachment record |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenses/action/sendEmailNotification` | Send email notifications for electronic receipt processing |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/ExpenseDistribution/{ExpenseDistId}` | Update the distribution record for an expense distribution identifier |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/Attachments/{AttachmentsUniqID}` | Get the attachment record related to the expense report |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}` | Update an expense record |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/ExpenseAttendee/{ExpenseAttendeeId}/child/ExpenseAttendeeDff/{ExpenseAttendeeId2}` | Get an expense descriptive flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/ExpenseDistribution/{ExpenseDistId}/child/PJCDFF/{ExpenseDistId2}` | Get the project-related descriptive flexfield record for an expense distribution identifier |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/matchedExpenses/{MatchReference}` | PATCH action not supported |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/ExpenseDistribution/{ExpenseDistId}/child/PJCDFF/{ExpenseDistId2}` | Update the project-related descriptive flexfield record for an expense distribution identifier |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/ExpenseItemization/{ExpenseId}` | Update the expense itemization record for an expense identifier |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/ExpenseItemization/{ExpenseId}` | Get an expense itemization record for an expense |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/ExpenseDistribution/{ExpenseDistId}` | Get an expense distribution record for an expense distribution identifier |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/ExpenseDff/{ExpenseId}` | Update the descriptive flexfield record for an expense identifier |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/ExpenseDff/{ExpenseId}` | Get the descriptive flexfield record for the related expense |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/ExpenseAttendee/{ExpenseAttendeeId}/child/ExpenseAttendeeDff/{ExpenseAttendeeId2}` | Update an expense descriptive flexfield |
| `POST` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}` | Get an expense record of an expense identifier |
| `POST` | `/fscmRestApi/resources/11.13.18.05/expenses/action/notificationRequest` | Initiate a notification request |
| `POST` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/action/duplicate` | Create a duplicate of an expense |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/Attachments/{AttachmentsUniqID}/enclosure/FileContents` | Get a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/expenses/{expensesUniqID}/child/Attachments/{AttachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |

## e xp en se Sc an Im ag es

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseScanImages` | GET action for multiple images not supported |
| `POST` | `/fscmRestApi/resources/11.13.18.05/expenseScanImages` | Upload an image to the image recognition application |
| `POST` | `/fscmRestApi/resources/11.13.18.05/expenseScanImages/{DocumentId}` | GET action not supported |

## e xp en se Se tu pO pt io ns

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseSetupOptions` | Get all setup option records |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseSetupOptions/{OptionId}` | Get a setup option record |

## e xp en se Te mp la te s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseTemplates/{ExpenseTemplateId}/child/expenseTypes/{ExpenseTypeId}/child/preferredMerchantLists/{preferredMerchantListsUniqID}` | Get a single preferred merchant list record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseTemplates/{ExpenseTemplateId}/child/expenseTypes/{ExpenseTypeId}/child/preferredAgencyLists` | Get all preferred agency list records |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseTemplates/{ExpenseTemplateId}/child/expenseTypes/{ExpenseTypeId}/child/preferredAgencyLists/{preferredAgencyListsUniqID}` | Get a single preferred agency list record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseTemplates/{ExpenseTemplateId}/child/mobileExpenseTypes` | Get all mobile expense type records |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseTemplates/{ExpenseTemplateId}/child/mobileExpenseTypes/{ExpenseTypeId}` | Get a single mobile expense type record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseTemplates/{ExpenseTemplateId}/child/expenseTypes/{ExpenseTypeId}/child/preferredMerchantLists` | Get all preferred merchant list records |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseTemplates/{ExpenseTemplateId}/child/expenseTypes/{ExpenseTypeId}` | Get a single expense type in an expense template |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseTemplates` | Get all expense templates |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseTemplates/{ExpenseTemplateId}` | Get a single expense template |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseTemplates/{ExpenseTemplateId}/child/expenseTypes/{ExpenseTypeId}/child/itemizedExpenseTypes` | Get all itemized expense type records |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseTemplates/{ExpenseTemplateId}/child/expenseTypes/{ExpenseTypeId}/child/itemizedExpenseTypes/{itemizedExpenseTypesUniqID}` | Get a single itemized expense type record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseTemplates/{ExpenseTemplateId}/child/expenseTypes` | Get all expense types in an expense template record |

## e xp en se Tr av el It in er ar ie s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseTravelItineraries/{expenseTravelItinerariesUniqID}/child/itineraryReservations/{itineraryReservationsUniqID}` | Get a travel itinerary reservation |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseTravelItineraries/{expenseTravelItinerariesUniqID}/child/itineraryReservations` | Create a travel itinerary reservation |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseTravelItineraries/{expenseTravelItinerariesUniqID}/child/itineraryReservations/{itineraryReservationsUniqID}/child/reservationItems/{reservationItemsUniqID}` | Get a travel itinerary reservation item |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseTravelItineraries/{expenseTravelItinerariesUniqID}/child/itineraryReservations/{itineraryReservationsUniqID}/child/reservationItems` | Create a travel itinerary reservation item |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseTravelItineraries` | Create a travel itinerary |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseTravelItineraries/{expenseTravelItinerariesUniqID}` | Get a travel itinerary |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenseTravelItineraries/{expenseTravelItinerariesUniqID}/child/itineraryReservations/{itineraryReservationsUniqID}/child/reservationItems/{reservationItemsUniqID}` | Update a travel itinerary reservation item |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenseTravelItineraries/{expenseTravelItinerariesUniqID}/child/itineraryReservations/{itineraryReservationsUniqID}/child/reservationItems` | Get all travel itinerary reservation items |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenseTravelItineraries` | Get all travel itineraries |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenseTravelItineraries/{expenseTravelItinerariesUniqID}` | Update a travel itinerary |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenseTravelItineraries/{expenseTravelItinerariesUniqID}/child/itineraryReservations/{itineraryReservationsUniqID}` | Update a travel itinerary reservation |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/expenseTravelItineraries/{expenseTravelItinerariesUniqID}/child/itineraryReservations` | Get all travel itinerary reservations |

## e xp en se Ty pe s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseTypes/{ExpenseTypeId}/child/preferredAgencyLists` | Get all preferred agency list records |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseTypes/{ExpenseTypeId}/child/preferredAgencyLists/{preferredAgencyListsUniqID}` | Get a single preferred agency list record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseTypes/{ExpenseTypeId}/child/preferredMerchantLists` | Get all preferred merchant list records |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseTypes/{ExpenseTypeId}/child/preferredMerchantLists/{preferredMerchantListsUniqID}` | Get a single preferred merchant list record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseTypes` | Get all expense type records |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseTypes/{ExpenseTypeId}` | Get a single expense type record for the requested expense type |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseTypes/{ExpenseTypeId}/child/itemizedExpenseTypes` | Get all itemized expense type records |
| `GET` | `/fscmRestApi/resources/11.13.18.05/expenseTypes/{ExpenseTypeId}/child/itemizedExpenseTypes/{itemizedExpenseTypesUniqID}` | Get a single itemized expense type record for the requested itemized expense type |

## e xt er na lB an kA cc ou nt s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/externalBankAccounts/{BankAccountId}/child/attachments` | Create attachments for a bank account |
| `GET` | `/fscmRestApi/resources/11.13.18.05/externalBankAccounts/{BankAccountId}/child/accountOwners` | Create an account owner for an external bank account |
| `GET` | `/fscmRestApi/resources/11.13.18.05/externalBankAccounts/{BankAccountId}/child/accountOwners` | Get all account owners for an external bank account |
| `GET` | `/fscmRestApi/resources/11.13.18.05/externalBankAccounts/{BankAccountId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/externalBankAccounts/{BankAccountId}/child/attachments/{attachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/externalBankAccounts/{BankAccountId}/child/externalBankAccountDff` | Get all external bank accounts descriptive flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/externalBankAccounts/{BankAccountId}/child/intermediaryBankAccounts` | Create an intermediary bank account for an external bank account |
| `GET` | `/fscmRestApi/resources/11.13.18.05/externalBankAccounts/{BankAccountId}/child/intermediaryBankAccounts` | Get all intermediary bank accounts for an external bank account |
| `GET` | `/fscmRestApi/resources/11.13.18.05/externalBankAccounts/{BankAccountId}/child/externalBankAccountDff` | Create descriptive flexfields for an external bank account |
| `GET` | `/fscmRestApi/resources/11.13.18.05/externalBankAccounts` | Get all external bank accounts |
| `GET` | `/fscmRestApi/resources/11.13.18.05/externalBankAccounts/{BankAccountId}/child/attachments/{attachmentsUniqID}` | Delete an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/externalBankAccounts` | Create an external bank account |
| `GET` | `/fscmRestApi/resources/11.13.18.05/externalBankAccounts/{BankAccountId}/child/attachments/{attachmentsUniqID}` | Get a bank account attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/externalBankAccounts/{BankAccountId}` | Get an external bank account |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/externalBankAccounts/{BankAccountId}/child/externalBankAccountDff/{ExtBankAccountId}` | Get an external bank account descriptive flexfields |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/externalBankAccounts/{BankAccountId}/child/externalBankAccountDff/{ExtBankAccountId}` | Update descriptive flexfields for an external bank account |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/externalBankAccounts/{BankAccountId}/child/intermediaryBankAccounts/{IntermediaryAccountId}` | Get an intermediary bank account |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/externalBankAccounts/{BankAccountId}/child/intermediaryBankAccounts/{IntermediaryAccountId}` | Update an intermediary bank account |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/externalBankAccounts/{BankAccountId}/child/attachments` | Get all bank account attachments |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/externalBankAccounts/{BankAccountId}/child/attachments/{attachmentsUniqID}` | Update a bank account attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/externalBankAccounts/{BankAccountId}/child/accountOwners/{AccountOwnerId}` | Get an account owner for an external bank account |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/externalBankAccounts/{BankAccountId}` | Update an external bank account |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/externalBankAccounts/{BankAccountId}/child/accountOwners/{AccountOwnerId}` | Update an account owner for an external bank account |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/externalBankAccounts/{BankAccountId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/externalBankAccounts/{BankAccountId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Get a FileContents |

## f ed Ac co un tA tt ri bu te s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fedAccountAttributes/{AccountAttributeHeaderId}/child/fedAccountAttributeLines` | Create a federal account attribute line |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fedAccountAttributes` | Create a federal account attribute |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedAccountAttributes/{AccountAttributeHeaderId}/child/fedAccountAttributeLines/{AccountAttributeLineId}` | Delete a federal account attribute line |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedAccountAttributes/{AccountAttributeHeaderId}/child/fedAccountAttributeLines/{AccountAttributeLineId}` | Get a federal account attribute line |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedAccountAttributes/{AccountAttributeHeaderId}` | Delete a federal account attribute |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedAccountAttributes/{AccountAttributeHeaderId}` | Get a federal account attribute |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedAccountAttributes/{AccountAttributeHeaderId}/child/fedAccountAttributeLines/{AccountAttributeLineId}` | Update a federal account attribute line |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedAccountAttributes/{AccountAttributeHeaderId}/child/fedAccountAttributeLines` | Get all federal account attribute lines |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedAccountAttributes` | Get all federal account attributes |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedAccountAttributes/{AccountAttributeHeaderId}` | Update a federal account attribute |

## f ed Ac co un tS ym bo ls

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fedAccountSymbols/{FedAccountSymbolId}/child/fedAccountSymbolDFF` | Create a federal account symbol descriptive flexfield |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fedAccountSymbols` | Create a federal account symbol |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedAccountSymbols/{FedAccountSymbolId}/child/fedAccountSymbolDFF/{FedAccountSymbolId2}` | Delete a federal account symbol descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedAccountSymbols/{FedAccountSymbolId}/child/fedAccountSymbolDFF/{FedAccountSymbolId2}` | Get a federal account symbol descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedAccountSymbols/{FedAccountSymbolId}` | Delete a federal account symbol |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedAccountSymbols/{FedAccountSymbolId}` | Get a federal account symbol |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedAccountSymbols/{FedAccountSymbolId}/child/fedAccountSymbolDFF/{FedAccountSymbolId2}` | Update a federal account symbol descriptive flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedAccountSymbols/{FedAccountSymbolId}/child/fedAccountSymbolDFF` | Get all federal account symbols descriptive flexfields |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedAccountSymbols` | Get all federal account symbols |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedAccountSymbols/{FedAccountSymbolId}` | Update a federal account symbol |

## f ed Ac co un tS ym bo ls LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedAccountSymbolsLOV` | Get all federal account symbols |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedAccountSymbolsLOV/{FederalAccountSymbolId}` | Get a federal account symbol |

## f ed Ag en cy Lo ca ti on Co de s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fedAgencyLocationCodes/{AgencyLocationCodeId}/child/fedAgencyLocationCodeDFF` | Create an agency location code descriptive flexfield |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fedAgencyLocationCodes` | Create an agency location code |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedAgencyLocationCodes/{AgencyLocationCodeId}/child/fedAgencyLocationCodeDFF/{AgencyLocationCodeId2}` | Delete an agency location code descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedAgencyLocationCodes/{AgencyLocationCodeId}/child/fedAgencyLocationCodeDFF` | Get all agency location code descriptive flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedAgencyLocationCodes/{AgencyLocationCodeId}` | Delete an agency location code |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedAgencyLocationCodes` | Get all agency location codes |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedAgencyLocationCodes/{AgencyLocationCodeId}/child/fedAgencyLocationCodeDFF/{AgencyLocationCodeId2}` | Update an agency location code descriptive flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedAgencyLocationCodes/{AgencyLocationCodeId}/child/fedAgencyLocationCodeDFF/{AgencyLocationCodeId2}` | Get an agency location code descriptive flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedAgencyLocationCodes/{AgencyLocationCodeId}` | Get an agency location code |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedAgencyLocationCodes/{AgencyLocationCodeId}` | Update an agency location code |

## f ed Ag en cy Lo ca ti on Co de sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedAgencyLocationCodesLOV` | Get all federal agency location codes |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedAgencyLocationCodesLOV/{AgencyLocationCodeId}` | Get a federal agency location code |

## f ed At tr ib ut es

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fedAttributes` | Create a federal attribute |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedAttributes/{FederalAttributeId}` | Get a federal attribute |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedAttributes/{FederalAttributeId}` | Delete a federal attribute |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedAttributes/{FederalAttributeId}` | Update a federal attribute |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedAttributes` | Get all federal attributes |

## f ed At tr ib ut es LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedAttributesLOV` | Get all federal attributes |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedAttributesLOV/{FederalAttributeId}` | Get a federal attribute |

## f ed At tr ib ut eS up pl em en ta lR ul es

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fedAttributeSupplementalRules/{SupplRuleHeaderId}/child/fedAttributeSupplementalRuleLines/{SupplRuleLineId}/child/fedAttributeSupplementalRuleAllocations` | Create all federal attribute supplemental rule allocations |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fedAttributeSupplementalRules/{SupplRuleHeaderId}/child/fedAttributeSupplementalRuleLines` | Create a federal attribute supplemental rule line |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fedAttributeSupplementalRules/{SupplRuleHeaderId}/child/fedAttributeSupplementalRuleLines/{SupplRuleLineId}/child/fedAttributeSupplementalRuleExceptionMessages` | Create all federal attribute supplemental rule exception messages |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fedAttributeSupplementalRules/{SupplRuleHeaderId}/child/fedAttributeSupplementalRuleLines/{SupplRuleLineId}/child/fedAttributeSupplementalRuleFilters` | Create a federal attribute supplemental rule filter |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fedAttributeSupplementalRules` | Create a federal attribute supplemental rule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedAttributeSupplementalRules/{SupplRuleHeaderId}/child/fedAttributeSupplementalRuleLines/{SupplRuleLineId}/child/fedAttributeSupplementalRuleExceptionMessages/{ExceptionUniqueId}` | Get a federal attribute supplemental rule exception message |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedAttributeSupplementalRules/{SupplRuleHeaderId}/child/fedAttributeSupplementalRuleLines/{SupplRuleLineId}/child/fedAttributeSupplementalRuleAllocations/{SupplRuleAllocationId}` | Get a federal attribute supplemental rule allocation |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedAttributeSupplementalRules/{SupplRuleHeaderId}/child/fedAttributeSupplementalRuleLines/{SupplRuleLineId}/child/fedAttributeSupplementalRuleAllocations/{SupplRuleAllocationId}` | Delete a federal attribute supplemental rule allocation |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedAttributeSupplementalRules/{SupplRuleHeaderId}/child/fedAttributeSupplementalRuleLines/{SupplRuleLineId}/child/fedAttributeSupplementalRuleFilters/{SupplRuleFilterId}` | Delete a federal attribute supplemental rule filter |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedAttributeSupplementalRules/{SupplRuleHeaderId}/child/fedAttributeSupplementalRuleLines/{SupplRuleLineId}/child/fedAttributeSupplementalRuleExceptionMessages` | Get all federal attribute supplemental rule exception messages |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedAttributeSupplementalRules/{SupplRuleHeaderId}/child/fedAttributeSupplementalRuleLines/{SupplRuleLineId}/child/fedAttributeSupplementalRuleExceptionMessages/{ExceptionUniqueId}` | Delete a federal attribute supplemental rule exception message |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedAttributeSupplementalRules/{SupplRuleHeaderId}/child/fedAttributeSupplementalRuleLines/{SupplRuleLineId}/child/fedAttributeSupplementalRuleFilters/{SupplRuleFilterId}` | Get a federal attribute supplemental rule filter |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedAttributeSupplementalRules/{SupplRuleHeaderId}/child/fedAttributeSupplementalRuleLines/{SupplRuleLineId}` | Delete a federal attribute supplemental rule line |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedAttributeSupplementalRules/{SupplRuleHeaderId}/child/fedAttributeSupplementalRuleLines/{SupplRuleLineId}` | Get a federal attribute supplemental rule line |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedAttributeSupplementalRules/{SupplRuleHeaderId}` | Get a federal attribute supplemental rule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedAttributeSupplementalRules/{SupplRuleHeaderId}` | Delete a federal attribute supplemental rule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedAttributeSupplementalRules/{SupplRuleHeaderId}/child/fedAttributeSupplementalRuleLines/{SupplRuleLineId}/child/fedAttributeSupplementalRuleFilters` | Get all federal attribute supplemental rule filters |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedAttributeSupplementalRules` | Get all federal attribute supplemental rules |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedAttributeSupplementalRules/{SupplRuleHeaderId}/child/fedAttributeSupplementalRuleLines/{SupplRuleLineId}/child/fedAttributeSupplementalRuleFilters/{SupplRuleFilterId}` | Update a federal attribute supplemental rule filter |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedAttributeSupplementalRules/{SupplRuleHeaderId}/child/fedAttributeSupplementalRuleLines/{SupplRuleLineId}` | Update a federal attribute supplemental rule line |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedAttributeSupplementalRules/{SupplRuleHeaderId}/child/fedAttributeSupplementalRuleLines` | Get all federal attribute supplemental rule lines |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedAttributeSupplementalRules/{SupplRuleHeaderId}/child/fedAttributeSupplementalRuleLines/{SupplRuleLineId}/child/fedAttributeSupplementalRuleAllocations` | Get all federal attribute supplemental rule allocations |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedAttributeSupplementalRules/{SupplRuleHeaderId}/child/fedAttributeSupplementalRuleLines/{SupplRuleLineId}/child/fedAttributeSupplementalRuleAllocations/{SupplRuleAllocationId}` | Update a federal attribute supplemental rule allocation |
| `POST` | `/fscmRestApi/resources/11.13.18.05/fedAttributeSupplementalRules/action/validateLines` | Validate lines of a federal attribute supplemental rule |
| `POST` | `/fscmRestApi/resources/11.13.18.05/fedAttributeSupplementalRules/{SupplRuleHeaderId}` | Update a federal attribute supplemental rule |

## f ed BE TC Ad ju st me nt sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedBETCAdjustmentsLOV/{BusinessEventTypeId}` | Get an Adjustment BETC |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedBETCAdjustmentsLOV` | Get all Adjustment BETC |

## f ed Bu dg et Co nt ro lT re eL ab el sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedBudgetControlTreeLabelsLOV` | Get all federal budget control tree labels |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedBudgetControlTreeLabelsLOV/{fedBudgetControlTreeLabelsLOVUniqID}` | Get a federal budget control tree label |

## f ed Bu dg et Co nt ro lT re eN od es LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedBudgetControlTreeNodesLOV` | Get all federal budget control tree nodes |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedBudgetControlTreeNodesLOV/{fedBudgetControlTreeNodesLOVUniqID}` | Get a federal budget control tree node |

## f ed Bu dg et Co nt ro lT re es LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedBudgetControlTreesLOV` | Get all federal budget control trees |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedBudgetControlTreesLOV/{fedBudgetControlTreesLOVUniqID}` | Get a federal budget control tree |

## f ed Bu dg et Co nt ro lT re eV er si on sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedBudgetControlTreeVersionsLOV` | Get all federal budget control tree versions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedBudgetControlTreeVersionsLOV/{fedBudgetControlTreeVersionsLOVUniqID}` | Get a federal budget control tree version |

## f ed Bu dg et Ex ec ut io nC on tr ol s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fedBudgetExecutionControls/{fedBudgetExecutionControlsUniqID}/child/fedBudgetControlSegments` | Create a budget execution control segment |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fedBudgetExecutionControls` | Create a budget execution control |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedBudgetExecutionControls/{fedBudgetExecutionControlsUniqID}/child/fedBudgetControlSegments/{KeySegmentId}` | Delete a budget execution control segment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedBudgetExecutionControls/{fedBudgetExecutionControlsUniqID}/child/fedBudgetControlSegments/{KeySegmentId}` | Get a budget execution control segment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedBudgetExecutionControls/{fedBudgetExecutionControlsUniqID}` | Delete a budget execution control |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedBudgetExecutionControls/{fedBudgetExecutionControlsUniqID}` | Get a budget execution control |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedBudgetExecutionControls/{fedBudgetExecutionControlsUniqID}/child/fedBudgetControlSegments/{KeySegmentId}` | Update a budget execution control segment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedBudgetExecutionControls/{fedBudgetExecutionControlsUniqID}/child/fedBudgetControlSegments` | Get all budget execution control segments |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedBudgetExecutionControls` | Get all budget execution controls |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedBudgetExecutionControls/{fedBudgetExecutionControlsUniqID}` | Update a budget execution control |

## f ed Bu dg et Le ve lO pe ra ti on sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedBudgetLevelOperationsLOV` | Get all budget level operations |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedBudgetLevelOperationsLOV/{BudgetLevelId}` | Get a budget level operation |

## f ed Bu dg et Tr an sa ct io nT yp es

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fedBudgetTransactionTypes/{TransactionTypeId}/child/fedBudgetTransactionTypeAccounts` | Create a budget transaction type account |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fedBudgetTransactionTypes/{TransactionTypeId}/child/fedBudgetTransactionTypeDFF` | Create a descriptive flexfield for a budget transaction type |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fedBudgetTransactionTypes/{TransactionTypeId}/child/fedBudgetTransactionTypeAccounts/{AccountAssignmentId}/child/fedBudgetTransactionAccountDFF` | Create a descriptive flexfield for a budget transaction type account |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fedBudgetTransactionTypes` | Create a budget transaction type |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedBudgetTransactionTypes/{TransactionTypeId}/child/fedBudgetTransactionTypeDFF/{TransactionTypeId2}` | Delete a descriptive flexfield for a budget transaction type |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedBudgetTransactionTypes/{TransactionTypeId}/child/fedBudgetTransactionTypeAccounts/{AccountAssignmentId}` | Delete a budget transaction type account |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedBudgetTransactionTypes/{TransactionTypeId}/child/fedBudgetTransactionTypeAccounts/{AccountAssignmentId}/child/fedBudgetTransactionAccountDFF/{AccountAssignmentId2}` | Delete a descriptive flexfield for a budget transaction type account |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedBudgetTransactionTypes/{TransactionTypeId}/child/fedBudgetTransactionTypeAccounts/{AccountAssignmentId}/child/fedBudgetTransactionAccountDFF/{AccountAssignmentId2}` | Get a descriptive flexfield for a budget transaction type account |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedBudgetTransactionTypes/{TransactionTypeId}` | Get a budget transaction type |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedBudgetTransactionTypes/{TransactionTypeId}/child/fedBudgetTransactionTypeDFF/{TransactionTypeId2}` | Get a descriptive flexfield for a budget transaction type |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedBudgetTransactionTypes/{TransactionTypeId}/child/fedBudgetTransactionTypeAccounts/{AccountAssignmentId}` | Get a budget transaction type account |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedBudgetTransactionTypes/{TransactionTypeId}` | Delete a budget transaction type |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedBudgetTransactionTypes/{TransactionTypeId}/child/fedBudgetTransactionTypeDFF/{TransactionTypeId2}` | Update a descriptive flexfield for a budget transaction type |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedBudgetTransactionTypes/{TransactionTypeId}/child/fedBudgetTransactionTypeDFF` | Get all descriptive flexfields for a budget transaction type |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedBudgetTransactionTypes/{TransactionTypeId}/child/fedBudgetTransactionTypeAccounts/{AccountAssignmentId}/child/fedBudgetTransactionAccountDFF/{AccountAssignmentId2}` | Update a descriptive flexfield for a budget transaction type account |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedBudgetTransactionTypes/{TransactionTypeId}` | Update a budget transaction type |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedBudgetTransactionTypes` | Get all budget transaction types |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedBudgetTransactionTypes/{TransactionTypeId}/child/fedBudgetTransactionTypeAccounts` | Get all budget transaction type accounts |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedBudgetTransactionTypes/{TransactionTypeId}/child/fedBudgetTransactionTypeAccounts/{AccountAssignmentId}/child/fedBudgetTransactionAccountDFF` | Get all descriptive flexfields for a budget transaction type account |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedBudgetTransactionTypes/{TransactionTypeId}/child/fedBudgetTransactionTypeAccounts/{AccountAssignmentId}` | Update a budget transaction type account |

## f ed Bu si ne ss Ev en tT yp eC od es

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fedBusinessEventTypeCodes/{BusinessEventTypeId}/child/fedBusinessEventTypeCodeDFF` | Create a business event type code descriptive flexfield |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fedBusinessEventTypeCodes` | Create business event type codes |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedBusinessEventTypeCodes/{BusinessEventTypeId}/child/fedBusinessEventTypeCodeDFF/{BusinessEventTypeId2}` | Delete a business event type code descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedBusinessEventTypeCodes/{BusinessEventTypeId}/child/fedBusinessEventTypeCodeDFF/{BusinessEventTypeId2}` | Get a business event type code descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedBusinessEventTypeCodes/{BusinessEventTypeId}` | Delete a business event type code |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedBusinessEventTypeCodes/{BusinessEventTypeId}` | Get a business event type code |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedBusinessEventTypeCodes/{BusinessEventTypeId}/child/fedBusinessEventTypeCodeDFF/{BusinessEventTypeId2}` | Update a business event type code descriptive flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedBusinessEventTypeCodes/{BusinessEventTypeId}/child/fedBusinessEventTypeCodeDFF` | Get all business event type codes descriptive flexfields |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedBusinessEventTypeCodes` | Get all business event type codes |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedBusinessEventTypeCodes/{BusinessEventTypeId}` | Update a business event type code |

## f ed Bu si ne ss Ev en tT yp eC od es LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedBusinessEventTypeCodesLOV` | Get all BETC |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedBusinessEventTypeCodesLOV/{BusinessEventTypeId}` | Get a BETC |

## f ed Cl os in gS eg me nt sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedClosingSegmentsLOV` | Get all federal closing segments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedClosingSegmentsLOV/{StructureId}` | Get a federal closing segment |

## f ed CT AF BW TA cc ou nt De fi ni ti on s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fedCTAFBWTAccountDefinitions` | Create a CTA FBWT account definition |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedCTAFBWTAccountDefinitions/{CTAFBWTAccountDefId}` | Get a CTA FBWT account definition |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedCTAFBWTAccountDefinitions/{CTAFBWTAccountDefId}` | Delete a CTA FBWT account definition |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedCTAFBWTAccountDefinitions/{CTAFBWTAccountDefId}` | Update a CTA FBWT account definition |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedCTAFBWTAccountDefinitions` | Get all CTA FBWT account definitions |

## f ed DA TA Ac tA mo un tD ef in it io nC od es LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedDATAActAmountDefinitionCodesLOV` | Get all federal DATA Act amount definition codes |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedDATAActAmountDefinitionCodesLOV/{DATAActDefHeaderId}` | Get a federal DATA Act amount definition code |

## f ed DA TA Ac tB al an ce s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fedDATAActBalances/{BalanceHeaderId}/child/fedDATAActBalanceCalculationTotals` | Create a federal DATA Act balance calculation |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fedDATAActBalances/{BalanceHeaderId}/child/fedDATAActBalanceCalculationUSSGLAccounts` | Create a federal DATA Act balance calculation USSGL account |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fedDATAActBalances` | Create a federal DATA Act balance |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedDATAActBalances/{BalanceHeaderId}/child/fedDATAActBalanceCalculationUSSGLAccounts/{BalanceCalculationUSSGLId}` | Delete a federal DATA Act balance calculation USSGL account |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedDATAActBalances/{BalanceHeaderId}/child/fedDATAActBalanceCalculationTotals/{BalanceCalculationId}` | Get a federal DATA Act balance calculation |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedDATAActBalances/{BalanceHeaderId}/child/fedDATAActBalanceCalculationUSSGLAccounts/{BalanceCalculationUSSGLId}` | Get a federal DATA Act balance calculation USSGL account |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedDATAActBalances/{BalanceHeaderId}/child/fedDATAActBalanceCalculationTotals/{BalanceCalculationId}` | Delete a federal DATA Act balance calculation |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedDATAActBalances/{BalanceHeaderId}` | Delete a federal DATA Act balance |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedDATAActBalances/{BalanceHeaderId}` | Get a federal DATA Act balance |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedDATAActBalances/{BalanceHeaderId}/child/fedDATAActBalanceCalculationUSSGLAccounts/{BalanceCalculationUSSGLId}` | Update a federal DATA Act balance calculation USSGL account |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedDATAActBalances/{BalanceHeaderId}/child/fedDATAActBalanceCalculationUSSGLAccounts` | Get all federal DATA Act balance calculation USSGL accounts |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedDATAActBalances/{BalanceHeaderId}/child/fedDATAActBalanceCalculationTotals` | Get all federal DATA Act balance calculations |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedDATAActBalances/{BalanceHeaderId}` | Update a federal DATA Act balance |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedDATAActBalances` | Get all federal DATA Act balances |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedDATAActBalances/{BalanceHeaderId}/child/fedDATAActBalanceCalculationTotals/{BalanceCalculationId}` | Update a federal DATA Act balance calculation |

## f ed DA TA Ac tB al an ce sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedDATAActBalancesLOV` | Get all federal DATA Act balances |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedDATAActBalancesLOV/{BalanceHeaderId}` | Get a federal DATA Act balance |

## f ed DA TA Ac tC al cu la ti on Da te Ra ng es LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedDATAActCalculationDateRangesLOV` | Get all federal DATA Act calculation date ranges |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedDATAActCalculationDateRangesLOV/{fedDATAActCalculationDateRangesLOVUniqID}` | Get a federal DATA Act calculation date range |

## f ed DA TA Ac tF il eC ri te ri a

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fedDATAActFileCriteria` | Create all federal DATA Act file criteria |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedDATAActFileCriteria/{FileCriteriaId}` | Get a federal DATA Act file criteria |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedDATAActFileCriteria/{FileCriteriaId}` | Delete a federal DATA Act file criteria |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedDATAActFileCriteria/{FileCriteriaId}` | Update a federal DATA Act file criteria |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedDATAActFileCriteria` | Get all federal DATA Act file criteria |

## f ed DA TA Ac tF il eS eq ue nc es

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fedDATAActFileSequences` | Create all federal DATA Act file sequences |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedDATAActFileSequences/{fedDATAActFileSequencesUniqID}` | Get a federal DATA Act file sequence |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedDATAActFileSequences/{fedDATAActFileSequencesUniqID}` | Delete a federal DATA Act file sequence |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedDATAActFileSequences/{fedDATAActFileSequencesUniqID}` | Update a federal DATA Act file sequence |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedDATAActFileSequences` | Get all federal DATA Act file sequences |

## f ed Fu nd At tr ib ut es

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fedFundAttributes/{FundValueId}/child/fedFundAttributeDFF` | Create a fund attribute descriptive flexfield |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fedFundAttributes` | Create fund attributes |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedFundAttributes/{FundValueId}/child/fedFundAttributeDFF/{FundValueId2}` | Delete a fund attribute descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedFundAttributes/{FundValueId}/child/fedFundAttributeDFF/{FundValueId2}` | Get a fund attribute descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedFundAttributes/{FundValueId}` | Delete a fund attribute |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedFundAttributes/{FundValueId}` | Get a fund attribute |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedFundAttributes/{FundValueId}/child/fedFundAttributeDFF/{FundValueId2}` | Update a fund attribute descriptive flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedFundAttributes/{FundValueId}/child/fedFundAttributeDFF` | Get all fund attributes descriptive flexfields |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedFundAttributes` | Get all fund attributes |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedFundAttributes/{FundValueId}` | Update a fund attribute |

## f ed Fu nd At tr ib ut es LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedFundAttributesLOV` | Get all federal fund attributes |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedFundAttributesLOV/{fedFundAttributesLOVUniqID}` | Get a federal fund attribute |

## f ed Gr ou pB ud ge tL ev el sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedGroupBudgetLevelsLOV` | Get all federal group budget levels |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedGroupBudgetLevelsLOV/{GroupBeLevelId}` | Get a federal group budget level |

## f ed Gr ou ps

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fedGroups/{LedgerGroupId}/child/fedGroupBudgetLevels` | Create federal group budget levels |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fedGroups` | Create a federal group |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedGroups/{LedgerGroupId}/child/fedGroupBudgetLevels/{GroupBeLevelId}` | Delete a federal group budget level |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedGroups/{LedgerGroupId}/child/fedGroupBudgetLevels/{GroupBeLevelId}` | Get a federal group budget level |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedGroups/{LedgerGroupId}` | Delete a federal group |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedGroups/{LedgerGroupId}` | Get a federal group |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedGroups/{LedgerGroupId}/child/fedGroupBudgetLevels/{GroupBeLevelId}` | Update a federal group budget level |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedGroups/{LedgerGroupId}/child/fedGroupBudgetLevels` | Get all federal group budget levels |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedGroups` | Get all federal groups |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedGroups/{LedgerGroupId}` | Update a federal group |

## f ed Gr ou ps LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedGroupsLOV` | Get all Federal groups |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedGroupsLOV/{LedgerGroupId}` | Get a Federal group |

## f ed GT AS Ac cu mu la ti on Ba la nc es

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedGTASAccumulationBalances` | Get all federal GTAS accumulation balances |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedGTASAccumulationBalances/{TransactionBalanceId}` | Get a federal GTAS accumulation balance |

## f ed IP AC Tr an sa ct io nD at a

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedIPACTransactionData/{TransactionDataId}` | Get an IPAC transaction record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedIPACTransactionData` | Get all IPAC transaction records |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedIPACTransactionData` | Create all IPAC transaction records |

## f ed Le dg er Bu dg et Le ve ls LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedLedgerBudgetLevelsLOV` | Get all federal ledger budget levels |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedLedgerBudgetLevelsLOV/{BudgetLevelId}` | Get a federal ledger budget level |

## f ed Le dg er Gr ou pT re es LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedLedgerGroupTreesLOV` | Get all federal ledger group trees |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedLedgerGroupTreesLOV/{fedLedgerGroupTreesLOVUniqID}` | Get a federal ledger group tree |

## f ed Le dg er Op ti on s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fedLedgerOptions` | Create a ledger option |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fedLedgerOptions/{LevelOptionId}/child/fedLedgerOptionDFF` | Create a descriptive flexfield for a ledger option |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedLedgerOptions/{LevelOptionId}/child/fedLedgerOptionDFF/{LevelOptionId2}` | Get a descriptive flexfield for a ledger option |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedLedgerOptions/{LevelOptionId}/child/fedLedgerOptionDFF/{LevelOptionId2}` | Delete a descriptive flexfield for a ledger option |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedLedgerOptions/{LevelOptionId}/child/fedLedgerOptionBudgetLevels/{BudgetLevelId}` | Get a ledger option budget level |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedLedgerOptions/{LevelOptionId}` | Delete a ledger option |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedLedgerOptions/{LevelOptionId}` | Get a ledger option |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedLedgerOptions/{LevelOptionId}/child/fedLedgerOptionDFF` | Get all descriptive flexfields for a ledger option |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedLedgerOptions/{LevelOptionId}/child/fedLedgerOptionBudgetLevels/{BudgetLevelId}` | Update a ledger option budget level |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedLedgerOptions/{LevelOptionId}` | Update a ledger option |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedLedgerOptions` | Get all ledger options |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedLedgerOptions/{LevelOptionId}/child/fedLedgerOptionBudgetLevels` | Get all ledger option budget levels |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedLedgerOptions/{LevelOptionId}/child/fedLedgerOptionDFF/{LevelOptionId2}` | Update a descriptive flexfield for a ledger option |
| `POST` | `/fscmRestApi/resources/11.13.18.05/fedLedgerOptions/action/populateAttributes` | Associate attributes |

## f ed Le dg er Op ti on sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedLedgerOptionsLOV` | Get all ledger options |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedLedgerOptionsLOV/{fedLedgerOptionsLOVUniqID}` | Get a ledger option |

## f ed Na tu ra lA cc ou nt Va lu eS et sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedNaturalAccountValueSetsLOV` | Get all federal natural account value sets |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedNaturalAccountValueSetsLOV/{ValueSetId}` | Get a federal natural account value set |

## f ed Pa rt ia lS eg me nt sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedPartialSegmentsLOV` | Get all partial segments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedPartialSegmentsLOV/{fedPartialSegmentsLOVUniqID}` | Get a partial segment |

## f ed Pa ym en tF or ma tM ap pi ng s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fedPaymentFormatMappings/{FormatMappingId}/child/fedPaymentFormatMappingDFF` | Create a payment format mapping descriptive flexfield |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fedPaymentFormatMappings` | Create payment format mappings |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedPaymentFormatMappings/{FormatMappingId}/child/fedPaymentFormatMappingDFF/{FormatMappingId2}` | Delete descriptive flexfield for a payment format mapping |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedPaymentFormatMappings/{FormatMappingId}/child/fedPaymentFormatMappingDFF` | Get all descriptive flexfields for a payment format mapping |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedPaymentFormatMappings/{FormatMappingId}` | Delete a payment format mapping |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedPaymentFormatMappings/{FormatMappingId}` | Get a payment format mapping |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedPaymentFormatMappings/{FormatMappingId}/child/fedPaymentFormatMappingDFF/{FormatMappingId2}` | Update descriptive flexfield for a payment format mapping |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedPaymentFormatMappings/{FormatMappingId}/child/fedPaymentFormatMappingDFF/{FormatMappingId2}` | Get descriptive flexfield for a payment format mapping |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedPaymentFormatMappings` | Get all payment format mappings |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedPaymentFormatMappings/{FormatMappingId}` | Update a payment format mapping |

## f ed SA MA cc ou nt Ad dr es sS et s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fedSAMAccountAddressSets` | Create SAM account address set assignments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedSAMAccountAddressSets/{fedSAMAccountAddressSetsUniqID}` | Get a SAM account address set assignment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedSAMAccountAddressSets/{fedSAMAccountAddressSetsUniqID}` | Delete a SAM account address set assignment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedSAMAccountAddressSets/{fedSAMAccountAddressSetsUniqID}` | Update a SAM account address set assignment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedSAMAccountAddressSets` | Get all SAM account address set assignments |

## f ed SA MV en do rB us in es sU ni ts

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fedSAMVendorBusinessUnits` | Create a SAM trading partner business unit assignment record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedSAMVendorBusinessUnits/{SamBUAssignmentId}` | Get a SAM trading partner business unit assignment record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedSAMVendorBusinessUnits/{SamBUAssignmentId}` | Delete a SAM trading partner business unit assignment record |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedSAMVendorBusinessUnits/{SamBUAssignmentId}` | Update a SAM trading partner business unit assignment record |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedSAMVendorBusinessUnits` | Get all SAM trading partner business unit assignment records |

## f ed SA MV en do rD et ai ls

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fedSAMVendorDetails/{SamTradingPartnerId}/child/fedSAMExceptionMessages` | Create a SAM exception message record |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fedSAMVendorDetails` | Create a SAM trading partner details record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedSAMVendorDetails/{SamTradingPartnerId}` | Get a SAM trading partner details record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedSAMVendorDetails` | Get all SAM trading partner details |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedSAMVendorDetails/{SamTradingPartnerId}/child/fedSAMExceptionMessages/{ExceptionUniqueId}` | Delete a SAM exception message record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedSAMVendorDetails/{SamTradingPartnerId}/child/fedSAMExceptionMessages/{ExceptionUniqueId}` | Get a SAM exception message record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedSAMVendorDetails/action/unAssignSupplier` | Dissociate a supplier |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedSAMVendorDetails/{SamTradingPartnerId}/child/fedSAMExceptionMessages` | Get all SAM exception message records |
| `POST` | `/fscmRestApi/resources/11.13.18.05/fedSAMVendorDetails/action/submitCustomerParty` | Associate a customer |
| `POST` | `/fscmRestApi/resources/11.13.18.05/fedSAMVendorDetails/action/submit` | Associate a supplier |
| `POST` | `/fscmRestApi/resources/11.13.18.05/fedSAMVendorDetails/action/unassignCustomerParty` | Dissociate a customer |
| `POST` | `/fscmRestApi/resources/11.13.18.05/fedSAMVendorDetails/{SamTradingPartnerId}` | Delete a SAM trading partner details record |

## f ed Se tu pO pt io ns

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fedSetupOptions/{ConfigOptionId}/child/fedSetupOptionDFF` | Create a setup option descriptive flexfield |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fedSetupOptions` | Create setup options |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedSetupOptions/{ConfigOptionId}/child/fedSetupOptionDFF/{ConfigOptionId2}` | Delete a setup option descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedSetupOptions/{ConfigOptionId}/child/fedSetupOptionDFF/{ConfigOptionId2}` | Get a setup option descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedSetupOptions/{ConfigOptionId}` | Delete a setup option |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedSetupOptions/{ConfigOptionId}` | Get a setup option |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedSetupOptions/{ConfigOptionId}/child/fedSetupOptionDFF/{ConfigOptionId2}` | Update a setup option descriptive flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedSetupOptions/{ConfigOptionId}/child/fedSetupOptionDFF` | Get all setup options descriptive flexfields |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedSetupOptions` | Get all setup options |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedSetupOptions/{ConfigOptionId}` | Update a setup option |

## f ed TA SB us in es sE ve nt Ty pe Co de sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedTASBusinessEventTypeCodesLOV` | Get all treasury account symbols business event type codes |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedTASBusinessEventTypeCodesLOV/{TasBetcMapId}` | Get a treasury account symbol business event type code |

## f ed Tr an sa ct io nT yp es LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedTransactionTypesLOV` | Get all federal transaction types |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedTransactionTypesLOV/{TransactionTypeId}` | Get a federal transaction type |

## f ed Tr ea su ry Ac co un tS ym bo ls

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fedTreasuryAccountSymbols/{TreasuryAccountSymbolId}/child/fedTASBusinessEventTypeCodes` | Create treasury account symbols business event type codes |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fedTreasuryAccountSymbols/{TreasuryAccountSymbolId}/child/fedTreasuryAccountSymbolDFF` | Create a treasury account symbol descriptive flexfield |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fedTreasuryAccountSymbols/{TreasuryAccountSymbolId}/child/fedTASBusinessEventTypeCodes/{TasBetcMapId}/child/fedTASBusinessEventTypeCodeDFF` | Create a TAS BETC descriptive flexfield |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fedTreasuryAccountSymbols` | Create treasury account symbols |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedTreasuryAccountSymbols/{TreasuryAccountSymbolId}/child/fedTreasuryAccountSymbolDFF/{TreasuryAccountSymbolId2}` | Delete a treasury account symbol descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedTreasuryAccountSymbols/{TreasuryAccountSymbolId}/child/fedTASBusinessEventTypeCodes/{TasBetcMapId}` | Delete a treasury account symbol business event type code |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedTreasuryAccountSymbols/{TreasuryAccountSymbolId}/child/fedTASBusinessEventTypeCodes/{TasBetcMapId}/child/fedTASBusinessEventTypeCodeDFF/{TasBetcMapId2}` | Delete a TAS BETC descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedTreasuryAccountSymbols/{TreasuryAccountSymbolId}/child/fedTASBusinessEventTypeCodes/{TasBetcMapId}/child/fedTASBusinessEventTypeCodeDFF/{TasBetcMapId2}` | Get a TAS BETC descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedTreasuryAccountSymbols/{TreasuryAccountSymbolId}` | Get a treasury account symbol |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedTreasuryAccountSymbols/{TreasuryAccountSymbolId}/child/fedTreasuryAccountSymbolDFF/{TreasuryAccountSymbolId2}` | Get a treasury account symbol descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedTreasuryAccountSymbols/{TreasuryAccountSymbolId}/child/fedTASBusinessEventTypeCodes/{TasBetcMapId}` | Get a treasury account symbol business event type code |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedTreasuryAccountSymbols/{TreasuryAccountSymbolId}` | Delete a treasury account symbol |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedTreasuryAccountSymbols/{TreasuryAccountSymbolId}/child/fedTreasuryAccountSymbolDFF/{TreasuryAccountSymbolId2}` | Update a treasury account symbol descriptive flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedTreasuryAccountSymbols/{TreasuryAccountSymbolId}/child/fedTreasuryAccountSymbolDFF` | Get all treasury account symbols descriptive flexfields |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedTreasuryAccountSymbols/{TreasuryAccountSymbolId}/child/fedTASBusinessEventTypeCodes/{TasBetcMapId}/child/fedTASBusinessEventTypeCodeDFF/{TasBetcMapId2}` | Update a TAS BETC descriptive flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedTreasuryAccountSymbols/{TreasuryAccountSymbolId}` | Update a treasury account symbol |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedTreasuryAccountSymbols` | Get all treasury account symbols |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedTreasuryAccountSymbols/{TreasuryAccountSymbolId}/child/fedTASBusinessEventTypeCodes` | Get all treasury account symbols business event type codes |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedTreasuryAccountSymbols/{TreasuryAccountSymbolId}/child/fedTASBusinessEventTypeCodes/{TasBetcMapId}/child/fedTASBusinessEventTypeCodeDFF` | Get all TAS BETC descriptive flexfields |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedTreasuryAccountSymbols/{TreasuryAccountSymbolId}/child/fedTASBusinessEventTypeCodes/{TasBetcMapId}` | Update a treasury account symbol business event type code |

## f ed Tr ea su ry Ac co un tS ym bo ls LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedTreasuryAccountSymbolsLOV` | Get all treasury account symbols |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedTreasuryAccountSymbolsLOV/{TreasuryAccountSymbolId}` | Get a treasury account symbol |

## f ed Tr ea su ry Co nf ir ma ti on Pa ym en ts

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedTreasuryConfirmationPayments` | Get all treasury confirmation payments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedTreasuryConfirmationPayments/{CheckId}` | Get a treasury confirmation payment |

## f ed Tr ea su ry Co nf ir ma ti on Sc he du le s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fedTreasuryConfirmationSchedules/{TreasuryConfirmationId}/child/fedTreasuryCheckRanges` | Create a federal treasury check range |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fedTreasuryConfirmationSchedules/action/confirm` | Confirm a federal treasury confirmation schedule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedTreasuryConfirmationSchedules/{TreasuryConfirmationId}/child/fedTreasuryCheckRanges/{CheckRangeId}` | Get a federal treasury check range |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedTreasuryConfirmationSchedules/{TreasuryConfirmationId}/child/fedTreasuryCheckRanges/{CheckRangeId}` | Delete a federal treasury check range |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedTreasuryConfirmationSchedules/{TreasuryConfirmationId}` | Delete a federal treasury confirmation schedule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedTreasuryConfirmationSchedules/{TreasuryConfirmationId}` | Get a federal treasury confirmation schedule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedTreasuryConfirmationSchedules/{TreasuryConfirmationId}/child/fedTreasuryCheckRanges/{CheckRangeId}` | Update a federal treasury check range |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedTreasuryConfirmationSchedules/{TreasuryConfirmationId}/child/fedTreasuryCheckRanges` | Get all federal treasury check ranges |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedTreasuryConfirmationSchedules/action/backOut` | Reverse a federal treasury confirmation schedule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedTreasuryConfirmationSchedules/{TreasuryConfirmationId}` | Update a federal treasury confirmation schedule |
| `POST` | `/fscmRestApi/resources/11.13.18.05/fedTreasuryConfirmationSchedules` | Get all federal treasury confirmation schedules |

## f ed Tr ea su ry Of fs et Am ou nt s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fedTreasuryOffsetAmounts` | Create a treasury offset amount |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedTreasuryOffsetAmounts/{OffsetId}` | Get a treasury offset amount |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedTreasuryOffsetAmounts/{OffsetId}` | Delete a treasury offset amount |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedTreasuryOffsetAmounts/{OffsetId}` | Update a treasury offset amount |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedTreasuryOffsetAmounts` | Get all treasury offset amounts |

## f ed US SG LA cc ou nt s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fedUSSGLAccounts/{AccountId}/child/fedUSSGLAccountAttributes` | Create federal USSGL account attributes |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fedUSSGLAccounts/{AccountId}/child/fedUSSGLAccountDFF` | Create a federal USSGL account descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedUSSGLAccounts/{AccountId}/child/fedUSSGLAccountDFF/{UssglAccountId}` | Get a federal USSGL account descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedUSSGLAccounts/{AccountId}/child/fedUSSGLAccountAttributes/{USSGLAccountAttributeId}` | Get a federal USSGL account attribute |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedUSSGLAccounts/{AccountId}/child/fedUSSGLAccountDFF/{UssglAccountId}` | Delete a USSGL descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedUSSGLAccounts/{AccountId}/child/fedUSSGLAccountAttributes/{USSGLAccountAttributeId}` | Delete a federal USSGL account attribute |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedUSSGLAccounts` | Create USSGL accounts |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedUSSGLAccounts/{AccountId}` | Get a USSGL account |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedUSSGLAccounts/{AccountId}/child/fedUSSGLAccountDFF/{UssglAccountId}` | Update a federal USSGL account descriptive flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedUSSGLAccounts/{AccountId}/child/fedUSSGLAccountDFF` | Get all federal USSGL account descriptive flexfields |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedUSSGLAccounts/{AccountId}/child/fedUSSGLAccountAttributes` | Get all federal USSGL account attributes |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedUSSGLAccounts/{AccountId}` | Update a USSGL account |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedUSSGLAccounts` | Get all USSGL accounts |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fedUSSGLAccounts/{AccountId}/child/fedUSSGLAccountAttributes/{USSGLAccountAttributeId}` | Update a federal USSGL account attribute |

## f ed US SG LA cc ou nt sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedUSSGLAccountsLOV` | Get all federal USSGL accounts |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedUSSGLAccountsLOV/{USSGLAccountId}` | Get a federal USSGL account |

## f ed US SG LT re es LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedUSSGLTreesLOV` | Get all USSGL trees |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fedUSSGLTreesLOV/{fedUSSGLTreesLOVUniqID}` | Get a USSGL tree |

## f in Bu si ne ss Un it sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/finBusinessUnitsLOV` | Get all business units |
| `GET` | `/fscmRestApi/resources/11.13.18.05/finBusinessUnitsLOV/{finBusinessUnitsLOVUniqID}` | Get a business unit |

## f is ca lD oc um en tB us in es sU ni ts LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/fiscalDocumentBusinessUnitsLOV` | Get all fiscal document business units |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fiscalDocumentBusinessUnitsLOV/{BusinessUnitId}` | Get a fiscal document business unit |

## f ix ed As se tB oo ks LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/fixedAssetBooksLOV/{fixedAssetBooksLOVUniqID}` | Get an asset book |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fixedAssetBooksLOV` | Get all asset books |

## f ix ed As se tC at eg or ie sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/fixedAssetCategoriesLOV/{fixedAssetCategoriesLOVUniqID}` | Get an asset category |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fixedAssetCategoriesLOV` | Get all asset categories |

## F le xF nd Df fD es cr ip ti ve Fl ex fi el dC on te xt s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/FlexFndDffDescriptiveFlexfieldContexts` | Get all |

## F le xF nd Pv sC ha ra ct er Id Ch ar ac te rV al ue s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/FlexFndPvsCharacterIdCharacterValues` | Get all |

## F le xF nd Pv sC ha ra ct er Va lu es

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/FlexFndPvsCharacterValues` | Get all |

## f xR ev al ua ti on Se tu ps

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fxRevaluationSetups` | Create a foreign exchange revaluation setup |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fxRevaluationSetups/{fxRevaluationSetupsUniqID}` | Get a foreign exchange revaluation setup |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fxRevaluationSetups/{fxRevaluationSetupsUniqID}` | Delete a foreign exchange revaluation setup |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fxRevaluationSetups/{fxRevaluationSetupsUniqID}` | Update a foreign exchange revaluation setup |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fxRevaluationSetups` | Get all foreign exchange revaluation setup |

## f xT ra ns fe rS et up s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/fxTransferSetups` | Create a foreign exchange revaluation setup |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fxTransferSetups/{fxTransferSetupsUniqID}` | Get a foreign exchange revaluation setup |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fxTransferSetups/{fxTransferSetupsUniqID}` | Delete a foreign exchange revaluation setup |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fxTransferSetups/{fxTransferSetupsUniqID}` | Update a foreign exchange revaluation setup |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/fxTransferSetups` | Get all foreign exchange revaluation setup |

## i np ut Ta xC la ss if ic at io ns LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/inputTaxClassificationsLOV/{inputTaxClassificationsLOVUniqID}` | Get an input tax classification |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inputTaxClassificationsLOV` | Get all input tax classifications |

## i ns tr um en tA ss ig nm en ts

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/instrumentAssignments/{PaymentInstrumentAssignmentId}` | Get a payment instrument assignment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/instrumentAssignments` | Create a payment instrument assignment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/instrumentAssignments/{PaymentInstrumentAssignmentId}` | Update a payment instrument assignment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/instrumentAssignments` | Get all payment instrument assignments |

## i nt er co mp an yA gr ee me nt s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/attachments` | Create an attachment |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/transferAuthorizationGroups/{TransferAuthorizationGroupId}/child/transferAuthorizations/{TransferAuthorizationId}/child/attachments` | Create an attachment |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/transferAuthorizationGroups/{TransferAuthorizationGroupId}/child/transferAuthorizations` | Create a transfer authorization |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/transferAuthorizationGroups` | Create a transfer authorization group |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/transferAuthorizationGroups/{TransferAuthorizationGroupId}/child/transferAuthorizations/{TransferAuthorizationId}/child/transactions/{TrxId}/child/attachments` | Create an attachment |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements` | Create an intercompany agreement |
| `GET` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/transferAuthorizationGroups/{TransferAuthorizationGroupId}` | Get a transfer authorization group |
| `GET` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/transferAuthorizationGroups/{TransferAuthorizationGroupId}/child/transferAuthorizationGroupDFF/{TransferAuthorizationGroupId2}` | Get a descriptive flexfield for a transfer authorization group |
| `GET` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/transferAuthorizationGroups/{TransferAuthorizationGroupId}/child/transferAuthorizationGroupDFF` | Create a descriptive flexfield for a transfer authorization group |
| `GET` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/transferAuthorizationGroups/{TransferAuthorizationGroupId}` | Delete a transfer authorization group |
| `GET` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/transferAuthorizationGroups/{TransferAuthorizationGroupId}/child/transferAuthorizations/{TransferAuthorizationId}/child/transactions/{TrxId}/child/providerDistributionLines/{DistId}` | Get a provider accounting preview for a transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/transferAuthorizationGroups/{TransferAuthorizationGroupId}/child/transferAuthorizations/{TransferAuthorizationId}/child/transactions/{TrxId}/child/receiverDistributionLines/{DistId}` | Get a receiver accounting preview for a transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/transferAuthorizationGroups/{TransferAuthorizationGroupId}/child/transferAuthorizations/{TransferAuthorizationId}/child/transactions/{TrxId}/child/attachments/{attachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/transferAuthorizationGroups/{TransferAuthorizationGroupId}/child/transferAuthorizations/{TransferAuthorizationId}/child/transactions/{TrxId}/child/attachments/{attachmentsUniqID}` | Delete an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/transferAuthorizationGroups/{TransferAuthorizationGroupId}/child/transferAuthorizations/{TransferAuthorizationId}/child/transactions/{TrxId}/child/attachments` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/transferAuthorizationGroups/{TransferAuthorizationGroupId}/child/transferAuthorizations/{TransferAuthorizationId}/child/transactions/{TrxId}/child/transactionDFF/{TrxId2}` | Get a descriptive flexfield for a transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/transferAuthorizationGroups/{TransferAuthorizationGroupId}/child/transferAuthorizations/{TransferAuthorizationId}/child/transactions/{TrxId}/child/transactionDFF` | Create a descriptive flexfield for a transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/transferAuthorizationGroups/{TransferAuthorizationGroupId}/child/transferAuthorizations/{TransferAuthorizationId}` | Delete a transfer authorization |
| `GET` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/transferAuthorizationGroups/{TransferAuthorizationGroupId}/child/transferAuthorizations/{TransferAuthorizationId}/child/transactions/{TrxId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/transferAuthorizationGroups/{TransferAuthorizationGroupId}/child/transferAuthorizations/{TransferAuthorizationId}/child/transactions/{TrxId}` | Get a transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/transferAuthorizationGroups/{TransferAuthorizationGroupId}/child/transferAuthorizations/{TransferAuthorizationId}` | Get a transfer authorization |
| `GET` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/intercompanyAgreementDFF/{IntercompanyAgreementId2}` | Get a descriptive flexfield for an intercompany agreement |
| `GET` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/transferAuthorizationGroups/{TransferAuthorizationGroupId}/child/transferAuthorizations/{TransferAuthorizationId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements` | Get all intercompany agreements |
| `GET` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/attachments/{attachmentsUniqID}` | Delete an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/transferAuthorizationGroups/{TransferAuthorizationGroupId}/child/transferAuthorizations/{TransferAuthorizationId}/child/attachments` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/transferAuthorizationGroups/{TransferAuthorizationGroupId}/child/transferAuthorizations/{TransferAuthorizationId}/child/transferAuthorizationDFF` | Create a descriptive flexfield for a transfer authorization |
| `GET` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/transferAuthorizationGroups/{TransferAuthorizationGroupId}/child/transferAuthorizations/{TransferAuthorizationId}/child/transferAuthorizationDFF/{TransferAuthorizationId2}` | Get a descriptive flexfield for a transfer authorization |
| `GET` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/action/generateTransactions` | Generate transactions for all transfer authorizations created |
| `GET` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/transferAuthorizationGroups/{TransferAuthorizationGroupId}/child/transferAuthorizations/{TransferAuthorizationId}/child/attachments/{attachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/attachments` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/intercompanyAgreementDFF` | Create a descriptive flexfield for an intercompany agreement |
| `GET` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/attachments/{attachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/transferAuthorizationGroups/{TransferAuthorizationGroupId}/child/transferAuthorizations/{TransferAuthorizationId}/child/attachments/{attachmentsUniqID}` | Delete an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/transferAuthorizationGroups/{TransferAuthorizationGroupId}/child/transferAuthorizations/{TransferAuthorizationId}/child/transactions/{TrxId}/child/receiverDistributionLines` | Get all receiver accounting previews for a transaction |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/transferAuthorizationGroups/{TransferAuthorizationGroupId}/child/transferAuthorizations/{TransferAuthorizationId}/child/transferAuthorizationDFF` | Get all descriptive flexfields for a transfer authorization |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/transferAuthorizationGroups/{TransferAuthorizationGroupId}/child/transferAuthorizations/{TransferAuthorizationId}/child/transactions/{TrxId}/child/providerDistributionLines/{DistId}` | Update a provider accounting preview for a transaction |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/transferAuthorizationGroups/{TransferAuthorizationGroupId}/child/transferAuthorizations/{TransferAuthorizationId}/child/transactions/{TrxId}/child/receiverDistributionLines/{DistId}` | Update a receiver accounting preview for a transaction |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/transferAuthorizationGroups/{TransferAuthorizationGroupId}/child/transferAuthorizations/{TransferAuthorizationId}/child/attachments/{attachmentsUniqID}` | Update an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/transferAuthorizationGroups/{TransferAuthorizationGroupId}/child/transferAuthorizations/{TransferAuthorizationId}/child/attachments/{attachmentsUniqID}` | Get an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/transferAuthorizationGroups/{TransferAuthorizationGroupId}/child/transferAuthorizations/{TransferAuthorizationId}/child/transactions/{TrxId}/child/providerDistributionLines` | Get all provider accounting previews for a transaction |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/transferAuthorizationGroups/{TransferAuthorizationGroupId}/child/transferAuthorizations/{TransferAuthorizationId}/child/transactions/{TrxId}/child/attachments/{attachmentsUniqID}` | Get an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/transferAuthorizationGroups/{TransferAuthorizationGroupId}/child/transferAuthorizations/{TransferAuthorizationId}/child/transactions/{TrxId}/child/attachments/{attachmentsUniqID}` | Update an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/transferAuthorizationGroups/{TransferAuthorizationGroupId}/child/transferAuthorizations/{TransferAuthorizationId}/child/transactions/{TrxId}/child/transactionDFF/{TrxId2}` | Update a descriptive flexfield for a transaction |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/intercompanyAgreementDFF/{IntercompanyAgreementId2}` | Update a descriptive flexfield for an intercompany agreement |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/intercompanyAgreementDFF` | Get all descriptive flexfields for an intercompany agreement |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/transferAuthorizationGroups/{TransferAuthorizationGroupId}` | Update a transfer authorization group |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/transferAuthorizationGroups` | Get all transfer authorization groups |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}` | Update an intercompany agreement |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/action/reverseTransferAuthorizationGrp` | Reverse a transfer authorization group |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/attachments/{attachmentsUniqID}` | Update an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/attachments/{attachmentsUniqID}` | Get an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/transferAuthorizationGroups/{TransferAuthorizationGroupId}/child/transferAuthorizationGroupDFF` | Get all descriptive flexfields for a transfer authorization group |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/transferAuthorizationGroups/{TransferAuthorizationGroupId}/child/transferAuthorizations/{TransferAuthorizationId}/child/transactions/{TrxId}/child/transactionDFF` | Get all descriptive flexfields for a transaction |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/transferAuthorizationGroups/{TransferAuthorizationGroupId}/child/transferAuthorizations/{TransferAuthorizationId}/child/transactions/{TrxId}` | Update a transaction |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/transferAuthorizationGroups/{TransferAuthorizationGroupId}/child/transferAuthorizations/{TransferAuthorizationId}` | Update a transfer authorization |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/transferAuthorizationGroups/{TransferAuthorizationGroupId}/child/transferAuthorizations/{TransferAuthorizationId}/child/transactions` | Get all transactions |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/transferAuthorizationGroups/{TransferAuthorizationGroupId}/child/transferAuthorizations/{TransferAuthorizationId}/child/transferAuthorizationDFF/{TransferAuthorizationId2}` | Update a descriptive flexfield for a transfer authorization |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/transferAuthorizationGroups/{TransferAuthorizationGroupId}/child/transferAuthorizations` | Get all transfer authorizations |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/transferAuthorizationGroups/{TransferAuthorizationGroupId}/child/transferAuthorizationGroupDFF/{TransferAuthorizationGroupId2}` | Update a descriptive flexfield for a transfer authorization group |
| `POST` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}` | Get an intercompany agreement |
| `POST` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/action/cancelTransferAuthorizationGrps` | Cancel all transfer authorization groups |
| `POST` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}` | Delete an intercompany agreement |
| `POST` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/action/generateAccountingLines` | Generate accounting lines for a transaction |
| `POST` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/action/approveTransferAuthorizations` | Approve all transactions in the transfer authorization |
| `POST` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/action/rejectTransferAuthorizations` | Reject all transactions in the transfer authorization |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/transferAuthorizationGroups/{TransferAuthorizationGroupId}/child/transferAuthorizations/{TransferAuthorizationId}/child/transactions/{TrxId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Get a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/transferAuthorizationGroups/{TransferAuthorizationGroupId}/child/transferAuthorizations/{TransferAuthorizationId}/child/transactions/{TrxId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/transferAuthorizationGroups/{TransferAuthorizationGroupId}/child/transferAuthorizations/{TransferAuthorizationId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Get a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/transferAuthorizationGroups/{TransferAuthorizationGroupId}/child/transferAuthorizations/{TransferAuthorizationId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreements/{IntercompanyAgreementId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Get a FileContents |

## i nt er co mp an yA gr ee me nt sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreementsLOV/{IntercompanyAgreementId}` | Get an intercompany agreement |
| `GET` | `/fscmRestApi/resources/11.13.18.05/intercompanyAgreementsLOV` | Get all intercompany agreements |

## i nt er co mp an yC us to me rS up pl ie rs LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/intercompanyCustomerSuppliersLOV/{CustomerSupplierMapId}` | Get an intercompany customer and supplier assignment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/intercompanyCustomerSuppliersLOV` | Get all intercompany customer and supplier assignments |

## i nt er co mp an yO rg an iz at io ns LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/intercompanyOrganizationsLOV/{IntercoOrgId}` | Get an intercompany organization |
| `GET` | `/fscmRestApi/resources/11.13.18.05/intercompanyOrganizationsLOV` | Get all intercompany organizations |

## i nt er co mp an yT ra ns ac ti on So ur ce Do cu me nt s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/intercompanyTransactionSourceDocuments/{IntercompanyTrxSourceDocumentId}/child/attachments` | Create an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/intercompanyTransactionSourceDocuments/{IntercompanyTrxSourceDocumentId}/child/intercompanyTransactionSourceDocumentDFF/{IntercompanyTrxSourceDocumentId2}` | Get a descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/intercompanyTransactionSourceDocuments/{IntercompanyTrxSourceDocumentId}/child/attachments` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/intercompanyTransactionSourceDocuments/{IntercompanyTrxSourceDocumentId}/child/attachments/{attachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/intercompanyTransactionSourceDocuments/{IntercompanyTrxSourceDocumentId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/intercompanyTransactionSourceDocuments/{IntercompanyTrxSourceDocumentId}/child/intercompanyTransactionSourceDocumentDFF` | Create a descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/intercompanyTransactionSourceDocuments/action/createTransferAuthorization` | Create a transfer authorization |
| `GET` | `/fscmRestApi/resources/11.13.18.05/intercompanyTransactionSourceDocuments` | Get all intercompany transaction source documents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/intercompanyTransactionSourceDocuments/{IntercompanyTrxSourceDocumentId}/child/attachments/{attachmentsUniqID}` | Delete an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/intercompanyTransactionSourceDocuments/{IntercompanyTrxSourceDocumentId}/child/intercompanyTransactionSourceDocumentDFF/{IntercompanyTrxSourceDocumentId2}` | Update a descriptive flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/intercompanyTransactionSourceDocuments/{IntercompanyTrxSourceDocumentId}/child/intercompanyTransactionSourceDocumentDFF` | Get all descriptive flexfields |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/intercompanyTransactionSourceDocuments/{IntercompanyTrxSourceDocumentId}/child/attachments/{attachmentsUniqID}` | Get an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/intercompanyTransactionSourceDocuments/{IntercompanyTrxSourceDocumentId}` | Update an intercompany transaction source document |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/intercompanyTransactionSourceDocuments/{IntercompanyTrxSourceDocumentId}` | Get an intercompany transaction source document |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/intercompanyTransactionSourceDocuments/{IntercompanyTrxSourceDocumentId}/child/attachments/{attachmentsUniqID}` | Update an attachment |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/intercompanyTransactionSourceDocuments/{IntercompanyTrxSourceDocumentId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/intercompanyTransactionSourceDocuments/{IntercompanyTrxSourceDocumentId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Get a FileContents |

## i nt er co mp an yT ra ns ac ti on Ty pe sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/intercompanyTransactionTypesLOV/{TrxTypeId}` | Get an intercompany transaction type |
| `GET` | `/fscmRestApi/resources/11.13.18.05/intercompanyTransactionTypesLOV` | Get all intercompany transaction types |

## i nt er co mp an yT ra ns fe rA ut ho ri za ti on sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/intercompanyTransferAuthorizationsLOV` | Get all transfer authorizations |
| `GET` | `/fscmRestApi/resources/11.13.18.05/intercompanyTransferAuthorizationsLOV/{TransferAuthorizationId}` | Get a transfer authorization |

## i nt er im Do cu me nt sP ay ab le s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/interimDocumentsPayables` | Create an interim payables document |
| `GET` | `/fscmRestApi/resources/11.13.18.05/interimDocumentsPayables` | Get all interim payables documents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/interimDocumentsPayables/{DocumentPayableId}` | Delete an interim payables document |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/interimDocumentsPayables/{DocumentPayableId}` | Update an interim payables document |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/interimDocumentsPayables/{DocumentPayableId}` | Get an interim payables document |

## i nv oi ce Ap pr ov al sA nd No ti fi ca ti on sH is to ry

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/invoiceApprovalsAndNotificationsHistory/{ApprovalHistoryId}` | Get an invoice approvals and notifications history |
| `GET` | `/fscmRestApi/resources/11.13.18.05/invoiceApprovalsAndNotificationsHistory` | Get all invoice approvals and notifications history |

## i nv oi ce Ho ld s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/invoiceHolds/{HoldId}/child/invoiceHoldDff/{HoldId2}` | Get a descriptive flexfields for an invoice hold |
| `GET` | `/fscmRestApi/resources/11.13.18.05/invoiceHolds/{HoldId}/child/invoiceHoldDff` | Create a descriptive flexfield for an invoice hold |
| `GET` | `/fscmRestApi/resources/11.13.18.05/invoiceHolds` | Create an invoice hold |
| `GET` | `/fscmRestApi/resources/11.13.18.05/invoiceHolds` | Get all holds |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/invoiceHolds/{HoldId}/child/invoiceHoldDff/{HoldId2}` | Update descriptive flexfields for an invoice hold |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/invoiceHolds/{HoldId}/child/invoiceHoldDff` | Get all descriptive flexfields for an invoice hold |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/invoiceHolds/{HoldId}` | Get an invoice hold |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/invoiceHolds/{HoldId}` | Update an invoice hold |

## i nv oi ce s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceLines` | Create an invoice line |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/invoices` | Create an invoice |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/attachments` | Create an attachment for an invoice |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceLines/{invoiceLinesUniqID}/child/invoiceDistributions` | Create an invoice distribution |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceInstallments` | Create an invoice installment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceInstallments/{invoiceInstallmentsUniqID}/child/invoiceInstallmentGdf` | Create a global descriptive flexfield for an invoice installment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceLines/{invoiceLinesUniqID}/child/invoiceDistributions/{InvoiceDistributionId}/child/invoiceDistributionGdf` | Get all global descriptive flexfields for an invoice distribution |
| `GET` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceInstallments/{invoiceInstallmentsUniqID}/child/invoiceInstallmentGdf` | Get all global descriptive flexfields for an invoice installment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceInstallments/{invoiceInstallmentsUniqID}/child/invoiceInstallmentDff` | Get all descriptive flexfields for an invoice installment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceInstallments/{invoiceInstallmentsUniqID}/child/invoiceInstallmentDff` | Create a descriptive flexfield for an invoice installment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceInstallments` | Get all installments for an invoice |
| `GET` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceInstallments/{invoiceInstallmentsUniqID}` | Delete an invoice installment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceLines/{invoiceLinesUniqID}/child/invoiceLineGdf` | Create a global descriptive flexfield for an invoice line |
| `GET` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceLines/{invoiceLinesUniqID}/child/invoiceLineGdf` | Get all global descriptive flexfields for an invoice line |
| `GET` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceLines/{invoiceLinesUniqID}/child/invoiceDistributions/{InvoiceDistributionId}/child/invoiceDistributionDff` | Create a descriptive flexfield for an invoice distribution |
| `GET` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceLines/{invoiceLinesUniqID}/child/invoiceDistributions/{InvoiceDistributionId}/child/invoiceDistributionProjectDff/{InvoiceDistributionId4}` | Get a project-related descriptive flexfield for an invoice distribution |
| `GET` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceLines/{invoiceLinesUniqID}/child/invoiceDistributions/{InvoiceDistributionId}/child/invoiceDistributionDff` | Get all descriptive flexfields for an invoice distribution |
| `GET` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceLines/{invoiceLinesUniqID}/child/invoiceDistributions/{InvoiceDistributionId}/child/invoiceDistributionGdf` | Create a global descriptive flexfield for an invoice distribution |
| `GET` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceLines/{invoiceLinesUniqID}/child/invoiceDistributions/{InvoiceDistributionId}/child/invoiceDistributionProjectDff` | Create a project-related descriptive flexfield for an invoice distribution |
| `GET` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceLines` | Get all lines for an invoice |
| `GET` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceLines/{invoiceLinesUniqID}/child/invoiceLineDff` | Get all descriptive flexfields for an invoice line |
| `GET` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceLines/{invoiceLinesUniqID}/child/invoiceLineDff` | Create a descriptive flexfield for an invoice line |
| `GET` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceLines/{invoiceLinesUniqID}/child/invoiceDistributions` | Get all distributions for an invoice |
| `GET` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceLines/{invoiceLinesUniqID}/child/invoiceDistributions/{InvoiceDistributionId}` | Delete an invoice distribution |
| `GET` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/availablePrepayments/{availablePrepaymentsUniqID}` | Get an available prepayment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceLines/{invoiceLinesUniqID}` | Delete an invoice line |
| `GET` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceDff` | Create a descriptive flexfield for an invoice |
| `GET` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/appliedPrepayments/{appliedPrepaymentsUniqID}` | Get an applied prepayment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/appliedPrepayments` | Get all applied prepayments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceDff` | Get all descriptive flexfields for an invoice |
| `GET` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceGdf` | Create a global descriptive flexfield for an invoice |
| `GET` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceGdf` | Get all global descriptive flexfields for an invoice |
| `GET` | `/fscmRestApi/resources/11.13.18.05/invoices` | Get all invoices |
| `GET` | `/fscmRestApi/resources/11.13.18.05/invoices/action/generateDistributions` | Generate distributions for the invoice |
| `GET` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/attachments/{attachmentsUniqID}` | Delete an attachment for an invoice |
| `GET` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceLines/{invoiceLinesUniqID}/child/invoiceLineProjectDff/{invoiceLineProjectDffUniqID}` | Get a project-related descriptive flexfield for an invoice line |
| `GET` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceLines/{invoiceLinesUniqID}/child/invoiceLineProjectDff` | Create a project-related descriptive flexfield for an invoice line |
| `GET` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/attachments/{attachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/availablePrepayments` | Get all available prepayments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Delete a File Contents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/attachments` | Get all attachments for an invoice |
| `GET` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/attachments/{attachmentsUniqID}` | Get an attachment for an invoice |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceLines/{invoiceLinesUniqID}/child/invoiceDistributions/{InvoiceDistributionId}/child/invoiceDistributionGdf/{InvoiceDistributionId3}` | Update a global descriptive flexfield for an invoice distribution |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceDff/{InvoiceId}` | Update a descriptive flexfields for an invoice |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceGdf/{InvoiceId}` | Get global descriptive flexfields for an invoice |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceLines/{invoiceLinesUniqID}/child/invoiceLineProjectDff` | Get all project-related descriptive flexfields for an invoice line |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceLines/{invoiceLinesUniqID}/child/invoiceDistributions/{InvoiceDistributionId}/child/invoiceDistributionProjectDff` | Get all project-related descriptive flexfields for an invoice distribution |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceLines/{invoiceLinesUniqID}/child/invoiceLineProjectDff/{invoiceLineProjectDffUniqID}` | Update a project-related descriptive flexfield for an invoice line |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceLines/{invoiceLinesUniqID}/child/invoiceLineDff/{invoiceLineDffUniqID}` | Get descriptive flexfields for an invoice line |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceLines/{invoiceLinesUniqID}/child/invoiceLineDff/{invoiceLineDffUniqID}` | Update a descriptive flexfields for an invoice line |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceLines/{invoiceLinesUniqID}/child/invoiceDistributions/{InvoiceDistributionId}/child/invoiceDistributionProjectDff/{InvoiceDistributionId4}` | Update a project-related descriptive flexfield for an invoice distribution |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceLines/{invoiceLinesUniqID}/child/invoiceLineGdf/{invoiceLineGdfUniqID}` | Update a global descriptive flexfield for an invoice line |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceDff/{InvoiceId}` | Get descriptive flexfields for an invoice |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceLines/{invoiceLinesUniqID}/child/invoiceLineGdf/{invoiceLineGdfUniqID}` | Get global descriptive flexfields for an invoice line |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceLines/{invoiceLinesUniqID}/child/invoiceDistributions/{InvoiceDistributionId}/child/invoiceDistributionGdf/{InvoiceDistributionId3}` | Get global descriptive flexfields for an invoice distribution |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceInstallments/{invoiceInstallmentsUniqID}/child/invoiceInstallmentDff/{invoiceInstallmentDffUniqID}` | Update a descriptive flexfields for an invoice installment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceInstallments/{invoiceInstallmentsUniqID}/child/invoiceInstallmentGdf/{invoiceInstallmentGdfUniqID}` | Get global descriptive flexfields for an invoice installment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceInstallments/{invoiceInstallmentsUniqID}/child/invoiceInstallmentGdf/{invoiceInstallmentGdfUniqID}` | Update a global descriptive flexfield for an invoice installment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceInstallments/{invoiceInstallmentsUniqID}/child/invoiceInstallmentDff/{invoiceInstallmentDffUniqID}` | Get descriptive flexfields for an invoice installment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/invoices/action/unapplyPrepayments` | Unapply a prepayment from an invoice |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceInstallments/{invoiceInstallmentsUniqID}` | Get an invoice installment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceInstallments/{invoiceInstallmentsUniqID}` | Update an invoice installment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceLines/{invoiceLinesUniqID}/child/invoiceDistributions/{InvoiceDistributionId}` | Update an invoice distribution |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceLines/{invoiceLinesUniqID}/child/invoiceDistributions/{InvoiceDistributionId}/child/invoiceDistributionDff/{InvoiceDistributionId2}` | Get descriptive flexfields for an invoice distribution |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceLines/{invoiceLinesUniqID}/child/invoiceDistributions/{InvoiceDistributionId}/child/invoiceDistributionDff/{InvoiceDistributionId2}` | Update a descriptive flexfields for an invoice distribution |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceLines/{invoiceLinesUniqID}/child/invoiceDistributions/{InvoiceDistributionId}` | Get an invoice distribution |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceGdf/{InvoiceId}` | Update a global descriptive flexfield for an invoice |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceLines/{invoiceLinesUniqID}` | Get an invoice line |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/invoiceLines/{invoiceLinesUniqID}` | Update an invoice line |
| `POST` | `/fscmRestApi/resources/11.13.18.05/invoices/action/cancelLine` | Cancel an invoice line |
| `POST` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}` | Delete an invoice |
| `POST` | `/fscmRestApi/resources/11.13.18.05/invoices/action/applyPrepayments` | Apply prepayments to an invoice |
| `POST` | `/fscmRestApi/resources/11.13.18.05/invoices/action/calculateTax` | Calculate tax for the invoice |
| `POST` | `/fscmRestApi/resources/11.13.18.05/invoices/action/cancelInvoice` | Cancel an invoice |
| `POST` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}` | Get an invoice |
| `POST` | `/fscmRestApi/resources/11.13.18.05/invoices/action/validateInvoice` | Validate an invoice |
| `POST` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}` | Update an invoice |
| `POST` | `/fscmRestApi/resources/11.13.18.05/invoices/action/reverseDistributions` | Reverse distributions for an Invoice |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Replace a File Contents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/invoices/{invoicesUniqID}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Get a File Contents |

## j oi nt Ve nt ur eA cc ou nt in gH ea de rs

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountingHeaders/{accountingHeaderId}/child/distributions` | Get all joint venture distributions for the joint venture journal |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountingHeaders/{accountingHeaderId}/child/stakeholderReportingDistributions/{distributionId}` | Get a joint venture distribution for the joint venture journal |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountingHeaders/{accountingHeaderId}/child/distributions/{distributionId}` | Get a joint venture distribution for the joint venture journal |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountingHeaders/{accountingHeaderId}/child/stakeholderReportingDistributions` | Get all joint venture distributions for the joint venture journal |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountingHeaders/{accountingHeaderId}/child/contributionReferences` | Get all transaction references for a joint venture partner contribution |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountingHeaders/{accountingHeaderId}/child/contributionReferences/{contributionReferenceId}` | Get a transaction reference for a joint venture partner contribution |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountingHeaders/{accountingHeaderId}/child/operationalMeasures` | Get all operational measures for the joint venture journal |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountingHeaders` | Get all joint venture accounting headers |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountingHeaders/{accountingHeaderId}` | Get a joint venture accounting header |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountingHeaders/{accountingHeaderId}` | Delete a joint venture accounting header |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountingHeaders/{accountingHeaderId}/child/accountingHeaderDFF` | Get all descriptive flexfields for an accounting header |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountingHeaders/{accountingHeaderId}/child/carriedInterestDistributions` | Get all carried interest distributions for the joint venture journal |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountingHeaders/{accountingHeaderId}/child/carriedInterestDistributions/{distributionId}` | Get a carried interest distribution for the joint venture journal |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountingHeaders/{accountingHeaderId}/child/accountingHeaderDFF/{AccountingHeaderId}` | Get descriptive flexfields for an accounting header |
| `POST` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountingHeaders/{accountingHeaderId}/child/operationalMeasures/{operationalMeasureId}/action/reverseOperationalMeasure` | Reverse an operational measure |
| `POST` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountingHeaders/{accountingHeaderId}/child/operationalMeasures/{operationalMeasureId}` | Get an operational measure for the joint venture journal |

## j oi nt Ve nt ur eA cc ou nt Se ts

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountSets/{accountSetId}/child/filterSets/{filterSetId}/child/filters/{filterId}/child/filterValues` | Create a filter value |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountSets/{accountSetId}/child/filterSets` | Create a filter set |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountSets/{accountSetId}/child/filterSets/{filterSetId}/child/filters` | Create a filter |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountSets` | Create a joint venture account set |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountSets/{accountSetId}/child/filterSetFilters/{filterSetFiltersUniqID}` | Get a filter set and filters |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountSets/{accountSetId}/child/filterSetFilters` | Get all filter sets and their filters |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountSets/{accountSetId}/child/filterSets/{filterSetId}/child/filterSetDFF` | Create the set of descriptive flexfields for a filter set |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountSets/{accountSetId}/child/filterSets/{filterSetId}/child/filterSetDFF` | Get all descriptive flexfields for a filter set |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountSets/{accountSetId}/child/filterSets/{filterSetId}/child/filters/{filterId}/child/filterDFF` | Get all descriptive flexfields for a filter |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountSets/{accountSetId}/child/filterSets/{filterSetId}/child/filters/{filterId}/child/filterValues/{filterValueId}` | Delete a filter value |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountSets/{accountSetId}/child/filterSets/{filterSetId}/child/filters/{filterId}/child/filterValues/{filterValueId}` | Get a filter value |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountSets/{accountSetId}/child/filterSets/{filterSetId}/child/filters/{filterId}` | Delete a filter |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountSets/{accountSetId}/child/filterSets/{filterSetId}/child/filters/{filterId}` | Get a filter |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountSets/{accountSetId}/child/filterSets/{filterSetId}/child/filters/{filterId}/child/filterDFF` | Create the set of descriptive flexfields for a filter |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountSets/{accountSetId}` | Delete a joint venture account set |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountSets/{accountSetId}/child/accountSetDFF` | Create the set of descriptive flexfields for an account set |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountSets/{accountSetId}/child/accountSetDFF` | Get all descriptive flexfields for an account set |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountSets/{accountSetId}/child/filterSets/{filterSetId}` | Delete a filter set |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountSets/{accountSetId}` | Get a joint venture account set |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountSets/{accountSetId}/child/filterSets/{filterSetId}` | Get a filter set |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountSets/{accountSetId}` | Update a joint venture account set |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountSets/{accountSetId}/child/filterSets/{filterSetId}/child/filters/{filterId}/child/filterDFF/{AccountFilterId}` | Get descriptive flexfields for a filter |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountSets/{accountSetId}/child/filterSets/{filterSetId}/child/filters/{filterId}/child/filterValues/{filterValueId}` | Update a filter value |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountSets/{accountSetId}/child/filterSets/{filterSetId}/child/filters/{filterId}/child/filterValues` | Get all filter values |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountSets` | Get all joint venture account sets |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountSets/{accountSetId}/child/filterSets/{filterSetId}/child/filters/{filterId}/child/filterDFF/{AccountFilterId}` | Update descriptive flexfields for a filter |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountSets/{accountSetId}/child/filterSets/{filterSetId}/child/filterSetDFF/{AccountFilterSetId}` | Get descriptive flexfields for a filter set |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountSets/{accountSetId}/child/filterSets/{filterSetId}/child/filterSetDFF/{AccountFilterSetId}` | Update descriptive flexfields for a filter set |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountSets/{accountSetId}/child/filterSets/{filterSetId}` | Update a filter set |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountSets/{accountSetId}/child/filterSets` | Get all filter sets |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountSets/{accountSetId}/child/filterSets/{filterSetId}/child/filters` | Get all filters |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountSets/{accountSetId}/child/filterSets/{filterSetId}/child/filters/{filterId}` | Update a filter |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountSets/{accountSetId}/child/accountSetDFF/{AccountSetId}` | Update descriptive flexfields for an account set |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountSets/{accountSetId}/child/accountSetDFF/{AccountSetId}` | Get descriptive flexfields for an account set |

## j oi nt Ve nt ur eA cc ou nt Se ts LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountSetsLOV` | Get all joint venture account sets |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureAccountSetsLOV/{accountSetId}` | Get a joint venture account set |

## j oi nt Ve nt ur eA pp ro va lC ou nt s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureApprovalCounts` | Get all counts for joint ventures with any approved dates |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureApprovalCounts/{approvedDate}` | Get a count of joint ventures with the specified approved date |

## j oi nt Ve nt ur eA ss ig nm en tR ul es

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/jointVentureAssignmentRules/{assignmentRuleId}/child/projectValueSets` | Create a project value set |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/jointVentureAssignmentRules` | Create an assignment rule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureAssignmentRules/{assignmentRuleId}/child/projectValueSets/{projectValueSetId}/child/projectValueSetDFF` | Get all descriptive flexfields for a project value set |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureAssignmentRules/{assignmentRuleId}/child/projectValueSets/{projectValueSetId}/child/projectValueSetDFF` | Create the set of descriptive flexfields for a project value set |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureAssignmentRules/{assignmentRuleId}/child/projectValueSets/{projectValueSetId}` | Get a project value set |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureAssignmentRules/{assignmentRuleId}/child/projectValueSets/{projectValueSetId}` | Delete a project value set |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureAssignmentRules/{assignmentRuleId}/child/assignmentRuleDFF` | Get all descriptive flexfields for an assignment rule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureAssignmentRules/{assignmentRuleId}` | Delete an assignment rule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureAssignmentRules` | Get all assignment rules |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureAssignmentRules/{assignmentRuleId}/child/assignmentRuleDFF` | Create the set of descriptive flexfields for an assignment rule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureAssignmentRules/{assignmentRuleId}/child/projectValueSets/{projectValueSetId}` | Update a project value set |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureAssignmentRules/{assignmentRuleId}/child/projectValueSets/{projectValueSetId}/child/projectValueSetDFF/{ProjectValueSetId}` | Get descriptive flexfields for a project value set |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureAssignmentRules/{assignmentRuleId}/child/projectValueSets/{projectValueSetId}/child/projectValueSetDFF/{ProjectValueSetId}` | Update descriptive flexfields for a project value set |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureAssignmentRules/{assignmentRuleId}` | Update an assignment rule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureAssignmentRules/{assignmentRuleId}` | Get an assignment rule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureAssignmentRules/{assignmentRuleId}/child/assignmentRuleDFF/{AssignmentRuleId}` | Get descriptive flexfields for an assignment rule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureAssignmentRules/{assignmentRuleId}/child/projectValueSets` | Get all project value sets for an assignment rule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureAssignmentRules/{assignmentRuleId}/child/assignmentRuleDFF/{AssignmentRuleId}` | Update descriptive flexfields for an assignment rule |

## j oi nt Ve nt ur eB as ic Ge ne ra te dD is tr ib ut io ns

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureBasicGeneratedDistributions/{distributionId}/child/distributionDFF` | Get all descriptive flexfields for a joint venture distribution |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureBasicGeneratedDistributions/{distributionId}/child/distributionDFF` | Create the set of descriptive flexfields for a joint venture distribution |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureBasicGeneratedDistributions/{distributionId}` | Delete a distribution for a joint venture generated transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureBasicGeneratedDistributions/{distributionId}` | Get a distribution for a joint venture generated transaction |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureBasicGeneratedDistributions/{distributionId}/child/distributionDFF/{DistributionId}` | Update descriptive flexfields for a joint venture distribution |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureBasicGeneratedDistributions/{distributionId}/child/distributionDFF/{DistributionId}` | Get descriptive flexfields for a joint venture distribution |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureBasicGeneratedDistributions` | Get all distributions for joint venture generated transactions |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureBasicGeneratedDistributions/{distributionId}` | Update a distribution for a joint venture generated transaction |

## j oi nt Ve nt ur eB as ic GL Di st ri bu ti on s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureBasicGLDistributions/{distributionId}/child/distributionDFF` | Get all descriptive flexfields for a joint venture distribution |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureBasicGLDistributions/{distributionId}/child/distributionDFF` | Create the set of descriptive flexfields for a joint venture distribution |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureBasicGLDistributions/{distributionId}` | Delete a joint venture general ledger distribution |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureBasicGLDistributions/{distributionId}` | Get a joint venture general ledger distribution |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureBasicGLDistributions/{distributionId}/child/distributionDFF/{DistributionId}` | Update descriptive flexfields for a joint venture distribution |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureBasicGLDistributions/{distributionId}/child/distributionDFF/{DistributionId}` | Get descriptive flexfields for a joint venture distribution |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureBasicGLDistributions` | Get all joint venture general ledger distributions |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureBasicGLDistributions/{distributionId}` | Update a joint venture general ledger distribution |

## j oi nt Ve nt ur eB as ic Ov er he ad Di st ri bu ti on s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureBasicOverheadDistributions/{distributionId}/child/distributionDFF` | Get all descriptive flexfields for a joint venture distribution |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureBasicOverheadDistributions/{distributionId}/child/distributionDFF` | Create the set of descriptive flexfields for a joint venture distribution |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureBasicOverheadDistributions/{distributionId}` | Delete an overhead distribution |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureBasicOverheadDistributions` | Get all overhead distributions |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureBasicOverheadDistributions/{distributionId}/child/distributionDFF/{DistributionId}` | Update descriptive flexfields for a joint venture distribution |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureBasicOverheadDistributions/{distributionId}/child/distributionDFF/{DistributionId}` | Get descriptive flexfields for a joint venture distribution |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureBasicOverheadDistributions/{distributionId}` | Get an overhead distribution |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureBasicOverheadDistributions/{distributionId}` | Update an overhead distribution |

## j oi nt Ve nt ur eB as ic SL AD is tr ib ut io ns

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureBasicSLADistributions/{distributionId}/child/distributionDFF` | Get all descriptive flexfields for a joint venture distribution |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureBasicSLADistributions/{distributionId}/child/distributionDFF` | Create the set of descriptive flexfields for a joint venture distribution |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureBasicSLADistributions/{distributionId}` | Delete a joint venture subledger distribution |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureBasicSLADistributions/{distributionId}` | Get a joint venture subledger distribution |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureBasicSLADistributions/{distributionId}/child/distributionDFF/{DistributionId}` | Update descriptive flexfields for a joint venture distribution |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureBasicSLADistributions/{distributionId}/child/distributionDFF/{DistributionId}` | Get descriptive flexfields for a joint venture distribution |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureBasicSLADistributions` | Get all joint venture subledger distributions |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureBasicSLADistributions/{distributionId}` | Update a joint venture subledger distribution |

## j oi nt Ve nt ur eC on tr ib ut io nR eq ue st s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/jointVentureContributionRequests` | Create a joint venture partner contribution request |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureContributionRequests/{contributionRequestId}/child/contributionRequestDFF` | Get all descriptive flexfields for a partner contribution request |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureContributionRequests/{contributionRequestId}/child/contributionRequestDFF` | Create a set of descriptive flexfields for a partner contribution request |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureContributionRequests/{contributionRequestId}` | Delete a joint venture partner contribution request |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureContributionRequests/{contributionRequestId}` | Get a joint venture partner contribution request |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureContributionRequests/{contributionRequestId}/child/contributionRequestDFF/{ContributionRequestId}` | Update a descriptive flexfield for a partner contribution request |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureContributionRequests/{contributionRequestId}/child/contributionRequestDFF/{ContributionRequestId}` | Get descriptive flexfields for a partner contribution request |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureContributionRequests` | Get all joint venture partner contribution requests |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureContributionRequests/{contributionRequestId}` | Update a joint venture partner contribution request |

## j oi nt Ve nt ur eC on tr ib ut io ns

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/jointVentureContributions/{contributionId}/child/attachments` | Create an attachment |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/jointVentureContributions` | Create a joint venture partner contribution |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureContributions/{contributionId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureContributions/{contributionId}/child/contributionReferences/{contributionReferenceId}` | Get a transaction reference for a joint venture partner contribution |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureContributions/{contributionId}/child/attachments/{attachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureContributions/{contributionId}/child/contributionReferences/{contributionReferenceId}` | Delete a transaction reference for a partner contribution |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureContributions/{contributionId}/child/contributionDFF` | Get all descriptive flexfields for a partner contribution |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureContributions/{contributionId}/child/contributionDFF` | Create a set of descriptive flexfields for a partner contribution |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureContributions/{contributionId}/child/contributionReferences/{contributionReferenceId}/child/contributionReferenceDFF` | Create the set of descriptive flexfields for a partner contribution reference |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureContributions/{contributionId}` | Delete a joint venture partner contribution |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureContributions/{contributionId}/child/contributionReferences/{contributionReferenceId}/child/contributionReferenceDFF` | Get all descriptive flexfields for a partner contribution reference |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureContributions/{contributionId}` | Get a joint venture partner contribution |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureContributions/{contributionId}/child/attachments/{attachmentsUniqID}` | Delete an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureContributions/{contributionId}/child/attachments` | Get all attachments |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureContributions/{contributionId}/child/contributionReferences/{contributionReferenceId}` | Update a transaction reference for a partner contribution |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureContributions/{contributionId}/child/contributionReferences` | Get all transaction references for a joint venture partner contribution |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureContributions/{contributionId}/child/contributionReferences/{contributionReferenceId}/child/contributionReferenceDFF/{ContributionReferenceId}` | Get descriptive flexfields for a partner contribution reference |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureContributions/{contributionId}/child/contributionDFF/{ContributionId}` | Update a descriptive flexfield for a partner contribution |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureContributions/{contributionId}/child/attachments/{attachmentsUniqID}` | Get an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureContributions/{contributionId}` | Update a joint venture partner contribution |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureContributions` | Get all joint venture partner contributions |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureContributions/{contributionId}/child/attachments/{attachmentsUniqID}` | Update an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureContributions/{contributionId}/child/contributionDFF/{ContributionId}` | Get descriptive flexfields for a partner contribution |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureContributions/{contributionId}/child/contributionReferences/{contributionReferenceId}/child/contributionReferenceDFF/{ContributionReferenceId}` | Update descriptive flexfields for a partner contribution reference |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/jointVentureContributions/{contributionId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/jointVentureContributions/{contributionId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Get a FileContents |

## j oi nt Ve nt ur eD is tr ib ut io ns

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureDistributions/{jointVentureDistributionsUniqID}` | Get a joint venture distribution |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureDistributions/{jointVentureDistributionsUniqID}` | Delete a joint venture distribution |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureDistributions/{jointVentureDistributionsUniqID}/action/reverseContributionDraw` | Reverse partner contribution draws |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureDistributions/{jointVentureDistributionsUniqID}` | Update a joint venture distribution |
| `POST` | `/fscmRestApi/resources/11.13.18.05/jointVentureDistributions` | Get all joint venture distributions |

## j oi nt Ve nt ur eG en er at ed Di st ri bu ti on s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureGeneratedDistributions/{distributionId}/child/distributionDFF` | Get all descriptive flexfields for a joint venture distribution |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureGeneratedDistributions/{distributionId}/child/distributionDFF` | Create the set of descriptive flexfields for a joint venture distribution |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureGeneratedDistributions/{distributionId}` | Delete a distribution for a joint venture generated transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureGeneratedDistributions/{distributionId}` | Get a distribution for a joint venture generated transaction |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureGeneratedDistributions/{distributionId}/child/distributionDFF/{DistributionId}` | Update descriptive flexfields for a joint venture distribution |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureGeneratedDistributions/{distributionId}/child/distributionDFF/{DistributionId}` | Get descriptive flexfields for a joint venture distribution |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureGeneratedDistributions` | Get all distributions for joint venture generated transactions |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureGeneratedDistributions/{distributionId}` | Update a distribution for a joint venture generated transaction |

## j oi nt Ve nt ur eG en er at ed Tr an sa ct io ns

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureGeneratedTransactions/{transactionId}/child/transactionChanges` | Get all joint venture transaction changes |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureGeneratedTransactions/{transactionId}/child/transactionChanges/{transactionChangesUniqID}` | Get a joint venture transaction change |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureGeneratedTransactions/{transactionId}/child/transactionDFF` | Get all descriptive flexfields for a joint venture transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureGeneratedTransactions/{transactionId}/child/transactionDFF` | Create the set of descriptive flexfields for a joint venture transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureGeneratedTransactions/{transactionId}` | Delete a joint venture generated transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureGeneratedTransactions/{transactionId}` | Get a joint venture generated transaction |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureGeneratedTransactions/{transactionId}/child/transactionDFF/{TransactionId}` | Update descriptive flexfields for a joint venture transaction |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureGeneratedTransactions/{transactionId}/child/transactionDFF/{TransactionId}` | Get descriptive flexfields for a joint venture transaction |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureGeneratedTransactions` | Get all joint venture generated transactions |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureGeneratedTransactions/{transactionId}` | Update a joint venture generated transaction |

## j oi nt Ve nt ur eG LD is tr ib ut io ns

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureGLDistributions/{distributionId}/child/distributionDFF` | Create the set of descriptive flexfields for a joint venture distribution |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureGLDistributions/{distributionId}/child/Account` | Get all account key flexfields for a journal line associated with a joint venture transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureGLDistributions/{distributionId}/child/distributionDFF` | Get all descriptive flexfields for a joint venture distribution |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureGLDistributions/{distributionId}/child/partnerOffsetAccount` | Get all account key flexfields for a journal line associated with a joint venture transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureGLDistributions/{distributionId}/child/partnerOffsetAccount/{_CODE_COMBINATION_ID}` | Get account key flexfields for a journal line associated with a joint venture transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureGLDistributions/{distributionId}` | Delete a joint venture general ledger distribution |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureGLDistributions/{distributionId}` | Get a joint venture general ledger distribution |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureGLDistributions/{distributionId}/child/Account/{_CODE_COMBINATION_ID}` | Get account key flexfields for a journal line associated with a joint venture transaction |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureGLDistributions/{distributionId}/child/distributionDFF/{DistributionId}` | Get descriptive flexfields for a joint venture distribution |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureGLDistributions/{distributionId}/child/distributionDFF/{DistributionId}` | Update descriptive flexfields for a joint venture distribution |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureGLDistributions` | Get all joint venture general ledger distributions |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureGLDistributions/{distributionId}` | Update a joint venture general ledger distribution |

## j oi nt Ve nt ur eG LD is tr ib ut io nT ot al s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureGLDistributionTotals/{jointVentureGLDistributionTotalsUniqID}` | Get distribution totals for a joint venture with the specified distribution status |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureGLDistributionTotals` | Get all distribution totals for a joint venture |

## j oi nt Ve nt ur eG LT ra ns ac ti on s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/jointVentureGLTransactions/{transactionId}/action/clearOwnershipAssignment` | Clear ownership definition assignment values |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureGLTransactions/{transactionId}/child/transactionChanges/{transactionChangesUniqID}` | Get a joint venture transaction change |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureGLTransactions/{transactionId}/child/transactionAccount` | Get all account key flexfields for a journal line associated with a joint venture transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureGLTransactions/{transactionId}/child/transactionChanges` | Get all joint venture transaction changes |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureGLTransactions/{transactionId}/child/transactionDFF` | Get all descriptive flexfields for a joint venture transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureGLTransactions/{transactionId}/child/transactionDFF` | Create the set of descriptive flexfields for a joint venture transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureGLTransactions/{transactionId}` | Get a joint venture general ledger transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureGLTransactions/{transactionId}` | Delete a joint venture general ledger transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureGLTransactions/{transactionId}/child/transactionAccount/{_CODE_COMBINATION_ID}` | Get account key flexfields for a journal line associated with a joint venture transaction |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureGLTransactions/{transactionId}/child/transactionDFF/{TransactionId}` | Get descriptive flexfields for a joint venture transaction |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureGLTransactions/{transactionId}/child/transactionDFF/{TransactionId}` | Update descriptive flexfields for a joint venture transaction |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureGLTransactions/{transactionId}` | Update a joint venture general ledger transaction |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureGLTransactions` | Get all joint venture general ledger transactions |

## j oi nt Ve nt ur eG LT ra ns ac ti on To ta ls

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureGLTransactionTotals/{jointVentureGLTransactionTotalsUniqID}` | Get transaction totals for a joint venture with the specified transaction status |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureGLTransactionTotals` | Get all transaction totals for a joint venture |

## j oi nt Ve nt ur eI nv oi ci ng Pa rt ne rs

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/jointVentureInvoicingPartners` | Create a joint venture invoicing partner |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureInvoicingPartners/{invoicingPartnerId}/child/invoicingPartnerDFF` | Get all descriptive flexfields for a joint venture |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureInvoicingPartners/{invoicingPartnerId}/child/invoicingPartnerDFF` | Create a set of descriptive flexfields for a joint venture |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureInvoicingPartners/{invoicingPartnerId}` | Delete a joint venture invoicing partner |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureInvoicingPartners/{invoicingPartnerId}` | Get a joint venture invoicing partner |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureInvoicingPartners/{invoicingPartnerId}/child/invoicingPartnerDFF/{InvoicingPartnerId}` | Update a descriptive flexfield for a joint venture |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureInvoicingPartners/{invoicingPartnerId}/child/invoicingPartnerDFF/{InvoicingPartnerId}` | Get descriptive flexfields for a joint venture |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureInvoicingPartners` | Get all joint venture invoicing partners |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureInvoicingPartners/{invoicingPartnerId}` | Update a joint venture invoicing partner |

## j oi nt Ve nt ur eI nv oi ci ng Pa rt ne rs LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureInvoicingPartnersLOV` | Get all joint venture invoicing partners |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureInvoicingPartnersLOV/{invoicingPartnerId}` | Get a joint venture invoicing partner |

## j oi nt Ve nt ur eM ea su re Ty pe s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/jointVentureMeasureTypes` | Create a joint venture operational measure type |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureMeasureTypes/{measureTypeId}/child/measureTypeDFF` | Get all descriptive flexfields for an operational measure type |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureMeasureTypes/{measureTypeId}/child/measureTypeDFF` | Create the set of descriptive flexfields for an operational measure type |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureMeasureTypes/{measureTypeId}` | Delete a joint venture operational measure type |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureMeasureTypes/{measureTypeId}` | Get a joint venture operational measure type |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureMeasureTypes/{measureTypeId}/child/measureTypeDFF/{MeasureTypeId}` | Update descriptive flexfields for an operational measure type |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureMeasureTypes/{measureTypeId}/child/measureTypeDFF/{MeasureTypeId}` | Get descriptive flexfields for an operational measure type |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureMeasureTypes` | Get all joint venture operational measure types |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureMeasureTypes/{measureTypeId}` | Update a joint venture operational measure type |

## j oi nt Ve nt ur eO pe ra ti on al Me as ur es

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/jointVentureOperationalMeasures` | Create a joint venture operational measure |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureOperationalMeasures/{operationalMeasureId}/child/operationalMeasureDFF` | Create the set of descriptive flexfields for an operational measure |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureOperationalMeasures/{operationalMeasureId}/child/operationalMeasureDFF` | Get all descriptive flexfields for an operational measure |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureOperationalMeasures/{operationalMeasureId}` | Delete a joint venture operational measure |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureOperationalMeasures` | Get all operational measures for the joint venture journal |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureOperationalMeasures/{operationalMeasureId}/child/operationalMeasureDFF/{OperationalMeasureId}` | Update descriptive flexfields for an operational measure |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureOperationalMeasures/{operationalMeasureId}/child/operationalMeasureDFF/{OperationalMeasureId}` | Get descriptive flexfields for an operational measure |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureOperationalMeasures/{operationalMeasureId}/action/reverseOperationalMeasure` | Reverse an operational measure |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureOperationalMeasures/{operationalMeasureId}` | Update a joint venture operational measure |
| `POST` | `/fscmRestApi/resources/11.13.18.05/jointVentureOperationalMeasures/{operationalMeasureId}` | Get an operational measure for the joint venture journal |

## j oi nt Ve nt ur eO pe ra ti on al St at es

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/jointVentureOperationalStates` | Create a joint venture operational state |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureOperationalStates/{operationalStateId}/child/operationalStateDFF` | Get all descriptive flexfields for an operational state |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureOperationalStates/{operationalStateId}/child/operationalStateDFF` | Create the set of descriptive flexfields for an operational state |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureOperationalStates/{operationalStateId}` | Delete a joint venture operational state |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureOperationalStates/{operationalStateId}` | Get a joint venture operational state |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureOperationalStates/{operationalStateId}/child/operationalStateDFF/{OperationalStateId}` | Update descriptive flexfields for an operational state |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureOperationalStates/{operationalStateId}/child/operationalStateDFF/{OperationalStateId}` | Get descriptive flexfields for an operational state |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureOperationalStates` | Get all joint venture operational states |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureOperationalStates/{operationalStateId}` | Update a joint venture operational state |

## j oi nt Ve nt ur eO pt io ns

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureOptions/{applicationId}/child/optionsDFF` | Get all descriptive flexfields for joint venture options |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureOptions/{applicationId}/child/optionsDFF` | Create the set of descriptive flexfields for joint venture options |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureOptions` | Create joint venture options |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureOptions` | Get all joint venture options |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureOptions/{applicationId}/child/optionsDFF/{ApplicationId}` | Update descriptive flexfields for joint venture options |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureOptions/{applicationId}/child/optionsDFF/{ApplicationId}` | Get descriptive flexfields for joint venture options |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureOptions/{applicationId}` | Get joint venture options |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureOptions/{applicationId}` | Update joint venture options |

## j oi nt Ve nt ur eO ve rh ea dD is tr ib ut io ns

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureOverheadDistributions/{distributionId}/child/distributionDFF` | Get all descriptive flexfields for a joint venture distribution |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureOverheadDistributions/{distributionId}/child/distributionDFF` | Create the set of descriptive flexfields for a joint venture distribution |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureOverheadDistributions/{distributionId}` | Delete an overhead distribution |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureOverheadDistributions` | Get all overhead distributions |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureOverheadDistributions/{distributionId}/child/distributionDFF/{DistributionId}` | Update descriptive flexfields for a joint venture distribution |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureOverheadDistributions/{distributionId}/child/distributionDFF/{DistributionId}` | Get descriptive flexfields for a joint venture distribution |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureOverheadDistributions/{distributionId}` | Get an overhead distribution |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureOverheadDistributions/{distributionId}` | Update an overhead distribution |

## j oi nt Ve nt ur eO ve rh ea dM et ho ds

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/jointVentureOverheadMethods/{overheadMethodId}/child/measureTypes` | Create an overhead measure type |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/jointVentureOverheadMethods/{overheadMethodId}/child/slidingScaleThresholds` | Create a sliding scale threshold |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/jointVentureOverheadMethods` | Create a joint venture overhead method |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureOverheadMethods/{overheadMethodId}/child/slidingScaleThresholds/{thresholdId}/child/thresholdDFF/{ThresholdId}` | Get a descriptive flexfield for a sliding scale threshold |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureOverheadMethods/{overheadMethodId}/child/slidingScaleThresholds/{thresholdId}/child/thresholdDFF` | Create the set of descriptive flexfields for a sliding scale threshold |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureOverheadMethods/{overheadMethodId}/child/measureTypes/{overheadMeasureTypeId}/child/overheadMeasureTypeDFF` | Get all descriptive flexfields for an overhead measure type |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureOverheadMethods/{overheadMethodId}/child/overheadMethodDFF` | Create the set of descriptive flexfields for an overhead method |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureOverheadMethods/{overheadMethodId}/child/slidingScaleThresholds/{thresholdId}` | Get a sliding scale threshold |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureOverheadMethods/{overheadMethodId}/child/slidingScaleThresholds/{thresholdId}` | Delete a sliding scale threshold |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureOverheadMethods/{overheadMethodId}/child/overheadMethodDFF` | Get all descriptive flexfields for an overhead method |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureOverheadMethods/{overheadMethodId}/child/measureTypes/{overheadMeasureTypeId}` | Delete an overhead measure type |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureOverheadMethods/{overheadMethodId}` | Delete a joint venture overhead method |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureOverheadMethods/{overheadMethodId}` | Get a joint venture overhead method |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureOverheadMethods/{overheadMethodId}/child/measureTypes/{overheadMeasureTypeId}/child/overheadMeasureTypeDFF` | Create the set of descriptive flexfields for an overhead measure type |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureOverheadMethods/{overheadMethodId}/child/measureTypes/{overheadMeasureTypeId}` | Get an overhead measure type |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureOverheadMethods/{overheadMethodId}/child/measureTypes` | Get all overhead measure types |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureOverheadMethods/{overheadMethodId}/child/slidingScaleThresholds/{thresholdId}/child/thresholdDFF` | Get all descriptive flexfields for a sliding scale threshold |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureOverheadMethods/{overheadMethodId}/child/slidingScaleThresholds/{thresholdId}/child/thresholdDFF/{ThresholdId}` | Update a descriptive flexfield for a sliding scale threshold |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureOverheadMethods/{overheadMethodId}/child/slidingScaleThresholds/{thresholdId}` | Update a sliding scale threshold |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureOverheadMethods/{overheadMethodId}/child/slidingScaleThresholds` | Get all sliding scale thresholds for an overhead method |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureOverheadMethods/{overheadMethodId}/child/measureTypes/{overheadMeasureTypeId}/child/overheadMeasureTypeDFF/{OverheadMeasureTypeId}` | Get descriptive flexfields for an overhead measure type |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureOverheadMethods/{overheadMethodId}` | Update a joint venture overhead method |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureOverheadMethods` | Get all joint venture overhead methods |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureOverheadMethods/{overheadMethodId}/child/overheadMethodDFF/{OverheadMethodId}` | Update descriptive flexfields for an overhead method |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureOverheadMethods/{overheadMethodId}/child/overheadMethodDFF/{OverheadMethodId}` | Get descriptive flexfields for an overhead method |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureOverheadMethods/{overheadMethodId}/child/measureTypes/{overheadMeasureTypeId}/child/overheadMeasureTypeDFF/{OverheadMeasureTypeId}` | Update descriptive flexfields for an overhead measure type |

## j oi nt Ve nt ur eO ve rh ea dT ra ns ac ti on s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureOverheadTransactions/{transactionId}/child/transactionChanges` | Get all joint venture transaction changes |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureOverheadTransactions/{transactionId}/child/transactionChanges/{transactionChangesUniqID}` | Get a joint venture transaction change |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureOverheadTransactions/{transactionId}/child/transactionDFF` | Get all descriptive flexfields for a joint venture transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureOverheadTransactions/{transactionId}/child/transactionDFF` | Create the set of descriptive flexfields for a joint venture transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureOverheadTransactions/{transactionId}` | Delete an overhead transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureOverheadTransactions` | Get all overhead transactions |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureOverheadTransactions/{transactionId}/child/transactionDFF/{TransactionId}` | Update descriptive flexfields for a joint venture transaction |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureOverheadTransactions/{transactionId}/child/transactionDFF/{TransactionId}` | Get descriptive flexfields for a joint venture transaction |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureOverheadTransactions/{transactionId}` | Get an overhead transaction |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureOverheadTransactions/{transactionId}` | Update an overhead transaction |

## j oi nt Ve nt ur eP er io di cA dj us tm en tF ac to rs

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/jointVenturePeriodicAdjustmentFactors/{factorId}/child/factorValues` | Create a factor value |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/jointVenturePeriodicAdjustmentFactors` | Create a joint venture periodic adjustment factor |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVenturePeriodicAdjustmentFactors/{factorId}/child/periodicAdjustmentFactorDFF` | Get all descriptive flexfields for a periodic adjustment factor |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVenturePeriodicAdjustmentFactors/{factorId}/child/factorValues/{valueId}` | Get a factor value |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVenturePeriodicAdjustmentFactors/{factorId}/child/factorValues/{valueId}/child/factorValueDFF` | Get all descriptive flexfields for a factor value |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVenturePeriodicAdjustmentFactors/{factorId}/child/factorValues/{valueId}/child/factorValueDFF` | Create the set of descriptive flexfields for a factor value |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVenturePeriodicAdjustmentFactors/{factorId}/child/periodicAdjustmentFactorDFF` | Create the set of descriptive flexfields for a periodic adjustment factor |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVenturePeriodicAdjustmentFactors/{factorId}` | Delete a joint venture periodic adjustment factor |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVenturePeriodicAdjustmentFactors/{factorId}` | Get a joint venture periodic adjustment factor |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVenturePeriodicAdjustmentFactors/{factorId}/child/factorValues/{valueId}` | Delete a factor value |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVenturePeriodicAdjustmentFactors/{factorId}/child/factorValues/{valueId}/child/factorValueDFF/{ValueId}` | Update the descriptive flexfields for a factor value |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVenturePeriodicAdjustmentFactors/{factorId}/child/periodicAdjustmentFactorDFF/{FactorId}` | Get descriptive flexfields for a periodic adjustment factor |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVenturePeriodicAdjustmentFactors/{factorId}/child/periodicAdjustmentFactorDFF/{FactorId}` | Update the descriptive flexfields for a periodic adjustment factor |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVenturePeriodicAdjustmentFactors/{factorId}` | Update a joint venture periodic adjustment factor |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVenturePeriodicAdjustmentFactors` | Get all joint venture periodic adjustment factors |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVenturePeriodicAdjustmentFactors/{factorId}/child/factorValues` | Get all factor values |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVenturePeriodicAdjustmentFactors/{factorId}/child/factorValues/{valueId}/child/factorValueDFF/{ValueId}` | Get descriptive flexfields for a factor value |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVenturePeriodicAdjustmentFactors/{factorId}/child/factorValues/{valueId}` | Update a factor value |

## j oi nt Ve nt ur eP ro je ct Se ts

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/jointVentureProjectSets/{projectSetId}/child/filterSets` | Create a filter set |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/jointVentureProjectSets/{projectSetId}/child/filterSets/{filterSetId}/child/filters` | Create a filter |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/jointVentureProjectSets/{projectSetId}/child/filterSets/{filterSetId}/child/filters/{filterId}/child/filterValues` | Create a filter value |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/jointVentureProjectSets` | Create a project set |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureProjectSets/{projectSetId}/child/filterSets/{filterSetId}/child/filters/{filterId}/child/projectFilterDFF` | Create the set of descriptive flexfields for a filter |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureProjectSets/{projectSetId}/child/filterSets/{filterSetId}/child/filters/{filterId}/child/projectFilterDFF` | Get all descriptive flexfields for a filter |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureProjectSets/{projectSetId}/child/filterSets/{filterSetId}/child/filters/{filterId}` | Get a filter |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureProjectSets/{projectSetId}/child/filterSets/{filterSetId}/child/filters/{filterId}/child/filterValues/{filterValueId}` | Get a filter value |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureProjectSets/{projectSetId}/child/filterSets/{filterSetId}/child/filters/{filterId}` | Delete a filter |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureProjectSets/{projectSetId}/child/projectSetDFF` | Create the set of descriptive flexfields for a project set |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureProjectSets/{projectSetId}/child/filterSets/{filterSetId}/child/filters/{filterId}/child/filterValues/{filterValueId}/child/projectFilterValueDFF` | Create the set of descriptive flexfields for a filter value |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureProjectSets/{projectSetId}/child/projectSetDFF/{ProjectSetId}` | Get a descriptive flexfield for a project set |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureProjectSets/{projectSetId}/child/filterSets/{filterSetId}/child/filters/{filterId}/child/filterValues/{filterValueId}/child/projectFilterValueDFF/{FilterValueId}` | Get a descriptive flexfield for a filter value |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureProjectSets/{projectSetId}/child/filterSets/{filterSetId}/child/filters/{filterId}/child/filterValues/{filterValueId}` | Delete a filter value |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureProjectSets/{projectSetId}` | Get a project set |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureProjectSets/{projectSetId}` | Delete a project set |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureProjectSets/{projectSetId}/child/filterSets/{filterSetId}` | Get a filter set |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureProjectSets/{projectSetId}/child/filterSets/{filterSetId}` | Delete a filter set |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureProjectSets/{projectSetId}/child/filterSetFilters` | Get all filter sets and their filters |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureProjectSets/{projectSetId}/child/filterSetFilters/{filterSetFiltersUniqID}` | Get a filter set and filters |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureProjectSets/{projectSetId}/child/filterSets/{filterSetId}/child/projectFilterSetDFF` | Get all descriptive flexfields for a filter set |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureProjectSets/{projectSetId}/child/filterSets/{filterSetId}/child/projectFilterSetDFF` | Create the set of descriptive flexfields for a filter set |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureProjectSets/{projectSetId}` | Update a project set |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureProjectSets/{projectSetId}/child/filterSets/{filterSetId}/child/filters/{filterId}/child/filterValues/{filterValueId}` | Update a filter value |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureProjectSets` | Get all project sets |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureProjectSets/{projectSetId}/child/projectSetDFF/{ProjectSetId}` | Update a descriptive flexfield for a project set |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureProjectSets/{projectSetId}/child/projectSetDFF` | Get all descriptive flexfields for a project set |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureProjectSets/{projectSetId}/child/filterSets/{filterSetId}/child/filters/{filterId}/child/filterValues/{filterValueId}/child/projectFilterValueDFF` | Get all descriptive flexfields for a filter value |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureProjectSets/{projectSetId}/child/filterSets/{filterSetId}/child/filters/{filterId}/child/filterValues/{filterValueId}/child/projectFilterValueDFF/{FilterValueId}` | Update a descriptive flexfield for a filter value |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureProjectSets/{projectSetId}/child/filterSets/{filterSetId}/child/filters` | Get all filters |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureProjectSets/{projectSetId}/child/filterSets/{filterSetId}/child/filters/{filterId}` | Update a filter |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureProjectSets/{projectSetId}/child/filterSets/{filterSetId}/child/projectFilterSetDFF/{FilterSetId}` | Get descriptive flexfields for a filter set |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureProjectSets/{projectSetId}/child/filterSets/{filterSetId}/child/projectFilterSetDFF/{FilterSetId}` | Update descriptive flexfields for a filter set |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureProjectSets/{projectSetId}/child/filterSets/{filterSetId}` | Update a filter set |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureProjectSets/{projectSetId}/child/filterSets` | Get all filter sets |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureProjectSets/{projectSetId}/child/filterSets/{filterSetId}/child/filters/{filterId}/child/filterValues` | Get all filter values |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureProjectSets/{projectSetId}/child/filterSets/{filterSetId}/child/filters/{filterId}/child/projectFilterDFF/{FilterId}` | Get descriptive flexfields for a filter |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureProjectSets/{projectSetId}/child/filterSets/{filterSetId}/child/filters/{filterId}/child/projectFilterDFF/{FilterId}` | Update descriptive flexfields for a filter |

## j oi nt Ve nt ur es

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/stakeholderReportingBooks` | Create a stakeholder reporting book |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/ownershipDefinitions/{ownershipDefinitionId}/child/ownershipPercentages` | Create a set of ownership percentage for an ownership definition |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/stakeholders` | Create a joint venture stakeholder |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/jointVentureCostCenters` | Create a joint venture cost center |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/jointVentureCostCenters/{costCenterId}/child/distributableValueSets` | Create a distributable value set |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/ownershipDefinitions` | Create a set of ownership definitions for a joint venture |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/excludedSubledgers` | Create an excluded subledger application |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/ownershipDefinitions/{ownershipDefinitionId}/child/attachments` | Create an attachment |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/distributableProjectRules` | Create a distributable project rule |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/stakeholders/{stakeholderId}/child/attachments` | Create an attachment |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/attachments` | Create an attachment |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/jointVentures` | Create a joint venture |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/stakeholders/{stakeholderId}/child/stakeholderDFF` | Create a set of descriptive flexfields for a joint venture stakeholder |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/stakeholders/{stakeholderId}/child/stakeholderDFF` | Get all descriptive flexfields for a joint venture stakeholder |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/ownershipDefinitions/{ownershipDefinitionId}` | Delete an ownership definition |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/ownershipDefinitions/{ownershipDefinitionId}/child/attachments/{attachmentsUniqID}` | Delete an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/stakeholders/{stakeholderId}/child/attachments/{attachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/ownershipDefinitions` | Get all ownership definitions associated with a joint venture |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/messages` | Get all joint venture messages |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/excludedSubledgers` | Get all excluded subledger applications |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/excludedSubledgers/{excludedSubledgerId}` | Delete an excluded subledger application |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/stakeholders/{stakeholderId}` | Get a joint venture stakeholder |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/excludedSubledgers/{excludedSubledgerId}` | Get an excluded subledger application |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/messages/{errorCode}` | Get a joint venture message |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/jointVentureDFF` | Get all descriptive flexfields for a joint venture |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/jointVentureDFF` | Create a set of descriptive flexfields for a joint venture |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/ownershipDefinitions/{ownershipDefinitionId}/child/attachments` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/stakeholders/{stakeholderId}/child/attachments` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/ownershipDefinitions/{ownershipDefinitionId}/child/ownershipPercentages/{ownershipPercentageId}/child/ownershipPercentageDFF` | Get all descriptive flexfields for an ownership percentage associated with an ownership definition |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/ownershipDefinitions/{ownershipDefinitionId}/child/ownershipPercentages/{ownershipPercentageId}/child/ownershipPercentageDFF` | Create a descriptive flexfield for an ownership percentage associated with an ownership definition |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/stakeholders/{stakeholderId}/child/attachments/{attachmentsUniqID}` | Delete an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/stakeholders/{stakeholderId}` | Delete a joint venture stakeholder |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/stakeholderReportingBooks/{stakeholderReportingBookId}` | Get a stakeholder reporting book |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/stakeholderReportingBooks/{stakeholderReportingBookId}` | Delete a stakeholder reporting book |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/ownershipDefinitions/{ownershipDefinitionId}/child/ownershipDefinitionDFF` | Create a descriptive flexfield for an ownership definition associated with a joint venture |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/ownershipDefinitions/{ownershipDefinitionId}/child/attachments/{attachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/ownershipDefinitions/{ownershipDefinitionId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/stakeholders/{stakeholderId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/ownershipDefinitions/{ownershipDefinitionId}/child/ownershipPercentages` | Get all ownership percentages associated with an ownership definition |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/ownershipDefinitions/{ownershipDefinitionId}/child/ownershipPercentages/{ownershipPercentageId}` | Delete an ownership percentage for a stakeholder |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/ownershipDefinitions/{ownershipDefinitionId}/child/ownershipDefinitionDFF` | Get all descriptive flexfields for an ownership definition associated with a joint venture |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/attachments` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/jointVentureCostCenters/{costCenterId}/child/distributableValueSets/{distributableValuesId}` | Get a distributable value set |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/attachments/{attachmentsUniqID}` | Delete an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/jointVentureCostCenters/{costCenterId}/child/distributableValueSets/{distributableValuesId}/child/distributableValueSetDFF` | Get all descriptive flexfields for a distributable value set |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/jointVentureCostCenters/{costCenterId}/child/distributableValueSets/{distributableValuesId}/child/distributableValueSetDFF` | Create the set of descriptive flexfields for a distributable value set |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/jointVentureCostCenters/{costCenterId}/child/costCenterDFF` | Get all descriptive flexfields for a cost center associated with a joint venture |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/jointVentureCostCenters/{costCenterId}` | Get a joint venture cost center |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/jointVentureCostCenters` | Get all cost centers associated with the joint venture |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/jointVentureCostCenters/{costCenterId}/child/distributableValueSets/{distributableValuesId}` | Delete a distributable value set |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/attachments/{attachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/jointVentureCostCenters/{costCenterId}` | Delete a joint venture cost center |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}` | Delete a joint venture |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/jointVentureCostCenters/{costCenterId}/child/costCenterDFF` | Create a descriptive flexfield for a cost center associated with a joint venture |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/distributableProjectRules/{distributableProjectRuleId}/child/distributableProjectDFF` | Get all descriptive flexfields for a distributable project rule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/distributableProjectRules/{distributableProjectRuleId}/child/distributableProjectDFF` | Create the set of descriptive flexfields for a distributable project rule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/distributableProjectRules/{distributableProjectRuleId}` | Get a distributable project rule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/distributableProjectRules/{distributableProjectRuleId}` | Delete a distributable project rule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}` | Get a joint venture |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/stakeholders/{stakeholderId}/child/stakeholderDFF/{StakeholderId}` | Get descriptive flexfields for a joint venture stakeholder |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/stakeholders/{stakeholderId}/child/attachments/{attachmentsUniqID}` | Update an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/stakeholders/{stakeholderId}/child/stakeholderDFF/{StakeholderId}` | Update a descriptive flexfield for a joint venture stakeholder |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/stakeholders/{stakeholderId}/child/attachments/{attachmentsUniqID}` | Get an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/ownershipDefinitions/{ownershipDefinitionId}/child/ownershipPercentages/{ownershipPercentageId}/child/ownershipPercentageDFF/{OwnershipLineId}` | Update a descriptive flexfield for an ownership percentage associated with an ownership definition |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/ownershipDefinitions/{ownershipDefinitionId}/child/ownershipPercentages/{ownershipPercentageId}/child/ownershipPercentageDFF/{OwnershipLineId}` | Get descriptive flexfields for an ownership percentage associated with an ownership definition |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/stakeholderReportingBooks` | Get all stakeholder reporting books |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/stakeholders` | Get all joint venture stakeholders |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/stakeholders/{stakeholderId}` | Update a joint venture stakeholder |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/attachments/{attachmentsUniqID}` | Get an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/attachments/{attachmentsUniqID}` | Update an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/stakeholderReportingBooks/{stakeholderReportingBookId}` | Update a stakeholder reporting book |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}` | Update a joint venture |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentures` | Get all joint ventures |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/ownershipDefinitions/{ownershipDefinitionId}` | Update an ownership definition |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/ownershipDefinitions/{ownershipDefinitionId}` | Get an ownership definition |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/jointVentureCostCenters/{costCenterId}/child/distributableValueSets/{distributableValuesId}/child/distributableValueSetDFF/{DistributableValuesId}` | Get descriptive flexfields for a distributable value set |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/ownershipDefinitions/{ownershipDefinitionId}/child/attachments/{attachmentsUniqID}` | Update an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/ownershipDefinitions/{ownershipDefinitionId}/child/attachments/{attachmentsUniqID}` | Get an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/jointVentureCostCenters/{costCenterId}/child/distributableValueSets/{distributableValuesId}` | Update a distributable value set |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/jointVentureDFF/{JointVentureId}` | Get descriptive flexfields for a joint venture |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/distributableProjectRules/{distributableProjectRuleId}` | Update a distributable project rule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/distributableProjectRules/{distributableProjectRuleId}/child/distributableProjectDFF/{DistributableProjectValueId}` | Get descriptive flexfields for a distributable project rule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/jointVentureCostCenters/{costCenterId}/child/distributableValueSets/{distributableValuesId}/child/distributableValueSetDFF/{DistributableValuesId}` | Update descriptive flexfields for a distributable value set |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/distributableProjectRules` | Get all distributable project rules associated with a joint venture |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/jointVentureDFF/{JointVentureId}` | Update a descriptive flexfield for a joint venture |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/ownershipDefinitions/{ownershipDefinitionId}/child/ownershipDefinitionDFF/{OwnershipPercentageId}` | Update a descriptive flexfield for an ownership definition associated with a joint venture |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/ownershipDefinitions/{ownershipDefinitionId}/child/ownershipPercentages/{ownershipPercentageId}` | Update an ownership percentage for a stakeholder |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/jointVentureCostCenters/{costCenterId}/child/costCenterDFF/{CostCenterId}` | Get descriptive flexfields for a cost center associated with a joint venture |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/ownershipDefinitions/{ownershipDefinitionId}/child/ownershipPercentages/{ownershipPercentageId}` | Get an ownership percentage for a stakeholder |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/distributableProjectRules/{distributableProjectRuleId}/child/distributableProjectDFF/{DistributableProjectValueId}` | Update descriptive flexfields for a distributable project rule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/ownershipDefinitions/{ownershipDefinitionId}/child/ownershipDefinitionDFF/{OwnershipPercentageId}` | Get descriptive flexfields for an ownership definition associated with a joint venture |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/jointVentureCostCenters/{costCenterId}/child/distributableValueSets` | Get all distributable value sets associated with a joint venture cost center |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/jointVentureCostCenters/{costCenterId}/child/costCenterDFF/{CostCenterId}` | Update a descriptive flexfield for a cost center associated with a joint venture |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/ownershipDefinitions/{ownershipDefinitionId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Get a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/ownershipDefinitions/{ownershipDefinitionId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/stakeholders/{stakeholderId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Get a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/stakeholders/{stakeholderId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/jointVentures/{jointVentureId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Get a FileContents |

## j oi nt Ve nt ur eS LA Da te Re fe re nc es LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureSLADateReferencesLOV` | Get all supporting references that derive a date value |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureSLADateReferencesLOV/{shortName}` | Get a supporting reference that derives a date value |

## j oi nt Ve nt ur eS LA Di st ri bu ti on s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureSLADistributions/{distributionId}/child/distributionDFF` | Create the set of descriptive flexfields for a joint venture distribution |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureSLADistributions/{distributionId}/child/Account` | Get all account key flexfields for a journal line associated with a joint venture transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureSLADistributions/{distributionId}/child/distributionDFF` | Get all descriptive flexfields for a joint venture distribution |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureSLADistributions/{distributionId}/child/partnerOffsetAccount` | Get all account key flexfields for a journal line associated with a joint venture transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureSLADistributions/{distributionId}/child/partnerOffsetAccount/{_CODE_COMBINATION_ID}` | Get account key flexfields for a journal line associated with a joint venture transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureSLADistributions/{distributionId}` | Delete a joint venture subledger distribution |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureSLADistributions/{distributionId}` | Get a joint venture subledger distribution |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureSLADistributions/{distributionId}/child/Account/{_CODE_COMBINATION_ID}` | Get account key flexfields for a journal line associated with a joint venture transaction |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureSLADistributions/{distributionId}/child/distributionDFF/{DistributionId}` | Get descriptive flexfields for a joint venture distribution |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureSLADistributions/{distributionId}/child/distributionDFF/{DistributionId}` | Update descriptive flexfields for a joint venture distribution |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureSLADistributions` | Get all joint venture subledger distributions |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureSLADistributions/{distributionId}` | Update a joint venture subledger distribution |

## j oi nt Ve nt ur eS LA Di st ri bu ti on To ta ls

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureSLADistributionTotals/{jointVentureSLADistributionTotalsUniqID}` | Get distribution totals for a joint venture with the specified distribution status |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureSLADistributionTotals` | Get all distribution totals for a joint venture |

## j oi nt Ve nt ur eS LA Su pp or ti ng Re fe re nc es LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureSLASupportingReferencesLOV` | Get all supporting references |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureSLASupportingReferencesLOV/{shortName}` | Get a supporting reference |

## j oi nt Ve nt ur eS LA Tr an sa ct io ns

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/jointVentureSLATransactions/{jointVentureSLATransactionsUniqID}/action/clearOwnershipAssignment` | Clear ownership definition assignment values |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureSLATransactions/{jointVentureSLATransactionsUniqID}/child/transactionChanges/{transactionChangesUniqID}` | Get a joint venture transaction change |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureSLATransactions/{jointVentureSLATransactionsUniqID}/child/transactionAccount` | Get all account key flexfields for a journal line associated with a joint venture transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureSLATransactions/{jointVentureSLATransactionsUniqID}/child/transactionChanges` | Get all joint venture transaction changes |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureSLATransactions/{jointVentureSLATransactionsUniqID}/child/transactionDFF` | Get all descriptive flexfields for a joint venture transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureSLATransactions/{jointVentureSLATransactionsUniqID}/child/transactionDFF` | Create the set of descriptive flexfields for a joint venture transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureSLATransactions/{jointVentureSLATransactionsUniqID}` | Get a joint venture subledger transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureSLATransactions/{jointVentureSLATransactionsUniqID}` | Delete a joint venture subledger transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureSLATransactions/{jointVentureSLATransactionsUniqID}/child/transactionAccount/{_CODE_COMBINATION_ID}` | Get account key flexfields for a journal line associated with a joint venture transaction |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureSLATransactions/{jointVentureSLATransactionsUniqID}/child/transactionDFF/{TransactionId}` | Get descriptive flexfields for a joint venture transaction |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureSLATransactions/{jointVentureSLATransactionsUniqID}/child/transactionDFF/{TransactionId}` | Update descriptive flexfields for a joint venture transaction |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureSLATransactions/{jointVentureSLATransactionsUniqID}` | Update a joint venture subledger transaction |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureSLATransactions` | Get all joint venture subledger transactions |

## j oi nt Ve nt ur eS LA Tr an sa ct io nT ot al s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureSLATransactionTotals/{jointVentureSLATransactionTotalsUniqID}` | Get transaction totals for a joint venture with the specified transaction status |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureSLATransactionTotals` | Get all transaction totals for a joint venture |

## j oi nt Ve nt ur eS ou rc eT ra ns ac ti on s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/jointVentureSourceTransactions/{transactionId}/child/attachments` | Create an attachment |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/jointVentureSourceTransactions` | Create a joint venture source transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureSourceTransactions/{transactionId}/child/sourceTransactionDFF` | Get all descriptive flexfields for a source transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureSourceTransactions/{transactionId}/child/attachments` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureSourceTransactions/{transactionId}/child/attachments/{attachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureSourceTransactions/{transactionId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureSourceTransactions/{transactionId}/child/sourceTransactionDFF` | Create the set of descriptive flexfields for a source transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureSourceTransactions/{transactionId}` | Delete a joint venture source transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureSourceTransactions/{transactionId}` | Get a joint venture source transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureSourceTransactions/{transactionId}/child/attachments/{attachmentsUniqID}` | Delete an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureSourceTransactions/{transactionId}/child/sourceTransactionDFF/{TransactionId}` | Update descriptive flexfields for a source transaction |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureSourceTransactions/{transactionId}/child/sourceTransactionDFF/{TransactionId}` | Get descriptive flexfields for a source transaction |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureSourceTransactions/{transactionId}/child/attachments/{attachmentsUniqID}` | Get an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureSourceTransactions/{transactionId}` | Update a joint venture source transaction |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureSourceTransactions` | Get all joint venture source transactions |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureSourceTransactions/{transactionId}/child/attachments/{attachmentsUniqID}` | Update an attachment |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/jointVentureSourceTransactions/{transactionId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/jointVentureSourceTransactions/{transactionId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Get a FileContents |

## j oi nt Ve nt ur eS ta ke ho ld er sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureStakeholdersLOV` | Get all stakeholders associated with a joint venture |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureStakeholdersLOV/{jointVentureStakeholdersLOVUniqID}` | Get a stakeholder associated with a joint venture |

## j oi nt Ve nt ur eS ta tu sC ou nt s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureStatusCounts` | Get all counts for joint ventures at every status |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureStatusCounts/{jointVentureStatusCountsUniqID}` | Get a count of joint ventures with the specified status |

## j oi nt Ve nt ur eT ra ns ac ti on s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureTransactions/{jointVentureTransactionsUniqID}/child/transactionChanges` | Get all joint venture transaction changes |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureTransactions/{jointVentureTransactionsUniqID}/child/transactionChanges/{transactionChangesUniqID}` | Get a joint venture transaction change |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureTransactions/{jointVentureTransactionsUniqID}` | Delete a joint venture transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jointVentureTransactions/{jointVentureTransactionsUniqID}` | Get a joint venture transaction |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureTransactions` | Get all joint venture transactions |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/jointVentureTransactions/{jointVentureTransactionsUniqID}` | Update a joint venture transaction |

## j ou rn al Ba tc he s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/journalBatches/{JeBatchId}/child/journalHeaders/{journalHeadersUniqID}/child/journalDFF/{JeHeaderId}` | Get a descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/journalBatches/{JeBatchId}/child/journalHeaders/{journalHeadersUniqID}/child/journalAttachment/{journalAttachmentUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/journalBatches/{JeBatchId}/child/journalHeaders/{journalHeadersUniqID}/child/journalGDF/{JeHeaderId}` | Get a global descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/journalBatches/{JeBatchId}/child/journalHeaders/{journalHeadersUniqID}/child/journalDFF` | Get all descriptive flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/journalBatches/{JeBatchId}/child/journalHeaders/{journalHeadersUniqID}/child/journalAttachment` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/journalBatches/{JeBatchId}/child/journalHeaders` | Get all journals |
| `GET` | `/fscmRestApi/resources/11.13.18.05/journalBatches/{JeBatchId}/child/journalHeaders/{journalHeadersUniqID}/child/journalAttachment/{journalAttachmentUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/journalBatches/{JeBatchId}/child/journalHeaders/{journalHeadersUniqID}/child/journalAttachment/{journalAttachmentUniqID}` | Get an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/journalBatches/{JeBatchId}/child/journalHeaders/{journalHeadersUniqID}/child/journalGDF` | Get all global descriptive flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/journalBatches/{JeBatchId}/child/journalHeaders/{journalHeadersUniqID}/child/journalLines/{journalLinesUniqID}/child/journalLineDFF` | Get all descriptive flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/journalBatches/{JeBatchId}/child/journalHeaders/{journalHeadersUniqID}/child/journalLines/{journalLinesUniqID}/child/journalLineDFF/{journalLineDFFUniqID}` | Get a descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/journalBatches/{JeBatchId}/child/journalHeaders/{journalHeadersUniqID}/child/journalLines/{journalLinesUniqID}/child/journalLineGDF` | Get all global descriptive flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/journalBatches/{JeBatchId}/child/journalHeaders/{journalHeadersUniqID}/child/journalLines/{journalLinesUniqID}/child/journalLineGDF/{journalLineGDFUniqID}` | Get a global descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/journalBatches/{JeBatchId}/child/journalHeaders/{journalHeadersUniqID}/child/journalLines` | Get all lines |
| `GET` | `/fscmRestApi/resources/11.13.18.05/journalBatches/{JeBatchId}/child/journalHeaders/{journalHeadersUniqID}/child/journalLines/{journalLinesUniqID}` | Get a line |
| `GET` | `/fscmRestApi/resources/11.13.18.05/journalBatches/{JeBatchId}/child/journalHeaders/{journalHeadersUniqID}/child/journalLines/{journalLinesUniqID}/child/capturedInformationDFF` | Get all captured information descriptive flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/journalBatches/{JeBatchId}/child/journalHeaders/{journalHeadersUniqID}/child/journalLines/{journalLinesUniqID}/child/capturedInformationDFF/{capturedInformationDFFUniqID}` | Get a captured information descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/journalBatches/{JeBatchId}/child/batchAttachment/{batchAttachmentUniqID}` | Get an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/journalBatches/{JeBatchId}/child/batchAttachment/{batchAttachmentUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/journalBatches/{JeBatchId}` | Delete a batch |
| `GET` | `/fscmRestApi/resources/11.13.18.05/journalBatches/{JeBatchId}/child/batchAttachment` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/journalBatches/{JeBatchId}` | Get a batch |
| `GET` | `/fscmRestApi/resources/11.13.18.05/journalBatches/{JeBatchId}/child/journalActionLogs/{journalActionLogsUniqID}` | Get a log entry |
| `GET` | `/fscmRestApi/resources/11.13.18.05/journalBatches/{JeBatchId}/child/journalActionLogs` | Get all log entries |
| `GET` | `/fscmRestApi/resources/11.13.18.05/journalBatches/{JeBatchId}/child/batchAttachment/{batchAttachmentUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/journalBatches/{JeBatchId}/child/journalHeaders/{journalHeadersUniqID}` | Get a journal |
| `GET` | `/fscmRestApi/resources/11.13.18.05/journalBatches/{JeBatchId}/child/journalBatchDFF` | Get all descriptive flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/journalBatches/{JeBatchId}/child/journalErrors/{journalErrorsUniqID}` | Get an error |
| `GET` | `/fscmRestApi/resources/11.13.18.05/journalBatches/{JeBatchId}/child/journalBatchDFF/{JeBatchId2}` | Get a descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/journalBatches/{JeBatchId}/child/journalErrors` | Get all errors |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/journalBatches/{JeBatchId}` | Update a batch |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/journalBatches` | Get all batches |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/journalBatches/{JeBatchId}/child/batchAttachment/{batchAttachmentUniqID}/enclosure/FileContents` | Get a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/journalBatches/{JeBatchId}/child/journalHeaders/{journalHeadersUniqID}/child/journalAttachment/{journalAttachmentUniqID}/enclosure/FileContents` | Replace a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/journalBatches/{JeBatchId}/child/journalHeaders/{journalHeadersUniqID}/child/journalAttachment/{journalAttachmentUniqID}/enclosure/FileContents` | Get a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/journalBatches/{JeBatchId}/child/batchAttachment/{batchAttachmentUniqID}/enclosure/FileContents` | Replace a FileContents |

## j ou rn al Ca te go ri es LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/journalCategoriesLOV` | Get all journal categories |
| `GET` | `/fscmRestApi/resources/11.13.18.05/journalCategoriesLOV/{JeCategoryName}` | Get a journal category |

## j ou rn al So ur ce sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/journalSourcesLOV` | Get all journal sources |
| `GET` | `/fscmRestApi/resources/11.13.18.05/journalSourcesLOV/{JeSourceName}` | Get a journal source |

## l ea se Ac co un ti ng Pa ym en tI te ms

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/leaseAccountingPaymentItems/{PaymentItemId}` | Get a payment item |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/leaseAccountingPaymentItems/{PaymentItemId}` | Update a payment item |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/leaseAccountingPaymentItems` | Get all payment items |

## l ed ge rB al an ce s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/ledgerBalances` | Get all account balances |
| `GET` | `/fscmRestApi/resources/11.13.18.05/ledgerBalances/{ledgerBalancesUniqID}` | GET action not supported |

## l ed ge rs LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/ledgersLOV` | Get all ledgers |
| `GET` | `/fscmRestApi/resources/11.13.18.05/ledgersLOV/{LedgerId}` | Get a ledger |

## l eg al En ti ti es LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/legalEntitiesLOV` | Get all legal entities |
| `GET` | `/fscmRestApi/resources/11.13.18.05/legalEntitiesLOV/{LegalEntityId}` | Get a legal entity |

## l eg al Ju ri sd ic ti on sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/legalJurisdictionsLOV` | Get all legal jurisdictions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/legalJurisdictionsLOV/{JurisdictionId}` | Get a legal jurisdiction |

## l eg al Re po rt in gU ni ts LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/legalReportingUnitsLOV` | Get all legal reporting units |
| `GET` | `/fscmRestApi/resources/11.13.18.05/legalReportingUnitsLOV/{LegalReportingUnitId}` | Get a legal reporting unit |

## l oc al iz at io nD oc um en tS eq ue nc eD er iv at io ns

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/localizationDocumentSequenceDerivations` | Create multiple document sequence derivation records |
| `GET` | `/fscmRestApi/resources/11.13.18.05/localizationDocumentSequenceDerivations/{DocumentSequenceDerivationId}` | Get a document sequence derivation record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/localizationDocumentSequenceDerivations/{DocumentSequenceDerivationId}` | Delete a document sequence derivation record |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/localizationDocumentSequenceDerivations/{DocumentSequenceDerivationId}` | Update a document sequence derivation record |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/localizationDocumentSequenceDerivations` | Get all document sequence derivation records |

## m em oL in es LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/memoLinesLOV` | Get all memo lines |
| `GET` | `/fscmRestApi/resources/11.13.18.05/memoLinesLOV/{MemoLineId}` | Get a memo line |

## n et ti ng Ag re em en ts

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/nettingAgreements/{nettingAgreementsUniqID}/child/nettingCustomerTradingPartners` | Create a customer trading partner |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/nettingAgreements/{nettingAgreementsUniqID}/child/nettingPayGroups` | Create a pay group |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/nettingAgreements/{nettingAgreementsUniqID}/child/nettingReceivablesTransactionTypes` | Create a receivables transaction type |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/nettingAgreements/{nettingAgreementsUniqID}/child/nettingSupplierTradingPartners` | Create a supplier trading partner |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/nettingAgreements/{nettingAgreementsUniqID}/child/nettingPayablesInvoiceTypes` | Create a payables invoice type |
| `GET` | `/fscmRestApi/resources/11.13.18.05/nettingAgreements/{nettingAgreementsUniqID}/child/nettingPayablesInvoiceTypes/{NettingInvTypeId}` | Delete a payables invoice type |
| `GET` | `/fscmRestApi/resources/11.13.18.05/nettingAgreements/{nettingAgreementsUniqID}/child/nettingPayablesInvoiceTypes/{NettingInvTypeId}` | Get a payables invoice type |
| `GET` | `/fscmRestApi/resources/11.13.18.05/nettingAgreements` | Create a netting agreement |
| `GET` | `/fscmRestApi/resources/11.13.18.05/nettingAgreements/{nettingAgreementsUniqID}/child/nettingSupplierTradingPartners/{NettingSupplierId}` | Delete a supplier trading partner |
| `GET` | `/fscmRestApi/resources/11.13.18.05/nettingAgreements/{nettingAgreementsUniqID}/child/nettingSupplierTradingPartners/{NettingSupplierId}` | Get a supplier trading partner |
| `GET` | `/fscmRestApi/resources/11.13.18.05/nettingAgreements/{nettingAgreementsUniqID}/child/nettingReceivablesTransactionTypes/{NetTrxTypeId}` | Delete a receivables transaction type |
| `GET` | `/fscmRestApi/resources/11.13.18.05/nettingAgreements/{nettingAgreementsUniqID}/child/nettingReceivablesTransactionTypes/{NetTrxTypeId}` | Get a receivables transaction type |
| `GET` | `/fscmRestApi/resources/11.13.18.05/nettingAgreements/{nettingAgreementsUniqID}/child/nettingPayGroups/{NettingPayGroupId}` | Delete a pay group |
| `GET` | `/fscmRestApi/resources/11.13.18.05/nettingAgreements/{nettingAgreementsUniqID}/child/nettingCustomerTradingPartners/{NettingCustomerId}` | Delete a customer trading partner |
| `GET` | `/fscmRestApi/resources/11.13.18.05/nettingAgreements/{nettingAgreementsUniqID}` | Get a netting agreement |
| `GET` | `/fscmRestApi/resources/11.13.18.05/nettingAgreements/{nettingAgreementsUniqID}/child/nettingCustomerTradingPartners/{NettingCustomerId}` | Get a customer trading partner |
| `GET` | `/fscmRestApi/resources/11.13.18.05/nettingAgreements/{nettingAgreementsUniqID}/child/nettingPayGroups/{NettingPayGroupId}` | Get a pay group |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/nettingAgreements/{nettingAgreementsUniqID}/child/nettingReceivablesTransactionTypes/{NetTrxTypeId}` | Update a receivables transaction type |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/nettingAgreements/{nettingAgreementsUniqID}/child/nettingSupplierTradingPartners` | Get all supplier trading partners |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/nettingAgreements/{nettingAgreementsUniqID}` | Update a netting agreement |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/nettingAgreements/{nettingAgreementsUniqID}/child/nettingSupplierTradingPartners/{NettingSupplierId}` | Update a supplier trading partner |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/nettingAgreements` | Get all netting agreements |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/nettingAgreements/{nettingAgreementsUniqID}/child/nettingReceivablesTransactionTypes` | Get all receivables transaction types |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/nettingAgreements/{nettingAgreementsUniqID}/child/nettingPayablesInvoiceTypes` | Get all payables invoice types |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/nettingAgreements/{nettingAgreementsUniqID}/child/nettingCustomerTradingPartners/{NettingCustomerId}` | Update a customer trading partner |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/nettingAgreements/{nettingAgreementsUniqID}/child/nettingPayGroups/{NettingPayGroupId}` | Update a pay group |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/nettingAgreements/{nettingAgreementsUniqID}/child/nettingPayGroups` | Get all pay groups |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/nettingAgreements/{nettingAgreementsUniqID}/child/nettingCustomerTradingPartners` | Get all customer trading partners |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/nettingAgreements/{nettingAgreementsUniqID}/child/nettingPayablesInvoiceTypes/{NettingInvTypeId}` | Update a payables invoice type |

## n et ti ng Le ga lE nt it ie sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/nettingLegalEntitiesLOV` | Get all netting legal entities |
| `GET` | `/fscmRestApi/resources/11.13.18.05/nettingLegalEntitiesLOV/{LegalEntityId}` | Get a netting legal entity |

## o th er

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/api/erp/integrations/resources/v1/{locale}/files/{id}/transactionExceptions` | Get exception details for a file |
| `GET` | `/api/erp/integrations/resources/v1/{locale}/stats/transactionCountSummary` | Get all transaction metrics by time frame |
| `GET` | `/api/erp/integrations/resources/v1/{locale}/transactionNumber/{trxNumber}/exceptionDetails` | Get exception details for a transaction |
| `GET` | `/crmRestApi/resources/11.13.18.05/noteTypes` | Get all note types |
| `GET` | `/crmRestApi/resources/11.13.18.05/fndStaticLookups` | Get all lookups. |
| `GET` | `/api/erp/integrations/resources/v1/{locale}/dimensionView` | Get all transaction metrics by file and dimension |
| `GET` | `/api/erp/integrations/resources/v1/{locale}/files/{id}` | Get a file status and metric details |
| `GET` | `/api/erp/integrations/resources/v1/{locale}/files/download` | Get all file exceptions |
| `GET` | `/api/erp/integrations/resources/v1/{locale}/stats/fileCountSummary` | Get all file metrics by time frame |
| `GET` | `/api/erp/integrations/resources/v1/{locale}/files/{id}/transactionCounts` | Get all transaction metrics by file |
| `GET` | `/api/erp/integrations/resources/v1/{locale}/files` | Get all files uploaded in a specified time frame |
| `POST` | `/api/erp/integrations/resources/v1/{locale}/files/{id}/postProcessDetails` | Get postprocessing substages status details |
| `POST` | `/api/erp/integrations/resources/v1/{locale}/files/upload` | Upload a file |

## o ut pu tT ax Cl as si fi ca ti on sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/outputTaxClassificationsLOV/{outputTaxClassificationsLOVUniqID}` | Get an output tax classification |
| `GET` | `/fscmRestApi/resources/11.13.18.05/outputTaxClassificationsLOV` | Get all output tax classifications |

## o wn er sh ip De fi ni ti on Na me sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/ownershipDefinitionNamesLOV/{ownershipDefinitionNamesLOVUniqID}` | Get an ownership definition name assigned to a joint venture |
| `GET` | `/fscmRestApi/resources/11.13.18.05/ownershipDefinitionNamesLOV` | Get all ownership definition names assigned to a joint venture |

## p ar ty Fi sc al Cl as si fi ca ti on s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/partyFiscalClassifications/{ClassificationTypeId}/child/fiscalClassificationTypeTaxRegimeAssociations/{fiscalClassificationTypeTaxRegimeAssociationsUniqID}` | Get a tax regime for a party fiscal classification |
| `GET` | `/fscmRestApi/resources/11.13.18.05/partyFiscalClassifications/{ClassificationTypeId}/child/fiscalClassificationTypeTaxRegimeAssociations` | Create a tax regime for a party fiscal classification |
| `GET` | `/fscmRestApi/resources/11.13.18.05/partyFiscalClassifications` | Create a party fiscal classification |
| `GET` | `/fscmRestApi/resources/11.13.18.05/partyFiscalClassifications/{ClassificationTypeId}` | Get a party fiscal classification |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/partyFiscalClassifications/{ClassificationTypeId}/child/fiscalClassificationTypeTaxRegimeAssociations/{fiscalClassificationTypeTaxRegimeAssociationsUniqID}` | Update a tax regime for a party fiscal classification |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/partyFiscalClassifications/{ClassificationTypeId}/child/fiscalClassificationTypeTaxRegimeAssociations` | Get all tax regimes for a party fiscal classification |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/partyFiscalClassifications` | Get all party fiscal classifications |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/partyFiscalClassifications/{ClassificationTypeId}` | Update a party fiscal classification |

## p ar ty Ta xP ro fi le s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/partyTaxProfiles/{PartyTaxProfileId}` | Get a party tax profile |
| `GET` | `/fscmRestApi/resources/11.13.18.05/partyTaxProfiles` | Create a party tax profile |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/partyTaxProfiles/{PartyTaxProfileId}` | Update a party tax profile |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/partyTaxProfiles` | Get all party tax profiles |

## p ay ab le sA nd Pr oc ur em en tO pt io ns

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesAndProcurementOptions` | Get payables and procurement options for all business units |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesAndProcurementOptions/{businessUnitId}` | Get payables and procurement options for a business unit |

## p ay ab le sC al en da rT yp es

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesCalendarTypes/{payablesCalendarTypesUniqID}/child/payablesCalendarPeriods` | Get all calendar periods for one calendar type |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesCalendarTypes/{payablesCalendarTypesUniqID}/child/payablesCalendarPeriods/{payablesCalendarPeriodsUniqID}` | Get calendar periods for one calendar type |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesCalendarTypes` | Get all calendar types |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesCalendarTypes/{payablesCalendarTypesUniqID}` | Get one calendar type |

## p ay ab le sC al en da rT yp es LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesCalendarTypesLOV` | Get all payables calendars |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesCalendarTypesLOV/{payablesCalendarTypesLOVUniqID}` | Get a payables calendar |

## p ay ab le sD is tr ib ut io nS et s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesDistributionSets/{distributionSetId}/child/payablesDistributionSetsLines/{payablesDistributionSetsLinesUniqID}` | Get a distribution set line for a distribution set |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesDistributionSets/{distributionSetId}/child/payablesDistributionSetsLines` | Get all distribution set lines for a distribution set |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesDistributionSets/{distributionSetId}` | Get a distribution set header for a distribution set |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesDistributionSets` | Get all distribution sets |

## p ay ab le sD is tr ib ut io nS et sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesDistributionSetsLOV` | Get all distribution sets |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesDistributionSetsLOV/{DistributionSetId}` | Get a distribution set |

## p ay ab le sI nc om eT ax Re gi on s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesIncomeTaxRegions/{state}` | Get an income tax region |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesIncomeTaxRegions` | Get all income tax regions |

## p ay ab le sI nc om eT ax Re gi on sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesIncomeTaxRegionsLOV/{RegionShortName}` | Get an income tax region |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesIncomeTaxRegionsLOV` | Get all income tax regions |

## p ay ab le sI nc om eT ax Ty pe s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesIncomeTaxTypes/{incomeTaxType}` | Get an income tax type |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesIncomeTaxTypes` | Get all income tax types |

## p ay ab le sI nc om eT ax Ty pe sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesIncomeTaxTypesLOV/{IncomeTaxType}` | Get an income tax type |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesIncomeTaxTypesLOV` | Get all income tax types |

## p ay ab le sI nt er fa ce In vo ic es

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/payablesInterfaceInvoices/{payablesInterfaceInvoicesUniqID}/child/interfaceInvoiceLines` | Create an interface invoice line |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/payablesInterfaceInvoices/{payablesInterfaceInvoicesUniqID}/child/attachments` | Create an attachment |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/payablesInterfaceInvoices` | Create an interface invoice |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesInterfaceInvoices/{payablesInterfaceInvoicesUniqID}/child/interfaceInvoiceRejections/{interfaceInvoiceRejectionsUniqID}` | Get an interface invoice rejection |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesInterfaceInvoices/{payablesInterfaceInvoicesUniqID}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesInterfaceInvoices/{payablesInterfaceInvoicesUniqID}/child/attachments/{attachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesInterfaceInvoices/{payablesInterfaceInvoicesUniqID}/child/interfaceInvoiceLines/{InvoiceLineId}/child/interfaceInvoiceLineRejections/{interfaceInvoiceLineRejectionsUniqID}` | Get an interface invoice line rejection |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesInterfaceInvoices/{payablesInterfaceInvoicesUniqID}/child/interfaceInvoiceRejections` | Get all interface invoice rejections |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesInterfaceInvoices/{payablesInterfaceInvoicesUniqID}/child/interfaceInvoiceLines/{InvoiceLineId}/child/interfaceInvoiceLineRejections` | Get all interface invoice line rejections |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesInterfaceInvoices/{payablesInterfaceInvoicesUniqID}/child/interfaceInvoiceLines/{InvoiceLineId}/action/interfaceLineRejections` | Get a list of all rejections for an interface invoice line |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesInterfaceInvoices/{payablesInterfaceInvoicesUniqID}/child/interfaceInvoiceLines` | Get all interface invoice lines |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesInterfaceInvoices/{payablesInterfaceInvoicesUniqID}/child/attachments/{attachmentsUniqID}` | Delete an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesInterfaceInvoices/{payablesInterfaceInvoicesUniqID}/action/interfaceRejections` | Get a list of all rejections for an interface invoice |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesInterfaceInvoices` | Get all interface invoices |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesInterfaceInvoices/{payablesInterfaceInvoicesUniqID}/child/attachments` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesInterfaceInvoices/{payablesInterfaceInvoicesUniqID}/child/attachments/{attachmentsUniqID}` | Get an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/payablesInterfaceInvoices/{payablesInterfaceInvoicesUniqID}/child/interfaceInvoiceLines/action/submitImportInvoices` | Import payables invoices |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/payablesInterfaceInvoices/{payablesInterfaceInvoicesUniqID}/child/interfaceInvoiceLines/{InvoiceLineId}` | Update an interface invoice line |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/payablesInterfaceInvoices/{payablesInterfaceInvoicesUniqID}` | Update an interface invoice |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/payablesInterfaceInvoices/action/submitImportInvoices` | Import payables invoices |
| `POST` | `/fscmRestApi/resources/11.13.18.05/payablesInterfaceInvoices/{payablesInterfaceInvoicesUniqID}` | Delete an interface invoice |
| `POST` | `/fscmRestApi/resources/11.13.18.05/payablesInterfaceInvoices/{payablesInterfaceInvoicesUniqID}/child/interfaceInvoiceLines/{InvoiceLineId}` | Delete an interface invoice line |
| `POST` | `/fscmRestApi/resources/11.13.18.05/payablesInterfaceInvoices/{payablesInterfaceInvoicesUniqID}` | Get an interface invoice |
| `POST` | `/fscmRestApi/resources/11.13.18.05/payablesInterfaceInvoices/{payablesInterfaceInvoicesUniqID}/child/interfaceInvoiceLines/{InvoiceLineId}` | Get an interface invoice line |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/payablesInterfaceInvoices/{payablesInterfaceInvoicesUniqID}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Get a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/payablesInterfaceInvoices/{payablesInterfaceInvoicesUniqID}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |

## p ay ab le sI nt er fa ce Re je ct io ns LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesInterfaceRejectionsLOV/{RejectionCode}` | Get an interface invoice rejection |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesInterfaceRejectionsLOV` | Get all interface invoice rejections |

## p ay ab le sI nv oi ce Ho ld s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesInvoiceHolds` | Get all holds details |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesInvoiceHolds/{payablesInvoiceHoldsUniqID}` | Get a hold details |

## p ay ab le sI nv oi ce Ho ld sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesInvoiceHoldsLOV/{HoldLookupCode}` | Get an invoice hold |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesInvoiceHoldsLOV` | Get all invoice holds |

## p ay ab le sI nv oi ce To le ra nc es

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesInvoiceTolerances` | Get all payables invoice tolerances |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesInvoiceTolerances/{toleranceId}` | Get a payables invoice tolerance |

## p ay ab le sI nv oi ce To le ra nc es LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesInvoiceTolerancesLOV/{payablesInvoiceTolerancesLOVUniqID}` | Get an invoice tolerance |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesInvoiceTolerancesLOV` | Get all invoice tolerances |

## p ay ab le sO pt io ns

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesOptions` | Get payables options for all business units |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesOptions/{businessUnitId}` | Get payables options for a business unit |

## p ay ab le sP ay me nt s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesPayments/{CheckId}/child/relatedInvoices` | Create a payables payment invoice list |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesPayments/{CheckId}/child/paymentGdf` | Get all global descriptive flexfields for a payment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesPayments/{CheckId}/child/paymentGdf` | Create a global descriptive flexfield for a payment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesPayments/{CheckId}/child/relatedInvoices/{InvoicePaymentId}` | Get a paid invoice for a payment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesPayments/{CheckId}/child/relatedInvoices/{InvoicePaymentId}/child/relatedInvoiceGdf` | Get all global descriptive flexfields for an invoice payment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesPayments/{CheckId}/child/relatedInvoices/{InvoicePaymentId}/child/relatedInvoiceGdf` | Create a global descriptive flexfield for an invoice payment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesPayments/{CheckId}/child/relatedInvoices` | Get all paid invoices for a payment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesPayments/{CheckId}/child/paymentDff` | Get all descriptive flexfields for a payment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesPayments/{CheckId}` | Get a payment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesPayments` | Create a payment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesPayments/{CheckId}/child/paymentDff` | Create a descriptive flexfield for a payment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/payablesPayments/action/initiateEscheat` | Initiate escheatment for a payment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/payablesPayments/{CheckId}/child/relatedInvoices/{InvoicePaymentId}/child/relatedInvoiceGdf/{InvoicePaymentId2}` | Get global descriptive flexfields for an invoice payment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/payablesPayments/{CheckId}/child/relatedInvoices/{InvoicePaymentId}/child/relatedInvoiceGdf/{InvoicePaymentId2}` | Update a global descriptive flexfield for an invoice payment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/payablesPayments/{CheckId}` | Update a payment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/payablesPayments/{CheckId}/child/paymentDff/{CheckId2}` | Update a descriptive flexfield for a payment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/payablesPayments/{CheckId}/child/paymentDff/{CheckId2}` | Get descriptive flexfields for a payment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/payablesPayments/{CheckId}/child/paymentGdf/{CheckId3}` | Get global descriptive flexfields for a payment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/payablesPayments/{CheckId}/child/paymentGdf/{CheckId3}` | Update a global descriptive flexfield for a payment |
| `POST` | `/fscmRestApi/resources/11.13.18.05/payablesPayments` | Get all payments |
| `POST` | `/fscmRestApi/resources/11.13.18.05/payablesPayments/action/initiateStopPayment` | Initiate a stop payment |

## p ay ab le sP ay me nt Te rm s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesPaymentTerms/{termsId}/child/payablesPaymentTermsSets/{payablesPaymentTermsSetsUniqID}` | Get all set names associated to the payment terms |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesPaymentTerms/{termsId}/child/payablesPaymentTermsSets` | Get a set name for the payment term |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesPaymentTerms/{termsId}/child/payablesPaymentTermsTranslations` | Get all payment terms details for a term ID in all supported languages |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesPaymentTerms/{termsId}/child/payablesPaymentTermsTranslations/{payablesPaymentTermsTranslationsUniqID}` | Get a payment term details for a term ID in a specific language |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesPaymentTerms` | Get all payment terms headers |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesPaymentTerms/{termsId}` | Get a payment term header for a terms ID |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesPaymentTerms/{termsId}/child/payablesPaymentTermsLines` | Get all payment terms lines for a terms ID |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesPaymentTerms/{termsId}/child/payablesPaymentTermsLines/{payablesPaymentTermsLinesUniqID}` | Get a payment term line for a terms ID |

## p ay ab le sP ay me nt Te rm sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesPaymentTermsLOV` | Get all payables payment terms |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesPaymentTermsLOV/{TermId}` | Get a payables payment term |

## p ay ab le sT ax Re po rt in gE nt it ie s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesTaxReportingEntities/{payablesTaxReportingEntitiesUniqID}/child/payablesTaxReportingEntityLine` | Get all tax reporting entity lines for a tax reporting entity |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesTaxReportingEntities/{payablesTaxReportingEntitiesUniqID}/child/payablesTaxReportingEntityLine/{payablesTaxReportingEntityLineUniqID}` | Get tax reporting entity lines for a tax reporting entity |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesTaxReportingEntities/{payablesTaxReportingEntitiesUniqID}` | Get a single tax reporting entity |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesTaxReportingEntities` | Get all tax reporting entities |

## p ay ab le sT ax Re po rt in gE nt it ie sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesTaxReportingEntitiesLOV` | Get all tax reporting entities |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payablesTaxReportingEntitiesLOV/{EntityId}` | Get a tax reporting entity |

## p ay ee Ba nk Ac co un ts LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/payeeBankAccountsLOV` | Get all payee bank accounts |
| `GET` | `/fscmRestApi/resources/11.13.18.05/payeeBankAccountsLOV/{AccountNumber}` | Get a payee bank account |

## p ay me nt Co de sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/paymentCodesLOV` | Get all payment codes |
| `GET` | `/fscmRestApi/resources/11.13.18.05/paymentCodesLOV/{paymentCodesLOVUniqID}` | Get a payment code |

## p ay me nt Pr oc es sP ro fi le sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/paymentProcessProfilesLOV` | Get all payment process profiles |
| `GET` | `/fscmRestApi/resources/11.13.18.05/paymentProcessProfilesLOV/{PaymentProcessProfileId}` | Get a payment process profile |

## p ay me nt Pr oc es sR eq ue st s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/paymentProcessRequests/{PaymentProcessRequestId}` | Get a payment process request |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/paymentProcessRequests/{PaymentProcessRequestId}` | Update a payment process request |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/paymentProcessRequests` | Get all payment process requests |

## p ay me nt sE xt er na lP ay ee s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/paymentsExternalPayees/{PayeeId}/child/externalPartyPaymentMethods/{ExternalPartyPaymentMethodsId}` | Get a payment method assigned to a payee |
| `GET` | `/fscmRestApi/resources/11.13.18.05/paymentsExternalPayees/{PayeeId}/child/externalPartyPaymentMethods` | Create a payment method assignment to a payee |
| `GET` | `/fscmRestApi/resources/11.13.18.05/paymentsExternalPayees` | Create an external payee |
| `GET` | `/fscmRestApi/resources/11.13.18.05/paymentsExternalPayees` | Get all external payees |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/paymentsExternalPayees/{PayeeId}/child/externalPartyPaymentMethods/{ExternalPartyPaymentMethodsId}` | Update a payment method assigned to a payee |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/paymentsExternalPayees/{PayeeId}/child/externalPartyPaymentMethods` | Get all payment methods assigned to a payee |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/paymentsExternalPayees/{PayeeId}` | Get an external payee |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/paymentsExternalPayees/{PayeeId}` | Update an external payee |

## p ay me nt Te rm sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/paymentTermsLOV/{PaymentTermsId}` | Get payment terms |
| `GET` | `/fscmRestApi/resources/11.13.18.05/paymentTermsLOV` | Get all payment terms |

## p re fe rr ed Cu rr en ci es LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/preferredCurrenciesLOV` | Get all currencies |
| `GET` | `/fscmRestApi/resources/11.13.18.05/preferredCurrenciesLOV/{CurrencyCode}` | Get a currency |

## p ro du ct Fi sc al Cl as si fi ca ti on sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/productFiscalClassificationsLOV` | Get all product fiscal classifications |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productFiscalClassificationsLOV/{productFiscalClassificationsLOVUniqID}` | Get a product fiscal classification |

## p ro du ct Ty pe sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/productTypesLOV` | Get all product types |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productTypesLOV/{ClassificationCode}` | Get a product type |

## p ts af tE nc ry pt io nK ey s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/ptsaftEncryptionKeys` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/ptsaftEncryptionKeys` | Create a SAFT-PT encryption key |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/ptsaftEncryptionKeys/{TaxRegistrationNumber}` | PATCH action not supported |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/ptsaftEncryptionKeys/{TaxRegistrationNumber}` | GET action not supported |

## p ur ch as eT oP ay Le ga lE nt it ie sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/purchaseToPayLegalEntitiesLOV` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/purchaseToPayLegalEntitiesLOV/{LegalEntityId}` | Get a purchase to pay legal entity |

## r at ed Cu rr en ci es

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/ratedCurrencies` | Get all rated currencies |

## r ec ei pt Me th od As si gn me nt s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/receiptMethodAssignments` | Create a receipt method assignment at customer account or site |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receiptMethodAssignments/{CustomerReceiptMethodId}` | Get a receipt method assigned to a customer account or site |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receiptMethodAssignments/{CustomerReceiptMethodId}` | Delete a receipt method assigned to a customer account or site |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/receiptMethodAssignments/{CustomerReceiptMethodId}` | Update a receipt method assigned to a customer account or site |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/receiptMethodAssignments` | Get all receipt methods assigned to a customer account or site |

## r ec ei pt Me th od s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/receiptMethods/{ReceiptMethodId}/child/receiptMethodDFF/{ReceiptMethodId2}` | Get a receipt method descriptive flexfields details |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receiptMethods/{ReceiptMethodId}/child/receiptMethodDFF` | Get all receipt method descriptive flexfields details |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receiptMethods/{ReceiptMethodId}` | Get a receipt method details |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receiptMethods` | Get all receipt method details |

## r ec ei va bl es Ad ju st me nt s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesAdjustments/{AdjustmentId}/child/receivablesAdjustmentDFF/{AdjustmentId2}` | Get a receivables adjustment descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesAdjustments/{AdjustmentId}/child/receivablesAdjustmentDFF` | Get all receivables adjustment descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesAdjustments/{AdjustmentId}` | Get a receivables adjustment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesAdjustments` | Get all receivables adjustments |

## r ec ei va bl es Bu si ne ss Un it sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesBusinessUnitsLOV` | Get all business units |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesBusinessUnitsLOV/{BusinessUnitId}` | Get a business unit |

## r ec ei va bl es Cr ed it Me mo s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/receivablesCreditMemoLines/{CustomerTransactionLineId}/child/attachments/{attachmentsUniqID}` | Get an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/receivablesCreditMemoLines/{CustomerTransactionLineId}/child/attachments` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/receivablesCreditMemoLines/{CustomerTransactionLineId}/child/attachments` | Create an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/receivablesCreditMemoLines/{CustomerTransactionLineId}/child/receivablesCreditMemoLineDFF` | Create a receivables credit memo line descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/receivablesCreditMemoLines/{CustomerTransactionLineId}/child/attachments/{attachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/receivablesCreditMemoLines/{CustomerTransactionLineId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/receivablesCreditMemoLines` | Get all receivables credit memo lines |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/receivablesCreditMemoGdf/{CustomerTrxId}` | Get a receivables credit memo global descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/receivablesCreditMemoGdf` | Create a receivables credit memo global descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/receivablesCreditMemoTransactionDFF` | Get all transaction descriptive flexfields for a group of receivables credit memos |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/receivablesCreditMemoLines/{CustomerTransactionLineId}` | Get a receivables credit memo line |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/receivablesCreditMemoLines` | Create a set of receivables credit memo lines |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/receivablesCreditMemoGdf` | Get all global descriptive flexfields for a group of receivables credit memos |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/receivablesCreditMemoLines/{CustomerTransactionLineId}/child/receivablesCreditMemoLineTransactionDFF/{CustomerTrxLineId}` | Get a receivables credit memo line transaction descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/receivablesCreditMemoLines/{CustomerTransactionLineId}/child/receivablesCreditMemoLineTransactionDFF` | Create a receivables credit memo line transaction descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/receivablesCreditMemoLines/{CustomerTransactionLineId}/child/receivablesCreditMemoLineTaxLines` | Get all receivables credit memo tax lines |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/receivablesCreditMemoTransactionDFF/{CustomerTrxId}` | Get a receivables credit memo transaction descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/receivablesCreditMemoTransactionDFF` | Create a receivables credit memo transaction descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/receivablesCreditMemoLines/{CustomerTransactionLineId}/child/receivablesCreditMemoLineTransactionDFF` | Get all transaction descriptive flexfields for a group of receivables credit memo lines |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/receivablesCreditMemoLines/{CustomerTransactionLineId}/child/receivablesCreditMemoLineTaxLines/{CustomerTrxLineId}` | Get a receivables credit memo line tax line |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/receivablesCreditMemoLines/{CustomerTransactionLineId}/child/receivablesCreditMemoLineGdf` | Create a receivables credit memo line global descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/receivablesCreditMemoLines/{CustomerTransactionLineId}/child/receivablesCreditMemoLineDFF` | Get all descriptive flexfields for a group of receivables credit memo lines |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/receivablesCreditMemoLines/{CustomerTransactionLineId}/child/receivablesCreditMemoLineDFF/{CustomerTrxLineId}` | Get a receivables credit memo line descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/receivablesCreditMemoLines/{CustomerTransactionLineId}/child/receivablesCreditMemoLineTaxLines` | Create a receivables credit memo tax line |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/receivablesCreditMemoLines/{CustomerTransactionLineId}/child/receivablesCreditMemoLineGdf` | Get all global descriptive flexfields for a group of receivables credit memo lines |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/receivablesCreditMemoLines/{CustomerTransactionLineId}/child/receivablesCreditMemoLineGdf/{CustomerTrxLineId}` | Get a receivables credit memo line global descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/receivablesCreditMemoDistributions/{DistributionId}/child/receivablesCreditMemoDistributionDFF/{CustTrxLineGlDistId}` | Get a receivables credit memo distribution descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/attachments/{attachmentsUniqID}` | Get an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/attachments/{attachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/notes/{NoteId}` | Get a note object |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/notes` | Create a note |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos` | Create a receivables credit memo |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/receivablesCreditMemoDistributions/{DistributionId}/child/receivablesCreditMemoDistributionDFF` | Get all descriptive flexfields for a group of receivables credit memo distributions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}` | Get a receivables credit memo |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/attachments` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/attachments` | Create an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/notes` | Get all note objects |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/receivablesCreditMemoDistributions` | Create a receivables credit memo distribution |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/receivablesCreditMemoDistributions/{DistributionId}` | Get a receivables credit memo distribution |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/receivablesCreditMemoDFF` | Get all descriptive flexfields for a group of receivables credit memos |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/receivablesCreditMemoDFF` | Create a receivables credit memo descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/receivablesCreditMemoDistributions/{DistributionId}/child/receivablesCreditMemoDistributionDFF` | Create a receivables credit memo distribution descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/receivablesCreditMemoDFF/{CustomerTrxId}` | Get a receivables credit memo descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/notes/{NoteId}/enclosure/NoteTxt` | Delete a NoteTxt |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/receivablesCreditMemoDistributions` | Get all credit memo distributions for a receivables credit memo |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}` | Update a receivables credit memo |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/action/rework` | Request rework for a pending approval credit memo |
| `POST` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos` | Get all receivables credit memos |
| `POST` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/action/approve` | Approve a pending approval credit memo |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/notes/{NoteId}/enclosure/NoteTxt` | Get a NoteTxt |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/receivablesCreditMemoLines/{CustomerTransactionLineId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/receivablesCreditMemoLines/{CustomerTransactionLineId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Get a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Get a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/receivablesCreditMemos/{CustomerTransactionId}/child/notes/{NoteId}/enclosure/NoteTxt` | Replace a NoteTxt |

## r ec ei va bl es Cu st om er Ac co un tA ct iv it ie s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCustomerAccountActivities/{AccountId}/child/standardReceipts` | Get all standard receipts |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCustomerAccountActivities/{AccountId}/child/transactionAdjustments/{AdjustmentId}` | Get a transaction adjustment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCustomerAccountActivities/{AccountId}/child/standardReceipts/{StandardReceiptId}` | Get a standard receipt |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCustomerAccountActivities/{AccountId}/child/standardReceiptApplications/{ApplicationId2}/child/standardReceiptApplicationDFF/{ReceivableApplicationId}` | Get a credit memo application descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCustomerAccountActivities/{AccountId}/child/standardReceiptApplications/{ApplicationId}/child/standardReceiptApplicationDFF` | Get all credit memo applications descriptive flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCustomerAccountActivities/{AccountId}/child/transactionsPaidByOtherCustomers/{ApplicationId}` | Get a transaction paid by other customers |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCustomerAccountActivities/{AccountId}/child/transactionsPaidByOtherCustomers` | Get all transactions paid by other customers |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCustomerAccountActivities/{AccountId}/child/transactionPaymentSchedules` | Get all transaction payment schedules |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCustomerAccountActivities/{AccountId}/child/transactionAdjustments` | Get all transaction adjustments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCustomerAccountActivities/{AccountId}/child/transactionPaymentSchedules/{InstallmentId}` | Get a transaction payment schedule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCustomerAccountActivities/{AccountId}/child/creditMemoApplications` | Get all credit memo applications |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCustomerAccountActivities/{AccountId}/child/creditMemoApplications/{ApplicationId}/child/creditMemoApplicationDFF/{ReceivableApplicationId}` | Get a credit memo application descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCustomerAccountActivities/{AccountId}/child/creditMemoApplications/{ApplicationId}` | Get a credit memo application |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCustomerAccountActivities/{AccountId}` | Get a customer account activity |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCustomerAccountActivities` | Get all customer account activities |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCustomerAccountActivities/{AccountId}/child/standardReceiptApplications/{ApplicationId}` | Get a standard receipt application |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCustomerAccountActivities/{AccountId}/child/standardReceiptApplications` | Get all standard receipt applications |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCustomerAccountActivities/{AccountId}/child/creditMemos` | Get all credit memos |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCustomerAccountActivities/{AccountId}/child/creditMemoApplications/{ApplicationId}/child/creditMemoApplicationDFF` | Get all credit memo applications descriptive flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCustomerAccountActivities/{AccountId}/child/creditMemos/{CreditMemoId}` | Get a credit memo |

## r ec ei va bl es Cu st om er Ac co un tS it eA ct iv it ie s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCustomerAccountSiteActivities/{BillToSiteUseId}/child/standardReceipts` | Get all standard receipts |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCustomerAccountSiteActivities/{BillToSiteUseId}/child/transactionAdjustments/{AdjustmentId}` | Get a transaction adjustment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCustomerAccountSiteActivities/{BillToSiteUseId}/child/standardReceipts/{StandardReceiptId}` | Get a standard receipt |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCustomerAccountSiteActivities/{BillToSiteUseId}/child/standardReceiptApplications/{ApplicationId2}/child/standardReceiptApplicationDFF/{ReceivableApplicationId}` | Get a credit memo application descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCustomerAccountSiteActivities/{BillToSiteUseId}/child/standardReceiptApplications/{ApplicationId}/child/standardReceiptApplicationDFF` | Get all credit memo applications descriptive flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCustomerAccountSiteActivities/{BillToSiteUseId}/child/transactionsPaidByOtherCustomers/{ApplicationId}` | Get a transaction paid by other customers |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCustomerAccountSiteActivities/{BillToSiteUseId}/child/transactionsPaidByOtherCustomers` | Get all transactions paid by other customers |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCustomerAccountSiteActivities/{BillToSiteUseId}/child/transactionPaymentSchedules` | Get all transaction payment schedules |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCustomerAccountSiteActivities/{BillToSiteUseId}/child/transactionAdjustments` | Get all transaction adjustments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCustomerAccountSiteActivities/{BillToSiteUseId}/child/transactionPaymentSchedules/{InstallmentId}` | Get a transaction payment schedule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCustomerAccountSiteActivities/{BillToSiteUseId}/child/creditMemoApplications` | Get all credit memo applications |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCustomerAccountSiteActivities/{BillToSiteUseId}/child/creditMemoApplications/{ApplicationId}/child/creditMemoApplicationDFF/{ReceivableApplicationId}` | Get a credit memo application descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCustomerAccountSiteActivities/{BillToSiteUseId}/child/creditMemoApplications/{ApplicationId}` | Get a credit memo application |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCustomerAccountSiteActivities/{BillToSiteUseId}` | Get a customer account activity |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCustomerAccountSiteActivities` | Get all customer account activities |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCustomerAccountSiteActivities/{BillToSiteUseId}/child/standardReceiptApplications/{ApplicationId}` | Get a standard receipt application |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCustomerAccountSiteActivities/{BillToSiteUseId}/child/standardReceiptApplications` | Get all standard receipt applications |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCustomerAccountSiteActivities/{BillToSiteUseId}/child/creditMemos` | Get all credit memos |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCustomerAccountSiteActivities/{BillToSiteUseId}/child/creditMemoApplications/{ApplicationId}/child/creditMemoApplicationDFF` | Get all credit memo applications descriptive flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesCustomerAccountSiteActivities/{BillToSiteUseId}/child/creditMemos/{CreditMemoId}` | Get a credit memo |

## r ec ei va bl es Di sp ut es

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesDisputes/{receivablesDisputesUniqID}/child/receivablesDisputeLines` | Create a receivables line dispute |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesDisputes/{receivablesDisputesUniqID}/child/receivablesDisputeLines` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesDisputes/{receivablesDisputesUniqID}/child/receivablesDisputeLines/{receivablesDisputeLinesUniqID}` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesDisputes` | Create a receivables dispute |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesDisputes` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesDisputes/{receivablesDisputesUniqID}` | GET action not supported |

## r ec ei va bl es In vo ic es

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices` | Create a receivables invoice |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/receivablesInvoiceLines/{CustomerTransactionLineId}/child/attachments` | Get all attachments for a group of receivables invoices |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/receivablesInvoiceLines/{CustomerTransactionLineId}/child/attachments` | Create a receivables invoice attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/receivablesInvoiceLines/{CustomerTransactionLineId}/child/attachments/{attachmentsUniqID}` | Get a receivables invoice attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/receivablesInvoiceLines/{CustomerTransactionLineId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Delete a File Contents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/receivablesInvoiceLines/{CustomerTransactionLineId}/child/receivablesInvoiceLineDFF/{CustomerTrxLineId}` | Get a receivables invoice line descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/receivablesInvoiceLines/{CustomerTransactionLineId}/child/receivablesInvoiceLineDFF` | Create a receivables invoice line descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/receivablesInvoiceLines/{CustomerTransactionLineId}/child/attachments/{attachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/receivablesInvoiceLines` | Get all receivables invoice lines |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/receivablesInvoiceTransactionDFF` | Get all transaction descriptive flexfields for a group of receivables invoices |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/receivablesInvoiceInstallments/{InstallmentId}/child/receivablesInvoiceInstallmentNotes` | Create a receivables invoice installment note |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/receivablesInvoiceInstallments/{InstallmentId}/child/receivablesInvoiceInstallmentGDF` | Get all global descriptive flexfields for a group of receivables invoice installments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/receivablesInvoiceInstallments/{InstallmentId}/child/receivablesInvoiceInstallmentNotes` | Get all notes for a group of receivables invoice installments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/receivablesInvoiceLines/{CustomerTransactionLineId}` | Get a receivables invoice line |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/receivablesInvoiceLines` | Create a receivables invoice line |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/receivablesInvoiceInstallments/{InstallmentId}/child/receivablesInvoiceInstallmentNotes/{NoteId}/enclosure/NoteTxt` | Delete a Note Text |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/receivablesInvoiceLines/{CustomerTransactionLineId}/child/receivablesInvoiceLineDFF` | Get all descriptive flexfields for a group of receivables invoice lines |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/notes/{NoteId}` | Get a receivables invoice note |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/notes` | Create a receivables invoice note |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/receivablesInvoiceLines/{CustomerTransactionLineId}/child/receivablesInvoiceLineTransactionDFF` | Get all transaction descriptive flexfields for a group of receivables invoice lines |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/notes` | Get all notes for a group of receivables invoices |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/receivablesInvoiceTransactionDFF/{CustomerTrxId}` | Get a receivables invoice transaction descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/receivablesInvoiceTransactionDFF` | Create a receivables invoice transaction descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/notes/{NoteId}/enclosure/NoteTxt` | Delete a Note Text |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/receivablesInvoiceLines/{CustomerTransactionLineId}/child/receivablesInvoiceLineTransactionDFF/{CustomerTrxLineId}` | Get a receivables invoice line transaction descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/receivablesInvoiceLines/{CustomerTransactionLineId}/child/receivablesInvoiceLineGdf` | Get all global descriptive flexfields for a group of receivables invoice lines |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/receivablesInvoiceLines/{CustomerTransactionLineId}/child/receivablesInvoiceLineGdf/{CustomerTrxLineId}` | Get a receivables invoice line global descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/receivablesInvoiceLines/{CustomerTransactionLineId}/child/receivablesInvoiceLineGdf` | Create a receivables invoice line global descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/receivablesInvoiceLines/{CustomerTransactionLineId}/child/receivablesInvoiceLineTaxLines` | Create a receivables invoice line tax line |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/receivablesInvoiceLines/{CustomerTransactionLineId}/child/receivablesInvoiceLineTransactionDFF` | Create a receivables invoice line transaction descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/receivablesInvoiceLines/{CustomerTransactionLineId}/child/receivablesInvoiceLineTaxLines` | Get all receivables invoice line tax lines |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/receivablesInvoiceLines/{CustomerTransactionLineId}/child/receivablesInvoiceLineTaxLines/{CustomerTransactionLineId2}` | Get a receivables invoice line tax line |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/receivablesInvoiceDFF/{CustomerTrxId}` | Get a receivables invoice descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/receivablesInvoiceDFF` | Create a receivables invoice descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/attachments/{attachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/receivablesInvoiceDistributions/{DistributionId}` | Get a receivables invoice distribution |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/receivablesInvoiceDistributions` | Create a receivables invoice distribution |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/receivablesInvoiceDFF` | Get all descriptive flexfields for a group of receivables invoices |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Delete a File Contents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}` | Get a receivables invoice |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}` | Delete a receivables invoice |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/receivablesInvoiceInstallments/{InstallmentId}/child/receivablesInvoiceInstallmentNotes/{NoteId}` | Get a receivables invoice installment note |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/attachments` | Get all attachments for a group of receivables invoices |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/attachments/{attachmentsUniqID}` | Get a receivables invoice attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/attachments` | Create a receivables invoice attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/receivablesInvoiceDistributions` | Get all invoice distributions for a receivables invoice |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/receivablesInvoiceGdf/{CustomerTrxId}` | Get a receivables invoice global descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/receivablesInvoiceGdf` | Create a receivables invoice global descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/receivablesInvoiceGdf` | Get all global descriptive flexfields for a group of receivables invoices |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/receivablesInvoiceInstallments/{InstallmentId}` | Get a receivables invoice installment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/receivablesInvoiceInstallments/{InstallmentId}/child/receivablesInvoiceInstallmentGDF/{PaymentScheduleId}` | Get a receivables invoice installment global descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/receivablesInvoiceDistributions/{DistributionId}/child/receivablesInvoiceDistributionDFF` | Create a receivables invoice distribution descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/receivablesInvoiceInstallments/{InstallmentId}/child/receivablesInvoiceInstallmentGDF` | Create a receivables invoice installment global descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/receivablesInvoiceDistributions/{DistributionId}/child/receivablesInvoiceDistributionDFF` | Get all descriptive flexfields for a group of receivables invoice distributions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/receivablesInvoiceDistributions/{DistributionId}/child/receivablesInvoiceDistributionDFF/{CustTrxLineGlDistId}` | Get a receivables invoice distribution descriptive flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}` | Update a receivables invoice |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/receivablesInvoiceInstallments` | Get all installments for a group of receivables invoices |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/action/rework` | Request rework for a pending approval invoice |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/receivablesInvoiceInstallments/{InstallmentId}` | Update a receivables invoice installment |
| `POST` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/action/splitInstallments` | Add new invoice installments |
| `POST` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices` | Get all receivables invoices |
| `POST` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/action/approve` | Approve a pending approval invoice |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/receivablesInvoiceLines/{CustomerTransactionLineId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Get a File Contents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/notes/{NoteId}/enclosure/NoteTxt` | Get a Note Text |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/notes/{NoteId}/enclosure/NoteTxt` | Replace a Note Text |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Replace a File Contents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/receivablesInvoiceLines/{CustomerTransactionLineId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Replace a File Contents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Get a File Contents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/receivablesInvoiceInstallments/{InstallmentId}/child/receivablesInvoiceInstallmentNotes/{NoteId}/enclosure/NoteTxt` | Get a Note Text |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/receivablesInvoices/{CustomerTransactionId}/child/receivablesInvoiceInstallments/{InstallmentId}/child/receivablesInvoiceInstallmentNotes/{NoteId}/enclosure/NoteTxt` | Replace a Note Text |

## r ev en ue Co nt ra ct s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/revenueContracts/{CustomerContractHeaderId}/child/performanceObligations/{PerformanceObligationId}/child/promisedDetails/{PromisedDetailLineId}/child/sourceDocuments/{DocumentId}` | Get a source document |
| `GET` | `/fscmRestApi/resources/11.13.18.05/revenueContracts/{CustomerContractHeaderId}/child/performanceObligations/{PerformanceObligationId}/child/promisedDetails/{PromisedDetailLineId}/child/sourceDocuments` | Get all source documents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/revenueContracts/{CustomerContractHeaderId}/child/performanceObligations/{PerformanceObligationId}/child/promisedDetails/{PromisedDetailLineId}/child/satisfactionEvents/{SatisfactionEventId}` | Get a satisfaction event |
| `GET` | `/fscmRestApi/resources/11.13.18.05/revenueContracts/{CustomerContractHeaderId}/child/performanceObligations/{PerformanceObligationId}/child/promisedDetails/{PromisedDetailLineId}/child/satisfactionEvents` | Get all satisfaction events |
| `GET` | `/fscmRestApi/resources/11.13.18.05/revenueContracts/{CustomerContractHeaderId}/child/performanceObligations/{PerformanceObligationId}/child/promisedDetails/{PromisedDetailLineId}/child/sourceDocuments/{DocumentId}/child/sourceDocumentLines/{DocumentLineId}/child/sourceDocumentSubLines/{DocumentSubLineId}` | Get a source document subline |
| `GET` | `/fscmRestApi/resources/11.13.18.05/revenueContracts/{CustomerContractHeaderId}/child/performanceObligations/{PerformanceObligationId}/child/promisedDetails/{PromisedDetailLineId}/child/sourceDocuments/{DocumentId}/child/sourceDocumentLines/{DocumentLineId}/child/sourceDocumentSubLines` | Get all source document sublines |
| `GET` | `/fscmRestApi/resources/11.13.18.05/revenueContracts/{CustomerContractHeaderId}/child/performanceObligations/{PerformanceObligationId}/child/promisedDetails/{PromisedDetailLineId}/child/sourceDocuments/{DocumentId}/child/sourceDocumentLines/{DocumentLineId}` | Get a source document line |
| `GET` | `/fscmRestApi/resources/11.13.18.05/revenueContracts/{CustomerContractHeaderId}/child/performanceObligations/{PerformanceObligationId}/child/promisedDetails/{PromisedDetailLineId}/child/sourceDocuments/{DocumentId}/child/sourceDocumentLines` | Get all source document lines |
| `GET` | `/fscmRestApi/resources/11.13.18.05/revenueContracts/{CustomerContractHeaderId}/child/performanceObligations/{PerformanceObligationId}` | Get a performance obligation |
| `GET` | `/fscmRestApi/resources/11.13.18.05/revenueContracts/{CustomerContractHeaderId}/child/performanceObligations` | Get all performance obligations |
| `GET` | `/fscmRestApi/resources/11.13.18.05/revenueContracts/{CustomerContractHeaderId}` | Get a revenue contract |
| `GET` | `/fscmRestApi/resources/11.13.18.05/revenueContracts` | Get all revenue contracts |
| `GET` | `/fscmRestApi/resources/11.13.18.05/revenueContracts/{CustomerContractHeaderId}/child/performanceObligations/{PerformanceObligationId}/child/promisedDetails/{PromisedDetailLineId}` | Get a promised detail |
| `GET` | `/fscmRestApi/resources/11.13.18.05/revenueContracts/{CustomerContractHeaderId}/child/performanceObligations/{PerformanceObligationId}/child/promisedDetails` | Get all promised details |
| `GET` | `/fscmRestApi/resources/11.13.18.05/revenueContracts/{CustomerContractHeaderId}/child/performanceObligations/{PerformanceObligationId}/child/performanceObligationSeries/{DevolvedPerfObligDtlId}` | Get a performance obligation series |
| `GET` | `/fscmRestApi/resources/11.13.18.05/revenueContracts/{CustomerContractHeaderId}/child/performanceObligations/{PerformanceObligationId}/child/performanceObligationSeries` | Get all performance obligation series |

## r ev en ue Co nt ra ct St an da lo ne Se ll in gP ri ce s

| Method | Path | Operation |
|--------|------|-----------|
| `POST` | `/api/boss/data/objects/ora/erpCore/revenueManagement/v1/revenueContractStandaloneSellingPrices` | Get all standalone selling prices |
| `POST` | `/api/boss/data/objects/ora/erpCore/revenueManagement/v1/revenueContractStandaloneSellingPrices` | Create a standalone selling price |

## r ev en ue Sc he du li ng Ru le sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/revenueSchedulingRulesLOV` | Get all revenue scheduling rules |
| `GET` | `/fscmRestApi/resources/11.13.18.05/revenueSchedulingRulesLOV/{RuleId}` | Get a revenue scheduling rule |

## r ou ti ng Re su lt s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/routingResults/{TransactionId}/child/Participants` | Get all participants |
| `GET` | `/fscmRestApi/resources/11.13.18.05/routingResults/{TransactionId}/child/Participants/{ParticipantId}/child/ListBuilders/{Id}` | Get a list builder |
| `GET` | `/fscmRestApi/resources/11.13.18.05/routingResults/{TransactionId}/child/Participants/{ParticipantId}/child/ListBuilders` | Get all list builders |
| `GET` | `/fscmRestApi/resources/11.13.18.05/routingResults` | Get action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/routingResults/{TransactionId}` | Get routing results |
| `GET` | `/fscmRestApi/resources/11.13.18.05/routingResults/{TransactionId}/child/Participants/{ParticipantId}` | Get a participant |

## s al es pe rs on Re fe re nc eA cc ou nt s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/salespersonReferenceAccounts` | Create a salesperson reference account |
| `GET` | `/fscmRestApi/resources/11.13.18.05/salespersonReferenceAccounts` | Get all salesperson reference accounts |
| `GET` | `/fscmRestApi/resources/11.13.18.05/salespersonReferenceAccounts/{salespersonReferenceAccountsUniqID}` | Get a salesperson reference account |
| `GET` | `/fscmRestApi/resources/11.13.18.05/salespersonReferenceAccounts/{salespersonReferenceAccountsUniqID}` | Delete a salesperson reference account |

## s ou rc eD oc um en tL in es

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/sourceDocumentLines/{DocumentLineId}` | Get a source document line |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/sourceDocumentLines/{DocumentLineId}` | Update a source document line |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/sourceDocumentLines` | Get all source document lines |

## s ta nd ar dR ec ei pt s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/standardReceipts` | Create a standard receipt |
| `GET` | `/fscmRestApi/resources/11.13.18.05/standardReceipts/{StandardReceiptId}/child/remittanceReferences/{RemittanceReferenceId}` | Get a remittance reference |
| `GET` | `/fscmRestApi/resources/11.13.18.05/standardReceipts/{StandardReceiptId}/child/remittanceReferences` | Get all remittance references |
| `GET` | `/fscmRestApi/resources/11.13.18.05/standardReceipts/{StandardReceiptId}/child/attachments/{attachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/standardReceipts/{StandardReceiptId}/child/remittanceReferences` | Create a remittance reference |
| `GET` | `/fscmRestApi/resources/11.13.18.05/standardReceipts/{StandardReceiptId}/child/standardReceiptDFF` | Create a standard receipt descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/standardReceipts/{StandardReceiptId}/child/standardReceiptGdf` | Create a standard receipt global descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/standardReceipts/{StandardReceiptId}/child/standardReceiptGdf/{CashReceiptId}` | Get a standard receipt global descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/standardReceipts/{StandardReceiptId}/child/standardReceiptDFF/{CashReceiptId}` | Get a standard receipt descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/standardReceipts/{StandardReceiptId}/child/standardReceiptDFF` | Get all standard receipt descriptive flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/standardReceipts/{StandardReceiptId}/child/standardReceiptGdf` | Get all standard receipt global descriptive flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/standardReceipts/{StandardReceiptId}/child/attachments/{attachmentsUniqID}` | Get a standard receipt attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/standardReceipts/{StandardReceiptId}` | Delete a standard receipt |
| `GET` | `/fscmRestApi/resources/11.13.18.05/standardReceipts/{StandardReceiptId}` | Get a standard receipt |
| `GET` | `/fscmRestApi/resources/11.13.18.05/standardReceipts/{StandardReceiptId}/child/attachments` | Create a standard receipt attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/standardReceipts/{StandardReceiptId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/standardReceipts/{StandardReceiptId}/child/attachments` | Get all standard receipt attachments |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/standardReceipts` | Get all standard receipts |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/standardReceipts/{StandardReceiptId}` | Update a standard receipt |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/standardReceipts/{StandardReceiptId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/standardReceipts/{StandardReceiptId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Get a FileContents |

## s ub le dg er Ap pl ic at io ns LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/subledgerApplicationsLOV` | Get all subledger applications |
| `GET` | `/fscmRestApi/resources/11.13.18.05/subledgerApplicationsLOV/{ApplicationId}` | Get a subledger application |

## t ax Au th or it yP ro fi le s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/taxAuthorityProfiles` | Get all tax authority profiles |
| `GET` | `/fscmRestApi/resources/11.13.18.05/taxAuthorityProfiles/{PartyTaxProfileId}` | Get a tax authority profile |

## t ax Cl as si fi ca ti on s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/taxClassifications` | Get all tax classifications |
| `GET` | `/fscmRestApi/resources/11.13.18.05/taxClassifications/{taxClassificationsUniqID}` | Get a tax classification |

## t ax Ex em pt io ns

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/taxExemptions/{TaxExemptionId}` | Get a tax exemption |
| `GET` | `/fscmRestApi/resources/11.13.18.05/taxExemptions` | Create a tax exemption |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/taxExemptions/{TaxExemptionId}` | Update a tax exemption |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/taxExemptions` | Get all tax exemptions |

## t ax In te nd ed Us es

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/taxIntendedUses/{ClassificationName}` | Get an intended use fiscal classification record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/taxIntendedUses` | Get all intended use fiscal classification records |

## t ax In te nd ed Us es LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/taxIntendedUsesLOV/{ClassificationId}` | Get an intended use fiscal classification |
| `GET` | `/fscmRestApi/resources/11.13.18.05/taxIntendedUsesLOV` | Get all intended use fiscal classifications |

## t ax Pa rt ne rR eg is tr at io ns

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/taxPartnerRegistrations/{OperationName}` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/taxPartnerRegistrations` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/taxPartnerRegistrations` | Create a tax partner for tax calculation integration |

## t ax Pa ye rI de nt if ie rs

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/taxPayerIdentifiers/{PartyTaxpayerIdntfsId}` | Get a taxpayer identifier |
| `GET` | `/fscmRestApi/resources/11.13.18.05/taxPayerIdentifiers` | Create a taxpayer identifier |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/taxPayerIdentifiers/{PartyTaxpayerIdntfsId}` | Update a taxpayer identifier |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/taxPayerIdentifiers` | Get all taxpayer identifiers |

## t ax Pr od uc tC at eg or ie s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/taxProductCategories` | Get all product categories |
| `GET` | `/fscmRestApi/resources/11.13.18.05/taxProductCategories/{ClassificationName}` | Get a product category |

## t ax Ra te sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/taxRatesLOV` | Get all tax rates |
| `GET` | `/fscmRestApi/resources/11.13.18.05/taxRatesLOV/{TaxRateId}` | Get a tax rate |

## t ax Re gi me sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/taxRegimesLOV` | Get all tax regimes |
| `GET` | `/fscmRestApi/resources/11.13.18.05/taxRegimesLOV/{TaxRegimeId}` | Get a tax regime |

## t ax Re gi st ra ti on s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/taxRegistrations/{RegistrationId}` | Get a tax registration |
| `GET` | `/fscmRestApi/resources/11.13.18.05/taxRegistrations` | Create a tax registration |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/taxRegistrations/{RegistrationId}` | Update a tax registration |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/taxRegistrations` | Get all tax registrations |

## t ax Tr an sa ct io nB us in es sC at eg or ie s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/taxTransactionBusinessCategories` | Get all transaction business categories |
| `GET` | `/fscmRestApi/resources/11.13.18.05/taxTransactionBusinessCategories/{ClassificationName}` | Get a transaction business category |

## t hi rd Pa rt yF is ca lC la ss if ic at io ns

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/thirdPartyFiscalClassifications/{CodeAssignmentId}` | Get a third-party fiscal classification |
| `GET` | `/fscmRestApi/resources/11.13.18.05/thirdPartyFiscalClassifications` | Create a third-party fiscal classification |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/thirdPartyFiscalClassifications/{CodeAssignmentId}` | Update a third-party fiscal classification |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/thirdPartyFiscalClassifications` | Get all third-party fiscal classifications |

## t hi rd Pa rt yS it eF is ca lC la ss if ic at io ns

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/thirdPartySiteFiscalClassifications/{CodeAssignmentId}` | Get a third-party site fiscal classification |
| `GET` | `/fscmRestApi/resources/11.13.18.05/thirdPartySiteFiscalClassifications` | Create a third-party site fiscal classification |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/thirdPartySiteFiscalClassifications/{CodeAssignmentId}` | Update a third-party site fiscal classification |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/thirdPartySiteFiscalClassifications` | Get all third-party site fiscal classifications |

## t hi rd Pa rt yS it eT ax Re po rt in gC od eA ss oc ia ti on s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/thirdPartySiteTaxReportingCodeAssociations/{ReportingCodeAssocId}` | Get a third-party site tax reporting code association |
| `GET` | `/fscmRestApi/resources/11.13.18.05/thirdPartySiteTaxReportingCodeAssociations` | Create a third-party site tax reporting code association |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/thirdPartySiteTaxReportingCodeAssociations/{ReportingCodeAssocId}` | Update a third-party site tax reporting code association |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/thirdPartySiteTaxReportingCodeAssociations` | Get all third-party site tax reporting code associations |

## t hi rd Pa rt yT ax Re po rt in gC od eA ss oc ia ti on s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/thirdPartyTaxReportingCodeAssociations/{ReportingCodeAssocId}` | Get a third-party tax reporting code association |
| `GET` | `/fscmRestApi/resources/11.13.18.05/thirdPartyTaxReportingCodeAssociations` | Create a third-party tax reporting code association |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/thirdPartyTaxReportingCodeAssociations/{ReportingCodeAssocId}` | Update a third-party tax reporting code association |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/thirdPartyTaxReportingCodeAssociations` | Get all third-party tax reporting code associations |

## t ra ns ac ti on So ur ce sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/transactionSourcesLOV` | Get all transaction sources |
| `GET` | `/fscmRestApi/resources/11.13.18.05/transactionSourcesLOV/{TransactionSourceId}` | Get a transaction source |

## t ra ns ac ti on Ta xL in es

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/transactionTaxLines` | Get all transaction tax lines |
| `GET` | `/fscmRestApi/resources/11.13.18.05/transactionTaxLines/{TaxLineId}` | Get a transaction tax line |

## t ra ns ac ti on Ty pe sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/transactionTypesLOV` | Get all transaction types |
| `GET` | `/fscmRestApi/resources/11.13.18.05/transactionTypesLOV/{TransactionTypeId}` | Get a transaction type |

## u se rD ef in ed Fi sc al Cl as si fi ca ti on sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/userDefinedFiscalClassificationsLOV` | Get all user-defined fiscal classifications |
| `GET` | `/fscmRestApi/resources/11.13.18.05/userDefinedFiscalClassificationsLOV/{ClassificationCode}` | Get a user-defined fiscal classification |

## v al id at eT ax Co nf ig ur at io ns

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/validateTaxConfigurations` | Get all tax configurations |
| `GET` | `/fscmRestApi/resources/11.13.18.05/validateTaxConfigurations/{OperationName}` | Get a tax configuration |

## w it hh ol di ng Ta xG ro up sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/withholdingTaxGroupsLOV` | Get all withholding tax groups |
| `GET` | `/fscmRestApi/resources/11.13.18.05/withholdingTaxGroupsLOV/{GroupId}` | Get a withholding tax group |

## w it hh ol di ng Ta xL in es

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/withholdingTaxLines` | Get all withholding tax lines |
| `GET` | `/fscmRestApi/resources/11.13.18.05/withholdingTaxLines/{TaxLineId}` | Get a withholding tax line |

## w or kf lo wN ot if ic at io nC on te nt s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/workflowNotificationContents/{taskId}/child/ApprovalActivities/{SequenceNumber}/child/Comments/{CommentSequenceNo}` | Get a comment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workflowNotificationContents/{taskId}/child/ApprovalActivities/{SequenceNumber}/child/Comments` | Get all comments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workflowNotificationContents/{taskId}/child/ApprovalActivities/{SequenceNumber}/child/Attachments` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workflowNotificationContents/{taskId}/child/ApprovalActivities/{SequenceNumber}/child/Attachments/{AttachmentSequenceNo}` | Get an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workflowNotificationContents/{taskId}/enclosure/notificationBody` | Delete a notificationBody |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workflowNotificationContents/{taskId}/enclosure/workflowTaskSequence` | Delete a workflowTaskSequence |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workflowNotificationContents/{taskId}/enclosure/approvalHistory` | Delete an approvalHistory |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workflowNotificationContents/{taskId}/enclosure/bipReportParameters` | Delete a bipReportParameters |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workflowNotificationContents/{taskId}` | Get a workflow notification |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workflowNotificationContents/{taskId}/child/ApprovalActivities` | Get all approval activities |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workflowNotificationContents/{taskId}/child/ApprovalActivities/{SequenceNumber}` | Get an approval activity |
| `POST` | `/fscmRestApi/resources/11.13.18.05/workflowNotificationContents/action/addApprovers` | Include Ad hoc approvers |
| `POST` | `/fscmRestApi/resources/11.13.18.05/workflowNotificationContents` | GET action not supported |
| `POST` | `/fscmRestApi/resources/11.13.18.05/workflowNotificationContents/action/getApprovalActivities` | Retrieve approval activities |
| `POST` | `/fscmRestApi/resources/11.13.18.05/workflowNotificationContents/action/retrieveTaskId` | Retrieve task ID |
| `POST` | `/fscmRestApi/resources/11.13.18.05/workflowNotificationContents/action/getApprovalSequence` | Retrieve approval sequence |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/workflowNotificationContents/{taskId}/enclosure/notificationBody` | Replace a notificationBody |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/workflowNotificationContents/{taskId}/enclosure/workflowTaskSequence` | Replace a workflowTaskSequence |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/workflowNotificationContents/{taskId}/enclosure/workflowTaskSequence` | Get a workflowTaskSequence |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/workflowNotificationContents/{taskId}/enclosure/notificationBody` | Get a notificationBody |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/workflowNotificationContents/{taskId}/enclosure/bipReportParameters` | Get a bipReportParameters |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/workflowNotificationContents/{taskId}/enclosure/approvalHistory` | Replace an approvalHistory |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/workflowNotificationContents/{taskId}/enclosure/approvalHistory` | Get an approvalHistory |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/workflowNotificationContents/{taskId}/enclosure/bipReportParameters` | Replace a bipReportParameters |

## w or kf lo wU se rs

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/workflowUsers` | Get all workflow users |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workflowUsers/{PersonId}` | Get a workflow user |

