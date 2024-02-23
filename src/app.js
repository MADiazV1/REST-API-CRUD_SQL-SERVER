import express from "express";
import productsRouter from './routes/products.routes.js';

const app = express();
app.use(productsRouter);

export default app;