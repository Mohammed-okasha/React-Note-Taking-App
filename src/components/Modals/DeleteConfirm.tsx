import Modal from "../UI/Modal/Modal";
import { Box, ButtonGroup, Button, Typography } from "@mui/material";
import WarningIcon from "@mui/icons-material/ErrorOutline";

interface DeleteConfirmProps {
  onDelete: () => void;
  onCloseConfirm: () => void;
}

const DeleteConfirm = ({ onDelete, onCloseConfirm }: DeleteConfirmProps) => {
  return (
    <Modal onCloseModal={onCloseConfirm}>
      <Box textAlign="center">
        <WarningIcon sx={{ fontSize: 80, color: "error.main" }} />

        <Typography variant="h5">
          are you sure you want delete this note!
        </Typography>
        <ButtonGroup
          variant="contained"
          ia-label="outlined primary button group"
          sx={{ mt: 2, gap: 1, boxShadow: "none" }}
        >
          <Button onClick={onDelete}>yes</Button>
          <Button onClick={onCloseConfirm}>no</Button>
        </ButtonGroup>
      </Box>
    </Modal>
  );
};

export default DeleteConfirm;
