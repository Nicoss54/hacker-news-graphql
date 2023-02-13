const links = require('../../../mocks/link');

class LinkResolver {
  links;

  constructor() {
    this.links = links;
  }

  getAllLinks() {
    return this.links;
  }

  getLinkDetails(id) {
    return this.links.find(({ id: linkId }) => linkId === id);
  }

  postLink(url, description) {
    const link = {
      id: `link-${this.links.length + 1}`,
      url,
      description,
    };
    this.links = [...this.links, link];
    return link;
  }

  updateLink(id, url, description) {
    const indexLink = this.links.findIndex(({ id: linkId }) => linkId === id);
    const newLink = { ...this.links[indexLink], url, description };
    this.links.splice(indexLink, 1, newLink);
    return newLink;
  }

  deleteLink(id) {
    const indexLink = this.links.findIndex(({ id: linkId }) => linkId === id);
    this.links.splice(indexLink, 1);
    return this.links;
  }
}

module.exports.LinkResolver = LinkResolver;
