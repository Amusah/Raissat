import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ currentView }) => {
  const mapRef = useRef(null); // this holds the map container div

  const views = {
    headquarters: [6.59354, 3.36326],
    uk: [52.2355, 0.15192],
  };

  useEffect(() => {
    if (!mapRef.current) return;

    // Initialize the map
    const map = L.map(mapRef.current).setView(views[currentView], 13);

    // Add a tile layer (OpenStreetMap)
    L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      maxZoom: 19,
      // attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    // Add a marker example
    const marker = L.marker(views[currentView]).addTo(map);
    marker
      .bindPopup(
        `${
          currentView === "headquarters"
            ? "<b>Raissat Headquarters</b> <br /> 25 Raymond Njoku Street"
            : "<b>UK Office</b> <br /> Global Hub Cambridge Innovation Park"
        }`
      )
      .openPopup();

    // Cleanup on unmount
    return () => {
      map.remove();
    };
  }, [ currentView, views ]);

  return (
    <div
      ref={mapRef}
      className="h-[400px] w-full rounded-lg overflow-hidden"
    ></div>
  );
};

export default Map;
