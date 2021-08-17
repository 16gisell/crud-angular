import {Router} from 'express'; //definir un enrutador
import listFileController from '../controllers/listFileController';

class ListFileRouter{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', listFileController.listFile);
        this.router.get('/:id_files',listFileController.files);
        this.router.post('/',listFileController.createFile);
        this.router.put('/:id_files',listFileController.updatefile)
        this.router.delete('/:id_files',listFileController.deleteFile);
    }

}
const listFileRouter = new ListFileRouter();
export default listFileRouter.router;
