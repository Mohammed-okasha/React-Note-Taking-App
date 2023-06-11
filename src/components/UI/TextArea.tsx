import TextareaAutosize from "@mui/base/TextareaAutosize";
import { styled } from "@mui/system";

const Textarea = styled(TextareaAutosize)(
  ({ theme }) => `
    height: 300px !important;
    font-size: 14px;
    font-weight: 500;
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #0000003b;
    transition: .3s;
    overflow: auto !important;
    resize: none;
    &::placeholder {
      font-size: 1rem;
    }
    &:focus {
      border-color: ${theme.palette.primary.main};
    }
    &:focus-visible {
      border-color: ${theme.palette.primary.main};
      outline: 0;
    }
  `
);

export default Textarea;
