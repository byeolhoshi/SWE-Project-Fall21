//
//https://webpack.js.org/configuration/configuration-types/
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = funcion(_env, argv) {
  // The entry point file described above
  const isProduction = argv.mode === "production";
  const isDevelopment = !isProduction; 
  return{
        entry: './src/index.js',
        // The location of the build folder described above
        output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: "../public",
        devtool: isDevelopmeent && 'cheap-module-source-map'
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use:{
                        loader: "babel-loader", 
                        options:{
                            cacheDirectory: true,
                            cacheCompression: false, 
                            envName: isProduction ? "production" : "development"
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        isProduction ? MiniCssExtractPlugin.loader : "style-loader",
                        "css-loader"
                    ]
                },

            ]
        }, 
        resolve: {
            extensions: [".js", ".jsx"]
    },
        plugins: [
            isProduction && 
                new MiniCssExtractPlugin({
                    filename: "assets/css/[name].[contenthash:8].css",
                    chunkFilename: "assets/css/[name]/[contenthash:8].chunk.css"
                })
            ].filter(Boolean)
        // Optional and for development only. This provides the ability to
        // map the built code back to the original source format when debugging.
        
  }
  
};