module.exports = {
  pages: {
    override: {
      template: "public/browser-extension.html",
      entry: "./src/override/main.ts",
      title: "Override"
    }
  },
  pluginOptions: {
    browserExtension: {
      componentOptions: {
        background: {
          entry: "src/background.ts"
        }
      }
    }
  }
};
