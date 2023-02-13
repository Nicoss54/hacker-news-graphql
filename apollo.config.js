module.exports = {
  client: {
    service: {
      name: 'apollo',
      url: 'http://localhost:4000/graphql',
    },
    includes: ['src/**/*.{js, qraphql}'],
  },
};
