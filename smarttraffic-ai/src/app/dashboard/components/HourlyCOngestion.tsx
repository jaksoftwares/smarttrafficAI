"use client";

import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function HourlyCongestion() {
  const [congestionData, setCongestionData] = useState<number[]>(
    Array(24).fill(0)
  );

  useEffect(() => {
    const handleTrafficUpdate = (event: CustomEvent<{ congestionLevel: number }>) => {
      const currentHour = new Date().getHours();
      
      setCongestionData(prev => {
        const newData = [...prev];
        newData[currentHour] = (newData[currentHour] + event.detail.congestionLevel) / 2;
        return newData;
      });
    };

    window.addEventListener('trafficUpdate', handleTrafficUpdate as EventListener);
    return () => {
      window.removeEventListener('trafficUpdate', handleTrafficUpdate as EventListener);
    };
  }, []);

  const hourlyData = {
    labels: Array.from({ length: 24 }, (_, i) => `${i}-${i + 1}`),
    datasets: [
      {
        label: 'Hourly Congestion Level',
        data: congestionData,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Real-time Hourly Congestion Levels',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: 'Congestion Level (%)'
        }
      }
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
        Hourly Congestion Trends
      </h2>
      <div className="mt-6">
        <Bar data={hourlyData} options={options} />
      </div>
    </div>
  );
}
