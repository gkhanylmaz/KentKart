import React, { useState, useContext, useEffect } from "react";

//styles
import styles from "./Map.module.scss";

// components
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

// contexts
import { StopContext } from "context";

const containerStyle = {
  width: "100vw",
  height: "90vh",
};

const center = {
  lng: 29.939255,
  lat: 40.765427,
};
// const API_KEY = process.env.GOOGLE_MAPS_API_KEY;

const Map = () => {
  const { getStops } = useContext(StopContext);
  const [stops, setStops] = useState([]);

  // stops = array of objects
  const handleInfoWindowClick = (index) => {
    setStops(
      stops.map((el) => {
        if (el.stop_id === index) {
          return {
            ...el,
            isVisible: !el.isVisible,
          };
        }
        return el;
      })
    );
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  });

  useEffect(() => {
    const callback = (param) => {
      setStops(param);
    };
    getStops(callback);
  }, []); //eslint-disable-line

  return isLoaded ? (
    <div className={styles.Map}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        {stops?.map((el, index) => {
          const {
            stop_lat,
            stop_lon,
            stop_desc,
            stop_code,
            isVisible,
            stop_id,
          } = el;
          return (
            <Marker
              key={index}
              position={{ lat: stop_lat, lng: stop_lon }}
              onClick={() => handleInfoWindowClick(stop_id)}
            >
              {isVisible && (
                <InfoWindow onClick={() => handleInfoWindowClick(stop_id)}>
                  <div>
                    <p> Durak Adı: {stop_desc} </p>
                    <p> Durak Numarası: {stop_code} </p>
                    <p> Enlem: {stop_lat} </p>
                    <p> Boylam: {stop_lon}</p>
                  </div>
                </InfoWindow>
              )}
            </Marker>
          );
        })}
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};

export default React.memo(Map);
