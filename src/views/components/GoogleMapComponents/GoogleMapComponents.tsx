import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import styles from "./GoogleMapComponents.module.scss";

const containerStyle = {
  width: "330px",
  height: "200px",
};

const center = {
  lat: 35.69575,
  lng: 139.77521,
};

const GoogleMapComponents: React.FC = () => {
  const ApiKey = process.env.REACT_APP_GOOGLEMAPS_APIKEY;
  return (
    <div className={styles.root}>
      <LoadScript googleMapsApiKey={ApiKey || ""}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={17}
        ></GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GoogleMapComponents;
