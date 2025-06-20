import { User } from "../models/user.model.js";
import { UserService } from "../services/user.service.js";

const userService = new UserService();

function initialize() {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get("id");

    userService.getById(Number(userId)).then((user: User) => {
        const form = document.querySelector("form") as HTMLFormElement;
        form.ime.value = user.ime;
        form.prezime.value = user.prezime;
        form.username.value = user.username;
        form.datumRodjenja.value = user.datumRodjenja;
    })
}

document.addEventListener("DOMContentLoaded", initialize);