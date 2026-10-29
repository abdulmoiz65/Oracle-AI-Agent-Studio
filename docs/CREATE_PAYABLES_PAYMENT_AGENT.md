# Create Payables Payment via Oracle AI Agent Studio

**Endpoint:** `POST /fscmRestApi/resources/11.13.18.05/payablesPayments`
**Content-Type:** `application/vnd.oracle.adf.resourceitem+json`
**Doc reference:** [Oracle Fusion Financials REST API – Create a payment](https://docs.oracle.com/en/cloud/saas/financials/25c/farfa/op-payablespayments-post.html)

---

## 1. The Failure You Are Seeing

```
400 Bad Request
"An instance of type class java.sql.Date cannot be created from string {PaymentDate}.
 The string value must be in format YYYY-MM-DD."
```

### Why it happens
The agent is sending the **sample payload verbatim**, including the curly-brace placeholders:

```json
"PaymentDate": "{PaymentDate}",
"PaymentMethod": "{PaymentMethod}",
"PaymentProcessProfile": "{PaymentProcessProfile}",
...
```

Oracle Fusion parses each JSON value strictly. `{PaymentDate}` is not a valid `YYYY-MM-DD` string, so the whole request is rejected on the first typed field it hits.

In AI Agent Studio, a **sample payload is just documentation for the LLM**. It is not a template engine. Unless you convert every dynamic field into an **Input Parameter** bound with `${paramName}`, the tool will POST the sample body unchanged.

Secondary issue in your payload: `"PaymentNumber": "20,260,007"`. The API expects `PaymentNumber` as an **integer** (`int64`), not a comma-formatted string. It must be sent as `20260007` (a number).

---

## 2. Oracle-Provided Sample Payload (Reference)

This is Example 1 from the official docs — a manual payment against a supplier invoice.

```json
{
  "PaymentNumber": 1005,
  "PaymentDate": "2018-11-07",
  "PaymentDescription": "Manual_Payment",
  "PaymentType": "Manual",
  "PaymentCurrency": "USD",
  "BusinessUnit": "Vision Operations",
  "Payee": "Advanced Network Devices",
  "PayeeSite": "FRESNO",
  "DisbursementBankAccountName": "BofA-204",
  "PaymentMethod": "Check",
  "PaymentProcessProfile": "Standard Check",
  "PaymentDocument": "AP Standard Check Format 2",
  "relatedInvoices": [
    {
      "InvoiceNumber": "Functional-Currency-Invoice",
      "InstallmentNumber": 1,
      "DiscountTaken": 10,
      "AmountPaidPaymentCurrency": 46.25
    },
    {
      "InvoiceNumber": "Functional-Currency-Invoice",
      "InstallmentNumber": 2,
      "DiscountTaken": 10,
      "AmountPaidPaymentCurrency": 46.25
    }
  ]
}
```

### Required fields (per Oracle schema)
| Field | Type | Notes |
|---|---|---|
| `BusinessUnit` | string | Name of the BU (e.g. `Vision Operations`) |
| `PaymentCurrency` | string | ISO code (e.g. `SAR`, `USD`) |
| `PaymentDate` | date `YYYY-MM-DD` | **Must be a real date string** |
| `PaymentMethodCode` | string | e.g. `CHECK`, `EFT`. Either `PaymentMethod` (display name) or `PaymentMethodCode` is needed |
| `PaymentNumber` | integer int64 | **Numeric, no commas** |

### Commonly used optional fields
`PaymentType`, `PaymentProcessProfile`, `DisbursementBankAccountName`, `PaymentDocument`, `Payee`, `PayeeSite`, `PaymentDescription`, `PaymentFunction`, `ConversionRate`, `ConversionRateType`, `relatedInvoices[]`.

---

## 3. Corrected Payload for Your SAR Payment

Replace **every** `{Placeholder}` with a real value. Below is a valid body derived from your request:

```json
{
  "PaymentNumber": 20260007,
  "PaymentDate": "2026-07-23",
  "PaymentType": "Manual",
  "PaymentCurrency": "SAR",
  "BusinessUnit": "<Your BU Name>",
  "Payee": "<Supplier Name>",
  "PayeeSite": "<Supplier Site>",
  "DisbursementBankAccountName": "<Bank Account Name>",
  "PaymentMethod": "Check",
  "PaymentProcessProfile": "<PPP Name>",
  "PaymentDocument": "<Payment Document Name>",
  "relatedInvoices": [
    {
      "InvoiceNumber": "7010",
      "InstallmentNumber": 1,
      "DiscountTaken": 0,
      "AmountPaidPaymentCurrency": 57500
    }
  ]
}
```

Key fixes from your version:
1. `PaymentNumber` is now a number (`20260007`), not `"20,260,007"`.
2. `PaymentDate` is a real ISO date, not `{PaymentDate}`.
3. Every `{Placeholder}` has been substituted with the value the LLM/user will supply.

---

## 4. Fix in Oracle AI Agent Studio (Step by Step)

The goal is: **the agent generates the payload dynamically from parameters supplied by the user/LLM**, instead of shipping the static sample body.

### Step 4.1 — Open the REST tool bound to `payablesPayments`
Agent Studio → your agent → **Tools** → open the tool that calls `POST /fscmRestApi/resources/11.13.18.05/payablesPayments`.

### Step 4.2 — Define Input Parameters
Under **Input Parameters**, add one parameter per dynamic field. Match names to your payload placeholders:

| Parameter Name | Type | Required | Description (used by LLM to extract) |
|---|---|---|---|
| `paymentNumber` | integer | Yes | Unique payment number, digits only |
| `paymentDate` | string | Yes | Payment date in `YYYY-MM-DD` format |
| `paymentType` | string | Yes | `Manual`, `Quick`, `Refund`, etc. |
| `paymentCurrency` | string | Yes | ISO currency code (e.g. `SAR`) |
| `businessUnit` | string | Yes | Business Unit name |
| `payee` | string | Yes | Supplier/party name |
| `payeeSite` | string | No | Supplier site |
| `disbursementBankAccountName` | string | Yes | Internal bank account name |
| `paymentMethod` | string | Yes | e.g. `Check`, `Electronic` |
| `paymentProcessProfile` | string | Yes | PPP name |
| `paymentDocument` | string | No | Payment document name |
| `invoiceNumber` | string | Yes | Related invoice number |
| `installmentNumber` | integer | Yes | Invoice installment |
| `amountPaidPaymentCurrency` | number | Yes | Paid amount |
| `discountTaken` | number | No | Default 0 |

### Step 4.3 — Bind the Request Body Template
In the tool's **Request Body**, use parameter expressions (`${...}`) instead of literal placeholders. This is what tells the runtime to substitute values:

```json
{
  "PaymentNumber": ${paymentNumber},
  "PaymentDate": "${paymentDate}",
  "PaymentType": "${paymentType}",
  "PaymentCurrency": "${paymentCurrency}",
  "BusinessUnit": "${businessUnit}",
  "Payee": "${payee}",
  "PayeeSite": "${payeeSite}",
  "DisbursementBankAccountName": "${disbursementBankAccountName}",
  "PaymentMethod": "${paymentMethod}",
  "PaymentProcessProfile": "${paymentProcessProfile}",
  "PaymentDocument": "${paymentDocument}",
  "relatedInvoices": [
    {
      "InvoiceNumber": "${invoiceNumber}",
      "InstallmentNumber": ${installmentNumber},
      "DiscountTaken": ${discountTaken},
      "AmountPaidPaymentCurrency": ${amountPaidPaymentCurrency}
    }
  ]
}
```

**Notes on the binding syntax:**
- Wrap **string** substitutions in quotes: `"${paymentDate}"`.
- Leave **numeric** substitutions unquoted: `${paymentNumber}`, `${amountPaidPaymentCurrency}`.
- Do **not** mix — quoting a numeric parameter turns it into a string and can fail server-side validation.

### Step 4.4 — Set the Request Headers
```
Content-Type: application/vnd.oracle.adf.resourceitem+json
REST-Framework-Version: 4
```

### Step 4.5 — Update the Agent Prompt
Instruct the agent to (a) collect each required parameter from the user, (b) validate the date format, and (c) never invent placeholders. Example addition to the system prompt:

> Before invoking the `createPayablesPayment` tool, ensure ALL required parameters
> (`paymentNumber`, `paymentDate`, `paymentType`, `paymentCurrency`, `businessUnit`,
> `payee`, `disbursementBankAccountName`, `paymentMethod`, `paymentProcessProfile`,
> `invoiceNumber`, `installmentNumber`, `amountPaidPaymentCurrency`) are supplied
> by the user. `paymentDate` MUST be in `YYYY-MM-DD` format. `paymentNumber` MUST
> be a positive integer with no commas or spaces. If any required value is missing,
> ask the user for it — never substitute a placeholder like `{PaymentDate}`.

### Step 4.6 — Add LOV Lookup Tools (Recommended)
So the LLM can resolve human-friendly names into valid values, register these read-only companion tools:

| LOV | Endpoint |
|---|---|
| Business Units | `GET /fscmRestApi/resources/11.13.18.05/businessUnitsLOV` |
| Suppliers | `GET /fscmRestApi/resources/11.13.18.05/suppliersLOV` |
| Supplier Sites | `GET /fscmRestApi/resources/11.13.18.05/supplierSitesLOV` |
| Disbursement Bank Accounts | `GET /fscmRestApi/resources/11.13.18.05/disbursementBankAccountsLOV` |
| Payment Methods | `GET /fscmRestApi/resources/11.13.18.05/paymentMethodsLOV` |
| Payment Process Profiles | `GET /fscmRestApi/resources/11.13.18.05/paymentProcessProfilesLOV` |
| Payment Documents | `GET /fscmRestApi/resources/11.13.18.05/paymentDocumentsLOV` |
| Invoices (to look up invoice number → BU/currency) | `GET /fscmRestApi/resources/11.13.18.05/invoices` |

Prompt the agent to call the LOV first when a user supplies a partial or ambiguous name.

### Step 4.7 — Enable Human Approval (Recommended for Payments)
In the workflow specification, set `humanApprovalFlag: true` for this tool. Payments are financially material — require an explicit user confirmation of the resolved payload before the POST is executed.

---

## 5. Quick Validation Checklist

Before re-running the agent, verify:

- [ ] No `{...}` placeholders remain anywhere in the final request body.
- [ ] `PaymentDate` matches `^\d{4}-\d{2}-\d{2}$`.
- [ ] `PaymentNumber` is a **number** literal (no quotes, no commas).
- [ ] `PaymentCurrency` is a valid ISO code enabled in the target BU.
- [ ] `BusinessUnit`, `Payee`, `PayeeSite`, `DisbursementBankAccountName`, `PaymentMethod`, `PaymentProcessProfile`, `PaymentDocument` all match values from their respective LOV endpoints exactly (case-sensitive).
- [ ] `relatedInvoices[].InvoiceNumber` + `InstallmentNumber` correspond to an existing, unpaid installment for that supplier and BU.
- [ ] Sum of `AmountPaidPaymentCurrency` across installments equals the intended payment amount in `PaymentCurrency`.
- [ ] Request header includes `Content-Type: application/vnd.oracle.adf.resourceitem+json`.

---

## 6. cURL Smoke Test (Optional, outside the agent)

Use this to confirm your credentials and payload work end-to-end before wiring it back into the agent:

```bash
curl -i -u "<user>:<password>" \
  -H "Content-Type: application/vnd.oracle.adf.resourceitem+json" \
  -X POST \
  -d @payment.json \
  https://iafmkf-test.fa.ocs.oraclecloud.com/fscmRestApi/resources/11.13.18.05/payablesPayments
```

A `201 Created` response with a `CheckId` in the body confirms the payload shape is correct. Once cURL works, the only remaining task is wiring parameters into the AI Agent Studio tool as described in Step 4.
