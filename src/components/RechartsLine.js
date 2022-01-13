import React from "react";
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
import data1 from "../data/dataline1";

const RechartsLine = () => {
  return (
    <div style={{ width: "95%", height: 400 }}>
      <h2 class="sectiontext">Line Chart1 (Discrete)</h2>
      <ResponsiveContainer width="90%" aspect={3}>
        <LineChart
          width={500}
          height={300}
          data={data1}
          margin={{
            top: 0,
            right: 30,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" horizontal="true" vertical="" />
          <XAxis dataKey="name" fontSize={13} stroke="#836a71" />
          <YAxis fontSize={13} stroke="#836a71" />
          <Tooltip
            contentStyle={{
              color: "#836a71",
              fontSize: 15,
              fontWeight: "bolder",
            }}
            itemStyle={{
              color: "#836a71",
              fontSize: 13,
              fontWeight: "lighter",
            }}
            cursor=""
          />
          <Legend
            verticalAlign="top"
            height={50}
            width={350}
            iconType="square"
          />
          <Line
            type="line"
            dot=""
            dataKey="Consumer"
            stroke="#21c3b8"
            strokeWidth={2}
            activeDot={{ r: 6 }}
          />
          <Line
            type="line"
            dot=""
            dataKey="Corporate"
            stroke="#fb8340"
            strokeWidth={2}
            activeDot={{ r: 6 }}
          />
          <Line
            type="line"
            dot=""
            dataKey="Home_Office"
            stroke="#ffd256"
            strokeWidth={2}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
export default RechartsLine;
