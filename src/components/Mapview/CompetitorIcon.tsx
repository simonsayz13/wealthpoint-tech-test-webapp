import L from "leaflet";
import competitorMarker from "./../../assets/competitor_icon.svg";

export const CompetitorIcon = L.icon({
  iconUrl: competitorMarker,
  iconSize: [32, 32], // size of the icon
  iconAnchor: [16, 32], // point of the icon which corresponds to marker's location
  popupAnchor: [0, -32], // point from which the popup should open relative to the iconAnchor
});
