const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost']
  },
  env: {
    APP_URL: process.env.REACT_APP_URL,
    APP_URL1: process.env.REACT_APP_URL1,
  },
}

module.exports = nextConfig
