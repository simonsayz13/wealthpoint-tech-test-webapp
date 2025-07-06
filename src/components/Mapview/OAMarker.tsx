import { Marker, useMap } from "react-leaflet";
import { MapIcon } from "./MapIcon";

const OAMarker = ({ lat, long, key, setSelect }: any) => {
  const map = useMap(); // ✅ get map instance from context

  const handleClick = () => {
    map.flyTo([lat, long], 13, {
      duration: 1.5,
    });
    setSelect();
  };

  return (
    <Marker
      key={key}
      position={[lat, long]}
      icon={MapIcon}
      eventHandlers={{ click: handleClick }}
    />
  );
};

export default OAMarker;
