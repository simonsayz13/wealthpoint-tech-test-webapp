import { Box, ListItemButton, Paper } from "@mui/material";
import { styled } from "@mui/system";

interface StyledProps {
  $isSelected: boolean; // prefix with $ to avoid React DOM warnings
}

export const ResultPanelWrapper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  borderRadius: theme.shape.borderRadius,
  alignItems: "center",
  overflow: "auto",
  backgroundColor: "#075A65",
}));

export const TitleWrapper = styled(Box)(({ theme }) => ({
  top: 0,
  position: "sticky",
  backgroundColor: "#075A65",
  zIndex: 1,
  paddingTop: "4px",
  width: "100%",
  borderTopLeftRadius: theme.shape.borderRadius,
  borderTopRightRadius: theme.shape.borderRadius,
  pointerEvents: "none",
}));

export const ContentWrapper = styled(Box)(() => ({
  flex: 1,
  overflowY: "auto",
  width: "100%",
  "&::-webkit-scrollbar": {
    width: "8px",
  },
  "&::-webkit-scrollbar-track": {
    background: "#075A65",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#51A1AD",
    borderRadius: "8px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "#7FCBD8",
  },
}));

export const LoaderWrapper = styled(Box)(() => ({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "90%",
}));

export const StyledListItemButton = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== "$isSelected",
})<StyledProps>(({ $isSelected }) => ({
  justifyContent: "space-between",
  "&.Mui-selected": {
    backgroundColor: "#48d7e5",
    color: "white",
  },
  "&.Mui-selected:hover": {
    backgroundColor: "#48d7e5",
  },
  "& .MuiListItemText-primary": {
    color: $isSelected ? "#004651" : "inherit",
  },
}));
