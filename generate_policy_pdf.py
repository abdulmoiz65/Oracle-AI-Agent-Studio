# -*- coding: utf-8 -*-
"""
Generates Autonomous_Sourcing_Policy.pdf using fpdf2 with HarfBuzz text shaping.
This preserves BOTH correct visual rendering of Arabic AND correct underlying
Unicode text in the PDF's text layer (unlike Chromium's headless print-to-PDF,
which can bake shaped/reordered glyphs into the text layer for complex scripts).
"""
from fpdf import FPDF

FONT_PATH = r"C:\Windows\Fonts\tahoma.ttf"
FONT_BOLD_PATH = r"C:\Windows\Fonts\tahomabd.ttf"

CATEGORIES = [
    ("استشارات تقنية المعلومات", "Two Stage Complex PO", 10, 3, 100000000),
    ("استشارات قانونية", "Two Stage Complex PO", 10, 3, 100000000),
    ("خدمات التدقيق", "Two Stage Complex PO", 10, 3, 100000000),
    ("استشارات الاستراتجية", "Two Stage Complex PO", 10, 3, 100000000),
    ("أجهزة الكمبيوتر المحمولة", "Two Stage Purchase Order", 7, 3, 100000000),
    ("خوادم", "Two Stage Purchase Order", 7, 3, 100000000),
    ("طابعات", "Standard Purchase Order", 7, 3, 100000000),
    ("لوحات المفاتيح", "Standard Purchase Order", 7, 3, 100000000),
    ("فأرة", "Standard Purchase Order", 7, 3, 100000000),
    ("شاشات", "Standard Purchase Order", 7, 3, 100000000),
    ("أثاث", "Standard Purchase Order", 7, 3, 100000000),
    ("محطات العمل", "Standard Purchase Order", 7, 3, 100000000),
    ("مواد التنظيف", "Standard Purchase Order", 7, 3, 100000000),
    ("اصلاح وصيانة تقنية المعلومات", "Standard Complex PO", 7, 3, 100000000),
    ("مبنى مكاتب الاصلاح والصيانة", "Standard Complex PO", 7, 3, 100000000),
    ("اصلاح وصيانة التكييف المركزي", "Standard Complex PO", 7, 3, 100000000),
    ("مواد استهلاكية", "Standard Purchase Order", 7, 3, 100000000),
    ("ضيافة و مطبخ", "Standard Purchase Order", 7, 3, 100000000),
    ("حبر", "Standard Purchase Order", 7, 3, 100000000),
    ("قرص صلب", "Two Stage Purchase Order", 7, 3, 100000000),
    ("ذاكرة فلاش", "Standard Purchase Order", 7, 3, 100000000),
    ("كابلات", "Standard Purchase Order", 7, 3, 100000000),
    ("سماعات رأس", "Standard Purchase Order", 7, 3, 100000000),
    ("مكبرات صوت", "Standard Purchase Order", 7, 3, 100000000),
    ("كاميرا", "Standard Purchase Order", 7, 3, 100000000),
    ("محطة ارساء", "Standard Purchase Order", 7, 3, 100000000),
    ("ترخيص", "Two Stage Complex PO", 10, 3, 100000000),
    ("اللوازم المكتبية", "Standard Purchase Order", 7, 3, 100000000),
]

GROUPS = [
    ("Standard Purchase Order", 7, 3, 100000000,
     ["طابعات", "لوحات المفاتيح", "فأرة", "شاشات", "أثاث", "محطات العمل",
      "مواد التنظيف", "مواد استهلاكية", "ضيافة و مطبخ", "حبر", "ذاكرة فلاش",
      "كابلات", "سماعات رأس", "مكبرات صوت", "كاميرا", "محطة ارساء", "اللوازم المكتبية"]),
    ("Two Stage Purchase Order", 7, 3, 100000000,
     ["أجهزة الكمبيوتر المحمولة", "خوادم", "قرص صلب"]),
    ("Two Stage Complex PO", 10, 3, 100000000,
     ["استشارات تقنية المعلومات", "استشارات قانونية", "خدمات التدقيق",
      "استشارات الاستراتجية", "ترخيص"]),
    ("Standard Complex PO", 7, 3, 100000000,
     ["اصلاح وصيانة تقنية المعلومات", "مبنى مكاتب الاصلاح والصيانة",
      "اصلاح وصيانة التكييف المركزي"]),
]

pdf = FPDF()
pdf.add_font("Tahoma", "", FONT_PATH)
pdf.add_font("Tahoma", "B", FONT_BOLD_PATH)
pdf.set_text_shaping(True)
pdf.set_auto_page_break(True, margin=15)
pdf.add_page()

pdf.set_font("Tahoma", "B", 18)
pdf.cell(0, 10, "Autonomous Sourcing Policy", new_x="LMARGIN", new_y="NEXT")
pdf.set_draw_color(11, 61, 46)
pdf.set_line_width(0.8)
pdf.line(10, pdf.get_y(), 200, pdf.get_y())
pdf.ln(4)

pdf.set_font("Tahoma", "", 10)
pdf.cell(0, 6, "Version: 1.0  |  Effective Date: 2026-07-21", new_x="LMARGIN", new_y="NEXT")
pdf.ln(3)

def section_heading(text):
    pdf.set_font("Tahoma", "B", 13)
    pdf.cell(0, 8, text, new_x="LMARGIN", new_y="NEXT")
    pdf.set_draw_color(200, 200, 200)
    pdf.set_line_width(0.3)
    pdf.line(10, pdf.get_y(), 200, pdf.get_y())
    pdf.ln(3)

