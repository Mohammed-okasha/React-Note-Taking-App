import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { format } from "date-fns";
import NoteTags from "./NoteTags";
import NoteActions from "./NoteActions";
import { Note } from "../../models/types";

interface NoteDetailsProps {
  note: Note | undefined;
  onOpenConfirm: () => void;
}

const NoteDetails: React.FC<NoteDetailsProps> = ({ note, onOpenConfirm }) => {
  const noteDate = format(note!.date, "p, MM,dd,yyyy");

  return (
    <Box>
      <Stack
        direction={{ xs: "column-reverse", sm: "row" }}
        justifyContent="space-between"
        gap={3}
      >
        <Box>
          <Typography variant="h2">{note!.title}</Typography>
          <Typography component="span" color="#777" fontSize="15px">
            {noteDate}
          </Typography>
          <NoteTags tags={note!.tags} />
        </Box>
        <NoteActions onOpenConfirm={onOpenConfirm} />
      </Stack>
      <Box mt={4}>
        <Typography>{note!.markdown}</Typography>
      </Box>
    </Box>
  );
};

export default React.memo(NoteDetails);
