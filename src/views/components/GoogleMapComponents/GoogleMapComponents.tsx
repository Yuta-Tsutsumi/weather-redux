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

const GoogleMapComponents: React.VFC = () => {
  return (
    <div className={styles.root}>
      <LoadScript googleMapsApiKey="AIzaSyAntz8OQsFZfMOtTLMSQvUnYRFlmSRRAwA">
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
