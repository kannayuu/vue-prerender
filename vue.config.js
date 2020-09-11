const PrerenderSPAPlugin = require("prerender-spa-plugin");
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const path = require("path");

module.exports = {
  configureWebpack: () => {
    if (process.env.NODE_ENV !== "production") return;
    return {
      plugins: [
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, "dist"),
          routes: ["/index.html", "/about.html"],
          renderer: new Renderer({
            // injectProperty: '__PRERENDER_INJECTED',
            // inject: {
            //   foo: "bar"
            // },
            // headless: false,
            renderAfterDocumentEvent: "render-event"
          }),
          postProcess(renderedRoute) {
            renderedRoute.html = renderedRoute.html
              .replace(new RegExp('="/js/', "g"), '="./js/')
              .replace(new RegExp('="/css/', "g"), '="./css/')
              .replace(new RegExp("/img/", "g"), "./img/")
              .replace(new RegExp("/favicon.ico", "g"), "./favicon.ico");
            if (renderedRoute.route.endsWith(".html")) {
              renderedRoute.outputPath = path.join(
                __dirname,
                "dist",
                renderedRoute.route
              );
            }

            return renderedRoute;
          }
        })
      ]
    };
  }
};
