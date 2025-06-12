"use client";

import { useEffect, useRef, useState } from 'react';

interface Vehicle {
  id: string;
  type: 'car' | 'bus' | 'truck';
  position: { x: number; y: number };
  direction: 'north' | 'south' | 'east' | 'west';
  speed: number;
  turning: 'straight' | 'left' | 'right' | null;
  waitingTime: number;
}

interface TrafficLight {
  id: string;
  position: { x: number; y: number };
  states: {
    red: boolean;
    yellow: boolean;
    green: boolean;
    greenArrow: boolean;
  };
  timer: number;
}

export default function TrafficSimulation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [, setTimeElapsed] = useState(0);
  const [trafficData, setTrafficData] = useState({
    congestionLevel: 0,
    vehicleCount: { cars: 0, buses: 0, trucks: 0 },
    averageWaitTime: 0
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 800;
    canvas.height = 600;

    // Traffic light system
    const lights: TrafficLight[] = [
      {
        id: 'north',
        position: { x: 330, y: 230 },
        states: { red: true, yellow: false, green: false, greenArrow: false },
        timer: 30
      },
      {
        id: 'south',
        position: { x: 470, y: 370 },
        states: { red: true, yellow: false, green: false, greenArrow: false },
        timer: 30
      },
      {
        id: 'east',
        position: { x: 330, y: 370 },
        states: { red: false, yellow: false, green: true, greenArrow: true },
        timer: 30
      },
      {
        id: 'west',
        position: { x: 470, y: 230 },
        states: { red: false, yellow: false, green: true, greenArrow: true },
        timer: 30
      }
    ];

    let vehicles: Vehicle[] = [];
    const vehicleSize = {
      car: { width: 20, height: 30 },
      bus: { width: 25, height: 45 },
      truck: { width: 25, height: 40 }
    };

    // Single collision detection function for rectangular vehicles
    const checkCollision = (
      pos1: { x: number; y: number }, 
      width1: number, 
      height1: number,
      pos2: { x: number; y: number }, 
      width2: number, 
      height2: number
    ) => {
      return !(pos1.x + width1 < pos2.x || 
               pos2.x + width2 < pos1.x || 
               pos1.y + height1 < pos2.y ||
               pos2.y + height2 < pos1.y);
    };

    // LANE POSITIONS (centered for each direction, away from partition line)
    const LANE_POSITIONS = {
      north: 385, // right lane of vertical road (northbound)
      south: 415, // left lane of vertical road (southbound)
      east: 285,  // right lane of horizontal road (eastbound)
      west: 315   // left lane of horizontal road (westbound)
    };
    
    // SPAWN VEHICLES IN LANE
    const spawnVehicle = () => {
      const types = ['car', 'bus', 'truck'];
      const directions = ['north', 'south', 'east', 'west'];
      const type = types[Math.floor(Math.random() * types.length)] as Vehicle['type'];
      const direction = directions[Math.floor(Math.random() * directions.length)] as 'north' | 'south' | 'east' | 'west';
      const turns = ['straight', 'left', 'right'];
      const turning = turns[Math.floor(Math.random() * turns.length)] as 'straight' | 'left' | 'right';
    
      let position;
      switch(direction) {
        case 'north': position = { x: LANE_POSITIONS.north, y: canvas.height }; break;
        case 'south': position = { x: LANE_POSITIONS.south, y: 0 }; break;
        case 'east': position = { x: 0, y: LANE_POSITIONS.east }; break;
        case 'west': position = { x: canvas.width, y: LANE_POSITIONS.west }; break;
      }
    
      // Check if spawn position is clear
      const canSpawn = !vehicles.some(v => 
        checkCollision(
          position, 
          vehicleSize[type].width,
          vehicleSize[type].height,
          v.position, 
          vehicleSize[v.type].width,
          vehicleSize[v.type].height
        )
      );

      if (canSpawn && vehicles.length < 30) {
        vehicles.push({
          id: `${type}-${Date.now()}`,
          type,
          position,
          direction,
          speed: type === 'car' ? 2 : type === 'bus' ? 1.5 : 1.2,
          turning,
          waitingTime: 0
        });
      }
    };

    // Draw the intersection
    const drawIntersection = () => {
      if (!ctx) return;
      
      // Draw the main roads
      ctx.fillStyle = '#333333';
      
      // Horizontal road
      ctx.fillRect(0, 250, canvas.width, 100);
      
      // Vertical road
      ctx.fillRect(350, 0, 100, canvas.height);
      
      // Draw road markings
      ctx.strokeStyle = '#FFFFFF';
      ctx.setLineDash([10, 10]); // Dashed line
      
      // Horizontal road center line
      ctx.beginPath();
      ctx.moveTo(0, 300);
      ctx.lineTo(canvas.width, 300);
      ctx.stroke();
      
      // Vertical road center line
      ctx.beginPath();
      ctx.moveTo(400, 0);
      ctx.lineTo(400, canvas.height);
      ctx.stroke();
      
      // Reset line dash
      ctx.setLineDash([]);
    };

    // Draw traffic lights
    const drawTrafficLights = () => {
      lights.forEach(light => {
        const size = 10;
        const spacing = 15;
        
        // Red light
        ctx.beginPath();
        ctx.arc(light.position.x, light.position.y - spacing, size, 0, 2 * Math.PI);
        ctx.fillStyle = light.states.red ? '#FF0000' : '#440000';
        ctx.fill();
        
        // Yellow light
        ctx.beginPath();
        ctx.arc(light.position.x, light.position.y, size, 0, 2 * Math.PI);
        ctx.fillStyle = light.states.yellow ? '#FFFF00' : '#444400';
        ctx.fill();
        
        // Green light
        ctx.beginPath();
        ctx.arc(light.position.x, light.position.y + spacing, size, 0, 2 * Math.PI);
        ctx.fillStyle = light.states.green ? '#00FF00' : '#004400';
        ctx.fill();
        
        // Green arrow
        if (light.states.greenArrow) {
          ctx.beginPath();
          ctx.moveTo(light.position.x + 15, light.position.y);
          ctx.lineTo(light.position.x + 25, light.position.y + 10);
          ctx.lineTo(light.position.x + 15, light.position.y + 20);
          ctx.strokeStyle = '#00FF00';
          ctx.stroke();
        }
      });
    };

    // Draw vehicles
    const drawVehicles = () => {
      vehicles.forEach(vehicle => {
        // Determine the correct dimensions based on vehicle direction
        let width, height;
        if (vehicle.direction === 'north' || vehicle.direction === 'south') {
          width = vehicleSize[vehicle.type].width;
          height = vehicleSize[vehicle.type].height;
        } else {
          width = vehicleSize[vehicle.type].height;
          height = vehicleSize[vehicle.type].width;
        }

        ctx.fillStyle = vehicle.type === 'car' ? '#FF0000' : 
                       vehicle.type === 'bus' ? '#FFFF00' : '#0000FF';
        ctx.fillRect(
          vehicle.position.x - width/2, 
          vehicle.position.y - height/2, 
          width,
          height
        );
      });
    };

    // SMART TRAFFIC LIGHT LOGIC (only one direction green at a time, congestion-based)
    let greenDirection: 'NS' | 'EW' = 'NS'; // start with north-south green
    let greenTimer = 60; // initial green duration
    const MIN_GREEN = 40;
    const MAX_GREEN = 120;

    const updateTrafficLights = () => {
      // Count waiting vehicles for each direction
      const northSouthWaiting = vehicles.filter(v =>
        (v.direction === 'north' || v.direction === 'south') &&
        v.waitingTime > 2
      ).length;
      const eastWestWaiting = vehicles.filter(v =>
        (v.direction === 'east' || v.direction === 'west') &&
        v.waitingTime > 2
      ).length;

      // ML-inspired: adjust green time based on congestion
      if (greenTimer <= 0 ||
          (greenDirection === 'NS' && eastWestWaiting > northSouthWaiting + 3) ||
          (greenDirection === 'EW' && northSouthWaiting > eastWestWaiting + 3)
      ) {
        // Switch direction
        greenDirection = greenDirection === 'NS' ? 'EW' : 'NS';
        // Set green time proportional to congestion (with bounds)
        const waiting = greenDirection === 'NS' ? northSouthWaiting : eastWestWaiting;
        greenTimer = Math.max(MIN_GREEN, Math.min(MAX_GREEN, 40 + waiting * 10));
      }

      // Set light states
      lights.forEach(light => {
        if (greenDirection === 'NS' && (light.id === 'north' || light.id === 'south')) {
          light.states.green = true;
          light.states.red = false;
          light.states.yellow = false;
          light.states.greenArrow = true;
        } else if (greenDirection === 'EW' && (light.id === 'east' || light.id === 'west')) {
          light.states.green = true;
          light.states.red = false;
          light.states.yellow = false;
          light.states.greenArrow = true;
        } else {
          light.states.green = false;
          light.states.red = true;
          light.states.yellow = false;
          light.states.greenArrow = false;
        }
      });

      greenTimer--;
    };

    // VEHICLE MOVEMENT: stay in lane, stop at red, don't overlap
    const updateVehicles = () => {
      vehicles = vehicles.filter(vehicle => {
        let canMove = true;
        const nextPos = { ...vehicle.position };

        // Move in lane
        switch(vehicle.direction) {
          case 'north': nextPos.y -= vehicle.speed; break;
          case 'south': nextPos.y += vehicle.speed; break;
          case 'east':  nextPos.x += vehicle.speed; break;
          case 'west':  nextPos.x -= vehicle.speed; break;
        }

        // Turning logic (keep in lane after turn)
        // ... (as before, but set x/y to LANE_POSITIONS after turn) ...

        // Stop at red light
        const light = lights.find(l => l.id === vehicle.direction);
        if (light && light.states.red) {
          // Stop at stop line
          const stopLines = { north: 270, south: 330, east: 370, west: 430 };
          const stopLine = stopLines[vehicle.direction];
          const dist = vehicle.direction === 'north' ? vehicle.position.y - stopLine
                      : vehicle.direction === 'south' ? stopLine - vehicle.position.y
                      : vehicle.direction === 'east' ? stopLine - vehicle.position.x
                      : vehicle.position.x - stopLine;
          if (dist < 15 && dist > -15) {
            canMove = false;
            vehicle.waitingTime++;
          }
        }

        // Prevent overlapping: check for vehicle ahead in same lane
        const buffer = 5;
        vehicles.forEach(other => {
          if (other.id !== vehicle.id && other.direction === vehicle.direction) {
            if (vehicle.direction === 'north' && other.position.x === vehicle.position.x && vehicle.position.y > other.position.y && vehicle.position.y - other.position.y < vehicleSize[vehicle.type].height + buffer) {
              canMove = false;
            }
            if (vehicle.direction === 'south' && other.position.x === vehicle.position.x && vehicle.position.y < other.position.y && other.position.y - vehicle.position.y < vehicleSize[vehicle.type].height + buffer) {
              canMove = false;
            }
            if (vehicle.direction === 'east' && other.position.y === vehicle.position.y && vehicle.position.x < other.position.x && other.position.x - vehicle.position.x < vehicleSize[vehicle.type].width + buffer) {
              canMove = false;
            }
            if (vehicle.direction === 'west' && other.position.y === vehicle.position.y && vehicle.position.x > other.position.x && vehicle.position.x - other.position.x < vehicleSize[vehicle.type].width + buffer) {
              canMove = false;
            }
          }
        });

        if (canMove) {
          vehicle.position = nextPos;
          vehicle.waitingTime = Math.max(0, vehicle.waitingTime - 1);
        }

        // Remove vehicles out of bounds
        return vehicle.position.x >= -100 && vehicle.position.x <= canvas.width + 100 &&
               vehicle.position.y >= -100 && vehicle.position.y <= canvas.height + 100;
      });

      // Update traffic data with improved congestion calculation
      const totalCapacity = 40; // Maximum reasonable number of vehicles
      const congestionLevel = Math.min(100, (vehicles.length / totalCapacity) * 100);
      
      const congestionData = {
        congestionLevel,
        vehicleCount: {
          cars: vehicles.filter(v => v.type === 'car').length,
          buses: vehicles.filter(v => v.type === 'bus').length,
          trucks: vehicles.filter(v => v.type === 'truck').length
        },
        averageWaitTime: vehicles.reduce((acc, v) => acc + v.waitingTime, 0) / vehicles.length || 0
      };

      setTrafficData(congestionData);
      
      // Emit data for other components
      window.dispatchEvent(new CustomEvent('trafficUpdate', { 
        detail: congestionData 
      }));
    };

    // Main animation loop with adaptive spawn rate
    let lastSpawn = 0;
    let animationFrameId: number;
    
    const render = (timestamp: number) => {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Adaptive spawn rate based on current congestion
      const currentCongestion = (vehicles.length / 40) * 100;
      const spawnInterval = currentCongestion > 80 ? 4000 : // Slow down spawning when congested
                           currentCongestion > 60 ? 3000 :
                           currentCongestion > 40 ? 2000 : 1500;
      
      if (timestamp - lastSpawn > spawnInterval) {
        spawnVehicle();
        lastSpawn = timestamp;
      }

      drawIntersection();
      drawTrafficLights();
      drawVehicles();
      
      updateVehicles();
      updateTrafficLights();
      
      // Calculate and update traffic data
      const totalCapacity = 40; // Maximum reasonable number of vehicles
      const congestionLevel = Math.min(100, (vehicles.length / totalCapacity) * 100);
      
      const congestionData = {
        congestionLevel,
        vehicleCount: {
          cars: vehicles.filter(v => v.type === 'car').length,
          buses: vehicles.filter(v => v.type === 'bus').length,
          trucks: vehicles.filter(v => v.type === 'truck').length
        },
        averageWaitTime: vehicles.reduce((acc, v) => acc + v.waitingTime, 0) / vehicles.length || 0
      };

      setTrafficData(congestionData);
      
      // Emit data for other components to update the dashboard
      window.dispatchEvent(new CustomEvent('trafficUpdate', { 
        detail: congestionData 
      }));
      
      setTimeElapsed(prev => prev + 1);
      
      animationFrameId = window.requestAnimationFrame(render);
    };
    
    animationFrameId = window.requestAnimationFrame(render);
    
    // Cleanup function
    return () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

return (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
      Traffic Simulation
    </h2>
    
    {/* Traffic metrics display */}
    <div className="grid grid-cols-3 gap-4 mb-4">
      <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg">
        <h3 className="text-lg font-semibold">Congestion Level</h3>
        <p className="text-3xl font-bold">{trafficData.congestionLevel}%</p>
      </div>
      <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg">
        <h3 className="text-lg font-semibold">Vehicles</h3>
        <p className="text-3xl font-bold">
          {trafficData.vehicleCount.cars + trafficData.vehicleCount.buses + trafficData.vehicleCount.trucks}
        </p>
        <div className="text-sm">
          Cars: {trafficData.vehicleCount.cars} | 
          Buses: {trafficData.vehicleCount.buses} | 
          Trucks: {trafficData.vehicleCount.trucks}
        </div>
      </div>
      <div className="bg-yellow-100 dark:bg-yellow-900 p-4 rounded-lg">
        <h3 className="text-lg font-semibold">Avg. Wait Time</h3>
        <p className="text-3xl font-bold">{trafficData.averageWaitTime.toFixed(1)}s</p>
      </div>
    </div>
    
    {/* Simulation canvas */}
    <canvas 
      ref={canvasRef} 
      className="border border-gray-300 dark:border-gray-700 rounded-lg mx-auto"
    />
  </div>
);
}