import { useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";

function Legend() {
  const map = useMap();
  useEffect(() => {
    const legend = L.control({ position: "bottomright" });
    legend.onAdd = () => {
      const div = L.DomUtil.create("div", "legend");
      div.innerHTML = `
  <h4 className="text-black">Legend Population</h4>
  <div className="legend-item">
    <span className="legend-color" style="background-color: #a52a2a; opacity: 0"></span>
    <span className="legend-label">0</span>
  </div>
  <div className="legend-item">
    <span className="legend-color" style="background-color: #a52a2a; opacity: 0.3"></span>
    <span className="legend-label">1 - 100</span>
  </div>
  <div className="legend-item">
    <span className="legend-color" style="background-color: #a52a2a; opacity: 0.4"></span>
    <span className="legend-label">101 - 1000</span>
  </div>
  <div className="legend-item">
    <span className="legend-color" style="background-color: #a52a2a; opacity: 0.6"></span>
    <span className="legend-label">1001 - 2000</span>
  </div>
  <div className="legend-item">
    <span className="legend-color" style="background-color: #a52a2a; opacity: 0.8"></span>
    <span className="legend-label">2000+</span>
  </div>
`;

      return div;
    };
    legend.addTo(map);
    return () => {
      legend.remove();
    };
  }, [map]);
  return null;
}

export default Legend;
