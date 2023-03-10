import axios from "axios";

const BASE_URL = "http://localhost:8080/admin"

export function addStudent(student) {
    return axios.post(`${BASE_URL}/add-student`, student);
}

export function addCodeReviewer(codeReviewer) {
    return axios.post(`${BASE_URL}/add-codereviewer`, codeReviewer);
}

export function getAdminDetailsFromServer() {
    return axios.get(`${BASE_URL}/admin-details`);
}

//login service
const LOGIN_BASE_URL = "http://localhost:8080/login"

export function login(data) {
    return axios.post(`${LOGIN_BASE_URL}/user`, data);
}
