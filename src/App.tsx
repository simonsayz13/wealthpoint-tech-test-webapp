import { Stack, Typography } from "@mui/material";
import Sidebar from "./components/SideBar/SideBar";
import Mapview from "./components/Mapview/Mapview";
import ResultPanel from "./components/ResultPanel/ResultPanel";
import { useAppContext } from "./context/AppContext";
import logo from "./assets/the-wealth-point-logo.svg";

function App() {
  const { loadingResult, results } = useAppContext();
  return (
    <Stack spacing={2} sx={{ height: "90vh", p: 0 }}>
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "left",
          alignItems: "center",
          pointerEvents: "none",
        }}
      >
        <img src={logo} alt="Logo" style={{ width: "200px", height: "18px" }} />
        <Typography variant="h5">GeoSense</Typography>
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        sx={{ flex: 1, display: "flex", overflowY: "auto" }}
      >
        <Stack spacing={2}>
          <Sidebar />
          {(loadingResult || results.length > 0) && <ResultPanel />}
        </Stack>
        <Mapview />
      </Stack>
    </Stack>
  );
}

export default App;
