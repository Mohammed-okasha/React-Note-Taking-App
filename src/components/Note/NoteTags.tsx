import { Stack, Typography } from "@mui/material";
import { Tag } from "../../models/types";

interface NoteTagsProps {
  tags: Tag[] | undefined;
}

const NoteTags = ({ tags }: NoteTagsProps) => {
  const tagStyle = {
    bgcolor: "primary.main",
    color: "#fff",
    p: ".25rem .5rem",
    borderRadius: ".25rem",
    fontSize: "14px",
  };

  return (
    <Stack direction="row" flexWrap="wrap" gap={1} mt={1}>
      {tags?.map((tag) => (
        <Typography key={tag.id} component="span" sx={tagStyle}>
          #{tag.label}
        </Typography>
      ))}
    </Stack>
  );
};

export default NoteTags;
