module.exports = {
  async redirects() {
    return [
      {
        source: `/`,
        destination: `/roon`,
        permanent: true,
      },
    ];
  },
};
