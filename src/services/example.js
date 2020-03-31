import request from "../utils/request";

const pox = "/apis";
export function query() {
  return request("/api/users");
}

export function testCode() {
  return request(pox + "/api/v1/topics");
}
