const BaseSQLModel = require('./base');

class ArticleModel extends BaseSQLModel {
  constructor() {
    super('article');
  }

  async findAll() {
    const articles = await super.findAll();
    return articles;
  }

  async findOne(slug) {
    const articles = await super.findOne('slug', slug);
    return articles;
  }

  async findMany(author) {
    const articles = await super.findMany('author_id', author.id);
    return articles;
  }

  async create(article) {
    const createArticleId = await super.create(article);
    return createArticleId;
  }

}

module.exports = ArticleModel;
