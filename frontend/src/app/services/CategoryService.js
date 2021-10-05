import { ApiCall } from "./NetworkAdapter";

export function addCategory(data) {
  return ApiCall().authorized().post(`/categories`, data);
}

export function getCategories() {
  return ApiCall().authorized().get(`/categories`);
}
