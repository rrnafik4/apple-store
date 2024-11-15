import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "'Montserrat', sans-serif",
  },

  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: "15px",
          fontWeight: "500",
          lineHeight: "18px",
          color: "#101010",
          boxShadow: "none",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          color: "#1C1C27",
          textTransform: "none", // Отключение преобразования текста (по умолчанию это uppercase)
        },
      },
      defaultProps: {
        variant: "contained", // Установка стиля кнопки по умолчанию
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#f4f6f8", // Переопределение цвета фона для Paper
        },
      },
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 604,
      md: 428,
      lg: 1075,
      xl: 1110,
    },
  },
});
