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
  Label,
  LabelList,
} from "recharts";
import data1 from "../data/datasample";

const valueAccessor =
  (attribute) =>
  ({ payload }) => {
    return payload[attribute];
  };
const StackedBars = () => {
  return (
    <div style={{ width: "95%", height: 400 }}>
      <h2 class="sectiontext">Stacked Bars</h2>
      <ResponsiveContainer width="90%" aspect={3}>
        <BarChart
          width={300}
          height={300}
          data={data1}
          margin={{
            top: 0,
            right: 20,
            left: 20,
            bottom: 5,
          }}
          stroke="#333333"
        >
          <CartesianGrid stroke="#f5f5f5" horizontal="true" vertical="" />
          <XAxis
            dataKey="name"
            fontSize={13}
            stroke="#836a71"
            tickLine={false}
            padding={{ left: 30 }}
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
            height={75}
            width={350}
            iconType="square"
            align="left"
          />
          <Bar dataKey="Consumer" stackId="a" fill="#21c3b8">
            <LabelList
              valueAccessor={valueAccessor("Consumer")}
              fontSize={11}
              fontWeight="lighter"
            />
            ;
          </Bar>
          <LabelList valueAccessor={valueAccessor("Consumer")} />;
          <Bar dataKey="Corporate" stackId="a" fill="#fb8340">
            <LabelList
              valueAccessor={valueAccessor("Corporate")}
              fontSize={11}
              fontWeight="lighter"
            />
            ;
          </Bar>
          <Bar dataKey="Home_Office" stackId="a" fill="#ffd256">
            <LabelList
              valueAccessor={valueAccessor("Home_Office")}
              fontSize={11}
              fontWeight="lighter"
            ></LabelList>
            ;
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default StackedBars;
