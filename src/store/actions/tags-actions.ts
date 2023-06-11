import { Tag } from "../../models/types";

const tagsActionsTypes = {
  addTag: "ADD_TAG",
  editTag: "EDIT_TAG",
  deleteTag: "DELETE_TAG",
  filterByTags: "FILTER_BY_TAGS",
};

const tagsActions = {
  addTag: (tag: Tag) => {
    return { type: tagsActionsTypes["addTag"], payload: tag };
  },

  editTag: (tag: Tag) => {
    return { type: tagsActionsTypes.editTag, payload: tag };
  },

  deleteTag: (tagId: string) => {
    return { type: tagsActionsTypes.deleteTag, payload: tagId };
  },

  filterByTags: (tags: Tag[]) => {
    return { type: tagsActionsTypes.filterByTags, payload: tags };
  },
};

export { tagsActionsTypes, tagsActions };
