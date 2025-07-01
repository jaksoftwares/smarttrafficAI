"use client";

import { useEffect, useRef, useState } from "react";

const screenWidth = 1400;
const screenHeight = 800;

const signalCoords = [
  { x: 530, y: 230 },
  { x: 810, y: 230 },
  { x: 810, y: 570 },
  { x: 530, y: 570 },
];

const signalTimerCoords = [
  { x: 530, y: 210 },
  { x: 810, y: 210 },
  { x: 810, y: 550 },
  { x: 530, y: 550 },
];

const vehicleCountCoords = [
  { x: 480, y: 210 },
  { x: 880, y: 210 },
  { x: 880, y: 550 },
  { x: 480, y: 550 },
];

type Direction = "right" | "down" | "left" | "up";

const defaultRed = 150;
const defaultYellow = 5;
const defaultGreen = 20;

const simTime = 300;

interface Signal {
  red: number;
  yellow: number;
  green: number;
  totalGreenTime: number;
  signalText: string | number;
}

interface Vehicle {
  x: number;
  y: number;
  speed: number;
  direction: Direction;
  willTurn: boolean;
  turned: boolean;
  rotateAngle: number;
  image: HTMLImageElement;
}

export default function SimulationPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [, setTimeElapsed] = useState(0);
  const [signals, setSignals] = useState<Signal[]>([]);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  const background = useRef<HTMLImageElement>(null);
  const redSignal = useRef<HTMLImageElement>(null);
  const yellowSignal = useRef<HTMLImageElement>(null);
  const greenSignal = useRef<HTMLImageElement>(null);

  const [currentGreen] = useState(0);
  const [currentYellow] = useState(0);

  // Load images once
  useEffect(() => {
    background.current = new Image();
    background.current.src = "/images/mod_int.png";

    redSignal.current = new Image();
    redSignal.current.src = "/images/signals/red.png";

    yellowSignal.current = new Image();
    yellowSignal.current.src = "/images/signals/yellow.png";

    greenSignal.current = new Image();
    greenSignal.current.src = "/images/signals/green.png";
  }, []);

  // Initialize signals
  useEffect(() => {
    const initialSignals: Signal[] = [
      { red: 0, yellow: defaultYellow, green: defaultGreen, totalGreenTime: 0, signalText: "30" },
      { red: defaultRed, yellow: defaultYellow, green: defaultGreen, totalGreenTime: 0, signalText: "30" },
      { red: defaultRed, yellow: defaultYellow, green: defaultGreen, totalGreenTime: 0, signalText: "30" },
      { red: defaultRed, yellow: defaultYellow, green: defaultGreen, totalGreenTime: 0, signalText: "30" },
    ];
    setSignals(initialSignals);
  }, []);

  // Game loop
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();
    let localTimeElapsed = 0;
    let simEnded = false;

    function draw(ctx: CanvasRenderingContext2D) {
      if (!background.current || !redSignal.current || !yellowSignal.current || !greenSignal.current) return;

      ctx.clearRect(0, 0, screenWidth, screenHeight);
      ctx.drawImage(background.current, 0, 0, screenWidth, screenHeight);

      signals.forEach((sig, i) => {
        // Draw signals
        if (i === currentGreen) {
          if (currentYellow) {
            ctx.drawImage(yellowSignal.current!, signalCoords[i].x, signalCoords[i].y);
          } else {
            ctx.drawImage(greenSignal.current!, signalCoords[i].x, signalCoords[i].y);
          }
        } else {
          ctx.drawImage(redSignal.current!, signalCoords[i].x, signalCoords[i].y);
        }

        // Draw signal text
        ctx.fillStyle = "white";
        ctx.font = "20px sans-serif";
        ctx.fillText(
          String(sig.signalText),
          signalTimerCoords[i].x,
          signalTimerCoords[i].y
        );

        // Vehicle count
        ctx.fillStyle = "black";
        ctx.fillText(
          `V: ${sig.totalGreenTime}`,
          vehicleCountCoords[i].x,
          vehicleCountCoords[i].y
        );
      });

      // Draw vehicles
      vehicles.forEach((v) => {
        ctx.drawImage(v.image, v.x, v.y, 30, 30); // size simplified
      });

      // Draw time elapsed
      ctx.fillStyle = "black";
      ctx.fillText(`Time Elapsed: ${localTimeElapsed}`, 1100, 50);
    }

    function update(deltaTime: number) {
      // Update vehicles (basic move right for example)
      setVehicles((prev) =>
        prev.map((v) => ({
          ...v,
          x: v.x + v.speed * (deltaTime / 16),
        }))
      );

      // Update signals
      setSignals((prev) =>
        prev.map((s, i) => {
          if (i === currentGreen) {
            if (currentYellow === 0) {
              return { ...s, green: s.green - 1, totalGreenTime: s.totalGreenTime + 1 };
            } else {
              return { ...s, yellow: s.yellow - 1 };
            }
          } else {
            return { ...s, red: s.red - 1 };
          }
        })
      );
    }

    function loop(time: number) {
      if (simEnded) return;
      const deltaTime = time - lastTime;
      lastTime = time;

      const ctx = canvasRef.current?.getContext("2d");
      if (ctx) {
        draw(ctx);
        update(deltaTime);
      }

      localTimeElapsed += deltaTime / 1000;
      setTimeElapsed(Math.floor(localTimeElapsed));

      if (localTimeElapsed >= simTime) {
        simEnded = true;
        console.log("Simulation ended");
        return;
      }

      animationFrameId = requestAnimationFrame(loop);
    }

    animationFrameId = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(animationFrameId);
  }, [signals, vehicles, currentGreen, currentYellow]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <canvas
        ref={canvasRef}
        width={screenWidth}
        height={screenHeight}
        className="border border-black"
      />
    </div>
  );
}














































