import axios from 'axios';

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        let cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

let csrftoken = getCookie('csrftoken');
const storedToken = localStorage.getItem('jwt_token');

const instance = axios.create({
    baseURL: "http://localhost:3000/auth",
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken,
    }
});

export default instance;