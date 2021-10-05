import express from "express";
import {
  AddNoteController,
  GetNoteController,
} from "../controllers/NotesController";
import FormValidator from "./../middlewares/FormValidator";

const router = express.Router();

router.get("/", GetNoteController);
router.post("/", FormValidator("createCategory"), AddNoteController);

export default router;
