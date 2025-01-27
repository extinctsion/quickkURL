module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/shorten',
          destination: 'http://65.0.122.230:8080/api',
        },
      ];
    },
  };
  