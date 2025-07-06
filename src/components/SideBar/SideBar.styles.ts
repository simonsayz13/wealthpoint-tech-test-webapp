import { Paper } from "@mui/material";
import { styled } from "@mui/system";

export const SidebarWrapper = styled(Paper)(({ theme }) => ({
  width: "250px",
  boxSizing: "border-box",
  borderRadius: theme.shape.borderRadius,
  padding: 16,
  alignSelf: "flex-start",
  boxShadow: "3",
  backgroundColor: "#075A65",
}));
