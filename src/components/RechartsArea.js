import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import data1 from "../data/datasample";

const RechartsArea = () => {
  return (
    <div style={{ width: "95%", height: 400 }}>
      <h2 class="sectiontext">Area Chart</h2>
      <ResponsiveContainer width="90%" aspect={3}>
        <AreaChart
          width={300}
          height={300}
          data={data1}
          margin={{
            top: 0,
            right: 20,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" horizontal="true" vertical="" />
          <XAxis
            dataKey="name"
            fontSize={13}
            stroke="#836a71"
            tickLine={false}
            padding={{ left: 40 }}
          />
          <YAxis fontSize={13} stroke="#836a71" tickLine={false} />
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
            cursor={false}
          />
          <Legend
            verticalAlign="top"
            height={60}
            width={350}
            iconType="square"
            align="left"
          />
          <Area
            type="linear"
            dataKey="Consumer"
            stackId="a"
            stroke="#21c3b8"
            fill="#21c3b8"
          />

          <Area
            type="linear"
            dataKey="Corporate"
            stackId="a"
            stroke="#fb8340"
            fill="#fb8340"
          />

          <Area
            type="linear"
            name="Home Office"
            dataKey="Home_Office"
            stackId="a"
            stroke="#ffd256"
            fill="#ffd256"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
export default RechartsArea;
