import { NoteData } from "../../models/types";

const notesActionsTypes = {
  addNote: "ADD_NOTE",
  removeNote: "REMOVE_NOTE",
  filterByTitle: "FILTER_BY_TITLE",
  reorderNotes: "REORDER_NOTES",
};

const notesActions = {
  addNote: (note: NoteData) => {
    return { type: notesActionsTypes.addNote, payload: note };
  },

  removeNote: (id: string) => {
    return { type: notesActionsTypes.removeNote, payload: id };
  },

  filterByTitle: (title: string) => {
    return { type: notesActionsTypes.filterByTitle, payload: title };
  },

  reorderNotes: (notes: NoteData[]) => {
    return { type: notesActionsTypes.reorderNotes, payload: notes };
  },
};

export { notesActionsTypes, notesActions };
