import axios from "axios";

export function Login({ email, password }: { email: string, password: string }) {
    const response = axios.post('http://localhost:5000/auth/login', { email, password }, { withCredentials: true });
    console.log(response);
    return response;
}

export function Register({ username, email, phone, password }: { username: string, email: string, phone: string, password: string }) {
    const response = axios.post('http://localhost:5000/auth/register', { username, email, phone, password }, { withCredentials: true });
    console.log(response);
    return response;
} 