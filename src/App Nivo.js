import * as React from "react";
import { render } from "react-dom";
import { Pie } from "@nivo/pie";
import { ThemeProvider, SvgWrapper } from "@nivo/core";

const data = [
  {
    id: "phones",
    label: "Phones",
    value: 330,
  },
  {
    id: "chairs",
    label: "Chairs",
    value: 328,
  },
  {
    id: "storage",
    label: "Storage",
    value: 224,
  },
];

const App = () => (
  <div>
    <h2 class="sectiontext">Pie Chart - SubCategories</h2>
    <Pie
      width={500}
      height={300}
      data={data}
      margin={{ top: 20, right: 80, bottom: 80, left: 120 }}
      innerRadius={0.75}
      padAngle={3}
      cornerRadius={0}
      colorBy="id"
      borderWidth={1}
      borderColor="#333333"
      enableArcLabels={false}
      arcLinkLabel={function (e) {
        return e.id + " " + e.value + "" + "k";
      }}
      radialLabelsSkipAngle={10}
      radialLabelsTextXOffset={6}
      radialLabelsTextColor="#333333"
      radialLabelsLinkOffset={0}
      radialLabelsLinkDiagonalLength={16}
      radialLabelsLinkHorizontalLength={24}
      radialLabelsLinkStrokeWidth={1}
      radialLabelsLinkColor="inherit"
      slicesLabelsSkipAngle={10}
      slicesLabelsTextColor="#333333"
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      colors={["#21c3b8", "#fb8340", "#ffd154"]}
      borderColor={{ theme: "background" }}
      theme={{
        tooltip: {
          container: {
            fontSize: "13px",
          },
        },
        labels: {
          text: { color: "#555" },
        },
      }}
    />
  </div>
);

export default App;
