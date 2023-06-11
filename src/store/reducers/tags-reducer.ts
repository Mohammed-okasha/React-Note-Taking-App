import { TagsStats, Action } from "../../models/types";
import { savaData, getDataFromStorage } from "../localStorage";
import { tagsActionsTypes } from "../actions/tags-actions";
const { addTag, editTag, deleteTag, filterByTags } = tagsActionsTypes;

const defaultTagsState: TagsStats = {
  tagList: getDataFromStorage("notesTags"),
  filteredTags: [],
};

const tagsReducer = (state: TagsStats = defaultTagsState, action: Action) => {
  if (action.type === addTag) {
    const tagIndex = state.tagList.findIndex(
      (tag) => tag.id === action.payload.id
    );

    if (tagIndex >= 0) {
      return {
        tagList: state.tagList,
        filteredTags: state.filteredTags,
      };
    }

    const updatedTags = [...state.tagList, action.payload];

    savaData("notesTags", updatedTags);

    return {
      tagList: updatedTags,
      filteredTags: state.filteredTags,
    };
  }

  if (action.type === editTag) {
    const { label, id } = action.payload;
    const updatedTags = state.tagList.map((tag) => {
      if (tag.id === id) {
        return { ...tag, label: label };
      }

      return tag;
    });

    savaData("notesTags", updatedTags);

    return {
      tagList: updatedTags,
      filteredTags: state.filteredTags,
    };
  }

  if (action.type === deleteTag) {
    const updatedTags = state.tagList.filter(
      (tag) => tag.id !== action.payload
    );

    savaData("notesTags", updatedTags);

    return {
      tagList: updatedTags,
      filteredTags: state.filteredTags,
    };
  }

  if (action.type === filterByTags) {
    const selectedTags = [...action.payload];

    return {
      tagList: state.tagList,
      filteredTags: selectedTags,
    };
  }

  return state;
};

export default tagsReducer;