// 'use client';

// import { useState, useEffect } from 'react';
// import { Button } from '@/components/ui/button';
// import { Card } from '@/components/ui/card';

// export default function AdaptiveControl() {
//   // Example states for adaptive signal control data
//   const [trafficFlow, setTrafficFlow] = useState<number | null>(null);
//   const [avgWaitTime, setAvgWaitTime] = useState<number | null>(null);
//   const [signalStatus, setSignalStatus] = useState<'Adaptive' | 'Fixed' | 'Offline'>('Adaptive');
//   const [loading, setLoading] = useState(false);

//   // Simulate fetching control data
//   useEffect(() => {
//     setLoading(true);

//     // Placeholder: Replace with real API call
//     setTimeout(() => {
//       setTrafficFlow(1200);       // vehicles per hour
//       setAvgWaitTime(35);         // seconds
//       setSignalStatus('Adaptive');
//       setLoading(false);
//     }, 1000);
//   }, []);

//   // Example handler to toggle signal mode (Adaptive / Fixed)
//   const toggleSignalMode = () => {
//     setSignalStatus((prev) => (prev === 'Adaptive' ? 'Fixed' : 'Adaptive'));
//   };

//   return (
//     <div className="p-6 space-y-6 min-h-full bg-gray-900 text-white">
//       <h1 className="text-3xl font-bold mb-2">Adaptive Signal Control Dashboard</h1>

//       <p className="text-gray-300 max-w-xl">
//         Adaptive signal control optimizes traffic light timing in real-time based on traffic flow data,
//         reducing congestion and improving traffic efficiency across intersections.
//       </p>

//       {/* Metrics cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
//         <Card className="bg-gradient-to-r from-green-700 to-green-500 p-6 text-center">
//           <p className="text-sm opacity-80">Current Traffic Flow</p>
//           <p className="text-3xl font-semibold">{loading ? 'Loading...' : `${trafficFlow} vehicles/hr`}</p>
//         </Card>

//         <Card className="bg-gradient-to-r from-blue-700 to-blue-500 p-6 text-center">
//           <p className="text-sm opacity-80">Average Wait Time</p>
//           <p className="text-3xl font-semibold">{loading ? 'Loading...' : `${avgWaitTime} seconds`}</p>
//         </Card>

//         <Card className="bg-gradient-to-r from-purple-700 to-purple-500 p-6 text-center">
//           <p className="text-sm opacity-80">Signal Mode</p>
//           <p className="text-3xl font-semibold">{signalStatus}</p>
//           <Button
//             onClick={toggleSignalMode}
//             variant="secondary"
//             className="mt-4"
//             disabled={loading}
//             aria-label="Toggle Signal Mode"
//           >
//             Toggle to {signalStatus === 'Adaptive' ? 'Fixed' : 'Adaptive'}
//           </Button>
//         </Card>
//       </div>

//       {/* Traffic Signal Map Placeholder */}
//       <section className="mt-8">
//         <h2 className="text-2xl font-semibold mb-4">Traffic Signal Status Map</h2>
//         <div className="w-full h-64 bg-gray-800 rounded-md flex items-center justify-center text-gray-500 italic">
//           {/* Replace with actual map or visualization component */}
//           Traffic signal map visualization coming soon...
//         </div>
//       </section>

//       {/* Controls / Settings */}
//       <section className="mt-8 max-w-xl">
//         <h2 className="text-2xl font-semibold mb-4">Adaptive Control Settings</h2>
//         <p className="mb-4 text-gray-300">
//           Adjust the parameters of the adaptive signal control system to optimize traffic flow for your area.
//         </p>
//         <Button
//           onClick={() => alert('Settings panel coming soon!')}
//           disabled={loading}
//           aria-label="Open Adaptive Control Settings"
//         >
//           Open Settings
//         </Button>
//       </section>
//     </div>
//   );
// }
