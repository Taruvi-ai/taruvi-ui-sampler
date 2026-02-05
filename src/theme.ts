import { alpha, createTheme, responsiveFontSizes } from "@mui/material/styles";

const primaryPalette = {
  300: "#64b5f6",
  400: "#42a5f5",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
};

const secondaryPalette = {
  300: "#ba68c8",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
};

const successPalette = {
  300: "#81c784",
  500: "#4caf50",
  700: "#388e3c",
};

const warningPalette = {
  300: "#ffb74d",
  500: "#ff9800",
  700: "#f57c00",
};

const errorPalette = {
  300: "#e57373",
  500: "#f44336",
  700: "#d32f2f",
};

const neutralPalette = {
  50: "#fafafa",
  200: "#eeeeee",
  400: "#bdbdbd",
  700: "#616161",
  800: "#424242",
  900: "#212121",
};

const shadesPalette = {
  0: "#ffffff",
  100: "#000000",
};

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

const enterpriseShape = {
  borderRadius: 14,
};

const lightSurfaces = {
  elevated: "0 8px 24px rgba(15, 23, 42, 0.08)",
  subtle: "0 2px 12px rgba(15, 23, 42, 0.06)",
};

const darkSurfaces = {
  elevated: "0 10px 26px rgba(2, 6, 23, 0.45)",
  subtle: "0 2px 14px rgba(2, 6, 23, 0.4)",
};

const LightTheme = createTheme({
  shape: enterpriseShape,
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
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          border: `1px solid ${alpha(neutralPalette[300], 0.55)}`,
          boxShadow: lightSurfaces.subtle,
          backgroundImage: "none",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        labelSmall: {
          lineHeight: "18px",
        },
        root: {
          borderRadius: 999,
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          boxShadow: lightSurfaces.elevated,
          border: `1px solid ${alpha(neutralPalette[300], 0.5)}`,
          backgroundImage: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          textTransform: "none",
          fontWeight: 700,
          letterSpacing: 0.1,
          paddingInline: 16,
          minHeight: 38,
        },
        contained: {
          boxShadow: lightSurfaces.subtle,
          "&:hover": {
            boxShadow: lightSurfaces.elevated,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          backgroundColor: alpha(shadesPalette[0], 0.8),
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: alpha(neutralPalette[400], 0.6),
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: neutralPalette[500],
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: "saturate(180%) blur(10px)",
          boxShadow: lightSurfaces.subtle,
          borderBottom: `1px solid ${alpha(neutralPalette[300], 0.6)}`,
          backgroundImage: "none",
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          border: `1px solid ${alpha(neutralPalette[300], 0.55)}`,
          boxShadow: lightSurfaces.subtle,
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
          letterSpacing: 0.2,
          borderBottom: `1px solid ${neutralPalette[300]}`,
        },
        root: {
          paddingTop: 14,
          paddingBottom: 14,
        },
      },
    },
  },
});

const DarkTheme = createTheme({
  shape: enterpriseShape,
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
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          border: `1px solid ${alpha(neutralPalette[700], 0.7)}`,
          boxShadow: darkSurfaces.subtle,
          backgroundImage: "none",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        labelSmall: {
          lineHeight: "18px",
        },
        root: {
          borderRadius: 999,
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          boxShadow: darkSurfaces.elevated,
          border: `1px solid ${alpha(neutralPalette[700], 0.65)}`,
          backgroundImage: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          textTransform: "none",
          fontWeight: 700,
          letterSpacing: 0.1,
          paddingInline: 16,
          minHeight: 38,
        },
        contained: {
          boxShadow: darkSurfaces.subtle,
          "&:hover": {
            boxShadow: darkSurfaces.elevated,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          backgroundColor: alpha(neutralPalette[800], 0.92),
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: alpha(neutralPalette[600], 0.85),
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: neutralPalette[500],
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: "saturate(180%) blur(12px)",
          boxShadow: darkSurfaces.subtle,
          borderBottom: `1px solid ${alpha(neutralPalette[700], 0.7)}`,
          backgroundImage: "none",
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          border: `1px solid ${alpha(neutralPalette[700], 0.75)}`,
          boxShadow: darkSurfaces.subtle,
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
          letterSpacing: 0.2,
          borderBottom: `1px solid ${neutralPalette[700]}`,
        },
        root: {
          paddingTop: 14,
          paddingBottom: 14,
        },
      },
    },
  },
});

const DarkThemeWithResponsiveFontSizes = responsiveFontSizes(DarkTheme);
const LightThemeWithResponsiveFontSizes = responsiveFontSizes(LightTheme);

export { LightThemeWithResponsiveFontSizes, DarkThemeWithResponsiveFontSizes };
