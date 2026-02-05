import { alpha, createTheme, responsiveFontSizes } from "@mui/material/styles";

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

const titleFontFamily = "\"Quicksand\", sans-serif";
const bodyFontFamily = "\"Open Sans\", \"Helvetica\", \"Arial\", sans-serif";

const quicksandTitleStyles = {
  fontFamily: titleFontFamily,
  fontOpticalSizing: "auto",
  fontWeight: 600,
  fontStyle: "normal",
};

const quicksandFontImport = {
  "@import": "url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap')",
};

const baseFontSize = 16;
const typeScaleRatio = 1.25;

const scale = (step: number) =>
  `${Number((baseFontSize * Math.pow(typeScaleRatio, step)).toFixed(3))}px`;

const headerTypography = {
  h1: { ...quicksandTitleStyles, fontWeight: 300, fontSize: scale(3), lineHeight: 1.15 },
  h2: { ...quicksandTitleStyles, fontWeight: 300, fontSize: scale(2), lineHeight: 1.2 },
  h3: { ...quicksandTitleStyles, fontWeight: 400, fontSize: scale(1), lineHeight: 1.25 },
  h4: { ...quicksandTitleStyles, fontWeight: 400, fontSize: scale(0), lineHeight: 1.3 },
  h5: { ...quicksandTitleStyles, fontWeight: 500, fontSize: scale(-1), lineHeight: 1.4 },
  h6: { ...quicksandTitleStyles, fontWeight: 600, fontSize: scale(-2), lineHeight: 1.4 },
  subtitle1: { ...quicksandTitleStyles, fontWeight: 500 },
  subtitle2: { ...quicksandTitleStyles, fontWeight: 600 },
};

