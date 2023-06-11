import { useAppSelector } from "../../store/store";
import Modal from "../UI/Modal/Modal";
import { Stack, Typography, IconButton, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import TagsList from "../Tags/TagsList";

type EditTagsProps = {
  onCloseEditModal: () => void;
};

const EditTags = ({ onCloseEditModal }: EditTagsProps) => {
  const tags = useAppSelector((state) => state.tags);

  return (
    <Modal onCloseModal={onCloseEditModal}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h3">edit tags</Typography>
        <IconButton aria-label="close-modal" onClick={onCloseEditModal}>
          <CloseIcon />
        </IconButton>
      </Stack>
      <TagsList tags={tags.tagList} />
      <Button variant="contained" onClick={onCloseEditModal}>
        close
      </Button>
    </Modal>
  );
};

export default EditTags;
