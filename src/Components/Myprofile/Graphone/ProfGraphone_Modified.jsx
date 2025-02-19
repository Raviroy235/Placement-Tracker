import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { styled } from '@mui/material/styles';

const chartData = [
  { value: 5 },
  { value: 10 },
  { value: 15 },
  { value: 20 },
];

const dimensions = {
  width: 350,
  height: 175,
};
const colors = ['#999', '#211B19', '#183882', '#396B8B'];

const StyledChart = styled(PieChart)({});

export default function ProfilePieChart() {
  return (
    <StyledChart colors={colors} series={[{ data: chartData, innerRadius: 70 }]} {...dimensions}>
      <text x="50%" y="50%" textAnchor="middle" fontSize="15">
        Profile Analysis
      </text>
    </StyledChart>
  );
}
