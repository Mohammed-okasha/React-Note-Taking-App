import { useAppSelector, useAppDispatch } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import Title from "../UI/Title";
import NoteForm from "./NoteForm";

import { Note, NoteData } from "../../models/types";
import { notesActions } from "../../store/actions/notes-actions";
import { toast } from "react-toastify";

interface EditNoteProps {
  note: Note | undefined;
}
//=============================================================
const EditNote = ({ note }: EditNoteProps) => {
  const tagsList = useAppSelector((state) => state.tags.tagList);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  //* Edit Note
  const editNoteHandler = (noteItem: NoteData) => {
    const updatedNote = { ...noteItem, id: note!.id, date: note!.date };

    dispatch(notesActions.addNote(updatedNote));

    // Show Success Message
    toast.success("note updated successfully", {
      position: "top-left",
      autoClose: 3000,
      theme: "colored",
    });

    navigate("..");
  };

  return (
    <Box>
      <Title title="edit note" />
      <NoteForm
        onCreateNote={editNoteHandler}
        noteItem={note}
        availableTags={tagsList}
        btnLabel="edit"
      />
    </Box>
  );
};

export default EditNote;
