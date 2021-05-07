import { ChartOptions } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { usePokemonDetails } from '../../../hooks';

export const PokemonGrowthChart = () => {
  const { pokemon } = usePokemonDetails();

  const levels =
    pokemon?.species?.growthRate?.levels?.map((level) => level?.level) || [];
  const experience =
    pokemon?.species?.growthRate?.levels?.map((level) => level?.experience) ||
    [];

  const data = {
    labels: levels,
    datasets: [
      {
        label: 'XP Required Per Level',
        data: experience,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };
  return <Line data={data} options={options} type="line" />;
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};
