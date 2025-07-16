import axios from "axios";
export const token = import.meta.env.VITE_GITHUB_TOKEN
export const api = axios.create({
  baseURL: "https://api.github.com",
});
