const path = require("path");

module.exports = {
    entry: "./src/index.js",                        // our main JS file
    output: {
        filename: "main.js",                        // the file we connect to index.html
        path: path.resolve(__dirname, "dist")       // where we look for the output
    },
    module: {
        rules: [
            {   // this object will look for css files and transform them
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            }
        ]
    }
}