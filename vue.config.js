module.exports = {
  css: {
    sourceMap: true,
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-px2rem")({
            // 设计稿为1920px时为192
            // 设计图的宽度/10 比如你的设计图是1920的宽度 这里你就1920/10=192
            remUnit: 192
          })
        ]
      }
    },
    requireModuleExtension: true
  },
  devServer: {
    disableHostCheck: true
  },
  productionSourceMap: false // 生产环境是否生成 sourceMap 文件
};
