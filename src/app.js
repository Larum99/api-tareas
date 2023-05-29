/* archivo para configurar la aplicación */

/* const express = require('express'); */
import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json'

import { createRoles } from "./libs/initialSetup";

import tareasRoutes from './routes/tareas.routes'
import authRoutes from './routes/auth.routes'
import usersRoutes from './routes/user.routes'


//initializations
const app = express();
createRoles();

//settings
app.set(pkg, 'pkg');

//middlewares
app.use(morgan('dev')); //puede ser dev, combine, common,done(null, user.id); tiny, entre otras. Distintos formatos para mostrar la infor en consola
app.use(express.json());
app.use('/api/tareas', tareasRoutes);
app.use('/api/auth', authRoutes)
app.use('/api/users', usersRoutes)

export default app;