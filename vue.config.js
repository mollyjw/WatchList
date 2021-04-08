module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: {
      '/api/*': {
        target: 'https://api.fbi.gov/wanted/v1/list',
        changeOrigin: true,
        secure: false
      },
    }
  }
}
