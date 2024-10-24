import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import Logo from "../png/log.png";

import styled from "@emotion/styled";
import { MenuSection } from "./MenuSection";

export const Header = () => {
  const isSmallScreen = useMediaQuery("(max-width:604px)");
  const StyledToolbar = styled(Toolbar)({
    background: "#EAEAEA",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1110px",
  });
  const StyledBox = styled(Box)({
    height: 50,
    width: 105,
    display: "flex",
    alignItems: "center",
  });
  const StyleBadge = styled(Badge)({
    "& .MuiBadge-badge": {
      backgroundColor: "#FFA542",
      color: "#FFFFFF",
    },
  });

  return (
    <AppBar position="static" elevation={0}>
      <StyledToolbar>
        <Box display="flex" gap={10}>
          <StyledBox>
            <Box src={Logo} alt="logo" component="img" />
          </StyledBox>
          <Box
            alignItems="center"
            sx={{
              display: { xs: "none", sm: "inline-flex" },
            }}
          >
            <MenuSection />
          </Box>
        </Box>

        <Box
          sx={{
            display: { sm: "flex", xs: "flex" },
            flexDirection: { xs: "row-reverse" },
          }}
        >
          {isSmallScreen ? (
            <Box display="flex" alignItems="center">
              <MenuSection />
            </Box>
          ) : (
            <IconButton
              sx={{
                display: { xs: "none", sm: "inline-flex" },
              }}
              size="large"
            >
              <StyleBadge badgeContent={12}>
                <FavoriteBorderIcon />
              </StyleBadge>
            </IconButton>
          )}

          <IconButton>
            <StyleBadge badgeContent={2}>
              <ShoppingCartOutlinedIcon />
            </StyleBadge>
          </IconButton>
        </Box>
      </StyledToolbar>
    </AppBar>
  );
};
