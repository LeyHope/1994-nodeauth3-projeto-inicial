const postsControlador = require('./posts-controlador')
const { middlewaresAutenticacao } = require('../usuarios')
const autorizacao = require('../midlewares/autorizacao')
const tentarAutenticar = require('../midlewares/tentarAutenticar')

module.exports = app => {
  app
    .route('/post')
    .get(
      [tentarAutenticar],
      postsControlador.lista
    )
    .post(
      [middlewaresAutenticacao.bearer, autorizacao('post', 'criar')],
      postsControlador.adiciona
    )

  app.route('/post/:id')
    .get(
      [middlewaresAutenticacao.bearer, autorizacao('post', 'ler')],
      postsControlador.obterDetalhes
    )
    .delete(
      [middlewaresAutenticacao.bearer, autorizacao('post', 'remover')],
      postsControlador.remover
    )
}
