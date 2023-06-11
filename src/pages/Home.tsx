import Section from "../components/UI/Section";
import NoteListActions from "../components/NoteList/NoteListActions";
import NoteList from "../components/NoteList/NoteList";

const HomePage = () => {
  return (
    <Section>
      <NoteListActions />
      <NoteList />
    </Section>
  );
};

export default HomePage;
