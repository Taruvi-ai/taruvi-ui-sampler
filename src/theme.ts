import { createTheme, responsiveFontSizes } from "@mui/material/styles";

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
    primary: {
      light: primaryPalette[300],
      main: primaryPalette[600],
      dark: primaryPalette[800],
      contrastText: shadesPalette[0],
    },
    secondary: {
      light: secondaryPalette[300],
      main: secondaryPalette[600],
      dark: secondaryPalette[800],
      contrastText: shadesPalette[100],
    },
    success: {
      light: successPalette[300],
      main: successPalette[500],
      dark: successPalette[700],
      contrastText: shadesPalette[0],
    },
    warning: {
      light: warningPalette[300],
      main: warningPalette[500],
      dark: warningPalette[700],
      contrastText: shadesPalette[100],
    },
    error: {
      light: errorPalette[300],
      main: errorPalette[500],
      dark: errorPalette[700],
      contrastText: shadesPalette[0],
    },
    background: {
      default: shadesPalette[0],
      paper: neutralPalette[50],
    },
    text: {
      primary: neutralPalette[900],
      secondary: neutralPalette[700],
    },
    divider: neutralPalette[200],
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
          backgroundColor: shadesPalette[0],
        },
        body: {
          backgroundColor: shadesPalette[0],
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
    primary: {
      light: primaryPalette[300],
      main: primaryPalette[400],
      dark: primaryPalette[700],
      contrastText: shadesPalette[0],
    },
    secondary: {
      light: secondaryPalette[300],
      main: secondaryPalette[500],
      dark: secondaryPalette[700],
      contrastText: shadesPalette[100],
    },
    success: {
      light: successPalette[300],
      main: successPalette[500],
      dark: successPalette[700],
      contrastText: shadesPalette[0],
    },
    warning: {
      light: warningPalette[300],
      main: warningPalette[500],
      dark: warningPalette[700],
      contrastText: shadesPalette[100],
    },
    error: {
      light: errorPalette[300],
      main: errorPalette[500],
      dark: errorPalette[700],
      contrastText: shadesPalette[0],
    },
    background: {
      default: neutralPalette[900],
      paper: neutralPalette[800],
    },
    text: {
      primary: neutralPalette[50],
      secondary: neutralPalette[400],
    },
    divider: neutralPalette[700],
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
          backgroundColor: neutralPalette[900],
        },
        body: {
          backgroundColor: neutralPalette[900],
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
