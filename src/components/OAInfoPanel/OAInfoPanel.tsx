import {
  Typography,
  Slide,
  Paper,
  Button,
  IconButton,
  Box,
  Stack,
  Tooltip,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PeopleIcon from "@mui/icons-material/People";
import NearMeIcon from "@mui/icons-material/NearMe";
import StarIcon from "@mui/icons-material/Star";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import GroupsIcon from "@mui/icons-material/Groups";
import { StyledOAInfoPanelContainer } from "./OAInfoPanel.styles";

interface BottomInfoPanelProps {
  open: boolean;
  oa: any;
  onClose: () => void;
  toggleHeatMap: boolean;
  setToggleHeatMap: (value: boolean) => void;
  toggleNearbyCompetitors: boolean;
  setToggleNearbyCompetitors: (value: boolean) => void;
}

const OAInfoPanel = (props: BottomInfoPanelProps) => {
  const {
    oa,
    open,
    onClose,
    setToggleHeatMap,
    toggleHeatMap,
    toggleNearbyCompetitors,
    setToggleNearbyCompetitors,
  } = props;
  return (
    <Slide direction="up" in={open} mountOnEnter unmountOnExit>
      <StyledOAInfoPanelContainer>
        <IconButton
          onClick={onClose}
          size="medium"
          sx={{ position: "absolute", top: 8, right: 8 }}
        >
          <CloseIcon fontSize="medium" />
        </IconButton>

        <Stack direction="row" mb={0.5} sx={{ pointerEvents: "none" }}>
          <Typography variant="h5" fontWeight={700}>
            {oa?.OA}
          </Typography>
        </Stack>

        <Stack direction="row" spacing={1} alignItems="center">
          <StarIcon sx={{ color: "#fbc02d" }} fontSize="large" />
          <Typography>
            Recommendation: {oa?.normalised_score?.toFixed(0)}%
          </Typography>
        </Stack>

        <Stack direction="row" spacing={1} alignItems="center">
          <PeopleIcon color="success" fontSize="large" />
          <Typography>Population: {oa?.Population}</Typography>
        </Stack>

        {oa?.competitor_density >= 0 && (
          <Stack direction="row" spacing={1} alignItems="center">
            <GroupsIcon color="error" fontSize="large" />
            <Typography>
              Nearby Competitors: {oa?.competitor_density}
            </Typography>
          </Stack>
        )}

        {oa?.nearest_competitor_km && (
          <Stack direction="row" spacing={1} alignItems="center">
            <NearMeIcon color="info" fontSize="large" />
            <Typography>
              Closest Competitor: {oa?.nearest_competitor_km?.toFixed(2)} km
            </Typography>
          </Stack>
        )}

        <Box sx={{ position: "absolute", bottom: 8, right: 8 }}>
          <Tooltip
            title={
              toggleHeatMap
                ? "Hide population heatmap"
                : "Show population heatmap"
            }
          >
            <IconButton
              onClick={() => {
                setToggleHeatMap(!toggleHeatMap);
              }}
              color={toggleHeatMap ? "error" : "default"}
            >
              {toggleHeatMap ? (
                <WhatshotIcon fontSize="large" />
              ) : (
                <WhatshotOutlinedIcon fontSize="large" />
              )}
            </IconButton>
          </Tooltip>
        </Box>

        <Box sx={{ position: "absolute", bottom: 8, right: 60 }}>
          <Tooltip
            title={
              toggleNearbyCompetitors
                ? "Hide neaby competitors"
                : "Show neaby competitors"
            }
          >
            <IconButton
              onClick={() => {
                console.log(!toggleNearbyCompetitors);
                setToggleNearbyCompetitors(!toggleNearbyCompetitors);
              }}
              color={toggleNearbyCompetitors ? "error" : "default"}
            >
              {toggleNearbyCompetitors ? (
                <GroupsIcon color="error" fontSize="large" />
              ) : (
                <GroupsIcon color="inherit" fontSize="large" />
              )}
            </IconButton>
          </Tooltip>
        </Box>
      </StyledOAInfoPanelContainer>
    </Slide>
  );
};

export default OAInfoPanel;
