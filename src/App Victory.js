import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryContainer,
  VictoryLabel,
} from "victory";

const sampleData = [
  { x: "Alabama", y: 4 },
  { x: "Arkansas", y: 3 },
  { x: "District of Columbia", y: 1 },
  { x: "Georgia", y: 11 },
];

function App() {
  return (
    <>
      <h2 class="sectiontext">Bar Chart</h2>
      <VictoryChart
        horizontal
        height={170}
        width={700}
        domainPadding={15}
        alignment="center"
        padding={{ left: 90, top: 0, bottom: 60, right: 90 }}
        standalone={true}
      >
        <VictoryAxis
          tickFormat={function (tick) {
            return tick;
          }}
          crossAxis={false}
          style={{
            axis: { stroke: "#cdcdcd" },
            grid: { stroke: "" },
            tickLabels: {
              fontSize: 9,
              fill: "#333333",
              fontWeight: "normal",
              alignment: "left",
            },
          }}
          orientation="left"
        />
        <VictoryAxis
          dependentAxis
          label="Profit"
          tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          style={{
            axisLabel: { fontSize: 11, padding: 25 },
            axis: { stroke: "#cdcdcd" },
            grid: { stroke: "" },
            tickLabels: {
              fontSize: 9,
              fill: "#333333",
              fontWeight: "normal",
              alignment: "left",
            },
          }}
        />

        <VictoryBar
          labelComponent={
            <VictoryLabel
              style={{
                fontSize: 9,
              }}
            />
          }
          data={sampleData}
          labels={({ datum }) => `${Math.abs(datum.y)}% Profit`}
          animate
          categories={{
            x: ["Alabama", "Arkansas", "District of Columbia", "Georgia"],
          }}
          horizontal
          barWidth={12}
          style={{
            data: { fill: "#21c3b8" },
          }}
          alignment="middle"
          data={sampleData}
        />
      </VictoryChart>
    </>
  );
}

export default App;
