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
          ...quicksandTitleStyles,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          ...iconButtonTooltipStyles,
          '&[aria-label]:not([aria-label=""])::after': {
            ...iconButtonTooltipStyles['&[aria-label]:not([aria-label=""])::after'],
            color: "#fff",
            backgroundColor: "rgba(20, 20, 20, 0.9)",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.25)",
          },
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
          ...quicksandTitleStyles,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          ...iconButtonTooltipStyles,
          '&[aria-label]:not([aria-label=""])::after': {
            ...iconButtonTooltipStyles['&[aria-label]:not([aria-label=""])::after'],
            color: "#121212",
            backgroundColor: "rgba(255, 255, 255, 0.92)",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.35)",
          },
        },
      },
    },
  },
});

const DarkThemeWithResponsiveFontSizes = responsiveFontSizes(DarkTheme);
const LightThemeWithResponsiveFontSizes = responsiveFontSizes(LightTheme);

export { LightThemeWithResponsiveFontSizes, DarkThemeWithResponsiveFontSizes };
