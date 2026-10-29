# Oracle Fusion Cloud SCM - REST API Endpoints Reference

> Source: https://docs.oracle.com/en/cloud/saas/supply-chain-and-manufacturing/26b/fasrp/rest-endpoints.html
> Version: 26B | API Version: 11.13.18.05 | Generated: 2026-05-06

---

**Base URL:** `/fscmRestApi/resources/11.13.18.05/`

**Total Endpoints: 3613 across 313 top-level resources**

---

## a ct iv eL oc at or s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/activeLocators/{InventoryLocationId}` | Get one locator |
| `GET` | `/fscmRestApi/resources/11.13.18.05/activeLocators` | Get all locators |

## a ct iv eS ub in ve nt or ie s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/activeSubinventories/{activeSubinventoriesUniqID}` | Get one subinventory |
| `GET` | `/fscmRestApi/resources/11.13.18.05/activeSubinventories` | Get all subinventories |

## a ll It em Ca te go ri es LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/allItemCategoriesLOV/{CategoryId}` | Get one item category |
| `GET` | `/fscmRestApi/resources/11.13.18.05/allItemCategoriesLOV` | Get all item categories |

## a ll It em sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/allItemsLOV/{InventoryItemId}` | Get one inventory item |
| `GET` | `/fscmRestApi/resources/11.13.18.05/allItemsLOV` | Get all inventory items |

## a na ly si sH ie ra rc hi es

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/analysisHierarchies/{EisHierarchyId}/child/AnalysisHierarchyLocations` | Create locations for an analysis hierarchy |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/analysisHierarchies` | Create analysis hierarchies |
| `GET` | `/fscmRestApi/resources/11.13.18.05/analysisHierarchies/{EisHierarchyId}/child/AnalysisHierarchyLocations` | Get locations for all analysis hierarchies |
| `GET` | `/fscmRestApi/resources/11.13.18.05/analysisHierarchies/{EisHierarchyId}/child/AnalysisHierarchyLocations/{LocationId}` | Delete locations for an analysis hierarchy |
| `GET` | `/fscmRestApi/resources/11.13.18.05/analysisHierarchies/{EisHierarchyId}/child/AnalysisHierarchyLocations/{LocationId}` | Get locations for one analysis hierarchy |
| `GET` | `/fscmRestApi/resources/11.13.18.05/analysisHierarchies/{EisHierarchyId}` | Delete an analysis hierarchy |
| `GET` | `/fscmRestApi/resources/11.13.18.05/analysisHierarchies` | Get all analysis hierarchies |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/analysisHierarchies/{EisHierarchyId}` | Update an analysis hierarchy |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/analysisHierarchies/{EisHierarchyId}` | Get one analysis hierarchy |

## a sn Li ne sF or Re ce iv in g

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/asnLinesForReceiving/{ShipmentLineId}` | Get one line |
| `GET` | `/fscmRestApi/resources/11.13.18.05/asnLinesForReceiving` | Get all lines |

## a sn sF or Re ce iv in g

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/asnsForReceiving/{ShipmentHeaderId}` | Get one notice |
| `GET` | `/fscmRestApi/resources/11.13.18.05/asnsForReceiving` | Get all notices |

## a ss et Co nd it io nE ve nt Co de s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetConditionEventCodes` | Get all condition event codes |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetConditionEventCodes` | Create one condition event code |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/assetConditionEventCodes/{ConditionEventCodeId}` | Update one condition event code |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/assetConditionEventCodes/{ConditionEventCodeId}` | Get one condition event code |

## a ss et Di ag no st ic Sy mp to ms

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/assetDiagnosticSymptoms` | Create one asset diagnostic symptom |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetDiagnosticSymptoms` | Get all asset diagnostic symptoms |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetDiagnosticSymptoms/{SymptomId}` | Delete one asset diagnostic symptom |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/assetDiagnosticSymptoms/{SymptomId}` | Update one asset diagnostic symptom |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/assetDiagnosticSymptoms/{SymptomId}` | Get one asset diagnostic symptom |

## a ss et Fa il ur eE ve nt In st an ce s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetFailureEventInstances/{FailureInstanceId}/child/rootCauses` | Get all failure root causes |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetFailureEventInstances/{FailureInstanceId}/child/rootCauses/{RootCauseId}` | Get one failure root cause |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetFailureEventInstances` | Get all asset failure event instances |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetFailureEventInstances/{FailureInstanceId}` | Get one asset failure event instance |

## a ss et Fa il ur eE ve nt s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/assetFailureEvents/{FailureEventId}/child/failureInstances/{FailureInstanceId}/child/rootCauses` | Create failure root causes |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/assetFailureEvents/{FailureEventId}/child/failureInstances` | Create asset failure instances |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/assetFailureEvents` | Create asset failure events |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetFailureEvents/{FailureEventId}/child/failureInstances/{FailureInstanceId}` | Delete an asset failure instance |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetFailureEvents/{FailureEventId}/child/failureInstances/{FailureInstanceId}/child/rootCauses/{RootCauseId}` | Delete an asset failure event |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetFailureEvents/{FailureEventId}/child/failureInstances/{FailureInstanceId}/child/rootCauses` | Get all failure root causes |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetFailureEvents/{FailureEventId}/child/failureInstances` | Get all asset failure instances |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetFailureEvents/action/fetchApplicableFailureSet` | Fetch one applicable failureset for the failure event |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetFailureEvents` | Get all asset failure events |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/assetFailureEvents/{FailureEventId}/child/failureInstances/{FailureInstanceId}/child/rootCauses/{RootCauseId}` | Update an asset failure event |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/assetFailureEvents/{FailureEventId}/child/failureInstances/{FailureInstanceId}/child/rootCauses/{RootCauseId}` | Get an asset failure event |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/assetFailureEvents/{FailureEventId}` | Update an asset failure event |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/assetFailureEvents/{FailureEventId}/child/failureInstances/{FailureInstanceId}` | Get an asset failure instance |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/assetFailureEvents/{FailureEventId}` | Get an asset failure event |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/assetFailureEvents/{FailureEventId}/child/failureInstances/{FailureInstanceId}` | Update an asset failure instance |
| `POST` | `/fscmRestApi/resources/11.13.18.05/assetFailureEvents/{FailureEventId}` | Delete an asset failure event |

## a ss et Gr ou pR ul es

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/assetGroupRules/{RuleId}/child/groupingAttributes` | Create one attribute |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/assetGroupRules/{RuleId}/child/usages` | Create one usage |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/assetGroupRules` | Create one rule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetGroupRules/{RuleId}/child/groupingAttributes/{RuleGroupingAttributeId}` | Get one attribute |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetGroupRules/{RuleId}/child/usages/{RuleUsageId}` | Get one usage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetGroupRules/{RuleId}/child/usages` | Get all usages |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetGroupRules/{RuleId}/child/usages/{RuleUsageId}` | Delete one usage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetGroupRules/{RuleId}/child/groupingAttributes` | Get all attributes |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetGroupRules/{RuleId}` | Delete one rule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetGroupRules` | Get all rules |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetGroupRules/{RuleId}/child/groupingAttributes/{RuleGroupingAttributeId}` | Delete one attribute |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/assetGroupRules/{RuleId}` | Get one rule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/assetGroupRules/{RuleId}` | Update one rule |

## a ss et Gr ou ps

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/assetGroups/{GroupId}/child/assignments` | Create assignments |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/assetGroups/{GroupId}/child/validationRule` | Create validation rules |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/assetGroups/{GroupId}/child/groupMember` | Create group members |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/assetGroups` | Create groups |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetGroups/{GroupId}/child/assignments` | Get all assignments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetGroups/{GroupId}/child/assignments/{GroupMemberId}` | Delete an assignment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetGroups/{GroupId}/child/groupMember/{GroupMemberId}` | Delete one group member |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetGroups/{GroupId}/child/groupingAttributeValues` | Create attribute values |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetGroups/{GroupId}/child/groupingAttributeValues` | Get all attribute values |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetGroups/{GroupId}/child/groupMember` | Get all group members |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetGroups` | Get all groups |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetGroups/{GroupId}/child/validationRule/{ValidationRuleId}` | Delete one validation rule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetGroups/{GroupId}` | Delete one group |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetGroups/{GroupId}/child/validationRule/{ValidationRuleId}` | Get one validation rule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetGroups/{GroupId}/child/validationRule` | Get all validation rules |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/assetGroups/{GroupId}/child/groupMember/{GroupMemberId}` | Update one group member |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/assetGroups/{GroupId}/child/groupingAttributeValues/{GroupValueId}` | Update an attribute value |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/assetGroups/{GroupId}/child/groupingAttributeValues/{GroupValueId}` | Get one attribute value |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/assetGroups/{GroupId}/child/assignments/{GroupMemberId}` | Update an assignment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/assetGroups/{GroupId}/child/assignments/{GroupMemberId}` | Get one assignment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/assetGroups/{GroupId}` | Update one group |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/assetGroups/{GroupId}/child/groupMember/{GroupMemberId}` | Get one group member |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/assetGroups/{GroupId}` | Get one group |

## a ss et Hi er ar ch ie sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetHierarchiesLOV/{AssetId}` | Get one asset |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetHierarchiesLOV` | Get all assets |

## a ss et Lo gi ca lH ie ra rc hi es

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetLogicalHierarchies` | Get all names |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetLogicalHierarchies` | Create names |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/assetLogicalHierarchies/{HierarchyId}` | Update one name |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/assetLogicalHierarchies/{HierarchyId}` | Get one name |

## a ss et Lo gi ca lH ie ra rc hy Re la ti on sh ip s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/assetLogicalHierarchyRelationships` | Create relationships |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetLogicalHierarchyRelationships/{RelationshipId}` | Delete one relationship |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetLogicalHierarchyRelationships` | Get all relationships |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/assetLogicalHierarchyRelationships/action/updateLogicalRelationshipLite` | Update logical relationships for multiple assets |
| `POST` | `/fscmRestApi/resources/11.13.18.05/assetLogicalHierarchyRelationships/action/updateLogicalRelationshipPosition` | Update the position in the logical relationship |
| `POST` | `/fscmRestApi/resources/11.13.18.05/assetLogicalHierarchyRelationships/{RelationshipId}` | Update one relationship |
| `POST` | `/fscmRestApi/resources/11.13.18.05/assetLogicalHierarchyRelationships/action/createLogicalRelationshipLite` | Create logical hierarchy relationships for assets |
| `POST` | `/fscmRestApi/resources/11.13.18.05/assetLogicalHierarchyRelationships/{RelationshipId}` | Get one relationship |

## a ss et Qu al if ic at io nP ro fi le s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetQualificationProfiles/{ProfileId}/child/qualificationRequirements` | Get all qualification requirements in a profile |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetQualificationProfiles/{ProfileId}/child/qualificationRequirements` | Add qualification requirements to a profile |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetQualificationProfiles` | Create qualification profiles |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetQualificationProfiles/{ProfileId}` | Get one qualification profile |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/assetQualificationProfiles/{ProfileId}/child/qualificationRequirements/{ProfileRequirementId}` | Update one qualification requirement in a profile |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/assetQualificationProfiles/{ProfileId}/child/qualificationRequirements/{ProfileRequirementId}` | Get one qualification requirement in a profile |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/assetQualificationProfiles` | Get qualifications profiles |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/assetQualificationProfiles/{ProfileId}` | Update one qualification profile |

## a ss et Qu al if ic at io nR eq ui re me nt s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/assetQualificationRequirements` | Create qualification requirements |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetQualificationRequirements/{RequirementId}/child/inspectionPlans` | Get all inspection plans in a requirement |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetQualificationRequirements/{RequirementId}/child/inspectionPlans` | Add inspection plans to a requirement |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetQualificationRequirements/{RequirementId}` | Delete one qualification requirement |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetQualificationRequirements/{RequirementId}` | Get one qualification requirement |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/assetQualificationRequirements/{RequirementId}/child/inspectionPlans/{RequirementInspectionId}` | Update one inspection plan in a requirement |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/assetQualificationRequirements/{RequirementId}/child/inspectionPlans/{RequirementInspectionId}` | Get one inspection plan in a requirement |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/assetQualificationRequirements` | Get qualification requirements |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/assetQualificationRequirements/{RequirementId}` | Update one qualification requirement |

## a ss et Sy st em Op ti on s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetSystemOptions` | Get all system options |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetSystemOptions` | Create system option |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/assetSystemOptions/{SystemOptionId}` | Update one system option |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/assetSystemOptions/{SystemOptionId}` | Get one system option |

## a ss et Wa rr an ty Cl ai ms

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetWarrantyClaims/action/findByAdvancedSearchQuery` | Get details based on search, filter, or sort criteria with the display fields in the response |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetWarrantyClaims` | Create one claim |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/assetWarrantyClaims/{assetWarrantyClaimsUniqID}` | Get one claim |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/assetWarrantyClaims/{assetWarrantyClaimsUniqID}` | Update one claim |
| `POST` | `/fscmRestApi/resources/11.13.18.05/assetWarrantyClaims` | Get all claims |

## a ss et Wa rr an ty Co nt ra ct s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetWarrantyContracts/{ContractId}/child/contractMeters` | Get all contract meters |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetWarrantyContracts/{ContractId}/child/contractMeters` | Create one contract meter |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetWarrantyContracts` | Create one contract |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetWarrantyContracts` | Get all contracts |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/assetWarrantyContracts/{ContractId}/child/contractMeters/{ContractMeterId}` | Update a contract meter |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/assetWarrantyContracts/{ContractId}/child/contractMeters/{ContractMeterId}` | Get one contract meter |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/assetWarrantyContracts/{ContractId}` | Get one contract |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/assetWarrantyContracts/{ContractId}` | Update one contract |

## a ss et Wa rr an ty Co ve ra ge s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/assetWarrantyCoverages/{CoverageId}/child/coverageMeters` | Create coverage meters |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/assetWarrantyCoverages/{CoverageId}/child/coverageTransactionCodes` | Create transaction codes |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/assetWarrantyCoverages/{CoverageId}/child/coverageApplicabilities` | Create one coverage applicability |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/assetWarrantyCoverages` | Create warranty coverages |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetWarrantyCoverages/{CoverageId}/child/coverageTransactionCodes/{CoverageTransactionCodeId}` | Delete one transaction code |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetWarrantyCoverages/{CoverageId}/child/coverageMeters/{CoverageMeterId}` | Delete one coverage meter |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetWarrantyCoverages/{CoverageId}/child/coverageApplicabilities/{CoverageApplicabilityId}` | Delete one coverage applicability |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetWarrantyCoverages/{CoverageId}/child/coverageApplicabilities` | Get all coverage applicabilities |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetWarrantyCoverages` | Get all warranty coverages |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetWarrantyCoverages/{CoverageId}/child/coverageTransactionCodes` | Get all transaction codes |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetWarrantyCoverages/{CoverageId}/child/coverageMeters` | Get all coverage meters |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetWarrantyCoverages/{CoverageId}` | Delete one warranty coverage |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/assetWarrantyCoverages/{CoverageId}/child/coverageTransactionCodes/{CoverageTransactionCodeId}` | Update one transaction code |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/assetWarrantyCoverages/{CoverageId}/child/coverageTransactionCodes/{CoverageTransactionCodeId}` | Get one coverage transaction code |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/assetWarrantyCoverages/{CoverageId}/child/coverageApplicabilities/{CoverageApplicabilityId}` | Update one coverage applicability |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/assetWarrantyCoverages/{CoverageId}` | Update one warranty coverage |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/assetWarrantyCoverages/{CoverageId}` | Get one warranty coverage |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/assetWarrantyCoverages/{CoverageId}/child/coverageMeters/{CoverageMeterId}` | Get one coverage meter |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/assetWarrantyCoverages/{CoverageId}/child/coverageApplicabilities/{CoverageApplicabilityId}` | Get one coverage applicability |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/assetWarrantyCoverages/{CoverageId}/child/coverageMeters/{CoverageMeterId}` | Update one coverage meter |

## a ss et Wa rr an ty St an da rd Re pa ir Ti me s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetWarrantyStandardRepairTimes` | Get all repair times |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assetWarrantyStandardRepairTimes` | Create one repair time |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/assetWarrantyStandardRepairTimes/{WarrantyStandardRepairTimeId}` | Update one repair time |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/assetWarrantyStandardRepairTimes/{WarrantyStandardRepairTimeId}` | Get one repair time |

## a ss ig nm en tS et s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/assignmentSets/{AssignmentSetId}` | Get one assignment set |
| `GET` | `/fscmRestApi/resources/11.13.18.05/assignmentSets` | Get all assignment sets |

## a va il ab le Qu an ti ty De ta il s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/availableQuantityDetails/{availableQuantityDetailsUniqID}` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/availableQuantityDetails` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/availableQuantityDetails` | Create details |

## b2b Bi ll To Bu si ne ss Un it sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/b2bBillToBusinessUnitsLOV/{BUId}` | Get one bill-to business unit |
| `GET` | `/fscmRestApi/resources/11.13.18.05/b2bBillToBusinessUnitsLOV` | Get all bill-to business units |

## b2b De li ve ry Me th od Ty pe s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/b2bDeliveryMethodTypes/{DeliveryMethodTypeId}` | Get a delivery method type |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/b2bDeliveryMethodTypes/{DeliveryMethodTypeId}` | Patch a delivery method type |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/b2bDeliveryMethodTypes` | Get all delivery method types |

## b2b Me ss ag eD oc um en tC ou nt s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/b2bMessageDocumentCounts/{b2bMessageDocumentCountsUniqID}` | Get one document count |
| `GET` | `/fscmRestApi/resources/11.13.18.05/b2bMessageDocumentCounts` | Get all document counts |

## b2b Me ss ag eP ar am et er s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/b2bMessageParameters` | Get all configuration parameters |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/b2bMessageParameters/{MsgParamId}` | Patch one configuration parameter |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/b2bMessageParameters/{MsgParamId}` | Get one configuration parameter |

## b2b Me ss ag eS ta tu sC ou nt s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/b2bMessageStatusCounts/{Status}` | Get count of messages in one status |
| `GET` | `/fscmRestApi/resources/11.13.18.05/b2bMessageStatusCounts` | Get count of messages in all statuses |

## b2b Tr ad in gP ar tn er sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/b2bTradingPartnersLOV/{TradingPartnerId}` | Get one trading partner |
| `GET` | `/fscmRestApi/resources/11.13.18.05/b2bTradingPartnersLOV` | Get all trading partners |

## b ac kl og Ca te go ri es LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/backlogCategoriesLOV/{backlogCategoriesLOVUniqID}` | Get one category |
| `GET` | `/fscmRestApi/resources/11.13.18.05/backlogCategoriesLOV` | Get all categories |

## b ac kl og De ma nd s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/backlogDemands/{DemandId}` | Get one sales order demand line |
| `GET` | `/fscmRestApi/resources/11.13.18.05/backlogDemands` | Get all sales order lines |

## b ac kl og It em sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/backlogItemsLOV/{Id}` | Get one item |
| `GET` | `/fscmRestApi/resources/11.13.18.05/backlogItemsLOV` | Get all items |

## b mS im ul at io nP la ns

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/bmSimulationPlans/{BmRunId}/child/AllocationMeasures/{AllocationMeasuresUniqID}/enclosure/UpdateAsync` | Delete an UpdateAsync |
| `GET` | `/fscmRestApi/resources/11.13.18.05/bmSimulationPlans/{BmRunId}/child/PlanDemands` | Get all demands from a simulation plan run |
| `GET` | `/fscmRestApi/resources/11.13.18.05/bmSimulationPlans/{BmRunId}/child/PlanDemands/{PlanDemandsUniqID}` | Get one demand from a simulation plan run |
| `GET` | `/fscmRestApi/resources/11.13.18.05/bmSimulationPlans/{BmRunId}/child/AllocationMeasures/{AllocationMeasuresUniqID}` | Get one allocation |
| `GET` | `/fscmRestApi/resources/11.13.18.05/bmSimulationPlans` | Get all backlog simulation plan runs |
| `GET` | `/fscmRestApi/resources/11.13.18.05/bmSimulationPlans/{BmRunId}` | Get one backlog simulation plan run |
| `GET` | `/fscmRestApi/resources/11.13.18.05/bmSimulationPlans/{BmRunId}/child/AllocationMeasures` | Get all allocations |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/bmSimulationPlans/{BmRunId}/child/AllocationMeasures/{AllocationMeasuresUniqID}/enclosure/UpdateAsync` | Replace an UpdateAsync |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/bmSimulationPlans/{BmRunId}/child/AllocationMeasures/{AllocationMeasuresUniqID}/enclosure/UpdateAsync` | Get an UpdateAsync |

## b uy er Pl an ni ng Im pl em en tL oc at io ns LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/buyerPlanningImplementLocationsLOV/{buyerPlanningImplementLocationsLOVUniqID}` | Get one implement location |
| `GET` | `/fscmRestApi/resources/11.13.18.05/buyerPlanningImplementLocationsLOV` | Gel all implement locations |

## b uy er Pl an sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/buyerPlansLOV` | Get all buyer plans |
| `POST` | `/fscmRestApi/resources/11.13.18.05/buyerPlansLOV/action/updateDefaultPlan` | Update default plan |
| `POST` | `/fscmRestApi/resources/11.13.18.05/buyerPlansLOV/action/releasePlan` | Release plan |
| `POST` | `/fscmRestApi/resources/11.13.18.05/buyerPlansLOV/{PlanId}` | Get one buyer plan |

## c al en da rs

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/calendars/{CalendarCode}` | Get one calendar |
| `GET` | `/fscmRestApi/resources/11.13.18.05/calendars` | Get all calendars |

## c al en da rS hi ft s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/calendarShifts/{calendarShiftsUniqID}` | Get one calendar shift |
| `GET` | `/fscmRestApi/resources/11.13.18.05/calendarShifts` | Get all calendar shifts |

## c ar ri er s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/carriers/{CarrierId}/child/contacts` | Create one contact |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/carriers/{CarrierId}/child/inboundTrackingRules` | Create one inbound tracking rule |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/carriers/{CarrierId}/child/inboundTrackingRules/{TrackingRuleName}/child/parameters` | Create one parameter |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/carriers/{CarrierId}/child/shippingMethods/{ShipMethodCode}/child/organizationAssociations` | Create one association |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/carriers/{CarrierId}/child/inboundTrackingRules/{TrackingRuleName}/child/organizationAssociations` | Create one association |
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriers/{CarrierId}/child/inboundTrackingRules/{TrackingRuleName}/child/organizationAssociations/{OrganizationId}` | Get one association |
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriers/{CarrierId}/child/inboundTrackingRules/{TrackingRuleName}/child/parameters/{ParameterId}` | Delete one parameter |
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriers/{CarrierId}/child/inboundTrackingRules/{TrackingRuleName}/child/organizationAssociations/{OrganizationId}` | Delete an association |
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriers/{CarrierId}/child/inboundTrackingRules/{TrackingRuleName}/child/organizationAssociations` | Get all associations |
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriers/{CarrierId}/child/shippingMethods/{ShipMethodCode}/child/organizationAssociations/{OrganizationId}` | Get one association |
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriers/{CarrierId}/child/shippingMethods/{ShipMethodCode}/child/DFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriers/{CarrierId}/child/shippingMethods/{ShipMethodCode}/child/organizationAssociations/{OrganizationId}` | Delete an association |
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriers/{CarrierId}/child/shippingMethods/{ShipMethodCode}/child/organizationAssociations` | Get all associations |
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriers/{CarrierId}/child/shippingMethods/{ShipMethodCode}/child/DFF` | Create one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriers/{CarrierId}/child/inboundTrackingRules/{TrackingRuleName}/child/parameters` | Get all parameters |
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriers/{CarrierId}/child/shippingMethods` | Create one shipping method |
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriers/{CarrierId}/child/shippingMethods` | Get all shipping methods |
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriers/{CarrierId}/child/DFF` | Create one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriers/{CarrierId}/child/DFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriers/{CarrierId}/child/contacts` | Get all contacts |
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriers/{CarrierId}/child/contacts/{RelationshipRecordId}` | Delete one contact |
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriers` | Get all carriers |
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriers/{CarrierId}/child/inboundTrackingRules` | Get all inbound tracking rules |
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriers/{CarrierId}/child/inboundTrackingRules/{TrackingRuleName}` | Delete an inbound tracking rule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/carriers` | Create one carrier |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/carriers/{CarrierId}/child/inboundTrackingRules/{TrackingRuleName}` | Update an inbound tracking rule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/carriers/{CarrierId}` | Get one carrier |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/carriers/{CarrierId}/child/shippingMethods/{ShipMethodCode}/child/DFF/{OrgCarrierServiceId}` | Get one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/carriers/{CarrierId}` | Update one carrier |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/carriers/{CarrierId}/child/shippingMethods/{ShipMethodCode}/child/DFF/{OrgCarrierServiceId}` | Update one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/carriers/{CarrierId}/child/shippingMethods/{ShipMethodCode}` | Update one shipping method |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/carriers/{CarrierId}/child/DFF/{CarrierId2}` | Get one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/carriers/{CarrierId}/child/inboundTrackingRules/{TrackingRuleName}/child/parameters/{ParameterId}` | Get one parameter |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/carriers/{CarrierId}/child/inboundTrackingRules/{TrackingRuleName}` | Get one inbound tracking rule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/carriers/{CarrierId}/child/DFF/{CarrierId2}` | Update one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/carriers/{CarrierId}/child/contacts/{RelationshipRecordId}` | Get one contact |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/carriers/{CarrierId}/child/shippingMethods/{ShipMethodCode}` | Get one shipping method |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/carriers/{CarrierId}/child/inboundTrackingRules/{TrackingRuleName}/child/parameters/{ParameterId}` | Update one parameter |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/carriers/{CarrierId}/child/contacts/{RelationshipRecordId}` | Update one contact |

## c ha nn el Ow ne rs LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/channelOwnersLOV/{PersonId}` | Get one channel owner |
| `GET` | `/fscmRestApi/resources/11.13.18.05/channelOwnersLOV` | Get all channel owners |

## c ha nn el Pr og ra ms

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/volumeRules` | Create volume rules |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/marketRules/{QualifierId}/child/conditions` | Create conditions |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/attachments` | Create an attachment |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/volumeRules/{VolumeRuleId}/child/products` | Create products |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/programRules` | Create program rules |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/notes` | Create a note |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/marketRulesV2` | Create market rules |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/productRules` | Create product rules |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/marketRules` | Create market rules |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/alternateSupplierSites` | Create alternate supplier sites |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/channelPrograms` | Create programs |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/volumeRules/{VolumeRuleId}/child/products/{ProductId}/child/exclusions` | Create exclusions |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/volumeRules/{VolumeRuleId}/child/tiers` | Create tiers |
| `GET` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/notes/{NoteId}` | Get a note object |
| `GET` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/notes/{NoteId}/enclosure/NoteTxt` | Delete a NoteTxt |
| `GET` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/programRules` | Get all program rules |
| `GET` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/volumeRules/{VolumeRuleId}/child/tiers/{TierId}` | Delete one tier |
| `GET` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/marketRules/{QualifierId}/child/conditions` | Get all conditions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/marketRules/{QualifierId}/child/conditions/{QualifierConditionId}` | Delete one condition |
| `GET` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/notes/{NoteId}` | Delete a note |
| `GET` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/volumeRules/{VolumeRuleId}/child/tiers` | Get all tiers |
| `GET` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/productRules/{ProgramLineId}` | Delete one product rule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/volumeRules/{VolumeRuleId}` | Delete one volume rule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/volumeRules/{VolumeRuleId}/child/products/{ProductId}/child/exclusions/{ExclusionId}` | Delete an exclusion |
| `GET` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/volumeRules` | Get all volume rules |
| `GET` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/volumeRules/{VolumeRuleId}/child/products` | Get all products |
| `GET` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/volumeRules/{VolumeRuleId}/child/products/{ProductId}` | Delete one product |
| `GET` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/productRules/{ProgramLineId}/child/DFF` | Descriptive Flexfields for Channel Programs |
| `GET` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/productRules` | Get all product rules |
| `GET` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/productRules/{ProgramLineId}/child/DFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/programRules/{QualifierId}` | Delete one program rule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/volumeRules/{VolumeRuleId}/child/products/{ProductId}/child/exclusions` | Get all exclusions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/alternateSupplierSites` | Get all alternate supplier sites |
| `GET` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/DFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/marketRules/{QualifierId}` | Delete one market rule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/alternateSupplierSites/{AlternateSupplierSiteId}` | Delete an alternate supplier site |
| `GET` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/alternateSupplierSites/{AlternateSupplierSiteId}` | Get one alternate supplier site |
| `GET` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/attachments` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/attachments/{attachmentsUniqID}` | Delete an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/DFF` | Descriptive Flexfields for Channel Programs |
| `GET` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/marketRulesV2` | Get all market rules |
| `GET` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}` | Delete one program |
| `GET` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/marketRulesV2/{RuleId}` | Delete one market rule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/marketRules` | Get all market rules |
| `GET` | `/fscmRestApi/resources/11.13.18.05/channelPrograms` | Get all programs |
| `GET` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/attachments/{attachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/volumeRules/{VolumeRuleId}/child/tiers/{TierId}` | Update one tier |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/programRules/{QualifierId}` | Update one program rule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/volumeRules/{VolumeRuleId}` | Update one volume rule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/attachments/{attachmentsUniqID}` | Get an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/volumeRules/{VolumeRuleId}` | Get one volume rule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/attachments/{attachmentsUniqID}` | Update an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}` | Update one program |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/volumeRules/{VolumeRuleId}/child/products/{ProductId}/child/exclusions/{ExclusionId}` | Get one exclusion |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/volumeRules/{VolumeRuleId}/child/products/{ProductId}/child/exclusions/{ExclusionId}` | Update an exclusion |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}` | Get one program |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/volumeRules/{VolumeRuleId}/child/tiers/{TierId}` | Get one tier |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/volumeRules/{VolumeRuleId}/child/products/{ProductId}` | Get one product |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/volumeRules/{VolumeRuleId}/child/products/{ProductId}` | Update one product |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/notes/{NoteId}` | Update a note |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/notes` | Get all note objects |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/DFF/{ProgramHeaderId}` | Get one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/DFF/{ProgramHeaderId}` | Update one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/marketRules/{QualifierId}` | Get one market rule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/marketRules/{QualifierId}/child/conditions/{QualifierConditionId}` | Get one condition |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/marketRulesV2/{RuleId}` | Get one market rule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/marketRules/{QualifierId}` | Update one market rule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/marketRules/{QualifierId}/child/conditions/{QualifierConditionId}` | Update one condition |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/productRules/{ProgramLineId}` | Get one product rule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/productRules/{ProgramLineId}/child/DFF/{ProgramLineId2}` | Update one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/productRules/{ProgramLineId}/child/DFF/{ProgramLineId2}` | Get one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/programRules/{QualifierId}` | Get one program rule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/marketRulesV2/{RuleId}` | Update one market rule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/productRules/{ProgramLineId}` | Update one product rule |
| `POST` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/productRules/{ProgramLineId}/child/DFF/{ProgramLineId2}` | Delete one flexfield |
| `POST` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/DFF/{ProgramHeaderId}` | Delete one flexfield |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Get a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/notes/{NoteId}/enclosure/NoteTxt` | Get a NoteTxt |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/notes/{NoteId}/enclosure/NoteTxt` | Replace a NoteTxt |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/channelPrograms/{ProgramId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |

## c ha nn el Se tt in gs

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/channelSettings/{SettingId}/child/Values` | Create values |
| `GET` | `/fscmRestApi/resources/11.13.18.05/channelSettings/{SettingId}/child/Values` | Get all values |
| `GET` | `/fscmRestApi/resources/11.13.18.05/channelSettings` | Get all settings |
| `GET` | `/fscmRestApi/resources/11.13.18.05/channelSettings/{SettingId}` | Get one setting |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/channelSettings/{SettingId}/child/Values/{SettingValueId}` | Update one value |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/channelSettings/{SettingId}/child/Values/{SettingValueId}` | Get one value |

## c ha nn el Su pp li er Ma nu al Ad ju st me nt s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/channelSupplierManualAdjustments/{ManualAdjustmentId}/child/DFF` | Create one descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/channelSupplierManualAdjustments/{ManualAdjustmentId}/child/DFF` | Get all descriptive flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/channelSupplierManualAdjustments/{ManualAdjustmentId}` | Get one supplier manual adjustment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/channelSupplierManualAdjustments` | Create one supplier manual adjustment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/channelSupplierManualAdjustments` | Get all supplier manual adjustments |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/channelSupplierManualAdjustments/{ManualAdjustmentId}/child/DFF/{ManualAdjustmentId2}` | Update one descriptive flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/channelSupplierManualAdjustments/{ManualAdjustmentId}/child/DFF/{ManualAdjustmentId2}` | Get one descriptive flexfield |

## c ha nn el Tr an sa ct io ns

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/channelTransactions/{TransactionId}` | Get one channel transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/channelTransactions` | Get all channel transactions |

## c ha rg eD ef in it io ns LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/chargeDefinitionsLOV/{PricingChargeDefinitionId}` | Get one pricing charge definition |
| `GET` | `/fscmRestApi/resources/11.13.18.05/chargeDefinitionsLOV` | Get all pricing charge definitions |

## c jm Lo vC la im Re as on s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/cjmLovClaimReasons/{ReasonCodeId}` | Get one reason |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cjmLovClaimReasons` | Get all reasons |

## c jm Lo vC la im Ty pe s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/cjmLovClaimTypes/{ClaimTypeId}` | Get one claim type |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cjmLovClaimTypes` | Get all claim types |

## c jm Lo vS up pl ie rI te ms

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/cjmLovSupplierItems/{TpItemId}` | Get one supplier item |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cjmLovSupplierItems` | Get all supplier items |

## c li pb oa rd En tr ie s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/clipboardEntries` | Add multiple entries to clipboard |
| `GET` | `/fscmRestApi/resources/11.13.18.05/clipboardEntries/{ClipboardEntryId}` | Get one entry from the clipboard |
| `GET` | `/fscmRestApi/resources/11.13.18.05/clipboardEntries` | Get all entries from the clipboard |
| `GET` | `/fscmRestApi/resources/11.13.18.05/clipboardEntries/{ClipboardEntryId}` | Delete one entry from the clipboard |

## c li pb oa rd En tr ie sV2

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/clipboardEntriesV2/{ClipboardEntryId}/child/ObjectTagSet` | Create object tag sets |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/clipboardEntriesV2` | Create one clipboard entry |
| `GET` | `/fscmRestApi/resources/11.13.18.05/clipboardEntriesV2/{ClipboardEntryId}/child/ObjectTagSet/{Id}` | Delete one object tag set |
| `GET` | `/fscmRestApi/resources/11.13.18.05/clipboardEntriesV2/{ClipboardEntryId}/child/ObjectTagSet` | Get all object tag sets |
| `GET` | `/fscmRestApi/resources/11.13.18.05/clipboardEntriesV2/{ClipboardEntryId}` | Delete one clipboard entry |
| `GET` | `/fscmRestApi/resources/11.13.18.05/clipboardEntriesV2` | Get all clipboard entries |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/clipboardEntriesV2/{ClipboardEntryId}/child/ObjectTagSet/{Id}` | Update one object tag set |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/clipboardEntriesV2/{ClipboardEntryId}/child/ObjectTagSet/{Id}` | Get one object tag set |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/clipboardEntriesV2/{ClipboardEntryId}` | Get one clipboard entry |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/clipboardEntriesV2/{ClipboardEntryId}` | Update one clipboard entry |

## c ol la bo ra ti on Ag gr eg at io nS ch ed ul es

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationAggregationSchedules` | Get all aggregation schedules |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationAggregationSchedules/action/activateSchedule` | Activate an aggregation schedule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/collaborationAggregationSchedules/{ScheduleId}` | Update an aggregation schedule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/collaborationAggregationSchedules/{ScheduleId}` | Get an aggregation schedule |

## c ol la bo ra ti on Al lO rg an iz at io ns LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationAllOrganizationsLOV/{OrganizationId}` | Get one organization |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationAllOrganizationsLOV` | Get all organizations |

## c ol la bo ra ti on Bu si ne ss Un it Re so lu ti on Ru le s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/collaborationBusinessUnitResolutionRules` | Create rules |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationBusinessUnitResolutionRules/{CollaborationBusinessUnitResolutionRuleId}` | Get one rule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationBusinessUnitResolutionRules` | Get all rules |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationBusinessUnitResolutionRules/{CollaborationBusinessUnitResolutionRuleId}` | Delete one rule |

## c ol la bo ra ti on Bu si ne ss Un it sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationBusinessUnitsLOV/{BusinessUnitId}` | Get one procurement business unit |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationBusinessUnitsLOV` | Get all procurement business units |

## c ol la bo ra ti on Co nt ac ts LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationContactsLOV/{PartyId}` | Get one collaboration contact |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationContactsLOV` | Get all collaboration contacts |

## c ol la bo ra ti on Cu st om er sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationCustomersLOV/{CustomerId}/child/sitesLOV` | Get all customer sites |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationCustomersLOV/{CustomerId}/child/sitesLOV/{CustomerSiteId}` | Get one customer site |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationCustomersLOV` | Get all customers |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationCustomersLOV/{CustomerId}` | Get one customer |

## c ol la bo ra ti on Do cu me nt De fi ni ti on s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/collaborationDocumentDefinitions/{DocumentId}/child/measures/{DocumentMeasureId}/child/measureActions/{ActionId}/child/measureActionParticipants` | Create participants |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/collaborationDocumentDefinitions/{DocumentId}/child/measures` | Create a measure |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/collaborationDocumentDefinitions/{DocumentId}/child/measures/{DocumentMeasureId}/child/measureActions` | Create actions |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/collaborationDocumentDefinitions/{DocumentId}/child/documentActions` | Create actions |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/collaborationDocumentDefinitions/{DocumentId}/child/documentActions/{ActionId}/child/documentActionParticipants` | Create participants |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationDocumentDefinitions/{DocumentId}/child/measures/{DocumentMeasureId}/child/measureActions/{ActionId}` | Delete an action |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationDocumentDefinitions/{DocumentId}/child/measures` | Get all measures |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationDocumentDefinitions/{DocumentId}/child/measures/{DocumentMeasureId}/child/measureParameters` | Get all measure parameters |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationDocumentDefinitions/{DocumentId}/child/measures/{DocumentMeasureId}` | Delete a measure |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationDocumentDefinitions/{DocumentId}/child/measures/{DocumentMeasureId}/child/measureActions` | Get all actions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationDocumentDefinitions/{DocumentId}/child/measures/{DocumentMeasureId}/child/measureActions/{ActionId2}/child/measureActionParticipants/{ParticipantId}` | Delete a participant |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationDocumentDefinitions/{DocumentId}/child/measures/{DocumentMeasureId}/child/measureActions/{ActionId}/child/measureActionParticipants` | Get all participants |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationDocumentDefinitions/{DocumentId}/child/measures/{DocumentMeasureId}/child/measureActions/{ActionId2}/child/measureActionParticipants/{ParticipantId}` | Get one participant |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationDocumentDefinitions/{DocumentId}/child/measures/{DocumentMeasureId}/child/measureActions/{ActionId}` | Get one action |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationDocumentDefinitions/{DocumentId}/child/measures/{DocumentMeasureId}/child/measureParameters` | Create a measure parameter |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationDocumentDefinitions/{DocumentId}/child/documentActions/{ActionId}/child/documentActionParticipants` | Get all participants |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationDocumentDefinitions/{DocumentId}/child/documentActions/{ActionId}/child/documentActionParticipants/{ParticipantId}` | Get one participant |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationDocumentDefinitions/{DocumentId}/child/documentActions/{ActionId}` | Get one action |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationDocumentDefinitions/{DocumentId}/child/documentActions/{ActionId}` | Delete an action |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationDocumentDefinitions/{DocumentId}/child/documentActions` | Get all actions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationDocumentDefinitions/{DocumentId}/child/documentActions/{ActionId}/child/documentActionParticipants/{ParticipantId}` | Delete a participant |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationDocumentDefinitions` | Get all document definitions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationDocumentDefinitions/{DocumentId}/child/documentParameters` | Get all document parameters |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/collaborationDocumentDefinitions/{DocumentId}` | Get one document definition |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/collaborationDocumentDefinitions/{DocumentId}/child/measures/{DocumentMeasureId}/child/measureParameters/{InstanceParameterId}` | Update a measure parameter |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/collaborationDocumentDefinitions/{DocumentId}/child/measures/{DocumentMeasureId}/child/measureParameters/{InstanceParameterId}` | Get one measure parameter |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/collaborationDocumentDefinitions/{DocumentId}` | Update a document definition |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/collaborationDocumentDefinitions/{DocumentId}/child/measures/{DocumentMeasureId}` | Get one measure |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/collaborationDocumentDefinitions/{DocumentId}/child/documentParameters/{InstanceParameterId}` | Get one document parameter |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/collaborationDocumentDefinitions/{DocumentId}/child/documentParameters/{InstanceParameterId}` | Update a document parameter |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/collaborationDocumentDefinitions/{DocumentId}/child/measures/{DocumentMeasureId}` | Update a measure |

## c ol la bo ra ti on Do cu me nt Me as ur es LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationDocumentMeasuresLOV/{DocumentMeasureId}` | Get one document measure |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationDocumentMeasuresLOV` | Get all document measures |

## c ol la bo ra ti on Do cu me nt Me ta da ta

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationDocumentMetadata/{DocumentTypeCode}/child/documentMeasureMetadata` | Get metadata for all document measures |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationDocumentMetadata/{DocumentTypeCode}/child/documentMeasureMetadata/{DocumentMeasureMetadataId}` | Get metadata for one document measure |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationDocumentMetadata` | Get metadata for all document definitions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationDocumentMetadata/{DocumentTypeCode}` | Get metadata for one document definition |

## c ol la bo ra ti on Do cu me nt Ty pe sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationDocumentTypesLOV/{DocumentTypeCode}` | Get one document type |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationDocumentTypesLOV` | Get all document types |

## c ol la bo ra ti on It em Ca te go ry Se ts LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationItemCategorySetsLOV/{CategorySetId}` | Get one category set |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationItemCategorySetsLOV` | Get all category sets |

## c ol la bo ra ti on Or de rF or ec as tH is to ry

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationOrderForecastHistory/{CollaborationOrderForecastEntryId}/child/forecastQuantities` | Get all quantities |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationOrderForecastHistory/{CollaborationOrderForecastEntryId}/child/commitQuantities/{CollaborationOrderForecastDetailsId}` | Get one quantity |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationOrderForecastHistory/{CollaborationOrderForecastEntryId}/child/forecastQuantities/{CollaborationOrderForecastDetailsId}` | Get one quantity |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationOrderForecastHistory/{CollaborationOrderForecastEntryId}/child/referenceQuantities/{ReferenceDetailsId}` | Get one reference quantity |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationOrderForecastHistory/{CollaborationOrderForecastEntryId}/child/referenceQuantities` | Get all reference quantities |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationOrderForecastHistory/{CollaborationOrderForecastEntryId}/child/commitQuantities` | Get all quantities |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationOrderForecastHistory` | Get all forecasts |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationOrderForecastHistory/{CollaborationOrderForecastEntryId}` | Delete one forecast |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationOrderForecastHistory/{CollaborationOrderForecastEntryId}` | Get one forecast |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationOrderForecastHistory/{CollaborationOrderForecastEntryId}/child/aggregatedQuantities/{EntryDetailId}` | Get one quantity |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationOrderForecastHistory/{CollaborationOrderForecastEntryId}/child/aggregatedQuantities` | Get all quantities |

## c ol la bo ra ti on Or de rF or ec as tQ ua nt it ie s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationOrderForecastQuantities/{CollaborationOrderForecastId}/child/forecastQuantities` | Get all forecast quantities |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationOrderForecastQuantities/{CollaborationOrderForecastId}/child/exceptionQuantities/{exceptionQuantitiesUniqID}` | Get one exception attribute |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationOrderForecastQuantities/{CollaborationOrderForecastId}/child/forecastQuantities/{forecastQuantitiesUniqID}` | Get one forecast quantity |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationOrderForecastQuantities/{CollaborationOrderForecastId}/child/referenceQuantities/{RefercenceDetailsId}` | Get one reference quantity |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationOrderForecastQuantities/{CollaborationOrderForecastId}/child/referenceQuantities` | Get all reference quantities |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationOrderForecastQuantities/{CollaborationOrderForecastId}` | Get quantities for one order forecast |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationOrderForecastQuantities` | Get quantities for all order forecasts |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationOrderForecastQuantities/{CollaborationOrderForecastId}/child/commitQuantities` | Get all commit quantities |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationOrderForecastQuantities/{CollaborationOrderForecastId}/child/exceptionQuantities` | Get all exception attributes |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationOrderForecastQuantities/{CollaborationOrderForecastId}/child/commitQuantities/{commitQuantitiesUniqID}` | Get one commit quantity |

## c ol la bo ra ti on Or de rF or ec as tR eq ue st s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationOrderForecastRequests/{CollaborationOrderForecastRequestId}/child/details/{detailsUniqID}` | Get one detail |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationOrderForecastRequests/{CollaborationOrderForecastRequestId}/child/details` | Get all details |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationOrderForecastRequests/{CollaborationOrderForecastRequestId}/child/requestStatusDetails/{RequestDetailId}` | Get one status |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationOrderForecastRequests/{CollaborationOrderForecastRequestId}/child/requestStatusDetails` | Get all statuses |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationOrderForecastRequests` | Get all forecasts |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationOrderForecastRequests` | Create forecasts |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationOrderForecastRequests/{CollaborationOrderForecastRequestId}/child/details` | Create details |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationOrderForecastRequests/{CollaborationOrderForecastRequestId}` | Get one forecast |

## c ol la bo ra ti on Or de rF or ec as ts

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationOrderForecasts/{CollaborationOrderForecastId}/child/forecastQuantities` | Create forecast quantities |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationOrderForecasts/{CollaborationOrderForecastId}/child/exceptionQuantities/{exceptionQuantitiesUniqID}` | Get one exception attribute |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationOrderForecasts/{CollaborationOrderForecastId}/child/exceptionQuantities` | Get all exception attributes |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationOrderForecasts/{CollaborationOrderForecastId}/child/forecastQuantities` | Get all forecast quantities |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationOrderForecasts/{CollaborationOrderForecastId}/child/referenceQuantities/{RefercenceDetailsId}` | Get one reference quantity |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationOrderForecasts/{CollaborationOrderForecastId}/child/referenceQuantities` | Get all reference quantities |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationOrderForecasts/{CollaborationOrderForecastId}/child/forecastQuantities/{CollaborationOrderForecastDetailsId}` | Get one forecast quantity |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationOrderForecasts/{CollaborationOrderForecastId}` | Delete an order forecast |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationOrderForecasts` | Get all order forecasts |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationOrderForecasts/{CollaborationOrderForecastId}/child/commitQuantities` | Create commit quantities |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationOrderForecasts/{CollaborationOrderForecastId}/child/commitQuantities/{CollaborationOrderForecastDetailsId}` | Get one commit quantity |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationOrderForecasts/{CollaborationOrderForecastId}/child/commitQuantities` | Get all commit quantities |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/collaborationOrderForecasts/{CollaborationOrderForecastId}` | Update an order forecast |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/collaborationOrderForecasts/{CollaborationOrderForecastId}` | Get one order forecast |

## c ol la bo ra ti on Pa ra me te rs

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationParameters` | Get all parameters |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/collaborationParameters/{Code}` | Update a parameter |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/collaborationParameters/{Code}` | Get one parameter |

## c ol la bo ra ti on Pa rt ic ip an tS up pl ie rS it es LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationParticipantSupplierSitesLOV/{SupplierSiteId}` | Get one supplier site |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationParticipantSupplierSitesLOV` | Get all supplier sites |

## c ol la bo ra ti on Pl an ne rO rg an iz at io ns LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationPlannerOrganizationsLOV/{OrganizationId}` | Get one organization |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationPlannerOrganizationsLOV` | Get all organizations |

## c ol la bo ra ti on Pl an ne rS up pl ie rs LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationPlannerSuppliersLOV/{SupplierId}` | Get one supplier |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationPlannerSuppliersLOV` | Get all suppliers |

## c ol la bo ra ti on Pl an ni ng Ti me Le ve ls LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationPlanningTimeLevelsLOV` | Get all planning time levels |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationPlanningTimeLevelsLOV/{PlanningTimeLevelId}` | Get a planning time level |

## c ol la bo ra ti on Su pp li er On Ha nd En te rp ri se It em sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationSupplierOnHandEnterpriseItemsLOV/{ItemId}` | Get one item |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationSupplierOnHandEnterpriseItemsLOV` | Get all items |

## c ol la bo ra ti on Su pp li er On Ha nd En te rp ri se Su pp li er Si te sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationSupplierOnHandEnterpriseSupplierSitesLOV/{SupplierSiteId}` | Get one supplier site |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationSupplierOnHandEnterpriseSupplierSitesLOV` | Get all supplier sites |

## c ol la bo ra ti on Su pp li er On Ha nd Su pp li er It em sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationSupplierOnHandSupplierItemsLOV/{SupplierItemNumber}` | Get one supplier item |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationSupplierOnHandSupplierItemsLOV` | Get all supplier items |

## c ol la bo ra ti on Su pp li er On Ha nd Su pp li er sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationSupplierOnHandSuppliersLOV/{SupplierId}` | Get one supplier |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationSupplierOnHandSuppliersLOV` | Gel all suppliers |

## c ol la bo ra ti on Su pp li er Pa ra me te rs

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationSupplierParameters/{Code}` | Get one parameter |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationSupplierParameters` | Get all parameters |

## c ol la bo ra ti on Su pp ly Da ta Up lo ad s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationSupplyDataUploads/{ImportRequestId}/child/statusDetails/{statusDetailsUniqID}` | Get one processing error |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationSupplyDataUploads/{ImportRequestId}/enclosure/Attachment` | Get an Attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationSupplyDataUploads/{ImportRequestId}/child/statusDetails` | Get all processing errors |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationSupplyDataUploads/{ImportRequestId}` | Delete one upload request |
| `GET` | `/fscmRestApi/resources/11.13.18.05/collaborationSupplyDataUploads` | Get all upload requests |
| `POST` | `/fscmRestApi/resources/11.13.18.05/collaborationSupplyDataUploads` | Upload a file |
| `POST` | `/fscmRestApi/resources/11.13.18.05/collaborationSupplyDataUploads/{ImportRequestId}` | Get one upload request |

## c on fi gu re Ex ce pt io ns

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/configureExceptions/{ExceptionId}/child/Notifications/{NotificationsUniqID}/child/NotificationDetails` | Get all notification details |
| `GET` | `/fscmRestApi/resources/11.13.18.05/configureExceptions/{ExceptionId}/child/Notifications/{NotificationsUniqID}` | Get one notification |
| `GET` | `/fscmRestApi/resources/11.13.18.05/configureExceptions/{ExceptionId}/child/Notifications/{NotificationsUniqID}/child/NotificationDetails/{NotificationDetailsUniqID}/enclosure/NotificationCondition` | Get a NotificationCondition |
| `GET` | `/fscmRestApi/resources/11.13.18.05/configureExceptions/{ExceptionId}/child/Notifications/{NotificationsUniqID}/child/NotificationDetails/{NotificationDetailsUniqID}` | Get one notification detail |
| `GET` | `/fscmRestApi/resources/11.13.18.05/configureExceptions/{ExceptionId}/child/Notifications` | Get all notifications |
| `GET` | `/fscmRestApi/resources/11.13.18.05/configureExceptions/{ExceptionId}` | Get one exception |
| `GET` | `/fscmRestApi/resources/11.13.18.05/configureExceptions` | Get all exceptions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/configureExceptions/{ExceptionId}/child/ExceptionGroups/{GroupId}` | Get one exception group |
| `GET` | `/fscmRestApi/resources/11.13.18.05/configureExceptions/{ExceptionId}/child/ExceptionGroups` | Get all exception groups |

## c os ti ng It em sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/costingItemsLOV/{ItemId}` | Get an item |
| `GET` | `/fscmRestApi/resources/11.13.18.05/costingItemsLOV` | Get all items |

## c os tR ol lu pG ro up s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/costRollupGroups/{RollupGroupId}/child/costRollupGroupDetails` | Create rollup group details |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/costRollupGroups` | Create rollup groups |
| `GET` | `/fscmRestApi/resources/11.13.18.05/costRollupGroups/{RollupGroupId}/child/costRollupGroupDetails/{RollupGroupDetailId}` | Delete one rollup group's details |
| `GET` | `/fscmRestApi/resources/11.13.18.05/costRollupGroups/{RollupGroupId}/child/costRollupGroupDetails` | Get all rollup group details |
| `GET` | `/fscmRestApi/resources/11.13.18.05/costRollupGroups/{RollupGroupId}` | Delete a rollup group |
| `GET` | `/fscmRestApi/resources/11.13.18.05/costRollupGroups` | Get all rollup groups |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/costRollupGroups/{RollupGroupId}/child/costRollupGroupDetails/{RollupGroupDetailId}` | Update one rollup group's details |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/costRollupGroups/{RollupGroupId}/child/costRollupGroupDetails/{RollupGroupDetailId}` | Get one rollup group's details |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/costRollupGroups/{RollupGroupId}` | Get one rollup group |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/costRollupGroups/{RollupGroupId}` | Update a rollup group |

## c os tS ce na ri oE xc ep ti on s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/costScenarioExceptions/{ScenarioId}/child/ScenarioEventMessages/{ScenarioEventMessagesUniqID}/enclosure/DownloadErrorsCsv` | Get a DownloadErrorsCsv |
| `GET` | `/fscmRestApi/resources/11.13.18.05/costScenarioExceptions/{ScenarioId}/child/ScenarioEventMessages/{ScenarioEventMessagesUniqID}/child/EventMessageDetails` | Gets all records for the message |
| `GET` | `/fscmRestApi/resources/11.13.18.05/costScenarioExceptions/{ScenarioId}/child/ScenarioEventMessages/{ScenarioEventMessagesUniqID}/child/EventMessageDetails/{ScenarioEventMessageId}` | Gets one specific record for the message |
| `GET` | `/fscmRestApi/resources/11.13.18.05/costScenarioExceptions/{ScenarioId}/child/ScenarioEventMessages/{ScenarioEventMessagesUniqID}` | Gets one specific message from the scenario |
| `GET` | `/fscmRestApi/resources/11.13.18.05/costScenarioExceptions/{ScenarioId}` | Get one singular scenario to review the exceptions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/costScenarioExceptions` | Gets all the scenarios to review the exceptions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/costScenarioExceptions/{ScenarioId}/child/ScenarioEventMessages` | Gets all the messages from the scenarios |

## c os tS ce na ri os

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/costScenarios/{costScenariosUniqID}/child/WorkDefinitionCriteriaDetails` | Create one work definition criteria detail for a cost planning scenario |
| `GET` | `/fscmRestApi/resources/11.13.18.05/costScenarios` | Create multiple cost scenarios |
| `GET` | `/fscmRestApi/resources/11.13.18.05/costScenarios/{costScenariosUniqID}/child/WorkDefinitionCriteriaDetails/{WdCriterionDetailId}` | Delete one work definition criterion detail for a cost planning scenario |
| `GET` | `/fscmRestApi/resources/11.13.18.05/costScenarios/{costScenariosUniqID}/child/WorkDefinitionCriteriaDetails` | Get all work definition criteria details for a cost planning scenario |
| `GET` | `/fscmRestApi/resources/11.13.18.05/costScenarios` | Get all cost scenarios |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/costScenarios/{costScenariosUniqID}/child/WorkDefinitionCriteriaDetails/{WdCriterionDetailId}` | Get one specific work definition criteria detail linked to a cost planning scenario |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/costScenarios/{costScenariosUniqID}/child/WorkDefinitionCriteriaDetails/{WdCriterionDetailId}` | Update one work definition criterion detail for a cost planning scenario |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/costScenarios/{costScenariosUniqID}` | Get one single cost scenario |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/costScenarios/{costScenariosUniqID}` | Update one cost scenario |

## c ur re nc ie sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/currenciesLOV` | Get all currencies |
| `GET` | `/fscmRestApi/resources/11.13.18.05/currenciesLOV/{currenciesLOV_Id}` | Get a currency |

## c ur re nc yC on ve rs io nL is ts

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/currencyConversionLists/{CurrencyConvListId}/child/conversions` | Create conversion rules |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/currencyConversionLists/{CurrencyConvListId}/child/accessSets` | Create access sets |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/currencyConversionLists` | Create currency conversion lists |
| `GET` | `/fscmRestApi/resources/11.13.18.05/currencyConversionLists/{CurrencyConvListId}/child/conversions` | Get all conversion rules |
| `GET` | `/fscmRestApi/resources/11.13.18.05/currencyConversionLists/{CurrencyConvListId}/child/conversions/{CurrencyConvDetailId}` | Delete one conversion rule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/currencyConversionLists/{CurrencyConvListId}/child/conversions/{CurrencyConvDetailId}/child/detailsDFF` | Create detail flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/currencyConversionLists/{CurrencyConvListId}/child/conversions/{CurrencyConvDetailId}/child/detailsDFF` | Get detail flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/currencyConversionLists/{CurrencyConvListId}/child/headerDFF` | Get all header flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/currencyConversionLists/{CurrencyConvListId}/child/headerDFF` | Create header flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/currencyConversionLists/{CurrencyConvListId}` | Delete one currency conversion list |
| `GET` | `/fscmRestApi/resources/11.13.18.05/currencyConversionLists` | Get all currency conversion lists |
| `GET` | `/fscmRestApi/resources/11.13.18.05/currencyConversionLists/{CurrencyConvListId}/child/accessSets` | Get all access sets |
| `GET` | `/fscmRestApi/resources/11.13.18.05/currencyConversionLists/{CurrencyConvListId}/child/accessSets/{CurrencyConvListSetId}` | Delete one access set |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/currencyConversionLists/{CurrencyConvListId}/child/conversions/{CurrencyConvDetailId}/child/detailsDFF/{CurrencyConvDetailId2}` | Update one detail flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/currencyConversionLists/{CurrencyConvListId}/child/conversions/{CurrencyConvDetailId}/child/detailsDFF/{CurrencyConvDetailId2}` | Get one detail flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/currencyConversionLists/{CurrencyConvListId}/child/headerDFF/{CurrencyConvListId2}` | Get one header flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/currencyConversionLists/{CurrencyConvListId}/child/headerDFF/{CurrencyConvListId2}` | Update one header flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/currencyConversionLists/{CurrencyConvListId}` | Get one currency conversion list |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/currencyConversionLists/{CurrencyConvListId}/child/conversions/{CurrencyConvDetailId}` | Get one conversion rule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/currencyConversionLists/{CurrencyConvListId}/child/accessSets/{CurrencyConvListSetId}` | Get one access set |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/currencyConversionLists/{CurrencyConvListId}/child/accessSets/{CurrencyConvListSetId}` | Update one access set |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/currencyConversionLists/{CurrencyConvListId}` | Update one currency conversion list |
| `POST` | `/fscmRestApi/resources/11.13.18.05/currencyConversionLists/{CurrencyConvListId}/child/conversions/{CurrencyConvDetailId}` | Update one conversion rule |
| `POST` | `/fscmRestApi/resources/11.13.18.05/currencyConversionLists/{CurrencyConvListId}/child/conversions/{CurrencyConvDetailId}/action/validateDateOverlap` | Validate date overlap |

## c us to me rA ss et s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/customerAssets/{AssetId}/child/AssetStructure` | Create one relationship |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/customerAssets/{AssetId}/child/AssetCharge` | Create one charge |
| `GET` | `/fscmRestApi/resources/11.13.18.05/customerAssets/{AssetId}/child/AssetMeter` | Get all meters |
| `GET` | `/fscmRestApi/resources/11.13.18.05/customerAssets/{AssetId}/child/CustomerAssetDFF` | Create flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/customerAssets/{AssetId}/child/CustomerAssetDFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/customerAssets/{AssetId}/child/AssetMeter/{MeterId}` | Get one meter |
| `GET` | `/fscmRestApi/resources/11.13.18.05/customerAssets/{AssetId}/child/AssetStructure` | Get all relationships |
| `GET` | `/fscmRestApi/resources/11.13.18.05/customerAssets/{AssetId}/child/AssetStructure/{RelationshipId}` | Delete one relationship |
| `GET` | `/fscmRestApi/resources/11.13.18.05/customerAssets/{AssetId}/child/AssetStructure/{RelationshipId}` | Get one relationship |
| `GET` | `/fscmRestApi/resources/11.13.18.05/customerAssets` | Create one asset |
| `GET` | `/fscmRestApi/resources/11.13.18.05/customerAssets/{AssetId}/child/AssetCharge/{AssetChargeId}` | Delete one charge |
| `GET` | `/fscmRestApi/resources/11.13.18.05/customerAssets` | Get all assets |
| `GET` | `/fscmRestApi/resources/11.13.18.05/customerAssets/{AssetId}/child/AssetCharge` | Get all charges |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/customerAssets/{AssetId}` | Get one asset |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/customerAssets/{AssetId}/child/AssetCharge/{AssetChargeId}` | Update one charge |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/customerAssets/{AssetId}` | Update one asset |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/customerAssets/{AssetId}/child/CustomerAssetDFF/{AssetId2}` | Update one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/customerAssets/{AssetId}/child/CustomerAssetDFF/{AssetId2}` | Get one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/customerAssets/{AssetId}/child/AssetCharge/{AssetChargeId}` | Get one charge |

## c us to me rA ss et Tr an sa ct io ns

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/customerAssetTransactions/action/addShipLine` | addShipLine |
| `GET` | `/fscmRestApi/resources/11.13.18.05/customerAssetTransactions/{TransactionId}/child/TransactedCustomerAsset/{TransactedAssetId}` | Get |
| `GET` | `/fscmRestApi/resources/11.13.18.05/customerAssetTransactions/{TransactionId}/child/TransactedCustomerAsset` | Create |
| `GET` | `/fscmRestApi/resources/11.13.18.05/customerAssetTransactions/{TransactionId}` | Delete |
| `GET` | `/fscmRestApi/resources/11.13.18.05/customerAssetTransactions/{TransactionId}` | Get |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/customerAssetTransactions/{TransactionId}/child/TransactedCustomerAsset` | Get all |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/customerAssetTransactions/{TransactionId}/child/TransactedCustomerAsset/{TransactedAssetId}` | Update |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/customerAssetTransactions` | POST |
| `POST` | `/fscmRestApi/resources/11.13.18.05/customerAssetTransactions/{TransactionId}` | Update |
| `POST` | `/fscmRestApi/resources/11.13.18.05/customerAssetTransactions` | Get all |
| `POST` | `/fscmRestApi/resources/11.13.18.05/customerAssetTransactions/action/updateShipLineQuantity` | updateShipLineQuantity |

## c us to me rS it es LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/customerSitesLOV/{Id}` | Get one customer site |
| `GET` | `/fscmRestApi/resources/11.13.18.05/customerSitesLOV` | Get all customer sites |

## c us to me rs LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/customersLOV/{Id}` | Get one customer |
| `GET` | `/fscmRestApi/resources/11.13.18.05/customersLOV` | Get all customers |

## c us to me rT ra de Pr of il es

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/customerTradeProfiles/{CustomerTradeProfileId}/child/mappings` | Create mappings |
| `GET` | `/fscmRestApi/resources/11.13.18.05/customerTradeProfiles` | Create profiles |
| `GET` | `/fscmRestApi/resources/11.13.18.05/customerTradeProfiles/{CustomerTradeProfileId}/child/mappings/{MappingId}` | Delete one mapping |
| `GET` | `/fscmRestApi/resources/11.13.18.05/customerTradeProfiles/{CustomerTradeProfileId}/child/mappings` | Get all mappings |
| `GET` | `/fscmRestApi/resources/11.13.18.05/customerTradeProfiles` | Get all profiles |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/customerTradeProfiles/{CustomerTradeProfileId}/child/mappings/{MappingId}` | Get one mapping |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/customerTradeProfiles/{CustomerTradeProfileId}/child/mappings/{MappingId}` | Update one mapping |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/customerTradeProfiles/{CustomerTradeProfileId}` | Get one profile |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/customerTradeProfiles/{CustomerTradeProfileId}` | Update one profile |

## c yc le Co un tD ef in it io ns

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/cycleCountDefinitions/{CycleCountHeaderId}/child/countClasses` | Create classes |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/cycleCountDefinitions/{CycleCountHeaderId}/child/countCategories` | Create count categories |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/cycleCountDefinitions/{CycleCountHeaderId}/child/countCategoryItems` | Create count category items |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/cycleCountDefinitions/{CycleCountHeaderId}/child/countItems` | Create items |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cycleCountDefinitions/{CycleCountHeaderId}/child/countClasses` | Get all classes |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cycleCountDefinitions/{CycleCountHeaderId}/child/countClasses/{CycleCountClassId}` | Delete one class |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cycleCountDefinitions/{CycleCountHeaderId}/child/countItems` | Get all items |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cycleCountDefinitions/{CycleCountHeaderId}/child/DFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cycleCountDefinitions/{CycleCountHeaderId}/child/countItems/{CycleCountItemId}` | Delete one item |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cycleCountDefinitions/{CycleCountHeaderId}/child/DFF` | Create flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cycleCountDefinitions/{CycleCountHeaderId}/child/countLocators` | Get all cycle count locators |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cycleCountDefinitions/{CycleCountHeaderId}/child/countLocators` | Create one cycle count locator |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cycleCountDefinitions/{CycleCountHeaderId}/child/countCategories/{CountCategoryId}` | Delete one count category |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cycleCountDefinitions/{CycleCountHeaderId}/child/countCategories` | Get all count categories |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cycleCountDefinitions` | Create definitions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cycleCountDefinitions` | Get all definitions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cycleCountDefinitions/{CycleCountHeaderId}/child/countSubinventories` | Get all subinventories |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cycleCountDefinitions/{CycleCountHeaderId}/child/countCategoryItems` | Get all count category items |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cycleCountDefinitions/{CycleCountHeaderId}/child/countCategoryItems/{CountCategoryItemId}` | Delete one count category item |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cycleCountDefinitions/{CycleCountHeaderId}/child/countSubinventories` | Create subinventories |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cycleCountDefinitions/{CycleCountHeaderId}/child/countLocators/{countLocatorsUniqID}` | Get one cycle count locator |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cycleCountDefinitions/{CycleCountHeaderId}/child/countLocators/{countLocatorsUniqID}` | Update one cycle count locator |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cycleCountDefinitions/{CycleCountHeaderId}/child/countItems/{CycleCountItemId}` | Get one item |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cycleCountDefinitions/{CycleCountHeaderId}/child/countSubinventories/{countSubinventoriesUniqID}` | Get one subinventory |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cycleCountDefinitions/{CycleCountHeaderId}/child/countSubinventories/{countSubinventoriesUniqID}` | Update one subinventory |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cycleCountDefinitions/{CycleCountHeaderId}/child/countItems/{CycleCountItemId}` | Update one item |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cycleCountDefinitions/{CycleCountHeaderId}/child/countCategories/{CountCategoryId}` | Update one count category |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cycleCountDefinitions/{CycleCountHeaderId}/child/countCategoryItems/{CountCategoryItemId}` | Get one count category item |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cycleCountDefinitions/{CycleCountHeaderId}/child/countCategories/{CountCategoryId}` | Get one count category |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cycleCountDefinitions/{CycleCountHeaderId}` | Get one definition |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cycleCountDefinitions/{CycleCountHeaderId}` | Update one definition |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cycleCountDefinitions/{CycleCountHeaderId}/child/DFF/{CycleCountHeaderId2}` | Get one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cycleCountDefinitions/{CycleCountHeaderId}/child/DFF/{CycleCountHeaderId2}` | Update one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cycleCountDefinitions/{CycleCountHeaderId}/child/countClasses/{CycleCountClassId}` | Update one class |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cycleCountDefinitions/{CycleCountHeaderId}/child/countCategoryItems/{CountCategoryItemId}` | Update one count category item |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cycleCountDefinitions/{CycleCountHeaderId}/child/countClasses/{CycleCountClassId}` | Get one class |

## c yc le Co un tS ch ed ul es

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/cycleCountSchedules` | Create schedules |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cycleCountSchedules` | Get all schedules |
| `GET` | `/fscmRestApi/resources/11.13.18.05/cycleCountSchedules/{CycleCountScheduleId}` | Delete one schedule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cycleCountSchedules/{CycleCountScheduleId}` | Update one schedule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/cycleCountSchedules/{CycleCountScheduleId}` | Get one schedule |

## d em an dA nd Su pp ly Pl an s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/PlanningSupplies/{TransactionId3}/child/PeggedDemands/{PeggingId}` | Get one pegged demand |
| `GET` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/PlanningSupplies/{TransactionId}/child/PeggedDemands` | Get all pegged demands |
| `GET` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/PlanningSupplies/{TransactionId}/child/PlanningAttributes` | Create attributes for a demand or supply |
| `GET` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/PlanningSupplies/{TransactionId}/child/UpstreamSupplies` | Get all upstream supplies |
| `GET` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/PlanningSupplies/{TransactionId}/child/PlanningAttributes` | Get attributes for all demands or supplies |
| `GET` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/PlanningDemands/{TransactionId}/child/PlanningAttributes` | Get attributes for all demands or supplies |
| `GET` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/PlanningDemands/{TransactionId}/child/PlanningAttributes` | Create attributes for a demand or supply |
| `GET` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/PlanningSupplies` | Create supplies |
| `GET` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/workDefinitionVersions/{workDefinitionVersionsUniqID}` | Get details of one work definition version |
| `GET` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/PlanningSupplies` | Get all supplies |
| `GET` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/PlanningSupplies/{TransactionId3}/child/UpstreamSupplies/{PeggingId}` | Get one upstream supply |
| `GET` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/Runs/{ExecutionId}` | Get one run |
| `GET` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/Runs` | Get all runs |
| `GET` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/SupplierExceptions` | Get details of all supplier exceptions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/workDefinitionVersions` | Get details of all work definitions and their versions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/SupplyExceptions` | Get details of all supply exceptions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/ResourceRequirements` | Get details of all resource requirements |
| `GET` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/ResourceExceptions` | Get details of all resource exceptions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/ResourceRequirements/{TransactionId}` | Get details of one resource requirement |
| `GET` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/Runs` | Create runs |
| `GET` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/Resources` | Get all resources |
| `GET` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/PlanningDemands/{TransactionId}/child/PeggedSupplies/{PeggingId}` | Get one pegged supply |
| `GET` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/AnalyzingLateDemands` | Get late demand analysis for all end demands |
| `GET` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/AnalyzingLateDemands/{AnalyzingLateDemandsUniqID}` | Get late demand analysis for one end demand |
| `GET` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/PlanningDemands` | Create demands |
| `GET` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/ItemExceptions` | Get exception details of all item exceptions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/Items` | Get all items |
| `GET` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/DemandExceptions` | Get details of all demand exceptions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/DemandExceptions/{DemandExceptionsUniqID}` | Get details of one demand exception |
| `GET` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/ItemRelationships/{ItemRelationshipsUniqID}` | Get one item relationship |
| `GET` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/ItemRelationships` | Get all item relationships |
| `GET` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans` | Get all plans |
| `GET` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/PlanningDemands/{TransactionId}/child/EndPeggedSupplies` | Get all end pegged supplies |
| `GET` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/PlanningDemands/{TransactionId}/child/PeggedSupplies` | Get all pegged supplies |
| `GET` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/PlanningDemands/{TransactionId}/child/EndPeggedSupplies/{PeggingId}` | Get one end pegged supply |
| `GET` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/PlanningDemands` | Get all demands |
| `GET` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}` | Get one plan |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/Resources/{ResourceId}` | Get one resource |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/Resources/{ResourceId}` | Update one resource |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/SupplierExceptions/{SupplierExceptionsUniqID}` | Update details of one supplier exception |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/SupplierExceptions/{SupplierExceptionsUniqID}` | Get details of one supplier exception |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/SupplyExceptions/{SupplyExceptionsUniqID}` | Get details of one supply exception |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/SupplyExceptions/{SupplyExceptionsUniqID}` | Update details of one supply exception |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/PlanningSupplies/{TransactionId}` | Get one supply |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/PlanningDemands/{TransactionId}` | Get one demand |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/PlanningSupplies/{TransactionId}` | Update one supply |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/Items/{ItemsUniqID}` | Update one item |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/PlanningDemands/{TransactionId}/child/PlanningAttributes/{TransactionId2}` | Get attributes for one demand or supply |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/PlanningDemands/{TransactionId}/child/PlanningAttributes/{TransactionId2}` | Update attributes for one demand or supply |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/PlanningDemands/{TransactionId}` | Update one demand |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/Items/{ItemsUniqID}` | Get one item |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/ResourceExceptions/{ResourceExceptionsUniqID}` | Update details of one resource exception |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/ItemExceptions/{ItemExceptionsUniqID}` | Update exception details of an item exception |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/ItemExceptions/{ItemExceptionsUniqID}` | Get exception details of one item exception |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/PlanningSupplies/{TransactionId}/child/PlanningAttributes/{TransactionId4}` | Get attributes for one demand or supply |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/PlanningSupplies/{TransactionId}/child/PlanningAttributes/{TransactionId4}` | Update attributes for one demand or supply |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/demandAndSupplyPlans/{PlanId}/child/ResourceExceptions/{ResourceExceptionsUniqID}` | Get details of one resource exception |

## d em an dM ea su re sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/demandMeasuresLOV/{demandMeasuresLOVUniqID}` | Get one demand measure |
| `GET` | `/fscmRestApi/resources/11.13.18.05/demandMeasuresLOV` | Get all demand measures |

## d em an dS ou rc eS ys te ms LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/demandSourceSystemsLOV/{InstanceId}` | Get one demand source system |
| `GET` | `/fscmRestApi/resources/11.13.18.05/demandSourceSystemsLOV` | Get all demand source systems |

## d im en si on Ca ta lo gs

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/dimensionCatalogs/{CatalogId}/child/CatalogHierarchy` | Get all requests for selected hierarchies in a dimension catalog |
| `GET` | `/fscmRestApi/resources/11.13.18.05/dimensionCatalogs/{CatalogId}/child/CatalogHierarchy/{CatalogHierarchyUniqID}` | Delete one request for selected hierarchies in a dimension catalog |
| `GET` | `/fscmRestApi/resources/11.13.18.05/dimensionCatalogs/{CatalogId}` | Delete one request |
| `GET` | `/fscmRestApi/resources/11.13.18.05/dimensionCatalogs` | Get all requests |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/dimensionCatalogs/{CatalogId}` | Get one request |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/dimensionCatalogs/{CatalogId}/child/CatalogHierarchy/{CatalogHierarchyUniqID}` | Get one request for selected hierarchies in a dimension catalog |
| `POST` | `/fscmRestApi/resources/11.13.18.05/dimensionCatalogs/{CatalogId}/child/CatalogHierarchy` | Post all requests for selected hierarchies in a dimension catalog |
| `POST` | `/fscmRestApi/resources/11.13.18.05/dimensionCatalogs/{CatalogId}/child/CatalogHierarchy/{CatalogHierarchyUniqID}` | Patch one request for selected hierarchies in a dimension catalog |
| `POST` | `/fscmRestApi/resources/11.13.18.05/dimensionCatalogs/{CatalogId}` | Patch one request |
| `POST` | `/fscmRestApi/resources/11.13.18.05/dimensionCatalogs` | Post all request |

## d im en si on s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/dimensions/{DimensionCode}/child/Hierarchy` | Get all requests for a hierarchy in a dimension |
| `GET` | `/fscmRestApi/resources/11.13.18.05/dimensions/{DimensionCode}/child/Hierarchy/{HierarchyId}` | Get one request for a hierarchy in a dimension |
| `GET` | `/fscmRestApi/resources/11.13.18.05/dimensions` | Get all requests |
| `GET` | `/fscmRestApi/resources/11.13.18.05/dimensions/{DimensionCode}` | Get one request |

## d is co un tL is ts

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/attributeRules` | Create attribute rules |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/tieredRules` | Create tiered rules |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items` | Create discount list items |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/tieredRules/{PricingTermId}/child/pricingTiers/{TierHeaderId}/child/lines` | Create tier lines |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/attributeRules/{PricingTermId}/child/pricingMatrixes/{MatrixId}/child/dimensions` | Create one dimension |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/simpleRules` | Create simple rules |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/attributeRules/{PricingTermId}/child/pricingMatrixes` | Create one pricing matrix |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/attributeRules/{PricingTermId}/child/pricingMatrixes/{MatrixId}/child/rules` | Create matrix rules |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/tieredRules/{PricingTermId}/child/pricingTiers` | Create tier headers |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/discountLists` | Create discount lists |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/accessSets` | Create discount list access sets |
| `GET` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/tieredRules/{PricingTermId}/child/pricingTiers/{TierHeaderId}/child/lines` | Get all tier lines |
| `GET` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/simpleRules/{PricingTermId}` | Delete one simple rule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/tieredRules/{PricingTermId}/child/pricingTiers/{TierHeaderId}/child/lines/{TierLineId}/child/linesDFF` | Create tier line flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/attributeRules/{PricingTermId}/child/pricingMatrixes/{MatrixId}/child/rules` | Get all matrix rules |
| `GET` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/attributeRules/{PricingTermId}/child/pricingMatrixes/{MatrixId}/child/rules/{MatrixRuleId}` | Delete one matrix rule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/tieredRules/{PricingTermId}/child/pricingTiers/{TierHeaderId}/child/lines/{TierLineId}/child/linesDFF` | Get all tier line flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/attributeRules/{PricingTermId}/child/rulesDFF` | Get all pricing term flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/attributeRules/{PricingTermId}/child/rulesDFF` | Create pricing term flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/tieredRules/{PricingTermId}/child/pricingTiers` | Get all tier headers |
| `GET` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/tieredRules` | Get all tiered rules |
| `GET` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/tieredRules/{PricingTermId}` | Delete one tiered rule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/tieredRules/{PricingTermId}/child/pricingTiers/{TierHeaderId}/child/headerDFF` | Get all tier header flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/tieredRules/{PricingTermId}/child/rulesDFF` | Get all pricing term flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/tieredRules/{PricingTermId}/child/rulesDFF` | Create pricing term flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/simpleRules/{PricingTermId}/child/rulesDFF` | Create pricing term flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/tieredRules/{PricingTermId}/child/pricingTiers/{TierHeaderId}/child/lines/{TierLineId}` | Delete one tier line |
| `GET` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/simpleRules/{PricingTermId}/child/rulesDFF` | Get all pricing term flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/tieredRules/{PricingTermId}/child/pricingTiers/{TierHeaderId}/child/headerDFF` | Create tier header flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/tieredRules/{PricingTermId}/child/pricingTiers/{TierHeaderId}` | Delete one tier header |
| `GET` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}` | Get one discount list item |
| `GET` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items` | Get all discount list items |
| `GET` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}` | Delete one discount list item |
| `GET` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/headerDFF` | Create header flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/attributeRules` | Get all attribute rules |
| `GET` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/attributeRules/{PricingTermId}` | Delete one attribute rule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/headerDFF` | Get all header flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/discountLists` | Get all discount lists |
| `GET` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}` | Delete one discount list |
| `GET` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/accessSets/{DiscountListSetId}` | Get one discount list access set |
| `GET` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/accessSets` | Get all discount list access sets |
| `GET` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/accessSets/{DiscountListSetId}` | Delete one discount list access set |
| `GET` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/itemsDFF` | Get all item flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/itemsDFF` | Create item flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/attributeRules/{PricingTermId}/child/pricingMatrixes/{MatrixId}/child/dimensions` | Get all dimensions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/attributeRules/{PricingTermId}/child/pricingMatrixes/{MatrixId}/child/dimensions/{MatrixDimensionId}` | Delete one matrix dimension |
| `GET` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/simpleRules` | Get all simple rules |
| `GET` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/attributeRules/{PricingTermId}/child/pricingMatrixes/{MatrixId}` | Delete one pricing matrix |
| `GET` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/attributeRules/{PricingTermId}/child/pricingMatrixes` | Get all pricing matrixes |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/headerDFF/{DiscountListId2}` | Get one header flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/tieredRules/{PricingTermId}/child/pricingTiers/{TierHeaderId}/child/lines/{TierLineId}/child/linesDFF/{TieredPricingLineId}` | Get one tier line flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/tieredRules/{PricingTermId}/child/pricingTiers/{TierHeaderId}/child/lines/{TierLineId}/child/linesDFF/{TieredPricingLineId}` | Update one tier line flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/tieredRules/{PricingTermId}/child/pricingTiers/{TierHeaderId}` | Update one tier header |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/itemsDFF/{DiscountListItemId2}` | Update one item flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/tieredRules/{PricingTermId}/child/pricingTiers/{TierHeaderId}/child/headerDFF/{TieredPricingHeaderId}` | Update one tier header flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/tieredRules/{PricingTermId}/child/pricingTiers/{TierHeaderId}/child/lines/{TierLineId}` | Get one tier line |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/itemsDFF/{DiscountListItemId2}` | Get one item flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/tieredRules/{PricingTermId}/child/pricingTiers/{TierHeaderId}/child/headerDFF/{TieredPricingHeaderId}` | Get one tier header flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/tieredRules/{PricingTermId}/child/pricingTiers/{TierHeaderId}/child/lines/{TierLineId}` | Update one tier line |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/tieredRules/{PricingTermId}/child/pricingTiers/{TierHeaderId}` | Get one tier header |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/attributeRules/{PricingTermId}/child/pricingMatrixes/{MatrixId}/child/dimensions/{MatrixDimensionId}` | Get one dimension |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/attributeRules/{PricingTermId}/child/pricingMatrixes/{MatrixId}` | Update one pricing matrix |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/attributeRules/{PricingTermId}/child/pricingMatrixes/{MatrixId}/child/dimensions/{MatrixDimensionId}` | Update one matrix dimension |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/attributeRules/{PricingTermId}/child/pricingMatrixes/{MatrixId}/child/rules/{MatrixRuleId}` | Update one matrix rule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/attributeRules/{PricingTermId}/child/pricingMatrixes/{MatrixId}/child/rules/{MatrixRuleId}` | Get one matrix rule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}` | Update one discount list |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}` | Get one discount list |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/attributeRules/{PricingTermId}` | Get one attribute rule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/attributeRules/{PricingTermId}/child/pricingMatrixes/{MatrixId}` | Get one pricing matrix |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/attributeRules/{PricingTermId}` | Update one attribute rule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/attributeRules/{PricingTermId}/child/rulesDFF/{PricingTermId2}` | Get one pricing term flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/tieredRules/{PricingTermId}` | Get one tiered rule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/simpleRules/{PricingTermId}/child/rulesDFF/{PricingTermId4}` | Update one pricing term flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/tieredRules/{PricingTermId}` | Update one tiered rule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/tieredRules/{PricingTermId}/child/rulesDFF/{PricingTermId6}` | Update one pricing term flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/tieredRules/{PricingTermId}/child/rulesDFF/{PricingTermId6}` | Get one pricing term flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/headerDFF/{DiscountListId2}` | Update one header flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/attributeRules/{PricingTermId}/child/rulesDFF/{PricingTermId2}` | Update one pricing term flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/simpleRules/{PricingTermId}` | Get one simple rule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/simpleRules/{PricingTermId}/child/rulesDFF/{PricingTermId4}` | Get one pricing term flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/child/items/{DiscountListItemId}/child/simpleRules/{PricingTermId}` | Update one simple rule |
| `POST` | `/fscmRestApi/resources/11.13.18.05/discountLists/{DiscountListId}/action/copy` | Copy one discount list |

## d is pa tc hL is tW or kO rd er Op er at io ns

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/dispatchListWorkOrderOperations/{dispatchListWorkOrderOperationsUniqID}/child/WorkOrderOperationProductSerial` | Get all serials |
| `GET` | `/fscmRestApi/resources/11.13.18.05/dispatchListWorkOrderOperations/{dispatchListWorkOrderOperationsUniqID}/child/WorkOrderOperationProductSerial/{WorkOrderProductSerialId}` | Get one serial |
| `GET` | `/fscmRestApi/resources/11.13.18.05/dispatchListWorkOrderOperations` | Get all operations |
| `GET` | `/fscmRestApi/resources/11.13.18.05/dispatchListWorkOrderOperations/{dispatchListWorkOrderOperationsUniqID}` | Get one operation |

## d up li ca te Re ca ll No ti ce s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/duplicateRecallNotices` | Get all duplicate recall notices |
| `GET` | `/fscmRestApi/resources/11.13.18.05/duplicateRecallNotices/{HeaderId}` | Get a duplicate recall notice |

## e le ct ro ni cS ig na tu re Pr ef er en ce s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/electronicSignaturePreferences/{SignatureOrganizationId}/child/electronicSignatureTransactionTypes` | Create transaction types |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/electronicSignaturePreferences` | Create inventory organizations |
| `GET` | `/fscmRestApi/resources/11.13.18.05/electronicSignaturePreferences/{SignatureOrganizationId}/child/electronicSignatureTransactionTypes` | Get all transaction types |
| `GET` | `/fscmRestApi/resources/11.13.18.05/electronicSignaturePreferences/{SignatureOrganizationId}/child/electronicSignatureTransactionTypes/{SignatureDefinitionId}` | Delete one transaction type |
| `GET` | `/fscmRestApi/resources/11.13.18.05/electronicSignaturePreferences` | Get all inventory organizations |
| `GET` | `/fscmRestApi/resources/11.13.18.05/electronicSignaturePreferences/{SignatureOrganizationId}` | Delete one inventory organization |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/electronicSignaturePreferences/{SignatureOrganizationId}/child/electronicSignatureTransactionTypes/{SignatureDefinitionId}` | Get one transaction type |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/electronicSignaturePreferences/{SignatureOrganizationId}` | Get one inventory organization |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/electronicSignaturePreferences/{SignatureOrganizationId}/child/electronicSignatureTransactionTypes/{SignatureDefinitionId}` | Update one transaction type |
| `POST` | `/fscmRestApi/resources/11.13.18.05/electronicSignaturePreferences/action/validatePendingWorkOrderApprovals` | Validate pending approvals |
| `POST` | `/fscmRestApi/resources/11.13.18.05/electronicSignaturePreferences/{SignatureOrganizationId}` | Update one inventory organization |

## e xc ep ti on Se ts

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/exceptionSets/{ExceptionSetId}/child/ExceptionSetsAssociation` | Create one exception association |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/exceptionSets/{ExceptionSetId}/child/Filters` | Create one filter |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/exceptionSets` | Create an exception set |
| `GET` | `/fscmRestApi/resources/11.13.18.05/exceptionSets/{ExceptionSetId}/child/ExceptionSetsAssociation` | Get all exception associations |
| `GET` | `/fscmRestApi/resources/11.13.18.05/exceptionSets/{ExceptionSetId}/child/Filters/{FilterId}` | Get one filter |
| `GET` | `/fscmRestApi/resources/11.13.18.05/exceptionSets/{ExceptionSetId}/child/Filters` | Get all filters |
| `GET` | `/fscmRestApi/resources/11.13.18.05/exceptionSets/{ExceptionSetId}/child/Filters/{FilterId}` | Delete one filter |
| `GET` | `/fscmRestApi/resources/11.13.18.05/exceptionSets/{ExceptionSetId}` | Delete an exception set |
| `GET` | `/fscmRestApi/resources/11.13.18.05/exceptionSets` | Get all exception sets |
| `GET` | `/fscmRestApi/resources/11.13.18.05/exceptionSets/{ExceptionSetId}/child/ExceptionSetsAssociation/{ExceptionSetsAssociationUniqID}` | Delete one exception association |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/exceptionSets/{ExceptionSetId}` | Update one exception set |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/exceptionSets/{ExceptionSetId}` | Get one exception set |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/exceptionSets/{ExceptionSetId}/child/ExceptionSetsAssociation/{ExceptionSetsAssociationUniqID}` | Update one exception association |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/exceptionSets/{ExceptionSetId}/child/ExceptionSetsAssociation/{ExceptionSetsAssociationUniqID}` | Get one exception association |

## f in Bu si ne ss Un it sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/finBusinessUnitsLOV` | Get all business units |

## f is ca lD oc um en tC FO Ps LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/fiscalDocumentCFOPsLOV` | Get all fiscal document CFOPs |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fiscalDocumentCFOPsLOV/{ConcatClassificationCode}` | Get a fiscal document CFOP |

## f is ca lD oc um en tF in al Di sc ha rg eL oc at io ns LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/fiscalDocumentFinalDischargeLocationsLOV` | Get all final discharge locations |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fiscalDocumentFinalDischargeLocationsLOV/{LocationId}` | Get a final discharge location |

## f is ca lD oc um en tP ro du ct Ca te go ri es LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/fiscalDocumentProductCategoriesLOV` | Get all product categories |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fiscalDocumentProductCategoriesLOV/{ClassificationCode}` | Get a product category |

## f is ca lD oc um en tP ro du ct Cl as si fi ca ti on sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/fiscalDocumentProductClassificationsLOV` | Get all product classifications |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fiscalDocumentProductClassificationsLOV/{fiscalDocumentProductClassificationsLOVUniqID}` | Get a product classification |

## f is ca lD oc um en tT ax Cl as si fi ca ti on sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/fiscalDocumentTaxClassificationsLOV` | Get all tax classifications |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fiscalDocumentTaxClassificationsLOV/{TaxClassificationCode}` | Get a tax classification |

## f is ca lD oc um en tU DF Cs LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/fiscalDocumentUDFCsLOV` | Get all tax classification codes |
| `GET` | `/fscmRestApi/resources/11.13.18.05/fiscalDocumentUDFCsLOV/{ClassificationCode}` | Get a tax classification code |

## F le xF nd Pv sC ha ra ct er Id Ch ar ac te rV al ue s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/FlexFndPvsCharacterIdCharacterValues` | Get all |
| `GET` | `/fscmRestApi/resources/11.13.18.05/FlexFndPvsCharacterIdCharacterValues/{FlexFndPvsCharacterIdCharacterValues_Id}` | Get |

## F le xF nd Pv sC ha ra ct er Va lu es

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/FlexFndPvsCharacterValues` | Get all |
| `GET` | `/fscmRestApi/resources/11.13.18.05/FlexFndPvsCharacterValues/{FlexFndPvsCharacterValues_Id}` | Get |

## F le xF nd Pv sN um be rI dC ha ra ct er Va lu es

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/FlexFndPvsNumberIdCharacterValues` | Get all |
| `GET` | `/fscmRestApi/resources/11.13.18.05/FlexFndPvsNumberIdCharacterValues/{FlexFndPvsNumberIdCharacterValues_Id}` | Get |

## f nd St at ic Lo ok up s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/fndStaticLookups` | Get all lookups. |

## f or ec as ti ng Pr of il es

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/forecastingProfiles/{ForecastingProfileId}/child/forecastingParameters` | Get all forecasting parameters for a forecasting profile |
| `GET` | `/fscmRestApi/resources/11.13.18.05/forecastingProfiles/{ForecastingProfileId}` | Get one forecasting profile |
| `GET` | `/fscmRestApi/resources/11.13.18.05/forecastingProfiles` | Get all forecasting profiles |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/forecastingProfiles/{ForecastingProfileId}/child/forecastingParameters/{ForecastingParameterId}` | Update one forecasting parameter value for a forecasting profile |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/forecastingProfiles/{ForecastingProfileId}/child/forecastingParameters/{ForecastingParameterId}` | Get one forecasting parameter for a forecasting profile |

## f or ec as tS im ul at io nM ea su re s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/forecastSimulationMeasures/{MeasureId}` | Get one measure associated with the forecast simulation |
| `GET` | `/fscmRestApi/resources/11.13.18.05/forecastSimulationMeasures` | Get all measures associated with the forecast simulation |

## g en er at eL ot Un it Of Me as ur eC on ve rs io ns

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/generateLotUnitOfMeasureConversions/{generateLotUnitOfMeasureConversionsUniqID}` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/generateLotUnitOfMeasureConversions` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/generateLotUnitOfMeasureConversions` | Create lot-specific conversions |

## g ra nu la ri ty Le ve ls

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/granularityLevels/{GranularityId}` | Get one granularity level |
| `GET` | `/fscmRestApi/resources/11.13.18.05/granularityLevels` | Get all granularity levels |

## i de as

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/ideas/{IdeaId}/child/Attachments` | Create an attachment |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/ideas/{IdeaId}/child/IdeaVote` | Create a vote |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/ideas/{IdeaId}/child/IdeaTeam` | Create a team member |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/ideas/{IdeaId}/child/IdeaComment` | Create a comment |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/ideas` | Create an idea |
| `GET` | `/fscmRestApi/resources/11.13.18.05/ideas/{IdeaId}/child/IdeaComment/{IdeaIdeaComment_Id}/enclosure/IdeaComment` | Delete an IdeaComment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/ideas/{IdeaId}/child/IdeaTeam/{IdeaIdeaTeam_Id}` | Get one team member |
| `GET` | `/fscmRestApi/resources/11.13.18.05/ideas/{IdeaId}/child/IdeaComment/{IdeaIdeaComment_Id}` | Delete a comment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/ideas/{IdeaId}/child/IdeaComment` | Get all comments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/ideas/{IdeaId}/child/IdeaVote` | Get all votes |
| `GET` | `/fscmRestApi/resources/11.13.18.05/ideas/{IdeaId}/child/IdeaVote/{IdeaIdeaVote_Id}` | Delete a vote |
| `GET` | `/fscmRestApi/resources/11.13.18.05/ideas/{IdeaId}/enclosure/Content` | Delete a Content |
| `GET` | `/fscmRestApi/resources/11.13.18.05/ideas/{IdeaId}/child/IdeaTeam/{IdeaIdeaTeam_Id}` | Delete a team member |
| `GET` | `/fscmRestApi/resources/11.13.18.05/ideas/{IdeaId}/child/IdeaTeam` | Get all team members |
| `GET` | `/fscmRestApi/resources/11.13.18.05/ideas/{IdeaId}/child/Attachments/{AttachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/ideas` | Get all ideas |
| `GET` | `/fscmRestApi/resources/11.13.18.05/ideas/{IdeaId}/child/Attachments` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/ideas/{IdeaId}/child/Attachments/{AttachmentsUniqID}` | Delete an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/ideas/{IdeaId}` | Delete an idea |
| `GET` | `/fscmRestApi/resources/11.13.18.05/ideas/{IdeaId}/child/Attachments/{AttachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/ideas/{IdeaId}/child/IdeaVote/{IdeaIdeaVote_Id}` | Get one vote |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/ideas/{IdeaId}` | Update an idea |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/ideas/{IdeaId}/child/IdeaVote/{IdeaIdeaVote_Id}` | Update a vote |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/ideas/{IdeaId}` | Get one idea |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/ideas/{IdeaId}/child/IdeaComment/{IdeaIdeaComment_Id}` | Update a comment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/ideas/{IdeaId}/child/IdeaComment/{IdeaIdeaComment_Id}` | Get one comment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/ideas/{IdeaId}/child/Attachments/{AttachmentsUniqID}` | Update an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/ideas/{IdeaId}/child/Attachments/{AttachmentsUniqID}` | Get an attachment |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/ideas/{IdeaId}/child/Attachments/{AttachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/ideas/{IdeaId}/enclosure/Content` | Get a Content |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/ideas/{IdeaId}/enclosure/Content` | Replace a Content |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/ideas/{IdeaId}/child/IdeaComment/{IdeaIdeaComment_Id}/enclosure/IdeaComment` | Get an IdeaComment |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/ideas/{IdeaId}/child/IdeaComment/{IdeaIdeaComment_Id}/enclosure/IdeaComment` | Replace an IdeaComment |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/ideas/{IdeaId}/child/Attachments/{AttachmentsUniqID}/enclosure/FileContents` | Get a FileContents |

## i nb ou nd Fi sc al Do cu me nt Ho ld s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/inboundFiscalDocumentHolds/{FiscalDocumentHoldId}` | Get details of a fiscal document hold |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inboundFiscalDocumentHolds` | Create a fiscal document hold |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inboundFiscalDocumentHolds/{FiscalDocumentHoldId}` | Update a fiscal document hold |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inboundFiscalDocumentHolds` | Get details of all fiscal document holds |

## i nb ou nd Fi sc al Do cu me nt s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/inboundFiscalDocuments/{DocumentId}/child/fiscalDocumentLines` | Get all lines |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inboundFiscalDocuments/{DocumentId}/child/fiscalDocumentLines/{fiscalDocumentLinesUniqID}/child/fiscalDocumentSchedules` | Get all schedules |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inboundFiscalDocuments/{DocumentId}/child/fiscalDocumentLines/{fiscalDocumentLinesUniqID}/child/fiscalDocumentSchedules/{ScheduleId}` | Get one schedule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inboundFiscalDocuments` | Get all documents |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inboundFiscalDocuments/{DocumentId}/child/fiscalDocumentLines/{fiscalDocumentLinesUniqID}` | Update one line |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inboundFiscalDocuments/{DocumentId}/child/fiscalDocumentLines/{fiscalDocumentLinesUniqID}` | Get one line |
| `POST` | `/fscmRestApi/resources/11.13.18.05/inboundFiscalDocuments/{DocumentId}/action/rejectFiscalDocument` | The action changes the fiscal document status to REJECTED |
| `POST` | `/fscmRestApi/resources/11.13.18.05/inboundFiscalDocuments/{DocumentId}` | Get one document |
| `POST` | `/fscmRestApi/resources/11.13.18.05/inboundFiscalDocuments/{DocumentId}/action/cancelFiscalDocument` | The action changes the fiscal document status to CANCELED. |

## i ni ti al iz at io nP ar am et er s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/initializationParameters/{ParameterId}` | Get one parameter |
| `GET` | `/fscmRestApi/resources/11.13.18.05/initializationParameters` | Get all parameters |
| `GET` | `/fscmRestApi/resources/11.13.18.05/initializationParameters` | Create one parameter |

## i ns pe ct io nA ct io ns

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionActions/{IpEventId}/child/inspectionEventActions` | Get all inspection actions for an inspection event |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionActions/{IpEventId}/child/inspectionEventActions/{IpEventId2}` | Get one inspection action for an inspection event |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionActions/{IpEventId}` | Get one inspection action for an inspection event |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionActions` | Create all inspection actions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionActions` | Get all inspection actions for an inspection event |

## i ns pe ct io nC ha ra ct er is ti cG ro up s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionCharacteristicGroups/{GroupId}` | Get one characteristic group |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionCharacteristicGroups` | Get all characteristic groups |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionCharacteristicGroups` | Create characteristic groups |

## i ns pe ct io nC ha ra ct er is ti cI te mA tt ri bu te sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionCharacteristicItemAttributesLOV/{inspectionCharacteristicItemAttributesLOVUniqID}` | Get one item class attribute |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionCharacteristicItemAttributesLOV` | Get all item class attributes |

## i ns pe ct io nC ha ra ct er is ti cs

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/inspectionCharacteristics/{CharacteristicId}/child/inspectionCharacteristicAttachments` | Create characteristic attachments |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/inspectionCharacteristics/{CharacteristicId}/child/inspectionCharacteristicValues` | Create characteristic values |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/inspectionCharacteristics/{CharacteristicId}/child/inspectionCharacteristicGroupAssociations` | Create characteristic group associations |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionCharacteristics/{CharacteristicId}/child/inspectionCharacteristicAttachments/{inspectionCharacteristicAttachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionCharacteristics/{CharacteristicId}/child/inspectionCharacteristicValues/{ValueId}` | Delete a characteristic value |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionCharacteristics/{CharacteristicId}/child/inspectionCharacteristicGroupAssociations` | Get all characteristic group associations |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionCharacteristics/{CharacteristicId}/child/inspectionCharacteristicGroupAssociations/{GroupAssociationId}` | Delete a characteristic group association |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionCharacteristics/{CharacteristicId}/child/inspectionCharacteristicAttachments/{inspectionCharacteristicAttachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionCharacteristics/{CharacteristicId}/child/inspectionCharacteristicValues` | Get all characteristic values |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionCharacteristics` | Get all inspection characteristics |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionCharacteristics` | Create inspection characteristics |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionCharacteristics/{CharacteristicId}/child/inspectionCharacteristicAttachments` | Get all characteristic attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionCharacteristics/{CharacteristicId}/child/inspectionCharacteristicAttachments/{inspectionCharacteristicAttachmentsUniqID}` | Get one characteristic attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionCharacteristics/{CharacteristicId}/child/inspectionCharacteristicAttachments/{inspectionCharacteristicAttachmentsUniqID}` | Delete a characteristic attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inspectionCharacteristics/{CharacteristicId}/child/inspectionCharacteristicGroupAssociations/{GroupAssociationId}` | Update a characteristic group association |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inspectionCharacteristics/{CharacteristicId}/child/inspectionCharacteristicValues/{ValueId}` | Get one characteristic value |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inspectionCharacteristics/{CharacteristicId}` | Get one inspection characteristic |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inspectionCharacteristics/{CharacteristicId}` | Update an inspection characteristic |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inspectionCharacteristics/{CharacteristicId}/child/inspectionCharacteristicGroupAssociations/{GroupAssociationId}` | Get one characteristic group association |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inspectionCharacteristics/{CharacteristicId}/child/inspectionCharacteristicValues/{ValueId}` | Update a characteristic value |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/inspectionCharacteristics/{CharacteristicId}/child/inspectionCharacteristicAttachments/{inspectionCharacteristicAttachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/inspectionCharacteristics/{CharacteristicId}/child/inspectionCharacteristicAttachments/{inspectionCharacteristicAttachmentsUniqID}/enclosure/FileContents` | Get a FileContents |

## i ns pe ct io nE ve nt Ch ar ac te ri st ic sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionEventCharacteristicsLOV/{inspectionEventCharacteristicsLOVUniqID}` | Get one inspection event characteristic |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionEventCharacteristicsLOV` | Get all inspection event characteristics |

## i ns pe ct io nE ve nt s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents` | Create one event |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/Attachments/{AttachmentsUniqID}` | Get one attachment |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/Sample/{SampleId}/child/SampleDisposition/{SampleEventDispositionId}/child/SampleResult/{SampleResultId}` | Get one result |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/Sample/{SampleId}/child/SampleDisposition/{SampleEventDispositionId}/child/SampleResult/{SampleResultId}/child/Attachments/{AttachmentsUniqID}` | Get one attachment |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/Sample/{SampleId}` | Get one sample |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/eventCharacteristics/{eventCharacteristicsUniqID}` | Get one inspection event characteristic |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/Sample/{SampleId}/child/SampleDisposition/{SampleEventDispositionId}/child/SampleResult/{SampleResultId}/child/Attachments` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/eventCharacteristics` | Get all inspection event characteristics |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/inspectionEventActions` | Get all inspection actions for an inspection event |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/inspectionEventActions/{IpEventId3}` | Get one inspection action for an inspection event |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/DFF` | Create one inspection event descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/Sample` | Create one sample |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/Sample/{SampleId}/child/SampleDisposition` | Get all dispositions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/Sample/{SampleId}/child/SampleDisposition` | Create one disposition |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/Sample` | Get all samples |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/Sample/{SampleId}/child/SampleDisposition/{SampleEventDispositionId}/child/SampleResult` | Get all results |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/DFF` | Get all inspection event descriptive flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/enclosure/InspectionInstructions` | Get an InspectionInstructions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/Sample/{SampleId}/child/SampleDisposition/{SampleEventDispositionId}/child/SampleResult/{SampleResultId}` | Create one result |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/EventDisposition` | Get all dispositions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/Sample/{SampleId}/child/SampleDisposition/{SampleEventDispositionId}/child/SampleResult/{SampleResultId}/child/DFF` | Create one sample result descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/samplesAndResults` | Get all results |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/Sample/{SampleId}/child/SampleDisposition/{SampleEventDispositionId}/child/SampleResult/{SampleResultId}/child/ResultEvaluation` | Get all evaluations |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/Sample/{SampleId}/child/SampleDisposition/{SampleEventDispositionId}/child/SampleResult/{SampleResultId}/child/DFF` | Get all sample result descriptive flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}` | Delete one event |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents` | Get all events |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/Attachments` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/EventDisposition` | Create one disposition |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/Sample/{SampleId}/child/SampleDisposition/{SampleEventDispositionId}/child/SampleResult/{SampleResultId}/child/Attachments/{AttachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/Attachments/{AttachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/Attachments/{AttachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/Sample/{SampleId}/child/SampleDisposition/{SampleEventDispositionId}/child/SampleResult/{SampleResultId}/child/Attachments/{AttachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/Sample/{SampleId}/child/SampleDisposition/{SampleEventDispositionId}/child/SampleResult/{SampleResultId}/child/ResultEvaluation` | Create one evaluation |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/Sample/{SampleId}/child/SampleDisposition/{SampleEventDispositionId}/child/SampleResult/{SampleResultId}/child/DFF/{SampleResultId2}` | Get one sample result descriptive flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/Sample/{SampleId}/child/SampleDisposition/{SampleEventDispositionId}/child/SampleResult/{SampleResultId}/child/ResultEvaluation/{ResultEvaluationId}` | Get one evaluation |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/Sample/{SampleId}/child/SampleDisposition/{SampleEventDispositionId}/child/SampleResult/{SampleResultId}/child/ResultEvaluation/{ResultEvaluationId}` | Update one evaluation |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/Sample/{SampleId}/child/SampleDisposition/{SampleEventDispositionId}` | Update one disposition |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/Sample/{SampleId}/child/SampleDisposition/{SampleEventDispositionId}` | Get one disposition |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/Sample/{SampleId}` | Update one sample |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/EventDisposition/{IpEventDispositionId}` | Update one disposition |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/DFF/{IpEventId2}` | Get one inspection event descriptive flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}` | Get one event |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/EventDisposition/{IpEventDispositionId}` | Get one disposition |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/DFF/{IpEventId2}` | Update one inspection event descriptive flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/Sample/{SampleId}` | Remove one sample |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/samplesAndResults/{samplesAndResultsUniqID}` | Update one result |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/samplesAndResults/{samplesAndResultsUniqID}` | Get one result |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/Sample/{SampleId}/child/SampleDisposition/{SampleEventDispositionId}/child/SampleResult/{SampleResultId}/child/DFF/{SampleResultId2}` | Update one sample result descriptive flexfield |
| `POST` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/action/updateESignatureStatus` | Update the status of one e-signature |
| `POST` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/action/updateSerials` | Update serials included in inspection |
| `POST` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/Attachments/{AttachmentsUniqID}` | Remove one attachment |
| `POST` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}` | Update one event |
| `POST` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/action/addCharacteristicToSamples` | Add characteristics or characteristic groups to samples |
| `POST` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/action/applyResultValue` | Apply result value to multiple sample results |
| `POST` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/action/completeHybridInspection` | Complete hybrid inspection |
| `POST` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/Attachments` | Upload one attachment |
| `POST` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/Sample/{SampleId}/child/SampleDisposition/{SampleEventDispositionId}/child/SampleResult/{SampleResultId}` | Remove one sample result |
| `POST` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/Sample/{SampleId}/child/SampleDisposition/{SampleEventDispositionId}/child/SampleResult/{SampleResultId}/child/Attachments/{AttachmentsUniqID}` | Remove one attachment |
| `POST` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/Sample/{SampleId}/child/SampleDisposition/{SampleEventDispositionId}/child/SampleResult` | Update one result |
| `POST` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/Sample/{SampleId}/child/SampleDisposition/{SampleEventDispositionId}/child/SampleResult/{SampleResultId}/child/Attachments` | Upload one attachment |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/Sample/{SampleId}/child/SampleDisposition/{SampleEventDispositionId}/child/SampleResult/{SampleResultId}/child/Attachments/{AttachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/Attachments/{AttachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/Attachments/{AttachmentsUniqID}/enclosure/FileContents` | Get a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/inspectionEvents/{IpEventId}/child/Sample/{SampleId}/child/SampleDisposition/{SampleEventDispositionId}/child/SampleResult/{SampleResultId}/child/Attachments/{AttachmentsUniqID}/enclosure/FileContents` | Get a FileContents |

## i ns pe ct io nP la ns

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/inspectionPlans/{InspectionPlanId}/child/criteria` | Create one criteria |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/inspectionPlans/{InspectionPlanId}/child/specifications` | Create one specification |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionPlans/{InspectionPlanId}/child/specifications` | Get all specifications |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionPlans/{InspectionPlanId}/enclosure/InspectionInstructions` | Delete an InspectionInstructions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionPlans/{InspectionPlanId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionPlans/{InspectionPlanId}/child/specifications/{SpecificationId}` | Delete a specification |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionPlans/{InspectionPlanId}/child/criteria` | Get all criteria |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionPlans/{InspectionPlanId}/child/criteria/{CriteriaId}` | Delete a criteria |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionPlans/{InspectionPlanId}/child/attachments/{attachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionPlans` | Get all inspection plans |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionPlans/{InspectionPlanId}/child/specifications/{SpecificationId}/child/attachments/{attachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionPlans/{InspectionPlanId}/child/specifications/{SpecificationId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionPlans` | Create one inspection plan |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionPlans/{InspectionPlanId}/child/specifications/{SpecificationId}/child/attachments` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionPlans/{InspectionPlanId}/child/specifications/{SpecificationId}/child/attachments/{attachmentsUniqID}` | Delete one attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionPlans/{InspectionPlanId}/child/attachments` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionPlans/{InspectionPlanId}/child/attachments/{attachmentsUniqID}` | Delete one attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inspectionPlans/{InspectionPlanId}/child/specifications/{SpecificationId}` | Update one specification |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inspectionPlans/{InspectionPlanId}/child/specifications/{SpecificationId}` | Get one specification |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inspectionPlans/{InspectionPlanId}/child/specifications/{SpecificationId}/child/attachments/{attachmentsUniqID}` | Get one attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inspectionPlans/{InspectionPlanId}/child/attachments/{attachmentsUniqID}` | Get one attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inspectionPlans/{InspectionPlanId}` | Update one inspection plan |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inspectionPlans/{InspectionPlanId}` | Get one inspection plan |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inspectionPlans/{InspectionPlanId}/child/criteria/{CriteriaId}` | Get one criteria |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inspectionPlans/{InspectionPlanId}/child/criteria/{CriteriaId}` | Update a criteria |
| `POST` | `/fscmRestApi/resources/11.13.18.05/inspectionPlans/{InspectionPlanId}/child/specifications/{SpecificationId}/child/attachments/{attachmentsUniqID}` | Update one attachment |
| `POST` | `/fscmRestApi/resources/11.13.18.05/inspectionPlans/{InspectionPlanId}/action/copyPlan` | Copy inspection plan within or across organizations |
| `POST` | `/fscmRestApi/resources/11.13.18.05/inspectionPlans/{InspectionPlanId}/action/createNewVersion` | Create new version of a plan |
| `POST` | `/fscmRestApi/resources/11.13.18.05/inspectionPlans/{InspectionPlanId}/child/specifications/{SpecificationId}/child/attachments` | Upload one attachment |
| `POST` | `/fscmRestApi/resources/11.13.18.05/inspectionPlans/{InspectionPlanId}/child/attachments/{attachmentsUniqID}` | Update one attachment |
| `POST` | `/fscmRestApi/resources/11.13.18.05/inspectionPlans/{InspectionPlanId}/child/attachments` | Upload one attachment |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/inspectionPlans/{InspectionPlanId}/child/specifications/{SpecificationId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Get a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/inspectionPlans/{InspectionPlanId}/child/specifications/{SpecificationId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/inspectionPlans/{InspectionPlanId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/inspectionPlans/{InspectionPlanId}/enclosure/InspectionInstructions` | Replace an InspectionInstructions |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/inspectionPlans/{InspectionPlanId}/enclosure/InspectionInstructions` | Get an InspectionInstructions |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/inspectionPlans/{InspectionPlanId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Get a FileContents |

## i ns pe ct io nR es ul ts

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionResults` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inspectionResults` | Create inspection results |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inspectionResults/{InspectionEventId}` | Update one inspection result |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inspectionResults/{InspectionEventId}` | GET action not supported |

## i ns ta ll ed Ba se As se ts

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/assetQualifications/{AssetQualificationId}/child/attachments` | Create one asset qualification attachment |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/notes` | Create a asset note |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/charges` | Create an asset charge |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/attachments` | Create one asset qualification attachment |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/assetImageAttachments` | Create asset image attachments |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/partsListComponents` | Create a parts list component |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/relationships` | Create an asset relationship |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/meters` | Add meters to the asset |
| `GET` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/assetDFF` | Create an asset flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/relationships/{RelationshipId}` | Delete an asset relationship |
| `GET` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/assetDFF` | Get all asset flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/relationships/{RelationshipId}` | Get one asset relationship |
| `GET` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/charges/{chargesUniqID}` | Delete a asset charge |
| `GET` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/relationships` | Get all asset relationships |
| `GET` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/charges` | Get all asset charges |
| `GET` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/fixedAssetAssociations` | Get all the associations between installed base and fixed assets |
| `GET` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/fixedAssetAssociations` | Create associations between installed base and fixed assets |
| `GET` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/assetImageAttachments/{assetImageAttachmentsUniqID}` | Delete one asset image attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/partsListComponents/{ListComponentId}` | Delete a parts list component |
| `GET` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/partsListComponents` | Get all parts list component |
| `GET` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/notes/{NoteId}` | Delete a asset note |
| `GET` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/notes/{NoteId}/enclosure/NoteTxt` | Delete a NoteTxt |
| `GET` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/notes` | Get all asset notes |
| `GET` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/assetImageAttachments/{assetImageAttachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/assetImageAttachments` | Get all asset image attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/assetImageAttachments/{assetImageAttachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/meters` | Get all asset meters |
| `GET` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/meters/{metersUniqID}` | Delete meters of the asset |
| `GET` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/attachments/{attachmentsUniqID}` | Delete one asset qualification attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/assetQualifications` | Get all asset qualifications |
| `GET` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/assetQualifications` | Create one asset qualification |
| `GET` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/attachments` | Get all asset qualification attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/assetQualifications/{AssetQualificationId}/child/attachments/{attachmentsUniqID}` | Delete one asset qualification attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/assetQualifications/{AssetQualificationId}/child/attachments` | Get all asset qualification attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/assetQualifications/{AssetQualificationId}/child/attachments/{attachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/assetQualifications/{AssetQualificationId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets` | Get all assets |
| `GET` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets` | Create an asset |
| `GET` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/attachments/{attachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/meters/{metersUniqID}` | Update meters of the asset |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/assetQualifications/{AssetQualificationId}` | Update one asset qualification |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}` | Update an asset |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/fixedAssetAssociations/action/validateFixedAssetAssociations` | Method used to validate IB assets and their associations with fixed assets. |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/meters/{metersUniqID}` | Get one asset meter |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/partsListComponents/{ListComponentId}` | Update a parts list component |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/partsListComponents/{ListComponentId}` | Get one parts list component |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/action/exportAssets` | Method used to perform an export operation for assets and meters. |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/assetQualifications/action/findByAdvancedSearchQuery` | Method used to perform an search on asset qualifications. |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/notes/{NoteId}` | Get one asset note |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/notes/{NoteId}` | Update a asset note |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/assetQualifications/{AssetQualificationId}/child/attachments/{attachmentsUniqID}` | Get one asset qualification attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/attachments/{attachmentsUniqID}` | Update one asset qualification attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/fixedAssetAssociations/{FaAssociationId}` | Update existing associations between installed base and fixed asset |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/assetDFF/{AssetId2}` | Update an asset flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/charges/{chargesUniqID}` | Update a asset charge |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/assetDFF/{AssetId2}` | Get one asset flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/charges/{chargesUniqID}` | Get one asset charge |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/attachments/{attachmentsUniqID}` | Get one asset qualification attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/assetQualifications/{AssetQualificationId}/child/attachments/{attachmentsUniqID}` | Update one asset qualification attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/assetImageAttachments/{assetImageAttachmentsUniqID}` | Get one asset image attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/assetImageAttachments/{assetImageAttachmentsUniqID}` | Update one asset image attachment |
| `POST` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/fixedAssetAssociations/{FaAssociationId}` | Get an association between installed base and fixed assets |
| `POST` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/assetQualifications/{AssetQualificationId}` | Get one asset qualification |
| `POST` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}` | Get one asset |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Get a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/assetQualifications/{AssetQualificationId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Get a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/assetImageAttachments/{assetImageAttachmentsUniqID}/enclosure/FileContents` | Get a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/assetImageAttachments/{assetImageAttachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/notes/{NoteId}/enclosure/NoteTxt` | Replace a NoteTxt |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/notes/{NoteId}/enclosure/NoteTxt` | Get a NoteTxt |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/installedBaseAssets/{AssetId}/child/assetQualifications/{AssetQualificationId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |

## i nt ra ns it Va lu at io nO wn er sh ip Ch an ge Ru le s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/intransitValuationOwnershipChangeRules` | Create purchase order in transit valuation-ownership change rules |
| `GET` | `/fscmRestApi/resources/11.13.18.05/intransitValuationOwnershipChangeRules` | Get all purchase order in-transit valuation-ownership change rules |
| `GET` | `/fscmRestApi/resources/11.13.18.05/intransitValuationOwnershipChangeRules/{FOBLookupCode}` | Delete one purchase order in transit valuation-ownership change rule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/intransitValuationOwnershipChangeRules/{FOBLookupCode}` | Update one purchase order in-transit valuation-ownership change rules |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/intransitValuationOwnershipChangeRules/{FOBLookupCode}` | Get one purchase order in-transit valuation-ownership change rule |

## i nt ra st at Ca ta lo gs

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/intrastatCatalogs/{CategorySetId}` | Get one Intrastat catalog |
| `GET` | `/fscmRestApi/resources/11.13.18.05/intrastatCatalogs` | Get all Intrastat catalogs |

## i nt ra st at Ca te go ry Co de s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/intrastatCategoryCodes/{CategoryId}` | Get one Intrastat category code |
| `GET` | `/fscmRestApi/resources/11.13.18.05/intrastatCategoryCodes` | Get all Intrastat category codes |

## i nt ra st at Or ga ni za ti on s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/intrastatOrganizations/{intrastatOrganizationsUniqID}` | Get one intrastat organization |
| `GET` | `/fscmRestApi/resources/11.13.18.05/intrastatOrganizations` | Get all intrastat organizations |

## i nt ra st at Tr ad in gP ar tn er s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/intrastatTradingPartners/{TradingPartnerId}` | Get one intrastat trading partner |
| `GET` | `/fscmRestApi/resources/11.13.18.05/intrastatTradingPartners` | Get all intrastat trading partners |

## i nt ra st at Tr an sa ct io nC od es

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/intrastatTransactionCodes/{TransactionCodeId}` | Get an Intrastat transaction code |
| `GET` | `/fscmRestApi/resources/11.13.18.05/intrastatTransactionCodes` | Create an Intrastat transaction code |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/intrastatTransactionCodes/{TransactionCodeId}` | Update an Intrastat transaction code |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/intrastatTransactionCodes` | Get Intrastat transaction codes |

## i nv en to ry Ba la nc eT ra ns ac ti on s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryBalanceTransactions/{inventoryBalanceTransactionsUniqID}/child/transactionLines/{transactionLinesUniqID}/child/itemLots/{itemLotsUniqID}/child/itemSerialsForLot` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryBalanceTransactions/{inventoryBalanceTransactionsUniqID}/child/transactionLines/{transactionLinesUniqID}/child/itemLots/{itemLotsUniqID}/child/itemSerialsForLot/{itemSerialsForLotUniqID}` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryBalanceTransactions/{inventoryBalanceTransactionsUniqID}/child/transactionLines/{transactionLinesUniqID}/child/itemLots/{itemLotsUniqID}/child/itemSerialsForLot/{itemSerialsForLotUniqID}/child/dffForItemSerialsForLot` | Create DFF Attribute of a Serial record associated with a Balance Transaction approval record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryBalanceTransactions/{inventoryBalanceTransactionsUniqID}/child/transactionLines/{transactionLinesUniqID}/child/itemLots/{itemLotsUniqID}/child/itemSerialsForLot` | Create details |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryBalanceTransactions/{inventoryBalanceTransactionsUniqID}/child/transactionLines/{transactionLinesUniqID}/child/itemLots/{itemLotsUniqID}/child/dffForItemLots` | Create all DFF Attributes of a lot record associated with a Balance Transaction approval record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryBalanceTransactions/{inventoryBalanceTransactionsUniqID}/child/transactionLines/{transactionLinesUniqID}/child/itemLots/{itemLotsUniqID}/child/dffForItemLots` | Get all DFF Attributes of a lot record associated with a Balance Transaction approval record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryBalanceTransactions/{inventoryBalanceTransactionsUniqID}/child/transactionLines/{transactionLinesUniqID}/child/itemLots/{itemLotsUniqID}/child/dffForItemLots/{dffForItemLotsUniqID}` | Get one DFF Attribute of a lot record associated with a Balance Transaction approval record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryBalanceTransactions/{inventoryBalanceTransactionsUniqID}/child/transactionLines/{transactionLinesUniqID}/child/itemLots/{itemLotsUniqID}/child/itemSerialsForLot/{itemSerialsForLotUniqID}/child/dffForItemSerialsForLot` | Get all DFF Attributes of a Serial record associated with a Balance Transaction approval record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryBalanceTransactions/{inventoryBalanceTransactionsUniqID}/child/transactionLines/{transactionLinesUniqID}/child/itemSerials/{itemSerialsUniqID}/child/dffForItemSerials` | Create DFF Attribute of a Serial record associated with a Balance Transaction approval record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryBalanceTransactions/{inventoryBalanceTransactionsUniqID}/child/transactionLines/{transactionLinesUniqID}/child/itemSerials/{itemSerialsUniqID}/child/dffForItemSerials` | Get all DFF Attributes of a Serial record associated with a Balance Transaction approval record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryBalanceTransactions/{inventoryBalanceTransactionsUniqID}/child/transactionLines/{transactionLinesUniqID}/child/itemSerials/{itemSerialsUniqID}/child/dffForItemSerials/{dffForItemSerialsUniqID}` | Get one DFF Attribute of a Serial record associated with a Balance Transaction approval record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryBalanceTransactions/{inventoryBalanceTransactionsUniqID}/child/transactionLines/{transactionLinesUniqID}/child/itemSerials/{itemSerialsUniqID}` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryBalanceTransactions/{inventoryBalanceTransactionsUniqID}/child/transactionLines/{transactionLinesUniqID}/child/itemLots/{itemLotsUniqID}/child/itemSerialsForLot/{itemSerialsForLotUniqID}/child/dffForItemSerialsForLot/{dffForItemSerialsForLotUniqID}` | Get one DFF Attribute of a Serial record associated with a Balance Transaction approval record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryBalanceTransactions/{inventoryBalanceTransactionsUniqID}/child/transactionLines/{transactionLinesUniqID}/child/itemSerials` | Create serial details |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryBalanceTransactions/{inventoryBalanceTransactionsUniqID}/child/transactionLines/{transactionLinesUniqID}/child/itemSerials` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryBalanceTransactions/{inventoryBalanceTransactionsUniqID}/child/transactionLines` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryBalanceTransactions/{inventoryBalanceTransactionsUniqID}/child/transactionLines/{transactionLinesUniqID}` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryBalanceTransactions/{inventoryBalanceTransactionsUniqID}/child/transactionLines/{transactionLinesUniqID}/child/inventoryAttributesDFF` | Create all Inventory Attributes DFF of a Balance Transaction approval record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryBalanceTransactions/{inventoryBalanceTransactionsUniqID}/child/transactionLines` | Create transaction lines |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryBalanceTransactions` | Create transactions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryBalanceTransactions` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryBalanceTransactions/{inventoryBalanceTransactionsUniqID}` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryBalanceTransactions/{inventoryBalanceTransactionsUniqID}/child/transactionLines/{transactionLinesUniqID}/child/inventoryAttributesDFF` | Get all Inventory Attributes DFF of a Balance Transaction approval record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryBalanceTransactions/{inventoryBalanceTransactionsUniqID}/child/transactionLines/{transactionLinesUniqID}/child/itemLots` | Create lots |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryBalanceTransactions/{inventoryBalanceTransactionsUniqID}/child/transactionLines/{transactionLinesUniqID}/child/itemLots` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryBalanceTransactions/{inventoryBalanceTransactionsUniqID}/child/transactionLines/{transactionLinesUniqID}/child/itemLots/{itemLotsUniqID}` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryBalanceTransactions/{inventoryBalanceTransactionsUniqID}/child/transactionLines/{transactionLinesUniqID}/child/dffForTransactionLines/{dffForTransactionLinesUniqID}` | Get one Transaction Line DFF Attribute of a Balance Transaction approval record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryBalanceTransactions/{inventoryBalanceTransactionsUniqID}/child/transactionLines/{transactionLinesUniqID}/child/inventoryAttributesDFF/{TransactionInterfaceId}` | Get one Inventory Attribute DFF of a Balance Transaction approval record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryBalanceTransactions/{inventoryBalanceTransactionsUniqID}/child/transactionLines/{transactionLinesUniqID}/child/dffForTransactionLines` | Create all Transaction Line DFF Attributes of a Balance Transaction approval record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryBalanceTransactions/{inventoryBalanceTransactionsUniqID}/child/transactionLines/{transactionLinesUniqID}/child/dffForTransactionLines` | Get all Transaction Line DFF Attributes of a Balance Transaction approval record |

## i nv en to ry Ba rc od eF or ma ts

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/inventoryBarcodeFormats/{HeaderId}/child/dataIdentifierConfigurations` | Create barcode data identifiers |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/inventoryBarcodeFormats` | Create inventory barcode formats |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryBarcodeFormats/{HeaderId}/child/HeadersDFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryBarcodeFormats/{HeaderId}/child/dataIdentifierConfigurations` | Get all barcode data identifiers |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryBarcodeFormats/{HeaderId}/child/dataIdentifierConfigurations/{LineId}/child/LinesDFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryBarcodeFormats/{HeaderId}/child/dataIdentifierConfigurations/{LineId}/child/LinesDFF` | Create flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryBarcodeFormats/{HeaderId}/child/HeadersDFF` | Create flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryBarcodeFormats/{HeaderId}` | Delete one inventory barcode format |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryBarcodeFormats` | Get all inventory barcode formats |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryBarcodeFormats/{HeaderId}/child/dataIdentifierConfigurations/{LineId}` | Delete one barcode data identifier |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inventoryBarcodeFormats/{HeaderId}/child/dataIdentifierConfigurations/{LineId}/child/LinesDFF/{LineId2}` | Update one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inventoryBarcodeFormats/{HeaderId}/child/HeadersDFF/{HeaderId2}` | Get one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inventoryBarcodeFormats/{HeaderId}/child/HeadersDFF/{HeaderId2}` | Update one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inventoryBarcodeFormats/{HeaderId}` | Update one inventory barcode format |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inventoryBarcodeFormats/{HeaderId}` | Get one inventory barcode format |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inventoryBarcodeFormats/{HeaderId}/child/dataIdentifierConfigurations/{LineId}` | Get one barcode data identifier |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inventoryBarcodeFormats/{HeaderId}/child/dataIdentifierConfigurations/{LineId}/child/LinesDFF/{LineId2}` | Get one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inventoryBarcodeFormats/{HeaderId}/child/dataIdentifierConfigurations/{LineId}` | Update one barcode data identifier |

## i nv en to ry Bu si ne ss Ev en tC on fi gu ra ti on s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/inventoryBusinessEventConfigurations` | Create one configuration |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryBusinessEventConfigurations` | Get all configurations |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryBusinessEventConfigurations/{EventConfigurationId}` | Delete a configuration |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inventoryBusinessEventConfigurations/{EventConfigurationId}` | Update a configuration |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inventoryBusinessEventConfigurations/{EventConfigurationId}` | Get one configuration |

## i nv en to ry Co mp le te dT ra ns ac ti on s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryCompletedTransactions/{TransactionId}/child/lots/{lotsUniqID}/child/lotSerials/{lotSerialsUniqID}` | Get one serial |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryCompletedTransactions/{TransactionId}/child/lots/{lotsUniqID}/child/lotSerials/{lotSerialsUniqID}/child/serialAttributeDFFs` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryCompletedTransactions/{TransactionId}/child/lots/{lotsUniqID}/child/lotSerials/{lotSerialsUniqID}/child/serialAttributeDFFs/{serialAttributeDFFsUniqID}` | Get one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryCompletedTransactions/{TransactionId}/child/lots/{lotsUniqID}/child/lotSerials` | Get all serials |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryCompletedTransactions/{TransactionId}/child/lots/{lotsUniqID}/child/lotAttributeDFFs/{lotAttributeDFFsUniqID}` | Get one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryCompletedTransactions/{TransactionId}/child/lots/{lotsUniqID}/child/lotStandardDFFs` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryCompletedTransactions/{TransactionId}/child/lots/{lotsUniqID}/child/lotStandardDFFs/{lotStandardDFFsUniqID}` | Get one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryCompletedTransactions/{TransactionId}/child/lots/{lotsUniqID}/child/lotSerials/{lotSerialsUniqID}/child/serialStandardDFFs` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryCompletedTransactions/{TransactionId}/child/serials/{serialsUniqID}/child/serialAttributeDFFs/{serialAttributeDFFsUniqID}` | Get one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryCompletedTransactions/{TransactionId}/child/serials/{serialsUniqID}/child/serialStandardDFFs` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryCompletedTransactions/{TransactionId}/child/serials/{serialsUniqID}/child/serialStandardDFFs/{serialStandardDFFsUniqID}` | Get one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryCompletedTransactions/{TransactionId}/child/serials/{serialsUniqID}/child/serialAttributeDFFs` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryCompletedTransactions/{TransactionId}/child/lots/{lotsUniqID}/child/lotSerials/{lotSerialsUniqID}/child/serialStandardDFFs/{serialStandardDFFsUniqID}` | Get one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryCompletedTransactions/{TransactionId}/child/serials` | Get all serials |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryCompletedTransactions/{TransactionId}/child/serials/{serialsUniqID}` | Get one serial |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryCompletedTransactions/{TransactionId}/child/transactionAttachments/{transactionAttachmentsUniqID}` | Get an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryCompletedTransactions/{TransactionId}/child/transactionAttachments/{transactionAttachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryCompletedTransactions/{TransactionId}/child/transactionAttachments/{transactionAttachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryCompletedTransactions` | Get all transactions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryCompletedTransactions/{TransactionId}` | Get one transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryCompletedTransactions/{TransactionId}/child/transactionAttachments` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryCompletedTransactions/{TransactionId}/child/dFFs` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryCompletedTransactions/{TransactionId}/child/lots` | Get all lots |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryCompletedTransactions/{TransactionId}/child/projectCostDFFs/{TransactionId3}` | Get one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryCompletedTransactions/{TransactionId}/child/lots/{lotsUniqID}/child/lotAttributeDFFs` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryCompletedTransactions/{TransactionId}/child/lots/{lotsUniqID}` | Get one lot |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryCompletedTransactions/{TransactionId}/child/dFFs/{TransactionId2}` | Get one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryCompletedTransactions/{TransactionId}/child/projectCostDFFs` | Get all flexfields |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/inventoryCompletedTransactions/{TransactionId}/child/transactionAttachments/{transactionAttachmentsUniqID}/enclosure/FileContents` | Get a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/inventoryCompletedTransactions/{TransactionId}/child/transactionAttachments/{transactionAttachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |

## i nv en to ry Or ga ni za ti on sO pe nL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryOrganizationsOpenLOV/{OrganizationId}` | Get one organization |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryOrganizationsOpenLOV` | Get all organizations |

## i nv en to ry Ou tb ou nd It em Qu an ti ti es Su mm ar ie s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryOutboundItemQuantitiesSummaries/{OnhandSummaryId}/child/serials` | Get all serials |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryOutboundItemQuantitiesSummaries/{OnhandSummaryId}/child/serials/{SerialNumber}` | Get one serial |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryOutboundItemQuantitiesSummaries` | Get all On-Hand quantity details at the summary level |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryOutboundItemQuantitiesSummaries/{OnhandSummaryId}` | Get an On-Hand quantity detail at the summary level |

## i nv en to ry Ow ni ng Pa rt yS it es

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryOwningPartySites/{OwningPartySiteId}` | Get one site |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryOwningPartySites` | Get all sites |

## i nv en to ry Pi ck s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionLots` | Details for the supplies and demands for an item in an organization. |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionLots/{InvValidatedInventoryTransactionLotsUniqID}/child/lotAttributeDFFs` | Create |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionLots/{InvValidatedInventoryTransactionLotsUniqID}/child/lotStandardDFFs` | Create |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedLotsSummary` | Details for the supplies and demands for an item in an organization. |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionSerials` | Details for the supplies and demands for an item in an organization. |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionSerials/{InvValidatedInventoryTransactionSerialsUniqID}/child/serialAttributeDFFs` | Create |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionSerials/{InvValidatedInventoryTransactionSerialsUniqID}/child/serialStandardDFFs` | Create |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/PJCDFF` | Create |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedSerialsSummary` | Details for the supplies and demands for an item in an organization. |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvStrippingDFF` | Create |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionLots/{InvValidatedInventoryTransactionLotsUniqID}/child/LotSerialSummaries` | Details for the supplies and demands for an item in an organization. |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionLots/{InvValidatedInventoryTransactionLotsUniqID}/child/lotSerials` | Details for the supplies and demands for an item in an organization. |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionLots/{InvValidatedInventoryTransactionLotsUniqID}/child/lotSerials/{lotSerialsUniqID}/child/serialAttributeDFFs` | Create |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionLots/{InvValidatedInventoryTransactionLotsUniqID}/child/lotSerials/{lotSerialsUniqID}/child/serialStandardDFFs` | Create |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/DFF` | Create |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks` | Create one pick |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/Attachments` | Create an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionLots/{InvValidatedInventoryTransactionLotsUniqID}/child/lotSerials` | Get all serial numbers |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionLots/{InvValidatedInventoryTransactionLotsUniqID}/child/lotSerials/{lotSerialsUniqID}` | Details for the supplies and demands for an item in an organization. |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionLots/{InvValidatedInventoryTransactionLotsUniqID}/child/lotSerials/{lotSerialsUniqID}` | Get one serial number |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionLots/{InvValidatedInventoryTransactionLotsUniqID}/child/lotSerials/{lotSerialsUniqID}/child/serialAttributeDFFs/{serialAttributeDFFsUniqID}` | Delete |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionLots/{InvValidatedInventoryTransactionLotsUniqID}/child/lotSerials/{lotSerialsUniqID}/child/serialAttributeDFFs` | Get all serial attribute flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/Attachments/{AttachmentsUniqID}` | Delete an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionLots/{InvValidatedInventoryTransactionLotsUniqID}/child/lotAttributeDFFs` | Get all lot attribute flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionLots/{InvValidatedInventoryTransactionLotsUniqID}/child/lotAttributeDFFs/{lotAttributeDFFsUniqID}` | Delete |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionLots/{InvValidatedInventoryTransactionLotsUniqID}` | Get one lot number |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionLots/{InvValidatedInventoryTransactionLotsUniqID}/child/lotStandardDFFs` | Get all lot resource flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionLots/{InvValidatedInventoryTransactionLotsUniqID}/child/lotStandardDFFs/{lotStandardDFFsUniqID}` | Delete |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/Attachments` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionLots/{InvValidatedInventoryTransactionLotsUniqID}/child/lotSerials/{lotSerialsUniqID}/child/serialStandardDFFs/{serialStandardDFFsUniqID}` | Delete |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedSerialsSummary` | Get all serial summaries |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedSerialsSummary/{InvValidatedSerialsSummaryUniqID}` | Details for the supplies and demands for an item in an organization. |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}` | Delete one pick |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvStrippingDFF` | Get all tracking attributes |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvStrippingDFF/{TransactionTempId3}` | Delete |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedSerialsSummary/{InvValidatedSerialsSummaryUniqID}` | Get one serial summary |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/PJCDFF` | Get all project cost details |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionLots/{InvValidatedInventoryTransactionLotsUniqID}/child/LotSerialSummaries` | Get all serial summaries |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionLots/{InvValidatedInventoryTransactionLotsUniqID}/child/LotSerialSummaries/{LotSerialSummariesUniqID}` | Details for the supplies and demands for an item in an organization. |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionLots/{InvValidatedInventoryTransactionLotsUniqID}/child/lotSerials/{lotSerialsUniqID}/child/serialStandardDFFs` | Get all serial resource flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/PJCDFF/{TransactionTempId4}` | Delete |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks` | Get all picks |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionLots/{InvValidatedInventoryTransactionLotsUniqID}/child/LotSerialSummaries/{LotSerialSummariesUniqID}` | Get one serial summary |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionSerials/{InvValidatedInventoryTransactionSerialsUniqID}/child/serialAttributeDFFs/{serialAttributeDFFsUniqID}` | Delete |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionSerials/{InvValidatedInventoryTransactionSerialsUniqID}` | Details for the supplies and demands for an item in an organization. |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionSerials/{InvValidatedInventoryTransactionSerialsUniqID}/child/serialAttributeDFFs` | Get all serial attribute flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedLotsSummary/{InvValidatedLotsSummaryUniqID}` | Details for the supplies and demands for an item in an organization. |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/Attachments/{AttachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionSerials/{InvValidatedInventoryTransactionSerialsUniqID}/child/serialStandardDFFs` | Get all serial resource flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionSerials/{InvValidatedInventoryTransactionSerialsUniqID}/child/serialStandardDFFs/{serialStandardDFFsUniqID}` | Delete |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionSerials/{InvValidatedInventoryTransactionSerialsUniqID}` | Get one serial number |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionSerials` | Get all serial numbers |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/Attachments/{AttachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/DFF/{TransactionTempId2}` | Delete |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/DFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionLots` | Get all lot numbers |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionLots/{InvValidatedInventoryTransactionLotsUniqID}` | Details for the supplies and demands for an item in an organization. |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedLotsSummary` | Get all lot summaries |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedLotsSummary/{InvValidatedLotsSummaryUniqID}` | Get one lot summary |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionLots/{InvValidatedInventoryTransactionLotsUniqID}/child/LotSerialSummaries/{LotSerialSummariesUniqID}` | Details for the supplies and demands for an item in an organization. |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}` | Get one pick |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionSerials/{InvValidatedInventoryTransactionSerialsUniqID}/child/serialAttributeDFFs/{serialAttributeDFFsUniqID}` | Get one serial attribute flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/DFF/{TransactionTempId2}` | Update |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/DFF/{TransactionTempId2}` | Get one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvStrippingDFF/{TransactionTempId3}` | Get one set of tracking attributes |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionSerials/{InvValidatedInventoryTransactionSerialsUniqID}` | Details for the supplies and demands for an item in an organization. |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/PJCDFF/{TransactionTempId4}` | Get one project costing detail |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/PJCDFF/{TransactionTempId4}` | Update |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedSerialsSummary/{InvValidatedSerialsSummaryUniqID}` | Details for the supplies and demands for an item in an organization. |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionLots/{InvValidatedInventoryTransactionLotsUniqID}/child/lotStandardDFFs/{lotStandardDFFsUniqID}` | Update |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionLots/{InvValidatedInventoryTransactionLotsUniqID}/child/lotStandardDFFs/{lotStandardDFFsUniqID}` | Get one lot resource flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedLotsSummary/{InvValidatedLotsSummaryUniqID}` | Details for the supplies and demands for an item in an organization. |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionLots/{InvValidatedInventoryTransactionLotsUniqID}/child/lotSerials/{lotSerialsUniqID}` | Details for the supplies and demands for an item in an organization. |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/Attachments/{AttachmentsUniqID}` | Update an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionLots/{InvValidatedInventoryTransactionLotsUniqID}` | Details for the supplies and demands for an item in an organization. |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/Attachments/{AttachmentsUniqID}` | Get an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionLots/{InvValidatedInventoryTransactionLotsUniqID}/child/lotAttributeDFFs/{lotAttributeDFFsUniqID}` | Update |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionLots/{InvValidatedInventoryTransactionLotsUniqID}/child/lotAttributeDFFs/{lotAttributeDFFsUniqID}` | Get one lot attribute flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionSerials/{InvValidatedInventoryTransactionSerialsUniqID}/child/serialStandardDFFs/{serialStandardDFFsUniqID}` | Update |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionSerials/{InvValidatedInventoryTransactionSerialsUniqID}/child/serialAttributeDFFs/{serialAttributeDFFsUniqID}` | Update |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvStrippingDFF/{TransactionTempId3}` | Update |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionLots/{InvValidatedInventoryTransactionLotsUniqID}/child/lotSerials/{lotSerialsUniqID}/child/serialStandardDFFs/{serialStandardDFFsUniqID}` | Update |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionLots/{InvValidatedInventoryTransactionLotsUniqID}/child/lotSerials/{lotSerialsUniqID}/child/serialStandardDFFs/{serialStandardDFFsUniqID}` | Get one serial resource flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}` | Update one pick |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionSerials/{InvValidatedInventoryTransactionSerialsUniqID}/child/serialStandardDFFs/{serialStandardDFFsUniqID}` | Get one serial resource flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionLots/{InvValidatedInventoryTransactionLotsUniqID}/child/lotSerials/{lotSerialsUniqID}/child/serialAttributeDFFs/{serialAttributeDFFsUniqID}` | Update |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/InvValidatedInventoryTransactionLots/{InvValidatedInventoryTransactionLotsUniqID}/child/lotSerials/{lotSerialsUniqID}/child/serialAttributeDFFs/{serialAttributeDFFsUniqID}` | Get one serial attribute flexfield |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/Attachments/{AttachmentsUniqID}/enclosure/FileContents` | Get a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/inventoryPicks/{TransactionTempId}/child/Attachments/{AttachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |

## i nv en to ry Re pl en is hP ar am et er s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryReplenishParameters` | Get all replenish parameters. |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryReplenishParameters` | Create one inventory replenish parameter. |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inventoryReplenishParameters/action/replenishParamsMassAction` | Publish Replenish Parameters. |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inventoryReplenishParameters/{ReplParamId}` | Update one inventory replenish parameter. |
| `POST` | `/fscmRestApi/resources/11.13.18.05/inventoryReplenishParameters/{ReplParamId}` | Get one replenish parameter. |

## i nv en to ry Re pl en is hP ar am et er sA ct io ns

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/inventoryReplenishParametersActions/{ReplActionId}/child/Attachments` | Create an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryReplenishParametersActions/{ReplActionId}/child/Attachments/{AttachmentsUniqID}` | Delete an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryReplenishParametersActions/{ReplActionId}/child/Attachments/{AttachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryReplenishParametersActions/{ReplActionId}/child/Attachments/{AttachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryReplenishParametersActions/{ReplActionId}/child/Attachments` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryReplenishParametersActions` | Get all inventory replenish parameters actions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/inventoryReplenishParametersActions` | Create one inventory replenish parameters action. |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inventoryReplenishParametersActions/{ReplActionId}` | Update one inventory replenish parameters action. |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inventoryReplenishParametersActions/{ReplActionId}/child/Attachments/{AttachmentsUniqID}` | Update an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inventoryReplenishParametersActions/{ReplActionId}` | Get one inventory replenish parameters action |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/inventoryReplenishParametersActions/{ReplActionId}/child/Attachments/{AttachmentsUniqID}` | Get an attachment |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/inventoryReplenishParametersActions/{ReplActionId}/child/Attachments/{AttachmentsUniqID}/enclosure/FileContents` | Get a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/inventoryReplenishParametersActions/{ReplActionId}/child/Attachments/{AttachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |

## i te mO pe ra ti on al At tr ib ut eC on tr ol Le ve ls

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/itemOperationalAttributeControlLevels` | Get operational attribute control details of all items |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/itemOperationalAttributeControlLevels/{itemOperationalAttributeControlLevelsUniqID}` | Update operational attribute controls of one item |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/itemOperationalAttributeControlLevels/{itemOperationalAttributeControlLevelsUniqID}` | Get operational attribute control details of one item |

## i te mS ho rt ag eD et ai ls By Ka nb an Lo ca ti on s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/itemShortageDetailsByKanbanLocations/{itemShortageDetailsByKanbanLocationsUniqID}` | Get one item shortage detail |
| `GET` | `/fscmRestApi/resources/11.13.18.05/itemShortageDetailsByKanbanLocations` | Get all item shortage details |

## i te mS ou rc eO rg an iz at io ns LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/itemSourceOrganizationsLOV/{OrganizationId}` | Get one item source inventory organization. |
| `GET` | `/fscmRestApi/resources/11.13.18.05/itemSourceOrganizationsLOV` | Get all item source inventory organizations. |

## i te mS ta tu se s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/itemStatuses` | Create one item status |
| `GET` | `/fscmRestApi/resources/11.13.18.05/itemStatuses/{InventoryItemStatusId}/child/StatusAttributeValue` | Get all item status attribute values |
| `GET` | `/fscmRestApi/resources/11.13.18.05/itemStatuses/{InventoryItemStatusId}/child/StatusAttributeValue/{StatusAttributeValueUniqID}` | Delete item status attribute values |
| `GET` | `/fscmRestApi/resources/11.13.18.05/itemStatuses/{InventoryItemStatusId}` | Delete one item status |
| `GET` | `/fscmRestApi/resources/11.13.18.05/itemStatuses` | Get all item statuses |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/itemStatuses/{InventoryItemStatusId}/child/StatusAttributeValue/{StatusAttributeValueUniqID}` | Update one item status attribute value |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/itemStatuses/{InventoryItemStatusId}/child/StatusAttributeValue` | Update item status attribute values |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/itemStatuses/{InventoryItemStatusId}` | Get one item status |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/itemStatuses/{InventoryItemStatusId}` | Update one item status |
| `POST` | `/fscmRestApi/resources/11.13.18.05/itemStatuses/{InventoryItemStatusId}/child/StatusAttributeValue/{StatusAttributeValueUniqID}` | Get one item status attribute value |

## i te mU ni tO fM ea su re Co nv er si on s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/itemUnitOfMeasureConversions/{itemUnitOfMeasureConversionsUniqID}` | Get one conversion |
| `GET` | `/fscmRestApi/resources/11.13.18.05/itemUnitOfMeasureConversions` | Get all conversions |

## j mf Le ga lR ep or ti ng Un it s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/jmfLegalReportingUnits` | Get multiple records for Intrastat legal reporting unit |
| `GET` | `/fscmRestApi/resources/11.13.18.05/jmfLegalReportingUnits/{EstablishmentId}` | Get a single record for Intrastat legal reporting unit |

## k an ba nC ar dR ep le ni sh me nt s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/kanbanCardReplenishments` | GET action not supported |
| `POST` | `/fscmRestApi/resources/11.13.18.05/kanbanCardReplenishments/action/replenishKanbanCards` | Replenish Kanban cards |
| `POST` | `/fscmRestApi/resources/11.13.18.05/kanbanCardReplenishments/{kanbanCardReplenishmentsUniqID}` | GET action not supported |

## l ot Un it Of Me as ur eC on ve rs io ns

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/lotUnitOfMeasureConversions` | Get all lot specific conversions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/lotUnitOfMeasureConversions` | Create one lot specific conversion |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/lotUnitOfMeasureConversions/{LotConversionId}` | Update one lot-specific conversion |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/lotUnitOfMeasureConversions/{LotConversionId}` | Get one lot specific conversion |

## m ai nt en an ce Fo re ca st s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/maintenanceForecasts` | Get all forecast due dates |
| `GET` | `/fscmRestApi/resources/11.13.18.05/maintenanceForecasts/{ForecastId}/child/forecastLines/{ForecastLineId}` | Get all forecast line due dates |
| `GET` | `/fscmRestApi/resources/11.13.18.05/maintenanceForecasts/{ForecastId}/child/forecastLines` | Get one forecast line due date |
| `GET` | `/fscmRestApi/resources/11.13.18.05/maintenanceForecasts/action/generateWorkRequirementForecasts` | Generate forecasts for assets in a work requirement. |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/maintenanceForecasts/{ForecastId}` | Update one forecast due date |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/maintenanceForecasts/{ForecastId}` | Get one forecast due date |
| `POST` | `/fscmRestApi/resources/11.13.18.05/maintenanceForecasts/action/manageForecastWorkOrders` | Create or cancel a work order for a forecast |

## m ai nt en an ce Wo rk Or de rT ra ns ac ti on Hi st or y

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/maintenanceWorkOrderTransactionHistory/{TransactionId}` | Get one maintenance work order transaction record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/maintenanceWorkOrderTransactionHistory` | Get all maintenance work order transaction records |

## m at er ia lS ta tu se s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/materialStatuses/{MaterialStatusId}/child/transactionControls` | Get all transaction types |
| `GET` | `/fscmRestApi/resources/11.13.18.05/materialStatuses/{MaterialStatusId}/child/transactionControls/{transactionControlsUniqID}` | Get one transaction type |
| `GET` | `/fscmRestApi/resources/11.13.18.05/materialStatuses` | Get all statuses |
| `GET` | `/fscmRestApi/resources/11.13.18.05/materialStatuses/{MaterialStatusId}` | Get one status |

## m at er ia lS ta tu sU pd at es

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/materialStatusUpdates/{materialStatusUpdatesUniqID}` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/materialStatusUpdates` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/materialStatusUpdates` | Create updates |

## m at er ia lT ra ns ac ti on s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/materialTransactions/{materialTransactionsUniqID}/child/MaterialTransactionDetail/{MaterialTransactionDetailUniqID}/child/TransactionLot` | Get action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/materialTransactions/{materialTransactionsUniqID}/child/MaterialTransactionDetail/{MaterialTransactionDetailUniqID}/child/TransactionLot` | Create lots |
| `GET` | `/fscmRestApi/resources/11.13.18.05/materialTransactions/{materialTransactionsUniqID}/child/MaterialTransactionDetail/{MaterialTransactionDetailUniqID}/child/TransactionLot/{TransactionLotUniqID}/child/TransactionLotDFF` | Create flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/materialTransactions/{materialTransactionsUniqID}/child/MaterialTransactionDetail/{MaterialTransactionDetailUniqID}/child/TransactionLot/{TransactionLotUniqID}` | Get action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/materialTransactions/{materialTransactionsUniqID}/child/MaterialTransactionDetail/{MaterialTransactionDetailUniqID}/child/OrderlessTransactionDFF` | Create flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/materialTransactions/{materialTransactionsUniqID}/child/MaterialTransactionDetail/{MaterialTransactionDetailUniqID}/child/TransactionItemDFF/{InterfaceRowId}` | Get action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/materialTransactions/{materialTransactionsUniqID}/child/MaterialTransactionDetail/{MaterialTransactionDetailUniqID}/child/OrderlessTransactionDFF/{InterfaceRowId}` | Get action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/materialTransactions/{materialTransactionsUniqID}/child/MaterialTransactionDetail/{MaterialTransactionDetailUniqID}/child/OrderlessTransactionDFF` | Get action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/materialTransactions/{materialTransactionsUniqID}/child/MaterialTransactionDetail/{MaterialTransactionDetailUniqID}/child/TransactionSerial/{TransactionSerialUniqID}/child/TransactionSerialDFF` | Create flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/materialTransactions/{materialTransactionsUniqID}/child/MaterialTransactionDetail/{MaterialTransactionDetailUniqID}/child/TransactionSerial/{TransactionSerialUniqID}` | Get action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/materialTransactions/{materialTransactionsUniqID}/child/MaterialTransactionDetail/{MaterialTransactionDetailUniqID}/child/TransactionSerial/{TransactionSerialUniqID}/child/TransactionSerialDFF/{InterfaceRowId}` | Get action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/materialTransactions/{materialTransactionsUniqID}/child/MaterialTransactionDetail/{MaterialTransactionDetailUniqID}/child/TransactionSerial/{TransactionSerialUniqID}/child/TransactionSerialDFF` | Get action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/materialTransactions/{materialTransactionsUniqID}/child/MaterialTransactionDetail/{MaterialTransactionDetailUniqID}/child/TransactionLot/{TransactionLotUniqID}/child/TransactionLotDFF/{InterfaceRowId}` | Get action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/materialTransactions/{materialTransactionsUniqID}/child/MaterialTransactionDetail/{MaterialTransactionDetailUniqID}/child/TransactionLot/{TransactionLotUniqID}/child/TransactionLotDFF` | Get action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/materialTransactions/{materialTransactionsUniqID}/child/MaterialTransactionDetail/{MaterialTransactionDetailUniqID}/child/TransactionSerial` | Get action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/materialTransactions/{materialTransactionsUniqID}/child/MaterialTransactionDetail/{MaterialTransactionDetailUniqID}/child/TransactionSerial` | Create serials |
| `GET` | `/fscmRestApi/resources/11.13.18.05/materialTransactions/{materialTransactionsUniqID}/child/MaterialTransactionDetail/{MaterialTransactionDetailUniqID}/child/TransactionItemDFF` | Get action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/materialTransactions/{materialTransactionsUniqID}/child/MaterialTransactionDetail/{MaterialTransactionDetailUniqID}` | Get action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/materialTransactions/{materialTransactionsUniqID}/child/MaterialTransactionDetail` | Get action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/materialTransactions/{materialTransactionsUniqID}/child/MaterialTransactionDetail/{MaterialTransactionDetailUniqID}/child/ComponentTransactionDetail` | Get action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/materialTransactions/{materialTransactionsUniqID}/child/MaterialTransactionDetail/{MaterialTransactionDetailUniqID}/child/ComponentTransactionDetail` | Create details |
| `GET` | `/fscmRestApi/resources/11.13.18.05/materialTransactions` | Get action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/materialTransactions` | Create transactions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/materialTransactions/{materialTransactionsUniqID}/child/MaterialTransactionDetail` | Create details |
| `GET` | `/fscmRestApi/resources/11.13.18.05/materialTransactions/{materialTransactionsUniqID}` | Get action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/materialTransactions/{materialTransactionsUniqID}/child/MaterialTransactionDetail/{MaterialTransactionDetailUniqID}/child/ComponentTransactionDetail/{ComponentTransactionDetailUniqID}/child/ComponentTransactionSerial` | Get action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/materialTransactions/{materialTransactionsUniqID}/child/MaterialTransactionDetail/{MaterialTransactionDetailUniqID}/child/ComponentTransactionDetail/{ComponentTransactionDetailUniqID}/child/ComponentTransactionSerial` | Create details |
| `GET` | `/fscmRestApi/resources/11.13.18.05/materialTransactions/{materialTransactionsUniqID}/child/MaterialTransactionDetail/{MaterialTransactionDetailUniqID}/child/TransactionItemDFF` | Create item flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/materialTransactions/{materialTransactionsUniqID}/child/MaterialTransactionDetail/{MaterialTransactionDetailUniqID}/child/ComponentTransactionDetail/{ComponentTransactionDetailUniqID}/child/ComponentTransactionSerial/{ComponentTransactionSerialUniqID}` | Get action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/materialTransactions/{materialTransactionsUniqID}/child/MaterialTransactionDetail/{MaterialTransactionDetailUniqID}/child/ComponentTransactionDetail/{ComponentTransactionDetailUniqID}/child/ComponentTransactionLot` | Create details |
| `GET` | `/fscmRestApi/resources/11.13.18.05/materialTransactions/{materialTransactionsUniqID}/child/MaterialTransactionDetail/{MaterialTransactionDetailUniqID}/child/ComponentTransactionDetail/{ComponentTransactionDetailUniqID}` | Get action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/materialTransactions/{materialTransactionsUniqID}/child/MaterialTransactionDetail/{MaterialTransactionDetailUniqID}/child/ComponentTransactionDetail/{ComponentTransactionDetailUniqID}/child/ComponentTransactionLot/{ComponentTransactionLotUniqID}` | Get action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/materialTransactions/{materialTransactionsUniqID}/child/MaterialTransactionDetail/{MaterialTransactionDetailUniqID}/child/ComponentTransactionDetail/{ComponentTransactionDetailUniqID}/child/ComponentTransactionLot` | Get action not supported |

## m ea su re Co py Se ts

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/measureCopySets/{MeasureCopysetId}` | Get one measure copy set |
| `GET` | `/fscmRestApi/resources/11.13.18.05/measureCopySets` | Get all measure copy sets |

## m et er Re ad in gs

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/meterReadings` | Get all meter readings |
| `GET` | `/fscmRestApi/resources/11.13.18.05/meterReadings` | Create one meter reading |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/meterReadings/{MeterReadingId}` | Update one meter reading |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/meterReadings/{MeterReadingId}` | Get one meter reading |

## n pi Cu st om er Tr ee s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/npiCustomerTrees/{npiCustomerTreesUniqID}` | Get one customer and their sites to the specified source product in a plan |
| `GET` | `/fscmRestApi/resources/11.13.18.05/npiCustomerTrees` | Get all customers and their associated customer sites linked to the specified product in a plan |

## n pi Pr od uc tO rg an iz at io ns

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/npiProductOrganizations/{npiProductOrganizationsUniqID}` | Get one organization |
| `GET` | `/fscmRestApi/resources/11.13.18.05/npiProductOrganizations` | Get all organizations |

## o nH an dL ot UO MC on vR ec or ds

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/onHandLotUOMConvRecords` | Get all conversion records |
| `POST` | `/fscmRestApi/resources/11.13.18.05/onHandLotUOMConvRecords/action/suggestLotUnitOfMeasureConversionRate` | Suggest the lot UOM conversion rate |
| `POST` | `/fscmRestApi/resources/11.13.18.05/onHandLotUOMConvRecords/action/lotQuantityAdjustment` | Submit lot on-hand UOM conversions |
| `POST` | `/fscmRestApi/resources/11.13.18.05/onHandLotUOMConvRecords/{onHandLotUOMConvRecordsUniqID}` | Get one conversion record |

## o rd er Pr om is es

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/orderPromises/{UniqueOrderId}/child/FulFillmentLine` | Get all fulfillment lines |
| `GET` | `/fscmRestApi/resources/11.13.18.05/orderPromises/{UniqueOrderId}/child/AlternateOptions/{AlternateOptionsUniqID}/child/PeggingDetails` | Get all pegging details |
| `GET` | `/fscmRestApi/resources/11.13.18.05/orderPromises/{UniqueOrderId}/child/FulFillmentLine/{SplitLineId}/child/PeggingDetails` | Get all pegging details |
| `GET` | `/fscmRestApi/resources/11.13.18.05/orderPromises/{UniqueOrderId}/child/AlternateOptions` | Get all availability options |
| `GET` | `/fscmRestApi/resources/11.13.18.05/orderPromises` | Get all order promises |
| `GET` | `/fscmRestApi/resources/11.13.18.05/orderPromises` | Create one order promises |
| `GET` | `/fscmRestApi/resources/11.13.18.05/orderPromises/{UniqueOrderId}` | Get one order promise |
| `POST` | `/fscmRestApi/resources/11.13.18.05/orderPromises/{UniqueOrderId}/child/FulFillmentLine/{SplitLineId}/child/PeggingDetails` | POST action not supported |
| `POST` | `/fscmRestApi/resources/11.13.18.05/orderPromises/{UniqueOrderId}/child/FulFillmentLine` | POST action not supported |
| `POST` | `/fscmRestApi/resources/11.13.18.05/orderPromises/{UniqueOrderId}/child/FulFillmentLine/{SplitLineId}/child/PeggingDetails/{PeggingDetailsUniqID}` | Get one pegging detail |
| `POST` | `/fscmRestApi/resources/11.13.18.05/orderPromises/{UniqueOrderId}/child/FulFillmentLine/{SplitLineId}` | Get one fulfillment line |
| `POST` | `/fscmRestApi/resources/11.13.18.05/orderPromises/{UniqueOrderId}/child/AlternateOptions` | POST action not supported |
| `POST` | `/fscmRestApi/resources/11.13.18.05/orderPromises/{UniqueOrderId}/child/AlternateOptions/{AlternateOptionsUniqID}` | Get one availability option |
| `POST` | `/fscmRestApi/resources/11.13.18.05/orderPromises/{UniqueOrderId}/child/AlternateOptions/{AlternateOptionsUniqID}/child/PeggingDetails` | POST action not supported |
| `POST` | `/fscmRestApi/resources/11.13.18.05/orderPromises/{UniqueOrderId}/child/AlternateOptions/{AlternateOptionsUniqID}/child/PeggingDetails/{PeggingDetailsUniqID}` | Get one pegging detail |

## o th er

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/crmRestApi/resources/11.13.18.05/noteTypes` | Get all note types |
| `POST` | `/fscmRestApi/scm/redwood/11.13.18.05/b2bMessages` | Create B2B messages |
| `POST` | `https://host/api/scm-core/operational-data/v1/events` | Create operational events |

## p ac ka gi ng St ri ng s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/packagingStrings` | Create packaging strings |
| `GET` | `/fscmRestApi/resources/11.13.18.05/packagingStrings/{PackagingStringId}` | Get one packaging string |
| `GET` | `/fscmRestApi/resources/11.13.18.05/packagingStrings` | Get all packaging strings |
| `GET` | `/fscmRestApi/resources/11.13.18.05/packagingStrings/{PackagingStringId}` | Delete one packaging string |

## p ac ki ng Un it s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/nestedPackingUnits/{PackingUnitId2}/child/attachments` | Create an attachment |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/packingUnitSerials` | Create serial numbers |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/nestedPackingUnits/{PackingUnitId2}/child/notes` | Create a note |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/packingUnitQuantities` | Create quantities for packing units |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/attachments` | Create an attachment |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/notes` | Create a note |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/packingUnitItems` | Create items |
| `GET` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/nestedPackingUnits/{PackingUnitId2}/child/packingUnitDFFs` | Get one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/nestedPackingUnits/{PackingUnitId2}/child/packingUnitDFFs` | Create one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/nestedPackingUnits/{PackingUnitId2}/child/nestedPackingUnits` | Get all packing units |
| `GET` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/nestedPackingUnits/{PackingUnitId2}/child/contents/{PackingUnitContentId}` | Get one LPN content |
| `GET` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/nestedPackingUnits/{PackingUnitId2}/child/nestedPackingUnits/{PackingUnitId3}` | Get one packing unit |
| `GET` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/nestedPackingUnits/{PackingUnitId2}/child/contents/{PackingUnitContentId2}/child/serials/{serialsUniqID}` | Get one LPN serial number |
| `GET` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/nestedPackingUnits/{PackingUnitId2}/child/contents` | Get all LPN contents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/nestedPackingUnits/{PackingUnitId2}/child/contents/{PackingUnitContentId}/child/contentInventoryAttributes` | Get all inventory tracking attributes |
| `GET` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/nestedPackingUnits/{PackingUnitId2}/child/contents/{PackingUnitContentId2}/child/contentInventoryAttributes/{contentInventoryAttributesUniqID}` | Get one inventory tracking attribute |
| `GET` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/nestedPackingUnits/{PackingUnitId2}/child/contents/{PackingUnitContentId}/child/serials` | Get all LPN serial numbers |
| `GET` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/nestedPackingUnits/{PackingUnitId2}/child/attachments/{attachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/nestedPackingUnits/{PackingUnitId2}/child/notes/{NoteId}` | Delete a note |
| `GET` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/packingUnitSerials/{packingUnitSerialsUniqID}` | Delete one serial number |
| `GET` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/packingUnitQuantities` | Get quantities for all LPNs |
| `GET` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/packingUnitQuantities/{packingUnitQuantitiesUniqID}` | Delete quantities for one packing unit |
| `GET` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/notes/{NoteId}` | Get a note object |
| `GET` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/notes/{NoteId}` | Delete a note |
| `GET` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/packingUnitSerials` | Get all LPN serial numbers |
| `GET` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/packingUnitItems/{packingUnitItemsUniqID}/child/packingUnitItemLots/{packingUnitItemLotsUniqID}` | Get one lot |
| `GET` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/notes/{NoteId}/enclosure/NoteTxt` | Delete a NoteTxt |
| `GET` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/nestedPackingUnits/{PackingUnitId2}/child/notes/{NoteId}/enclosure/NoteTxt` | Delete a NoteTxt |
| `GET` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/nestedPackingUnits/{PackingUnitId2}/child/notes/{NoteId}` | Get a note object |
| `GET` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/packingUnitItems/{packingUnitItemsUniqID}/child/packingUnitItemLots` | Get all lots |
| `GET` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/packingUnitItems` | Get all items |
| `GET` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/packingUnitItems/{packingUnitItemsUniqID}` | Delete one item |
| `GET` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/nestedPackingUnits/{PackingUnitId2}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/contents/{PackingUnitContentId}/child/contentInventoryAttributes` | Get all inventory tracking attributes |
| `GET` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/contents/{PackingUnitContentId}` | Get one LPN content |
| `GET` | `/fscmRestApi/resources/11.13.18.05/packingUnits` | Create one packing unit |
| `GET` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/contents/{PackingUnitContentId}/child/serials/{serialsUniqID}` | Get one LPN serial number |
| `GET` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/contents/{PackingUnitContentId}/child/serials` | Get all LPN serial numbers |
| `GET` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/contents/{PackingUnitContentId}/child/contentInventoryAttributes/{contentInventoryAttributesUniqID}` | Get one inventory tracking attribute |
| `GET` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/itemContentCounts/{itemContentCountsUniqID}` | Get item count for one LPN |
| `GET` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/attachments` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/attachments/{attachmentsUniqID}` | Delete an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/itemContentCounts` | Get item count for all LPNs |
| `GET` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/attachments/{attachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/packingUnits` | Get all packing units |
| `GET` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/packingUnitDFFs` | Create one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/nestedPackingUnits/{PackingUnitId2}/child/attachments/{attachmentsUniqID}` | Delete an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/nestedPackingUnits/{PackingUnitId2}` | Get one packing unit |
| `GET` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/contents` | Get all LPN contents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/nestedPackingUnits` | Get all packing units |
| `GET` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/nestedPackingUnits/{PackingUnitId2}/child/attachments` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/packingUnitDFFs` | Get one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/nestedPackingUnits/{PackingUnitId2}/child/attachments/{attachmentsUniqID}` | Get an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/nestedPackingUnits/{PackingUnitId2}/child/attachments/{attachmentsUniqID}` | Update an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/attachments/{attachmentsUniqID}` | Update an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/packingUnitQuantities/{packingUnitQuantitiesUniqID}` | Get quantities for one LPN |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/packingUnitSerials/{packingUnitSerialsUniqID}` | Update one serial number |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}` | Update one packing unit |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}` | Get one packing unit |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/packingUnitQuantities/{packingUnitQuantitiesUniqID}` | Update quantities for one packing unit |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/attachments/{attachmentsUniqID}` | Get an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/packingUnitSerials/{packingUnitSerialsUniqID}` | Get one LPN serial number |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/nestedPackingUnits/{PackingUnitId2}/child/notes` | Get all note objects |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/nestedPackingUnits/{PackingUnitId2}/child/notes/{NoteId}` | Update a note |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/packingUnitDFFs/{LPNId}` | Get one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/nestedPackingUnits/{PackingUnitId2}/child/packingUnitDFFs/{LPNId}` | Update one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/nestedPackingUnits/{PackingUnitId2}/child/packingUnitDFFs/{LPNId}` | Get one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/packingUnitDFFs/{LPNId}` | Update one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/packingUnitItems/{packingUnitItemsUniqID}` | Get one item |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/packingUnitItems/{packingUnitItemsUniqID}` | Update one item |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/notes` | Get all note objects |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/notes/{NoteId}` | Update a note |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/notes/{NoteId}/enclosure/NoteTxt` | Replace a NoteTxt |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/notes/{NoteId}/enclosure/NoteTxt` | Get a NoteTxt |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/nestedPackingUnits/{PackingUnitId2}/child/notes/{NoteId}/enclosure/NoteTxt` | Replace a NoteTxt |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/nestedPackingUnits/{PackingUnitId2}/child/notes/{NoteId}/enclosure/NoteTxt` | Get a NoteTxt |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/nestedPackingUnits/{PackingUnitId2}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Get a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/packingUnits/{PackingUnitId}/child/nestedPackingUnits/{PackingUnitId2}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Get a FileContents |

## p er io di cA ve ra ge Pe ri od sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/periodicAveragePeriodsLOV` | Get all periods |
| `GET` | `/fscmRestApi/resources/11.13.18.05/periodicAveragePeriodsLOV/{periodicAveragePeriodsLOVUniqID}` | Get a period |

## p la nE xe cu ti on St at us

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/planExecutionStatus/{ExecutionId}` | Get one plan action execution status |
| `GET` | `/fscmRestApi/resources/11.13.18.05/planExecutionStatus` | Get all plan action execution statuses |

## p la nF or ec as tP ro fi le s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/planForecastProfiles/{PlanId}` | Get one forecast profile associated with the plan |
| `GET` | `/fscmRestApi/resources/11.13.18.05/planForecastProfiles` | Get all forecast profiles associated with the plan |

## p la nn in gC yc le s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/planningCycles/{PlanningCycleId}/child/planningCyclePlans` | Create planning cycle plans |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/planningCycles/{PlanningCycleId}/child/planningCycleStages` | Create planning cycle stages |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/planningCycles/{PlanningCycleId}/child/planningCycleStages/{PlanningCycleStageId}/child/planningCycleActivities/{PlanningCycleActivityId}/child/planningCycleTasks` | Create tasks |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/planningCycles/{PlanningCycleId}/child/planningCycleStages/{PlanningCycleStageId}/child/planningCycleParticipants` | Create participants |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/planningCycles` | Create planning cycles |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/planningCycles/{PlanningCycleId}/child/planningCycleStages/{PlanningCycleStageId}/child/planningCycleActionDecisionItems` | Create action and decision items |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/planningCycles/{PlanningCycleId}/child/planningCycleStages/{PlanningCycleStageId}/child/planningCycleActivities` | Create activities |
| `GET` | `/fscmRestApi/resources/11.13.18.05/planningCycles/{PlanningCycleId}/child/planningCycleStages/{PlanningCycleStageId}/child/planningCycleActivities/{PlanningCycleActivityId}` | Delete one activity |
| `GET` | `/fscmRestApi/resources/11.13.18.05/planningCycles/{PlanningCycleId}/child/planningCycleWorkLists/{planningCycleWorkListsUniqID}` | Get one worklist task |
| `GET` | `/fscmRestApi/resources/11.13.18.05/planningCycles/{PlanningCycleId}/child/planningCycleStages/{PlanningCycleStageId}/child/planningCycleActivities` | Get all activities |
| `GET` | `/fscmRestApi/resources/11.13.18.05/planningCycles/{PlanningCycleId}/child/planningCycleStages/{PlanningCycleStageId}/child/planningCycleParticipants` | Get all participants |
| `GET` | `/fscmRestApi/resources/11.13.18.05/planningCycles/{PlanningCycleId}/child/planningCycleStages/{PlanningCycleStageId}/child/planningCycleParticipants/{planningCycleParticipantsUniqID}` | Get one participant |
| `GET` | `/fscmRestApi/resources/11.13.18.05/planningCycles/{PlanningCycleId}/child/planningCycleWorkLists` | Get all worklist tasks |
| `GET` | `/fscmRestApi/resources/11.13.18.05/planningCycles/{PlanningCycleId}/child/planningCycleStages/{PlanningCycleStageId}/child/planningCycleActivities/{PlanningCycleActivityId}/child/planningCycleTasks/{PlanningCycleTaskId}` | Delete one task |
| `GET` | `/fscmRestApi/resources/11.13.18.05/planningCycles/{PlanningCycleId}/child/planningCycleStages/{PlanningCycleStageId}/child/planningCycleActivities/{PlanningCycleActivityId}/child/planningCycleTasks` | Get all tasks |
| `GET` | `/fscmRestApi/resources/11.13.18.05/planningCycles/{PlanningCycleId}/child/planningCycleStages/{PlanningCycleStageId}/child/planningCycleParticipants/{planningCycleParticipantsUniqID}` | Delete one participant |
| `GET` | `/fscmRestApi/resources/11.13.18.05/planningCycles/{PlanningCycleId}/child/planningCycleStages/{PlanningCycleStageId}/child/planningCycleActionDecisionItems` | Get all action and decision items |
| `GET` | `/fscmRestApi/resources/11.13.18.05/planningCycles/{PlanningCycleId}/child/planningCyclePlans` | Get all planning cycle plans |
| `GET` | `/fscmRestApi/resources/11.13.18.05/planningCycles/{PlanningCycleId}/child/planningCyclePlans/{planningCyclePlansUniqID}` | Get one planning cycle plan |
| `GET` | `/fscmRestApi/resources/11.13.18.05/planningCycles/{PlanningCycleId}/child/planningCycleStages/{PlanningCycleStageId}` | Delete one planning cycle stage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/planningCycles/{PlanningCycleId}` | Delete one planning cycle |
| `GET` | `/fscmRestApi/resources/11.13.18.05/planningCycles` | Get all planning cycles |
| `GET` | `/fscmRestApi/resources/11.13.18.05/planningCycles/{PlanningCycleId}/child/planningCyclePlans/{planningCyclePlansUniqID}` | Delete one planning cycle plan |
| `GET` | `/fscmRestApi/resources/11.13.18.05/planningCycles/{PlanningCycleId}/child/planningCycleStages/{PlanningCycleStageId}/child/planningCycleActionDecisionItems/{PlanningCycleTaskId}` | Delete one action and decision item |
| `GET` | `/fscmRestApi/resources/11.13.18.05/planningCycles/{PlanningCycleId}/child/planningCycleStages` | Get all planning cycle stages |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/planningCycles/{PlanningCycleId}` | Get one planning cycle |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/planningCycles/{PlanningCycleId}` | Update one planning cycle |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/planningCycles/{PlanningCycleId}/child/planningCycleStages/{PlanningCycleStageId}/child/planningCycleActionDecisionItems/{PlanningCycleTaskId}` | Get one action and decision item |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/planningCycles/{PlanningCycleId}/child/planningCycleStages/{PlanningCycleStageId}/child/planningCycleActionDecisionItems/{PlanningCycleTaskId}` | Update one action and decision item |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/planningCycles/{PlanningCycleId}/child/planningCycleStages/{PlanningCycleStageId}` | Update one planning cycle stage |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/planningCycles/{PlanningCycleId}/child/planningCycleStages/{PlanningCycleStageId}/child/planningCycleActivities/{PlanningCycleActivityId}` | Get one activity |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/planningCycles/{PlanningCycleId}/child/planningCycleStages/{PlanningCycleStageId}/child/planningCycleActivities/{PlanningCycleActivityId}` | Update one activity |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/planningCycles/{PlanningCycleId}/child/planningCycleStages/{PlanningCycleStageId}` | Get one planning cycle stage |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/planningCycles/{PlanningCycleId}/child/planningCycleStages/{PlanningCycleStageId}/child/planningCycleActivities/{PlanningCycleActivityId}/child/planningCycleTasks/{PlanningCycleTaskId}` | Update one task |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/planningCycles/{PlanningCycleId}/child/planningCycleStages/{PlanningCycleStageId}/child/planningCycleActivities/{PlanningCycleActivityId}/child/planningCycleTasks/{PlanningCycleTaskId}` | Get one task |

## p la nn in gI te mC os ts

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/planningItemCosts/{planningItemCostsUniqID}` | Get one item cost |
| `GET` | `/fscmRestApi/resources/11.13.18.05/planningItemCosts` | Get all item costs |

## p la nn in gL ev el s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/planningLevels/{LevelId}/child/LevelAttributes` | Create one planning level attribute |
| `GET` | `/fscmRestApi/resources/11.13.18.05/planningLevels/{LevelId}/child/LevelAttributes/{AttributeId}` | Delete one planning level attribute |
| `GET` | `/fscmRestApi/resources/11.13.18.05/planningLevels/{LevelId}/child/LevelAttributes` | Get all planning level attributes |
| `GET` | `/fscmRestApi/resources/11.13.18.05/planningLevels` | Get all planning levels |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/planningLevels/{LevelId}/child/LevelAttributes/{AttributeId}` | Get one planning level attribute |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/planningLevels/{LevelId}/child/LevelAttributes/{AttributeId}` | Update one planning level attribute |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/planningLevels/{LevelId}` | Update one planning level |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/planningLevels/{LevelId}` | Get one planning level |

## p la nn in gM ea su re Co nt ex tL ev el s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/planningMeasureContextLevels` | Create one measure context level |
| `GET` | `/fscmRestApi/resources/11.13.18.05/planningMeasureContextLevels` | Get all measure context levels |
| `GET` | `/fscmRestApi/resources/11.13.18.05/planningMeasureContextLevels/{planningMeasureContextLevelsUniqID}` | Delete one measure context level |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/planningMeasureContextLevels/{planningMeasureContextLevelsUniqID}` | Update one measure context level |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/planningMeasureContextLevels/{planningMeasureContextLevelsUniqID}` | Get one measure context level |

## p la ns

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/plans/{PlanId}` | Get details of one plan |
| `GET` | `/fscmRestApi/resources/11.13.18.05/plans` | Get details of all plans |

## p la nS ta tu s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/planStatus/{PlanId}` | Get one plan status |
| `GET` | `/fscmRestApi/resources/11.13.18.05/planStatus` | Get all plan status |

## p la nT im eL ev el s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/planTimeLevels/{LookupCode}` | Get one planning time level |
| `GET` | `/fscmRestApi/resources/11.13.18.05/planTimeLevels` | Get all planning time levels |

## p la nT yp es

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/planTypes/{LookupCode}` | Get one plan type |
| `GET` | `/fscmRestApi/resources/11.13.18.05/planTypes` | Get all plan types |

## p la nU se rs

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/planUsers/{UserId}` | Get one planning user |
| `GET` | `/fscmRestApi/resources/11.13.18.05/planUsers` | Get all planning users |

## p ri or it yR ul eO rd er Ty pe s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/priorityRuleOrderTypes/{LookupCode}` | Get one order type |
| `GET` | `/fscmRestApi/resources/11.13.18.05/priorityRuleOrderTypes` | Get all order types |

## p ro du ct Ch an ge Li ne s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/productChangeLines/{ChangeLineId}/child/changeDFF/{ChangeId}` | Get |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productChangeLines/{ChangeLineId}/child/changeDFF` | Get all |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productChangeLines/{ChangeLineId}/enclosure/ProductLines` | Get a ProductLines |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productChangeLines/{ChangeLineId}/child/changeLineDFF` | Get all |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productChangeLines` | Get all workflow lines |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productChangeLines/{ChangeLineId}` | Get one workflow line |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productChangeLines/{ChangeLineId}/child/changeLineDFF/{ChangeLineId2}` | Get |

## p ro du ct De ve lo pm en tC on fi gu ra ti on s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/productDevelopmentConfigurations/{productDevelopmentConfigurationsUniqID}` | Get one configuration |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productDevelopmentConfigurations` | GET action not supported |

## p ro du ct De ve lo pm en tR el at io ns hi ps

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/productDevelopmentRelationships/{Id}/child/relationshipRules` | Get all relationship rules of a product development object |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productDevelopmentRelationships/{Id}/child/relationshipRules/{RelationshipRuleId}` | Get one relationship rule of a product development object |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productDevelopmentRelationships` | Get all relationships of a product development object |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productDevelopmentRelationships/{Id}` | Get one relationship of a product development object |

## p ro du ct io nL in es

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionLines` | Create all production lines |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionLines/{ProductionLineId}/child/PlLineOperation` | Get all line operations for the production line |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionLines` | Get all production lines |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionLines/{ProductionLineId}` | Delete one production line |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionLines/{ProductionLineId}/child/PlLineOperation/{PlLineOperationId}` | Update one line operation |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionLines/{ProductionLineId}/child/PlLineOperation/{PlLineOperationId}` | Get one line operation |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionLines/{ProductionLineId}` | Get one production line |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionLines/{ProductionLineId}` | Update one production line |

## p ro du ct io nR ep or ts

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionReports/{ProductionReportId}/child/operationTransactions/{ReportOperationId}/child/transactionLots` | Create a lot transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionReports/{ProductionReportId}/child/operationTransactions/{ReportOperationId}/child/errorMessages/{MessageId}` | Get one error message |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionReports/{ProductionReportId}/child/operationTransactions/{ReportOperationId}/child/transactionLots` | Get all transaction lots |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionReports/{ProductionReportId}/child/operationTransactions/{ReportOperationId}/child/transactionLots/{ReportLotId}/child/errorMessages` | Get all error messages |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionReports/{ProductionReportId}/child/operationTransactions/{ReportOperationId}/child/transactionLots/{ReportLotId}` | Get one transaction lot |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionReports/{ProductionReportId}/child/operationTransactions/{ReportOperationId}/child/errorMessages` | Get all error messages |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionReports/{ProductionReportId}/child/materialTransactions/{ReportMaterialId}/child/transactionSerials/{ReportSerialId2}/child/errorMessages/{MessageId}` | Get one error message |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionReports/{ProductionReportId}/child/materialTransactions/{ReportMaterialId}/child/transactionSerials/{ReportSerialId}/child/errorMessages` | Get all error messages |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionReports/{ProductionReportId}/child/operationTransactions` | Create an operation transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionReports/{ProductionReportId}/child/operationTransactions/{ReportOperationId}` | Get one operation transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionReports/{ProductionReportId}/child/operationTransactions` | Get all operation transactions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionReports/{ProductionReportId}/child/operationTransactions/{ReportOperationId}/child/transactionSerials` | Get all transaction serials |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionReports/{ProductionReportId}/child/operationTransactions/{ReportOperationId}/child/transactionSerials` | Create a serial transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionReports/{ProductionReportId}/child/operationTransactions/{ReportOperationId}/child/transactionSerials/{ReportSerialId}` | Get one transaction serial |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionReports/{ProductionReportId}/child/operationTransactions/{ReportOperationId}/child/transactionSerials/{ReportSerialId4}/child/errorMessages/{MessageId}` | Get one error message |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionReports/{ProductionReportId}/child/operationTransactions/{ReportOperationId}/child/transactionSerials/{ReportSerialId}/child/errorMessages` | Get all error messages |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionReports/{ProductionReportId}/child/operationTransactions/{ReportOperationId}/child/transactionLots/{ReportLotId2}/child/transactionSerials/{ReportSerialId3}/child/errorMessages/{MessageId}` | Get one error message |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionReports/{ProductionReportId}/child/operationTransactions/{ReportOperationId}/child/transactionLots/{ReportLotId}/child/transactionSerials` | Create a serial transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionReports/{ProductionReportId}/child/operationTransactions/{ReportOperationId}/child/transactionLots/{ReportLotId2}/child/errorMessages/{MessageId}` | Get one error message |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionReports/{ProductionReportId}/child/operationTransactions/{ReportOperationId}/child/transactionLots/{ReportLotId}/child/transactionSerials` | Get all transaction serials |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionReports/{ProductionReportId}/child/operationTransactions/{ReportOperationId}/child/transactionLots/{ReportLotId2}/child/transactionSerials/{ReportSerialId}/child/errorMessages` | Get all error messages |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionReports/{ProductionReportId}/child/operationTransactions/{ReportOperationId}/child/transactionLots/{ReportLotId2}/child/transactionSerials/{ReportSerialId}` | Get one transaction serial |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionReports/{ProductionReportId}/child/materialTransactions/{ReportMaterialId}/child/transactionSerials/{ReportSerialId}` | Get one transaction serial |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionReports/{ProductionReportId}/child/materialTransactions/{ReportMaterialId}` | Get one material transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionReports/{ProductionReportId}/child/materialTransactions` | Get all material transactions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionReports/{ProductionReportId}/child/materialTransactions/{ReportMaterialId}/child/errorMessages` | Get all error messages |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionReports/{ProductionReportId}/child/materialTransactions/{ReportMaterialId}/child/transactionLots` | Create a lot transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionReports/{ProductionReportId}/child/materialTransactions/{ReportMaterialId}/child/errorMessages/{MessageId}` | Get one error message |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionReports/{ProductionReportId}/child/materialTransactions` | Create a material transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionReports` | Get all production reports |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionReports` | Create a production report |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionReports/{ProductionReportId}` | Get one production report |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionReports/{ProductionReportId}/child/errorMessages/{MessageId}` | Get one error message |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionReports/{ProductionReportId}/child/errorMessages` | Get all error messages |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionReports/{ProductionReportId}/child/materialTransactions/{ReportMaterialId}/child/transactionLots/{ReportLotId}/child/transactionSerials/{ReportSerialId}/child/errorMessages` | Get all error messages |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionReports/{ProductionReportId}/child/materialTransactions/{ReportMaterialId}/child/transactionLots/{ReportLotId}/child/transactionSerials/{ReportSerialId}` | Get one transaction serial |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionReports/{ProductionReportId}/child/materialTransactions/{ReportMaterialId}/child/transactionLots/{ReportLotId}/child/transactionSerials/{ReportSerialId}/child/errorMessages/{MessageId}` | Get one error message |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionReports/{ProductionReportId}/child/materialTransactions/{ReportMaterialId}/child/transactionSerials` | Get all transaction serials |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionReports/{ProductionReportId}/child/materialTransactions/{ReportMaterialId}/child/transactionSerials` | Create a serial transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionReports/{ProductionReportId}/child/materialTransactions/{ReportMaterialId}/child/transactionLots/{ReportLotId}/child/transactionSerials` | Get all transaction serials |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionReports/{ProductionReportId}/child/materialTransactions/{ReportMaterialId}/child/transactionLots/{ReportLotId}` | Get one transaction lot |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionReports/{ProductionReportId}/child/materialTransactions/{ReportMaterialId}/child/transactionLots` | Get all transaction lots |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionReports/{ProductionReportId}/child/materialTransactions/{ReportMaterialId}/child/transactionLots/{ReportLotId}/child/errorMessages` | Get all error messages |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionReports/{ProductionReportId}/child/materialTransactions/{ReportMaterialId}/child/transactionLots/{ReportLotId}/child/transactionSerials` | Create a serial transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionReports/{ProductionReportId}/child/materialTransactions/{ReportMaterialId}/child/transactionLots/{ReportLotId}/child/errorMessages/{MessageId}` | Get one error message |

## p ro du ct io nR es ou rc es

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionResources/{ResourceId}/child/LaborInstance` | Create one instance |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionResources/{ResourceId}/child/ProgramFileName` | Create one program file |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionResources/{ResourceId}/child/EquipmentInstance` | Create one instance |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionResources` | Create one resource |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionResources/{ResourceId}/child/LaborInstance/{LaborInstanceId}` | Delete one instance |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionResources/{ResourceId}/child/LaborInstance` | Get all instances |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionResources/{ResourceId}/child/ResourceDFF` | Create one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionResources/{ResourceId}/child/ResourceDFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionResources/{ResourceId}/child/ProgramFileName` | Get all program files |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionResources/{ResourceId}/child/ProgramFileName/{EquipmentProgramFileId}` | Get one program file |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionResources/{ResourceId}/child/ProgramFileName/{EquipmentProgramFileId}` | Delete one program file |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionResources/{ResourceId}/child/LaborInstance/{LaborInstanceId}/child/LaborInstanceDFF` | Create one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionResources/{ResourceId}/child/LaborInstance/{LaborInstanceId}/child/LaborInstanceDFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionResources/{ResourceId}/child/EquipmentInstance/{EquipmentInstanceId}/child/EquipmentInstanceDFF` | Create one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionResources/{ResourceId}/child/EquipmentInstance/{EquipmentInstanceId}` | Delete one instance |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionResources/{ResourceId}/child/EquipmentInstance` | Get all instances |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionResources` | Get all resources |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionResources/{ResourceId}/child/EquipmentInstance/{EquipmentInstanceId}/child/EquipmentInstanceDFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionResources/{ResourceId}` | Delete one resource |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionResources/{ResourceId}/child/EquipmentInstance/{EquipmentInstanceId}/child/EquipmentInstanceDFF/{EquipmentInstanceId2}` | Update one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionResources/{ResourceId}` | Get one resource |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionResources/{ResourceId}/child/LaborInstance/{LaborInstanceId}/child/LaborInstanceDFF/{LaborInstanceId2}` | Get one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionResources/{ResourceId}` | Update one resource |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionResources/{ResourceId}/child/LaborInstance/{LaborInstanceId}/child/LaborInstanceDFF/{LaborInstanceId2}` | Update one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionResources/{ResourceId}/child/ResourceDFF/{ResourceId2}` | Update one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionResources/{ResourceId}/child/ResourceDFF/{ResourceId2}` | Get one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionResources/{ResourceId}/child/EquipmentInstance/{EquipmentInstanceId}/child/EquipmentInstanceDFF/{EquipmentInstanceId2}` | Get one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionResources/{ResourceId}/child/EquipmentInstance/{EquipmentInstanceId}` | Update one instance |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionResources/{ResourceId}/child/LaborInstance/{LaborInstanceId}` | Update one instance |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionResources/{ResourceId}/child/LaborInstance/{LaborInstanceId}` | Get one instance |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionResources/{ResourceId}/child/EquipmentInstance/{EquipmentInstanceId}` | Get one instance |

## p ro du ct io nS ch ed ul in gI te mC la ss At tr ib ut eG ro up s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingItemClassAttributeGroups/{productionSchedulingItemClassAttributeGroupsUniqID}` | Get one attribute group |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingItemClassAttributeGroups` | Get all attribute groups |

## p ro du ct io nS ch ed ul in gM an uf ac tu ri ng At tr ib ut eG ro up s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingManufacturingAttributeGroups/{productionSchedulingManufacturingAttributeGroupsUniqID}` | Get one manufacturing group |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingManufacturingAttributeGroups` | Get all manufacturing groups |

## p ro du ct io nS ch ed ul in gO rg an iz at io ns

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/itemParameters` | Create item parameters |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/itemClassAttributeGroups` | Create item attribute groups |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/productionLineAttributeSequences` | Create production line sequences |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/manufacturingAttributeGroups` | Create manufacturing attribute groups |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/attributes/{attributesUniqID}/child/attributeValues` | Create attribute values |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/attributes` | Create attributes |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/flowSequencingRules` | Create flow sequencing rules |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/changeoverRules` | Create changeover rules |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/resourceGroups/{GroupId}/child/groupMembers` | Create resources |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/resourceGroups` | Create resource groups |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/resourceRelationships` | Create resource relationships |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/resourceParameters` | Create resource parameters |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/productionLineAttributes` | Create production line attributes |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/productionLineAttributeSequences/{productionLineAttributeSequencesUniqID}/child/attributeValueSequences` | Create attribute value sequences |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/resourceAttributes` | Create resource attributes |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/productionLineParameters` | Create production line parameters |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/attributeSequences/{attributeSequencesUniqID}/child/attributeValueSequences` | Create attribute value sequences |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations` | Create scheduling organizations |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/attributeSequences` | Create attribute sequences |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/manufacturingAttributeGroups/{manufacturingAttributeGroupsUniqID}` | Delete a manufacturing attribute group |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/attributeSequences/{attributeSequencesUniqID}` | Delete an attribute sequence |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/manufacturingAttributeGroups` | Get all manufacturing attribute groups |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/itemParameters` | Get all item parameters |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations` | Get all organizations |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/productionLineParameters/{productionLineParametersUniqID}` | Delete one production line parameter |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/resourceGroups/{GroupId}/child/groupMembers` | Get all resource group members |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/attributeSequences` | Get all attribute sequences |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/itemClassAttributeGroups` | Get all item attribute groups |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/itemParameters/{itemParametersUniqID}` | Delete an item parameter |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/resourceGroups` | Get all resource groups |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/resourceAttributes` | Get all resource attributes |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/productionLineAttributeSequences/{productionLineAttributeSequencesUniqID}/child/attributeValueSequences` | Get all attribute value sequences |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/resourceAttributes/{resourceAttributesUniqID}` | Delete a resource attribute |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/productionLineAttributes` | Get all production line attributes |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/productionLineAttributes/{productionLineAttributesUniqID}` | Delete one production line attribute |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/productionLineAttributeSequences/{productionLineAttributeSequencesUniqID}` | Delete one production line sequence |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/productionLineParameters` | Get all production line parameters |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/productionLineAttributeSequences` | Get all production line sequences |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/productionLineAttributeSequences/{productionLineAttributeSequencesUniqID}/child/attributeValueSequences/{attributeValueSequencesUniqID}` | Delete an attribute value sequence |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/resourceGroups/{GroupId}` | Delete a resource group |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/attributeSequences/{attributeSequencesUniqID}/child/attributeValueSequences/{attributeValueSequencesUniqID}` | Delete an attribute value sequence |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/resourceRelationships/{RelationshipId}` | Delete a resource relationship |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/attributes/{attributesUniqID}/child/attributeValues/{attributeValuesUniqID}` | Delete an attribute value |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/changeoverRules/{ChangeoverId}` | Delete a changeover rule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/attributes/{attributesUniqID}/child/attributeValues` | Get all attribute values |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/attributeSequences/{attributeSequencesUniqID}/child/attributeValueSequences` | Get all attribute value sequences |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/resourceGroups/{GroupId}/child/groupMembers/{MemberId}` | Delete a resource group member |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/attributes/{attributesUniqID}` | Delete an attribute |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/resourceRelationships` | Get all resource relationships |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/attributes` | Get all attributes |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/changeoverRules` | Get all changeover rules |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/resourceParameters/{resourceParametersUniqID}` | Delete a resource parameter |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/flowSequencingRules` | Get all flow sequencing rules |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}` | Delete a scheduling organization |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/resourceParameters` | Get all resource parameters |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/itemClassAttributeGroups/{itemClassAttributeGroupsUniqID}` | Delete an item class attribute group |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/flowSequencingRules/{FlowSequencingRuleId}` | Delete one flow sequencing rule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/resourceRelationships/{RelationshipId}` | Update a resource relationship |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/productionLineParameters/{productionLineParametersUniqID}` | Get one production line parameter |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/productionLineParameters/{productionLineParametersUniqID}` | Update one production line parameter |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/resourceRelationships/{RelationshipId}` | Get one resource relationship |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/resourceGroups/{GroupId}/child/groupMembers/{MemberId}` | Get one resource group member |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/resourceGroups/{GroupId}/child/groupMembers/{MemberId}` | Update a resource group member |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/resourceGroups/{GroupId}` | Update a resource group |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/resourceParameters/{resourceParametersUniqID}` | Update a resource parameter |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/resourceParameters/{resourceParametersUniqID}` | Get one resource parameter |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/resourceGroups/{GroupId}` | Get one resource group |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/resourceAttributes/{resourceAttributesUniqID}` | Get one resource attribute |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/resourceAttributes/{resourceAttributesUniqID}` | Update a resource attribute |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/flowSequencingRules/{FlowSequencingRuleId}` | Update one flow sequencing rule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/flowSequencingRules/{FlowSequencingRuleId}` | Get one flow sequencing rule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/attributeSequences/{attributeSequencesUniqID}` | Update an attribute sequence |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/attributeSequences/{attributeSequencesUniqID}` | Get one attribute sequence |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/attributeSequences/{attributeSequencesUniqID}/child/attributeValueSequences/{attributeValueSequencesUniqID}` | Get one attribute value sequence |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/itemClassAttributeGroups/{itemClassAttributeGroupsUniqID}` | Update an item class attribute group |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/itemClassAttributeGroups/{itemClassAttributeGroupsUniqID}` | Get one item class attribute group |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/attributes/{attributesUniqID}` | Update an attribute |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/attributes/{attributesUniqID}` | Get one attribute |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/attributeSequences/{attributeSequencesUniqID}/child/attributeValueSequences/{attributeValueSequencesUniqID}` | Update an attribute value sequence |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/attributes/{attributesUniqID}/child/attributeValues/{attributeValuesUniqID}` | Get one attribute value |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/changeoverRules/{ChangeoverId}` | Update a changeover rule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/changeoverRules/{ChangeoverId}` | Get one changeover rule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/attributes/{attributesUniqID}/child/attributeValues/{attributeValuesUniqID}` | Update an attribute value |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/action/deleteFlowSequencingRules` | Request the deletion of flow sequencing rules. |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/productionLineAttributeSequences/{productionLineAttributeSequencesUniqID}/child/attributeValueSequences/{attributeValueSequencesUniqID}` | Update an attribute value sequence |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/productionLineAttributeSequences/{productionLineAttributeSequencesUniqID}/child/attributeValueSequences/{attributeValueSequencesUniqID}` | Get one attribute value sequence |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/itemParameters/{itemParametersUniqID}` | Get one item parameter |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/productionLineAttributes/{productionLineAttributesUniqID}` | Update one production line attribute |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/productionLineAttributes/{productionLineAttributesUniqID}` | Get one production line attribute |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}` | Update a scheduling organization |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/manufacturingAttributeGroups/{manufacturingAttributeGroupsUniqID}` | Update a manufacturing attribute group |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/manufacturingAttributeGroups/{manufacturingAttributeGroupsUniqID}` | Get one manufacturing attribute group |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/itemParameters/{itemParametersUniqID}` | Update an item parameter |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/productionLineAttributeSequences/{productionLineAttributeSequencesUniqID}` | Get one production line sequence |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/child/productionLineAttributeSequences/{productionLineAttributeSequencesUniqID}` | Update one production line sequence |
| `POST` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/action/refreshOrganizationData` | Refresh data for an organization |
| `POST` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}/action/replaceFlowSequencingRules` | Initiate a request to replace flow sequencing rules from an existing production line |
| `POST` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingOrganizations/{OrganizationId}` | Get one scheduling organization |

## p ro du ct io nS ch ed ul in gP la ns

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/selectedItemCategories` | Create item categories |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/calendars` | Create calendars |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/calendars/{calendarsUniqID}/child/calendarEvents` | Create calendar events |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/resources/{resourcesUniqID}/child/usageLevels` | Create resource usage levels |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/planStatus/{ExecutionId}/child/planStatusDetails` | Create plan status details |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/supplyEvents` | Create supply events |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/workOrderOperations` | Create operations |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/attributes` | Create attributes |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/attributes/{attributesUniqID}/child/attributeValues` | Create attribute values |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/calendarEvents` | Create calendar events |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/workOrderOperationAttributes` | Create operation attributes |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/resourceGroups/{resourceGroupsUniqID}/child/groupMembers` | Create resource group members |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/items` | Create items |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/resourceGroups` | Create resource groups |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/productionLines` | Create production lines |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/planStatus` | Create plan statuses |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/resourceRelationships` | Create resource relationships |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/resources/{resourcesUniqID}/child/availabilityLevels` | Create resource availability levels |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/changeoverInstances/{changeoverInstancesUniqID}/child/changeoverInstanceDetails` | Create changeover instance details |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/resources` | Create production resources |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/demandEvents` | Create demands |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/changeoverRules` | Create changeover rules |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/workOrders` | Create work orders |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/workOrderOperations/{workOrderOperationsUniqID}/child/operationResources` | Create operation resources |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/workOrders/{workOrdersUniqID}/child/operations/{operationsUniqID}/child/operationResources` | Create operation resources |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/workOrders/{workOrdersUniqID}/child/operations/{operationsUniqID}/child/operationMaterials` | Create operation materials |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/workOrders/{workOrdersUniqID}/child/operations` | Create operations |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/workOrderOperations/{workOrderOperationsUniqID}/child/operationMaterials` | Create operation materials |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans` | Create production plans |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/resourceGroups/{resourceGroupsUniqID}/child/groupMembers` | Get all resource group members |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/resourceOperationSequences` | Get all resource operation sequences |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/workOrders/{workOrdersUniqID}/child/operations/{operationsUniqID}/child/operationMaterials` | Get all operation materials |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/resourceGroups/{resourceGroupsUniqID}/child/groupMembers/{groupMembersUniqID}` | Delete a resource group member |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/resourceGroups/{resourceGroupsUniqID}` | Delete a resource group |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/resourceGroups` | Get all resource groups |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/planStatus/{ExecutionId}/child/planStatusDetails/{planStatusDetailsUniqID}` | Delete a plan status detail |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/resourceRelationships` | Get all resource relationships |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/resourceUsageLevels` | Get all resource usage levels |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/resourceUsageLevels/{resourceUsageLevelsUniqID}` | Get one resource usage level |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/resourceRelationships/{resourceRelationshipsUniqID}` | Delete a resource relationship |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/resourceOperationSequences/{resourceOperationSequencesUniqID}` | Get one resource operation sequence |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/scheduledWorkOrders` | Get all scheduled work orders |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/workOrders/{workOrdersUniqID}/child/operations/{operationsUniqID}/child/operationMaterials/{operationMaterialsUniqID}` | Delete an operation material |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/reservations/{reservationsUniqID}` | Get one reservation |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/resourceAvailabilityLevels` | Get all resource availability levels |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/resourceAvailabilityLevels/{resourceAvailabilityLevelsUniqID}` | Get one resource availability level |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/reservations` | Get all reservations |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/productionLines/{productionLinesUniqID}` | Delete production lines |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/workOrders/{workOrdersUniqID}/child/operations/{operationsUniqID}/child/operationResources` | Get all operation resources |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/productionLines` | Get all production lines |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/resourceCalendars` | Get all resource calendars |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/resourceGroupUtilization` | Get all resource group utilization |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/resourceGroupUtilization/{resourceGroupUtilizationUniqID}` | Get one resource group utilization |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/workOrders/{workOrdersUniqID}/child/operations/{operationsUniqID}/child/operationResources/{operationResourcesUniqID}` | Delete an operation resource |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/planStatus/{ExecutionId}/child/planStatusDetails` | Get all plan status details |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/resourceCalendars/{resourceCalendarsUniqID}` | Get one resource calendar |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/resourceChangeoverSequences` | Get all resource changeover sequences |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/resourceChangeoverSequences/{resourceChangeoverSequencesUniqID}` | Get one resource changeover sequence |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/supplyEvents/{supplyEventsUniqID}` | Delete a supply event |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/workOrderOperations/{workOrderOperationsUniqID}/child/operationResources` | Get all operation resources |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/workOrderOperations/{workOrderOperationsUniqID}/child/operationResources/{operationResourcesUniqID}` | Delete an operation resource |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/supplyEvents` | Get all supply events |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/selectedItemCategories/{selectedItemCategoriesUniqID}` | Delete an item category |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/schedulingResources/{schedulingResourcesUniqID}` | Get one scheduling production resource |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/selectedItemCategories` | Get all item categories |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/workOrderTemporalRelations` | Get all temporal relations |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/workOrderOperations/{workOrderOperationsUniqID}/child/operationMaterials/{operationMaterialsUniqID}` | Delete an operation material |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/workOrderOperationAttributes` | Get all operation attributes |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/workOrderOperations` | Get all operations |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/workOrderOperations/{workOrderOperationsUniqID}` | Delete an operation |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/workOrderOperationAlternateResources/{workOrderOperationAlternateResourcesUniqID}` | Get one operation resource alternate |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/workOrderOperationAlternateResources` | Get all operation resource alternates |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/workOrderOperations/{workOrderOperationsUniqID}/child/operationMaterials` | Get all operation materials |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/workOrderOperationAttributes/{workOrderOperationAttributesUniqID}` | Delete an operation attribute |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/resources` | Get all production resources |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/resources/{resourcesUniqID}` | Delete a production resource |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/resources/{resourcesUniqID}/child/availabilityLevels/{availabilityLevelsUniqID}` | Delete resource availability levels |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/workOrders/{workOrdersUniqID}/child/demands/{demandsUniqID}` | Get one work order demand |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/resourceUtilization/{resourceUtilizationUniqID}` | Get one resource utilization value |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/resourceUtilization` | Get all resource utilization values |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/workOrders/{workOrdersUniqID}/child/operations/{operationsUniqID}` | Delete an operation |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/workOrders/{workOrdersUniqID}/child/operations` | Get all operations |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/workOrders/{workOrdersUniqID}` | Delete a work order |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/workOrders` | Get all work orders |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/schedulingResources` | Get all scheduling production resources |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/scheduledWorkOrders/{scheduledWorkOrdersUniqID}` | Get one scheduled work order |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/workOrders/{workOrdersUniqID}/child/demands` | Get all work order demands |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/resources/{resourcesUniqID}/child/availabilityLevels` | Get all resource availability levels |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/resources/{resourcesUniqID}/child/usageLevels` | Get all resource usage levels |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/resources/{resourcesUniqID}/child/usageLevels/{usageLevelsUniqID}` | Delete a resource usage level |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/items/{itemsUniqID}` | Delete an item |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/changeoverInstances/{changeoverInstancesUniqID}` | Get one changeover instance |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/changeoverInstances/{changeoverInstancesUniqID}/child/changeoverInstanceDetails/{changeoverInstanceDetailsUniqID}` | Delete a changeover instance details |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/demandEvents` | Get all demands |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/aggregatedFlowSchedules` | Get all aggregate flow schedules |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/calendars` | Get all calendars |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/attributes/{attributesUniqID}/child/attributeValues` | Get all attribute values |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/assignedAttributeValues/{assignedAttributeValuesUniqID}` | Get one assigned attribute value |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/attributes/{attributesUniqID}/child/attributeValues/{attributeValuesUniqID}` | Delete an attribute value |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/items` | Get all items |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/changeoverInstances` | Get all changeover instances |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/attributes/{attributesUniqID}` | Delete an attribute |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/changeoverRules/{changeoverRulesUniqID}` | Delete a changeover rule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/attributes` | Get all attributes |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/calendars/{calendarsUniqID}/child/calendarEvents` | Get all calendar events |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/changeoverInstances/{changeoverInstancesUniqID}/child/changeoverInstanceDetails` | Get all changeover instance details |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/changeoverRules` | Get all changeover rules |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/assignedAttributeValues` | Get all assigned attribute values |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/demandEvents/{demandEventsUniqID}` | Delete a demand |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/calendars/{calendarsUniqID}/child/calendarEvents/{calendarEventsUniqID}` | Delete a calendar event |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/assets` | Get all assets |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/aggregatedFlowSchedules/{aggregatedFlowSchedulesUniqID}` | Get one aggregate flow schedule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/peggingRelationships/{peggingRelationshipsUniqID}` | Get one pegging relationship |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/planStatus/{ExecutionId}` | Delete a plan status |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/calendarEvents` | Get all calendar events |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/resourceUtilizationMeasures/{resourceUtilizationMeasuresUniqID}` | Get one key performance indicator |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/peggingRelationships` | Get all pegging relationships |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/calendarEvents/{calendarEventsUniqID}` | Delete a calendar event |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/calendars/{calendarsUniqID}` | Delete a calendar |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}` | Delete a production schedule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/planStatus` | Get all plan statuses |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans` | Get all production plans |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/resourceUtilizationMeasures` | Get all key performance indicators |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/scheduleMeasures/{PlanId2}` | Get one key performance indicator |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/changeoverTimeMeasures` | Get all key performance indicators |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/scheduleMeasures` | Get all key performance indicators |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/items/{itemsUniqID}/child/onHoldLots` | Get all on-hold lots |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/items/{itemsUniqID}/child/onHoldLots/{onHoldLotsUniqID}` | Get one on-hold lot |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/changeoverTimeMeasures/{changeoverTimeMeasuresUniqID}` | Get one key performance indicator |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/lateWorkOrderMeasures/{lateWorkOrderMeasuresUniqID}` | Get one key performance indicator |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/lateWorkOrderMeasures` | Get all key performance indicators |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/lateDemandMeasures` | Get all key performance indicators |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/lateDemandMeasures/{lateDemandMeasuresUniqID}` | Get one key performance indicator |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/workOrderOperations/{workOrderOperationsUniqID}` | Get one operation |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/supplyEvents/{supplyEventsUniqID}` | Update a supply event |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/attributes/{attributesUniqID}/child/attributeValues/{attributeValuesUniqID}` | Get one attribute value |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/attributes/{attributesUniqID}/child/attributeValues/{attributeValuesUniqID}` | Update an attribute value |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/attributes/{attributesUniqID}` | Update an attribute |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/attributes/{attributesUniqID}` | Get one attribute |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/workOrderOperationAttributes/{workOrderOperationAttributesUniqID}` | Update an operation attribute |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/workOrderOperationAttributes/{workOrderOperationAttributesUniqID}` | Get one operation attribute |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/action/stopSolvingPlan` | Request to stop solving a plan |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/workOrders/{workOrdersUniqID}/child/operations/{operationsUniqID}` | Get one operation |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/workOrders/{workOrdersUniqID}` | Get one work order |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/workOrders/{workOrdersUniqID}` | Update a work order |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/workOrders/{workOrdersUniqID}/child/operations/{operationsUniqID}` | Update an operation |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/workOrders/{workOrdersUniqID}/child/operations/{operationsUniqID}/child/operationResources/{operationResourcesUniqID}` | Get one operation resource |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/workOrders/{workOrdersUniqID}/child/operations/{operationsUniqID}/child/operationResources/{operationResourcesUniqID}` | Update an operation resource |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/workOrders/{workOrdersUniqID}/child/operations/{operationsUniqID}/child/operationMaterials/{operationMaterialsUniqID}` | Get one operation material |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/workOrders/{workOrdersUniqID}/child/operations/{operationsUniqID}/child/operationMaterials/{operationMaterialsUniqID}` | Update an operation material |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/workOrderOperations/{workOrderOperationsUniqID}/child/operationMaterials/{operationMaterialsUniqID}` | Get one operation material |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/workOrderOperations/{workOrderOperationsUniqID}/child/operationMaterials/{operationMaterialsUniqID}` | Update an operation material |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/workOrderOperations/{workOrderOperationsUniqID}` | Update an operation |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/assets/{assetsUniqID}` | Update an asset |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/assets/{assetsUniqID}` | Get one asset |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/workOrderTemporalRelations/{workOrderTemporalRelationsUniqID}` | Get one temporal relation |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/workOrderTemporalRelations/{workOrderTemporalRelationsUniqID}` | Update a temporal relation |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/workOrderOperations/{workOrderOperationsUniqID}/child/operationResources/{operationResourcesUniqID}` | Get one operation resource |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/workOrderOperations/{workOrderOperationsUniqID}/child/operationResources/{operationResourcesUniqID}` | Update an operation resource |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/resourceGroups/{resourceGroupsUniqID}/child/groupMembers/{groupMembersUniqID}` | Update a resource group member |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/demandEvents/{demandEventsUniqID}` | Update a demand |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/items/{itemsUniqID}` | Get one item |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/resourceGroups/{resourceGroupsUniqID}/child/groupMembers/{groupMembersUniqID}` | Get one resource group member |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/demandEvents/{demandEventsUniqID}` | Get one demand |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/changeoverRules/{changeoverRulesUniqID}` | Update a changeover rule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/changeoverRules/{changeoverRulesUniqID}` | Get one changeover rule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/resourceRelationships/{resourceRelationshipsUniqID}` | Get one resource relationship |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/resourceRelationships/{resourceRelationshipsUniqID}` | Update a resource relationship |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/planStatus/{ExecutionId}/child/planStatusDetails/{planStatusDetailsUniqID}` | Get one plan status detail |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/planStatus/{ExecutionId}/child/planStatusDetails/{planStatusDetailsUniqID}` | Update a plan status detail |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/planStatus/{ExecutionId}` | Update a plan status |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/planStatus/{ExecutionId}` | Get one plan status |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/productionLines/{productionLinesUniqID}` | Get one production line |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/resourceGroups/{resourceGroupsUniqID}` | Update a resource group |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/items/{itemsUniqID}` | Update an item |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/productionLines/{productionLinesUniqID}` | Update production lines |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/resourceGroups/{resourceGroupsUniqID}` | Get one resource group |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/changeoverInstances/{changeoverInstancesUniqID}/child/changeoverInstanceDetails/{changeoverInstanceDetailsUniqID}` | Update a changeover instance detail |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/supplyEvents/{supplyEventsUniqID}` | Get one supply event |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/calendars/{calendarsUniqID}` | Update a calendar |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/resources/{resourcesUniqID}/child/usageLevels/{usageLevelsUniqID}` | Update a resource usage level |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/calendars/{calendarsUniqID}/child/calendarEvents/{calendarEventsUniqID}` | Get one calendar event |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/resources/{resourcesUniqID}/child/usageLevels/{usageLevelsUniqID}` | Get one resource usage level |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/selectedItemCategories/{selectedItemCategoriesUniqID}` | Update an item category |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/calendarEvents/{calendarEventsUniqID}` | Get one calendar event |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/selectedItemCategories/{selectedItemCategoriesUniqID}` | Get one item category |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/calendars/{calendarsUniqID}/action/applyCalendarPattern` | Request changing a single calendar event |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/calendarEvents/{calendarEventsUniqID}` | Update a calendar event |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/calendars/{calendarsUniqID}/child/calendarEvents/{calendarEventsUniqID}` | Update a calendar event |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/resources/{resourcesUniqID}/child/availabilityLevels/{availabilityLevelsUniqID}` | Get one resource availability level |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/resources/{resourcesUniqID}` | Update a production resource |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/resources/{resourcesUniqID}/child/availabilityLevels/{availabilityLevelsUniqID}` | Update resource availability levels |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/resources/{resourcesUniqID}/action/applyAvailabilityLevelPattern` | Request changing an availability level. |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/changeoverInstances/{changeoverInstancesUniqID}/child/changeoverInstanceDetails/{changeoverInstanceDetailsUniqID}` | Get one changeover instance details |
| `POST` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/action/refreshPlanData` | Refresh and solve a plan |
| `POST` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/calendars/{calendarsUniqID}` | Get one calendar |
| `POST` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/action/solvePlan` | Request to solve a plan |
| `POST` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/child/resources/{resourcesUniqID}` | Get one production resource |
| `POST` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}` | Get one production schedule |
| `POST` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}` | Update a production schedule |
| `POST` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/action/updateWorkOrders` | Update work orders |
| `POST` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/action/updateWorkOrderOperations` | Update work order operation properties |
| `POST` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/action/updateWorkOrderOperationResources` | Update work order operation resource properties |
| `POST` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/action/duplicatePlan` | Request to copy a plan including the plan data |
| `POST` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/action/applyCalendarPattern` | Request changing recurring calendar availability |
| `POST` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/action/repairPlan` | Request to schedule an operation resource |
| `POST` | `/fscmRestApi/resources/11.13.18.05/productionSchedulingPlans/{PlanId}/action/releasePlan` | Request to release a plan |

## p ro du ct Ma na ge me nt Gu id ed Ta sk s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productManagementGuidedTasks/{guidedTaskId}/child/guidedTaskInstances` | Create guided task instances |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productManagementGuidedTasks/{guidedTaskId}/child/guidedTaskSteps` | Create guided task steps |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productManagementGuidedTasks/{guidedTaskId}/child/guidedTaskSteps/{stepId}/child/objectSearchViews` | Create guided task object search view |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/productManagementGuidedTasks` | Create guided tasks |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productManagementGuidedTasks/{guidedTaskId}/child/guidedTaskInstances/{instanceId}/enclosure/taskConfigMetadata` | Delete a taskConfigMetadata |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productManagementGuidedTasks/{guidedTaskId}/child/guidedTaskSteps/{stepId}` | Delete one guided task step |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productManagementGuidedTasks/{guidedTaskId}` | Delete one guided task |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productManagementGuidedTasks/{guidedTaskId}/child/guidedTaskSteps/{stepId}/child/objectSearchViews/{searchViewId}` | Delete guided task object search view |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productManagementGuidedTasks/{guidedTaskId}/child/guidedTaskSteps/{stepId}/child/objectSearchViews` | Get all guided task object search views |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productManagementGuidedTasks` | Get all guided tasks |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productManagementGuidedTasks/{guidedTaskId}/enclosure/image` | Delete an image |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productManagementGuidedTasks/{guidedTaskId}/child/guidedTaskSteps` | Get all guided task steps |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productManagementGuidedTasks/{guidedTaskId}/child/guidedTaskSteps/{stepId}/child/objectSearchViews/{searchViewId}/enclosure/SearchConfigData` | Delete a SearchConfigData |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productManagementGuidedTasks/{guidedTaskId}/child/guidedTaskInstances` | Get all guided task instances |
| `GET` | `/fscmRestApi/resources/11.13.18.05/productManagementGuidedTasks/{guidedTaskId}/child/guidedTaskInstances/{instanceId}` | Delete one guided task instance |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productManagementGuidedTasks/{guidedTaskId}/child/guidedTaskSteps/{stepId}` | Update one guided task step |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productManagementGuidedTasks/{guidedTaskId}/child/guidedTaskSteps/{stepId}/child/objectSearchViews/{searchViewId}` | Update one guided task step search view |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productManagementGuidedTasks/{guidedTaskId}/child/guidedTaskSteps/{stepId}/child/objectSearchViews/{searchViewId}` | Get one guided task object search view |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productManagementGuidedTasks/{guidedTaskId}/child/guidedTaskInstances/{instanceId}` | Update one guided task instance |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productManagementGuidedTasks/{guidedTaskId}/child/guidedTaskInstances/{instanceId}/action/performBatch` | Process batch data for the guided task |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productManagementGuidedTasks/{guidedTaskId}` | Update one guided task |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productManagementGuidedTasks/{guidedTaskId}/child/guidedTaskSteps/{stepId}` | Get one guided task step |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/productManagementGuidedTasks/{guidedTaskId}` | Get one guided task |
| `POST` | `/fscmRestApi/resources/11.13.18.05/productManagementGuidedTasks/{guidedTaskId}/child/guidedTaskInstances/{instanceId}` | Get one guided task instance |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/productManagementGuidedTasks/{guidedTaskId}/enclosure/image` | Replace an image |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/productManagementGuidedTasks/{guidedTaskId}/enclosure/image` | Get an image |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/productManagementGuidedTasks/{guidedTaskId}/child/guidedTaskSteps/{stepId}/child/objectSearchViews/{searchViewId}/enclosure/SearchConfigData` | Replace a SearchConfigData |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/productManagementGuidedTasks/{guidedTaskId}/child/guidedTaskInstances/{instanceId}/enclosure/taskConfigMetadata` | Get a taskConfigMetadata |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/productManagementGuidedTasks/{guidedTaskId}/child/guidedTaskInstances/{instanceId}/enclosure/taskConfigMetadata` | Replace a taskConfigMetadata |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/productManagementGuidedTasks/{guidedTaskId}/child/guidedTaskSteps/{stepId}/child/objectSearchViews/{searchViewId}/enclosure/SearchConfigData` | Get a SearchConfigData |

## p ro du ct Wo rk fl ow Ac ti on s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/productWorkflowActions` | Get all product workflow actions |
| `POST` | `/fscmRestApi/resources/11.13.18.05/productWorkflowActions/action/auditAnalysis` | Perform audit analysis of product workflows. |
| `POST` | `/fscmRestApi/resources/11.13.18.05/productWorkflowActions/{ChangeId}` | Get one product workflow action |

## p ur ch as eO rd er Li ne sF or Re ce iv in g

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/purchaseOrderLinesForReceiving/{POLineId}` | Get one line |
| `GET` | `/fscmRestApi/resources/11.13.18.05/purchaseOrderLinesForReceiving` | Get all lines |

## p ur ch as eO rd er Re ce ip tS er ia ls

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/purchaseOrderReceiptSerials/{purchaseOrderReceiptSerialsUniqID}` | Get one serial |
| `GET` | `/fscmRestApi/resources/11.13.18.05/purchaseOrderReceiptSerials` | Get all serials |

## p ur ch as eO rd er Sc he du le sF or La nd ed Co st s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/purchaseOrderSchedulesForLandedCosts/{POLineLocationId}/child/shipmentDetails/{ShipmentHeaderId}` | Get one shipment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/purchaseOrderSchedulesForLandedCosts/{POLineLocationId}/child/tradeOperationDetails` | Get all trade operation charge lines |
| `GET` | `/fscmRestApi/resources/11.13.18.05/purchaseOrderSchedulesForLandedCosts/{POLineLocationId}/child/tradeOperationDetails/{tradeOperationDetailsUniqID}` | Get one trade operation charge line |
| `GET` | `/fscmRestApi/resources/11.13.18.05/purchaseOrderSchedulesForLandedCosts` | Get all schedules |
| `GET` | `/fscmRestApi/resources/11.13.18.05/purchaseOrderSchedulesForLandedCosts/{POLineLocationId}` | Get one schedule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/purchaseOrderSchedulesForLandedCosts/{POLineLocationId}/child/shipmentDetails` | Get all shipments |

## q ua li ty Ac ti on s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/qualityActions/{ActionId}/child/Relationships/{RelationshipsUniqID}` | Get one attachment |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/qualityActions/{ActionId}/child/AffectedObjects` | Create one affected object |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/qualityActions/{ActionId}/child/Security` | Create one security grantee |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/qualityActions/{ActionId}/child/Attachments` | Create an attachment |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/qualityActions/{ActionId}/child/WorkflowApprovers` | Create one workflow approver |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/qualityActions/{ActionId}` | Create one action |
| `GET` | `/fscmRestApi/resources/11.13.18.05/qualityActions/{ActionId}/child/Attachments/{AttachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/qualityActions/{ActionId}/enclosure/ResolutionDescription` | Delete a ResolutionDescription |
| `GET` | `/fscmRestApi/resources/11.13.18.05/qualityActions/{ActionId}/child/Relationships` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/qualityActions/{ActionId}/enclosure/Description` | Delete a Description |
| `GET` | `/fscmRestApi/resources/11.13.18.05/qualityActions/{ActionId}/child/WorkflowApprovers/{WfRoutePeopleId}` | Delete one workflow approver |
| `GET` | `/fscmRestApi/resources/11.13.18.05/qualityActions/{ActionId}/child/WorkflowApprovers` | Get all workflow approvers |
| `GET` | `/fscmRestApi/resources/11.13.18.05/qualityActions/{ActionId}/child/WorkflowApprovers/{WfRoutePeopleId}` | Get one workflow approver |
| `GET` | `/fscmRestApi/resources/11.13.18.05/qualityActions/{ActionId}/child/Security/{SecurityUniqID}` | Delete one security grantee |
| `GET` | `/fscmRestApi/resources/11.13.18.05/qualityActions/{ActionId}/child/Security` | Get all security grantees |
| `GET` | `/fscmRestApi/resources/11.13.18.05/qualityActions/{ActionId}/child/Security/{SecurityUniqID}` | Get one security grantee |
| `GET` | `/fscmRestApi/resources/11.13.18.05/qualityActions/{ActionId}/child/Attachments/{AttachmentsUniqID}` | Get an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/qualityActions/{ActionId}/child/AffectedObjects` | Get all affected objects |
| `GET` | `/fscmRestApi/resources/11.13.18.05/qualityActions/{ActionId}/child/Attachments/{AttachmentsUniqID}` | Delete an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/qualityActions/{ActionId}/child/Attachments` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/qualityActions/{ActionId}` | Delete one action |
| `GET` | `/fscmRestApi/resources/11.13.18.05/qualityActions` | Get all actions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/qualityActions/{ActionId}/child/AffectedObjects/{AffectedObjectId}` | Delete one affected object |
| `GET` | `/fscmRestApi/resources/11.13.18.05/qualityActions/{ActionId}/child/Attachments/{AttachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/qualityActions/{ActionId}/child/AffectedObjects/{AffectedObjectId}` | Get one affected object |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/qualityActions/{ActionId}/child/AffectedObjects/{AffectedObjectId}` | Update one affected object |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/qualityActions/{ActionId}/child/Relationships/{RelationshipsUniqID}` | Remove one attachment |
| `POST` | `/fscmRestApi/resources/11.13.18.05/qualityActions` | Update one action |
| `POST` | `/fscmRestApi/resources/11.13.18.05/qualityActions/{ActionId}` | Get one action |
| `POST` | `/fscmRestApi/resources/11.13.18.05/qualityActions/{ActionId}/child/Relationships/{RelationshipsUniqID}` | Update one attachment |
| `POST` | `/fscmRestApi/resources/11.13.18.05/qualityActions/{ActionId}/child/Relationships` | Upload one attachment |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/qualityActions/{ActionId}/child/Attachments/{AttachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/qualityActions/{ActionId}/child/Attachments/{AttachmentsUniqID}/enclosure/FileContents` | Get a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/qualityActions/{ActionId}/enclosure/ResolutionDescription` | Get a ResolutionDescription |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/qualityActions/{ActionId}/enclosure/ResolutionDescription` | Replace a ResolutionDescription |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/qualityActions/{ActionId}/enclosure/Description` | Get a Description |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/qualityActions/{ActionId}/enclosure/Description` | Replace a Description |

## q ui ck Se tu pP ar am et er s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/quickSetupParameters` | Get all quick setup parameters |
| `POST` | `/fscmRestApi/resources/11.13.18.05/quickSetupParameters/action/quickSetupSubmit` | Submit parameters to implement multiple costing setup entities |
| `POST` | `/fscmRestApi/resources/11.13.18.05/quickSetupParameters` | Submit all the parameters for the costing setup |
| `POST` | `/fscmRestApi/resources/11.13.18.05/quickSetupParameters/{quickSetupParametersUniqID}` | Get one quick setup parameter |

## r at ed Cu rr en ci es

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/ratedCurrencies` | Get all rated currencies |

## r ec al lC on ta in me nt Ta sk Ow ne rs

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/recallContainmentTaskOwners` | Create recall bypass count task owner mappings |
| `GET` | `/fscmRestApi/resources/11.13.18.05/recallContainmentTaskOwners` | Get all recall bypass count task owner mappings |
| `GET` | `/fscmRestApi/resources/11.13.18.05/recallContainmentTaskOwners/{ParameterValueId}` | Delete one recall bypass count task owner mapping |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/recallContainmentTaskOwners/{ParameterValueId}` | Update one recall bypass count task owner mapping |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/recallContainmentTaskOwners/{ParameterValueId}` | Get one recall bypass count task owner mapping |

## r ec al lD is po si ti on De ta il s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/recallDispositionDetails/{DispositionId}` | Get one disposition detail |
| `GET` | `/fscmRestApi/resources/11.13.18.05/recallDispositionDetails` | Get all disposition details |

## r ec al lI nv en to ry Or ga ni za ti on s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/recallInventoryOrganizations` | Get all recall inventory organizations |
| `GET` | `/fscmRestApi/resources/11.13.18.05/recallInventoryOrganizations/{ParameterValueId}` | Delete recall inventory organization |
| `POST` | `/fscmRestApi/resources/11.13.18.05/recallInventoryOrganizations` | Post recall inventory organizations |
| `POST` | `/fscmRestApi/resources/11.13.18.05/recallInventoryOrganizations/{ParameterValueId}` | Get one recall inventory organization |

## r ec al lN ot ic es V2

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/recallLines/{LineId}/child/attachments` | Create an attachment |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/recallNoticeHeaderDFFs` | Create header level descriptive flexfields |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/attachments` | Create an attachment |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/recallLines/{LineId}/child/recallPartSerialNumbers` | Create serial numbers recalled by the source |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/recallContacts` | Create contacts |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/recallLines` | Create recall lines |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/recallBusinessUnits` | Create business unit assignments |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/recallLines/{LineId}/child/recallNoticeLineDFFs` | Create line level descriptive flexfields |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2` | Create recall headers |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/recallLines/{LineId}/child/recallLotNumbers/{LotId}/child/recallLotSerialNumbers` | Create serial numbers recalled by the source |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/recallLines/{LineId}/child/recallLotNumbers` | Create lot numbers recalled by the source |
| `GET` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/recallLines/action/findDuplicateRecallLotAndSerialNumbers` | Finds duplicate recalled lots and serials |
| `GET` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/recallLines/{LineId}/child/recallLotNumbers` | Get all recalled lot numbers |
| `GET` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/recallLines/{LineId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/recallNoticeHeaderDFFs/{HeaderId2}` | Delete a header level descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/recallLines/{LineId}/child/recallLotNumbers/{LotId}/child/recallLotSerialNumbers/{SerialId}` | Delete one serial number recalled by the source |
| `GET` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/recallLines/{LineId}/child/recallLotNumbers/{LotId}` | Delete one lot number recalled by the source |
| `GET` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/recallLines/{LineId}/child/recallLotNumbers/{LotId}/child/recallLotSerialNumbers` | Get all recalled serial numbers |
| `GET` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/recallLines/{LineId}/child/recallNoticeLineDFFs/{LineId2}` | Delete a line level descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/recallLines/{LineId}/child/attachments/{attachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/recallLines/{LineId}/child/recallNoticeLineDFFs` | Get all descriptive flexfields for recall lines |
| `GET` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/recallLines` | Get all recall lines |
| `GET` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/recallLines/{LineId}/child/attachments/{attachmentsUniqID}` | Delete an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/recallLines/{LineId}/child/attachments` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/recallContacts` | Get all contacts |
| `GET` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/attachments/{attachmentsUniqID}` | Delete an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/attachments/{attachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}` | Delete a recall header |
| `GET` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/attachments` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/recallLines/{LineId}/child/recallPartSerialNumbers` | Get all recalled serial numbers |
| `GET` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/action/submitLocatePartsEss` | Identify and locate recalled items |
| `GET` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/recallBusinessUnits/{RecBUAssignmentId}` | Delete one business unit assignment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/recallContacts/{ContactId}` | Delete a contact |
| `GET` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/recallBusinessUnits/{RecBUAssignmentId}` | Get one business unit assignment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/recallNoticeHeaderDFFs` | Get all descriptive flexfields for recall headers |
| `GET` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/recallLines/{LineId}/child/recallPartSerialNumbers/{SerialId}` | Delete one serial number recalled by the source |
| `GET` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/recallBusinessUnits` | Get all business unit assignments |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/recallLines/{LineId}/child/recallPartSerialNumbers/{SerialId}` | Update one serial number recalled by the source |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/action/raiseBusinessEvent` | Raises a business event |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}` | Update a recall header |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/recallLines/{LineId}/child/recallLotNumbers/{LotId}` | Update one lot number recalled by the source |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/recallLines/{LineId}/child/recallLotNumbers/{LotId}` | Get one recalled lot number |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/recallLines/{LineId}/child/recallPartSerialNumbers/{SerialId}` | Get one recalled serial number |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/recallLines/{LineId}/child/recallNoticeLineDFFs/{LineId2}` | Get one descriptive flexfield for recall line |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/recallLines/{LineId}/child/recallNoticeLineDFFs/{LineId2}` | Update a line level descriptive flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/recallNoticeHeaderDFFs/{HeaderId2}` | Update a header level descriptive flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/recallLines/{LineId}/child/recallLotNumbers/{LotId}/child/recallLotSerialNumbers/{SerialId}` | Update one serial number recalled by the source |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/recallLines/{LineId}` | Get one recall line |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/recallContacts/{ContactId}` | Get one contact |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/recallContacts/{ContactId}` | Update a contact |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/recallNoticeHeaderDFFs/{HeaderId2}` | Get one descriptive flexfield for recall header |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/recallLines/{LineId}/child/attachments/{attachmentsUniqID}` | Get an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/recallLines/{LineId}/child/attachments/{attachmentsUniqID}` | Update an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/recallLines/{LineId}/child/recallLotNumbers/{LotId}/child/recallLotSerialNumbers/{SerialId}` | Get one recalled serial number |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/attachments/{attachmentsUniqID}` | Get an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/recallLines/{LineId}` | Update one recall line |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/attachments/{attachmentsUniqID}` | Update an attachment |
| `POST` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/action/copyRecallNotice` | Copy one recall notice |
| `POST` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/action/findDuplicates` | Gets duplicate recall notices |
| `POST` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2` | Query all recall headers |
| `POST` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/recallLines/{LineId}` | Delete one recall line |
| `POST` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}` | Get one recall header |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/recallLines/{LineId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/recallLines/{LineId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Get a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/recallNoticesV2/{HeaderId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Get a FileContents |

## r ec al lP ar am et er s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/recallParameters/{ParameterId}` | Get one parameter |
| `GET` | `/fscmRestApi/resources/11.13.18.05/recallParameters` | Get all parameters |

## r ec al lP ro du ct Tr ac ea bi li ty Gr ou pi ng s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/recallProductTraceabilityGroupings` | Create groupings |
| `GET` | `/fscmRestApi/resources/11.13.18.05/recallProductTraceabilityGroupings` | Get all groupings |
| `GET` | `/fscmRestApi/resources/11.13.18.05/recallProductTraceabilityGroupings/{ParameterValueId}` | Delete the task group configured for an inventory organization |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/recallProductTraceabilityGroupings/{ParameterValueId}` | Update a grouping |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/recallProductTraceabilityGroupings/{ParameterValueId}` | Get one grouping |

## r ec al lT as kH is to ry

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/recallTaskHistory/{ActionId}/child/attachments` | Create an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/recallTaskHistory/{ActionId}/child/attachments/{attachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/recallTaskHistory/{ActionId}/child/attachments` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/recallTaskHistory/{ActionId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/recallTaskHistory/{ActionId}/child/attachments/{attachmentsUniqID}` | Delete an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/recallTaskHistory` | Get all tasks |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/recallTaskHistory/{ActionId}` | Get one task |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/recallTaskHistory/{ActionId}` | Update a task status |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/recallTaskHistory/{ActionId}/child/attachments/{attachmentsUniqID}` | Get an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/recallTaskHistory/{ActionId}/child/attachments/{attachmentsUniqID}` | Update an attachment |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/recallTaskHistory/{ActionId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Get a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/recallTaskHistory/{ActionId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |

## r ec al lT as ks

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/recallTasks/{TaskId}` | Get one recall task |
| `GET` | `/fscmRestApi/resources/11.13.18.05/recallTasks` | Get all recall tasks |

## r ec al lT ra ce St at us De ta il s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/recallTraceStatusDetails` | Get all trace status details |
| `POST` | `/fscmRestApi/resources/11.13.18.05/recallTraceStatusDetails/action/updateTraceDetailsResolution` | Recall Trace details Resolution |
| `POST` | `/fscmRestApi/resources/11.13.18.05/recallTraceStatusDetails/{recallTraceStatusDetailsUniqID}` | Get one trace status detail |

## r ec ei pt Ad vi ce Li ne s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/receiptAdviceLines/{receiptAdviceLinesUniqID}/child/manufacturerParts/{manufacturerPartsUniqID}` | Get one manufacturer part |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receiptAdviceLines/{receiptAdviceLinesUniqID}/child/reservations` | Get all reservations |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receiptAdviceLines/{receiptAdviceLinesUniqID}/child/reservations/{ReservationId}` | Get one reservation |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receiptAdviceLines/{receiptAdviceLinesUniqID}/child/lots/{lotsUniqID}/child/lotSerials/{lotSerialsUniqID}/child/serialStandardDFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receiptAdviceLines/{receiptAdviceLinesUniqID}/child/lots/{lotsUniqID}/child/lotSerials/{lotSerialsUniqID}/child/serialStandardDFF/{serialStandardDFFUniqID}` | Get one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receiptAdviceLines/{receiptAdviceLinesUniqID}/child/manufacturerParts` | Get all manufacturer parts |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receiptAdviceLines/{receiptAdviceLinesUniqID}/child/serials/{serialsUniqID}/child/serialAttributeDFF/{serialAttributeDFFUniqID}` | Get one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receiptAdviceLines/{receiptAdviceLinesUniqID}/child/serials/{serialsUniqID}/child/serialStandardDFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receiptAdviceLines/{receiptAdviceLinesUniqID}/child/serials/{serialsUniqID}/child/serialStandardDFF/{serialStandardDFFUniqID}` | Get one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receiptAdviceLines/{receiptAdviceLinesUniqID}/child/serials` | Get all serials |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receiptAdviceLines/{receiptAdviceLinesUniqID}/child/serials/{serialsUniqID}` | Get one serial |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receiptAdviceLines/{receiptAdviceLinesUniqID}/child/serials/{serialsUniqID}/child/serialAttributeDFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receiptAdviceLines/{receiptAdviceLinesUniqID}/child/lots/{lotsUniqID}/child/lotSerials/{lotSerialsUniqID}/child/serialAttributeDFF/{serialAttributeDFFUniqID}` | Get one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receiptAdviceLines/{receiptAdviceLinesUniqID}/child/lots` | Get all lots |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receiptAdviceLines/{receiptAdviceLinesUniqID}/child/lots/{lotsUniqID}` | Get one lot |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receiptAdviceLines/{receiptAdviceLinesUniqID}/child/lots/{lotsUniqID}/child/lotAttributeDFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receiptAdviceLines/action/generateReceiptAdviceLines` | Generate receipt advice lines |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receiptAdviceLines` | Get all receipt advice lines |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receiptAdviceLines/{receiptAdviceLinesUniqID}` | Get one receipt advice line |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receiptAdviceLines/{receiptAdviceLinesUniqID}/child/lots/{lotsUniqID}/child/lotSerials` | Get all serials |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receiptAdviceLines/{receiptAdviceLinesUniqID}/child/lots/{lotsUniqID}/child/lotSerials/{lotSerialsUniqID}` | Get one serial |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receiptAdviceLines/{receiptAdviceLinesUniqID}/child/lots/{lotsUniqID}/child/lotSerials/{lotSerialsUniqID}/child/serialAttributeDFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receiptAdviceLines/{receiptAdviceLinesUniqID}/child/lots/{lotsUniqID}/child/lotAttributeDFF/{lotAttributeDFFUniqID}` | Get one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receiptAdviceLines/{receiptAdviceLinesUniqID}/child/lots/{lotsUniqID}/child/lotStandardDFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receiptAdviceLines/{receiptAdviceLinesUniqID}/child/lots/{lotsUniqID}/child/lotStandardDFF/{lotStandardDFFUniqID}` | Get one flexfield |

## r ec ei pt Lo ts

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/receiptLots/{receiptLotsUniqID}` | Get one lot |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receiptLots` | Get all lots |

## r ec ei pt s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts/{GroupId}/child/receiptHeaders/{UniqueHeaderId}/child/receiptLines/{UniqueTransactionId}/child/lotSerialItemLots` | Get all lot information |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts/{GroupId}/child/receiptHeaders/{UniqueHeaderId}/child/receiptLines/{UniqueTransactionId}/child/lotSerialItemLots` | Create lot information |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts/{GroupId}/child/receiptHeaders/{UniqueHeaderId}/child/receiptLines/{UniqueTransactionId}/child/serialItemSerials/{serialItemSerialsUniqID}/child/serialItemSerialsDFF/{serialItemSerialsDFFUniqID}` | Get one serial resource flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts/{GroupId}/child/receiptHeaders/{UniqueHeaderId}/child/receiptLines/{UniqueTransactionId}/child/lotSerialItemLots/{lotSerialItemLotsUniqID}/child/lotSerialItemLotAttributesDFF` | Get all lot attribute flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts/{GroupId}/child/receiptHeaders/{UniqueHeaderId}/child/receiptLines/{UniqueTransactionId}/child/lotSerialItemLots/{lotSerialItemLotsUniqID}/child/lotSerialItemLotAttributesDFF` | Create one lot attribute flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts/{GroupId}/child/receiptHeaders/{UniqueHeaderId}/child/receiptLines/{UniqueTransactionId}/child/lotSerialItemLots/{lotSerialItemLotsUniqID}` | Get one lot for a receipt |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts/{GroupId}/child/receiptHeaders/{UniqueHeaderId}/child/receiptLines/{UniqueTransactionId}/child/serialItemSerials/{serialItemSerialsUniqID}/child/serialItemSerialAttributesDFF` | Get all serial attribute flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts/{GroupId}/child/receiptHeaders/{UniqueHeaderId}/child/receiptLines/{UniqueTransactionId}/child/serialItemSerials/{serialItemSerialsUniqID}/child/serialItemSerialAttributesDFF` | Create one serial attribute flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts/{GroupId}/child/receiptHeaders/{UniqueHeaderId}/child/receiptLines/{UniqueTransactionId}/child/serialItemSerials/{serialItemSerialsUniqID}` | Get one serial for a receipt |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts/{GroupId}/child/receiptHeaders/{UniqueHeaderId}/child/receiptLines/{UniqueTransactionId}/child/serialItemSerials/{serialItemSerialsUniqID}/child/serialItemSerialsDFF` | Get all serial resource flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts/{GroupId}/child/receiptHeaders/{UniqueHeaderId}/child/receiptLines/{UniqueTransactionId}/child/serialItemSerials/{serialItemSerialsUniqID}/child/serialItemSerialsDFF` | Create one serial resource flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts/{GroupId}/child/receiptHeaders/{UniqueHeaderId}/child/receiptLines/{UniqueTransactionId}/child/serialItemSerials/{serialItemSerialsUniqID}/child/serialItemSerialAttributesDFF/{serialItemSerialAttributesDFFUniqID}` | Get one serial attribute flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts/{GroupId}/child/receiptHeaders/{UniqueHeaderId}/child/receiptLines/{UniqueTransactionId}/child/lotSerialItemLots/{lotSerialItemLotsUniqID}/child/lotSerialItemLotAttributesDFF/{lotSerialItemLotAttributesDFFUniqID}` | Get one lot attribute flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts/{GroupId}/child/receiptHeaders/{UniqueHeaderId}/child/receiptLines/{UniqueTransactionId}/child/lotSerialItemLots/{lotSerialItemLotsUniqID}/child/lotSerialItemSerials/{lotSerialItemSerialsUniqID}/child/lotSerialItemSerialAttributesDFF/{lotSerialItemSerialAttributesDFFUniqID}` | Get one serial attribute flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts/{GroupId}/child/receiptHeaders/{UniqueHeaderId}/child/receiptLines/{UniqueTransactionId}/child/lotSerialItemLots/{lotSerialItemLotsUniqID}/child/lotSerialItemSerials/{lotSerialItemSerialsUniqID}/child/lotSerialItemSerialAttributesDFF` | Get all serial attribute flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts/{GroupId}/child/receiptHeaders/{UniqueHeaderId}/child/receiptLines/{UniqueTransactionId}/child/lotSerialItemLots/{lotSerialItemLotsUniqID}/child/lotSerialItemSerials/{lotSerialItemSerialsUniqID}/child/lotSerialItemSerialAttributesDFF` | Create one serial attribute flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts/{GroupId}/child/receiptHeaders/{UniqueHeaderId}/child/receiptLines/{UniqueTransactionId}/child/lotSerialItemLots/{lotSerialItemLotsUniqID}/child/lotSerialItemSerials/{lotSerialItemSerialsUniqID}/child/lotSerialItemSerialsDFF/{lotSerialItemSerialsDFFUniqID}` | Get one serial resource flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts/{GroupId}/child/receiptHeaders/{UniqueHeaderId}/child/receiptLines/{UniqueTransactionId}/child/lotSerialItemLots/{lotSerialItemLotsUniqID}/child/lotSerialItemSerials/{lotSerialItemSerialsUniqID}/child/lotSerialItemSerialsDFF` | Get all serial resource flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts/{GroupId}/child/receiptHeaders/{UniqueHeaderId}/child/receiptLines/{UniqueTransactionId}/child/lotSerialItemLots/{lotSerialItemLotsUniqID}/child/lotSerialItemSerials/{lotSerialItemSerialsUniqID}/child/lotSerialItemSerialsDFF` | Create one serial resource flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts/{GroupId}/child/receiptHeaders/{UniqueHeaderId}/child/receiptLines/{UniqueTransactionId}/child/lotSerialItemLots/{lotSerialItemLotsUniqID}/child/lotSerialItemLotsDFF/{lotSerialItemLotsDFFUniqID}` | Get one lot resource flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts/{GroupId}/child/receiptHeaders/{UniqueHeaderId}/child/receiptLines/{UniqueTransactionId}/child/lotSerialItemLots/{lotSerialItemLotsUniqID}/child/lotSerialItemLotsDFF` | Get all lot resource flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts/{GroupId}/child/receiptHeaders/{UniqueHeaderId}/child/receiptLines/{UniqueTransactionId}/child/lotSerialItemLots/{lotSerialItemLotsUniqID}/child/lotSerialItemLotsDFF` | Create one lot resource flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts/{GroupId}/child/receiptHeaders/{UniqueHeaderId}/child/receiptLines/{UniqueTransactionId}/child/lotSerialItemLots/{lotSerialItemLotsUniqID}/child/lotSerialItemSerials/{lotSerialItemSerialsUniqID}` | Get one serial number |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts/{GroupId}/child/receiptHeaders/{UniqueHeaderId}/child/receiptLines/{UniqueTransactionId}/child/lotSerialItemLots/{lotSerialItemLotsUniqID}/child/lotSerialItemSerials` | Get all serial numbers |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts/{GroupId}/child/receiptHeaders/{UniqueHeaderId}/child/receiptLines/{UniqueTransactionId}/child/lotSerialItemLots/{lotSerialItemLotsUniqID}/child/lotSerialItemSerials` | Create serial numbers |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts/{GroupId}/child/receiptHeaders/{UniqueHeaderId}/child/receiptLines/{UniqueTransactionId}/child/serialItemSerials` | Get all serials for multiple receipts |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts/{GroupId}/child/receiptHeaders/{UniqueHeaderId}/child/receiptHeaderDFF/{receiptHeaderDFFUniqID}` | Get one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts/{GroupId}/child/receiptHeaders/{UniqueHeaderId}/child/receiptHeaderDFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts/{GroupId}/child/receiptHeaders/{UniqueHeaderId}/child/receiptHeaderDFF` | Create flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts/{GroupId}/child/receiptHeaders/{UniqueHeaderId}/child/receiptLines/{UniqueTransactionId}` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts/{GroupId}/child/receiptHeaders/{UniqueHeaderId}/child/receiptLines` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts/{GroupId}/child/receiptHeaders/{UniqueHeaderId}/child/receiptLines` | Create lines |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts/{GroupId}` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts` | Create receipts |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts/{GroupId}/child/receiptHeaders/{UniqueHeaderId}` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts/{GroupId}/child/receiptHeaders` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts/{GroupId}/child/receiptHeaders` | Create headers |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts/{GroupId}/child/receiptHeaders/{UniqueHeaderId}/child/receiptLines/{UniqueTransactionId}/child/receiptTransactionDFF` | Create flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts/{GroupId}/child/receiptHeaders/{UniqueHeaderId}/child/receiptLines/{UniqueTransactionId}/child/lotItemLots/{lotItemLotsUniqID}/child/lotItemLotsDFF` | Create one lot resource flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts/{GroupId}/child/receiptHeaders/{UniqueHeaderId}/child/receiptLines/{UniqueTransactionId}/child/lotItemLots/{lotItemLotsUniqID}/child/lotItemLotAttributesDFF/{lotItemLotAttributesDFFUniqID}` | Get one lot attribute flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts/{GroupId}/child/receiptHeaders/{UniqueHeaderId}/child/receiptLines/{UniqueTransactionId}/child/lotItemLots/{lotItemLotsUniqID}/child/lotItemLotAttributesDFF` | Get all lot attribute flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts/{GroupId}/child/receiptHeaders/{UniqueHeaderId}/child/receiptLines/{UniqueTransactionId}/child/serialItemSerials` | Create serial information |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts/{GroupId}/child/receiptHeaders/{UniqueHeaderId}/child/receiptLines/{UniqueTransactionId}/child/lotItemLots/{lotItemLotsUniqID}/child/lotItemLotsDFF/{lotItemLotsDFFUniqID}` | Get one lot resource flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts/{GroupId}/child/receiptHeaders/{UniqueHeaderId}/child/receiptLines/{UniqueTransactionId}/child/lotItemLots/{lotItemLotsUniqID}/child/lotItemLotsDFF` | Get all lot resource flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts/{GroupId}/child/receiptHeaders/{UniqueHeaderId}/child/receiptLines/{UniqueTransactionId}/child/lotItemLots` | Create lot information |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts/{GroupId}/child/receiptHeaders/{UniqueHeaderId}/child/receiptLines/{UniqueTransactionId}/child/receiptTransactionDFF/{receiptTransactionDFFUniqID}` | Get one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts/{GroupId}/child/receiptHeaders/{UniqueHeaderId}/child/receiptLines/{UniqueTransactionId}/child/receiptTransactionDFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts/{GroupId}/child/receiptHeaders/{UniqueHeaderId}/child/receiptLines/{UniqueTransactionId}/child/lotItemLots/{lotItemLotsUniqID}/child/lotItemLotAttributesDFF` | Create one lot attribute flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts/{GroupId}/child/receiptHeaders/{UniqueHeaderId}/child/receiptLines/{UniqueTransactionId}/child/lotItemLots/{lotItemLotsUniqID}` | Get one lot information |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receipts/{GroupId}/child/receiptHeaders/{UniqueHeaderId}/child/receiptLines/{UniqueTransactionId}/child/lotItemLots` | Get all lot information |

## r ec ei vi ng Co un tr ie sO fO ri gi n

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivingCountriesOfOrigin/{TerritoryCode}` | Get one country |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivingCountriesOfOrigin` | Get all countries |

## r ec ei vi ng Pa ra me te rs

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivingParameters/{receivingParametersUniqID}` | Get one parameter |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivingParameters` | Get all parameters |

## r ec ei vi ng Tr an sa ct io ns Hi st or y

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/receivingTransactionsHistory/{TransactionId}/child/receiptAttachments/{receiptAttachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/receivingTransactionsHistory/{TransactionId}/child/transactionAttachments` | Create an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivingTransactionsHistory/{TransactionId}/child/lots/{lotsUniqID}/child/lotSerials` | Get all serials |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivingTransactionsHistory/{TransactionId}/child/lots/{lotsUniqID}/child/lotSerials/{lotSerialsUniqID}` | Get one serial |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivingTransactionsHistory/{TransactionId}/child/lots/{lotsUniqID}/child/lotSerials/{lotSerialsUniqID}/child/lotSerialAttributeDFFs` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivingTransactionsHistory/{TransactionId}/child/lots/{lotsUniqID}/child/lotSerials/{lotSerialsUniqID}/child/lotSerialAttributeDFFs/{lotSerialAttributeDFFsUniqID}` | Get one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivingTransactionsHistory/{TransactionId}/child/lots/{lotsUniqID}/child/lotAttributeDFFs` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivingTransactionsHistory/{TransactionId}/child/lots/{lotsUniqID}` | Get one lot |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivingTransactionsHistory/{TransactionId}/child/lots/{lotsUniqID}/child/lotAttributeDFFs/{lotAttributeDFFsUniqID}` | Get one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivingTransactionsHistory/{TransactionId}/child/lots/{lotsUniqID}/child/lotStandardDFFs/{lotStandardDFFsUniqID}` | Get one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivingTransactionsHistory/{TransactionId}/child/lots/{lotsUniqID}/child/lotStandardDFFs` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivingTransactionsHistory/{TransactionId}/child/serials/{serialsUniqID}/child/serialAttributeDFFs/{serialAttributeDFFsUniqID}` | Get one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivingTransactionsHistory/{TransactionId}/child/serials/{serialsUniqID}/child/serialAttributeDFFs` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivingTransactionsHistory/{TransactionId}/child/serials/{serialsUniqID}/child/serialStandardDFFs/{serialStandardDFFsUniqID}` | Get one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivingTransactionsHistory/{TransactionId}/child/serials/{serialsUniqID}/child/serialStandardDFFs` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivingTransactionsHistory/{TransactionId}/child/serials/{serialsUniqID}` | Get one serial |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivingTransactionsHistory/{TransactionId}/child/lots/{lotsUniqID}/child/lotSerials/{lotSerialsUniqID}/child/lotSerialStandardDFFs/{lotSerialStandardDFFsUniqID}` | Get one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivingTransactionsHistory/{TransactionId}/child/lots/{lotsUniqID}/child/lotSerials/{lotSerialsUniqID}/child/lotSerialStandardDFFs` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivingTransactionsHistory/{TransactionId}/child/serials` | Get all serials |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivingTransactionsHistory/{TransactionId}/child/transactionDFFs` | Get all descriptive flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivingTransactionsHistory/{TransactionId}/child/lots` | Get all lots |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivingTransactionsHistory/{TransactionId}/child/transactionAttachments/{receiptAttachmentsUniqID}` | Get an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivingTransactionsHistory/{TransactionId}/child/receiptAttachments/{receiptAttachmentsUniqID}` | Get an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivingTransactionsHistory/{TransactionId}/child/receiptAttachments/{receiptAttachmentsUniqID}/enclosure/FileContents` | Get a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivingTransactionsHistory/{TransactionId}/child/transactionAttachments/{receiptAttachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivingTransactionsHistory/{TransactionId}/child/transactionAttachments` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivingTransactionsHistory/{TransactionId}` | Get one transaction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivingTransactionsHistory` | Get all transactions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivingTransactionsHistory/{TransactionId}/child/receiptAttachments` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivingTransactionsHistory/{TransactionId}/child/transactionAttachments/{receiptAttachmentsUniqID}` | Delete an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivingTransactionsHistory/{TransactionId}/child/transactionAttachments/{receiptAttachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivingTransactionsHistory/{TransactionId}/child/inventoryStripingDFF/{TransactionId2}` | Get one descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivingTransactionsHistory/{TransactionId}/child/receiptDFF` | Get all receipt header flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivingTransactionsHistory/{TransactionId}/child/inventoryStripingDFF` | Get all descriptive flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivingTransactionsHistory/{TransactionId}/child/receiptDFF/{ShipmentHeaderId}` | Get one receipt header flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/receivingTransactionsHistory/{TransactionId}/child/receiptAttachments/{receiptAttachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/receivingTransactionsHistory/{TransactionId}/child/transactionDFFs/{TransactionId3}` | Update one descriptive flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/receivingTransactionsHistory/{TransactionId}/child/transactionDFFs/{TransactionId3}` | Get one descriptive flexfield |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/receivingTransactionsHistory/{TransactionId}/child/transactionAttachments/{receiptAttachmentsUniqID}/enclosure/FileContents` | Get a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/receivingTransactionsHistory/{TransactionId}/child/transactionAttachments/{receiptAttachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/receivingTransactionsHistory/{TransactionId}/child/receiptAttachments/{receiptAttachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |

## r el at ed It em Re la ti on sh ip s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/relatedItemRelationships` | Create relationships |
| `GET` | `/fscmRestApi/resources/11.13.18.05/relatedItemRelationships/{ItemRelationshipId}/child/DFF` | Get all descriptive flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/relatedItemRelationships/{ItemRelationshipId}/child/DFF` | Create descriptive flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/relatedItemRelationships/{ItemRelationshipId}/child/translatableAttributes` | Get all translatable attributes |
| `GET` | `/fscmRestApi/resources/11.13.18.05/relatedItemRelationships/{ItemRelationshipId}/child/translatableAttributes` | Create translatable attributes |
| `GET` | `/fscmRestApi/resources/11.13.18.05/relatedItemRelationships/{ItemRelationshipId}` | Delete a relationship |
| `GET` | `/fscmRestApi/resources/11.13.18.05/relatedItemRelationships` | Get all relationships |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/relatedItemRelationships/{ItemRelationshipId}/child/translatableAttributes/{translatableAttributesUniqID}` | Update a translatable attribute |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/relatedItemRelationships/{ItemRelationshipId}/child/translatableAttributes/{translatableAttributesUniqID}` | Get one translatable attribute |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/relatedItemRelationships/{ItemRelationshipId}` | Get one relationship |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/relatedItemRelationships/{ItemRelationshipId}` | Update a relationship |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/relatedItemRelationships/{ItemRelationshipId}/child/DFF/{ItemRelationshipId2}` | Update a descriptive flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/relatedItemRelationships/{ItemRelationshipId}/child/DFF/{ItemRelationshipId2}` | Get one descriptive flexfield |

## r el at ed It em Ty pe s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/relatedItemTypes` | Get all related item types |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/relatedItemTypes/{relatedItemTypesUniqID}` | Update a cyclic relationship setup |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/relatedItemTypes/{relatedItemTypesUniqID}` | Get one related item type |

## r el ea se Ru le s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/releaseRules/{ReleaseRuleId}/child/DFF` | Create flexfields |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/releaseRules` | Create release rules |
| `GET` | `/fscmRestApi/resources/11.13.18.05/releaseRules/{ReleaseRuleId}/child/DFF/{PickingRuleId}` | Delete one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/releaseRules/{ReleaseRuleId}/child/DFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/releaseRules/{ReleaseRuleId}` | Delete one release rule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/releaseRules` | Get all release rules |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/releaseRules/{ReleaseRuleId}/child/DFF/{PickingRuleId}` | Update one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/releaseRules/{ReleaseRuleId}/child/DFF/{PickingRuleId}` | Get one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/releaseRules/{ReleaseRuleId}` | Get one release rule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/releaseRules/{ReleaseRuleId}` | Update one release rule |

## r el ea se Se qu en ce Ru le s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/releaseSequenceRules/{PickSequenceRuleId}/child/sequenceDFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/releaseSequenceRules/{PickSequenceRuleId}/child/sequenceDFF` | Create flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/releaseSequenceRules` | Create release sequence rules |
| `GET` | `/fscmRestApi/resources/11.13.18.05/releaseSequenceRules` | Get all release sequence rules |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/releaseSequenceRules/{PickSequenceRuleId}/child/sequenceDFF/{PickSequenceRuleId2}` | Update one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/releaseSequenceRules/{PickSequenceRuleId}/child/sequenceDFF/{PickSequenceRuleId2}` | Get one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/releaseSequenceRules/{PickSequenceRuleId}` | Get one release sequence rule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/releaseSequenceRules/{PickSequenceRuleId}` | Update one release sequence rule |

## r ep le ni sh me nt Po li cy Co mp ar is on s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/replenishmentPolicyComparisons/{replenishmentPolicyComparisonsUniqID}/child/AcceptAllExecute` | Get all records for accept all process |
| `GET` | `/fscmRestApi/resources/11.13.18.05/replenishmentPolicyComparisons/{replenishmentPolicyComparisonsUniqID}/child/PublishParExecute` | Get all records for publish par policies process |
| `GET` | `/fscmRestApi/resources/11.13.18.05/replenishmentPolicyComparisons/{replenishmentPolicyComparisonsUniqID}/child/UpdatePoliciesExecute` | Get all records for update policies process |
| `GET` | `/fscmRestApi/resources/11.13.18.05/replenishmentPolicyComparisons` | Get all records for policy comparison |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/replenishmentPolicyComparisons/{replenishmentPolicyComparisonsUniqID}` | Get one record for policy comparison |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/replenishmentPolicyComparisons/{replenishmentPolicyComparisonsUniqID}` | Update one record for policy comparison |
| `POST` | `/fscmRestApi/resources/11.13.18.05/replenishmentPolicyComparisons/{replenishmentPolicyComparisonsUniqID}/child/UpdatePoliciesExecute/{PlanId}` | Get one record for update policies process |
| `POST` | `/fscmRestApi/resources/11.13.18.05/replenishmentPolicyComparisons/{replenishmentPolicyComparisonsUniqID}/child/UpdatePoliciesExecute` | Update all records for update policies process |
| `POST` | `/fscmRestApi/resources/11.13.18.05/replenishmentPolicyComparisons/{replenishmentPolicyComparisonsUniqID}/child/PublishParExecute` | Update all records for publish par policies process |
| `POST` | `/fscmRestApi/resources/11.13.18.05/replenishmentPolicyComparisons/{replenishmentPolicyComparisonsUniqID}/child/AcceptAllExecute/{AcceptAllExecuteUniqID}` | Get one record for accept all process |
| `POST` | `/fscmRestApi/resources/11.13.18.05/replenishmentPolicyComparisons/{replenishmentPolicyComparisonsUniqID}/child/AcceptAllExecute` | Update all records for accept all process |
| `POST` | `/fscmRestApi/resources/11.13.18.05/replenishmentPolicyComparisons/{replenishmentPolicyComparisonsUniqID}/child/PublishParExecute/{PlanId}` | Get one record for publish par policies process |

## r es er ve dC ou nt ri es Of Or ig in

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/reservedCountriesOfOrigin/{CountryOfOriginCode}` | Get one country of origin |
| `GET` | `/fscmRestApi/resources/11.13.18.05/reservedCountriesOfOrigin` | Get all country of origin |

## r es et Pl an Ap pr ov al s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/resetPlanApprovals` | Get all plans reset approval status |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/resetPlanApprovals/{PlanId}` | Reset approval status for a plan |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/resetPlanApprovals/{PlanId}` | Get one plan reset approval status |

## r et ur nR ou ti ng Ge og ra ph ie sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/returnRoutingGeographiesLOV/{GeographyId}` | Get one geography |
| `GET` | `/fscmRestApi/resources/11.13.18.05/returnRoutingGeographiesLOV` | Get all geographies |

## r et ur nS er ia ls

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/returnSerials/{returnSerialsUniqID}` | Get one serial |
| `GET` | `/fscmRestApi/resources/11.13.18.05/returnSerials` | Get all serials |

## r et ur nS er ia ls Fo rL ot s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/returnSerialsForLots/{returnSerialsForLotsUniqID}` | Get one serial |
| `GET` | `/fscmRestApi/resources/11.13.18.05/returnSerialsForLots` | Get all serials |

## r ma Re ce ip tS er ia ls

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/rmaReceiptSerials/{rmaReceiptSerialsUniqID}` | Get one serial |
| `GET` | `/fscmRestApi/resources/11.13.18.05/rmaReceiptSerials` | Get all serials |

## s al es Or de rA ct io nR eq ue st s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/salesOrderActionRequests/{ActionRequestId}/child/requests/{ActionRequestId2}/child/messageDetails/{MessageId}` | Get details of one message for an action request |
| `GET` | `/fscmRestApi/resources/11.13.18.05/salesOrderActionRequests/{ActionRequestId}/child/requests/{ActionRequestId2}/child/messageDetails` | Get details of all messages for an action request |
| `GET` | `/fscmRestApi/resources/11.13.18.05/salesOrderActionRequests/{ActionRequestId}/child/requests/{ActionRequestId2}` | Get one request |
| `GET` | `/fscmRestApi/resources/11.13.18.05/salesOrderActionRequests/{ActionRequestId}/child/requests/{ActionRequestId2}/child/orderDetails/{HeaderId}` | Get one sales order details |
| `GET` | `/fscmRestApi/resources/11.13.18.05/salesOrderActionRequests/{ActionRequestId}/child/requests/{ActionRequestId2}/child/orderLineDetails` | Get order line details of all lines |
| `GET` | `/fscmRestApi/resources/11.13.18.05/salesOrderActionRequests/{ActionRequestId}/child/requests/{ActionRequestId2}/child/orderLineDetails/{FulfillLineId}` | Get one order line details |
| `GET` | `/fscmRestApi/resources/11.13.18.05/salesOrderActionRequests/{ActionRequestId}/child/requests/{ActionRequestId2}/child/orderDetails` | Get order details of all sales orders |
| `GET` | `/fscmRestApi/resources/11.13.18.05/salesOrderActionRequests/{ActionRequestId}/child/requests` | Get all requests |
| `GET` | `/fscmRestApi/resources/11.13.18.05/salesOrderActionRequests/{ActionRequestId}` | Get one sales order action request |
| `GET` | `/fscmRestApi/resources/11.13.18.05/salesOrderActionRequests` | Get all sales order action requests |
| `GET` | `/fscmRestApi/resources/11.13.18.05/salesOrderActionRequests` | Create one sales action request |
| `GET` | `/fscmRestApi/resources/11.13.18.05/salesOrderActionRequests/{ActionRequestId}/child/manualPriceAdjustments` | Create all adjustments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/salesOrderActionRequests/{ActionRequestId}/child/requests` | Create one request |
| `GET` | `/fscmRestApi/resources/11.13.18.05/salesOrderActionRequests/{ActionRequestId}/child/manualPriceAdjustments/{manualPriceAdjustmentsUniqID}` | Get one adjustment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/salesOrderActionRequests/{ActionRequestId}/child/manualPriceAdjustments` | Get all adjustments |

## s am pl es LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/samplesLOV/{SampleId}` | Get one sample |
| `GET` | `/fscmRestApi/resources/11.13.18.05/samplesLOV` | Get all samples |

## s ch ed ul es

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/schedules/{ScheduleId}/child/scheduleWorkdayPatterns` | Create workday patterns assigned to a schedule |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/schedules/{ScheduleId}/child/scheduleExceptionAssociations` | Create schedule exceptions assigned to a schedule |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/schedules` | Create schedules |
| `GET` | `/fscmRestApi/resources/11.13.18.05/schedules/{ScheduleId}/child/scheduleExceptionAssociations/{ScheduleExceptionAssociationId}` | Delete one schedule exception assigned to a schedule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/schedules/{ScheduleId}/child/scheduleWorkdayPatterns/{SchedulePatternId}` | Delete one workday pattern assigned to a schedule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/schedules/{ScheduleId}/child/scheduleWorkdayPatterns` | Get all workday patterns assigned to a schedule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/schedules/{ScheduleId}/child/scheduleExceptionAssociations` | Get all schedule exceptions assigned to a schedule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/schedules/{ScheduleId}` | Delete one schedule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/schedules/action/allShiftsInSchedule` | Get all shifts in the schedule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/schedules/{ScheduleId}/child/scheduleWorkdayPatterns/{SchedulePatternId}` | Update one workday pattern assigned to a schedule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/schedules/{ScheduleId}/child/scheduleWorkdayPatterns/{SchedulePatternId}` | Get one workday pattern assigned to a schedule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/schedules/{ScheduleId}` | Update one schedule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/schedules/{ScheduleId}/child/scheduleExceptionAssociations/{ScheduleExceptionAssociationId}` | Get one schedule exception assigned to a schedule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/schedules/{ScheduleId}` | Get one schedule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/schedules/{ScheduleId}/child/scheduleExceptionAssociations/{ScheduleExceptionAssociationId}` | Update one schedule exception assigned to a schedule |
| `POST` | `/fscmRestApi/resources/11.13.18.05/schedules` | Get all schedules |

## s cp De ma nd Pr io ri ty Ru le s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/scpDemandPriorityRules/{RuleId}/child/scpDemandPriorityAttributes` | Create a demand priority attribute in a demand priority rule |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/scpDemandPriorityRules` | Create a demand priority rule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/scpDemandPriorityRules/{RuleId}/child/scpDemandPriorityAttributes/{AttributeId}` | Delete a demand priority attribute from a demand priority rule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/scpDemandPriorityRules/{RuleId}/child/scpDemandPriorityAttributes/{AttributeId}/child/scpDemandPriorityAttributeDetails/{AttributeSequenceId}` | Get one demand priority attribute detail |
| `GET` | `/fscmRestApi/resources/11.13.18.05/scpDemandPriorityRules/{RuleId}/child/scpDemandPriorityAttributes/{AttributeId}/child/scpDemandPriorityAttributeDetails` | Get all demand priority attribute details |
| `GET` | `/fscmRestApi/resources/11.13.18.05/scpDemandPriorityRules/{RuleId}/child/scpDemandPriorityAttributes` | Get all demand priority attributes from a demand priority rule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/scpDemandPriorityRules` | Get all demand priority rules |
| `GET` | `/fscmRestApi/resources/11.13.18.05/scpDemandPriorityRules/{RuleId}` | Delete a demand priority rule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/scpDemandPriorityRules/{RuleId}` | Update a demand priority rule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/scpDemandPriorityRules/{RuleId}/child/scpDemandPriorityAttributes/{AttributeId}` | Update a demand priority attribute in a demand priority rule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/scpDemandPriorityRules/{RuleId}` | Get one demand priority rule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/scpDemandPriorityRules/{RuleId}/child/scpDemandPriorityAttributes/{AttributeId}` | Get one demand priority attribute from a demand priority rule |

## s cp Or ga ni za ti on sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/scpOrganizationsLOV/{Id}` | Get one organization |
| `GET` | `/fscmRestApi/resources/11.13.18.05/scpOrganizationsLOV` | Get all organizations |

## s cp Su pp li er Si te sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/scpSupplierSitesLOV/{Id}` | Get one supplier site |
| `GET` | `/fscmRestApi/resources/11.13.18.05/scpSupplierSitesLOV` | Get all supplier sites |

## s cp Su pp li er sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/scpSuppliersLOV/{Id}` | Get one supplier |
| `GET` | `/fscmRestApi/resources/11.13.18.05/scpSuppliersLOV` | Get all suppliers |

## s er vi ce Ac ti vi ti es LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/serviceActivitiesLOV/{ServiceActivityId}` | Get one activity |
| `GET` | `/fscmRestApi/resources/11.13.18.05/serviceActivitiesLOV` | Get all activities |

## s er vi ce Lo gi st ic sI te mC at eg or ie sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/serviceLogisticsItemCategoriesLOV/{serviceLogisticsItemCategoriesLOVUniqID}` | Get one item category |
| `GET` | `/fscmRestApi/resources/11.13.18.05/serviceLogisticsItemCategoriesLOV` | Get all item categories |

## s er vi ce Lo gi st ic sP er so ns LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/serviceLogisticsPersonsLOV/{PartyId}` | Get one person |
| `GET` | `/fscmRestApi/resources/11.13.18.05/serviceLogisticsPersonsLOV` | Get all persons |

## s er vi ce Lo gi st ic sS ub in ve nt or ie sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/serviceLogisticsSubinventoriesLOV/{serviceLogisticsSubinventoriesLOVUniqID}` | Get one subinventory |
| `GET` | `/fscmRestApi/resources/11.13.18.05/serviceLogisticsSubinventoriesLOV` | Get all subinventories |

## s hi pm en tL in eC ha ng eR eq ue st s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/{TransactionId}/child/shipmentLines/{shipmentLinesUniqID}/child/wshInvStripingDFF` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/{TransactionId}/child/shipmentLines/{shipmentLinesUniqID}/child/wshInvStripingDFF` | Create requests to change flexfields for inventory attributes |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/{TransactionId}/child/shipmentLines/{shipmentLinesUniqID}/child/attachments/{attachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/{TransactionId}/child/shipmentLines/{shipmentLinesUniqID}/child/DFF` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/{TransactionId}/child/shipmentLines/{shipmentLinesUniqID}/child/DFF` | Create requests to change flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/{TransactionId}/child/shipmentLines/{shipmentLinesUniqID}/child/wshInvStripingDFF/{DeliveryDetailInterfaceId}` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/{TransactionId}/child/shipmentLines/{shipmentLinesUniqID}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/{TransactionId}/child/shipmentLines/{shipmentLinesUniqID}` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/{TransactionId}/child/shipmentLines` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/{TransactionId}/child/shipmentLines/{shipmentLinesUniqID}/child/serials/{serialsUniqID}/child/standardDFF/{standardDFFUniqID}` | Get one serial resource flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/{TransactionId}/child/shipmentLines/{shipmentLinesUniqID}/child/attachments/{attachmentsUniqID}` | Get an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/{TransactionId}/child/shipmentLines/{shipmentLinesUniqID}/child/attachments` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/{TransactionId}/child/shipmentLines/{shipmentLinesUniqID}/child/attachments` | Create an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/{TransactionId}/child/shipmentLines/{shipmentLinesUniqID}/child/serials/{serialsUniqID}/child/attributeDFF` | Get all serial attribute flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/{TransactionId}/child/shipmentLines/{shipmentLinesUniqID}/child/serials/{serialsUniqID}/child/attributeDFF` | Create one serial attribute flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/{TransactionId}/child/shipmentLines/{shipmentLinesUniqID}/child/serials/{serialsUniqID}` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/{TransactionId}/child/shipmentLines/{shipmentLinesUniqID}/child/serials/{serialsUniqID}/child/standardDFF` | Get all serial resource flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/{TransactionId}/child/shipmentLines/{shipmentLinesUniqID}/child/serials/{serialsUniqID}/child/standardDFF` | Create one serial resource flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/{TransactionId}/child/shipmentLines/{shipmentLinesUniqID}/child/serials/{serialsUniqID}/child/attributeDFF/{attributeDFFUniqID}` | Get one serial attribute flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/{TransactionId}/child/shipmentLines/{shipmentLinesUniqID}/child/serials` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/{TransactionId}/child/shipmentLines/{shipmentLinesUniqID}/child/notes/{NoteId}` | Get a note object |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/{TransactionId}/child/shipmentLines/{shipmentLinesUniqID}/child/notes` | Create a note |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/{TransactionId}/child/shipmentLines/{shipmentLinesUniqID}/child/DFF/{DeliveryDetailInterfaceId}` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/{TransactionId}/child/shipmentLines/{shipmentLinesUniqID}/child/serials` | Create requests to change serials |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/{TransactionId}/child/shipmentLines/{shipmentLinesUniqID}/child/notes/{NoteId}/enclosure/NoteTxt` | Delete a NoteTxt |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/{TransactionId}/child/shipmentLines/{shipmentLinesUniqID}/child/notes` | Get all note objects |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/action/generateShipmentRequest` | Generate a shipment request |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/{TransactionId}/child/shipmentLines` | Create requests to change shipment lines |
| `POST` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/action/autoCreate` | Create shipments for shipment lines or packing units |
| `POST` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/{TransactionId}` | GET action not supported |
| `POST` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/action/pickRelease` | Pick release shipment lines or packing units |
| `POST` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/action/loadAssignments` | Perform load assignments for shipment lines and packing units |
| `POST` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/action/pack` | Pack shipment lines or packing units |
| `POST` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests` | Create one request |
| `POST` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/action/backorderLine` | Backorder a shipment line |
| `POST` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/action/autoPack` | Automatically pack shipment lines or packing units |
| `POST` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/action/assign` | Add shipment lines or packing units to a shipment |
| `POST` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/action/backorderLineFromLPN` | Backorder a shipment line packed in LPN |
| `POST` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/action/checkTradeCompliance` | Check for trade compliance |
| `POST` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/action/changeTransportationPlan` | Change transportation plan for shipment lines |
| `POST` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/action/backorderAll` | Backorder multiple shipment lines |
| `POST` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/action/stage` | Stage shipment lines |
| `POST` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/action/cycleCount` | Submit cycle count for a shipment line |
| `POST` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/action/splitToMultipleLines` | Split a shipment line into multiple lines |
| `POST` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/action/split` | Split one shipment line |
| `POST` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/action/unpack` | Unpack shipment lines or packing units |
| `POST` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/action/unassign` | Unassign shipment lines or packing units from a shipment |
| `POST` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/action/cycleCountAll` | Submit LPN for cycle count |
| `POST` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/action/submitForApproval` | Submit shipment lines for approval |
| `POST` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/action/cycleCountLineFromLPN` | Submit shipment lines packed in LPN for cycle count |
| `POST` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/action/rePackLPN` | Repack shipment lines packed in an LPN |
| `POST` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/action/resetIntegrationStatus` | Reset integration status |
| `POST` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/action/resetQuickshipStatus` | Reset quick ship status |
| `POST` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/action/resetWeightVolume` | Reset weight and volume |
| `POST` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/action/confirm` | Ship confirm shipment lines |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/{TransactionId}/child/shipmentLines/{shipmentLinesUniqID}/child/notes/{NoteId}/enclosure/NoteTxt` | Replace a NoteTxt |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/{TransactionId}/child/shipmentLines/{shipmentLinesUniqID}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Get a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/{TransactionId}/child/shipmentLines/{shipmentLinesUniqID}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/shipmentLineChangeRequests/{TransactionId}/child/shipmentLines/{shipmentLinesUniqID}/child/notes/{NoteId}/enclosure/NoteTxt` | Get a NoteTxt |

## s hi pm en tL in eT ra ns ac ti on Re qu es ts

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineTransactionRequests/{TransactionId}/child/shipmentLines/{DeliveryDetailInterfaceId}/child/DFF` | Create requests to change flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineTransactionRequests/{TransactionId}/child/shipmentLines/{DeliveryDetailInterfaceId}/child/DFF` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineTransactionRequests/{TransactionId}/child/shipmentLines/{DeliveryDetailInterfaceId}/child/DFF/{DeliveryDetailInterfaceId2}` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineTransactionRequests/{TransactionId}/child/shipmentLines/{DeliveryDetailInterfaceId}/child/attachments/{attachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineTransactionRequests/{TransactionId}/child/shipmentLines/{DeliveryDetailInterfaceId}/child/errors` | Get all errors |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineTransactionRequests/{TransactionId}/child/shipmentLines/{DeliveryDetailInterfaceId}/child/errors/{errorsUniqID}` | Get one error |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineTransactionRequests/{TransactionId}/child/shipmentLines/{DeliveryDetailInterfaceId}/child/holds` | Create a hold |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineTransactionRequests/{TransactionId}/child/shipmentLines/{DeliveryDetailInterfaceId}/child/notes/{NoteId}` | Get a note object |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineTransactionRequests/{TransactionId}/child/shipmentLines/{DeliveryDetailInterfaceId}/child/notes` | Get all note objects |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineTransactionRequests/{TransactionId}/child/shipmentLines/{DeliveryDetailInterfaceId}/child/notes/{NoteId}/enclosure/NoteTxt` | Delete a NoteTxt |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineTransactionRequests/{TransactionId}/child/shipmentLines/{DeliveryDetailInterfaceId}/child/holds` | Get all holds |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineTransactionRequests/{TransactionId}/child/shipmentLines/{DeliveryDetailInterfaceId}/child/holds/{holdsUniqID}` | Get one hold |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineTransactionRequests/{TransactionId}/child/shipmentLines/{DeliveryDetailInterfaceId}/child/notes` | Create a note |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineTransactionRequests/{TransactionId}/child/errors` | Get all errors |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineTransactionRequests/{TransactionId}/child/errors/{errorsUniqID}` | Get one error |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineTransactionRequests/{TransactionId}/child/shipmentLines` | Create a shipment line |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineTransactionRequests` | Create a request |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineTransactionRequests` | Get all requests |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineTransactionRequests/{TransactionId}` | Get one request |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineTransactionRequests/{TransactionId}/child/shipmentLines/{DeliveryDetailInterfaceId}` | Get one shipment line |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineTransactionRequests/{TransactionId}/child/shipmentLines` | Get all shipment lines |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineTransactionRequests/{TransactionId}/child/shipmentLines/{DeliveryDetailInterfaceId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineTransactionRequests/{TransactionId}/child/shipmentLines/{DeliveryDetailInterfaceId}/child/attachments` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineTransactionRequests/{TransactionId}/child/shipmentLines/{DeliveryDetailInterfaceId}/child/attachments/{attachmentsUniqID}` | Get an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentLineTransactionRequests/{TransactionId}/child/shipmentLines/{DeliveryDetailInterfaceId}/child/attachments` | Create an attachment |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/shipmentLineTransactionRequests/{TransactionId}/child/shipmentLines/{DeliveryDetailInterfaceId}/child/notes/{NoteId}/enclosure/NoteTxt` | Get a NoteTxt |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/shipmentLineTransactionRequests/{TransactionId}/child/shipmentLines/{DeliveryDetailInterfaceId}/child/notes/{NoteId}/enclosure/NoteTxt` | Replace a NoteTxt |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/shipmentLineTransactionRequests/{TransactionId}/child/shipmentLines/{DeliveryDetailInterfaceId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Get a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/shipmentLineTransactionRequests/{TransactionId}/child/shipmentLines/{DeliveryDetailInterfaceId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |

## s hi pm en ts

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/unpackedShipmentLines/{ShipmentLine3}/child/attachments/{attachmentsUniqID}` | Delete an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/unpackedShipmentLines/{ShipmentLine}` | Get one line |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/unpackedShipmentLines/{ShipmentLine3}/child/attachments/{attachmentsUniqID}` | Get an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/unpackedShipmentLines/{ShipmentLine}/child/attachments` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/packingUnitShippingInstructions/{NoteId}` | Get one instruction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/packingUnitShippingInstructions` | Get all instructions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/unpackedShipmentLines` | Get all lines |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/packingUnitShippingInstructions/{NoteId}/enclosure/ShippingInstructions` | Get a ShippingInstructions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/unpackedShipmentLines/{ShipmentLine3}/child/shipmentLineCosts/{FreightCostId11}/child/shippingCostsDFF/{FreightCostId1}` | Get one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/unpackedShipmentLines/{ShipmentLine}/child/shipmentLineCosts/{FreightCostId11}/child/shippingCostsDFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/unpackedShipmentLines/{ShipmentLine3}/child/inventoryStripingDFF/{DeliveryDetailId}` | Get one inventory tracking attribute |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/unpackedShipmentLines/{ShipmentLine}/child/inventoryStripingDFF` | Get all inventory tracking attributes |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/unpackedShipmentLines/{ShipmentLine3}/child/attachments/{attachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/unpackedShipmentLines/{ShipmentLine3}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/unpackedShipmentLines/{ShipmentLine}/child/shipmentLineCosts/{FreightCostId11}` | Get one cost |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/unpackedShipmentLines/{ShipmentLine}/child/shipmentLineCosts` | Get all costs |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/shipmentLines/{ShipmentLine2}/child/shipmentLineSerials/{shipmentLineSerialsUniqID}/child/standardDFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/shipmentLines/{ShipmentLine2}/child/shipmentLineSerials/{shipmentLineSerialsUniqID2}/child/attributeDFF/{attributeDFFUniqID}` | Get one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/shipmentLines/{ShipmentLine2}/child/shipmentLineSerials/{shipmentLineSerialsUniqID}/child/serialNumbers` | Get all serial numbers |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/shipmentLines/{ShipmentLine2}/child/shipmentLineSerials/{shipmentLineSerialsUniqID2}/child/standardDFF/{standardDFFUniqID}` | Get one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/shipmentLines/{ShipmentLine}/child/shipmentLineSerials` | Get all serials |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/shipmentLines/{ShipmentLine2}/child/proratedCosts/{ProratedShippingCostId}` | Get one prorated cost |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/shipmentLines/{ShipmentLine2}/child/shipmentLineSerials/{shipmentLineSerialsUniqID}/child/attributeDFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/shipmentLines/{ShipmentLine2}/child/shipmentLineSerials/{shipmentLineSerialsUniqID}` | Get one serial |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/shipmentLines/{ShipmentLine}/child/lineShippingInstructions` | Get all instructions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/shipmentLines/{ShipmentLine2}/child/shipmentLineSerials/{shipmentLineSerialsUniqID2}/child/serialNumbers/{serialNumbersUniqID2}/child/standardDFF/{standardDFFUniqID}` | Get one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/shipmentLines/{ShipmentLine2}/child/lineShippingInstructions/{NoteId}/enclosure/ShippingInstructions` | Get a ShippingInstructions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/shipmentLines/{ShipmentLine2}/child/lineShippingInstructions/{NoteId}` | Get one instruction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/shipmentLines/{ShipmentLine2}/child/shipmentLineSerials/{shipmentLineSerialsUniqID2}/child/serialNumbers/{serialNumbersUniqID}/child/attributeDFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/shipmentLines/{ShipmentLine2}/child/shipmentLineSerials/{shipmentLineSerialsUniqID2}/child/serialNumbers/{serialNumbersUniqID}` | Get one serial number |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/shipmentLines/{ShipmentLine2}/child/shipmentLineSerials/{shipmentLineSerialsUniqID2}/child/serialNumbers/{serialNumbersUniqID}/child/standardDFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/shipmentLines/{ShipmentLine2}/child/shipmentLineSerials/{shipmentLineSerialsUniqID2}/child/serialNumbers/{serialNumbersUniqID2}/child/attributeDFF/{attributeDFFUniqID}` | Get one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/unpackedShipmentLines/{ShipmentLine3}/child/shipmentLineSerials/{shipmentLineSerialsUniqID3}/child/serialNumbers/{serialNumbersUniqID}/child/standardDFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/unpackedShipmentLines/{ShipmentLine3}/child/shipmentLineSerials/{shipmentLineSerialsUniqID3}/child/serialNumbers/{serialNumbersUniqID3}/child/attributeDFF/{attributeDFFUniqID}` | Get one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/unpackedShipmentLines/{ShipmentLine}/child/lineShippingInstructions` | Get all instructions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/unpackedShipmentLines/{ShipmentLine3}/child/shipmentLineSerials/{shipmentLineSerialsUniqID3}/child/serialNumbers/{serialNumbersUniqID3}/child/standardDFF/{standardDFFUniqID}` | Get one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/unpackedShipmentLines/{ShipmentLine3}/child/shipmentLineSerials/{shipmentLineSerialsUniqID}/child/serialNumbers` | Get all serial numbers |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/unpackedShipmentLines/{ShipmentLine3}/child/shipmentLineSerials/{shipmentLineSerialsUniqID3}/child/standardDFF/{standardDFFUniqID}` | Get one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/unpackedShipmentLines/{ShipmentLine3}/child/shipmentLineSerials/{shipmentLineSerialsUniqID3}/child/serialNumbers/{serialNumbersUniqID}/child/attributeDFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/unpackedShipmentLines/{ShipmentLine3}/child/shipmentLineSerials/{shipmentLineSerialsUniqID3}/child/serialNumbers/{serialNumbersUniqID}` | Get one serial number |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/shipmentShippingMarks` | Get all marks |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/shipmentRoutingInstructions/{NoteId}/enclosure/RoutingInstruction` | Get a RoutingInstruction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/shipmentShippingMarks/{NoteId}/enclosure/ShippingMarks` | Get a ShippingMarks |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/shipmentShippingMarks/{NoteId}` | Get one mark |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/unpackedShipmentLines/{ShipmentLine}/child/lineShippingInstructions/{NoteId10}/enclosure/ShippingInstructions` | Get a ShippingInstructions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/unpackedShipmentLines/{ShipmentLine}/child/lineShippingInstructions/{NoteId10}` | Get one instruction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/shipmentRoutingInstructions/{NoteId}` | Get one instruction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/shipmentRoutingInstructions` | Get all instructions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/unpackedShipmentLines/{ShipmentLine3}/child/shipmentLinesDFF/{DeliveryDetailId}` | Get one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/unpackedShipmentLines/{ShipmentLine}/child/shipmentLinesDFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/unpackedShipmentLines/{ShipmentLine3}/child/linePackingInstructions/{NoteId}` | Get one instruction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/unpackedShipmentLines/{ShipmentLine}/child/linePackingInstructions` | Get all instructions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/unpackedShipmentLines/{ShipmentLine3}/child/lotAttributeDFF/{lotAttributeDFFUniqID}` | Get one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/unpackedShipmentLines/{ShipmentLine}/child/lotAttributeDFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/unpackedShipmentLines/{ShipmentLine3}/child/lotStandardDFF/{lotStandardDFFUniqID}` | Get one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/unpackedShipmentLines/{ShipmentLine}/child/lotStandardDFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/unpackedShipmentLines/{ShipmentLine3}/child/shipmentLineSerials/{shipmentLineSerialsUniqID}/child/attributeDFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/unpackedShipmentLines/{ShipmentLine3}/child/shipmentLineSerials/{shipmentLineSerialsUniqID}` | Get one serial |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/unpackedShipmentLines/{ShipmentLine3}/child/shipmentLineSerials/{shipmentLineSerialsUniqID}/child/standardDFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/unpackedShipmentLines/{ShipmentLine3}/child/shipmentLineSerials/{shipmentLineSerialsUniqID3}/child/attributeDFF/{attributeDFFUniqID}` | Get one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/unpackedShipmentLines/{ShipmentLine}/child/proratedCosts` | Get all prorated costs |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/unpackedShipmentLines/{ShipmentLine3}/child/linePackingInstructions/{NoteId}/enclosure/PackingInstructions` | Get a PackingInstructions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/unpackedShipmentLines/{ShipmentLine}/child/shipmentLineSerials` | Get all serials |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/unpackedShipmentLines/{ShipmentLine3}/child/proratedCosts/{ProratedShippingCostId}` | Get one prorated cost |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/attachments/{attachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/packingUnitCosts` | Get all costs |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/attachments/{attachmentsUniqID}` | Get an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}` | Get one unit |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/attachments/{attachmentsUniqID}` | Delete an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/attachments` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/packingUnitCosts/{FreightCostId}` | Get one cost |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/packingUnitsDFF` | Get one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/packingUnitsDFF/{LPNId3}` | Get one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/innerPackingUnits` | Get all units |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/shipmentPackingUnitDFFs/{LpnHistoryId}` | Get one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/packingUnitCosts/{FreightCostId}/child/shippingCostsDFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/packingUnitCosts/{FreightCostId}/child/shippingCostsDFF/{FreightCostId6}` | Get one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/shipmentPackingUnitDFFs` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits` | Get all units |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/attachments/{attachmentsUniqID}` | Get an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/attachments/{attachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/attachments` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments` | Get all shipments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}` | Get one shipment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/attachments/{attachmentsUniqID}` | Delete an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/shippingCosts` | Get all costs |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/shipmentsDFF/{DeliveryId}` | Get one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/globalDFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/globalDFF/{globalDFFUniqID}` | Get one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/shipmentsDFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/shippingCosts/{FreightCostId}` | Get one cost |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/shippingCosts/{FreightCostId}/child/shippingCostsDFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/shippingCosts/{FreightCostId}/child/shippingCostsDFF/{FreightCostId10}` | Get one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/shipmentLines/{ShipmentLine2}/child/inventoryStripingDFF/{DeliveryDetailId}` | Get one inventory tracking attribute |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/shipmentLines/{ShipmentLine}/child/inventoryStripingDFF` | Get all inventory tracking attributes |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/shipmentLines/{ShipmentLine2}/child/lotAttributeDFF/{lotAttributeDFFUniqID}` | Get one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/shipmentLines/{ShipmentLine}/child/lotAttributeDFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/shipmentLines/{ShipmentLine2}/child/shipmentLineCosts/{FreightCostId}` | Get one cost |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/shipmentLines/{ShipmentLine}/child/shipmentLineCosts` | Get all costs |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/shipmentLines/{ShipmentLine2}/child/shipmentLineCosts/{FreightCostId}/child/shippingCostsDFF/{FreightCostId8}` | Get one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/shipmentLines/{ShipmentLine2}/child/shipmentLineCosts/{FreightCostId}/child/shippingCostsDFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/shipmentLines/{ShipmentLine2}/child/linePackingInstructions/{NoteId}` | Get one instruction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/shipmentLines/{ShipmentLine}/child/linePackingInstructions` | Get all instructions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/shipmentLines/{ShipmentLine}/child/proratedCosts` | Get all prorated costs |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/shipmentLines/{ShipmentLine2}/child/linePackingInstructions/{NoteId}/enclosure/PackingInstructions` | Get a PackingInstructions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/shipmentLines/{ShipmentLine2}/child/lotStandardDFF/{lotStandardDFFUniqID}` | Get one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/shipmentLines/{ShipmentLine}/child/lotStandardDFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/shipmentLines/{ShipmentLine2}/child/shipmentLinesDFF/{DeliveryDetailId}` | Get one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/shipmentLines/{ShipmentLine}/child/shipmentLinesDFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/shipmentLines/{ShipmentLine2}/child/attachments/{attachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/shipmentLines` | Get all lines |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/innerPackingUnits/{LPNId2}` | Get one unit |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/shipmentLines/{ShipmentLine2}/child/attachments/{attachmentsUniqID}` | Delete an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/packingUnitPackingInstructions` | Get all instructions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/packingUnitPackingInstructions/{NoteId}` | Get one instruction |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/packingUnitPackingInstructions/{NoteId}/enclosure/PackingInstructions` | Get a PackingInstructions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/shipmentLines/{ShipmentLine}/child/attachments` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/shipmentLines/{ShipmentLine2}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/shipmentLines/{ShipmentLine}` | Get one line |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/shipmentLines/{ShipmentLine2}/child/attachments/{attachmentsUniqID}` | Get an attachment |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/unpackedShipmentLines/{ShipmentLine3}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/shipmentLines/{ShipmentLine2}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/shipmentLines/{ShipmentLine2}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Get a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Get a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/outerPackingUnits/{LPNId}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/unpackedShipmentLines/{ShipmentLine3}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Get a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/shipments/{Shipment}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Get a FileContents |

## s hi pm en tS et sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentSetsLOV/{shipmentSetsLOVUniqID}` | Get one shipment set |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shipmentSetsLOV` | Get all shipment sets |

## s hi pp in gE xc ep ti on s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/shippingExceptions/{ShippingExceptionId}/child/DFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shippingExceptions/{ShippingExceptionId}/child/DFF` | Create a flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shippingExceptions` | Create an exception |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shippingExceptions` | Get all exceptions |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/shippingExceptions/{ShippingExceptionId}/child/DFF/{ExceptionId}` | Update a flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/shippingExceptions/{ShippingExceptionId}/child/DFF/{ExceptionId}` | Get one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/shippingExceptions/{ShippingExceptionId}` | Get one exception |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/shippingExceptions/{ShippingExceptionId}` | Update an exception |

## s hi pp in gP ar am et er s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/shippingParameters/{OrganizationId}` | Get shipping parameters for one inventory organization |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shippingParameters` | Get shipping parameters for all inventory organizations |

## s hi pp in gP ic kS li pG ro up in gR ul es LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/shippingPickSlipGroupingRulesLOV/{PickSlipGroupingRuleId}` | Get one pick slip grouping rule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shippingPickSlipGroupingRulesLOV` | Get all pick slip grouping rules |

## s hi pp in gP ro je ct sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/shippingProjectsLOV/{ProjectId}/child/shippingTasks` | Get all tasks |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shippingProjectsLOV/{ProjectId}/child/shippingTasks/{TaskId}` | Get one task |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shippingProjectsLOV` | Get all projects |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shippingProjectsLOV/{ProjectId}` | Get one project |

## s hi pp in gT ra ns ac ti on s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/shippingTransactions/{ShipmentName}` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shippingTransactions` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/shippingTransactions` | Create transactions |

## s im ul at eD em an dP la ns

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulateDemandPlans/{PlanId}/child/simulateDemandRuns` | Get all simulate demand scheduled process run details |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulateDemandPlans/{PlanId}/child/simulateDemandRuns/{ExecutionId}` | Get one simulate demand scheduled process run detail |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulateDemandPlans/{PlanId}/child/simulateDemandRuns` | Create one simulate demand scheduled process |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulateDemandPlans` | Get all plans |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulateDemandPlans/{PlanId}` | Get one plan |

## s im ul at eD em an ds

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulateDemands/{SimulationId}` | Get one simulate demand request |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulateDemands` | Get all simulate demand requests |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulateDemands` | Create one new simulation request |

## s im ul at io nS et s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/Items` | Create items |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/PlanningSupplies` | Create supplies |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/BillOfResourcesV2` | Create bill of resources |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/SupplierCapacities` | Create supplier capacities |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/PlanningDemands` | Create demands |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/SupplierItems` | Create supplier items |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/simulationSets` | Create a new simulation set |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/Resources/{ResourceId}/child/ResourceCapacities` | Create resource capacities |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/Resources` | Create resources |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/Operations/{OperationsUniqID}` | Get one operation |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/Resources/{ResourceId}/child/ResourceCapacities/{AvailabilityDate}` | Delete one resource capacity |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/Resources/{ResourceId}/child/ResourceCapacities` | Get all resource capacities |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/ItemSubinventories` | Get all item subinventories |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/ComponentItems/{ComponentItemsUniqID}/child/SubstituteItems/{SubstituteItemsUniqID}` | Get one substitute component item |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/ComponentItems/{ComponentItemsUniqID}/child/SubstituteItems` | Get all substitute component items |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/Items` | Get all items |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/Items/{ItemsUniqID}` | Delete one item |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/ItemSubinventories/{ItemSubinventoriesUniqID}` | Get one item subinventory |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/PlanningSupplies/{TransactionId}` | Delete one supply |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/Resources/{ResourceId}` | Delete one resource |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/Resources` | Get all resources |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/PlanningSupplies/{TransactionId}/child/PlanningAttributes` | Get attributes for all demands or supplies |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/PlanningSupplies/{TransactionId}/child/PlanningAttributes` | Create attributes for a demand or supply |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/PlanningSupplies` | Get all supplies |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/PlanningDemands/{TransactionId}` | Delete one demand |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/Operations/{OperationsUniqID}/child/OperationResources/{OperationResourcesUniqID}` | Get one operation resource |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/Operations/{OperationsUniqID}/child/OperationResources` | Get all operation resources |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/PlanningDemands/{TransactionId}/child/PlanningAttributes` | Get attributes for all demands or supplies |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/PlanningDemands/{TransactionId}/child/PlanningAttributes` | Create attributes for a demand or supply |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/PlanningDemands` | Get all demands |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/ComponentItems/{ComponentItemsUniqID}` | Get one component item |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/SupplierItems/{SupplierItemsUniqID}` | Delete one supplier item |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/BillOfResources` | Get all bill of resources |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/BillOfResources` | Create bill of resources |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/SupplierCapacities/{SupplierCapacitiesUniqID}` | Get one supplier capacity |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/BillOfResourcesV2` | Get all bill of resources |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/BillOfResourcesV2/{DerivedBorId}` | Delete one bill of resource |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulationSets` | Get all simulation sets |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}` | Delete a simulation set |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/Operations` | Get all operations |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/ApprovedSuppliers/{ApprovedSuppliersUniqID}` | Get one approved supplier |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/ApprovedSuppliers` | Get all approved suppliers |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/SupplierItems` | Get all supplier items |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/SupplierCapacities` | Get all supplier capacities |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/BillOfResources/{BorId}/child/OptionDependentDetails/{OptionId}` | Get one option dependent resource detail |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/BillOfResources/{BorId}/child/OptionDependentDetails` | Get all option dependent resource details |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/SupplierCapacities/{SupplierCapacitiesUniqID}` | Delete one supplier capacity |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/ComponentItems` | Get all component items |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/BillOfResources/{BorId}/child/SubstituteComponents` | Get all substitute components from the bill of resources |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/BillOfResources/{BorId}/child/SubstituteComponents` | Create substitute components in the bill of resources |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/BillOfResources/{BorId}/child/AlternateResources` | Create alternate resources in the bill of resources |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/BillOfResourcesV2/{DerivedBorId}/child/OptionDependentDetailsV2/{OptionId}` | Get one option dependent resource detail |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/BillOfResourcesV2/{DerivedBorId}/child/OptionDependentDetailsV2` | Get all option dependent resource details |
| `GET` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/BillOfResources/{BorId}/child/AlternateResources` | Get all alternate resources from the bill of resources |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/PlanningSupplies/{TransactionId}/child/PlanningAttributes/{TransactionId4}` | Update attributes for one demand or supply |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/Resources/{ResourceId}/child/ResourceCapacities/{AvailabilityDate}` | Get one resource capacity |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/Resources/{ResourceId}` | Update one resource |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/Resources/{ResourceId}` | Get one resource |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/SupplierItems/{SupplierItemsUniqID}` | Get one supplier item |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/Resources/{ResourceId}/child/ResourceCapacities/{AvailabilityDate}` | Update one resource capacity |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/PlanningSupplies/{TransactionId}/child/PlanningAttributes/{TransactionId4}` | Get attributes for one demand or supply |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/BillOfResources/{BorId}/child/AlternateResources/{AlternateResourceId}` | Get one alternate resource from the bill of resources |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/BillOfResourcesV2/{DerivedBorId}` | Update one bill of resource |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/BillOfResources/{BorId}/child/SubstituteComponents/{SubstituteComponentItemId}` | Get one substitute component from the bill of resources |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/BillOfResources/{BorId}/child/AlternateResources/{AlternateResourceId}` | Update one alternate resource in the bill of resources |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/BillOfResourcesV2/{DerivedBorId}` | Get one bill of resource |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}` | Update a simulation set |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}` | Get one simulation set |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/BillOfResources/{BorId}` | Update one bill of resource |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/BillOfResources/{BorId}` | Get one bill of resource |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/BillOfResources/{BorId}/child/SubstituteComponents/{SubstituteComponentItemId}` | Update one substitute component in the bill of resources |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/PlanningDemands/{TransactionId}/child/PlanningAttributes/{TransactionId2}` | Update attributes for one demand or supply |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/PlanningDemands/{TransactionId}/child/PlanningAttributes/{TransactionId2}` | Get attributes for one demand or supply |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/PlanningSupplies/{TransactionId}` | Update one supply |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/PlanningSupplies/{TransactionId}` | Get one supply |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/PlanningDemands/{TransactionId}` | Update one demand |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/Items/{ItemsUniqID}` | Update one item |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/Items/{ItemsUniqID}` | Get one item |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/PlanningDemands/{TransactionId}` | Get one demand |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/simulationSets/{SimulationSetId}/child/SupplierItems/{SupplierItemsUniqID}` | Update one supplier item |
| `POST` | `/fscmRestApi/resources/11.13.18.05/simulationSets/action/copySimulationSet` | Copies a simulation set |

## s to ck in gL oc at io nO rg an iz at io ns LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/stockingLocationOrganizationsLOV/{OrganizationId}` | Get one organization |
| `GET` | `/fscmRestApi/resources/11.13.18.05/stockingLocationOrganizationsLOV` | Get all organizations |

## s to ck in gL oc at io ns

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/stockingLocations/{StockLocationId}/child/siteDedicatedLocations` | Create a site-dedicated location |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/stockingLocations` | Create a stocking location |
| `GET` | `/fscmRestApi/resources/11.13.18.05/stockingLocations/{StockLocationId}/child/siteDedicatedLocations/{SiteDedicatedLocId}` | Delete a site-dedicated location |
| `GET` | `/fscmRestApi/resources/11.13.18.05/stockingLocations/{StockLocationId}/child/siteDedicatedLocations` | Get all site-dedicated locations |
| `GET` | `/fscmRestApi/resources/11.13.18.05/stockingLocations/{StockLocationId}` | Delete a stocking location |
| `GET` | `/fscmRestApi/resources/11.13.18.05/stockingLocations` | Get all stocking locations |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/stockingLocations/{StockLocationId}/child/siteDedicatedLocations/{SiteDedicatedLocId}` | Update a site-dedicated location |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/stockingLocations/{StockLocationId}/child/siteDedicatedLocations/{SiteDedicatedLocId}` | Get one site-dedicated location |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/stockingLocations/{StockLocationId}` | Get one stocking location |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/stockingLocations/{StockLocationId}` | Update a stocking location |

## s ub in ve nt or ie s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/subinventories/{subinventoriesUniqID}/child/locators/{InventoryLocationId}/child/itemLocators` | Create locators |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/subinventories/{subinventoriesUniqID}/child/itemSubinventories/{itemSubinventoriesUniqID}` | Get one subinventory |
| `GET` | `/fscmRestApi/resources/11.13.18.05/subinventories/{subinventoriesUniqID}/child/locators/{InventoryLocationId}/child/locatorsDFF` | Create flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/subinventories/{subinventoriesUniqID}/child/itemSubinventories/{itemSubinventoriesUniqID}/child/itemSubinventoriesDFF` | Create flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/subinventories/{subinventoriesUniqID}/child/locators/{InventoryLocationId}/child/locatorsKeyFlex` | Create flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/subinventories/{subinventoriesUniqID}/child/locators/{InventoryLocationId}/child/locatorsKeyFlex` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/subinventories/{subinventoriesUniqID}/child/locators/{InventoryLocationId}/child/locatorsDFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/subinventories/{subinventoriesUniqID}/child/locators/{InventoryLocationId}/child/itemLocators` | Get all locators |
| `GET` | `/fscmRestApi/resources/11.13.18.05/subinventories/{subinventoriesUniqID}/child/itemSubinventories` | Get all subinventories |
| `GET` | `/fscmRestApi/resources/11.13.18.05/subinventories/{subinventoriesUniqID}/child/itemSubinventories` | Create subinventories |
| `GET` | `/fscmRestApi/resources/11.13.18.05/subinventories/{subinventoriesUniqID}/child/locators/{InventoryLocationId}/child/itemLocators/{LocatorItemId}` | Delete one locator |
| `GET` | `/fscmRestApi/resources/11.13.18.05/subinventories/{subinventoriesUniqID}/child/itemSubinventories/{itemSubinventoriesUniqID}/child/itemSubinventoriesDFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/subinventories/{subinventoriesUniqID}/child/translations` | Get all subinventory translation records |
| `GET` | `/fscmRestApi/resources/11.13.18.05/subinventories` | Get all subinventories |
| `GET` | `/fscmRestApi/resources/11.13.18.05/subinventories/{subinventoriesUniqID}/child/subinventoriesDFF` | Create flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/subinventories/{subinventoriesUniqID}/child/subinventoriesDFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/subinventories/{subinventoriesUniqID}/child/locators` | Get all locators |
| `GET` | `/fscmRestApi/resources/11.13.18.05/subinventories/{subinventoriesUniqID}/child/locators` | Create locators |
| `GET` | `/fscmRestApi/resources/11.13.18.05/subinventories` | Create subinventories |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/subinventories/{subinventoriesUniqID}/child/itemSubinventories/{itemSubinventoriesUniqID}/child/itemSubinventoriesDFF/{itemSubinventoriesDFFUniqID}` | Get one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/subinventories/{subinventoriesUniqID}/child/translations/{translationsUniqID}` | Update one subinventory translation record |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/subinventories/{subinventoriesUniqID}/child/translations/{translationsUniqID}` | Get one subinventory translation record. |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/subinventories/{subinventoriesUniqID}/child/itemSubinventories/{itemSubinventoriesUniqID}` | Update one subinventory |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/subinventories/{subinventoriesUniqID}/child/itemSubinventories/{itemSubinventoriesUniqID}/child/itemSubinventoriesDFF/{itemSubinventoriesDFFUniqID}` | Update one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/subinventories/{subinventoriesUniqID}/child/itemSubinventories/{itemSubinventoriesUniqID}` | Remove one subinventory |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/subinventories/{subinventoriesUniqID}/child/subinventoriesDFF/{subinventoriesDFFUniqID}` | Update one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/subinventories/{subinventoriesUniqID}/child/locators/{InventoryLocationId}` | Get one locator |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/subinventories/{subinventoriesUniqID}/child/locators/{InventoryLocationId}` | Update one locator |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/subinventories/{subinventoriesUniqID}` | Get one subinventory |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/subinventories/{subinventoriesUniqID}` | Update one subinventory |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/subinventories/{subinventoriesUniqID}/child/subinventoriesDFF/{subinventoriesDFFUniqID}` | Get one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/subinventories/{subinventoriesUniqID}/child/locators/{InventoryLocationId}/child/locatorsDFF/{InventoryLocationId2}` | Update one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/subinventories/{subinventoriesUniqID}/child/locators/{InventoryLocationId}/child/itemLocators/{LocatorItemId}` | Get one locator |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/subinventories/{subinventoriesUniqID}/child/locators/{InventoryLocationId}/child/itemLocators/{LocatorItemId}` | Update one locator |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/subinventories/{subinventoriesUniqID}/child/locators/{InventoryLocationId}/child/locatorsKeyFlex/{_INVENTORY_LOCATION_ID}` | Get one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/subinventories/{subinventoriesUniqID}/child/locators/{InventoryLocationId}/child/locatorsKeyFlex/{_INVENTORY_LOCATION_ID}` | PATCH action not supported |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/subinventories/{subinventoriesUniqID}/child/locators/{InventoryLocationId}/child/locatorsDFF/{InventoryLocationId2}` | Get one flexfield |

## s ub in ve nt or yG ro up s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/subinventoryGroups/{subinventoryGroupsUniqID}` | Get one subinventory group |
| `GET` | `/fscmRestApi/resources/11.13.18.05/subinventoryGroups` | Get all subinventory groups |

## s ub in ve nt or yI te ms

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/subinventoryItems/{SubinventoryItemId}` | Get one subinventory |
| `GET` | `/fscmRestApi/resources/11.13.18.05/subinventoryItems/{SubinventoryItemId}/child/GTINs/{GTINsUniqID}` | Get one GTIN corresponding to an item associated with a subinventory |
| `GET` | `/fscmRestApi/resources/11.13.18.05/subinventoryItems/{SubinventoryItemId}/child/onhandQuantity/{onhandQuantityUniqID}` | Get on-hand quantity details for one subinventory |
| `GET` | `/fscmRestApi/resources/11.13.18.05/subinventoryItems/{SubinventoryItemId}/child/GTINs` | Get all GTINs corresponding to items associated with a subinventory |
| `GET` | `/fscmRestApi/resources/11.13.18.05/subinventoryItems/{SubinventoryItemId}/child/onhandQuantity` | Get on-hand quantity details for all subinventories |
| `GET` | `/fscmRestApi/resources/11.13.18.05/subinventoryItems/{SubinventoryItemId}/child/MPNs/{MPNsUniqID}` | Get one MPN corresponding to an item associated with a subinventory |
| `GET` | `/fscmRestApi/resources/11.13.18.05/subinventoryItems/{SubinventoryItemId}/child/MPNs` | Get all manufacturer part numbers corresponding to items associated with a subinventory |
| `GET` | `/fscmRestApi/resources/11.13.18.05/subinventoryItems` | Create subinventories |
| `GET` | `/fscmRestApi/resources/11.13.18.05/subinventoryItems` | Get all subinventories |
| `GET` | `/fscmRestApi/resources/11.13.18.05/subinventoryItems/{SubinventoryItemId}/child/subinventoryItemsDFF` | Create flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/subinventoryItems/{SubinventoryItemId}/child/subinventoryItemsDFF` | Get all flexfields |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/subinventoryItems/{SubinventoryItemId}/child/subinventoryItemsDFF/{subinventoryItemsDFFUniqID}` | Get one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/subinventoryItems/{SubinventoryItemId}/child/subinventoryItemsDFF/{subinventoryItemsDFFUniqID}` | Update one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/subinventoryItems/{SubinventoryItemId}` | Update one subinventory |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/subinventoryItems/{SubinventoryItemId}` | Remove one subinventory |

## s up pl ie rP ro du ct s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/EFFs` | Create an extensible flexfield |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/productRelationships` | Create a product relationship |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/associatedSupplierOrganizations/{AssociationTransactionId}/child/associatedSupplierOrganizationEFFs` | Create an extensible flexfield |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/revisions` | Create a revision |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/packs` | Create a pack |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/categories` | Create a category |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/attachments` | Create an attachment |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/packs/{TransactionId}/child/packComponents` | Create a pack component |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/revisions/{RevisionTransactionId}/child/revisionEFFs` | Create an extensible flexfield |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/translations` | Create a translation |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/associatedSupplierOrganizations` | Create an associated supplier organization |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/supplierProducts` | Create a supplier product |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/packs` | Get all packs |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/packs/{TransactionId}` | Delete a pack |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/translations` | Get all translations |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/EFFs/{EFFsUniqID}` | Delete an extensible flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/productRelationships` | Get all product relationships |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/EFFs` | Get all extensible flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/translations/{InterfaceTableUniqueId}` | Delete a translation |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/revisions/{RevisionTransactionId}/child/revisionEFFs/{revisionEFFsUniqID}` | Delete an extensible flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/revisions/{RevisionTransactionId}` | Delete a revision |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/revisions` | Get all revisions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/productRelationships/{InterfaceTableUniqueId}` | Delete a product relationship |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/packs/{TransactionId}/child/packComponents/{TransactionId2}` | Delete a pack component |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/packs/{TransactionId}/child/packComponents` | Get all pack components |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/revisions/{RevisionTransactionId}/child/revisionEFFs` | Get all extensible flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/categories` | Get all categories |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/attachments/{attachmentsUniqID}` | Delete an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/associatedSupplierOrganizations/{AssociationTransactionId}/child/associatedSupplierOrganizationEFFs` | Get all extensible flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/attachments` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/associatedSupplierOrganizations` | Get all associated supplier organizations |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/associatedSupplierOrganizations/{AssociationTransactionId}` | Delete an associated supplier organization |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/associatedSupplierOrganizations/{AssociationTransactionId}/child/associatedSupplierOrganizationEFFs/{associatedSupplierOrganizationEFFsUniqID}` | Delete an extensible flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/categories/{InterfaceTableUniqueId}` | Delete a category |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/attachments/{attachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplierProducts` | Get all supplier products |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}` | Delete a supplier product |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/associatedSupplierOrganizations/{AssociationTransactionId}` | Update an associated supplier organization |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/translations/{InterfaceTableUniqueId}` | Update a translation |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/associatedSupplierOrganizations/{AssociationTransactionId}` | Get one associated supplier organization |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/revisions/{RevisionTransactionId}` | Get one revision |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/revisions/{RevisionTransactionId}` | Update a revision |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}` | Get one supplier product |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/translations/{InterfaceTableUniqueId}` | Get one translation |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/revisions/{RevisionTransactionId}/child/revisionEFFs/{revisionEFFsUniqID}` | Update an extensible flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}` | Update a supplier product |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/revisions/{RevisionTransactionId}/child/revisionEFFs/{revisionEFFsUniqID}` | Get one extensible flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/productRelationships/{InterfaceTableUniqueId}` | Update a product relationship |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/EFFs/{EFFsUniqID}` | Update an extensible flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/attachments/{attachmentsUniqID}` | Update an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/packs/{TransactionId}` | Get one pack |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/categories/{InterfaceTableUniqueId}` | Get one category |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/categories/{InterfaceTableUniqueId}` | Update a category |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/EFFs/{EFFsUniqID}` | Get one extensible flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/packs/{TransactionId}` | Update a pack |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/associatedSupplierOrganizations/{AssociationTransactionId}/child/associatedSupplierOrganizationEFFs/{associatedSupplierOrganizationEFFsUniqID}` | Update an extensible flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/associatedSupplierOrganizations/{AssociationTransactionId}/child/associatedSupplierOrganizationEFFs/{associatedSupplierOrganizationEFFsUniqID}` | Get one extensible flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/productRelationships/{InterfaceTableUniqueId}` | Get one product relationship |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/packs/{TransactionId}/child/packComponents/{TransactionId2}` | Update a pack component |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/packs/{TransactionId}/child/packComponents/{TransactionId2}` | Get one pack component |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/attachments/{attachmentsUniqID}` | Get an attachment |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Get a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/supplierProducts/{supplierProductsUniqID}/child/attachments/{attachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |

## s up pl ie rR et ur ns

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/supplierReturns/{SupplierReturnHeaderId}/child/lines` | Create one line |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/supplierReturns/{SupplierReturnHeaderId}/child/lines/{linesUniqID}/child/serials` | Create one serial |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/supplierReturns` | Create one supplier return |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplierReturns/{SupplierReturnHeaderId}/child/lines/{linesUniqID}/child/inventoryAttributesDFF` | Get all descriptive flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplierReturns/{SupplierReturnHeaderId}/child/lines/{linesUniqID}/child/manufacturerParts` | Get all manufacturer parts |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplierReturns/{SupplierReturnHeaderId}/child/lines/{linesUniqID}/child/inventoryAttributesDFF` | Create one descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplierReturns/{SupplierReturnHeaderId}/child/lines/{linesUniqID}/child/serials` | Get all serials |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplierReturns/{SupplierReturnHeaderId}/child/lines/{linesUniqID}/child/serials/{serialsUniqID}` | Delete a serial |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplierReturns/{SupplierReturnHeaderId}/child/lines/{linesUniqID}/child/manufacturerParts/{manufacturerPartsUniqID}` | Get one manufacturer part |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplierReturns/{SupplierReturnHeaderId}/child/lines/{linesUniqID}/child/DFF` | Create one descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplierReturns/{SupplierReturnHeaderId}/child/lines/{linesUniqID}` | Delete a line |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplierReturns` | Get all supplier returns |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplierReturns/{SupplierReturnHeaderId}` | Delete a supplier return |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplierReturns/{SupplierReturnHeaderId}/child/lines` | Get all lines |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplierReturns/{SupplierReturnHeaderId}/child/lines/{linesUniqID}/child/DFF` | Get all descriptive flexfields |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplierReturns/{SupplierReturnHeaderId}/child/lines/{linesUniqID}/child/serials/{serialsUniqID}` | Get one serial |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplierReturns/{SupplierReturnHeaderId}/child/lines/{linesUniqID}/child/DFF/{SupplierReturnLineId}` | Update one line |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplierReturns/{SupplierReturnHeaderId}/child/lines/{linesUniqID}/child/serials/{serialsUniqID}` | Update a serial |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplierReturns/{SupplierReturnHeaderId}/child/lines/{linesUniqID}/child/DFF/{SupplierReturnLineId}` | Get one descriptive flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplierReturns/{SupplierReturnHeaderId}/child/lines/{linesUniqID}` | Get one line |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplierReturns/{SupplierReturnHeaderId}` | Update a supplier return |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplierReturns/{SupplierReturnHeaderId}` | Get one supplier return |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplierReturns/{SupplierReturnHeaderId}/child/lines/{linesUniqID}/child/inventoryAttributesDFF/{SupplierReturnLineId}` | Update one descriptive flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplierReturns/{SupplierReturnHeaderId}/child/lines/{linesUniqID}/child/inventoryAttributesDFF/{SupplierReturnLineId}` | Get one descriptive flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplierReturns/{SupplierReturnHeaderId}/child/lines/{linesUniqID}` | Update a line |

## s up pl ie rT ra de Pr of il es

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplierTradeProfiles` | Get all profiles |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplierTradeProfiles` | Create profiles |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplierTradeProfiles/{SupplierTradeProfileId}` | Update a profile |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplierTradeProfiles/{SupplierTradeProfileId}` | Get one profile |

## s up pl yC ha in Pl an s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyChainPlans/{PlanId}/child/MetadataExtracts/{DataStoreId}/child/Columns/{ColumnsUniqID}` | Get one column |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyChainPlans/{PlanId}/child/MetadataExtracts/{DataStoreId}/child/Columns` | Get all columns |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyChainPlans/{PlanId}/child/PlanningTables` | Get all tables |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyChainPlans/{PlanId}/child/PlanningTables/{TableId}/child/Data` | Create data |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyChainPlans/{PlanId}/child/PlanningTables/{TableId}` | Get one table |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyChainPlans/{PlanId}/child/MeasureBasedExceptions` | Get details of all measure-based exceptions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyChainPlans/{PlanId}/child/Loads/{ExecutionId}` | Get one delete plan job |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyChainPlans/{PlanId}/child/MeasureBasedExceptions/{MeasureBasedExceptionsUniqID}` | Get details of one measure-based exception |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyChainPlans/{PlanId}/child/MetadataExtracts/{DataStoreId}` | Get one metadata extract |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyChainPlans/{PlanId}/child/MetadataExtracts` | Get all metadata extracts |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyChainPlans/{PlanId}/child/PlanningTables/{TableId}/child/Data` | Get all data |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyChainPlans/{PlanId}/child/RefreshMeasuresJobs/{ExecutionId}` | Get one refresh measures job |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyChainPlans/{PlanId}/child/RefreshMeasuresJobs` | Get all refresh measures jobs |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyChainPlans/{PlanId}/child/Releases` | Create release plan jobs |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyChainPlans/{PlanId}/child/Releases/{ExecutionId10}` | Get one release plan job |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyChainPlans/{PlanId}/child/Releases` | Get all release plan jobs |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyChainPlans/{PlanId}/child/PublishData` | Create publish data jobs |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyChainPlans/{PlanId}/child/PlanningTables/{TableId}/child/Data/{Filter}` | Get one data |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyChainPlans/{PlanId}/child/PublishData` | Get all published data jobs |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyChainPlans/{PlanId}/child/RefreshMeasuresJobs` | Create refresh measures jobs |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyChainPlans/{PlanId}/child/PublishData/{ExecutionId}` | Get one publish data job |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyChainPlans/{PlanId}/child/Loads` | Get all delete plan jobs |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyChainPlans/{PlanId}/child/Archives` | Get all archives |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyChainPlans/{PlanId}/child/Archives` | Create archives |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyChainPlans/{PlanId}/child/Archives/{ExecutionId}` | Get one archive |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyChainPlans/{PlanId}/child/Closes` | Get all delete plan jobs |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyChainPlans/{PlanId}/child/Closes` | Create delete plan job |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyChainPlans/{PlanId}` | Get one plan |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyChainPlans` | Get all plans |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyChainPlans/{PlanId}/child/Approves` | Create approve plan jobs |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyChainPlans/{PlanId}/child/Approves/{ExecutionId}` | Get one approve plan job |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyChainPlans/{PlanId}/child/Approves` | Get all approve plan jobs |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyChainPlans/{PlanId}/child/Closes/{ExecutionId}` | Get one delete plan job |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyChainPlans/{PlanId}/child/LoadMeasuresJobs` | Create jobs |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyChainPlans/{PlanId}/child/Duplicates/{ExecutionId}` | Get one duplicate |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyChainPlans/{PlanId}/child/LoadMeasuresJobs` | Get all jobs |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyChainPlans/{PlanId}/child/Loads` | Create delete plan job |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyChainPlans/{PlanId}/child/LoadMeasuresJobs/{ExecutionId}` | Get one job |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyChainPlans/{PlanId}/child/Deletes` | Get all delete plan jobs |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyChainPlans/{PlanId}/child/Deletes` | Create delete plan job |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyChainPlans/{PlanId}/child/Deletes/{ExecutionId}` | Get one delete plan job |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyChainPlans/{PlanId}/child/Duplicates` | Get all duplicates |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyChainPlans/{PlanId}/child/Duplicates` | Create duplicates |

## s up pl yL in eD et ai ls By Ty pe s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyLineDetailsByTypes/{supplyLineDetailsByTypesUniqID}` | Get details of one supply line |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyLineDetailsByTypes` | Get details of all supply line |

## s up pl yN et wo rk Or ga ni za ti on s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/supplyNetworkOrganizations/{supplyNetworkOrganizationsUniqID}/child/AdditionalInformationDFF` | Create a descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyNetworkOrganizations/{supplyNetworkOrganizationsUniqID}/child/AdditionalInformationDFF` | Get all descriptive flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyNetworkOrganizations/{supplyNetworkOrganizationsUniqID}/child/AdditionalInformationDFF/{OrganizationId}` | Delete a descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyNetworkOrganizations` | Get all organizations |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyNetworkOrganizations/{supplyNetworkOrganizationsUniqID}` | Get one organization |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplyNetworkOrganizations/{supplyNetworkOrganizationsUniqID}/child/AdditionalInformationDFF/{OrganizationId}` | Update a descriptive flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplyNetworkOrganizations/{supplyNetworkOrganizationsUniqID}/child/AdditionalInformationDFF/{OrganizationId}` | Get one descriptive flexfield |

## s up pl yP la nP ol ic yA ss ig nS et s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/supplyPlanPolicyAssignSets/{PolicySetId}/child/SegmentLevelParameters` | Create policy assignment set segment level parameters |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/supplyPlanPolicyAssignSets` | Create policy assignment sets |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyPlanPolicyAssignSets/{PolicySetId}/child/PolicyAssignmentSetDuplicate/{PolicyAssignmentSetDuplicateUniqID}` | Get a duplicate policy assignment set |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyPlanPolicyAssignSets/{PolicySetId}/child/PolicyAssignmentSetDuplicate` | Get all duplicate policy assignment sets |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyPlanPolicyAssignSets/{PolicySetId}/child/SegmentLevelParameters` | Get all policy assignment set segment level parameters |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyPlanPolicyAssignSets/{PolicySetId}/child/SegmentLevelParameters/{SegmentLevelParametersUniqID}` | Delete policy assignment set segment level parameters |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyPlanPolicyAssignSets/{PolicySetId}` | Get a policy assignment set |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyPlanPolicyAssignSets/{PolicySetId}` | Delete a policy assignment set |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyPlanPolicyAssignSets/{PolicySetId}/child/PolicyAssignmentSetDuplicate` | Create duplicate policy assignment sets |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplyPlanPolicyAssignSets/{PolicySetId}/child/SegmentLevelParameters/{SegmentLevelParametersUniqID}` | Get policy assignment set segment level parameters |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplyPlanPolicyAssignSets/{PolicySetId}/child/SegmentLevelParameters/{SegmentLevelParametersUniqID}` | Update policy assignment set segment level parameters |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplyPlanPolicyAssignSets/{PolicySetId}` | Update a policy assignment set |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplyPlanPolicyAssignSets` | Get all policy assignment sets |

## s up pl yP la ns LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyPlansLOV/{PlanId}` | Get one supply plan |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyPlansLOV` | Get all supply plans |

## s up pl yR eq ue st s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyOrderLines/{SupplyLineId}/child/transferSupply/{SupplyTrackingLineId}/child/errorMessages` | Get all error messages |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyOrderLines/{SupplyLineId}/child/transferSupply/{SupplyTrackingLineId4}/child/distributionDetails/{DistributionNumber3}/child/projectDFF/{DistributionDetailsId}` | Get one project flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyOrderLines/{SupplyLineId}/child/transferSupply/{SupplyTrackingLineId4}/child/distributionDetails/{DistributionNumber}/child/projectDFF` | Get all project flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyOrderLines/{SupplyLineId}/child/transferSupply/{SupplyTrackingLineId4}/child/supplyDocuments/{supplyDocumentsUniqID}` | Get one supply document |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyOrderLines/{SupplyLineId}/child/transferSupply/{SupplyTrackingLineId}/child/supplyDocuments` | Get all supply documents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyOrderLines/{SupplyLineId}/child/transferSupply/{SupplyTrackingLineId4}/child/errorMessages/{errorMessagesUniqID}` | Get one error message |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyOrderLines/{SupplyLineId}/child/transferSupply/{SupplyTrackingLineId4}/child/distributionDetails/{DistributionNumber}` | Get one distribution detail |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyOrderLines/{SupplyLineId}/child/makeSupply/{SupplyTrackingLineId3}/child/supplyDocuments/{supplyDocumentsUniqID}` | Get one supply document |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyOrderLines/{SupplyLineId}/child/makeSupply/{SupplyTrackingLineId}/child/supplyDocuments` | Get all supply documents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyOrderLines/{SupplyLineId}/child/makeSupply/{SupplyTrackingLineId3}/child/errorMessages/{errorMessagesUniqID}` | Get one error message |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyOrderLines/{SupplyLineId}/child/transferSupply/{SupplyTrackingLineId}/child/distributionDetails` | Get all distribution details |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyOrderLines/{SupplyLineId}/child/transferSupply/{SupplyTrackingLineId}` | Get one transfer supply |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyOrderLines/{SupplyLineId}/child/transferSupply` | Get all transfer order details |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyOrderLines/{SupplyLineId}/child/transferSupply/{SupplyTrackingLineId}/child/transferSupplyDtlDFF` | Get all transfer order line flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyRequestLines/{SupplyOrderReferenceLineNumber}/child/transferCostRequestDetails` | Create one transfer cost detail |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyRequestLines/{SupplyOrderReferenceLineNumber}/child/errorMessages/{errorMessagesUniqID}` | Get one error message |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyRequestLines/{SupplyOrderReferenceLineNumber}/child/errorMessages` | Get all error messages |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyRequestLines/{SupplyOrderReferenceLineNumber}/child/supplyRequestLinesXferDFF` | Get all transfer order line flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyRequestLines/{SupplyOrderReferenceLineNumber}/child/supplyRequestLinesXferDFF` | Create one transfer order line flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyRequestLines/{SupplyOrderReferenceLineNumber}/child/transferCostRequestDetails` | Get all transfer cost details |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyRequestLines/{SupplyOrderReferenceLineNumber}/child/distributionDetails/{DistributionNumber}/child/projectDFF` | Get all project flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyRequestLines` | Get all supply request lines |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyRequestLines` | Create one supply request line |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyOrderLines/{SupplyLineId}/child/transferSupply/{SupplyTrackingLineId}/child/transferSupplyDtlDFF/{transferSupplyDtlDFFUniqID}` | Get one transfer order line flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyRequestLines/{SupplyOrderReferenceLineNumber}/child/distributionDetails/{DistributionNumber}/child/projectDFF` | Create one project flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyRequestLines/{SupplyOrderReferenceLineNumber}/child/distributionDetails` | Get all distribution details |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyRequestLines/{SupplyOrderReferenceLineNumber}/child/distributionDetails` | Create one distribution detail |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyOrderLines/{SupplyLineId}/child/buySupply` | Get all buy order details |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyOrderLines/{SupplyLineId}/child/atpSupply/{SupplyTrackingLineId}/child/errorMessages/{errorMessagesUniqID}` | Get one error message |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyOrderLines/{SupplyLineId}/child/atpSupply/{SupplyTrackingLineId}/child/errorMessages` | Get all error messages |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyOrderLines/{SupplyLineId}/child/buySupply/{SupplyTrackingLineId}/child/distributionDetails/{DistributionNumber}` | Get one distribution detail |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyOrderLines/{SupplyLineId}/child/buySupply/{SupplyTrackingLineId}/child/distributionDetails` | Get all distribution details |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyOrderLines/{SupplyLineId}/child/buySupply/{SupplyTrackingLineId}` | Get one buy order detail |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyOrderLines/{SupplyLineId}/child/atpSupply` | Get all available-to-promise on-hand details |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyOrderLines/{SupplyLineId}` | Get one supply order line |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyOrderLines` | Get all supply order lines |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests` | Create one supply request |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests` | Get all supply requests |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyOrderLines/{SupplyLineId}/child/atpSupply/{SupplyTrackingLineId}` | Get one available-to-promise on-hand detail |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyOrderLines/{SupplyLineId}/child/buySupply/{SupplyTrackingLineId}/child/distributionDetails/{DistributionNumber}/child/projectDFF` | Get all project flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyOrderLines/{SupplyLineId}/child/makeSupply/{SupplyTrackingLineId}/child/distributionDetails` | Get all distribution details |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyOrderLines/{SupplyLineId}/child/makeSupply/{SupplyTrackingLineId}` | Get one make order detail |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyOrderLines/{SupplyLineId}/child/makeSupply` | Get all make order details |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyOrderLines/{SupplyLineId}/child/makeSupply/{SupplyTrackingLineId3}/child/distributionDetails/{DistributionNumber}` | Get one distribution detail |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyOrderLines/{SupplyLineId}/child/makeSupply/{SupplyTrackingLineId}/child/errorMessages` | Get all error messages |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyOrderLines/{SupplyLineId}/child/makeSupply/{SupplyTrackingLineId3}/child/distributionDetails/{DistributionNumber2}/child/projectDFF/{DistributionDetailsId}` | Get one project flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyOrderLines/{SupplyLineId}/child/makeSupply/{SupplyTrackingLineId3}/child/distributionDetails/{DistributionNumber}/child/projectDFF` | Get all project flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyOrderLines/{SupplyLineId}/child/buySupply/{SupplyTrackingLineId2}/child/errorMessages/{errorMessagesUniqID}` | Get one error message |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyOrderLines/{SupplyLineId}/child/buySupply/{SupplyTrackingLineId}/child/errorMessages` | Get all error messages |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyOrderLines/{SupplyLineId}/child/buySupply/{SupplyTrackingLineId}/child/distributionDetails/{DistributionNumber}/child/projectDFF/{DistributionDetailsId}` | Get one project flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyOrderLines/{SupplyLineId}/child/buySupply/{SupplyTrackingLineId}/child/supplyDocuments` | Get all supply documents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyOrderLines/{SupplyLineId}/child/buySupply/{SupplyTrackingLineId}/child/supplyDocuments/{supplyDocumentsUniqID}` | Get one supply document |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyRequestLines/{SupplyOrderReferenceLineNumber}/child/supplyRequestLinesXferDFF/{LineInterfaceId}` | Get one transfer order line flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}` | Get one supply request |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyRequestLines/{SupplyOrderReferenceLineNumber}/child/supplyRequestLinesXferDFF/{LineInterfaceId}` | Update a transfer order line flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyRequestLines/{SupplyOrderReferenceLineNumber}/child/transferCostRequestDetails/{TransferCostTypeName}` | Update a transfer cost detail |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyRequestLines/{SupplyOrderReferenceLineNumber}/child/transferCostRequestDetails/{TransferCostTypeName}` | Get one transfer cost detail |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyRequestLines/{SupplyOrderReferenceLineNumber}/child/distributionDetails/{DistributionNumber}` | Get one distribution detail |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyRequestLines/{SupplyOrderReferenceLineNumber}` | Update a supply request line |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyRequestLines/{SupplyOrderReferenceLineNumber}` | Get one supply request line |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyRequestLines/{SupplyOrderReferenceLineNumber}/child/distributionDetails/{DistributionNumber}` | Update a distribution detail |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}` | Update a supply request |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyRequestLines/{SupplyOrderReferenceLineNumber}/child/distributionDetails/{DistributionNumber}/child/projectDFF/{DistributionDetailsIntfId}` | Update a project flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/supplyRequests/{SupplyOrderReferenceNumber}/child/supplyRequestLines/{SupplyOrderReferenceLineNumber}/child/distributionDetails/{DistributionNumber}/child/projectDFF/{DistributionDetailsIntfId}` | Get one project flexfield |

## s up pl yS ou rc es

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplySources/{SourcingRuleId}` | Get one supply source |
| `GET` | `/fscmRestApi/resources/11.13.18.05/supplySources` | Get all supply sources |

## t ec hn ic ia nS ub in ve nt or ie s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/technicianSubinventories` | Create field service technician subinventories |
| `GET` | `/fscmRestApi/resources/11.13.18.05/technicianSubinventories` | Get all field service technician subinventories |
| `GET` | `/fscmRestApi/resources/11.13.18.05/technicianSubinventories/{TechSubinventoryId}` | Delete one field service technician subinventory |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/technicianSubinventories/{TechSubinventoryId}` | Update one field service technician subinventory |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/technicianSubinventories/{TechSubinventoryId}` | Get one field service technician subinventory |

## t ra de Op er at io ns

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/charges/{TradeOperationChargeId}/child/chargeReferences/{TradeOperationChargeReferenceValueId}/child/Attachments` | Create an attachment |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/charges/{TradeOperationChargeId}/child/chargeTransferOrderShipLines` | Create one transfer order shipment line |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/tradeOperationShipments` | Create a Shipment Trade Operation association. |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/action/createTradeOperationAndCharges` | Creates trade operations and charges |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/charges/{TradeOperationChargeId}/child/chargeReferences` | Create a charge reference |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/defaultTOShipLines` | Create a default transfer order shipment line |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/charges/{TradeOperationChargeId}/child/chargePurchaseOrderSchedules` | Create a purchase order schedule |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/Attachments` | Create an attachment |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/DFF` | Create trade operation descriptive flexfield |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/defaultPOSchedules` | Create a default purchase order schedule |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/charges/{TradeOperationChargeId}/child/chargeRelatedLines` | Create a charge related line |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/charges` | Create a trade operation charge |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/charges/{TradeOperationChargeId}/child/chargeReferences/{TradeOperationChargeReferenceValueId}/child/Attachments/{AttachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/charges/{TradeOperationChargeId}/child/chargeInvoiceAssociations/{ChargeInvoiceAssociationId}` | Get one charge invoice association |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/charges/{TradeOperationChargeId}/child/chargeInvoiceAssociations/{ChargeInvoiceAssociationId}` | Delete an invoice association |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/charges/{TradeOperationChargeId}/child/chargeInvoiceAssociations` | Get all invoice associations |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/charges/{TradeOperationChargeId}/child/chargePurchaseOrderSchedules/{TropChargePoScheduleId}` | Delete a purchase order schedule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/charges/{TradeOperationChargeId}/child/chargePurchaseOrderSchedules` | Get all the purchase order schedules |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/charges/{TradeOperationChargeId}/child/chargeRelatedLines` | Get all charge related lines |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/charges/{TradeOperationChargeId}/child/chargeReferences/{TradeOperationChargeReferenceValueId}/child/Attachments` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/charges/{TradeOperationChargeId}/child/chargeRelatedLines/{TradeOperationChargeRelatedLineId}` | Delete a charge related line |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/charges/{TradeOperationChargeId}/child/chargeReferences/{TradeOperationChargeReferenceValueId}/child/Attachments/{AttachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/charges/{TradeOperationChargeId}/child/chargeTransferOrderShipLines/{chargeTransferOrderShipLinesUniqID}` | Delete one transfer order shipment line |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/charges/{TradeOperationChargeId}/child/chargeTransferOrderShipLines` | Get all transfer order shipment lines |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/charges/{TradeOperationChargeId}/child/chargeReferences/{TradeOperationChargeReferenceValueId}/child/Attachments/{AttachmentsUniqID}` | Delete an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/charges/{TradeOperationChargeId}/child/chargeReferences` | Get all charge references |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/charges` | Get all trade operation charges |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}` | Delete a trade operation |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/tradeOperationShipments/{TradeOperationShipmentId}` | Delete a shipment associated with a trade operation |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradeOperations` | Get all trade operations |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/defaultTOShipLines` | Get all default transfer order shipment lines |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/defaultTOShipLines/{TropDefaultToShipLineId}` | Get one default transfer order shipment line |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/DFF` | Get all trade operation descriptive flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/charges/{TradeOperationChargeId}/child/chargeReferences/{TradeOperationChargeReferenceValueId}` | Delete a charge reference |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/DFF/{TradeOperationId2}` | Delete one trade operation descriptive flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/tradeOperationShipments/{TradeOperationShipmentId}` | Get a shipment associated with a trade operation |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/tradeOperationShipments` | Get all shipments associated with a trade operation |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/Attachments/{AttachmentsUniqID}` | Delete an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/defaultPOSchedules` | Get all default purchase order schedules |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/defaultPOSchedules/{TradeOperationDefaultPOScheduleId}` | Get one default purchase order schedule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/Attachments/{AttachmentsUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/charges/{TradeOperationChargeId}` | Delete a trade operation charge |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/defaultPOSchedules/{TradeOperationDefaultPOScheduleId}` | Delete a default purchase order schedule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/defaultTOShipLines/{TropDefaultToShipLineId}` | Delete a default transfer order shipment line |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/Attachments` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/Attachments/{AttachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/DFF/{TradeOperationId2}` | Get one trade operation descriptive flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/charges/{TradeOperationChargeId}/child/chargeRelatedLines/{TradeOperationChargeRelatedLineId}` | Get one charge related line |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/charges/{TradeOperationChargeId}/child/chargeTransferOrderShipLines/{chargeTransferOrderShipLinesUniqID}` | Update one transfer order shipment line |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/charges/{TradeOperationChargeId}/child/chargeRelatedLines/{TradeOperationChargeRelatedLineId}` | Update a charge related line |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/charges/{TradeOperationChargeId}/child/chargeTransferOrderShipLines/{chargeTransferOrderShipLinesUniqID}` | Get one transfer order shipment line |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/charges/{TradeOperationChargeId}` | Update a trade operation charge |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}` | Get one trade operation |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/charges/{TradeOperationChargeId}/child/chargePurchaseOrderSchedules/{TropChargePoScheduleId}` | Update a purchase order schedule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/charges/{TradeOperationChargeId}` | Get one trade operation charge |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}` | Update a trade operation |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/Attachments/{AttachmentsUniqID}` | Get an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/Attachments/{AttachmentsUniqID}` | Update an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/charges/{TradeOperationChargeId}/child/chargeReferences/{TradeOperationChargeReferenceValueId}/child/Attachments/{AttachmentsUniqID}` | Get an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/charges/{TradeOperationChargeId}/child/chargePurchaseOrderSchedules/{TropChargePoScheduleId}` | Get one purchase order schedule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/charges/{TradeOperationChargeId}/child/chargeReferences/{TradeOperationChargeReferenceValueId}/child/Attachments/{AttachmentsUniqID}` | Update an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/charges/{TradeOperationChargeId}/child/chargeReferences/{TradeOperationChargeReferenceValueId}` | Get one charge reference |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/DFF/{TradeOperationId2}` | Update one trade operation descriptive flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/charges/{TradeOperationChargeId}/child/chargeReferences/{TradeOperationChargeReferenceValueId}` | Update a charge reference |
| `POST` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/action/associateFilteredPOSchedulesAndAllocate` | Associate the filtered purchase order schedules with a trade operation. |
| `POST` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/action/calculateTax` | Calculate tax for a trade operation |
| `POST` | `/fscmRestApi/resources/11.13.18.05/tradeOperations` | Create a trade operation |
| `POST` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/action/createTradeOperationFromFilteredSet` | Create trade operation for filtered set. |
| `POST` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/action/createTradeOperationFromTemplateForFilterSet` | Create trade operation from template for filtered set |
| `POST` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/action/createTradeOperationFromTemplate` | Create trade operations |
| `POST` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/charges/{TradeOperationChargeId}/action/cancelChargeLine` | Cancel the selected charge line |
| `POST` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/action/createTradeOperationFromInvoices` | Add charges and link it with invoice lines |
| `POST` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/action/associateFilteredTOShipmentLinesAndAllocate` | Associate filtered transfer order shipments with a trade operation. |
| `POST` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/action/allocateCharges` | Allocate charges for a trade operation |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/charges/{TradeOperationChargeId}/child/chargeReferences/{TradeOperationChargeReferenceValueId}/child/Attachments/{AttachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/charges/{TradeOperationChargeId}/child/chargeReferences/{TradeOperationChargeReferenceValueId}/child/Attachments/{AttachmentsUniqID}/enclosure/FileContents` | Get a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/Attachments/{AttachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/tradeOperations/{TradeOperationId}/child/Attachments/{AttachmentsUniqID}/enclosure/FileContents` | Get a FileContents |

## t ra di ng Pa rt ne rI te mR el at io ns hi ps

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/tradingPartnerItemRelationships/{ItemRelationshipId}/child/LinkedMPNRelationships` | Create links from supplier item relationships to MPN relationships |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/tradingPartnerItemRelationships/{ItemRelationshipId}/child/LinkedSupplierItemRelationships` | Create links from MPN relationships to supplier item relationships |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/tradingPartnerItemRelationships` | Create relationships |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradingPartnerItemRelationships/{ItemRelationshipId}/child/LinkedMPNRelationships` | Get all linked MPN relationships |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradingPartnerItemRelationships/{ItemRelationshipId}/child/LinkedMPNRelationships/{TPILinkageId}` | Delete MPN relationship link |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradingPartnerItemRelationships/{ItemRelationshipId}/child/LinkedSupplierItemRelationships/{TPILinkageId}` | Delete supplier item relationship link |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradingPartnerItemRelationships/{ItemRelationshipId}/child/LinkedSupplierItemRelationships` | Get all linked supplier item relationships |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradingPartnerItemRelationships/{ItemRelationshipId}/child/translatableAttributes` | Get all translatable attributes |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradingPartnerItemRelationships/{ItemRelationshipId}/child/translatableAttributes` | Create translatable attributes |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradingPartnerItemRelationships` | Get all relationships |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradingPartnerItemRelationships/{ItemRelationshipId}/child/DFF` | Create descriptive flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradingPartnerItemRelationships/{ItemRelationshipId}/child/DFF` | Get all descriptive flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradingPartnerItemRelationships/{ItemRelationshipId}` | Delete a relationship |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/tradingPartnerItemRelationships/{ItemRelationshipId}/child/LinkedSupplierItemRelationships/{TPILinkageId}` | Update linked supplier item relationship |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/tradingPartnerItemRelationships/{ItemRelationshipId}/child/LinkedSupplierItemRelationships/{TPILinkageId}` | Get one linked supplier item relationship |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/tradingPartnerItemRelationships/{ItemRelationshipId}/child/translatableAttributes/{translatableAttributesUniqID}` | Get one translatable attribute |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/tradingPartnerItemRelationships/{ItemRelationshipId}/child/translatableAttributes/{translatableAttributesUniqID}` | Update a translatable attribute |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/tradingPartnerItemRelationships/{ItemRelationshipId}/child/LinkedMPNRelationships/{TPILinkageId}` | Get one linked MPN relationship |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/tradingPartnerItemRelationships/{ItemRelationshipId}/child/DFF/{ItemRelationshipId2}` | Get one descriptive flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/tradingPartnerItemRelationships/{ItemRelationshipId}/child/DFF/{ItemRelationshipId2}` | Update a descriptive flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/tradingPartnerItemRelationships/{ItemRelationshipId}` | Get one relationship |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/tradingPartnerItemRelationships/{ItemRelationshipId}` | Update a relationship |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/tradingPartnerItemRelationships/{ItemRelationshipId}/child/LinkedMPNRelationships/{TPILinkageId}` | Update linked MPN relationship |

## t ra di ng Pa rt ne rI te ms

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/tradingPartnerItems/{TradingPartnerItemId}/child/Attachments/{AttachmentsUniqID}` | Get one attachment |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/tradingPartnerItems` | Create a trading partner item |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradingPartnerItems/{TradingPartnerItemId}/child/Attachments/{AttachmentsUniqID}/action/checkOut` | Check out the trading partner item attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradingPartnerItems/{TradingPartnerItemId}/child/Attachments` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradingPartnerItems/{TradingPartnerItemId}/child/Attachments/{AttachmentsUniqID}/child/AttachmentDFF` | Create descriptive flexfield values for attached documents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradingPartnerItems/{TradingPartnerItemId}/child/Attachments/{AttachmentsUniqID}/child/AttachmentDFF/{AttachmentDFFUniqID}` | Get a descriptive flexfield value |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradingPartnerItems/{TradingPartnerItemId}/child/Attachments/{AttachmentsUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradingPartnerItems/{TradingPartnerItemId}` | Delete a trading partner item |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradingPartnerItems` | Get all trading partner items |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradingPartnerItems/{TradingPartnerItemId}/child/DFF` | Create descriptive flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/tradingPartnerItems/{TradingPartnerItemId}/child/DFF` | Get all descriptive flexfields |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/tradingPartnerItems/{TradingPartnerItemId}/child/Attachments/{AttachmentsUniqID}/child/AttachmentDFF/{AttachmentDFFUniqID}` | Update descriptive flexfield values for attached documents |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/tradingPartnerItems/{TradingPartnerItemId}/child/DFF/{TpItemId}` | Get one descriptive flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/tradingPartnerItems/{TradingPartnerItemId}/child/Attachments/{AttachmentsUniqID}/child/AttachmentDFF` | Get all descriptive flexfield values |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/tradingPartnerItems/{TradingPartnerItemId}/child/Attachments/{AttachmentsUniqID}` | Remove an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/tradingPartnerItems/{TradingPartnerItemId}` | Update a trading partner item |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/tradingPartnerItems/{TradingPartnerItemId}` | Get one trading partner item |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/tradingPartnerItems/{TradingPartnerItemId}/child/DFF/{TpItemId}` | Update a descriptive flexfield |
| `POST` | `/fscmRestApi/resources/11.13.18.05/tradingPartnerItems/{TradingPartnerItemId}/child/Attachments/{AttachmentsUniqID}/action/cancelCheckOut` | Cancel the checkout for the trading partner item attachment |
| `POST` | `/fscmRestApi/resources/11.13.18.05/tradingPartnerItems/{TradingPartnerItemId}/child/Attachments` | Upload an attachment |
| `POST` | `/fscmRestApi/resources/11.13.18.05/tradingPartnerItems/{TradingPartnerItemId}/child/Attachments/{AttachmentsUniqID}` | Replace an attachment |
| `POST` | `/fscmRestApi/resources/11.13.18.05/tradingPartnerItems/{TradingPartnerItemId}/child/Attachments/{AttachmentsUniqID}/action/checkIn` | Check in trading partner item attachment |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/tradingPartnerItems/{TradingPartnerItemId}/child/Attachments/{AttachmentsUniqID}/enclosure/FileContents` | Get a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/tradingPartnerItems/{TradingPartnerItemId}/child/Attachments/{AttachmentsUniqID}/enclosure/FileContents` | Replace a FileContents |

## t ra ns po rt at io nS ch ed ul es

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/transportationSchedules/{TransportationScheduleAssignmentId}/child/DFF` | Create flexfields |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/transportationSchedules/{TransportationScheduleAssignmentId}/child/SiteSchedules/{TransportationScheduleAssignmentId2}/child/DFF` | Create flexfields |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/transportationSchedules/{TransportationScheduleAssignmentId}/child/SiteSchedules` | Create site schedules |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/transportationSchedules` | Create transportation schedules |
| `GET` | `/fscmRestApi/resources/11.13.18.05/transportationSchedules/{TransportationScheduleAssignmentId}/child/SiteSchedules/{TransportationScheduleAssignmentId2}/child/DFF/{CalendarAssignmentId}` | Delete one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/transportationSchedules/{TransportationScheduleAssignmentId}/child/DFF/{CalendarAssignmentId}` | Delete one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/transportationSchedules/{TransportationScheduleAssignmentId}/child/SiteSchedules/{TransportationScheduleAssignmentId2}` | Delete one site schedule |
| `GET` | `/fscmRestApi/resources/11.13.18.05/transportationSchedules/{TransportationScheduleAssignmentId}/child/SiteSchedules` | Get all site schedules |
| `GET` | `/fscmRestApi/resources/11.13.18.05/transportationSchedules` | Get all transportation schedules |
| `GET` | `/fscmRestApi/resources/11.13.18.05/transportationSchedules/{TransportationScheduleAssignmentId}/child/SiteSchedules/{TransportationScheduleAssignmentId2}/child/DFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/transportationSchedules/{TransportationScheduleAssignmentId}/child/DFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/transportationSchedules/{TransportationScheduleAssignmentId}` | Delete one transportation schedule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/transportationSchedules/{TransportationScheduleAssignmentId}/child/SiteSchedules/{TransportationScheduleAssignmentId2}/child/DFF/{CalendarAssignmentId}` | Update one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/transportationSchedules/{TransportationScheduleAssignmentId}/child/SiteSchedules/{TransportationScheduleAssignmentId2}/child/DFF/{CalendarAssignmentId}` | Get one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/transportationSchedules/{TransportationScheduleAssignmentId}/child/SiteSchedules/{TransportationScheduleAssignmentId2}` | Update one site schedule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/transportationSchedules/{TransportationScheduleAssignmentId}` | Update one transportation schedule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/transportationSchedules/{TransportationScheduleAssignmentId}` | Get one transportation schedule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/transportationSchedules/{TransportationScheduleAssignmentId}/child/DFF/{CalendarAssignmentId}` | Get one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/transportationSchedules/{TransportationScheduleAssignmentId}/child/SiteSchedules/{TransportationScheduleAssignmentId2}` | Get one site schedule |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/transportationSchedules/{TransportationScheduleAssignmentId}/child/DFF/{CalendarAssignmentId}` | Update one flexfield |

## t ra ns po rt at io nS hi pm en ts LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/transportationShipmentsLOV/{OrganizationId}` | Get one transportation shipment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/transportationShipmentsLOV` | Get all transportation shipments |

## t ru nk St oc ks

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/trunkStocks/{trunkStocksUniqID}` | Get one trunk stock |
| `GET` | `/fscmRestApi/resources/11.13.18.05/trunkStocks` | Get all trunk stocks |

## u ni tO fM ea su re Cl as se s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/unitOfMeasureClasses` | Create one unit of measure class |
| `GET` | `/fscmRestApi/resources/11.13.18.05/unitOfMeasureClasses/{ClassCode}/child/interclassConversions` | Get all interclass conversions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/unitOfMeasureClasses/{ClassCode}/child/DFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/unitOfMeasureClasses/{ClassCode}/child/interclassConversions` | Create one interclass conversion |
| `GET` | `/fscmRestApi/resources/11.13.18.05/unitOfMeasureClasses/{ClassCode}/child/UnitOfMeasureDFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/unitOfMeasureClasses/{ClassCode}/child/UnitOfMeasureDFF` | Create one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/unitOfMeasureClasses/{ClassCode}` | Delete one unit of measure class |
| `GET` | `/fscmRestApi/resources/11.13.18.05/unitOfMeasureClasses` | Get all unit of measure classes |
| `GET` | `/fscmRestApi/resources/11.13.18.05/unitOfMeasureClasses/{ClassCode}/child/DFF` | Create one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/unitOfMeasureClasses/{ClassCode}/child/UnitOfMeasureDFF/{UnitOfMeasureId}` | Update a flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/unitOfMeasureClasses/{ClassCode}/child/interclassConversions/{InterclassConversionId}` | Get one interclass conversion |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/unitOfMeasureClasses/{ClassCode}/child/interclassConversions/{InterclassConversionId}` | Update one interclass conversion |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/unitOfMeasureClasses/{ClassCode}` | Update one unit of measure class |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/unitOfMeasureClasses/{ClassCode}` | Get one unit of measure class |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/unitOfMeasureClasses/{ClassCode}/child/DFF/{UomClass}` | Get one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/unitOfMeasureClasses/{ClassCode}/child/UnitOfMeasureDFF/{UnitOfMeasureId}` | Get one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/unitOfMeasureClasses/{ClassCode}/child/DFF/{UomClass}` | Update a flexfield |

## u ni tO fM ea su re Co nv er si on s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/unitOfMeasureConversions/{unitOfMeasureConversionsUniqID}` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/unitOfMeasureConversions` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/unitOfMeasureConversions` | Create conversions |

## u ni ts Of Me as ur e

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/unitsOfMeasure` | Create one unit of measure |
| `GET` | `/fscmRestApi/resources/11.13.18.05/unitsOfMeasure/{UOMCode}/child/intraclassConversions` | Get all intraclass conversions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/unitsOfMeasure/{UOMCode}/child/DFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/unitsOfMeasure/{UOMCode}/child/translatedData` | Get all translated data |
| `GET` | `/fscmRestApi/resources/11.13.18.05/unitsOfMeasure/{UOMCode}/child/intraclassConversions` | Create one intraclass conversion |
| `GET` | `/fscmRestApi/resources/11.13.18.05/unitsOfMeasure/{UOMCode}/child/DFF` | Create one flexfield |
| `GET` | `/fscmRestApi/resources/11.13.18.05/unitsOfMeasure/{UOMCode}` | Delete one unit of measure |
| `GET` | `/fscmRestApi/resources/11.13.18.05/unitsOfMeasure` | Get all units of measure |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/unitsOfMeasure/{UOMCode}/child/translatedData/{translatedDataUniqID}` | Update one translation |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/unitsOfMeasure/{UOMCode}/child/intraclassConversions/{ConversionId}` | Update one intraclass conversion |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/unitsOfMeasure/{UOMCode}/child/intraclassConversions/{ConversionId}` | Get one intraclass conversion |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/unitsOfMeasure/{UOMCode}` | Update one unit of measure |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/unitsOfMeasure/{UOMCode}` | Get one unit of measure |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/unitsOfMeasure/{UOMCode}/child/DFF/{UnitOfMeasureId}` | Get one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/unitsOfMeasure/{UOMCode}/child/translatedData/{translatedDataUniqID}` | Get one translated data |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/unitsOfMeasure/{UOMCode}/child/DFF/{UnitOfMeasureId}` | Update a flexfield |

## u ti li za ti on Me te rs

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/utilizationMeters/{MeterId}` | Get one utilization meter |
| `GET` | `/fscmRestApi/resources/11.13.18.05/utilizationMeters` | Get all utilization meters |

## v al id at eC or re ct ed Qu an ti ti es

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/validateCorrectedQuantities/{validateCorrectedQuantitiesUniqID}` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/validateCorrectedQuantities` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/validateCorrectedQuantities` | Create validations |

## v al id at eI ns pe ct Qu an ti ti es

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/validateInspectQuantities/{validateInspectQuantitiesUniqID}` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/validateInspectQuantities` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/validateInspectQuantities` | Create validations |

## v al id at eI nv en to ry Tr an sa ct io nQ ua nt it ie s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/validateInventoryTransactionQuantities/{validateInventoryTransactionQuantitiesUniqID}` | Number that identifies the inventory item. |
| `GET` | `/fscmRestApi/resources/11.13.18.05/validateInventoryTransactionQuantities` | Number that identifies the inventory item. |
| `GET` | `/fscmRestApi/resources/11.13.18.05/validateInventoryTransactionQuantities` | Create validation |

## v al id at eP ic ke dQ ua nt it ie s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/validatePickedQuantities/{validatePickedQuantitiesUniqID}` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/validatePickedQuantities` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/validatePickedQuantities` | Create validation |

## v al id at eP ut Aw ay Qu an ti ti es

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/validatePutAwayQuantities/{validatePutAwayQuantitiesUniqID}` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/validatePutAwayQuantities` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/validatePutAwayQuantities` | Create validations |

## v al id at eR et ur nQ ua nt it ie s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/validateReturnQuantities/{validateReturnQuantitiesUniqID}` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/validateReturnQuantities` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/validateReturnQuantities` | Create validation |

## v al ua ti on Un it Co mb in at io ns LO V

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/valuationUnitCombinationsLOV` | Create |
| `GET` | `/fscmRestApi/resources/11.13.18.05/valuationUnitCombinationsLOV/{valuationUnitCombinationsLOVUniqID}` | Get |
| `GET` | `/fscmRestApi/resources/11.13.18.05/valuationUnitCombinationsLOV/{valuationUnitCombinationsLOVUniqID}` | Delete |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/valuationUnitCombinationsLOV/{valuationUnitCombinationsLOVUniqID}` | Update |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/valuationUnitCombinationsLOV` | Get all |

## v al ua ti on Un it sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/valuationUnitsLOV` | Get all valuation units |
| `GET` | `/fscmRestApi/resources/11.13.18.05/valuationUnitsLOV/{ValuationUnitId}` | Get a valuation unit |

## v mi Al lI te ms LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiAllItemsLOV/{InventoryItemId}` | Get one item |
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiAllItemsLOV` | Get all items |

## v mi Al lO rg an iz at io ns LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiAllOrganizationsLOV/{OrganizationId}` | Get one organization |
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiAllOrganizationsLOV` | Get all organizations |

## v mi Al lS ub in ve nt or ie sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiAllSubinventoriesLOV/{vmiAllSubinventoriesLOVUniqID}` | Get one subinventory |
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiAllSubinventoriesLOV` | Get all subinventories |

## v mi Al lS up pl ie rs LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiAllSuppliersLOV/{SupplierId}` | Get one supplier |
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiAllSuppliersLOV` | Get all suppliers |

## v mi An al ys tO rg an iz at io ns LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiAnalystOrganizationsLOV/{OrganizationId}` | Get one organization |
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiAnalystOrganizationsLOV` | Get all organizations |

## v mi An al ys tS up pl ie rs LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiAnalystSuppliersLOV/{SupplierId}` | Get one supplier |
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiAnalystSuppliersLOV` | Get all suppliers |

## v mi Cr ea te Re pl en is hm en tI te ms LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiCreateReplenishmentItemsLOV/{InventoryItemId}` | Get one item |
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiCreateReplenishmentItemsLOV` | Get all items |

## v mi Cr ea te Re pl en is hm en tO rg an iz at io ns LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiCreateReplenishmentOrganizationsLOV/{OrganizationId}` | Get one organization |
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiCreateReplenishmentOrganizationsLOV` | Get all organizations |

## v mi Cr ea te Re pl en is hm en tS ub in ve nt or ie sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiCreateReplenishmentSubinventoriesLOV/{SubinventoryId}` | Get one subinventory |
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiCreateReplenishmentSubinventoriesLOV` | Get all subinventories |

## v mi It em s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiItems/{VmiItemId}/child/minimumMaximumHistory/{minimumMaximumHistoryUniqID}` | Get one history record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiItems/{VmiItemId}/child/minimumMaximumHistory` | Get all history records |
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiItems` | Get all items |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/vmiItems/{VmiItemId}` | Update one item |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/vmiItems/{VmiItemId}` | Get one item |

## v mi It em sM is si ng Mi nM ax Qu an ti ty Co un ts

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiItemsMissingMinMaxQuantityCounts` | Get the count of items missing minimum and maximum quantities for all locations |
| `POST` | `/fscmRestApi/resources/11.13.18.05/vmiItemsMissingMinMaxQuantityCounts/action/getTotal` | Get the total count of the items missing minimum and maximum quantities |
| `POST` | `/fscmRestApi/resources/11.13.18.05/vmiItemsMissingMinMaxQuantityCounts/{LocationCode}` | Get the count of items missing minimum and maximum quantities for one location |

## v mi Ne tw or kI te ms LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiNetworkItemsLOV/{InventoryItemId}` | Get one item |
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiNetworkItemsLOV` | Get all items |

## v mi Re la ti on sh ip s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/vmiRelationships/{vmiRelationshipsUniqID}/child/vmiSubinventories` | Create subinventory relationships |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/vmiRelationships` | Create relationships |
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiRelationships/{vmiRelationshipsUniqID}/child/vmiSubinventories/{vmiSubinventoriesUniqID}` | Delete one subinventory relationship |
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiRelationships/{vmiRelationshipsUniqID}/child/vmiAnalysts/{vmiAnalystsUniqID}` | Get one analyst |
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiRelationships/{vmiRelationshipsUniqID}/child/vmiAnalysts` | Get all analysts |
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiRelationships/{vmiRelationshipsUniqID}/child/vmiSubinventories` | Get all subinventory relationships |
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiRelationships` | Get all relationships |
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiRelationships/{vmiRelationshipsUniqID}` | Delete one relationship |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/vmiRelationships/{vmiRelationshipsUniqID}` | Update one relationship |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/vmiRelationships/{vmiRelationshipsUniqID}/child/vmiSubinventories/{vmiSubinventoriesUniqID}` | Update one subinventory relationship |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/vmiRelationships/{vmiRelationshipsUniqID}` | Get one relationship |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/vmiRelationships/{vmiRelationshipsUniqID}/child/vmiSubinventories/{vmiSubinventoriesUniqID}` | Get one subinventory relationship |

## v mi Re pl en is hm en tE xc ep ti on Co un ts By Pl an ni ng Ow ne r

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiReplenishmentExceptionCountsByPlanningOwner/{InventoryPlanningOwnerCode}` | Get one inventory exception |
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiReplenishmentExceptionCountsByPlanningOwner` | Get all inventory exceptions |

## v mi Re pl en is hm en tE xc ep ti on Co un ts By Su pp li er

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiReplenishmentExceptionCountsBySupplier/{SupplierId}` | Get one inventory exception |
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiReplenishmentExceptionCountsBySupplier` | Get all inventory exceptions |

## v mi Re pl en is hm en tI te ms LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiReplenishmentItemsLOV/{InventoryItemId}` | Get one item |
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiReplenishmentItemsLOV` | Get all items |

## v mi Re pl en is hm en tL if eC yc le Tr an sa ct io nC ou nt s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiReplenishmentLifeCycleTransactionCounts` | Get replenishment lifecycle transaction count for all statuses |
| `POST` | `/fscmRestApi/resources/11.13.18.05/vmiReplenishmentLifeCycleTransactionCounts/action/getTotal` | Retrieve the total count of the replenishment lifecycle transactions |
| `POST` | `/fscmRestApi/resources/11.13.18.05/vmiReplenishmentLifeCycleTransactionCounts/{StatusCode}` | Get replenishment lifecycle transaction count for one status |

## v mi Re pl en is hm en tO rg an iz at io ns LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiReplenishmentOrganizationsLOV/{OrganizationId}` | Get one organization |
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiReplenishmentOrganizationsLOV` | Get all organizations |

## v mi Re pl en is hm en tR eq ue st s

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiReplenishmentRequests/{ReplenishmentRequestNumber}/child/ReplenishmentLifeCycle/{ReplenishmentLifeCycleUniqID}` | Get one life cycle |
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiReplenishmentRequests/{ReplenishmentRequestNumber}/child/ReplenishmentRequestErrors` | Get all errors |
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiReplenishmentRequests/{ReplenishmentRequestNumber}/child/ReplenishmentRequestErrors/{ErrorId}` | Get one error |
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiReplenishmentRequests/{ReplenishmentRequestNumber}/child/ReplenishmentLifeCycle` | Get all life cycles |
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiReplenishmentRequests` | Create list of replenishment requests |
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiReplenishmentRequests` | Get all replenishment requests |
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiReplenishmentRequests/{ReplenishmentRequestNumber}` | Get one replenishment request |

## v mi Re pl en is hm en tR eq ue st sI nP ro ce ss Co un ts

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiReplenishmentRequestsInProcessCounts/{StatusCode}` | Get replenishment request count for one status |
| `POST` | `/fscmRestApi/resources/11.13.18.05/vmiReplenishmentRequestsInProcessCounts/action/getTotal` | Retrieves the total count of replenishment requests in process. |
| `POST` | `/fscmRestApi/resources/11.13.18.05/vmiReplenishmentRequestsInProcessCounts` | Get replenishment request counts for all statuses |

## v mi Re pl en is hm en tS ub in ve nt or ie sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiReplenishmentSubinventoriesLOV/{Subinventory}` | Get one subinventory |
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiReplenishmentSubinventoriesLOV` | Get all subinventories |

## v mi Re pl en is hm en tS up pl ie rI te ms LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiReplenishmentSupplierItemsLOV/{SupplierItemNumber}` | Get one supplier item |
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiReplenishmentSupplierItemsLOV` | Get all supplier items |

## v mi Re pl en is hm en tS up pl ie rS it es LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiReplenishmentSupplierSitesLOV/{SupplierSiteId}` | Get one supplier site |
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiReplenishmentSupplierSitesLOV` | Get all supplier sites |

## v mi Re pl en is hm en tS up pl ie rs LO V

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiReplenishmentSuppliersLOV/{SupplierId}` | Get one supplier |
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiReplenishmentSuppliersLOV` | Get all suppliers |

## v mi Sh ip To Lo ca ti on sL OV

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiShipToLocationsLOV/{ShipToLocationCode}` | Get one ship-to location |
| `GET` | `/fscmRestApi/resources/11.13.18.05/vmiShipToLocationsLOV` | Get all ship-to locations |

## w or kA re as

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/workAreas` | Create work areas |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workAreas/{WorkAreaId}/child/WorkAreaDFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workAreas/{WorkAreaId}/child/WorkAreaDFF` | Create flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workAreas/{WorkAreaId}` | Delete one work area |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workAreas` | Get all work areas |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workAreas/{WorkAreaId}/child/WorkAreaDFF/{WorkAreaId2}` | Update one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workAreas/{WorkAreaId}/child/WorkAreaDFF/{WorkAreaId2}` | Get one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workAreas/{WorkAreaId}` | Get one work area |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workAreas/{WorkAreaId}` | Update one work area |

## w or kC en te rR es ou rc eE xc ep ti on s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/workCenterResourceExceptions/{WorkCenterResourceExceptionId}/child/resourceAvailabilityOverrides` | Create one resource availability override |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/workCenterResourceExceptions` | Create one work center resource exception |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workCenterResourceExceptions/{WorkCenterResourceExceptionId}/child/resourceAvailabilityOverrides` | Get all resource availability overrides |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workCenterResourceExceptions/{WorkCenterResourceExceptionId}/child/resourceAvailabilityOverrides/{WorkCenterResourceExceptionDetailId}` | Delete a resource availability override |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workCenterResourceExceptions/action/generateWorkCenterResourceCalendarData` | Generate calendar data for a work center resource in the Work Center Resource Calendar task |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workCenterResourceExceptions` | Get all work center resource exceptions |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workCenterResourceExceptions/{WorkCenterResourceExceptionId}/child/resourceAvailabilityOverrides/{WorkCenterResourceExceptionDetailId}` | Update a resource availability override |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workCenterResourceExceptions/{WorkCenterResourceExceptionId}/child/resourceAvailabilityOverrides/{WorkCenterResourceExceptionDetailId}` | Get one resource availability override |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workCenterResourceExceptions/{WorkCenterResourceExceptionId}` | Get one work center resource exception |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workCenterResourceExceptions/{WorkCenterResourceExceptionId}` | Update a work center resource exception |
| `POST` | `/fscmRestApi/resources/11.13.18.05/workCenterResourceExceptions/{WorkCenterResourceExceptionId}` | Delete a work center resource exception |

## w or kd ay Pa tt er ns

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/workdayPatterns/{PatternId}/child/workdayPatternShifts` | Create pattern details |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/workdayPatterns` | Create patterns |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workdayPatterns/{PatternId}/child/workdayPatternShifts/{PatternDetailId}` | Delete one pattern detail |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workdayPatterns/{PatternId}/child/workdayPatternShifts` | Get all pattern details |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workdayPatterns/{PatternId}` | Delete one pattern |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workdayPatterns` | Get all patterns |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workdayPatterns/{PatternId}/child/workdayPatternShifts/{PatternDetailId}` | Update one pattern detail |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workdayPatterns/{PatternId}/child/workdayPatternShifts/{PatternDetailId}` | Get one pattern detail |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workdayPatterns/{PatternId}` | Get one pattern |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workdayPatterns/{PatternId}` | Update one pattern |

## w or kD ef in it io nN am es

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/workDefinitionNames/{WorkDefinitionNameId}/child/translations` | Get all names and descriptions |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workDefinitionNames/{WorkDefinitionNameId}/child/translations/{translationsUniqID}` | Get one name and description |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workDefinitionNames` | Get all names |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workDefinitionNames/{WorkDefinitionNameId}` | Get one name |

## w or kO rd er s

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationOutput/{WorkOrderOperationOutputId}/child/OutputLotNumber` | Create lot numbers |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderAttachment` | Create an attachment |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderLotNumber` | Create lot numbers |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderMaterial/{WorkOrderOperationMaterialId}/child/WorkOrderOperationMaterialAttachment` | Create an attachment |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderActiveOperation/{WorkOrderOperationId}/child/WorkOrderOperationAttachment/{WorkOrderOperationAttachmentUniqID}/enclosure/FileContents` | Delete a FileContents |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderSerialNumber` | Create serial numbers |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderExecutionRun` | Create execution runs |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderAssemblyComponent/{WoOperationMaterialId}/child/WorkOrderAssemblyComponentSerial` | Create serials |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationResource/{WorkOrderOperationResourceId}/child/WorkOrderOperationResourceAttachment` | Create an attachment |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderAssemblyComponent/{WoOperationMaterialId}/child/WorkOrderAssemblyComponentLot` | Create lots |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationAttachment` | Create an attachment |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderActiveOperation/{WorkOrderOperationId}/child/WorkOrderOperationAttachment/{WorkOrderOperationAttachmentUniqID}` | Delete an attachment |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationResource` | Create resources |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationMaterial` | Create materials |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationOutput/{WorkOrderOperationOutputId}/child/OutputAttachment` | Create an attachment |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationResource/{WorkOrderOperationResourceId}/child/WorkOrderOperationResourceInstance` | Create instances |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationMaterial/{WorkOrderOperationMaterialId}/child/WorkOrderOperationMaterialAttachment` | Create an attachment |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderResource/{WorkOrderOperationResourceId}/child/WorkOrderOperationResourceInstance` | Create instances |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationOutput` | Create one output |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderResource/{WorkOrderOperationResourceId}/child/WorkOrderOperationResourceAttachment` | Create an attachment |
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation` | Create operations |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperationDependency` | Get all work order operation dependency records |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderDFF` | Create flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderResource/{WorkOrderOperationResourceId}/child/WorkOrderResourceExceptionCount` | Get all counts |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderResource/{WorkOrderOperationResourceId2}/child/WorkOrderOperationResourceAttachment/{WorkOrderOperationResourceAttachmentUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderDFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderResource/{WorkOrderOperationResourceId}` | Get one resource |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderExecutionRun/{WorkOrderExecutionRunId}` | Delete one execution run |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderResource` | Get all resources |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderExecutionRun` | Get all execution runs |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperationDependency/{WorkOrderOperationDependencyUniqID}` | Get one work order operation dependency record |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderResource/{WorkOrderOperationResourceId2}/child/WorkOrderOperationResourceAttachment/{WorkOrderOperationResourceAttachmentUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderResource/{WorkOrderOperationResourceId2}/child/WorkOrderOperationResourceAttachment/{WorkOrderOperationResourceAttachmentUniqID}` | Delete an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderResource/{WorkOrderOperationResourceId}/child/WorkOrderOperationResourceAttachment` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationMaterial/{WorkOrderOperationMaterialId}/child/WorkOrderOperationMaterialAttachment` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationMaterial/{WorkOrderOperationMaterialId3}/child/WorkOrderOperationMaterialAttachment/{WorkOrderOperationMaterialAttachmentUniqID}` | Delete an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationMaterial/{WorkOrderOperationMaterialId3}/child/WorkOrderOperationMaterialAttachment/{WorkOrderOperationMaterialAttachmentUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationMaterial/{WorkOrderOperationMaterialId}/child/WorkOrderMaterialExceptionCount` | Get all counts |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderStatus/{WoStatusId}` | Get one status |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationSerialNumber` | Get all serial numbers |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationSerialNumber/action/generateSerialNumbers` | Generates product serial numbers for the given work order identifier. |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationSerialNumber/{WorkOrderProductSerialId}` | Get one serial number |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationMaterial` | Get all materials |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationMaterial/{WorkOrderOperationMaterialId}` | Delete one material |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationMaterial/{WorkOrderOperationMaterialId}/child/WorkOrderMaterialExceptionCount/{WorkOrderOperationMaterialId4}` | Get one count |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderAttachment/{WorkOrderAttachmentUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderAttachment` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderAttachment/{WorkOrderAttachmentUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/ProjectDetailsDFF` | Get all project details |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/ProjectDetailsDFF` | Create one project detail |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationMaterial/{WorkOrderOperationMaterialId3}/child/WorkOrderOperationMaterialDFF/{WoOperationMaterialId}` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationMaterial/{WorkOrderOperationMaterialId}/child/WorkOrderOperationMaterialDFF` | Create flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationMaterial/{WorkOrderOperationMaterialId}/child/WorkOrderOperationSubstituteMaterial` | Get all substitute materials |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderAttachment/{WorkOrderAttachmentUniqID}` | Delete an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationMaterial/{WorkOrderOperationMaterialId3}/child/WorkOrderOperationSubstituteMaterial/{WorkOrderOperationSubstituteMaterialId}` | Get one substitute material |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderMaterial/{WorkOrderOperationMaterialId}/child/WorkOrderOperationMaterialAttachment/{WorkOrderOperationMaterialAttachmentUniqID}` | Delete an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderMaterial` | Get all materials |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderMaterial/{WorkOrderOperationMaterialId}/child/WorkOrderOperationMaterialAttachment` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderMaterial/{WorkOrderOperationMaterialId}/child/WorkOrderOperationMaterialAttachment/{WorkOrderOperationMaterialAttachmentUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderMaterial/{WorkOrderOperationMaterialId}/child/WorkOrderOperationMaterialAttachment/{WorkOrderOperationMaterialAttachmentUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderExceptionCount` | Get all counts |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderExceptionCount/{WorkOrderId4}` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderLotNumber/{WorkOrderProductLotId}` | Delete one lot number |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderLotNumber/{WorkOrderProductLotId}` | Get one lot number |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderLotNumber` | Get all lot numbers |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderMaterial/{WorkOrderOperationMaterialId}/child/WorkOrderMaterialExceptionCount` | Get all counts |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperationParameter/{WorkOrderOperationParameterUniqID}` | Get one parameter |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperationParameter` | Get all parameters |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderReservation` | Get all reservations |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderStatus` | Get all statuses |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderReservation/{ReservationId}` | Get one reservation |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderMaterial/{WorkOrderOperationMaterialId}/child/WorkOrderOperationMaterialDFF` | Create flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderMaterial/{WorkOrderOperationMaterialId}/child/WorkOrderMaterialExceptionCount/{WorkOrderOperationMaterialId2}` | Get one count |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderMaterial/{WorkOrderOperationMaterialId}/child/WorkOrderOperationMaterialDFF/{WoOperationMaterialId}` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderMaterial/{WorkOrderOperationMaterialId}/child/WorkOrderOperationSubstituteMaterial/{WorkOrderOperationSubstituteMaterialId}` | Get one substitute material |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderMaterial/{WorkOrderOperationMaterialId}/child/WorkOrderOperationSubstituteMaterial` | Get all substitute materials |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderAssemblyComponent/{WoOperationMaterialId}/child/WorkOrderAssemblyComponentSerial` | Get all serials |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderResource/{WorkOrderOperationResourceId2}/child/WorkOrderOperationResourceInstance/{WorkOrderOperationResourceInstanceId}/child/WOOperationResourceInstanceDFF` | Create flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderResource/{WorkOrderOperationResourceId2}/child/WorkOrderOperationResourceInstance/{WorkOrderOperationResourceInstanceId}` | Get one instance |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderResource/{WorkOrderOperationResourceId2}/child/WorkOrderOperationResourceInstance/{WorkOrderOperationResourceInstanceId}/child/WOOperationResourceInstanceDFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderSerialNumber/action/generateSerialNumbers` | Generates product serial numbers for the given work order identifier. |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderResource/{WorkOrderOperationResourceId2}/child/WorkOrderOperationResourceInstance/{WorkOrderOperationResourceInstanceId}/enclosure/EquipmentParameterFileContent` | Get an EquipmentParameterFileContent |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderResource/{WorkOrderOperationResourceId}/child/WorkOrderOperationResourceDFF` | Create flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderResource/{WorkOrderOperationResourceId2}/child/WorkOrderResourceExceptionCount/{WorkOrderResourceExceptionCountUniqID}` | Get one count |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderResource/{WorkOrderOperationResourceId}/child/WorkOrderOperationResourceDFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderResource/{WorkOrderOperationResourceId}/child/WorkOrderOperationResourceInstance` | Get all instances |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderResource/{WorkOrderOperationResourceId2}/child/WorkOrderOperationResourceInstance/{WorkOrderOperationResourceInstanceId}` | Delete one instance |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderSerialNumber` | Get all serial numbers |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderAssemblyComponent/{WoOperationMaterialId}/child/WorkOrderAssemblyComponentDFF/{WoOperationMaterialId2}` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderAssemblyComponent/{WoOperationMaterialId}/child/WorkOrderAssemblyComponentDFF` | Create flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderAssemblyComponent/{WoOperationMaterialId}/child/WorkOrderAssemblyComponentLot/{WoOperationMaterialLotId}` | Delete one lot |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderAssemblyComponent/{WoOperationMaterialId}/child/WorkOrderAssemblyComponentSerial/{WoOperationMaterialSerialId}` | Delete one serial |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderAssemblyComponent/{WoOperationMaterialId}/child/WorkOrderAssemblyComponentLot` | Get all lots |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderStatusHistory` | Get all statuses |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderSerialNumber/{WorkOrderProductSerialId}` | Get one serial number |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderStatusHistory/{WorkOrderStatusHistoryUniqID}` | Get one status |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderAssemblyComponent` | Get all assemblies |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderAssemblyComponent` | Create assemblies |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationOutput/{WorkOrderOperationOutputId}/child/OutputLotNumber/{WorkOrderProductLotId}` | Get one lot number |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationAttachment/{WorkOrderOperationAttachmentUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationResource/{WorkOrderOperationResourceId}` | Delete one resource |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderActiveOperation/{WorkOrderOperationId}/child/WorkOrderOperationAttachment/{WorkOrderOperationAttachmentUniqID}/enclosure/FileContents` | Get a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationOutput/{WorkOrderOperationOutputId}/child/OutputLotNumber/{WorkOrderProductLotId}` | Delete one lot number |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationOutput/{WorkOrderOperationOutputId}/child/OutputLotNumber` | Get all lot numbers |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationResource` | Get all resources |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationAttachment` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderActiveOperation/{WorkOrderOperationId}/child/WorkOrderOperationAttachment` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationAttachment/{WorkOrderOperationAttachmentUniqID}` | Delete an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationResource/{WorkOrderOperationResourceId}/child/WorkOrderOperationResourceAttachment/{WorkOrderOperationResourceAttachmentUniqID}` | Delete an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderActiveOperation/{WorkOrderOperationId}/child/WorkOrderOperationAttachment/{WorkOrderOperationAttachmentUniqID}` | Get an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationResource/{WorkOrderOperationResourceId}/child/WorkOrderOperationResourceAttachment` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderActiveOperation/{WorkOrderOperationId}/child/WorkOrderOperationAttachment/{WorkOrderOperationAttachmentUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationOutput/{WorkOrderOperationOutputId}/child/OutputAttachment` | Get all attachments |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationDFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationOutput/{WorkOrderOperationOutputId}/child/OutputAttachment/{OutputAttachmentUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationOutput` | Get all outputs |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationOutput/{WorkOrderOperationOutputId}` | Delete one output |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationOutput/{WorkOrderOperationOutputId}/child/OutputAttachment/{OutputAttachmentUniqID}` | Delete an attachment |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationDFF` | Create flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationOutput/{WorkOrderOperationOutputId}/child/OutputAttachment/{OutputAttachmentUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationOutput/{WorkOrderOperationOutputId}/child/OutputDFF` | Create flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationOutput/{WorkOrderOperationOutputId}/child/OutputDFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationExceptionCount` | Get all counts |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationExceptionCount/{WorkOrderOperationId2}` | GET action not supported |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationAttachment/{WorkOrderOperationAttachmentUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}` | Delete one operation |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationResource/{WorkOrderOperationResourceId}/child/WorkOrderOperationResourceInstance/{WorkOrderOperationResourceInstanceId}/enclosure/EquipmentParameterFileContent` | Get an EquipmentParameterFileContent |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationResource/{WorkOrderOperationResourceId}/child/WorkOrderOperationResourceInstance/{WorkOrderOperationResourceInstanceId}` | Delete one instance |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationResource/{WorkOrderOperationResourceId}/child/WorkOrderOperationResourceDFF` | Create flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationResource/{WorkOrderOperationResourceId}/child/WorkOrderOperationResourceDFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderActiveOperation` | Get all operations |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationResource/{WorkOrderOperationResourceId}/child/WorkOrderOperationResourceInstance` | Get all instances |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationResource/{WorkOrderOperationResourceId}/child/WorkOrderOperationResourceInstance/{WorkOrderOperationResourceInstanceId}/child/WOOperationResourceInstanceDFF` | Get all flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/action/printProductLabelReport` | Generate the report of the product labels |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationMaterial/{WorkOrderOperationMaterialId3}/child/WorkOrderOperationMaterialAttachment/{WorkOrderOperationMaterialAttachmentUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders` | Get all work orders |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationResource/{WorkOrderOperationResourceId}/child/WorkOrderOperationResourceInstance/{WorkOrderOperationResourceInstanceId}` | Get one instance |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationResource/{WorkOrderOperationResourceId}/child/WorkOrderOperationResourceInstance/{WorkOrderOperationResourceInstanceId}/child/WOOperationResourceInstanceDFF` | Create flexfields |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationResource/{WorkOrderOperationResourceId}/child/WorkOrderResourceExceptionCount/{WorkOrderResourceExceptionCountUniqID}` | Get one count |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationResource/{WorkOrderOperationResourceId}/child/WorkOrderOperationResourceAttachment/{WorkOrderOperationResourceAttachmentUniqID}/enclosure/FileContents` | Delete a FileContents |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderActiveOperation/{WorkOrderOperationId}` | Get one operation |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationResource/{WorkOrderOperationResourceId}/child/WorkOrderOperationResourceAttachment/{WorkOrderOperationResourceAttachmentUniqID}/enclosure/FileWebImage` | Get a FileWebImage |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationResource/{WorkOrderOperationResourceId}/child/WorkOrderResourceExceptionCount` | Get all counts |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation` | Get all operations |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderResource/{WorkOrderOperationResourceId2}/child/WorkOrderOperationResourceInstance/{WorkOrderOperationResourceInstanceId2}/child/WOOperationResourceInstanceDFF/{WoOpResourceInstanceId}` | Get one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderResource/{WorkOrderOperationResourceId2}/child/WorkOrderOperationResourceInstance/{WorkOrderOperationResourceInstanceId2}/child/WOOperationResourceInstanceDFF/{WoOpResourceInstanceId}` | Update one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderAssemblyComponent/{WoOperationMaterialId}/child/WorkOrderAssemblyComponentLot/{WoOperationMaterialLotId}` | Get one lot |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderAssemblyComponent/{WoOperationMaterialId}/child/WorkOrderAssemblyComponentLot/{WoOperationMaterialLotId}` | Update one lot |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationDFF/{WoOperationId}` | Update one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderAssemblyComponent/{WoOperationMaterialId}` | Update one serial |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}` | Update one operation |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationDFF/{WoOperationId}` | Get one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}` | Get one operation |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderMaterial/{WorkOrderOperationMaterialId}/child/WorkOrderOperationMaterialDFF/{WoOperationMaterialId}` | Update one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationAttachment/{WorkOrderOperationAttachmentUniqID}` | Get an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderAssemblyComponent/{WoOperationMaterialId}` | Get one component |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderActiveOperation/{WorkOrderOperationId}/child/WorkOrderOperationAttachment/{WorkOrderOperationAttachmentUniqID}` | Update an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderAssemblyComponent/{WoOperationMaterialId}/child/WorkOrderAssemblyComponentDFF` | Get all flexfields |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderAssemblyComponent/{WoOperationMaterialId}/child/WorkOrderAssemblyComponentDFF/{WoOperationMaterialId2}` | Update one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}` | Update one work order |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationAttachment/{WorkOrderOperationAttachmentUniqID}` | Update an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderMaterial/{WorkOrderOperationMaterialId}/child/WorkOrderOperationMaterialDFF` | Get all flexfields |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderMaterial/{WorkOrderOperationMaterialId}/child/WorkOrderOperationMaterialAttachment/{WorkOrderOperationMaterialAttachmentUniqID}` | Update an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/action/resequenceAsNextOperation` | Resequence the next operation |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderMaterial/{WorkOrderOperationMaterialId}/child/WorkOrderOperationMaterialAttachment/{WorkOrderOperationMaterialAttachmentUniqID}` | Get an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationOutput/{WorkOrderOperationOutputId}` | Get one output |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationMaterial/{WorkOrderOperationMaterialId}/action/replaceWithSubstitute` | Replace with a substitute |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationResource/{WorkOrderOperationResourceId}` | Update one resource |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderAttachment/{WorkOrderAttachmentUniqID}` | Update an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationMaterial/{WorkOrderOperationMaterialId}` | Update one material |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationResource/{WorkOrderOperationResourceId}` | Get one resource |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderDFF/{WorkOrderId3}` | Get one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderDFF/{WorkOrderId3}` | Update one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/ProjectDetailsDFF/{WorkOrderId2}` | Get one project detail |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/ProjectDetailsDFF/{WorkOrderId2}` | Update one project detail |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationMaterial/{WorkOrderOperationMaterialId3}/child/WorkOrderOperationMaterialAttachment/{WorkOrderOperationMaterialAttachmentUniqID}` | Get an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationResource/{WorkOrderOperationResourceId}/child/WorkOrderOperationResourceDFF/{WoOperationResourceId}` | Update one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationMaterial/{WorkOrderOperationMaterialId3}/child/WorkOrderOperationMaterialAttachment/{WorkOrderOperationMaterialAttachmentUniqID}` | Update an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationResource/{WorkOrderOperationResourceId}/child/WorkOrderOperationResourceDFF/{WoOperationResourceId}` | Get one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationMaterial/{WorkOrderOperationMaterialId}/child/WorkOrderOperationMaterialDFF` | Get all flexfields |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationResource/{WorkOrderOperationResourceId}/child/WorkOrderOperationResourceAttachment/{WorkOrderOperationResourceAttachmentUniqID}` | Get an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderAttachment/{WorkOrderAttachmentUniqID}` | Get an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationMaterial/{WorkOrderOperationMaterialId3}/child/WorkOrderOperationMaterialDFF/{WoOperationMaterialId}` | Update one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationResource/{WorkOrderOperationResourceId}/child/WorkOrderOperationResourceAttachment/{WorkOrderOperationResourceAttachmentUniqID}` | Update an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationOutput/{WorkOrderOperationOutputId}/child/OutputDFF/{WoOperationOutputId}` | Update one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationResource/{WorkOrderOperationResourceId}/child/WorkOrderOperationResourceInstance/{WorkOrderOperationResourceInstanceId}/child/WOOperationResourceInstanceDFF/{WoOpResourceInstanceId}` | Update one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderResource/{WorkOrderOperationResourceId2}/child/WorkOrderOperationResourceDFF/{WoOperationResourceId}` | Update one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderResource/{WorkOrderOperationResourceId2}/child/WorkOrderOperationResourceAttachment/{WorkOrderOperationResourceAttachmentUniqID}` | Get an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderResource/{WorkOrderOperationResourceId2}/child/WorkOrderOperationResourceAttachment/{WorkOrderOperationResourceAttachmentUniqID}` | Update an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationOutput/{WorkOrderOperationOutputId}` | Update one output |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderResource/{WorkOrderOperationResourceId2}/child/WorkOrderOperationResourceDFF/{WoOperationResourceId}` | Get one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationOutput/{WorkOrderOperationOutputId}/child/OutputAttachment/{OutputAttachmentUniqID}` | Update an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationOutput/{WorkOrderOperationOutputId}/child/OutputAttachment/{OutputAttachmentUniqID}` | Get an attachment |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationResource/{WorkOrderOperationResourceId}/child/WorkOrderOperationResourceInstance/{WorkOrderOperationResourceInstanceId}/child/WOOperationResourceInstanceDFF/{WoOpResourceInstanceId}` | Get one flexfield |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderExecutionRun/{WorkOrderExecutionRunId}` | Update one execution run |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderExecutionRun/{WorkOrderExecutionRunId}` | Get one execution run |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationOutput/{WorkOrderOperationOutputId}/child/OutputDFF/{WoOperationOutputId}` | Get one flexfield |
| `POST` | `/fscmRestApi/resources/11.13.18.05/workOrders/action/printPDF` | Print PDF |
| `POST` | `/fscmRestApi/resources/11.13.18.05/workOrders` | Create work orders |
| `POST` | `/fscmRestApi/resources/11.13.18.05/workOrders/action/midpointRescheduleWorkOrderOperation` | Reschedule work orders at the midpoint |
| `POST` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}` | Get one work order |
| `POST` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationMaterial/{WorkOrderOperationMaterialId}` | Get one material |
| `POST` | `/fscmRestApi/resources/11.13.18.05/workOrders/action/invokeGeneratePrintComponentsListESS` | Generate the print components lists report |
| `POST` | `/fscmRestApi/resources/11.13.18.05/workOrders/action/printProductLabelForExecution` | Generate the report of product labels |
| `POST` | `/fscmRestApi/resources/11.13.18.05/workOrders/action/generateExecutionRunsForWorkOrder` | Generate execution runs for a work order |
| `POST` | `/fscmRestApi/resources/11.13.18.05/workOrders/action/workOrderLandingPageMetrics` | Generate KPI values |
| `POST` | `/fscmRestApi/resources/11.13.18.05/workOrders/action/invokePickMaterialESS` | Initiate scheduled process to pick materials |
| `POST` | `/fscmRestApi/resources/11.13.18.05/workOrders/action/invokeWorkOrderPickMaterialESS` | Initiate scheduled process to pick materials with user-defined parameters |
| `POST` | `/fscmRestApi/resources/11.13.18.05/workOrders/action/getWorkforcePersonDetails` | Get one workforce person for a work center |
| `POST` | `/fscmRestApi/resources/11.13.18.05/workOrders/action/invokeGenerateExtensibleWorkOrderTravelerESS` | Initiate scheduled process to generate extensible work order traveler |
| `POST` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderAssemblyComponent/{WoOperationMaterialId}/child/WorkOrderAssemblyComponentSerial/action/reserveSerials` | Reserve the serials of the rework work order |
| `POST` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderActiveOperation/{WorkOrderOperationId}/child/WorkOrderOperationAttachment` | Create an attachment |
| `POST` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderSerialNumber/{WorkOrderProductSerialId}` | Delete one serial number |
| `POST` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderAssemblyComponent/{WoOperationMaterialId}/child/WorkOrderAssemblyComponentSerial/{WoOperationMaterialSerialId}` | Get one serial |
| `POST` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderMaterial/{WorkOrderOperationMaterialId}` | Get one material |
| `POST` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderMaterial/{WorkOrderOperationMaterialId}/action/replaceWithSubstitute` | Replace with a substitute |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationAttachment/{WorkOrderOperationAttachmentUniqID}/enclosure/FileContents` | Replace a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderActiveOperation/{WorkOrderOperationId}/child/WorkOrderOperationAttachment/{WorkOrderOperationAttachmentUniqID}/enclosure/FileContents` | Replace a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationAttachment/{WorkOrderOperationAttachmentUniqID}/enclosure/FileContents` | Get a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderResource/{WorkOrderOperationResourceId2}/child/WorkOrderOperationResourceAttachment/{WorkOrderOperationResourceAttachmentUniqID}/enclosure/FileContents` | Get a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderResource/{WorkOrderOperationResourceId2}/child/WorkOrderOperationResourceAttachment/{WorkOrderOperationResourceAttachmentUniqID}/enclosure/FileContents` | Replace a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationOutput/{WorkOrderOperationOutputId}/child/OutputAttachment/{OutputAttachmentUniqID}/enclosure/FileContents` | Replace a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationOutput/{WorkOrderOperationOutputId}/child/OutputAttachment/{OutputAttachmentUniqID}/enclosure/FileContents` | Get a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationResource/{WorkOrderOperationResourceId}/child/WorkOrderOperationResourceAttachment/{WorkOrderOperationResourceAttachmentUniqID}/enclosure/FileContents` | Replace a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationResource/{WorkOrderOperationResourceId}/child/WorkOrderOperationResourceAttachment/{WorkOrderOperationResourceAttachmentUniqID}/enclosure/FileContents` | Get a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderMaterial/{WorkOrderOperationMaterialId}/child/WorkOrderOperationMaterialAttachment/{WorkOrderOperationMaterialAttachmentUniqID}/enclosure/FileContents` | Get a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderMaterial/{WorkOrderOperationMaterialId}/child/WorkOrderOperationMaterialAttachment/{WorkOrderOperationMaterialAttachmentUniqID}/enclosure/FileContents` | Replace a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderAttachment/{WorkOrderAttachmentUniqID}/enclosure/FileContents` | Get a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderAttachment/{WorkOrderAttachmentUniqID}/enclosure/FileContents` | Replace a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationMaterial/{WorkOrderOperationMaterialId3}/child/WorkOrderOperationMaterialAttachment/{WorkOrderOperationMaterialAttachmentUniqID}/enclosure/FileContents` | Replace a FileContents |
| `PUT` | `/fscmRestApi/resources/11.13.18.05/workOrders/{WorkOrderId}/child/WorkOrderOperation/{WorkOrderOperationId}/child/WorkOrderOperationMaterial/{WorkOrderOperationMaterialId3}/child/WorkOrderOperationMaterialAttachment/{WorkOrderOperationMaterialAttachmentUniqID}/enclosure/FileContents` | Get a FileContents |

## w or kO rd er sM et ri cs

| Method | Path | Operation |
|--------|------|-----------|
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrdersMetrics/{workOrdersMetricsUniqID}` | Get one metric |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrdersMetrics` | Get all metrics |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrdersMetrics/action/workOrderLandingPageMetrics` | Generate KPI values for metrics on the Redwood work execution landing page |

## w or kO rd er St at us es

| Method | Path | Operation |
|--------|------|-----------|
| `DELETE` | `/fscmRestApi/resources/11.13.18.05/workOrderStatuses` | Create statuses |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrderStatuses` | Get all statuses |
| `GET` | `/fscmRestApi/resources/11.13.18.05/workOrderStatuses/{WoStatusId}` | Delete one status |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrderStatuses/{WoStatusId}` | Update one status |
| `PATCH` | `/fscmRestApi/resources/11.13.18.05/workOrderStatuses/{WoStatusId}` | Get one status |

