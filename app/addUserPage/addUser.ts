import { User } from '../models/user.model.js';
import { UserService } from '../services/user.service.js'


const userService = new UserService();
const button = document.querySelector('button') as HTMLButtonElement;

function initializePage(): void {
    bindButtons();
}

function bindButtons(): void {
    button.addEventListener('click', () => {
        hideErorr();
        disableButton();
        showSpiner();
        setTimeout(handleSubmit, 5000)
    })
}
function showSpiner(): void { (document.getElementById("spinner") as HTMLDivElement).style.visibility = "visible" }
function hideSpiner(): void { (document.getElementById("spinner") as HTMLDivElement).style.visibility = "hidden" }

function hideErorr(): void { (document.getElementById("error-message") as HTMLSpanElement).style.visibility = "hidden"; }
function showError(): void { (document.getElementById("error-message") as HTMLSpanElement).style.visibility = "visible" }

function handleError(): void {
    hideSpiner();
    enableButton();
    showError();
}

function handleSubmit(): void {
    const form = document.querySelector('form');
    const formData = new FormData(form);

    const user: User = {
        ime: formData.get('ime') as string,
        prezime: formData.get('prezime') as string,
        username: formData.get('username') as string,
        datumRodjenja: formData.get('datumRodjenja') as string
    }

    userService.add(user).then(() => { window.location.href = '../index.html'; })
        .catch(error => {
            handleError();
            console.log(error)
        })
}

function disableButton(): void {
    button.style.backgroundColor = "gray";
    button.style.color = "white";
    button.style.scale = "1";
}
function enableButton(): void {
    button.style.backgroundColor = "#1E2A38";
    button.style.color = "#00BFA6";
}

initializePage();
