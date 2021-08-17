"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class UsersController {
    //listar una consulta de la base de datos
    listUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listUser = yield database_1.default.query('SELECT * FROM users');
            res.json(listUser);
        });
    }
    //listar por individual
    user(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_users } = req.params;
            const user = yield database_1.default.query('SELECT * FROM users WHERE id_users = ?', [id_users]);
            if (user.length > 0) {
                return res.json(user[0]);
            }
            res.status(404).json({ text: "no existe" });
        });
    }
    //inserta en la base de datos usuarios.
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body);// para ejecutarlo desde el posma
            const { email } = req.body;
            const user = yield database_1.default.query('SELECT * FROM users WHERE email = ?', [email]);
            if (user.length > 0) {
                res.status(404).json({ text: "User register " });
            }
            else {
                yield database_1.default.query('INSERT INTO users set ?', [req.body]);
                res.json({ message: 'Save User' });
            }
            // res.status(404).json({text:"User register "});
        });
    }
    //actualizamos datos en la base de datos
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_users } = req.params;
            yield database_1.default.query('UPDATE users set ? WHERE id_users = ?', [req.body, id_users]);
            res.json({ text: 'Update User' });
        });
    }
    //eliminamos elementos o datos de la base de datos
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_users } = req.params;
            yield database_1.default.query('DELETE FROM users WHERE id_users = ?', [id_users]);
            res.json({ text: 'Delete User' });
        });
    }
    //logiar usuario
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            const user = yield database_1.default.query('SELECT * FROM users WHERE email = ?', [email]);
            const userPass = yield database_1.default.query('SELECT * FROM users WHERE password = ?', [password]);
            if (user.length > 0 && userPass.length > 0) {
                return res.json(user[0]);
            }
            res.status(404).json({ text: "User not register or password icorrect" });
        });
    }
}
const usersController = new UsersController();
exports.default = usersController;
