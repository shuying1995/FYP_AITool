module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "^/api": {
        target: "http://127.0.0.1:4000",
        changeOrigin: true,
        secure: true,
        pathRewrite: { "^/api": "/api" }
      }
    }
  }
};
