import axios from "axios";

const BASE_URL = "http://localhost:8080/codereviewer"

export function getAllAssignmentsFromServer() {
    return axios.get(`${BASE_URL}/get-assignments`);
}

export function getAssignmentByIdFromServer(id) {
    return axios.get(`${BASE_URL}/get-assignmentbyid/${id}`);
}

export function getAssignmentByCodeReviewerIdFromServer(cid) {
    return axios.get(`${BASE_URL}/get-assignment/${cid}`);
}

export function reviewAssignment(assignment) {
    return axios.post(`${BASE_URL}/review-assignment`, assignment);
}

export function getCodeReviewerDetailFromServer(id) {
    return axios.get(`${BASE_URL}/get-codereviewer/${id}`);
}

export function updateCodeReviewerDetails(data) {
    return axios.post(`${BASE_URL}/update-codereviewer`, data)
}