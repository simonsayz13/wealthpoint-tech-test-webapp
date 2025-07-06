import L from "leaflet";
import "leaflet.heat";
import { useMap } from "react-leaflet";
import { useEffect } from "react";

export const HeadmapLayer = ({ points }: any) => {
  const map = useMap();

  useEffect(() => {
    if (!map || points.length === 0) return;

    //@ts-ignore
    const heatLayer = L.heatLayer(points, {
      radius: 30, // 🔍 Increase area of effect
      blur: 20, // 💨 Soften transition between heat levels
      maxZoom: 17,
      gradient: {
        0.0: "#001f3f", // blue
        0.3: "#2ECC40", // green
        0.6: "#FFDC00", // yellow
        1.0: "#FF4136", // red
      },
    }).addTo(map);

    return () => {
      heatLayer.remove();
    };
  }, [map, points]);

  return null;
};
