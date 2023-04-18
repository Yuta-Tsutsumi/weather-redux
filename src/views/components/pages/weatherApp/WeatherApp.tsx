import React from "react";
import TodayForecast from "../../todayForecast/TodayForecast";
import SearchForm from "../../searchForm/SearchForm";
import HourlyForecastGraph from "../../HourlyForecastGraph/HourlyForecastGraph";
import WeeklyForecast from "../../weeklyForecast/WeeklyForecast";
import GoogleMapComponents from "../../GoogleMapComponents/GoogleMapComponents";
import styles from "./WeatherApp.module.scss";

const WeatherApp: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <SearchForm />
      </div>
      <div className={styles.middle}>
        <TodayForecast />
        <GoogleMapComponents />
      </div>
      <div className={styles.bottom}>
        <HourlyForecastGraph />
        <WeeklyForecast />
      </div>
    </div>
  );
};

export default WeatherApp;
