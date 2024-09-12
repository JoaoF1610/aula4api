import express from 'express';
import adicionarEndpoints from './rotas.js';

const servidor = express();
servidor.use(express.json());

adicionarEndpoints(servidor);

servidor.listen(5010, () => console.log('API subiu na porta 5010'));