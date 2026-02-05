import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import gray from "@mui/material/colors/grey";

const titleFontFamily = "\"Quicksand\", sans-serif";
const bodyFontFamily = "\"Open Sans\", \"Helvetica\", \"Arial\", sans-serif";

const quicksandTitleStyles = {
  fontFamily: titleFontFamily,
  fontOpticalSizing: "auto",
  fontWeight: 700,
  fontStyle: "normal",
};

const quicksandFontImport = {
  "@import": "url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap')",
};

const headerTypography = {
  h1: { ...quicksandTitleStyles },
  h2: { ...quicksandTitleStyles },
  h3: { ...quicksandTitleStyles },
  h4: { ...quicksandTitleStyles },
  h5: { ...quicksandTitleStyles },
  h6: { ...quicksandTitleStyles },
  subtitle1: { ...quicksandTitleStyles },
  subtitle2: { ...quicksandTitleStyles },
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
        ...quicksandFontImport,
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
          ...quicksandTitleStyles,
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
        ...quicksandFontImport,
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
          ...quicksandTitleStyles,
        },
      },
    },
  },
});

const DarkThemeWithResponsiveFontSizes = responsiveFontSizes(DarkTheme);
const LightThemeWithResponsiveFontSizes = responsiveFontSizes(LightTheme);

export { LightThemeWithResponsiveFontSizes, DarkThemeWithResponsiveFontSizes };
