import { Box, Button } from "@mui/material";
import BasketLogo from "../../png/basket.png";

export const Basket = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
      }}
    >
      <Box
        component="img"
        src={BasketLogo}
        sx={{
          width: "410px",
          height: "315px",
        }}
      />
      <Box
        sx={{
          fontSize: "30px",
          lineHeight: "37px",
        }}
      >
        Корзина пуста
      </Box>
      <Box
        sx={{
          fontSize: "20px",
          color: "#838383",
        }}
      >
        Но это не поздно исправить :)
      </Box>
      <Button
        sx={{
          background: "black",
          color: "white",
          borderRadius: "20px",
          width: "540px",
          height: "65px",
        }}
      >
        В каталог товаров
      </Button>
    </Box>
  );
};
