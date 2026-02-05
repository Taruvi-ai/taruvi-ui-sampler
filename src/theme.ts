import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const neutralPalette = {
  50: "#F4F5F5",
  100: "#EEEAEC",
  200: "#D0D0D0",
  300: "#C9CECF",
  400: "#B8BFC1",
  500: "#929C9F",
  600: "#7E8A8D",
  700: "#58636E",
  800: "#36383D",
  900: "#121414",
};

const primaryPalette = {
  50: "#E6F0F5",
  100: "#BFD4E8",
  200: "#99C4D8",
  300: "#73ADCE",
  400: "#4097C1",
  500: "#268084",
  600: "#00699A",
  700: "#004369",
  800: "#003652",
  900: "#002A3C",
};

const secondaryPalette = {
  50: "#F2F8FF",
  100: "#E0F6FE",
  200: "#C8EFF0",
  300: "#9DE5FD",
  400: "#8ED8F8",
  500: "#3EC7F5",
  600: "#1AB3E6",
  700: "#0A93C4",
  800: "#056A8F",
  900: "#03435B",
};

const successPalette = {
  50: "#E6F4EF",
  100: "#C1E6D8",
  200: "#9AD7C0",
  300: "#B1C784",
  400: "#4CAF50",
  500: "#10B981",
  600: "#0A7D5A",
  700: "#047857",
  800: "#065F46",
  900: "#064E3B",
};

const warningPalette = {
  50: "#FFF8E1",
  100: "#FFECE3",
  200: "#FEDE8A",
  300: "#FFD54F",
  400: "#FFCA28",
  500: "#F59E08",
  600: "#F57C00",
  700: "#EF6C00",
  800: "#E65100",
  900: "#BF360C",
};

const errorPalette = {
  50: "#FCE4EC",
  100: "#F8BBD0",
  200: "#F48FB1",
  300: "#F06292",
  400: "#EC407A",
  500: "#D81B60",
  600: "#C21858",
  700: "#AD1457",
  800: "#880E4F",
  900: "#560027",
};

const shadesPalette = {
  0: "#FAFAFA",
  100: "#000000",
};

const primaryButtonPalette = {
  default: "#1E88E5",
  hover: "#1565C0",
  active: "#0D47A1",
  disabled: "#BBDEFB",
};

const titleFontFamily = "\"Quicksand\", sans-serif";
const bodyFontFamily = "\"Open Sans\", \"Helvetica\", \"Arial\", sans-serif";

const quicksandTitleStyles = {
  fontFamily: titleFontFamily,
  fontOpticalSizing: "auto",
  fontWeight: 700,
  fontStyle: "normal",
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

const iconButtonTooltipStyles = {
  position: "relative",
  '&[aria-label]:not([aria-label=""])::after': {
    content: "attr(aria-label)",
    position: "absolute",
    left: "50%",
    bottom: "calc(100% + 8px)",
    transform: "translateX(-50%) translateY(6px)",
    opacity: 0,
    visibility: "hidden",
    pointerEvents: "none",
    zIndex: 1,
    padding: "4px 8px",
    borderRadius: 6,
    fontSize: "0.75rem",
    fontWeight: 600,
    lineHeight: 1.3,
    whiteSpace: "nowrap",
    transition: "opacity 120ms ease, transform 120ms ease, visibility 120ms ease",
  },
  '&[aria-label]:not([aria-label=""]):hover::after, &[aria-label]:not([aria-label=""]):focus-visible::after': {
    opacity: 1,
    visibility: "visible",
    transform: "translateX(-50%) translateY(0)",
  },
};

const tableCellAlignmentStyles = {
  root: {
    verticalAlign: "middle",
    paddingTop: 14,
    paddingBottom: 14,
    lineHeight: 1.5,
  },
  head: {
    ...quicksandTitleStyles,
    whiteSpace: "nowrap",
    letterSpacing: "0.02em",
  },
  body: {
    whiteSpace: "nowrap",
  },
};

const tableRowAlignmentStyles = {
  root: {
    '& > .MuiTableCell-root': {
      borderBottomColor: "rgba(128, 128, 128, 0.22)",
    },
  },
};

const primaryButtonOverrides = {
  containedPrimary: {
    backgroundColor: primaryButtonPalette.default,
    color: shadesPalette[0],
    '&:hover': {
      backgroundColor: primaryButtonPalette.hover,
    },
    '&:active': {
      backgroundColor: primaryButtonPalette.active,
    },
    '&.Mui-disabled': {
      backgroundColor: primaryButtonPalette.disabled,
      color: neutralPalette[500],
    },
  },
};

const LightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: primaryPalette[300],
      main: primaryPalette[500],
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
    grey: neutralPalette,
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
          borderColor: neutralPalette[200],
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "main.MuiBox-root": {
          backgroundColor: shadesPalette[0],
        },
        body: {
          backgroundColor: shadesPalette[0],
          color: neutralPalette[900],
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
        ...tableCellAlignmentStyles,
      },
    },
    MuiTableRow: {
      styleOverrides: {
        ...tableRowAlignmentStyles,
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          ...iconButtonTooltipStyles,
          '&[aria-label]:not([aria-label=""])::after': {
            ...iconButtonTooltipStyles['&[aria-label]:not([aria-label=""])::after'],
            color: shadesPalette[0],
            backgroundColor: "rgba(20, 20, 20, 0.9)",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.25)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        ...primaryButtonOverrides,
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: primaryPalette[600],
          '&:hover': {
            color: primaryPalette[700],
          },
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
    grey: neutralPalette,
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
          borderColor: neutralPalette[700],
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "main.MuiBox-root": {
          backgroundColor: neutralPalette[900],
        },
        body: {
          backgroundColor: neutralPalette[900],
          color: neutralPalette[50],
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
        ...tableCellAlignmentStyles,
      },
    },
    MuiTableRow: {
      styleOverrides: {
        ...tableRowAlignmentStyles,
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          ...iconButtonTooltipStyles,
          '&[aria-label]:not([aria-label=""])::after': {
            ...iconButtonTooltipStyles['&[aria-label]:not([aria-label=""])::after'],
            color: neutralPalette[900],
            backgroundColor: "rgba(255, 255, 255, 0.92)",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.35)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        ...primaryButtonOverrides,
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: secondaryPalette[400],
          '&:hover': {
            color: secondaryPalette[300],
          },
        },
      },
    },
  },
});

const DarkThemeWithResponsiveFontSizes = responsiveFontSizes(DarkTheme);
const LightThemeWithResponsiveFontSizes = responsiveFontSizes(LightTheme);

export { LightThemeWithResponsiveFontSizes, DarkThemeWithResponsiveFontSizes };
