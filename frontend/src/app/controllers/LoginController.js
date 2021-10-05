import LoginView from "./../views/Login.mustache";
import SimpleJsMvc from "../../engine/SimpleJsMvc";
import { loginUser } from "../services/LoginService";
import { AuthHolder } from "../services/AuthHolder";

export default class LoginController {
  constructor(reference) {
    this.data = {
      form: {
        username: "",
        password: "",
      },
      loading: false,
      doNotMatch: false,
    };
  }

  onInit() {
    SimpleJsMvc.bindFunction("updateForm", this.updateForm);
    SimpleJsMvc.bindFunction("onSubmit", this.onSubmit);
  }

  updateForm(prop, event) {
    this.data.form[prop] = event.target.value;
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.data.form.username != "" && this.data.form.password != "") {
      this.data.doNotMatch = false;
      this.data.loading = true;
      SimpleJsMvc.renderView();
      loginUser(this.data.form)
        .then((response) => {
          this.data.doNotMatch = false;
          AuthHolder.setToken(response.data);
          SimpleJsMvc.gotoURL("/dashboard");
        })
        .catch((error) => {
          this.data.doNotMatch = true;
        })
        .finally(() => {
          this.loading = false;
          SimpleJsMvc.renderView();
        });
    }
  }

  view() {
    return LoginView;
  }
}
