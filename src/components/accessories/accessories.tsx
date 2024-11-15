import { Box, useMediaQuery } from "@mui/material";
import IphoneWhiteBlack from "../../png/iphoneWhiteBlack.png";

export const Accessories = () => {
  // const tablet = useMediaQuery("(max-width:1075px)");

  return (
    <div>
      <Box
        sx={{
          maxWidth: "1110px",
          width: "100%",
          background: "#101010",
          height: { xl: "197px", lg: "213px", md: "173px" },
          borderRadius: "30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: "643px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginLeft: "69px",
          }}
        >
          <Box
            sx={{
              color: "#FFFFFF",
              fontWeight: "600",
              fontSize: "30px",
            }}
          >
            Аксессуары для
            <Box> Iphone 13 Pro Max</Box>
          </Box>
        </Box>

        <Box
          src={IphoneWhiteBlack}
          component="img"
          alt="IphoneWhiteBlack"
          sx={{
            width: "318px",
            height: "237px",
            marginRight: "163px",
            marginLeft: "69px",
            marginBottom: "5px",
          }}
        />
      </Box>
    </div>
  );
};
