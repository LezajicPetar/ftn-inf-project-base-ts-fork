import { User } from "../models/user.model.js";

export class UserService {
    private apiUrl: string;

    constructor() {
        this.apiUrl = "http://localhost:30471/api/korisnici";
    }

    getAll(): Promise<User[]> {
        return fetch(this.apiUrl)
            .then(response => {
                if (!response.ok) {
                    return response.text().then(errorMessage => {
                        throw { status: response.status, message: errorMessage}
                    })
                }
                return response.json();
            }).then((users)=> {
                return users.data as User[];
            }).catch(error => {
                console.error('Error', error.status)
                throw error;
            })
        }
}