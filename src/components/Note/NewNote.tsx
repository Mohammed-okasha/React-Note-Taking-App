import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/store";
import Box from "@mui/material/Box";
import NoteForm from "./NoteForm";
import Title from "../UI/Title";
import { NoteData } from "../../models/types";
import { notesActions } from "../../store/actions/notes-actions";
import { toast } from "react-toastify";

const NewNote = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const createNoteHandler = (note: NoteData) => {
    const createdNote = { ...note };

    // Dispatch Actions
    dispatch(notesActions.addNote(createdNote));

    // Show Success Message
    toast.success("note added successfully", {
      position: "top-left",
      autoClose: 3000,
      theme: "colored",
    });

    // Navigate to Home
    navigate("..");
  };

  return (
    <Box>
      <Title title="add note" />
      <NoteForm
        onCreateNote={createNoteHandler}
        noteItem={undefined}
        availableTags={null}
        btnLabel="add"
      />
    </Box>
  );
};

export default NewNote;
