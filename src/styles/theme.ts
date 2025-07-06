import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#48d7e5", // change to your brand color
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#f4f6f8",
    },
  },
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    h4: {
      fontWeight: 700,
    },
    subtitle2: {
      fontWeight: 700,
      fontSize: 18,
    },
    h5: {
      fontWeight: 500,
      fontSize: 26,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
        },
      },
    },
  },
});

export default theme;
