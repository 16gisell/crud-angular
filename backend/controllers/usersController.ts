import {Request, Response} from 'express';
import pool from '../database';

class UsersController{

//listar una consulta de la base de datos
    public async listUser(req: Request, res: Response){//para listar todos
       const listUser = await pool.query('SELECT * FROM users')
       res.json(listUser)
    }
//listar por individual
    public async user(req:Request, res:Response): Promise<any>{//para listar por uno
        const{id_users} = req.params;
        const user = await pool.query('SELECT * FROM users WHERE id_users = ?', [id_users]);
        if(user.length>0){
            return res.json(user[0]);
        }
        res.status(404).json({text:"no existe"});
    }

//inserta en la base de datos usuarios.
    public async createUser(req:Request, res:Response): Promise<void>{//para crear
      //console.log(req.body);// para ejecutarlo desde el posma
      const {email} = req.body;
      const user = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
      if(user.length>0){
          res.status(404).json({text:"User register "});
      }
      else{
        await pool.query('INSERT INTO users set ?', [req.body]);
        res.json({message: 'Save User'});
      }
      // res.status(404).json({text:"User register "});

    }

//actualizamos datos en la base de datos
    public async updateUser(req:Request, res:Response): Promise<void> {//para actualizar
        const {id_users}= req.params;
        await pool.query('UPDATE users set ? WHERE id_users = ?', [req.body, id_users]);
        res.json({text: 'Update User'});

    }

//eliminamos elementos o datos de la base de datos
    public async deleteUser(req:Request, res:Response): Promise<void>{//para eliminar
        const {id_users}= req.params;
       await pool.query('DELETE FROM users WHERE id_users = ?', [id_users]);
        res.json({text: 'Delete User'})
    }

//logiar usuario
    public async login(req:Request, res:Response){
        const {email, password} = req.body;
        const user = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        const userPass = await pool.query('SELECT * FROM users WHERE password = ?', [password]);
        if(user.length>0 && userPass.length>0){
            return res.json(user[0]);
        }
        res.status(404).json({text:"User not register or password icorrect"});
    }
}

const usersController = new UsersController();
export default usersController;
