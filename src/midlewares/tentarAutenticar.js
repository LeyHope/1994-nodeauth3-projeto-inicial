const { middlewaresAutenticacao } = require('../usuarios')

module.exports = (requisicao, resposta, proximo) => {
    requisicao.estaAutenticacao = false

    if(requisicao.get('Authorization')) {
        return middlewaresAutenticacao.bearer(requisicao, resposta, proximo)
    }

    proximo()
}