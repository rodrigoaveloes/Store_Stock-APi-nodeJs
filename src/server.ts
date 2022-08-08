import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import apiRoutes from './routes/api';
import cors from 'cors';



dotenv.config();

const server = express();


server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended: true}));
server.use(cors({
    // origin: 'https://resttesttest.com',
    // methods: ['GET', 'POST']
}))

server.use('/api',apiRoutes)

server.use((req: Request, res: Response) => {
    res.status(404);
    res.json({error: 'Endpoint não encontrado.'});
});

server.listen(process.env.PORT);



// cors = permissão de apis no geral. eu defino o que pode ser feito desde um get, put, delete, quem pode acessar...