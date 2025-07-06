import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const MapWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "100%",
  borderRadius: theme.shape.borderRadius,
  overflow: "hidden",
  backgroundColor: "red",
}));
