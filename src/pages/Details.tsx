import { useState, useMemo, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../store/store";
import Section from "../components/UI/Section";
import NoteDetails from "../components/Note/NoteDetails";
import DeleteConfirm from "../components/Modals/DeleteConfirm";
import { notesActions } from "../store/actions/notes-actions";
import { toast } from "react-toastify";
//===============================================================
const NoteDetailsPage = () => {
  const [confirmIsOpen, setConfirmIsOpen] = useState(false);
  const { noteId } = useParams();
  const { notes, tags } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const notesWithTags = notes.items.map((note) => {
    return {
      ...note,
      tags: tags.tagList.filter((tag) => note.tagIds.includes(tag.id)),
    };
  });

  const noteItem = useMemo(() => {
    return notesWithTags.find((note) => note.id === noteId);
  }, [noteId, notesWithTags]);

  //* Delete Note Handler
  const openConfirmHandler = useCallback(() => setConfirmIsOpen(true), []);
  const closeConfirmHandler = () => setConfirmIsOpen(false);

  const deleteNoteHandler = () => {
    dispatch(notesActions.removeNote(noteId!));

    // Show Success Message
    toast.success("note deleted successfully", {
      position: "top-left",
      autoClose: 3000,
      theme: "colored",
    });

    navigate("..");
  };

  return (
    <>
      {confirmIsOpen && (
        <DeleteConfirm
          onDelete={deleteNoteHandler}
          onCloseConfirm={closeConfirmHandler}
        />
      )}
      <Section>
        <NoteDetails note={noteItem} onOpenConfirm={openConfirmHandler} />
      </Section>
    </>
  );
};

export default NoteDetailsPage;
