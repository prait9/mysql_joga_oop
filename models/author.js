const BaseSQLModel = require('./base');

class AuthorModel extends BaseSQLModel {
  constructor() {
    super('author');
  }

async findAll() {
    return await super.findAll();
    }

async findOne(slug) {
    return await super.findOne('slug', slug);
    }

}

module.exports = AuthorModel;