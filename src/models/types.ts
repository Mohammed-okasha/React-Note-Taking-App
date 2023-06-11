//? Notes ======================================
interface NoteData {
  id: string;
  title: string;
  markdown: string;
  tagIds: string[];
  date: number;
}

interface Note {
  id: string;
  title: string;
  markdown: string;
  tags: Tag[];
  date: number;
}

type NotesState = {
  items: NoteData[];
  filterTitle: string;
};

// ? Tags ======================================
interface Tag {
  id: string;
  label: string;
}

interface TagsStats {
  tagList: Tag[];
  filteredTags: Tag[];
}

//* Notes And Tags Action ====================
type Action = {
  type: string;
  payload: any;
};

export { NotesState, Note, NoteData, Tag, TagsStats, Action };
