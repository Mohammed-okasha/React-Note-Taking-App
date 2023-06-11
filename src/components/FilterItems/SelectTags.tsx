import { Box } from "@mui/material";
import ReactSelect from "react-select";
import { Tag } from "../../models/types";
import { tagsActions } from "../../store/actions/tags-actions";
import { useAppSelector, useAppDispatch } from "../../store/store";
//==============================================================
const SelectTags = () => {
  const { tagList, filteredTags } = useAppSelector((state) => state.tags);
  const dispatch = useAppDispatch();

  return (
    <Box flex={"1 0 0"}>
      <ReactSelect
        name="tags"
        placeholder="filter by tag"
        noOptionsMessage={() => "no tags found"}
        isMulti
        isSearchable
        options={tagList.map((tag) => ({
          label: tag.label,
          value: tag.id,
        }))}
        onChange={(tags) => {
          const selectedTags = tags.map((tag) => ({
            label: tag.label,
            id: tag.value,
          }));

          dispatch(tagsActions.filterByTags(selectedTags));
        }}
        value={filteredTags.map((tag: Tag) => ({
          label: tag.label,
          value: tag.id,
        }))}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: "#9c27b0",
          },
        })}
      />
    </Box>
  );
};

export default SelectTags;
