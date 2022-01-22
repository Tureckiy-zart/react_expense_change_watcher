import ChartBar from "./ChartBar";
import "../styles/Chart/Chart.css";

const Chart = ({ dataPoints }) => {
  const dataPointsValues = dataPoints.map((i) => i.value);
  const totalMaximum = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {dataPoints.map((item) => (
        <ChartBar
          key={item.id}
          value={item.value}
          maxValue={totalMaximum}
          label={item.label}
        />
      ))}
    </div>
  );
};

export default Chart;
