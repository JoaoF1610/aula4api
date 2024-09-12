import escolaController from "./src/controller/escolaController.js";
import calculadoraController from "./src/controller/calculadoraController.js";


export default function adicionarEndpoints(servidor) {
    servidor.use(escolaController);
    servidor.use(calculadoraController);
}

