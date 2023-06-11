import { useAppSelector, useAppDispatch } from "../../store/store";
import { Box, Typography } from "@mui/material";
import NoteItem from "../Note/NoteItem";
//? Drag And Drop
import { DndContext, closestCenter, DragEndEvent } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { notesActions } from "../../store/actions/notes-actions";
//==================================================
const NoteList = () => {
  const store = useAppSelector((state) => state);
  const { notes, tags } = store;
  const dispatch = useAppDispatch();

  const handleDragEnd = (e: DragEndEvent): void => {
    const { active, over } = e;
    if (active.id !== over!.id) {
      const activeIndex = notes.items.findIndex(
        (note) => note.id === active.id
      );
      const overIndex = notes.items.findIndex((note) => note.id === over!.id);

      const rearrangedNotes = arrayMove(notes.items, activeIndex, overIndex);

      dispatch(notesActions.reorderNotes(rearrangedNotes));
    }
  };

  let noteListContent = (
    <Typography variant="h2" mt={4} textAlign="center">
      No notes found!
    </Typography>
  );

  const notesWithTags = notes.items.map((note) => {
    return {
      ...note,
      tags: tags.tagList.filter((tag) => note.tagIds.includes(tag.id)),
    };
  });

  const filteredNotes = notesWithTags.filter((note) => {
    return (
      (notes.filterTitle === "" ||
        note.title.toLowerCase().includes(notes.filterTitle.toLowerCase())) &&
      (tags.filteredTags.length === 0 ||
        tags.filteredTags.every((tag) =>
          note.tags.some((noteTag) => noteTag.id === tag.id)
        ))
    );
  });

  if (filteredNotes.length > 0) {
    noteListContent = (
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <Box mt={3} sx={{ "& > *:not(:last-child)": { mb: 2 } }}>
          <SortableContext
            items={notes.items}
            strategy={verticalListSortingStrategy}
          >
            {filteredNotes.map((note) => {
              return <NoteItem key={note.id} note={note} />;
            })}
          </SortableContext>
        </Box>
      </DndContext>
    );
  }

  return noteListContent;
};

export default NoteList;
