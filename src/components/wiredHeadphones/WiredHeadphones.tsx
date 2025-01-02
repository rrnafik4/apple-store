import { Box, useMediaQuery } from "@mui/material";

import { PropsCovers } from "../../tsconfig";
import { StylesTextCovers } from "../../globlStyled";
import { UniversalCards } from "../card/universalCards";

export const WiredHeadphones: React.FC<PropsCovers> = ({
  label,
  imgCards,
  alt,
  variantColum,
}) => {
  const isSmallScreen = useMediaQuery("(max-width:800px)");

  return (
    <Box>
      <StylesTextCovers marginBottom="20px">{label}</StylesTextCovers>

      <Box
        display="flex"
        gap="30px"
        flexDirection={isSmallScreen ? "column" : "row"}
        alignItems="center"
        flexWrap="wrap"
      >
        {imgCards.map((img) => (
          <UniversalCards img={img} />
        ))}
      </Box>
    </Box>
  );
};
