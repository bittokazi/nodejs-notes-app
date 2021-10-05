import { ApiCall } from "./NetworkAdapter";

export function addNote(data) {
  return ApiCall().authorized().post(`/notes`, data);
}

export function getNotes() {
  return ApiCall().authorized().get(`/notes`);
}
