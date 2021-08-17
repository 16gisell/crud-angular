import {Router} from 'express';
import usersController from '../controllers/usersController';

class UsersRouter{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', usersController.listUser);
        this.router.get('/:id_users',usersController.user);
        this.router.post('/register',usersController.createUser);
        this.router.post('/',usersController.login);
        this.router.put('/:id_users',usersController.updateUser)
        this.router.delete('/:id_users',usersController.deleteUser);
    }

}
const usersRouters = new UsersRouter();
export default usersRouters.router;
