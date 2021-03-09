const path = require("path");
const resolve = dir => {
  return path.join(__dirname, dir);
};

module.exports = {
  publicPath: "./",
  chainWebpack: config => {
    // key,value自行定义，比如.set('@@', resolve('src/components'))
    config.resolve.alias.set("_c", resolve("src/components"));
    config
      .plugin("webpack-bundle-analyzer")
      .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin);
  },
  productionSourceMap: false // 生产环境是否生成 sourceMap 文件
};
