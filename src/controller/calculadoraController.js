import { Router } from "express";
const endpoints = Router();




endpoints.get('/calculadora/somar/:n1/:n2', (req, resp) => {
    let numero1 = Number(req.params.n1);
    let numero2 = Number(req.params.n2);

    let s = numero1 + numero2;

    resp.send({
        soma: s
    })
})



endpoints.get('/calculadora/subtrair', (req, resp) => {
    let numero1 = Number(req.query.num1);
    let numero2 = Number(req.query.num2);

    let s = numero1 - numero2;

    resp.send({
        subtracao: s
    })
})






export default endpoints;