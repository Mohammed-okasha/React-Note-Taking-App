import { Box } from "@mui/material";
import TagItem from "./TagItem";
import { Tag } from "../../models/types";

interface TagsListProps {
  tags: Tag[];
}

const TagsList: React.FC<TagsListProps> = ({ tags }) => {
  return (
    <Box
      sx={{
        my: 2,
        "& > *:not(:last-of-type)": {
          mb: 2,
        },
      }}
    >
      {tags.map((tag) => (
        <TagItem key={tag.id} tagItem={tag} />
      ))}
    </Box>
  );
};

export default TagsList;
