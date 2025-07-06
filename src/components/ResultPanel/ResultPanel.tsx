import {
  Box,
  CircularProgress,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import {
  ContentWrapper,
  LoaderWrapper,
  ResultPanelWrapper,
  StyledListItemButton,
  TitleWrapper,
} from "./ResultPanel.style";
import { useAppContext } from "../../context/AppContext";
import BusinessIcon from "@mui/icons-material/Business";
import StarIcon from "@mui/icons-material/Star";

const ResultPanel = () => {
  const { loadingResult, results, selectedOA, setSelectedOA } = useAppContext();

  return (
    <ResultPanelWrapper>
      <TitleWrapper>
        <Typography variant="subtitle2">Suggested Output Areas</Typography>
        <Divider variant="fullWidth" />
      </TitleWrapper>
      <ContentWrapper>
        {loadingResult ? (
          <LoaderWrapper>
            <CircularProgress />
          </LoaderWrapper>
        ) : (
          results.length > 0 && (
            <List component="nav" aria-label="Optimized Output Areas">
              {results.map((oa: any) => (
                <StyledListItemButton
                  key={oa.OA}
                  onClick={() => setSelectedOA(oa)}
                  selected={selectedOA?.OA === oa.OA}
                  $isSelected={selectedOA?.OA === oa.OA}
                >
                  <Stack direction="row" spacing={1}>
                    <BusinessIcon
                      sx={{
                        color: selectedOA?.OA === oa.OA ? "#004651" : "inherit",
                      }}
                    />
                    <ListItemText primary={oa.OA} />
                  </Stack>
                  <Stack direction="row" spacing={1}>
                    <StarIcon sx={{ color: "#fbc02d" }} fontSize="small" />
                    <ListItemText primary={`${oa.normalised_score}%`} />
                  </Stack>
                </StyledListItemButton>
              ))}
            </List>
          )
        )}
      </ContentWrapper>
    </ResultPanelWrapper>
  );
};

export default ResultPanel;
