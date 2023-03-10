import axios from "axios";

const BASE_URL = "http://localhost:8080"

export function createAssignment(assignment) {
    return axios.post(`${BASE_URL}/submit`, assignment);
}