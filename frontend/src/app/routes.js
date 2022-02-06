import SimpleJsMvc from "../engine/SimpleJsMvc";
import { CategoryAddController } from "./controllers/dashboard/CategoryAddController";
import { CategoryListController } from "./controllers/dashboard/CategoryListController";
import { CategoryUpdateController } from "./controllers/dashboard/CategoryUpdateController";
import { DashboardController } from "./controllers/dashboard/DashboardController";
import { NoteAddController } from "./controllers/dashboard/NoteAddController";
import { NoteListController } from "./controllers/dashboard/NoteListController";
import { NoteUpdateController } from "./controllers/dashboard/NoteUpdateController";
import LoginController from "./controllers/LoginController";
import { NotFoundController } from "./controllers/NotFoundController";

const routes = () => {
  return [
    {
      path: "/404",
      controller: NotFoundController,
      title: "404 - Not Found",
    },
    {
      path: "/login",
      controller: LoginController,
      title: "Login | NodeJS Notes App",
    },
    {
      path: "/dashboard",
      controller: DashboardController,
      title: "Dashboard | NodeJS Notes App",
    },
    {
      path: "/dashboard/categories/add",
      controller: CategoryAddController,
      title: "Add Category | NodeJS Notes App",
    },
    {
      path: "/dashboard/categories",
      controller: CategoryListController,
      title: "Category List | NodeJS Notes App",
    },
    {
      path: "/dashboard/categories/{id}/update",
      controller: CategoryUpdateController,
      title: "Update Category | NodeJS Notes App",
    },
    {
      path: "/dashboard/notes/add",
      controller: NoteAddController,
      title: "Add Note | NodeJS Notes App",
    },
    {
      path: "/dashboard/notes",
      controller: NoteListController,
      title: "Note List | NodeJS Notes App",
    },
    {
      path: "/dashboard/notes/{id}/update",
      controller: NoteUpdateController,
      title: "Update Note | NodeJS Notes App",
    },
  ];
};

export const notFound = () => {
  SimpleJsMvc.gotoURL("/login");
};

export default routes;
