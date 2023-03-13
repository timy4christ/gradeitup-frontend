import axios from "axios";

const BASE_URL = "http://localhost:8080/student"

export function getCodeReviewerListFromServer() {
    return axios.get(`${BASE_URL}/get-codereviewers`);
}

export function addAssignment(assignment) {
    return axios.post(`${BASE_URL}/add-assignment`, assignment);
}

export function getStudentDetailFromServer(id) {
    return axios.get(`${BASE_URL}/get-student/${id}`);
}

export function updateStudentDetails(data) {
    return axios.post(`${BASE_URL}/update-codereviewer`, data)
}

//getAssignmentByStudentIdFromServer
export function getAssignmentsByStudentIdFromServer(sid) {
    return axios.get(`${BASE_URL}/get-assignmentbysid/${sid}`);
}

export function getAssignmentById(id) {
    return axios.get(`${BASE_URL}/get-assignmentbyid/${id}`);
}




