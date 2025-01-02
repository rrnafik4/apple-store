import { Box } from "@mui/material";
import Logo from "../../png/log.png";
import LanguageIcon from "@mui/icons-material/Language";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import XIcon from "@mui/icons-material/X";

export const Footer = () => {
  return (
    <Box
      sx={{
        background: "#FFFFFF",
        borderRadius: "30px 30px 0px 0px",
        height: "149px",
        marginTop: "60px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          paddingTop: "29px",
        }}
      >
        <Box>
          <Box
            src={Logo}
            component="img"
            alt="Logo"
            sx={{
              width: "85px",
            }}
          />
        </Box>
        <Box
          sx={{
            width: "447px",
            height: "103px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Box
              sx={{
                lineHeight: "21px",
              }}
            >
              Избранное
            </Box>
            <Box>Корзина</Box>
            <Box>Контакты</Box>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box>Условия сервиса</Box>
            <Box
              sx={{
                width: "152px",
                height: "20px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <LanguageIcon />
              <Box>Рус</Box>
              <Box>Каз</Box>
              <Box>Eng</Box>
            </Box>
          </Box>
        </Box>
        <Box display="flex">
          <TelegramIcon />
          <InstagramIcon />
          <WhatsAppIcon />
          <XIcon />
        </Box>
      </Box>
    </Box>
  );
};
