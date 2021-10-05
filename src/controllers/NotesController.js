import { AddNote, GetNotes } from "../service/NoteService";

export const AddNoteController = (req, res, next) => {
  AddNote(
    req.body,
    req.user.id,
    (result) => {
      return res.status(200).json(result);
    },
    (error) => {
      console.error(error);
      return res.status(500).json({
        message: "Database Error",
      });
    }
  );
};

export const GetNoteController = (req, res, next) => {
  GetNotes(
    req.user.id,
    (result) => {
      return res.status(200).json(result);
    },
    (error) => {
      console.error(error);
      return res.status(500).json({
        message: "Database Error",
      });
    }
  );
};
