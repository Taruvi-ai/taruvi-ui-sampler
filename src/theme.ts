import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const neutralPalette = {
  50: "#F5F5F5",
  100: "#EEEEEE",
  200: "#E0E0E0",
  300: "#D5D5D5",
  400: "#BDBDBD",
  500: "#9E9E9E",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
};

const primaryPalette = {
  50: "#E6EFF2",
  100: "#C0D4DC",
  200: "#9AB8C6",
  300: "#749CAF",
  400: "#4D8099",
  500: "#2B5F6F",
  600: "#255160",
  700: "#1F4350",
  800: "#183640",
  900: "#122830",
};

const secondaryPalette = {
  50: "#E3F2FD",
  100: "#BBDEFB",
  200: "#90CAF9",
  300: "#64B5F6",
  400: "#42A5F5",
  500: "#2196F3",
  600: "#1E88E5",
  700: "#1976D2",
  800: "#1565C0",
  900: "#0D47A1",
};

const successPalette = {
  50: "#E8F5E9",
  100: "#C8E6C9",
  200: "#A5D6A7",
  300: "#81C784",
  400: "#66BB6A",
  500: "#4CAF50",
  600: "#43A047",
  700: "#388E3C",
  800: "#2E7D32",
  900: "#1B5E20",
};

const warningPalette = {
  50: "#FFF3E0",
  100: "#FFE0B2",
  200: "#FFCC80",
  300: "#FFB74D",
  400: "#FFA726",
  500: "#FB8C00",
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
  500: "#E91E63",
  600: "#C2185B",
  700: "#AD1457",
  800: "#880E4F",
  900: "#560027",
};

const shadesPalette = {
  0: "#FAFAFA",
  100: "#000000",
};

