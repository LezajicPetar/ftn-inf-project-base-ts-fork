import { UserService } from "./services/user.service.js"
import { User } from "./models/user.model.js"

const userService = new UserService()

function loadTable() {

    const tBody = document.querySelector("tbody")
    userService.getAll().then((allUsers: User[]) => {

        for (const user of allUsers) {
            const tr = document.createElement("tr")

            tr.innerHTML = `<td>${user.id}</td>
                        <td>${user.ime}</td>
                        <td>${user.prezime}</td>
                        <td>${user.username}</td>
                        <td>${user.datumRodjenja}</td>
                        <td><button type='button' class='izmeniBtn'>IZMENI</button></td>`

            const izmeniBtn = tr.querySelector("button")
            izmeniBtn.addEventListener("click", () => {
                window.location.href = `editUserPage/editUser.html?id=${user.id}`
            })
            
            tBody.appendChild(tr)
        }
        
    })
}

function initialize() {

    loadTable();

    const button = document.querySelector("button")
    button.addEventListener("click", () => {
        window.location.href = "addUserPage/addUser.html"
    })
}

initialize();
