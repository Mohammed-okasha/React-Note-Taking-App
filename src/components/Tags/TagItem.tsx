// import {  } from "react";
import { useAppDispatch } from "../../store/store";
import { Stack, TextField, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Tag } from "../../models/types";
import { tagsActions } from "../../store/actions/tags-actions";
import { toast } from "react-toastify";

interface TagItemProps {
  tagItem: Tag;
}
//=========================================================
const TagItem: React.FC<TagItemProps> = ({ tagItem }) => {
  const dispatch = useAppDispatch();

  const updateTagHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const updatedTag = { label: value, id: tagItem.id };

    dispatch(tagsActions.editTag(updatedTag));
  };

  const deleteTagHandler = () => {
    dispatch(tagsActions.deleteTag(tagItem.id));

    toast.success("tag deleted successfully", {
      position: "top-left",
      autoClose: 3000,
      theme: "colored",
    });
  };

  return (
    <Stack direction="row" gap={1}>
      <TextField
        type="text"
        name="tag-label"
        placeholder="enter tag name"
        defaultValue={tagItem.label}
        onChange={updateTagHandler}
        size="small"
        fullWidth
      />
      <IconButton sx={{ color: "error.main" }} onClick={deleteTagHandler}>
        <DeleteIcon />
      </IconButton>
    </Stack>
  );
};

export default TagItem;
