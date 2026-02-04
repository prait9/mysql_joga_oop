const baseSQLModel = require('./base');

class AuthorModel extends baseSQLModel {
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