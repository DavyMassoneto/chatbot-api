import 'reflect-metadata';
import express from 'express';
import { config } from 'dotenv';
import { InversifyExpressServer } from 'inversify-express-utils';
import container from './config/inversify.config';

config();

const server = new InversifyExpressServer(container);

server.setConfig((app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
});

const appConfigured = server.build();
const port = process.env.PORT || 3000;

appConfigured.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
