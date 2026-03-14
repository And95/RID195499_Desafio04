import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";

import CareerData from "./Career-Data";
import {
  CareerContainer,
  Title,
  ChartWrapper,
  ChartContainer,
} from "./Career-Style";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
);

export function Career() {
  const labels = CareerData.map((item) => item.year);

  const data = {
    labels,
    datasets: [
      {
        label: "Minha Jornada Profissional",
        data: CareerData.map((_, index) => index + 1),
        borderColor: "#22d3ee",
        backgroundColor: "rgba(34,211,238,0.2)",
        borderWidth: 3,
        tension: 0.4,

        pointRadius: 6,
        pointHoverRadius: 10,
        pointHitRadius: 30, // aumenta área de toque

        pointBackgroundColor: "#22d3ee",
        pointBorderColor: "#0ea5e9",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        labels: {
          color: "#cbd5f5",
        },
      },

      tooltip: {
        padding: 14,
        caretPadding: 12,
        boxPadding: 6, // aumenta espaço entre o quadrado e o texto

        callbacks: {
          label: function (context) {
            const career = CareerData[context.dataIndex];
            return [career.title, career.company, career.type];
          },
        },
      },
    },

    scales: {
      x: {
        ticks: {
          color: "#94a3b8",
        },
        grid: {
          color: "rgba(148,163,184,0.08)",
        },
      },

      y: {
        display: false,
      },
    },

    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
  };

  return (
    <CareerContainer id="career">
      <Title>Minha Jornada</Title>

      <ChartWrapper>
        <ChartContainer>
          <Line data={data} options={options} />
        </ChartContainer>
      </ChartWrapper>
    </CareerContainer>
  );
}
