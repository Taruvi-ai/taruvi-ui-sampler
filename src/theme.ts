import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import gray from "@mui/material/colors/grey";

const titleFontFamily = "\"Quicksand\", \"Open Sans\", \"Helvetica\", \"Arial\", sans-serif";
const bodyFontFamily = "\"Open Sans\", \"Helvetica\", \"Arial\", sans-serif";

const headerTypography = {
  h1: { fontFamily: titleFontFamily },
  h2: { fontFamily: titleFontFamily },
  h3: { fontFamily: titleFontFamily },
  h4: { fontFamily: titleFontFamily },
  h5: { fontFamily: titleFontFamily },
  h6: { fontFamily: titleFontFamily },
  subtitle1: { fontFamily: titleFontFamily },
  subtitle2: { fontFamily: titleFontFamily },
};

const LightTheme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: bodyFontFamily,
    ...headerTypography,
  },
  components: {
    MuiChip: {
      styleOverrides: {
        labelSmall: {
          lineHeight: "18px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "main.MuiBox-root": {
          backgroundColor: gray[100],
        },
        body: {
          backgroundColor: gray[100],
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variant: "body2",
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontFamily: titleFontFamily,
        },
      },
    },
  },
});

const DarkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: bodyFontFamily,
    ...headerTypography,
  },
  components: {
    MuiChip: {
      styleOverrides: {
        labelSmall: {
          lineHeight: "18px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "main.MuiBox-root": {
          backgroundColor: "#121212",
        },
        body: {
          backgroundColor: "#121212",
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variant: "body2",
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontFamily: titleFontFamily,
        },
      },
    },
  },
});

const DarkThemeWithResponsiveFontSizes = responsiveFontSizes(DarkTheme);
const LightThemeWithResponsiveFontSizes = responsiveFontSizes(LightTheme);

export { LightThemeWithResponsiveFontSizes, DarkThemeWithResponsiveFontSizes };