const primaryButtonPalette = {
  default: "#2196F3",
  hover: "#1976D2",
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

const quicksandFontImport = {
  "@import": "url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&family=Open+Sans:wght@400;500;600;700&display=swap')",
};

const headerTypography = {
  h1: { ...quicksandTitleStyles, fontWeight: 700, fontSize: "24px", lineHeight: 1.2 },
  h2: { ...quicksandTitleStyles, fontWeight: 600, fontSize: "18px", lineHeight: 1.2 },
  h3: { ...quicksandTitleStyles, fontWeight: 600, fontSize: "16px", lineHeight: 1.2 },
  h4: { ...quicksandTitleStyles, fontWeight: 600, fontSize: "16px", lineHeight: 1.2 },
  h5: { ...quicksandTitleStyles, fontWeight: 700, fontSize: "16px", lineHeight: 1.35 },
  h6: { ...quicksandTitleStyles, fontWeight: 700, fontSize: "14px", lineHeight: 1.4 },
  subtitle1: { ...quicksandTitleStyles, fontWeight: 700, fontSize: "16px", lineHeight: 1.4 },
  subtitle2: { ...quicksandTitleStyles, fontWeight: 700, fontSize: "14px", lineHeight: 1.4 },
};

const bodyTypography = {
  body1: {
    fontSize: "14px",
    lineHeight: 1.5,
  },
  body2: {
    fontSize: "14px",
    lineHeight: 1.5,
  },
  caption: {
    fontSize: "12px",
    lineHeight: 1.5,
  },
};

const enterpriseShape = {
  borderRadius: 8,
};

const lightSurfaces = {
  elevated: "0 2px 4px rgba(0,0,0,0.1)",
  subtle: "0 1px 3px rgba(0,0,0,0.12)",
};

const darkSurfaces = {
  elevated: "0 2px 4px rgba(0,0,0,0.4)",
  subtle: "0 1px 3px rgba(0,0,0,0.3)",
};

const hexToRgba = (hex: string, opacity: number) => {
  const sanitizedHex = hex.replace("#", "");
  const normalizedHex = sanitizedHex.length === 3
    ? sanitizedHex
        .split("")
        .map((character) => `${character}${character}`)
        .join("")
    : sanitizedHex;

  const red = Number.parseInt(normalizedHex.slice(0, 2), 16);
  const green = Number.parseInt(normalizedHex.slice(2, 4), 16);
  const blue = Number.parseInt(normalizedHex.slice(4, 6), 16);

  return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
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

const iconButtonTooltipStyles = {
  position: "relative",
  '&[aria-label]:not([aria-label=""])::after': {
    content: "attr(aria-label)",
    position: "absolute",
    left: "50%",
    bottom: "calc(100% + 8px)",
    transform: "translate(-50%, 4px)",
    opacity: 0,
    pointerEvents: "none",
    transition: "opacity 0.15s ease, transform 0.15s ease",
    whiteSpace: "nowrap",
    borderRadius: 8,
    padding: "4px 8px",
    zIndex: 1,
    fontSize: "0.75rem",
    lineHeight: 1.3,
    fontWeight: 500,
  },
  '&[aria-label]:not([aria-label=""]):hover::after, &[aria-label]:not([aria-label=""]):focus-visible::after': {
    opacity: 1,
    transform: "translate(-50%, 0)",
  },
} as const;

const LightTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1440,
    },
  },
  shape: enterpriseShape,
  palette: {
    contrastThreshold: 3.2,
    tonalOffset: 0.18,
    mode: "light",
    primary: {
      light: primaryPalette[400],
      main: primaryPalette[500],
      dark: primaryPalette[700],
      contrastText: shadesPalette[0],
    },
    secondary: {
      light: secondaryPalette[200],
      main: secondaryPalette[300],
      dark: secondaryPalette[600],
      contrastText: shadesPalette[100],
    },
    success: {
      light: successPalette[300],
      main: successPalette[600],
      dark: successPalette[700],
      contrastText: shadesPalette[0],
    },
    warning: {
      light: warningPalette[300],
      main: warningPalette[400],
      dark: warningPalette[700],
      contrastText: shadesPalette[100],
    },
    error: {
      light: errorPalette[300],
      main: errorPalette[600],
      dark: errorPalette[700],
      contrastText: shadesPalette[0],
    },
    grey: neutralPalette,
    background: {
      default: neutralPalette[50],
      paper: neutralPalette[50],
    },
    text: {
      primary: neutralPalette[900],
      secondary: neutralPalette[600],
    },
    divider: neutralPalette[200],
  },
  typography: {
    fontFamily: bodyFontFamily,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    body1: {
      fontWeight: 400,
    },
    body2: {
      fontWeight: 400,
    },
    button: {
      fontWeight: 600,
    },
    ...headerTypography,
    ...bodyTypography,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          border: "none",
          boxShadow: "none",
          backgroundImage: "none",
          backgroundColor: "transparent",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        labelSmall: {
          lineHeight: "18px",
          fontSize: "12px",
        },
        root: {
          borderRadius: 8,
          fontWeight: 600,
          padding: "4px 12px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          border: "none",
          boxShadow: lightSurfaces.elevated,
          backgroundColor: shadesPalette[0],
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          borderRadius: "50%",
          width: "32px",
          height: "32px",
          fontSize: "14px",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          strokeWidth: 1.8,
          fontSize: "20px",
          color: neutralPalette[700],
          '&:hover': {
            color: neutralPalette[900],
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        ...quicksandFontImport,
        ".layout-grid-12": {
          display: "grid",
          gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
          gap: "clamp(12px, 2vw, 24px)",
        },
        ".layout-responsive-columns": {
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "clamp(12px, 2vw, 24px)",
          "@media (min-width:900px)": {
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          },
          "@media (min-width:1200px)": {
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          },
        },
        ".layout-asymmetric": {
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "clamp(16px, 2.5vw, 32px)",
          "@media (min-width:1200px)": {
            gridTemplateColumns: "minmax(0, 5fr) minmax(0, 7fr)",
          },
        },
        ".layout-full-bleed": {
          width: "100vw",
          marginLeft: "calc(50% - 50vw)",
          marginRight: "calc(50% - 50vw)",
        },
        "main.MuiBox-root": {
          backgroundColor: neutralPalette[50],
        },
        body: {
          backgroundColor: neutralPalette[50],
          color: neutralPalette[900],
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variant: "body1",
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: primaryPalette[500],
          minHeight: "56px",
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "xl",
      },
      styleOverrides: {
        root: {
          paddingLeft: "clamp(16px, 3vw, 32px)",
          paddingRight: "clamp(16px, 3vw, 32px)",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          height: "60px",
        },
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
          ...iconButtonTooltipStyles,
          minHeight: "60px",
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
        root: {
          borderRadius: 4,
          padding: "8px 16px",
          boxShadow: "none",
        },
        contained: {
          boxShadow: lightSurfaces.subtle,
          '&:hover': {
            boxShadow: lightSurfaces.elevated,
          },
          '&:active': {
            boxShadow: lightSurfaces.subtle,
          },
        },
        startIcon: {
          marginRight: "8px",
        },
        endIcon: {
          marginLeft: "8px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          backgroundColor: hexToRgba(neutralPalette[100], 0.7),
          boxShadow: lightSurfaces.subtle,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: "transparent",
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: "transparent",
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: hexToRgba(primaryPalette[500], 0.4),
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          width: "20px",
          height: "20px",
        },
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
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
        standardError: {
          border: `1px solid ${hexToRgba(errorPalette[400], 0.35)}`,
          borderLeft: `4px solid ${errorPalette[500]}`,
          backgroundColor: hexToRgba(errorPalette[50], 0.8),
          color: neutralPalette[900],
          '& .MuiAlert-icon': {
            color: errorPalette[600],
          },
        },
      },
    },
  },
});

const DarkTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1440,
    },
  },
  shape: enterpriseShape,
  palette: {
    contrastThreshold: 3.2,
    tonalOffset: 0.18,
    mode: "dark",
    primary: {
      light: primaryPalette[400],
      main: primaryPalette[500],
      dark: primaryPalette[800],
      contrastText: shadesPalette[0],
    },
    secondary: {
      light: secondaryPalette[200],
      main: secondaryPalette[300],
      dark: secondaryPalette[600],
      contrastText: shadesPalette[100],
    },
    success: {
      light: successPalette[300],
      main: successPalette[600],
      dark: successPalette[700],
      contrastText: shadesPalette[0],
    },
    warning: {
      light: warningPalette[300],
      main: warningPalette[400],
      dark: warningPalette[700],
      contrastText: shadesPalette[100],
    },
    error: {
      light: errorPalette[300],
      main: errorPalette[600],
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
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    body1: {
      fontWeight: 400,
    },
    body2: {
      fontWeight: 400,
    },
    button: {
      fontWeight: 600,
    },
    ...headerTypography,
    ...bodyTypography,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          border: "none",
          boxShadow: "none",
          backgroundImage: "none",
          backgroundColor: "transparent",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        labelSmall: {
          lineHeight: "18px",
          fontSize: "12px",
        },
        root: {
          borderRadius: 20,
          fontWeight: 600,
          padding: "4px 12px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          border: "none",
          boxShadow: darkSurfaces.elevated,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          borderRadius: "50%",
          width: "32px",
          height: "32px",
          fontSize: "14px",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          strokeWidth: 1.8,
          fontSize: "20px",
          color: neutralPalette[400],
          '&:hover': {
            color: shadesPalette[0],
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        ...quicksandFontImport,
        ".layout-grid-12": {
          display: "grid",
          gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
          gap: "clamp(12px, 2vw, 24px)",
        },
        ".layout-responsive-columns": {
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "clamp(12px, 2vw, 24px)",
          "@media (min-width:900px)": {
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          },
          "@media (min-width:1200px)": {
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          },
        },
        ".layout-asymmetric": {
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "clamp(16px, 2.5vw, 32px)",
          "@media (min-width:1200px)": {
            gridTemplateColumns: "minmax(0, 5fr) minmax(0, 7fr)",
          },
        },
        ".layout-full-bleed": {
          width: "100vw",
          marginLeft: "calc(50% - 50vw)",
          marginRight: "calc(50% - 50vw)",
        },
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
        variant: "body1",
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: primaryPalette[500],
          minHeight: "56px",
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "xl",
      },
      styleOverrides: {
        root: {
          paddingLeft: "clamp(16px, 3vw, 32px)",
          paddingRight: "clamp(16px, 3vw, 32px)",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          height: "60px",
        },
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
          ...iconButtonTooltipStyles,
          minHeight: "60px",
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
        root: {
          borderRadius: 4,
          padding: "8px 16px",
          boxShadow: "none",
        },
        contained: {
          boxShadow: darkSurfaces.subtle,
          '&:hover': {
            boxShadow: darkSurfaces.elevated,
          },
          '&:active': {
            boxShadow: darkSurfaces.subtle,
          },
        },
        startIcon: {
          marginRight: "8px",
        },
        endIcon: {
          marginLeft: "8px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          backgroundColor: hexToRgba(neutralPalette[800], 0.72),
          boxShadow: darkSurfaces.subtle,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: "transparent",
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: "transparent",
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: hexToRgba(secondaryPalette[400], 0.55),
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          width: "20px",
          height: "20px",
        },
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
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
        standardError: {
          border: `1px solid ${hexToRgba(errorPalette[500], 0.48)}`,
          borderLeft: `4px solid ${errorPalette[300]}`,
          backgroundColor: hexToRgba(errorPalette[900], 0.34),
          color: neutralPalette[50],
          '& .MuiAlert-icon': {
            color: errorPalette[300],
          },
        },
      },
    },
  },
});

const DarkThemeWithResponsiveFontSizes = responsiveFontSizes(DarkTheme);
const LightThemeWithResponsiveFontSizes = responsiveFontSizes(LightTheme);

export { LightThemeWithResponsiveFontSizes, DarkThemeWithResponsiveFontSizes };
