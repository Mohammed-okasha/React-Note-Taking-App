import { useState, useCallback } from "react";
import { useAppDispatch } from "../../store/store";
import { Link } from "react-router-dom";
import { Stack, Button } from "@mui/material";
import Title from "../UI/Title";
import FiltersHolder from "../FilterItems/FiltersHolder";
import EditTags from "../Modals/EditTags";
import { notesActions } from "../../store/actions/notes-actions";
//===============================================================
const NoteListActions = () => {
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  const titleChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(notesActions.filterByTitle(e.target.value.trim()));
    },
    [dispatch]
  );

  // Handle Edit Modal
  const openEditModalHandler = () => setEditModalIsOpen(true);
  const closeEditModalHandler = () => setEditModalIsOpen(false);

  return (
    <>
      {editModalIsOpen && <EditTags onCloseEditModal={closeEditModalHandler} />}
      <Title title="your notes" />
      <Stack direction="row" gap={2}>
        <Link to="new">
          <Button variant="contained" fullWidth={true}>
            create
          </Button>
        </Link>
        <Button variant="outlined" onClick={openEditModalHandler}>
          edit tags
        </Button>
      </Stack>

      <FiltersHolder onChangeTitle={titleChangeHandler} />
    </>
  );
};

export default NoteListActions;
