'use client';

import { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import annotationPlugin from 'chartjs-plugin-annotation';

Chart.register(annotationPlugin);

const API_BASE_URL = 'http://localhost:8000'; // Change to your Django backend base URL

export default function CongestionPage() {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);

  const [days, setDays] = useState<string[]>([]);
  const [, setDefaultDay] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [checkpointName, setCheckpointName] = useState('Checkpoint');
  const [checkpointCapacity, setCheckpointCapacity] = useState(40);

  // Fetch dropdown metadata + default day
  useEffect(() => {
    fetch(`${API_BASE_URL}/congestionTrends/metadata/`)
      .then(res => res.json())
      .then(data => {
        setDays(data.days || []);
        setDefaultDay(data.default_day || '');
        setSelectedDay(data.default_day || '');
        setCheckpointName(data.checkpoint_name || 'Checkpoint');
        setCheckpointCapacity(data.checkpoint_capacity || 40);
      })
      .catch(err => console.error('Error fetching metadata:', err));
  }, []);

  // Fetch data when selectedDay changes
  useEffect(() => {
    if (!selectedDay) return;

    fetch(`${API_BASE_URL}/congestionTrends/average_hourly_data/?day=${selectedDay}`)
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          console.error('Server error:', data.error);
          renderChart([], []);
        } else {
          renderChart(data.hours, data.averages);
        }
      })
      .catch(err => console.error('Error fetching chart data:', err));
  }, [selectedDay]);

  const formatHour = (hour: string) => {
    const intHour = parseInt(hour, 10);
    if (intHour === 0) return '12:00 AM';
    if (intHour < 12) return `${intHour}:00 AM`;
    if (intHour === 12) return '12:00 PM';
    return `${intHour - 12}:00 PM`;
  };

  const renderChart = (labels: string[], data: number[]) => {
    const ctx = chartRef.current?.getContext('2d');
    if (!ctx) return;

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const formattedLabels = labels.map(formatHour);

    const backgroundColors = data.map(count => {
      if (count < checkpointCapacity) return 'rgba(75, 192, 192, 0.7)';
      else if (count < checkpointCapacity + 20) return 'rgba(255, 206, 86, 0.7)';
      else return 'rgba(255, 99, 132, 0.7)';
    });

    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: formattedLabels,
        datasets: [
          {
            label: `Hourly Congestion (Capacity: ${checkpointCapacity})`,
            data,
            backgroundColor: backgroundColors,
            borderColor: 'rgba(0,0,0,0.9)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            title: { display: true, text: 'Hour' },
          },
          y: {
            beginAtZero: true,
            title: { display: true, text: 'Vehicles Count' },
          },
        },
        plugins: {
          legend: { display: true },
          tooltip: {
            callbacks: {
              label: context => `${context.raw} vehicles`,
            },
          },
          annotation: {
            annotations: {
              thresholdLine: {
                type: 'line',
                yMin: checkpointCapacity,
                yMax: checkpointCapacity,
                borderColor: 'rgba(255, 0, 0, 0.8)',
                borderWidth: 2,
                label: {
                  content: `Threshold: ${checkpointCapacity}`,
                  enabled: true,
                  position: 'end',
                  backgroundColor: 'rgba(255, 0, 0, 0.8)',
                  color: 'white',
                  font: { size: 12 },
                },
              },
            },
          },
        },
      },
    });
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex flex-wrap justify-between items-center mb-4">
        <h3 className="text-xl font-bold">
          {checkpointName} - Capacity: {checkpointCapacity}
        </h3>
        <select
          value={selectedDay}
          onChange={e => setSelectedDay(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded"
        >
          {days.map(day => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <h5 className="text-lg">
          Today's Date: <span className="font-semibold">{selectedDay}</span>
        </h5>
      </div>

      <canvas ref={chartRef} height={150}></canvas>
    </div>
  );
}


// "use client";

// import CongestionTrends from './CongestionTrends';

// export default function Page() {
//   return <CongestionTrends />;
// }