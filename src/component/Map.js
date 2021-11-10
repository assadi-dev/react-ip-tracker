import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import iconLocation from "../images/icon-location.svg";

const Map = ({ lat, long }) => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100vh",
    latitude: lat,
    longitude: long,
    zoom: 12,
  });

  useEffect(() => {
    setViewport({ ...viewport, latitude: lat, longitude: long });
  }, [lat, long]);

  return (
    <div id="map">
      {
        <ReactMapGL
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_KEY}
          {...viewport}
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >
          <Marker
            longitude={long}
            latitude={lat}
            offsetLeft={0}
            offsetTop={-60}
          >
            <p area-label="push-pin">
              <img className="icon-marker" src={iconLocation} alt="marker" />
            </p>
          </Marker>
        </ReactMapGL>
      }
    </div>
  );
};

export default Map;
