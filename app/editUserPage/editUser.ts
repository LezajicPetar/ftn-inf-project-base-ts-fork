import { User } from "../models/user.model.js";
import { UserService } from "../services/user.service.js";

const userService = new UserService();

function initialize() {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get("id");
    const form = document.querySelector("form") as HTMLFormElement;

    userService.getById(Number(userId)).then((user: User) => {
        form.ime.value = user.ime;
        form.prezime.value = user.prezime;
        form.username.value = user.username;
        form.datumRodjenja.value = user.datumRodjenja;
    })



    const saveBtn = document.querySelector("button") as HTMLButtonElement;
    saveBtn.addEventListener("click", ()=> {
        const formData : FormData = new FormData(form);
        
        const user: User = {
            ime: formData.get("ime") as string,
            prezime: formData.get("prezime") as string,
            username: formData.get("username") as string,
            datumRodjenja: formData.get("datumRodjenja") as string,
        }
        userService.update(user);
        window.location.href = "../index.html";
    })
}

document.addEventListener("DOMContentLoaded", initialize);