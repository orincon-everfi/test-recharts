import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import data1 from "../data/datasample";

const StackedBars = () => {
  return (
    <div style={{ width: "95%", height: 400 }}>
      <h2 class="sectiontext">Stacked Bars</h2>
      <ResponsiveContainer width="90%" aspect={3}>
        <BarChart
          width={500}
          height={300}
          data={data1}
          margin={{
            top: 0,
            right: 20,
            left: 20,
            bottom: 5,
          }}
          stroke="#333333"
          LabelList
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
            height={40}
            width={350}
            iconType="square"
            align="left"
          />
          <Bar
            dataKey="Consumer"
            stackId="a"
            fill="#21c3b8"
            label={{
              fill: "#000000",
              fontSize: 11,
              stroke: "#333333",
              fontWeight: "lighter",
            }}
          />
          <Bar
            dataKey="Corporate"
            stackId="a"
            fill="#fb8340"
            label={{
              fill: "#000000",
              fontSize: 11,
              stroke: "#333333",
              fontWeight: "lighter",
            }}
          />
          <Bar
            dataKey="Home_Office"
            stackId="a"
            fill="#ffd256"
            label={{
              fill: "#000000",
              fontSize: 11,
              stroke: "#333333",
              fontWeight: "lighter",
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default StackedBars;
