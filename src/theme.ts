import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import gray from "@mui/material/colors/grey";

const LightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1f6feb",
      light: "#5393ff",
      dark: "#1048b5",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#7c3aed",
      light: "#a78bfa",
      dark: "#5b21b6",
      contrastText: "#ffffff",
    },
    success: {
      main: "#16a34a",
      light: "#4ade80",
      dark: "#166534",
    },
    warning: {
      main: "#f59e0b",
      light: "#fbbf24",
      dark: "#b45309",
    },
    error: {
      main: "#ef4444",
      light: "#f87171",
      dark: "#b91c1c",
    },
    info: {
      main: "#0ea5e9",
      light: "#38bdf8",
      dark: "#0284c7",
    },
    background: {
      default: "#f4f6fb",
      paper: "#ffffff",
    },
    text: {
      primary: "#0f172a",
      secondary: "#475569",
    },
    divider: "#e2e8f0",
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
      letterSpacing: "-0.02em",
    },
    h2: {
      fontWeight: 700,
      fontSize: "2rem",
      letterSpacing: "-0.02em",
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.5rem",
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.25rem",
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.125rem",
    },
    h6: {
      fontWeight: 600,
      fontSize: "1rem",
    },
    subtitle1: {
      fontWeight: 500,
    },
    subtitle2: {
      fontWeight: 500,
    },
    body1: {
      fontSize: "0.95rem",
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
    },
    button: {
      fontWeight: 600,
      textTransform: "none",
      letterSpacing: "0.01em",
    },
  },
  components: {
    MuiChip: {
      styleOverrides: {
        labelSmall: {
          lineHeight: "18px",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "main.MuiBox-root": {
          backgroundColor: "#f4f6fb",
        },
        body: {
          backgroundColor: "#f4f6fb",
          color: "#0f172a",
        },
        a: {
          color: "#1f6feb",
          textDecoration: "none",
        },
        "*::selection": {
          backgroundColor: "#c7d2fe",
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variant: "body2",
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: "8px 18px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: "1px solid #e2e8f0",
          boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: "1px solid #e2e8f0",
          backgroundImage: "none",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          color: "#0f172a",
          borderBottom: "1px solid #e2e8f0",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#ffffff",
          borderRight: "1px solid #e2e8f0",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundColor: "#ffffff",
        },
        notchedOutline: {
          borderColor: "#cbd5f5",
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "#eef2ff",
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: 8,
          backgroundColor: "#0f172a",
          color: "#f8fafc",
          fontSize: "0.75rem",
        },
      },
    },
  },
});

const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#60a5fa",
      light: "#93c5fd",
      dark: "#2563eb",
      contrastText: "#0b1120",
    },
    secondary: {
      main: "#c084fc",
      light: "#d8b4fe",
      dark: "#9333ea",
      contrastText: "#0b1120",
    },
    success: {
      main: "#22c55e",
      light: "#4ade80",
      dark: "#15803d",
    },
    warning: {
      main: "#fbbf24",
      light: "#fde68a",
      dark: "#d97706",
    },
    error: {
      main: "#f87171",
      light: "#fca5a5",
      dark: "#dc2626",
    },
    info: {
      main: "#38bdf8",
      light: "#7dd3fc",
      dark: "#0ea5e9",
    },
    background: {
      default: "#0b1120",
      paper: "#111827",
    },
    text: {
      primary: "#f8fafc",
      secondary: "#cbd5f5",
    },
    divider: "#1e293b",
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
      letterSpacing: "-0.02em",
    },
    h2: {
      fontWeight: 700,
      fontSize: "2rem",
      letterSpacing: "-0.02em",
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.5rem",
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.25rem",
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.125rem",
    },
    h6: {
      fontWeight: 600,
      fontSize: "1rem",
    },
    subtitle1: {
      fontWeight: 500,
    },
    subtitle2: {
      fontWeight: 500,
    },
    body1: {
      fontSize: "0.95rem",
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
    },
    button: {
      fontWeight: 600,
      textTransform: "none",
      letterSpacing: "0.01em",
    },
  },
  components: {
    MuiChip: {
      styleOverrides: {
        labelSmall: {
          lineHeight: "18px",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "main.MuiBox-root": {
          backgroundColor: "#0b1120",
        },
        body: {
          backgroundColor: "#0b1120",
          color: "#f8fafc",
        },
        a: {
          color: "#60a5fa",
          textDecoration: "none",
        },
        "*::selection": {
          backgroundColor: "#312e81",
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variant: "body2",
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: "8px 18px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: "1px solid #1e293b",
          backgroundImage:
            "linear-gradient(145deg, rgba(15, 23, 42, 0.9), rgba(17, 24, 39, 0.9))",
          boxShadow: "0 10px 30px rgba(2, 6, 23, 0.5)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: "1px solid #1e293b",
          backgroundImage: "none",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#0f172a",
          color: "#f8fafc",
          borderBottom: "1px solid #1e293b",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#0f172a",
          borderRight: "1px solid #1e293b",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundColor: "#0f172a",
        },
        notchedOutline: {
          borderColor: "#334155",
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "#111827",
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: 8,
          backgroundColor: "#f8fafc",
          color: "#0f172a",
          fontSize: "0.75rem",
        },
      },
    },
  },
});

const DarkThemeWithResponsiveFontSizes = responsiveFontSizes(DarkTheme);
const LightThemeWithResponsiveFontSizes = responsiveFontSizes(LightTheme);

export { LightThemeWithResponsiveFontSizes, DarkThemeWithResponsiveFontSizes };
