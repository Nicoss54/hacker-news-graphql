const { LinkResolver } = require('../provider/link.provider');

const linkResolverService = new LinkResolver();

module.exports = {
  Query: {
    feed: () => linkResolverService.getAllLinks(),
    link: (_, { id }) => linkResolverService.getLinkDetails(id),
  },
  Mutation: {
    postLink: (parent, { url, description }) => linkResolverService.postLink(url, description),
    updateLink: (parent, { id, url, description }) => linkResolverService.updateLink(id, url, description),
    deleteLink: (parent, { id }) => linkResolverService.deleteLink(id),
  },
};
