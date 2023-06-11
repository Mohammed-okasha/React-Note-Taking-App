import { Container } from "@mui/material";

type SectionProps = {
  children: React.ReactNode;
};

const Section = ({ children }: SectionProps) => {
  const style = { padding: "3rem 0" };

  return (
    <section style={style}>
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
