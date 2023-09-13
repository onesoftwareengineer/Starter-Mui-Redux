import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#818bf5",
      main: "#2733f8",
      dark: "#1a22a5",
      contrastText: "#fff",
    },
    secondary: {
      light: "#70d9e7",
      main: "#4dd0e1",
      dark: "#35919d",
      contrastText: "#000",
    },
  },
});

export { theme };