const fs = require("fs");
const { Processor, Renderer } = require("xslt4node");
const PDFDocument = require("pdfkit");

// Paths to your XML and XSL files
const xmlFilePath = "path/to/your/xmlfile.xml";
const xslFilePath = "path/to/your/xslfile.xsl";

// Read XML and XSL files
const xml = fs.readFileSync(xmlFilePath, "utf-8");
const xsl = fs.readFileSync(xslFilePath, "utf-8");

// XSLT Transformation
const processor = new Processor(xsl);
const result = processor.transform(xml);

// Create PDF using PDFKit
const doc = new PDFDocument();
doc.pipe(fs.createWriteStream("output.pdf"));

// Assuming 'result' contains the transformed content
doc.text("Transformed XML to PDF:");
doc.text(result);

doc.end();
