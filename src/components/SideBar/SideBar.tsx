import {
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormGroup,
  Stack,
  Button,
  Divider,
  Slider,
} from "@mui/material";
import { SidebarWrapper } from "./SideBar.styles";
import { useAppContext } from "../../context/AppContext";
import { useState } from "react";
import { buildOptimalLocationsURL } from "../../util/helper";
import FeatureCheckbox from "./FeatureCheckbox";
import type { Features } from "../../types/type";

const Sidebar = () => {
  const {
    setLoadingResult,
    setResults,
    loadingResult,
    week,
    setWeek,
    setSelectedOA,
  } = useAppContext();
  const [numOfLocations, setNumOfLocations] = useState<number>(1);
  const [minPopulation, setMinPopulation] = useState<number>(2000);
  const [features, setFeatures] = useState<Features>({
    competitorDistance: false,
    competitorDensity: false,
    competitorRadius: 3,
  });

  const onClickResult = async () => {
    setResults([]);
    setSelectedOA(null);
    setLoadingResult(true);
    const url = buildOptimalLocationsURL(
      numOfLocations,
      week,
      minPopulation,
      features
    );
    await fetch(url)
      .then((res) => res.json())
      .then(setResults)
      .catch(console.error);
    setLoadingResult(false);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFeatures((prev: Features) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSliderChange = (_: Event, newValue: number) => {
    setFeatures((prev: Features) => ({
      ...prev,
      competitorRadius: newValue,
    }));
  };

  return (
    <SidebarWrapper>
      <Stack spacing={2}>
        <Typography variant="subtitle2" textAlign="left">
          Location Criteria
        </Typography>
        <TextField
          label="Number of Locations"
          type="number"
          fullWidth
          defaultValue={1}
          error={numOfLocations > 500}
          helperText={numOfLocations > 500 ? "Value must be 500 or less" : ""}
          size="small"
          onChange={(e) => setNumOfLocations(Number(e.target.value))}
          sx={{
            "& input[type=number]::-webkit-inner-spin-button": {
              WebkitAppearance: "none",
            },
          }}
        />

        <TextField
          label="Minimum population"
          type="number"
          fullWidth
          defaultValue={2000}
          size="small"
          onChange={(e) => setMinPopulation(Number(e.target.value))}
          sx={{
            "& input[type=number]::-webkit-inner-spin-button": {
              WebkitAppearance: "none",
            },
          }}
        />

        <FormControl fullWidth size="small">
          <InputLabel id="week-select-label">Competitor Dataset</InputLabel>
          <Select
            labelId="week-select-label"
            label="Competitor Data"
            value={week}
            sx={{ textAlign: "left" }}
            onChange={(e) => setWeek(Number(e.target.value))}
            MenuProps={{
              PaperProps: {
                sx: {
                  backgroundColor: "#ffffff", // background of dropdown
                  color: "#333",
                  "& .MuiMenuItem-root": {
                    "&:hover": {
                      backgroundColor: "#e0f7fa", // hover color
                    },
                    "&.Mui-selected": {
                      backgroundColor: "#48d7e5",
                      "&:hover": {
                        backgroundColor: "#48d7e5", // hover color when selected
                      },
                    },
                  },
                },
              },
            }}
          >
            <MenuItem value={1}>Week 1</MenuItem>
            <MenuItem value={2}>Week 2</MenuItem>
          </Select>
        </FormControl>

        <Divider variant="middle" />

        <FormGroup>
          <Typography
            variant="subtitle2"
            textAlign="left"
            sx={{ marginBottom: "8px" }}
          >
            Scoring Metrics
          </Typography>
          <FeatureCheckbox
            name="competitorDistance"
            label="Competitor Distance"
            checked={features.competitorDistance}
            onChange={handleCheckboxChange}
          />
          <FeatureCheckbox
            name="competitorDensity"
            label="Competitor Density"
            checked={features.competitorDensity}
            onChange={handleCheckboxChange}
          />
          {features.competitorDensity && (
            <Stack>
              <Typography sx={{ textAlign: "left" }}>
                {`Radius: ${features.competitorRadius} km`}
              </Typography>
              <Slider
                step={1}
                onChange={handleSliderChange}
                value={features.competitorRadius}
                min={1}
                max={10}
                valueLabelDisplay="auto"
              />
            </Stack>
          )}
        </FormGroup>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={onClickResult}
          disabled={loadingResult || !(numOfLocations > 0 && minPopulation > 0)}
        >
          Generate Locations
        </Button>
      </Stack>
    </SidebarWrapper>
  );
};

export default Sidebar;
