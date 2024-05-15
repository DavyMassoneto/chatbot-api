import 'reflect-metadata';
import express from 'express';
import { config } from 'dotenv';

config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Servidor rodando!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
