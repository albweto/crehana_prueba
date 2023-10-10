import { getUsers } from "./users";
import login from "./login";
import 'jquery';

document
  .getElementById("loginButton")!
  .addEventListener("click", function (event) {
    event.preventDefault();
    let username: string = (<HTMLInputElement>(
      document.getElementById("username")
    )).value;
    let password: string = (<HTMLInputElement>(
      document.getElementById("password")
    )).value;

    login(getUsers()[0], { username, password });
  });


