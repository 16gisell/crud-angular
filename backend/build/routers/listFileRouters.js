"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //definir un enrutador
const listFileController_1 = __importDefault(require("../controllers/listFileController"));
class ListFileRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', listFileController_1.default.listFile);
        this.router.get('/:id_files', listFileController_1.default.files);
        this.router.post('/', listFileController_1.default.createFile);
        this.router.put('/:id_files', listFileController_1.default.updatefile);
        this.router.delete('/:id_files', listFileController_1.default.deleteFile);
    }
}
const listFileRouter = new ListFileRouter();
exports.default = listFileRouter.router;
