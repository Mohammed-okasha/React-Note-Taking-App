import { useParams } from "react-router-dom";
import { useAppSelector } from "../store/store";
import Section from "../components/UI/Section";
import EditNote from "../components/Note/EditNote";

const EditPage = () => {
  const { noteId } = useParams();
  const { notes, tags } = useAppSelector((state) => state);
  const notesWithTags = notes.items.map((note) => {
    return {
      ...note,
      tags: tags.tagList.filter((tag) => note.tagIds.includes(tag.id)),
    };
  });
  const noteItem = notesWithTags.find((note) => note.id === noteId);

  return (
    <Section>
      <EditNote note={noteItem} />
    </Section>
  );
};

export default EditPage;
