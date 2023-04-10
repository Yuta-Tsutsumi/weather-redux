import React from "react";
import styles from "./WeeklyForecast.module.scss";

const WeeklyForecast: React.VFC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>7日間の予測</div>
      <div className={styles.date}>
        <p>4月1日　　　0/0℃</p>
        <p>4月2日　　　0/0℃</p>
        <p>4月3日　　　0/0℃</p>
        <p>4月4日　　　0/0℃</p>
        <p>4月5日　　　0/0℃</p>
        <p>4月6日　　　0/0℃</p>
        <p>4月7日　　　0/0℃</p>
      </div>
    </div>
  );
};
export default WeeklyForecast;
