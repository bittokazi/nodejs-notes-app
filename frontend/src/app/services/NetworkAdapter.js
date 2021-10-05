import axios from "axios";
import SimpleJsMvc from "../../engine/SimpleJsMvc";
import { Config } from "../Config";
import { AuthHolder } from "./AuthHolder";

export function ApiCall() {
  return {
    public: () => {
      return axios.create({
        baseURL: `${Config.API_BASE_URL}`,
      });
    },
    authorized: () => {
      let http = axios.create({
        baseURL: `${Config.API_BASE_URL}`,
        headers: {
          Authorization: `Bearer ${AuthHolder.getToken().token}`,
        },
      });
      http.interceptors.response.use(
        function (response) {
          return response;
        },
        function (error) {
          if (!error.response) {
            reject({ type: "noServer" });
          }
          if (error.response.status == 401 || error.response.status == 403) {
            SimpleJsMvc.gotoURL("/login");
          } else {
            reject(error);
            return;
          }
        }
      );
      return http;
    },
  };
}
