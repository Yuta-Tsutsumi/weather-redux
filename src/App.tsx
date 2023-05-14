import React from "react";
import WeatherApp from "./views/pages/weatherApp/WeatherApp";
import styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <div className={styles.root}>
      <WeatherApp />
    </div>
  );
};

export default App;
