import SimpleJsMvc from "../../engine/SimpleJsMvc";
import { AuthHolder } from "./AuthHolder";
import { ApiCall } from "./NetworkAdapter";

export class AuthService {
  constructor() {
    this.user = null;
  }

  isAuthenticated() {
    return new Promise((resolve, reject) => {
      if (!AuthHolder.getToken().token) {
        return reject(false);
      } else {
        ApiCall()
          .authorized()
          .get("/users/whoami")
          .then((response) => {
            this.user = response.data;
            setTimeout(() => {
              SimpleJsMvc.renderView();
            }, 300);
            return resolve(true);
          })
          .catch(() => {
            return reject(false);
          });
      }
    });
  }

  removeAuth() {
    this.user = null;
    AuthHolder.setToken(null);
    SimpleJsMvc.gotoURL("/login");
  }
}
