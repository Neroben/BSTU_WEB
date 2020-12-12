const { createProxyMiddleware } = require('http-proxy-middleware')

const withoutPrefix = ['oauth']

const sasha = 'http://localhost:8090'

const backendUrl = sasha

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: backendUrl,
      changeOrigin: true,
      secure: false,
      pathRewrite: (path) => {
        const needRemovePrefix = withoutPrefix.some((url) => path.includes(url))

        if (needRemovePrefix) {
          return path.replace('/api', '')
        }

        return path
      },
    }),
    createProxyMiddleware('/oauth', {
      target: backendUrl,
      changeOrigin: true,
      secure: false,
    })
  )
}
