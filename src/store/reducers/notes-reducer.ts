import { NotesState, Action, NoteData } from "../../models/types";
import { savaData, getDataFromStorage } from "../localStorage";
import { notesActionsTypes } from "../actions/notes-actions";
const { addNote, removeNote, filterByTitle, reorderNotes } = notesActionsTypes;

export const defaultNotesState: NotesState = {
  items: getDataFromStorage("notes"),
  filterTitle: "",
};

const notesReducer = (
  state: NotesState = defaultNotesState,
  action: Action
): NotesState => {
  if (action.type === addNote) {
    const noteIndex = state.items.findIndex(
      (note) => note.id === action.payload.id
    );

    const exitingNote = state.items[noteIndex];

    // Updated Notes
    let updatedNotes: NoteData[];

    if (exitingNote) {
      const updatedNote = {
        id: exitingNote.id,
        date: exitingNote.date,
        title: action.payload.title,
        markdown: action.payload.markdown,
        tagIds: action.payload.tagIds,
      };

      updatedNotes = [...state.items];

      updatedNotes[noteIndex] = updatedNote;
    } else {
      updatedNotes = state.items.concat(action.payload);
    }

    // Save Notes
    savaData("notes", updatedNotes);

    return {
      items: updatedNotes,
      filterTitle: state.filterTitle,
    };
  }

  if (action.type === removeNote) {
    const updatedNotes = state.items.filter(
      (note) => note.id !== action.payload
    );

    savaData("notes", updatedNotes);

    return {
      items: updatedNotes,
      filterTitle: state.filterTitle,
    };
  }

  if (action.type === filterByTitle) {
    return {
      items: state.items,
      filterTitle: action.payload,
    };
  }

  if (action.type === reorderNotes) {
    const rearrangedNotes = [...action.payload];

    savaData("notes", rearrangedNotes);

    return {
      items: rearrangedNotes,
      filterTitle: state.filterTitle,
    };
  }

  return state;
};

export default notesReducer;
