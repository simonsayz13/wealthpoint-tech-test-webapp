import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { MapWrapper } from "./Mapview.styles";
import { useEffect, useRef, useState } from "react";
import { HeadmapLayer } from "./HeatLayer";
import { useAppContext } from "../../context/AppContext";
import { Map as LeafletMap } from "leaflet";
import OAMarker from "./OAMarker";
import OAInfoPanel from "../OAInfoPanel/OAInfoPanel";
import { OAInfoPanelWrapper } from "../OAInfoPanel/OAInfoPanel.styles";
import { CompetitorIcon } from "./CompetitorIcon";
const MapView = () => {
  const center: [number, number] = [53.4808, -2.2426];
  const { selectedOA, setSelectedOA, week } = useAppContext();
  const { results } = useAppContext();
  const mapRef = useRef<LeafletMap | null>(null);
  const [heatMapPoints, setHeatMapPoints] = useState([]);
  const [toggleHeatMap, setToggleHeatMap] = useState<boolean>(false);
  const [toggleNearbyCompetitors, setToggleNearbyCompetitors] =
    useState<boolean>(false);
  const [nearbyCompetitorsPoints, setNearbyCompetitorsPoints] = useState<
    Array<Array<number>>
  >([]);

  useEffect(() => {
    if (selectedOA && toggleHeatMap && heatMapPoints.length === 0)
      fetch(`http://localhost:8000/heat-map?oa=${selectedOA.OA}`)
        .then((res) => res.json())
        .then(setHeatMapPoints)
        .catch(console.error);
  }, [toggleHeatMap]);

  useEffect(() => {
    if (
      selectedOA &&
      toggleNearbyCompetitors &&
      nearbyCompetitorsPoints.length === 0
    )
      fetch(
        `http://localhost:8000/nearby-competitors?oa=${selectedOA.OA}&week=${week}`
      )
        .then((res) => res.json())
        .then(setNearbyCompetitorsPoints)
        .catch(console.error);
  }, [toggleNearbyCompetitors]);

  useEffect(() => {
    if (mapRef.current && selectedOA) {
      mapRef.current.flyTo([selectedOA.lat, selectedOA.long], 13, {
        duration: 1.5, // seconds
        easeLinearity: 0.25,
      });
    }
    setHeatMapPoints([]);
    setToggleHeatMap(false);
    setNearbyCompetitorsPoints([]);
    setToggleNearbyCompetitors(false);
  }, [selectedOA]);

  const resetMapView = () => {
    setSelectedOA(null);
    setHeatMapPoints([]);
    setToggleHeatMap(false);
    setNearbyCompetitorsPoints([]);
    setToggleNearbyCompetitors(false);
  };

  return (
    <MapWrapper>
      <MapContainer
        style={{ width: "100%", height: "100%", zIndex: 0 }}
        center={center}
        zoom={7}
        ref={mapRef}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        {results.map((outputArea: any) => {
          return (
            <OAMarker
              key={outputArea.OA}
              lat={outputArea.lat}
              long={outputArea.long}
              oa={outputArea.OA}
              setSelect={() => setSelectedOA(outputArea)}
            />
          );
        })}

        {toggleNearbyCompetitors &&
          nearbyCompetitorsPoints.length > 0 &&
          nearbyCompetitorsPoints.map((point) => {
            return (
              <Marker
                key={"1"}
                position={[point[0], point[1]]}
                icon={CompetitorIcon}
              />
            );
          })}

        {toggleHeatMap && (
          <HeadmapLayer
            fitBoundsOnLoad
            fitBoundsOnUpdate
            points={heatMapPoints}
            latitudeExtractor={(m: any) => m[0]}
            longitudeExtractor={(m: any) => m[1]}
            intensityExtractor={(m: any) => m[2]}
          />
        )}
      </MapContainer>

      <OAInfoPanelWrapper>
        <OAInfoPanel
          oa={selectedOA}
          open={!!selectedOA}
          onClose={() => resetMapView()}
          toggleHeatMap={toggleHeatMap}
          setToggleHeatMap={setToggleHeatMap}
          toggleNearbyCompetitors={toggleNearbyCompetitors}
          setToggleNearbyCompetitors={setToggleNearbyCompetitors}
        />
      </OAInfoPanelWrapper>
    </MapWrapper>
  );
};

export default MapView;
