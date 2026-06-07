const AuthorModel = require('../models/author')
const ArticleModel = require('../models/article')

const authorModel = new AuthorModel()
const articleModel = new ArticleModel()

class AuthorController {
  async getArticlesByAuthor(req, res) {
    const author = await authorModel.findById(req.params.author_id)

    if (!author) {
      return res.status(404).json({ message: 'Author not found' })
    }

    const articles = await articleModel.findMany(author)

    return res.status(200).json({
      author,
      articles,
    })
  }
}

module.exports = new AuthorController()
