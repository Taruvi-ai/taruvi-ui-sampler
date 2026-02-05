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
  0: "#F8F9FA",
  100: "#000000",
};

const primaryButtonPalette = {
  default: "#1E88E5",
  hover: "#1565C0",
  active: "#0D47A1",
  disabled: "#BBDEFB",
};

const titleFontFamily = '"Quicksand", sans-serif';
const bodyFontFamily = '"Open Sans", "Helvetica", "Arial", sans-serif';

const quicksandTitleStyles = {
  fontFamily: titleFontFamily,
  fontOpticalSizing: "auto",
  fontWeight: 600,
  fontStyle: "normal",
};

const quicksandFontImport = {
  "@import":
    "url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap')",
};

const baseFontSize = 18;
const typeScaleRatio = 1.25;

const scale = (step: number) =>
  `${Number((baseFontSize * Math.pow(typeScaleRatio, step)).toFixed(3))}px`;

const headerTypography = {
  h1: {
    ...quicksandTitleStyles,
    fontWeight: 700,
    fontSize: scale(3),
    lineHeight: 1.25,
  },
  h2: {
    ...quicksandTitleStyles,
    fontWeight: 700,
    fontSize: "28px",
    lineHeight: 1.35,
  },
  h3: {
    ...quicksandTitleStyles,
    fontWeight: 600,
    fontSize: scale(1),
    lineHeight: 1.4,
  },
  h4: {
    ...quicksandTitleStyles,
    fontWeight: 600,
    fontSize: "24px",
    lineHeight: 1.45,
  },
  h5: {
    ...quicksandTitleStyles,
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: 1.5,
  },
  h6: {
    ...quicksandTitleStyles,
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: 1.5,
  },
  subtitle1: {
    ...quicksandTitleStyles,
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: 1.55,
  },
  subtitle2: {
    ...quicksandTitleStyles,
    fontWeight: 500,
    fontSize: "15px",
    lineHeight: 1.55,
  },
};

const bodyTypography = {
  body1: {
    fontSize: "15px",
    lineHeight: 1.6,
  },
  body2: {
    fontSize: "14px",
    lineHeight: 1.55,
  },
  caption: {
    fontSize: scale(-2),
    lineHeight: 1.5,
  },
};

const enterpriseShape = {
  borderRadius: 12,
};

const lightSurfaces = {
  elevated: "0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.06)",
  subtle: "0 1px 2px rgba(0, 0, 0, 0.06)",
};

const darkSurfaces = {
  elevated: "0 1px 3px rgba(2, 6, 23, 0.35), 0 1px 2px rgba(2, 6, 23, 0.26)",
  subtle: "0 1px 2px rgba(2, 6, 23, 0.25)",
};

