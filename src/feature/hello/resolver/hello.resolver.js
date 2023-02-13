module.exports = {
  Query: {
    info: () => 'Hello Nicolas',
    hello(root, { name }, context) {
      return `Hello ${name}`;
    },
  },
};
