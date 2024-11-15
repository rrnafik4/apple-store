import { Box } from "@mui/material";
import Buz from "../../png/wired/byz.png";
import styled from "@emotion/styled";
import { FC } from "react";
interface propsUniversalCards {
  img: string;
}
export const UniversalCards: FC<propsUniversalCards> = (img) => {
  const StylesText = styled(Box)({
    fontSize: "17px",
    fontWeight: "600",
    lineHeight: "21px",
  });
  return (
    <Box>
      <Box
        sx={{
          width: "350px",
          widows: "100%",
          background: "#FFFFFF",
          height: "407px",
          borderRadius: "30px",
        }}
      >
        <Box
          src={Buz}
          component="img"
          alt="Buz"
          sx={{
            maxWidth: "220px",
            height: "238px",
            maxHeight: "407px",
            minHeight: "178px",
            margin: "0 auto",
          }}
        />
        <Box display="flex" justifyContent="space-between" marginTop="55px">
          <Box marginLeft="21px">
            <StylesText paddingBottom="26px"> Apple BYZ S852I</StylesText>
            <StylesText>4.7</StylesText>
          </Box>
          <Box marginRight="21px">
            <StylesText color="#FFA542">2927 ₸</StylesText>
            <StylesText color="#FFA542">2927 ₸</StylesText>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
