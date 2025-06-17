import { UserService } from "./services/user.service.js"
import { User } from "./models/user.model.js"

const userService = new UserService()

function loadTable() {

    userService.getAll().then((allUsers: User[]) => {
       
        for (const user of allUsers) {
            
            const tr = document.createElement("tr")
            tr.innerHTML = `<td>${user.id}</td>
                        <td>${user.ime}</td>
                        <td>${user.prezime}</td>
                        <td>${user.username}</td>
                        <td>${user.datumRodjenja.toString()}</td>`

            const tBody = document.querySelector("tbody")
            tBody.appendChild(tr)
        }
    })
}

loadTable();