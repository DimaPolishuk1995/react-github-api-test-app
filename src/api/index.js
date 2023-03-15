import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com';

const token = process.env.REACT_APP_GITHUB_TOKEN;
const headers = {};
if (token) {
    headers.Authorization = `Bearer ${token}`;
}

export const instance = axios.create({
    baseURL: GITHUB_API_BASE_URL,
    headers,
});
