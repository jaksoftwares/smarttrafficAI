"use client"
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function HourlyCongestion() {
  const hourlyData = {
    labels: ['0-1', '1-2', '2-3', '3-4', '4-5'],
    datasets: [
      {
        label: 'Hourly Congestion Level',
        data: [30, 40, 50, 60, 70],
        backgroundColor: 'rgb(255, 99, 132)',
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Hourly Congestion Trends</h2>
      <div className="mt-6">
        <Bar data={hourlyData} />
      </div>
    </div>
  );
}
