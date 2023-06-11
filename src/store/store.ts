import { createStore, combineReducers } from "redux";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import notesReducer from "./reducers/notes-reducer";
import tagsReducer from "./reducers/tags-reducer";

const rootReducer = combineReducers({
  notes: notesReducer,
  tags: tagsReducer,
});

const store = createStore(rootReducer);

// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { store, useAppDispatch, useAppSelector };