def prose(text):
    pdf.set_font("Tahoma", "", 10)
    pdf.multi_cell(0, 5.5, text)
    pdf.ln(2)

section_heading("Section 1 - Purpose")
prose(
    "This document defines the rules used by the Autonomous Sourcing Assistant to identify "
    "approved purchase requisition lines that qualify for autonomous negotiation creation, and by "
    "the Supplier Negotiation Award Assistant to select the best supplier response. Only "
    "requisition lines whose item category appears in Section 2 below, and whose line amount does "
    "not exceed the corresponding Maximum Requisition Line Amount, are eligible for autonomous "
    "sourcing."
)

section_heading("Section 2 - Eligible Categories")

col_widths = [55, 40, 35, 28, 32]
headers = ["Category", "NegotiationTemplate", "NegotiationOpenDurationDays", "MinimumNumberOfBids", "MaximumRequisitionLineAmount"]

pdf.set_font("Tahoma", "B", 8)
pdf.set_fill_color(11, 61, 46)
pdf.set_text_color(255, 255, 255)
for w, h in zip(col_widths, headers):
    pdf.cell(w, 8, h, border=1, align="C", fill=True)
pdf.ln(8)

pdf.set_text_color(0, 0, 0)
pdf.set_font("Tahoma", "", 9)
row_h = 7
for category, template, days, bids, cap in CATEGORIES:
    x_start = pdf.get_x()
    y_start = pdf.get_y()
    pdf.cell(col_widths[0], row_h, category, border=1, align="R")
    pdf.cell(col_widths[1], row_h, template, border=1, align="L")
    pdf.cell(col_widths[2], row_h, str(days), border=1, align="C")
    pdf.cell(col_widths[3], row_h, str(bids), border=1, align="C")
    pdf.cell(col_widths[4], row_h, str(cap), border=1, align="C")
    pdf.ln(row_h)

pdf.ln(3)
section_heading("Section 3 - Award Basis")
prose(
    "The default award basis for all eligible categories is lowest price per line. Sole-source "
    "award is applied when a single supplier submits the lowest price across all lines of a "
    "negotiation; otherwise, award is applied at the line level."
)

section_heading("Section 4 - Post-Award Action")
prose(
    "Once an award is approved, Oracle Fusion automatically generates the purchasing document "
    "(Standard Purchase Order, Two Stage Purchase Order, Standard Complex PO, or Two Stage Complex "
    "PO) corresponding to the NegotiationTemplate assigned to the awarded category."
)

section_heading("Section 5 - Eligibility Conditions")
prose(
    "A requisition line is eligible for autonomous sourcing only if: the requisition is Approved; "
    "the line is marked as requiring negotiation and is not already covered by an existing "
    "negotiation; the line's assigned buyer matches the configured autonomous sourcing negotiation "
    "owner; the line's item category matches an entry in Section 2; the line amount does not "
    "exceed the MaximumRequisitionLineAmount for its category; and the requested delivery date is "
    "on or after the negotiation close date plus the category's NegotiationOpenDurationDays."
)

section_heading("Section 6 - Supplier Invitation")
prose(
    "Suppliers are invited automatically based on historical purchasing data for the matched "
    "category, using negotiation templates configured with the \"Send invitation to all contacts\" "
    "option enabled."
)

import textwrap

def render_wrapped_line(text, width_chars=70, line_h=5.5, align="R"):
    for chunk in textwrap.wrap(text, width=width_chars) or [""]:
        pdf.cell(0, line_h, chunk, new_x="LMARGIN", new_y="NEXT", align=align)

section_heading("Section 7 - Policy Summary")
for idx, (template, days, bids, cap, cats) in enumerate(GROUPS, start=1):
    pdf.set_font("Tahoma", "B", 10)
    render_wrapped_line(
        f"Group {idx} - Negotiation template: {template} "
        f"(Duration: {days} days, Minimum bids: {bids}, Maximum line amount: {cap:,})",
        width_chars=90, line_h=6, align="L"
    )
    pdf.set_font("Tahoma", "", 10)
    cats_line = "Eligible Categories: " + ", ".join(cats) + "."
    render_wrapped_line(cats_line, width_chars=70, line_h=5.5, align="R")
    pdf.ln(2)

pdf.set_font("Tahoma", "", 10)
prose(
    "Negotiation type for all groups: RFQ / Sourcing negotiation as configured on the "
    "corresponding template. Award basis: Lowest price per line. Post-award action: Generate the "
    "purchasing document automatically based on the assigned negotiation template."
)

section_heading("Section 8 - Category Attribute Reference (explicit per-category listing)")
prose(
    "This section restates every eligible category individually with its full attribute set, "
    "using the exact field names below, as a redundant reference in case Section 2 or Section 7 "
    "is not fully captured."
)
for category, template, days, bids, cap in CATEGORIES:
    line = (
        f"Category: {category}. NegotiationTemplate: {template}. "
        f"NegotiationOpenDurationDays: {days}. MinimumNumberOfBids: {bids}. "
        f"MaximumRequisitionLineAmount: {cap}."
    )
    render_wrapped_line(line, width_chars=90, line_h=5.5, align="R")

pdf.output(r"C:\Users\abdul.moiz\Desktop\AI agent studio\Autonomous_Sourcing_Policy.pdf")
print("PDF generated successfully.")
