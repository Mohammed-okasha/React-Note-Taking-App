import { Link } from "react-router-dom";
import { ButtonGroup, Button } from "@mui/material";

interface NoteActionsProps {
  onOpenConfirm: () => void;
}

const NoteActions: React.FC<NoteActionsProps> = ({ onOpenConfirm }) => {
  return (
    <ButtonGroup
      sx={{ alignItems: "center", gap: 1 }}
      aria-label="action buttons group"
    >
      <Link to="edit">
        <Button variant="contained">edit</Button>
      </Link>
      <Button onClick={onOpenConfirm}>delete</Button>
      <Link to="..">
        <Button>back</Button>
      </Link>
    </ButtonGroup>
  );
};

export default NoteActions;
