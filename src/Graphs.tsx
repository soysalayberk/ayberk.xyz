import { useEffect, useState } from "react";

import { Line } from "@ant-design/plots";

const Graphs = (): any => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };

  return (
    <Line
      data={data}
      padding="auto"
      xField="Date"
      yField="scales"
      xAxis={{ tickCount: 5 }}
      appendPadding={50}
    />
  );
};

export default Graphs;
