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
class ListFileController {
    //listar una consulta de la base de datos
    listFile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listUser = yield database_1.default.query('SELECT * FROM archivos');
            res.json(listUser);
        });
    }
    //listar por individual
    files(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_files } = req.params;
            const user = yield database_1.default.query('SELECT * FROM archivos WHERE id_files = ?', [id_files]);
            if (user.length > 0) {
                return res.json(user[0]);
            }
            res.status(404).json({ text: "no existe" });
        });
    }
    //inserta en la base de datos.
    createFile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body);// para ejecutarlo desde el posman
            const { codeFile } = req.body;
            const user = yield database_1.default.query('SELECT * FROM archivos WHERE codeFile = ?', [codeFile]);
            if (user.length > 0) {
                res.status(404).json({ text: "Code Repet" });
            }
            else {
                yield database_1.default.query('INSERT INTO archivos set ?', [req.body]); //esto es el inserto y consulta con la base de datos
                res.json({ message: 'Save data file' });
            }
        });
    }
    //actualizamos en la base de datos
    updatefile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_files } = req.params;
            yield database_1.default.query('UPDATE archivos set ? WHERE id_files = ?', [req.body, id_files]);
            res.json('update File');
        });
    }
    //eliminamos elementos o datos de la base de datos
    deleteFile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_files } = req.params;
            yield database_1.default.query('DELETE FROM archivos WHERE id_files = ?', [id_files]);
            res.json('delete File');
        });
    }
}
const listFileController = new ListFileController();
exports.default = listFileController;
