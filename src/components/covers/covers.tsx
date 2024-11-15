import { Box, useMediaQuery } from "@mui/material";
import Glass from "../../png/covers/glass.png";
import Leather from "../../png/covers/leather.png";
import Silicone from "../../png/covers/silicone.png";
import styled from "@emotion/styled";
import Plastic from "../../png/plastic.png";
import { PropsCovers } from "../../tsconfig";

export const Covers: React.FC<PropsCovers> = ({
  label,
  imgCards,
  alt,
  variantColum,
}) => {
  const isSmallScreen = useMediaQuery("(max-width:800px)");
  // const isMediumDevice = useMediaQuery("(max-width: 428px)");

  const StyledImgCovers = styled("img")({
    width: "100%",
    maxWidth: "355px",
    minWidth: "250px",
  });
  const StylesTextCovers = styled(Box)({
    fontWeight: "600",
    lineHeight: "24px",
    color: "#838383",
    paddingLeft: "20px",
    fontSize: "20px",
    "@media (min-width:600px)": {
      fontSize: "24px",
    },
  });
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "100%",
        paddingTop: "44px",
      }}
    >
      <StylesTextCovers>{label}</StylesTextCovers>
      <Box display="flex">
        <Box display="flex" flexDirection={variantColum ? "column" : "row"}>
          <StyledImgCovers src={imgCards[0]} alt="Glass" />

          {isSmallScreen ? (
            <StyledImgCovers src={imgCards[2]} alt="StyledImgCovers" />
          ) : (
            <>
              <StyledImgCovers src={Leather} alt="Leather" />
              <StyledImgCovers src={Silicone} alt="Silicone" />
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};
