import express from 'express';
import LivroController from '../controllers/livroController.js';

const routes = express.Router();

routes.get('/listLivros', LivroController.listarLivro);
routes.post('/listlivros', LivroController.cadastrarLivro)

export default routes;