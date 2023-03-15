import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com';

export const instance = axios.create({
    baseURL: GITHUB_API_BASE_URL,
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
    },
});
