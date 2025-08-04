import { router } from './rotes/product.route.js';
import { connectDb } from './config/db.js';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT

export const app = express();
app.use(express.json());
// app.use(cors());

app.use(cors({
  origin: 'http://localhost:5173', // разрешаем доступ только с вашего frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // какие методы разрешены
  credentials: true // если используете куки или авторизацию
}));

app.use('/api/products', router);

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server Listening at PORT: ${PORT}`);
  });
});