const bodyTypography = {
  body1: {
    fontSize: scale(-2),
    lineHeight: 1.6,
  },
  body2: {
    fontSize: scale(-3),
    lineHeight: 1.55,
  },
  caption: {
    fontSize: scale(-4),
    lineHeight: 1.45,
  },
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

const sharedButtonSizing = {
  borderRadius: 8,
  textTransform: "none" as const,
  fontWeight: 600,
  letterSpacing: 0.1,
  minHeight: 44,
  padding: "12px 24px",
};

const sharedInputSizing = {
  borderRadius: 10,
  minHeight: 52,
};

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
    fontWeightLight: 300,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
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
          borderRadius: 12,
          boxShadow: lightSurfaces.elevated,
          backgroundImage: "none",
          transition: "transform 180ms ease, box-shadow 180ms ease",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 12px 28px rgba(15, 23, 42, 0.13)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          ...sharedButtonSizing,
        },
        contained: {
          boxShadow: "0 2px 10px rgba(15, 23, 42, 0.12)",
          "&:hover": {
            boxShadow: "0 6px 16px rgba(15, 23, 42, 0.16)",
          },
          "&:active": {
            boxShadow: "0 2px 8px rgba(15, 23, 42, 0.1)",
          },
        },
        outlined: {
          borderWidth: 1,
          borderColor: alpha(primaryPalette[600], 0.45),
          backgroundColor: "transparent",
          "&:hover": {
            borderColor: primaryPalette[600],
            backgroundColor: alpha(primaryPalette[100], 0.25),
          },
          "&:active": {
            backgroundColor: alpha(primaryPalette[100], 0.4),
          },
        },
        text: {
          color: primaryPalette[700],
          "&:hover": {
            backgroundColor: alpha(primaryPalette[100], 0.28),
          },
          "&:active": {
            backgroundColor: alpha(primaryPalette[100], 0.38),
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          ...sharedInputSizing,
          backgroundColor: alpha(shadesPalette[0], 0.8),
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: alpha(neutralPalette[400], 0.6),
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: neutralPalette[500],
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: primaryPalette[600],
            borderWidth: 2,
          },
          "& .MuiOutlinedInput-input": {
            paddingTop: 14,
            paddingBottom: 14,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          position: "static",
          transform: "none",
          marginBottom: 8,
          fontWeight: 600,
          color: neutralPalette[700],
          "&.Mui-focused": {
            color: primaryPalette[700],
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          rowGap: 8,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          marginTop: 2,
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        position: "sticky",
      },
      styleOverrides: {
        root: {
          backdropFilter: "saturate(180%) blur(10px)",
          boxShadow: lightSurfaces.subtle,
          borderBottom: `1px solid ${alpha(neutralPalette[300], 0.6)}`,
          backgroundImage: "none",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        regular: {
          minHeight: 72,
          "@media (min-width:600px)": {
            minHeight: 72,
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          height: 3,
          borderRadius: 999,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          minHeight: 46,
          textTransform: "none",
          color: neutralPalette[700],
          "&.Mui-selected": {
            color: primaryPalette[700],
            fontWeight: 700,
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          "&.Mui-selected": {
            backgroundColor: alpha(primaryPalette[100], 0.45),
            color: primaryPalette[800],
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: 10,
          boxShadow: lightSurfaces.elevated,
          border: `1px solid ${alpha(neutralPalette[300], 0.55)}`,
          transition: "opacity 140ms ease, transform 140ms ease",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRight: `1px solid ${alpha(neutralPalette[300], 0.5)}`,
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
          backgroundColor: shadesPalette[0],
        },
        body: {
          backgroundColor: shadesPalette[0],
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
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
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
          borderRadius: 12,
          boxShadow: darkSurfaces.elevated,
          backgroundImage: "none",
          transition: "transform 180ms ease, box-shadow 180ms ease",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 14px 30px rgba(2, 6, 23, 0.64)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          ...sharedButtonSizing,
        },
        contained: {
          boxShadow: "0 2px 10px rgba(2, 6, 23, 0.42)",
          "&:hover": {
            boxShadow: "0 6px 18px rgba(2, 6, 23, 0.5)",
          },
          "&:active": {
            boxShadow: "0 2px 8px rgba(2, 6, 23, 0.32)",
          },
        },
        outlined: {
          borderWidth: 1,
          borderColor: alpha(primaryPalette[300], 0.52),
          "&:hover": {
            borderColor: primaryPalette[300],
            backgroundColor: alpha(primaryPalette[900], 0.32),
          },
          "&:active": {
            backgroundColor: alpha(primaryPalette[900], 0.45),
          },
        },
        text: {
          color: primaryPalette[300],
          "&:hover": {
            backgroundColor: alpha(primaryPalette[900], 0.28),
          },
          "&:active": {
            backgroundColor: alpha(primaryPalette[900], 0.38),
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          ...sharedInputSizing,
          backgroundColor: alpha(neutralPalette[800], 0.92),
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: alpha(neutralPalette[600], 0.85),
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: neutralPalette[500],
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: primaryPalette[300],
            borderWidth: 2,
          },
          "& .MuiOutlinedInput-input": {
            paddingTop: 14,
            paddingBottom: 14,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          position: "static",
          transform: "none",
          marginBottom: 8,
          fontWeight: 600,
          color: neutralPalette[300],
          "&.Mui-focused": {
            color: primaryPalette[300],
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          rowGap: 8,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          marginTop: 2,
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        position: "sticky",
      },
      styleOverrides: {
        root: {
          backdropFilter: "saturate(180%) blur(12px)",
          boxShadow: darkSurfaces.subtle,
          borderBottom: `1px solid ${alpha(neutralPalette[700], 0.7)}`,
          backgroundImage: "none",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        regular: {
          minHeight: 72,
          "@media (min-width:600px)": {
            minHeight: 72,
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          height: 3,
          borderRadius: 999,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          minHeight: 46,
          textTransform: "none",
          color: neutralPalette[400],
          "&.Mui-selected": {
            color: primaryPalette[200],
            fontWeight: 700,
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          "&.Mui-selected": {
            backgroundColor: alpha(primaryPalette[800], 0.5),
            color: primaryPalette[100],
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: 10,
          boxShadow: darkSurfaces.elevated,
          border: `1px solid ${alpha(neutralPalette[700], 0.75)}`,
          transition: "opacity 140ms ease, transform 140ms ease",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRight: `1px solid ${alpha(neutralPalette[700], 0.7)}`,
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
