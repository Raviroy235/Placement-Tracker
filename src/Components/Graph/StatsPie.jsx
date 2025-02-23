import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Completed", value: 40 },
  { name: "In Progress", value: 30 },
  { name: "Pending", value: 20 },
  { name: "Failed", value: 10 },
];

const COLORS = ["#4CAF50", "#FFA500", "#2196F3", "#FF5733"];

const StatsPie = () => {
  return (
    <div style={{ marginTop: "40px", padding: "20px", textAlign: "center" }}>
      <h2>Stats Pie Chart</h2>
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default StatsPie;
