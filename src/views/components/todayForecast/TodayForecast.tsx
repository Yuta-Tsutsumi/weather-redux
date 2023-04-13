import React from "react";
import styles from "./TodayForecast.module.scss";

const number = 0;
const string = "現在地";
const TodayForecast: React.VFC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.month}>{`${number}月${number}日 現在時刻`}</div>
      <div className={styles.position}>{string}</div>
      <div className={styles.thermo}>{number}℃</div>
      <div className={styles.roughTemperature}>
        <div className={styles.temperature}>
          <span className={styles.mainTemperature}>体感温度: {number}℃　</span>
          <span className={styles.tempMax}>最高温度: {number}℃　</span>
          <span className={styles.tempMin}>最低温度: {number}℃</span>
        </div>
        <div className={styles.wind}>
          <span className={styles.mainWind}>風: {number}m/s 北寄りの風　</span>
          <span className={styles.BarometricPressure}>気圧: {number}hPa　</span>
          <span className={styles.humidity}>湿度 {number}%</span>
        </div>
      </div>
    </div>
  );
};

export default TodayForecast;
