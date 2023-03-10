import axios from "axios";

const BASE_URL = "http://localhost:8080"

export function getAllSubjects() {
    return axios.get(`${BASE_URL}/get-subjects`);
}