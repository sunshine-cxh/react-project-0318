import request from "@utils/request";

const BASE_URL = "/admin/edu/subject";
// const MOCK_URL ="http://localhost:8888/admin/edu/subject"


export function reqSubjectList (page, limit) {
  return request({
    url: `${BASE_URL}/${page}/${limit}`,
    method: "GET",
  });
}

export function reqSecSubjectList (parentId) {
  return request({
    url: `${BASE_URL}/${parentId}`,
    method: "GET",
  });
}

