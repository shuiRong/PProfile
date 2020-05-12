const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

const config = {
    publicPath: '/',
    outputDir: './dist/',
    configureWebpack: () => {
        if (process.env.NODE_ENV === 'production') {
            return {
                plugins: [
                    new PrerenderSPAPlugin({
                        staticDir: path.join(__dirname, 'dist'),
                        routes: ['/'],

                        renderer: new Renderer({
                            inject: {
                                foo: 'bar',
                            },
                            headless: true,
                            renderAfterDocumentEvent: 'render-event',
                            captureAfterTime: 10000,
                            renderAfterTime: 10000,
                            defaultViewport: {
                                width: 1200,
                                height: 700,
                            },
                            args: ['--no-sandbox'],
                        }),
                    }),
                ],
            };
        }
    },
};
module.exports = config;
