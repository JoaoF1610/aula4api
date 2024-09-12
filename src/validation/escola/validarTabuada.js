

export default function validarTabuada(req) {
    if (!req.query.numero) {
        throw new Error('Parâmetro query[numero] não informado.')
    }

    if (isNaN(req.query.numero)) {
        throw new Error('Parâmetro query[numero] precisa estar no formato Number')
    }
}