import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";

const LineChart = ({ historicalData }) => {
  const [data, setData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    let dataCopy = [["Date", "Prices"]];

    if (historicalData?.prices) {
      historicalData.prices.forEach((item) => {
        dataCopy.push([new Date(item[0]).toLocaleDateString(), item[1]]);
      });
      setData(dataCopy);
    }
  }, [historicalData]);

  return (
    <Chart
      chartType="LineChart"
      data={data}
      options={{
        hAxis: {
          title: "Date",
          textStyle: { color: "#333" },
        },
        vAxis: {
          title: "Price",
          textStyle: { color: "#333" },
        },
        legend: "none",
        curveType: "function",
        lineWidth: 3,
        colors: ["#4500c6"],
        backgroundColor: "transparent",
      }}
      height="100%"
      legendToggle
    />
  );
};

export default LineChart;
