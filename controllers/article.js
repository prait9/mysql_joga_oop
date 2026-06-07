const articleDbModel = require('../models/article')
const articleModel = new articleDbModel()

class articleController {
  async getAllArticles(req, res){
    const articles = await articleModel.findAll()
    res.status(200).json({articles})
  }

  async getArticleBySlug(req, res){
    const article = await articleModel.findOne(req.params.slug)
    res.status(200).json({article})
  }

  async createNewArticle(req, res){
    const newArticle = {
      name: req.body.name,
      slug: req.body.slug,
      image: req.body.image,
      body: req.body.body,
      published: req.body.published || new Date().toISOString().slice(0, 19).replace('T', ' '),
      author_id: req.body.author_id
    }

    const articleId = await articleModel.create(newArticle)

    res.status(201).json({
      message: `created article with id ${articleId}`,
      article: {id: articleId, ...newArticle}
    })
  }

  async updateArticle(req, res){
    const article = {
      name: req.body.name,
      slug: req.body.slug,
      image: req.body.image,
      body: req.body.body,
      published: req.body.published,
      author_id: req.body.author_id
    }

    const updatedRows = await articleModel.update(req.params.id, article)

    res.status(200).json({
      message: `updated article with id ${req.params.id}`,
      updatedRows,
      article: {id: req.params.id, ...article}
    })
  }

  async deleteArticle(req, res){
    const deletedRows = await articleModel.delete(req.params.id)

    res.status(200).json({
      message: `deleted article with id ${req.params.id}`,
      deletedRows
    })
  }

}

module.exports = new articleController();
