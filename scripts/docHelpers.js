// Shared helpers for building Workflow Analysis .docx reports with the `docx` package.
const {
  Document, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell,
  WidthType, BorderStyle, AlignmentType, ShadingType, Packer,
} = require('docx');

const SHADE = 'D9E2F3';

function h1(text) {
  return new Paragraph({ text, heading: HeadingLevel.HEADING_1, spacing: { before: 300, after: 150 } });
}
function h2(text) {
  return new Paragraph({ text, heading: HeadingLevel.HEADING_2, spacing: { before: 250, after: 120 } });
}
function p(text, opts = {}) {
  return new Paragraph({ children: [new TextRun({ text, ...opts })], spacing: { after: 120 } });
}
function bullet(text) {
  return new Paragraph({ text, bullet: { level: 0 }, spacing: { after: 60 } });
}
function numbered(text, ref = 'numbered-list') {
  return new Paragraph({ text, numbering: { reference: ref, level: 0 }, spacing: { after: 80 } });
}

function cell(text, { header = false, width } = {}) {
  return new TableCell({
    width: width ? { size: width, type: WidthType.PERCENTAGE } : undefined,
    shading: header ? { type: ShadingType.CLEAR, fill: SHADE } : undefined,
    margins: { top: 80, bottom: 80, left: 100, right: 100 },
    children: [new Paragraph({ children: [new TextRun({ text, bold: header })] })],
  });
}

function table(rows, widths) {
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 2, color: 'AAAAAA' },
      bottom: { style: BorderStyle.SINGLE, size: 2, color: 'AAAAAA' },
      left: { style: BorderStyle.SINGLE, size: 2, color: 'AAAAAA' },
      right: { style: BorderStyle.SINGLE, size: 2, color: 'AAAAAA' },
      insideHorizontal: { style: BorderStyle.SINGLE, size: 2, color: 'AAAAAA' },
      insideVertical: { style: BorderStyle.SINGLE, size: 2, color: 'AAAAAA' },
    },
    rows: rows.map((r, i) => new TableRow({
      children: r.map((text, ci) => cell(text, { header: i === 0, width: widths ? widths[ci] : undefined })),
    })),
  });
}

function buildDocument(title, subtitle, sections) {
  return new Document({
    numbering: {
      config: [{ reference: 'numbered-list', levels: [{ level: 0, format: 'decimal', text: '%1.', alignment: AlignmentType.START }] }],
    },
    sections: [{
      properties: {},
      children: [
        new Paragraph({ text: title, heading: HeadingLevel.TITLE, spacing: { after: 100 } }),
        new Paragraph({ children: [new TextRun({ text: subtitle, italics: true, color: '555555' })], spacing: { after: 300 } }),
        ...sections,
      ],
    }],
  });
}

async function writeDocx(doc, outputPath) {
  const buffer = await Packer.toBuffer(doc);
  require('fs').writeFileSync(outputPath, buffer);
  console.log(`Word document created: ${outputPath}`);
}

module.exports = { h1, h2, p, bullet, numbered, table, buildDocument, writeDocx };
