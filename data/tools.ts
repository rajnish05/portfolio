const jsonViewerUrl =
  process.env.NEXT_PUBLIC_JSON_VIEWER_URL ?? "https://jsonviewer.codzee.in";
const qrGeneratorUrl =
  process.env.NEXT_PUBLIC_QR_GENERATOR_URL ?? "https://qrmaker.codzee.in";
const compilerUrl =
  process.env.NEXT_PUBLIC_COMPILER_URL ?? "https://compiler-eosin-seven.vercel.app/";

export const developerTools = [
  {
    title: "JSON Viewer",
    description: "React-based JSON viewer and formatter.",
    features: [
      "Format JSON",
      "Validate JSON",
      "Expandable tree view",
      "Syntax highlighting",
      "Copy JSON",
    ],
    url: jsonViewerUrl,
    icon: "Braces",
  },
  {
    title: "QR / Barcode Generator",
    description: "Generate QR codes and barcodes with custom options.",
    features: [
      "Generate QR codes",
      "Generate barcodes",
      "Download PNG",
      "Custom color options",
    ],
    url: qrGeneratorUrl,
    icon: "QrCode",
  },
  {
    title: "JavaScript Compiler",
    description: "Browser-based JavaScript editor and runner.",
    features: [
      "Code editor",
      "Run JavaScript in browser",
      "Console output",
      "Error handling",
    ],
    url: compilerUrl,
    icon: "Code",
  },
];
