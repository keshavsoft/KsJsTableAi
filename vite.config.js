export default {
  build: {
    lib: {
      entry: "src/main.js",
      name: "KSTable",
      formats: ["umd"],
      fileName: () => "kstable.js",
    },
    outDir: "Public",
    emptyOutDir: false
  }
};