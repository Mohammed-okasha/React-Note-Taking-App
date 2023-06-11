import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Link } from "react-router-dom";
import {
  Stack,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import NoteTags from "./NoteTags";
import EyeIcon from "@mui/icons-material/VisibilityOutlined";
import { Tag } from "../../models/types";
import { format } from "date-fns";

interface NoteProps {
  note: {
    id: string;
    title: string;
    date: number;
    tags: Tag[];
  };
}
//=================================================================

const NoteItem: React.FC<NoteProps> = ({ note }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: note.id,
    });
  const noteDate = format(note.date, "p, MM, dd, yyyy");

  const cardStyle = {
    boxShadow: "0px 0px 3px 0px rgba(0, 0, 0, 0.2)",
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Card sx={cardStyle} ref={setNodeRef} {...attributes} {...listeners}>
      <Stack direction="row" justifyContent="space-between" flexWrap="wrap">
        <CardContent>
          <Typography variant="h3">{note.title}</Typography>
          <Typography component="span" sx={{ fontSize: 14, color: "#777" }}>
            {noteDate}
          </Typography>
          <NoteTags tags={note.tags} />
        </CardContent>

        <CardActions sx={{ justifyContent: "center", p: 2 }}>
          <Link to={note.id}>
            <Button variant="outlined">
              <EyeIcon />
            </Button>
          </Link>
        </CardActions>
      </Stack>
    </Card>
  );
};

export default NoteItem;
