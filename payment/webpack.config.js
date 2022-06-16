const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
    output: {
        publicPath: "http://localhost:8003/",
    },

    resolve: {
        extensions: [".vue", ".jsx", ".js", ".json"],
    },
    devServer: {
        port: 8003,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods":
                "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers":
                "X-Requested-With, content-type, Authorization",
        },
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },

    plugins: [
        new VueLoaderPlugin(),
        new ModuleFederationPlugin({
            name: "Payment",
            filename: "payment.js",
            remotes: {
                FooterVue: "Footer@http://localhost:8004/footer.js",
            },
            exposes: {
                "./VueButton": "./src/components/VueButton.vue",
                "./Order": "./src/components/Order.vue",
            },
            shared: require("./package.json").dependencies,
        }),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
        }),
    ],
};
