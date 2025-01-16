const isProduction = process.env.NODE_ENV === "production";

const manifest = {
  name: "WFRN-svelte",
  id: "00000000",
  api: "1.0.0",
  capabilities: [],
  enableProposedApi: false,
  documentAccess: "dynamic-page",
  editorType: isProduction ? ["figma"] : ["dev"],
  ui: "index.html",
  main: "figma.js",
  // networkAccess: {
  //   allowedDomains: ["https://figma.com"],
  //   reasoning: "Needed for local development and testing",
  // },
};

export default manifest;
