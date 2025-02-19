import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import Box from '@mui/material/Box';

const skillData = [
  { id: 0, value: 10, label: 'Technical Skills' },
  { id: 1, value: 15, label: 'Soft Skills' },
  { id: 2, value: 20, label: 'Communication' },
];

const colorPalette = ['#875d5d','#ba6645','#e4a000'];

export default function SkillsPieChart() {
  return (
    <Box flexGrow={1}>
      <PieChart
        colors={colorPalette}
        series={[{
          data: skillData,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        }]}
        height={200}
        width={600}
      />
    </Box>
  );
}
