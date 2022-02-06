import { ApiCall } from "./NetworkAdapter";

export function addNote(data) {
  return ApiCall().authorized().post(`/notes`, data);
}

export function getNotes() {
  return ApiCall().authorized().get(`/notes`);
}

export function getNote(id) {
  return ApiCall().authorized().get(`/note/${id}`);
}

export function updateNote(data) {
  return ApiCall().authorized().put(`/note/${data.id}`, data);
}
