import { nanoid } from "nanoid";
import Chart from "../Chart/Chart";

const ExpensesChart = ({ expenses }) => {
  const chartDataPoints = [
    { id: nanoid(), label: "Jan", value: 0, maxValue: 0 },
    { id: nanoid(), label: "Feb", value: 0, maxValue: 0 },
    { id: nanoid(), label: "Mar", value: 0, maxValue: 0 },
    { id: nanoid(), label: "Apr", value: 0, maxValue: 0 },
    { id: nanoid(), label: "May", value: 0, maxValue: 0 },
    { id: nanoid(), label: "Jun", value: 0, maxValue: 0 },
    { id: nanoid(), label: "Jul", value: 0, maxValue: 0 },
    { id: nanoid(), label: "Aug", value: 0, maxValue: 0 },
    { id: nanoid(), label: "Sep", value: 0, maxValue: 0 },
    { id: nanoid(), label: "Oct", value: 0, maxValue: 0 },
    { id: nanoid(), label: "Nov", value: 0, maxValue: 0 },
    { id: nanoid(), label: "Dec", value: 0, maxValue: 0 },
  ];

  expenses.forEach((i, _, arr) => {
    console.log("i", i);
    const month = i.date.getMonth();
    chartDataPoints[month].value += i.amount;
  });
  return <Chart dataPoints={chartDataPoints}/>;
};

export default ExpensesChart;
