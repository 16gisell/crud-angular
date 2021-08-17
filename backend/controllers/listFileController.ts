import {Request, Response} from 'express';
import pool from '../database';

class ListFileController{

//listar una consulta de la base de datos
    public async listFile(req: Request, res: Response){//para listar todos
       const listUser = await pool.query('SELECT * FROM archivos')
       res.json(listUser)
    }
//listar por individual
    public async files(req:Request, res:Response): Promise<any>{//para listar por uno
        const{id_files} = req.params;
        const user = await pool.query('SELECT * FROM archivos WHERE id_files = ?', [id_files]);
        if(user.length>0){
            return res.json(user[0]);
        }
        res.status(404).json({text:"no existe"});
    }

//inserta en la base de datos.
    public async createFile(req:Request, res:Response): Promise<void>{//para crear
        //console.log(req.body);// para ejecutarlo desde el posman
        const {codeFile} = req.body;
      const user = await pool.query('SELECT * FROM archivos WHERE codeFile = ?', [codeFile]);
      if(user.length>0){
          res.status(404).json({text:"Code Repet"});
      }
      else{
        await pool.query('INSERT INTO archivos set ?', [req.body]); //esto es el inserto y consulta con la base de datos
        res.json({message: 'Save data file'});
      }

    }

//actualizamos en la base de datos
    public async updatefile(req:Request, res:Response): Promise<void> {//para actualizar
        const {id_files}= req.params;
        await pool.query('UPDATE archivos set ? WHERE id_files = ?', [req.body, id_files]);
        res.json('update File');

    }

//eliminamos elementos o datos de la base de datos
    public async deleteFile(req:Request, res:Response): Promise<void>{//para eliminar
        const {id_files}= req.params;
       await pool.query('DELETE FROM archivos WHERE id_files = ?', [id_files]);
        res.json('delete File')
    }
}

const listFileController = new ListFileController();
export default listFileController;
