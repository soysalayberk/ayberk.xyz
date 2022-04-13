import { useEffect, useState } from "react";

import { Line } from "@ant-design/plots";

const Graphs = (): any => {
  const [data, setData] = useState([]);

  useEffect(() => {}, []);

  return (
    <Line
      data={[
        {
          Date: "2010-01",
          scales: 1998,
        },
        {
          Date: "2010-02",
          scales: 1850,
        },
        {
          Date: "2010-03",
          scales: 1720,
        },
        {
          Date: "2010-04",
          scales: 1818,
        },
      ]}
      padding="auto"
      xField="Date"
      yField="scales"
      xAxis={{ tickCount: 5 }}
      appendPadding={50}
    />
  );
};

export default Graphs;
