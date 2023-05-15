import React from "react";
import TodayForecast from "../../components/todayForecast/TodayForecast";
import SearchForm from "../../components/searchForm/SearchForm";
import HourlyForecastGraph from "../../components/hourlyForecastGraph/HourlyForecastGraph";
import WeeklyForecast from "../../components/weeklyForecast/WeeklyForecast";
import GoogleMapComponents from "../../components/googleMapComponents/GoogleMapComponents";
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
