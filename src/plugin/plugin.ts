const isDev = process.env.NODE_ENV !== "production";

if (isDev) {
  figma.showUI("http://localhost:5173/index.html", { width: 260, height: 156 });
} else {
  figma.showUI(__html__, { width: 260, height: 156 });
}