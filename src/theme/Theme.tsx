import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { purple } from "@mui/material/colors";

//==========================================================
const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
      light: purple[300],
      dark: purple[600],
    },
  },

  typography: {
    h1: { fontSize: "2.2rem", fontWeight: 600 },
    h2: {
      fontSize: "1.8rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.2rem",
      fontWeight: 600,
    },
    h4: {
      fontSize: "1rem",
      fontWeight: 600,
    },
    h5: {
      fontSize: "14px",
      fontWeight: 600,
    },
    fontFamily: ["Mulish", "Roboto", "sans-serif"].join(","),
  },
});
//==========================================================
const Theme = (props: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>{props.children}</CssBaseline>
    </ThemeProvider>
  );
};

export default Theme;
