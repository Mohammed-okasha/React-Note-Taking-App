import React from "react";
import { Stack, TextField } from "@mui/material";
import SelectTags from "./SelectTags";

interface FiltersHolderProps {
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
//=====================================================
const FiltersHolder = ({ onChangeTitle }: FiltersHolderProps) => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      gap={2}
      flexWrap="wrap"
      sx={{ mt: 3 }}
    >
      <TextField
        type="text"
        name="filter-title"
        placeholder="filter by title"
        onChange={onChangeTitle}
        size="small"
        sx={{ flex: "1 0 0" }}
      />
      <SelectTags />
    </Stack>
  );
};

export default React.memo(FiltersHolder);
