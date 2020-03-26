const express = require('express'); // importando a blibioteca
const cors = require('cors'); // importando a blibioteca 
const routes = require('./routes'); // ./ para referenciar arquivos 
const app = express(); //instanciando a aplicação

app.use(cors());
app.use(express.json()); // requisições converte para javascripts
app.use(routes)


/**
 * Rota / Recursos
 * 
 * Métodos HTTP 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informaçaõ no back-end
 * DELETE: Deletar uma informação no back -end
 * 
 */

 /**
  * Tipos de parametro
  */
/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users')
 */


 

app.listen(3333); //ouvir a porta 3333


