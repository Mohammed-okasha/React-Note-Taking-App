import { Typography } from "@mui/material";

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <Typography variant="h1" sx={{ mb: 3, textAlign: "center" }}>
      {title}
    </Typography>
  );
};

export default Title;
