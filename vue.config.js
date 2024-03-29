module.exports = {
    publicPath:
        process.env.NODE_ENV === "production"
            ? process.env.VUE_APP_PROD_URL
            : "/",
    transpileDependencies: ["vuetify"],
    chainWebpack: (config) => {
        config.plugin("html").tap((args) => {
            args[0].title = `ethOS web installer`;
            args[0].osName = process.env.VUE_APP_OS_NAME;
            args[0].osDesc = process.env.VUE_APP_OS_DESC;
            args[0].analyticsDomain = process.env.VUE_APP_SA_DOMAIN;
            return args;
        });
    },
    devServer: {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    },
};
