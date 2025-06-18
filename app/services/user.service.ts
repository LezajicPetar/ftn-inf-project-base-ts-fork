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
                        throw { status: response.status, message: errorMessage }
                    })
                }
                return response.json();
            }).then((users) => {
                return users.data as User[];
            }).catch(error => {
                console.error('Error', error.status)
                throw error;
            })
    }

    add(user: User): Promise<User> {

        console.log(user)
        return fetch(this.apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        }).then(response => {
            if (!response.ok) {
                return response.text().then(errorMessage => {
                    throw { status: response.status, message: errorMessage }
                })
            }
            return response.json()
        }).then((user: User)=> {
            return user
        }).catch(error => {
            console.error('Error', error.status)
            throw error
        });
    }
}