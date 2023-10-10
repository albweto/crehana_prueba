"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("./users");
const login_1 = __importDefault(require("./login"));
require("jquery");
document
    .getElementById("loginButton")
    .addEventListener("click", function (event) {
    event.preventDefault();
    let username = (document.getElementById("username")).value;
    let password = (document.getElementById("password")).value;
    (0, login_1.default)((0, users_1.getUsers)()[0], { username, password });
});
