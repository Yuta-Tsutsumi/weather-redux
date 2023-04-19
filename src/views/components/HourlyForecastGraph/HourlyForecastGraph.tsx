import React, { PureComponent } from "react";
import styles from "./HourlyForecastGraph.module.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "10時",
    気温: 21,
  },
  {
    name: "11時",
    気温: 18,
  },
  {
    name: "12時",
    気温: 15,
  },
  {
    name: "13時",
    気温: 20,
  },
  {
    name: "14時",
    気温: 9,
  },
  {
    name: "15時",
    気温: 15,
  },
  {
    name: "16時",
    気温: 23,
  },
];

const HourlyForecastGraph: React.VFC = () => {
  return (
    <div>
      <div className={styles.time}>1時間ごとの予測</div>
      <div className={styles.HourlyForecastGraph}>
        <ResponsiveContainer width={500} height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              label={{ value: "時刻", position: "bottom" }}
            />
            <YAxis label={{ value: "気温", angle: -90, position: "left" }} />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <Line
              type="monotone"
              dataKey="気温"
              stroke="#48484a"
              activeDot={{ r: 8 }}
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HourlyForecastGraph;
