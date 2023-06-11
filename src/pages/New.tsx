import Section from "../components/UI/Section";
import Container from "@mui/material/Container";
import NewNote from "../components/Note/NewNote";

const NewPage = () => {
  return (
    <Section>
      <Container>
        <NewNote />
      </Container>
    </Section>
  );
};

export default NewPage;
