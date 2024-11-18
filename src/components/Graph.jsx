import React from "react";
import { useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart";

function Graph() {
  const [count, setCount] = useState(0);

  const start = Math.floor(new Date().getTime() / 1000);

  const data = [start];

  let value = 0;

  const values = [value];

  for (let i = 0; i < (60 * 24) / 30; i++) {
    data.push(start + 60 * i * 30);
    value += Math.round(Math.random() * 2 - 1);
    values.push(value);
  }

  return (
    <>
      <LineChart
        xAxis={[
          {
            data,
            valueFormatter: (value, context) => {
              const iso = new Date(value * 1000).toISOString();
              const date = iso.substring(0, 10);
              const time = iso.substring(11, 19);
              return context.location === "tick"
                ? `${date}\n${time}`
                : `${date} ${time}`;
            },
          },
        ]}
        series={[
          {
            data: values,
          },
        ]}
        width={1000}
        height={300}
      />
    </>
  );
}

export default Graph;
