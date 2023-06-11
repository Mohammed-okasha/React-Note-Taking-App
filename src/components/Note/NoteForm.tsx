import { useState } from "react";
import { useAppDispatch } from "../../store/store";
import { Link } from "react-router-dom";
import { Stack, TextField, FormControl, Button } from "@mui/material";
import Textarea from "../UI/TextArea";
import CreatableSelect from "react-select/creatable";
import { Theme } from "react-select";
import { Note, NoteData, Tag } from "../../models/types";
import { tagsActions } from "../../store/actions/tags-actions";
import { toast } from "react-toastify";
//=============================================================
const formStyle = { "& > *": { flex: "1 0 0" }, gap: 2, mb: 3 };

// Customize React Select Style
const selectTheme = (theme: Theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary: "#9c27b0",
  },
});

type NoteFormProps = {
  onCreateNote: (note: NoteData) => void;
  noteItem: Note | undefined;
  availableTags: Tag[] | null;
  btnLabel: string;
};
//  & Partial<NoteData>
//=============================================================
const NoteForm = (props: NoteFormProps): JSX.Element => {
  const { onCreateNote, noteItem, availableTags, btnLabel } = props;
  const [note, setNote] = useState({
    title: noteItem ? noteItem!.title : "",
    markdown: noteItem ? noteItem!.markdown : "",
    tags: noteItem ? noteItem!.tags : [],
  });

  const dispatch = useAppDispatch();

  // Validation From
  const noteTitleIsValid = note.title.trim().length > 0;
  const markdownIsValid = note.markdown.trim().length > 0;
  const noteHasTags = note.tags.length > 0;

  const fromIsValid = noteTitleIsValid && markdownIsValid && noteHasTags;

  //* Functions ======================================
  const changeTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  };

  const changeMarkdownHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value, name } = e.target;
    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  };

  const createTagHandler = (label: string): void => {
    const newTag = { label, id: label };

    // dispatch addTag Action
    dispatch(tagsActions.addTag(newTag));

    setNote((prevNote) => {
      return {
        ...prevNote,
        tags: [...prevNote.tags, newTag],
      };
    });
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fromIsValid) {
      toast.error("all fields are required!", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });
      return;
    }

    onCreateNote({
      id: `n-${Math.random()}`,
      title: note.title,
      markdown: note.markdown,
      tagIds: note.tags.map((tag) => tag.id),
      date: new Date().getTime(),
    });

    // Reset Form
    setNote({ title: "", markdown: "", tags: [] });
  };

  const tagOptions = availableTags
    ? availableTags.map((tag) => ({ label: tag.label, value: tag.id }))
    : [];

  return (
    <form onSubmit={submitHandler}>
      <Stack direction={{ xs: "column", md: "row" }} sx={formStyle}>
        <TextField
          type="text"
          name="title"
          placeholder="note title"
          size="small"
          value={note.title}
          onChange={changeTitleHandler}
        />
        <CreatableSelect
          isClearable
          isMulti
          placeholder="select tags"
          theme={selectTheme}
          onCreateOption={createTagHandler}
          onChange={(tags) => {
            const createdTags = tags.map((tag) => ({
              label: tag.label,
              id: tag.value,
            }));

            setNote((prevNote) => ({ ...prevNote, tags: createdTags }));
          }}
          value={note.tags.map((tag) => ({
            label: tag.label,
            value: tag.id,
          }))}
          options={tagOptions}
        />
      </Stack>
      <FormControl fullWidth>
        <Textarea
          name="markdown"
          placeholder="body"
          value={note.markdown}
          onChange={changeMarkdownHandler}
        />
      </FormControl>
      <Stack direction="row" gap={2} mt={3}>
        <Button type="submit" variant="contained">
          {btnLabel}
        </Button>
        <Link to="..">
          <Button variant="outlined">cancel</Button>
        </Link>
      </Stack>
    </form>
  );
};

export default NoteForm;
