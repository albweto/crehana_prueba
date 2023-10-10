"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("./users");
function default_1() {
    if (localStorage.username) {
        document.getElementById("loginbuttonModal").innerHTML = `<span> hola, ${(0, users_1.getUsers)()[0].username}</span>`;
        document.getElementById("addGalleryButtonContainer").innerHTML = `<button class="btn btn-info btn-block mb-1"> Agregar Foto </button>
        <button id="closeSessionButton" class= "btn btn-danger btn-block"> Cerrar Session</button> `;
        $("#closeSessionButton").on("click", function (event) {
            event.preventDefault();
            localStorage.clear();
            window.location.reload();
        });
    }
}
exports.default = default_1;
