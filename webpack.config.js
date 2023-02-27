const path = require("path");

module.exports = {
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: "svg-inline-loader"
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".svg"]
    },
    output: {
        path: path.join(__dirname, "dist"),
        publicPath: "/",
        filename: "bundle.js"
    }
};
