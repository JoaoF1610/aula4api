import validarTabuada from "../validation/escola/validarTabuada.js";
import calcularTabuada from "../service/escola/calcularTabuada.js";

import { Router } from "express";
const endpoints = Router();


endpoints.post('/escola/media', (req, resp) => {
    try {
        let notas = req.body;

        let m = (notas.nota1 + notas.nota2 + notas.nota3) / 3;

        let s = '';
        if (m >= 6) {
            s = 'Aprovado';
        }
        else {
            s = 'DP';
        }

        resp.send({
            media: m,
            situacao: s
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: 'Ocorreu um erro. Verifique os parâmetros.'
        })
    }  
})


endpoints.post('/escola/tabuada', (req, resp) => {
    try {
        validarTabuada(req);

        let numero = Number(req.query.numero);
        let tabuada = calcularTabuada(numero);

        resp.send(tabuada)
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})





export default endpoints;