//solo para usar los elementos de mi base de datos en desarrollo
if(process.env.NODE_ENV !=='production'){
  require('dotenv').config();
}
import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

//archivos de rutas
import usersRouters from './routers/usersRouters';
import listFileRouter from './routers/listFileRouters';

class Server{
  public app: Application;

  constructor(){
    this.app= express();
    this.config();
    this.routes();
  }

  config():void{
    this.app.set('port', process.env.PORT || 4000);
    this.app.use(morgan('dev')),
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended:false}));
  }

  routes():void{
    this.app.use('/api/users',usersRouters);
    this.app.use('/api/file',listFileRouter);
  }

  start(): void{
    this.app.listen(this.app.get('port'), ()=>{
        console.log('server on port', this.app.get('port'));
    })
}
}
const server = new Server();
server.start();
