"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = __importDefault(require("../controllers/usersController"));
class UsersRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', usersController_1.default.listUser);
        this.router.get('/:id_users', usersController_1.default.user);
        this.router.post('/register', usersController_1.default.createUser);
        this.router.post('/', usersController_1.default.login);
        this.router.put('/:id_users', usersController_1.default.updateUser);
        this.router.delete('/:id_users', usersController_1.default.deleteUser);
    }
}
const usersRouters = new UsersRouter();
exports.default = usersRouters.router;
