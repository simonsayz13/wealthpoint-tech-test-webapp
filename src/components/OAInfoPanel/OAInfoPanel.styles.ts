import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";

export const OAInfoPanelWrapper = styled(Box)(() => ({
  position: "absolute",
  bottom: 30,
  width: "100%",
  pointerEvents: "none", // Let map receive clicks
}));

export const StyledOAInfoPanelContainer = styled(Paper)(() => ({
  position: "relative",
  width: "50%",
  margin: "0 auto",
  padding: "16px",
  pointerEvents: "auto",
  backgroundColor: "#075A65",
}));
