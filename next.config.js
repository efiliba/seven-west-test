module.exports = {
  distDir: 'build',
  exportPathMap: () => ({
    '/': { page: '/' },
  }),
  assetPrefix: process.env.NODE_ENV === 'production' ? '/seven-west-test' : '',
};