const hexToRgba = (hex: string, opacity: number) => {
  const sanitizedHex = hex.replace("#", "");
  const normalizedHex =
    sanitizedHex.length === 3
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
    "&:hover": {
      backgroundColor: primaryButtonPalette.hover,
    },
    "&:active": {
      backgroundColor: primaryButtonPalette.active,
    },
    "&.Mui-disabled": {
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
  '&[aria-label]:not([aria-label=""]):hover::after, &[aria-label]:not([aria-label=""]):focus-visible::after':
    {
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
    mode: "light",
    primary: {
      light: primaryPalette[300],
      main: primaryPalette[400],
      dark: primaryPalette[600],
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
      paper: "#F4F5F5",
    },
    text: {
      primary: neutralPalette[900],
      secondary: neutralPalette[700],
    },
    divider: neutralPalette[200],
  },
  typography: {
    fontFamily: bodyFontFamily,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 600,
    body1: {
      fontWeight: 500,
    },
    body2: {
      fontWeight: 500,
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
          borderRadius: 14,
          border: "none",
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
          borderRadius: 8,
          fontWeight: 600,
          paddingLeft: 8,
          paddingRight: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: "none",
          boxShadow: lightSurfaces.elevated,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          borderRadius: "50%",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          strokeWidth: 1.8,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        ...quicksandFontImport,
        ".layout-grid-12": {
          display: "grid",
          gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
          gap: "clamp(24px, 2.8vw, 32px)",
        },
        ".layout-responsive-columns": {
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "clamp(24px, 2.8vw, 32px)",
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
          gap: "clamp(24px, 2.8vw, 32px)",
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
          backgroundColor: shadesPalette[0],
        },
        body: {
          backgroundColor: shadesPalette[0],
          color: neutralPalette[900],
        },
        ".MuiDrawer-paper": {
          backgroundColor: "#F4F5F5",
        },
        ".MuiCardContent-root": {
          padding: "24px",
          "&:last-child": {
            paddingBottom: "24px",
          },
        },
        ".dashboard-section": {
          marginBottom: "clamp(32px, 4vw, 48px)",
        },
        ".recharts-cartesian-grid line": {
          stroke: "#E5E7EB",
          strokeOpacity: 0.6,
        },
        ".recharts-bar-rectangle .recharts-rectangle": {
          fill: primaryPalette[400],
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variant: "body1",
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
        maxWidthXl: {
          maxWidth: "1520px",
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
          '&[aria-label]:not([aria-label=""])::after': {
            ...iconButtonTooltipStyles[
              '&[aria-label]:not([aria-label=""])::after'
            ],
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
          borderRadius: 999,
          boxShadow: "none",
          minHeight: 40,
        },
        contained: {
          boxShadow: lightSurfaces.subtle,
          "&:hover": {
            boxShadow: lightSurfaces.elevated,
          },
          "&:active": {
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
          borderRadius: 10,
          minHeight: 44,
          backgroundColor: hexToRgba(neutralPalette[100], 0.7),
          boxShadow: "none",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: hexToRgba(neutralPalette[300], 0.85),
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: hexToRgba(neutralPalette[400], 0.9),
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: hexToRgba(primaryPalette[500], 0.4),
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: primaryPalette[600],
          "&:hover": {
            color: primaryPalette[700],
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          minHeight: "40px",
          display: "flex",
          alignItems: "center",
        },
        icon: {
          right: 12,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          gap: 12,
          paddingTop: 10,
          paddingBottom: 10,
          borderLeft: "3px solid transparent",
          borderRadius: 10,
          "&.Mui-selected": {
            backgroundColor: hexToRgba(primaryPalette[100], 0.6),
            borderLeftColor: primaryPalette[400],
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 32,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: hexToRgba(neutralPalette[300], 0.45),
          },
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          minWidth: 32,
          height: 32,
          borderRadius: 8,
          margin: "0 2px",
          fontWeight: 500,
          "&.Mui-selected": {
            backgroundColor: primaryPalette[400],
            color: shadesPalette[0],
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
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 600,
    body1: {
      fontWeight: 500,
    },
    body2: {
      fontWeight: 500,
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
          borderRadius: 14,
          border: "none",
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
          borderRadius: 8,
          fontWeight: 600,
          paddingLeft: 8,
          paddingRight: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: "none",
          boxShadow: darkSurfaces.elevated,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          borderRadius: "50%",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          strokeWidth: 1.8,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        ...quicksandFontImport,
        ".layout-grid-12": {
          display: "grid",
          gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
          gap: "clamp(24px, 2.8vw, 32px)",
        },
        ".layout-responsive-columns": {
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "clamp(24px, 2.8vw, 32px)",
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
          gap: "clamp(24px, 2.8vw, 32px)",
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
        ".MuiCardContent-root": {
          padding: "24px",
          "&:last-child": {
            paddingBottom: "24px",
          },
        },
        ".dashboard-section": {
          marginBottom: "clamp(32px, 4vw, 48px)",
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variant: "body1",
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
        maxWidthXl: {
          maxWidth: "1520px",
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
          '&[aria-label]:not([aria-label=""])::after': {
            ...iconButtonTooltipStyles[
              '&[aria-label]:not([aria-label=""])::after'
            ],
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
          borderRadius: 999,
          boxShadow: "none",
          minHeight: 40,
        },
        contained: {
          boxShadow: darkSurfaces.subtle,
          "&:hover": {
            boxShadow: darkSurfaces.elevated,
          },
          "&:active": {
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
          borderRadius: 10,
          minHeight: 44,
          backgroundColor: hexToRgba(neutralPalette[800], 0.72),
          boxShadow: "none",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: hexToRgba(neutralPalette[700], 0.85),
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: hexToRgba(neutralPalette[500], 0.9),
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: hexToRgba(secondaryPalette[400], 0.55),
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          minHeight: "40px",
          display: "flex",
          alignItems: "center",
        },
        icon: {
          right: 12,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          gap: 12,
          paddingTop: 10,
          paddingBottom: 10,
          borderLeft: "3px solid transparent",
          borderRadius: 10,
          "&.Mui-selected": {
            backgroundColor: hexToRgba(primaryPalette[700], 0.38),
            borderLeftColor: primaryPalette[300],
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 32,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: hexToRgba(neutralPalette[700], 0.55),
          },
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          minWidth: 32,
          height: 32,
          borderRadius: 8,
          margin: "0 2px",
          fontWeight: 500,
          "&.Mui-selected": {
            backgroundColor: primaryPalette[400],
            color: shadesPalette[0],
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: secondaryPalette[400],
          "&:hover": {
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
