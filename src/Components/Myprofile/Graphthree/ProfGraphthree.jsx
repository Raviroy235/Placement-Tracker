import * as React from 'react';
import { CustomPieChart } from '@mui/x-charts/CustomPieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

const data = [
  { value: 5 },
  { value: 10 },
  { value: 15 },
  { value: 20 },
];

const size = {
  width: 350,
  height: 175,
};
const pl = ['rgb(154, 154, 154)', 'rgb(33, 27, 25)', 'rgb(24, 56, 130)', 'rgb(57, 105, 139)'];

const StyledCustomPieChart = styled(CustomPieChart)({});

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 15,
}));

const Container = styled('div')({
  marginLeft: '-5.5vw',
  marginTop: '0vh',
});

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function CustomPieChartWithCenterLabel() {
  return (
    <Container>
      <StyledCustomPieChart colors={pl} series={[{ data, innerRadius: 70 }]} {...size}>
        <PieCenterLabel>Communication</PieCenterLabel>
      </StyledCustomPieChart>
    </Container>
  );
}
