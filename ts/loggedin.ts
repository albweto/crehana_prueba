import { getUsers } from "./users";
export default function () {
  if (localStorage.username) {
    document.getElementById("loginbuttonModal")!.innerHTML = `<span> hola, ${
      getUsers()[0].username
    }</span>`;
    document.getElementById(
      "addGalleryButtonContainer"
    )!.innerHTML = `<button class="btn btn-info btn-block mb-1"> Agregar Foto </button>
        <button id="closeSessionButton" class= "btn btn-danger btn-block"> Cerrar Session</button> `;

    $("#closeSessionButton").on("click", function (event) {
      event.preventDefault();

      localStorage.clear();

      window.location.reload();
    });
  }
}
