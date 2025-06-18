import { User } from '../models/user.model.js';
import { UserService } from '../services/user.service.js'

const userService = new UserService();

function initialize() {
    const button = document.querySelector('button');

    button.addEventListener('click', () => {

        const form = document.querySelector('form');
        const formData = new FormData(form);

        const user: User = {
            ime: formData.get('ime') as string,
            prezime: formData.get('prezime') as string,
            username: formData.get('username') as string,
            datumRodjenja: formData.get('datumRodjenja') as string
        }
        userService.add(user);
        window.location.href = '../index.html';

    });
}

initialize();
