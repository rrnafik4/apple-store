import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const StylesTextCovers = styled(Box)({
  fontWeight: "600",
  lineHeight: "24px",
  color: "#838383",
  paddingLeft: "20px",
  fontSize: "20px",
  "@media (min-width:600px)": {
    fontSize: "24px",
  },
});
