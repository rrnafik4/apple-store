import * as React from "react";
import { Menu } from "@mui/material";
import { Box, useMediaQuery } from "@mui/system";
import { Button, MenuItem } from "@mui/material";
import Fade from "@mui/material/Fade";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import styled from "@emotion/styled";
import MenuIcon from "@mui/icons-material/Menu";

export const MenuSection = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [submenuOpen, setSubmenuOpen] = React.useState(false);

  const isSmallScreen = useMediaQuery("(max-width:604px)");

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSubmenuOpen(false);
  };

  const handleSubmenuClick = () => {
    setSubmenuOpen((prev) => !prev);
  };

  const CustomMenu = styled(Menu)({
    "& .MuiPaper-root": {
      backgroundColor: "#EAEAEA",
      borderBottomLeftRadius: "30px",
      borderBottomRightRadius: "30px",
      boxShadow: "none",
      maxWidth: "255px",
      width: "100%",
      maxHeight: "522px",
    },
  });
  const CustomMenuItem = styled(MenuItem)({
    width: "100%",
    paddingLeft: "28px",
    paddingRight: "78px",
  });

  return (
    <Box>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        startIcon={!isSmallScreen && <SmartphoneIcon />}
        endIcon={!isSmallScreen && <KeyboardArrowDownIcon />}
        sx={{
          maxWidth: "255px",
          fontSize: "12px",
        }}
      >
        {isSmallScreen ? <MenuIcon /> : "Выбрать модель телефона"}
      </Button>
      <CustomMenu
        id="fade-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <CustomMenuItem onClick={handleClose}>iPhone 12</CustomMenuItem>
        <CustomMenuItem
          sx={{
            maxWidth: "149px",
            height: "21px",
          }}
          onClick={handleSubmenuClick}
        >
          Apple
          {submenuOpen ? (
            <KeyboardArrowDownIcon
              sx={{ marginLeft: "88px", marginRight: "78px" }}
            />
          ) : (
            <KeyboardArrowUpIcon
              sx={{ marginLeft: "88px", marginRight: "78px" }}
            />
          )}
        </CustomMenuItem>
        {submenuOpen && (
          <Box sx={{ pl: 4 }}>
            <MenuItem onClick={handleClose}>Subitem 1</MenuItem>
            <MenuItem onClick={handleClose}>Subitem 2</MenuItem>
          </Box>
        )}

        <CustomMenuItem onClick={handleClose}>iPhone 12 Max</CustomMenuItem>
        <CustomMenuItem onClick={handleClose}>iPhone 13 Max</CustomMenuItem>
      </CustomMenu>
    </Box>
  );
};
