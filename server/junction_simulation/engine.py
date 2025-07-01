# import random
# import math
# import time
# import threading
# import json
# import os

# # Your simulation variables (exactly as you gave)
# defaultRed = 150
# defaultYellow = 5
# defaultGreen = 20
# defaultMinimum = 10
# defaultMaximum = 60
# signals = []
# noOfSignals = 4
# simTime = 300
# timeElapsed = 0

# currentGreen = 0
# nextGreen = (currentGreen + 1) % noOfSignals
# currentYellow = 0

# carTime = 2
# bikeTime = 1
# rickshawTime = 2.25
# busTime = 2.5
# truckTime = 2.5
# vehicleCountTexts = ["0", "0", "0", "0"]

# noOfCars = noOfBikes = noOfBuses = noOfTrucks = noOfRickshaws = 0
# noOfLanes = 2

# detectionTime = 5

# speeds = {'car': 2.25, 'bus': 1.8, 'truck': 1.8, 'rickshaw': 2, 'bike': 2.5}

# x = {'right': [0,0,0], 'down': [755,727,697], 'left': [1400,1400,1400], 'up': [602,627,657]}
# y = {'right': [348,370,398], 'down': [0,0,0], 'left': [498,466,436], 'up': [800,800,800]}
# vehicles = {'right': {0:[], 1:[], 2:[], 'crossed':0}, 'down': {0:[], 1:[], 2:[], 'crossed':0},
#             'left': {0:[], 1:[], 2:[], 'crossed':0}, 'up': {0:[], 1:[], 2:[], 'crossed':0}}
# vehicleTypes = {0:'car', 1:'bus', 2:'truck', 3:'rickshaw', 4:'bike'}
# directionNumbers = {0:'right', 1:'down', 2:'left', 3:'up'}

# stopLines = {'right': 590, 'down': 330, 'left': 800, 'up': 535}
# defaultStop = {'right': 580, 'down': 320, 'left': 810, 'up': 545}
# stops = {'right': [580,580,580], 'down': [320,320,320], 'left': [810,810,810], 'up': [545,545,545]}

# # Same TrafficSignal and Vehicle classes — remove image loads, keep positions + states
# class TrafficSignal:
#     def __init__(self, red, yellow, green, minimum, maximum):
#         self.red = red
#         self.yellow = yellow
#         self.green = green
#         self.minimum = minimum
#         self.maximum = maximum
#         self.signalText = "30"
#         self.totalGreenTime = 0

# class Vehicle:
#     def __init__(self, lane, vehicleClass, direction_number, direction, will_turn):
#         self.lane = lane
#         self.vehicleClass = vehicleClass
#         self.speed = speeds[vehicleClass]
#         self.direction_number = direction_number
#         self.direction = direction
#         self.x = x[direction][lane]
#         self.y = y[direction][lane]
#         self.crossed = 0
#         self.willTurn = will_turn
#         self.turned = 0
#         self.rotateAngle = 0
#         self.index = len(vehicles[direction][lane])
#         vehicles[direction][lane].append(self)

#         # Calculate stop position without image sizes
#         if direction == 'right':
#             if self.index > 0 and vehicles[direction][lane][self.index - 1].crossed == 0:
#                 self.stop = vehicles[direction][lane][self.index - 1].stop - gap
#             else:
#                 self.stop = defaultStop[direction]
#             x[direction][lane] -= gap
#             stops[direction][lane] -= gap

#         elif direction == 'left':
#             if self.index > 0 and vehicles[direction][lane][self.index - 1].crossed == 0:
#                 self.stop = vehicles[direction][lane][self.index - 1].stop + gap
#             else:
#                 self.stop = defaultStop[direction]
#             x[direction][lane] += gap
#             stops[direction][lane] += gap

#         elif direction == 'down':
#             if self.index > 0 and vehicles[direction][lane][self.index - 1].crossed == 0:
#                 self.stop = vehicles[direction][lane][self.index - 1].stop - gap
#             else:
#                 self.stop = defaultStop[direction]
#             y[direction][lane] -= gap
#             stops[direction][lane] -= gap

#         elif direction == 'up':
#             if self.index > 0 and vehicles[direction][lane][self.index - 1].crossed == 0:
#                 self.stop = vehicles[direction][lane][self.index - 1].stop + gap
#             else:
#                 self.stop = defaultStop[direction]
#             y[direction][lane] += gap
#             stops[direction][lane] += gap
# gap = 50  # Distance between vehicles

# def initialize():
#     ts1 = TrafficSignal(0, defaultYellow, defaultGreen, defaultMinimum, defaultMaximum)
#     signals.append(ts1)
#     ts2 = TrafficSignal(ts1.red + ts1.yellow + ts1.green, defaultYellow, defaultGreen, defaultMinimum, defaultMaximum)
#     signals.append(ts2)
#     ts3 = TrafficSignal(defaultRed, defaultYellow, defaultGreen, defaultMinimum, defaultMaximum)
#     signals.append(ts3)
#     ts4 = TrafficSignal(defaultRed, defaultYellow, defaultGreen, defaultMinimum, defaultMaximum)
#     signals.append(ts4)
#     repeat()


# def setTime():
#     global noOfCars, noOfBikes, noOfBuses, noOfTrucks, noOfRickshaws, noOfLanes
#     noOfCars, noOfBuses, noOfTrucks, noOfRickshaws, noOfBikes = 0, 0, 0, 0, 0
#     for j in range(len(vehicles[directionNumbers[nextGreen]][0])):
#         vehicle = vehicles[directionNumbers[nextGreen]][0][j]
#         if vehicle.crossed == 0:
#             if vehicle.vehicleClass == 'bike':
#                 noOfBikes += 1
#     for i in range(1, 3):
#         for j in range(len(vehicles[directionNumbers[nextGreen]][i])):
#             vehicle = vehicles[directionNumbers[nextGreen]][i][j]
#             if vehicle.crossed == 0:
#                 vclass = vehicle.vehicleClass
#                 if vclass == 'car':
#                     noOfCars += 1
#                 elif vclass == 'bus':
#                     noOfBuses += 1
#                 elif vclass == 'truck':
#                     noOfTrucks += 1
#                 elif vclass == 'rickshaw':
#                     noOfRickshaws += 1
#     greenTime = math.ceil(((noOfCars * carTime) + (noOfRickshaws * rickshawTime) + 
#                           (noOfBuses * busTime) + (noOfTrucks * truckTime) + 
#                           (noOfBikes * bikeTime)) / (noOfLanes + 1))
#     if greenTime < defaultMinimum:
#         greenTime = defaultMinimum
#     elif greenTime > defaultMaximum:
#         greenTime = defaultMaximum
#     signals[(currentGreen + 1) % noOfSignals].green = greenTime


# def repeat():
#     global currentGreen, currentYellow, nextGreen
#     while signals[currentGreen].green > 0:
#         printStatus()
#         updateValues()
#         if signals[(currentGreen + 1) % noOfSignals].red == detectionTime:
#             thread = threading.Thread(name="detection", target=setTime)
#             thread.daemon = True
#             thread.start()
#         time.sleep(1)

#     currentYellow = 1
#     vehicleCountTexts[currentGreen] = "0"
#     for i in range(3):
#         stops[directionNumbers[currentGreen]][i] = defaultStop[directionNumbers[currentGreen]]
#         for vehicle in vehicles[directionNumbers[currentGreen]][i]:
#             vehicle.stop = defaultStop[directionNumbers[currentGreen]]
#     while signals[currentGreen].yellow > 0:
#         printStatus()
#         updateValues()
#         time.sleep(1)
#     currentYellow = 0
#     signals[currentGreen].green = defaultGreen
#     signals[currentGreen].yellow = defaultYellow
#     signals[currentGreen].red = defaultRed

#     currentGreen = nextGreen
#     nextGreen = (currentGreen + 1) % noOfSignals
#     signals[nextGreen].red = signals[currentGreen].yellow + signals[currentGreen].green
#     repeat()


# def printStatus():
#     for i in range(noOfSignals):
#         if i == currentGreen:
#             if currentYellow == 0:
#                 print(f" GREEN TS{i + 1} -> r:{signals[i].red} y:{signals[i].yellow} g:{signals[i].green}")
#             else:
#                 print(f"YELLOW TS{i + 1} -> r:{signals[i].red} y:{signals[i].yellow} g:{signals[i].green}")
#         else:
#             print(f"   RED TS{i + 1} -> r:{signals[i].red} y:{signals[i].yellow} g:{signals[i].green}")
#     print()


# def updateValues():
#     for i in range(noOfSignals):
#         if i == currentGreen:
#             if currentYellow == 0:
#                 signals[i].green -= 1
#                 signals[i].totalGreenTime += 1
#             else:
#                 signals[i].yellow -= 1
#         else:
#             signals[i].red -= 1


# def generateVehicles():
#     while True:
#         vehicle_type = random.randint(0, 4)
#         lane_number = 0 if vehicle_type == 4 else random.randint(1, 2)
#         will_turn = 0
#         if lane_number == 2:
#             will_turn = 1 if random.randint(0, 4) <= 2 else 0
#         temp = random.randint(0, 999)
#         if temp < 400:
#             direction_number = 0
#         elif temp < 800:
#             direction_number = 1
#         elif temp < 900:
#             direction_number = 2
#         else:
#             direction_number = 3
#         Vehicle(lane_number, vehicleTypes[vehicle_type], direction_number, directionNumbers[direction_number], will_turn)
#         time.sleep(0.75)


# def simulationTime():
#     global timeElapsed, simTime
#     while True:
#         timeElapsed += 1
#         time.sleep(1)
#         if timeElapsed == simTime:
#             totalVehicles = 0
#             print('Lane-wise Vehicle Counts')
#             for i in range(noOfSignals):
#                 print(f'Lane {i + 1}: {vehicles[directionNumbers[i]]["crossed"]}')
#                 totalVehicles += vehicles[directionNumbers[i]]["crossed"]
#             print(f'Total vehicles passed: {totalVehicles}')
#             print(f'Total time passed: {timeElapsed}')
#             print(f'No. of vehicles passed per unit time: {float(totalVehicles) / float(timeElapsed)}')
#             os._exit(1)

# # PLUS this:
# def get_simulation_state():
#     # Return JSON-serializable state of the simulation
#     return {
#         'signals': [
#             {'red': s.red, 'yellow': s.yellow, 'green': s.green, 'totalGreenTime': s.totalGreenTime}
#             for s in signals
#         ],
#         'vehicles': {
#             dir: {
#                 lane: [{'x': v.x, 'y': v.y, 'type': v.vehicleClass, 'crossed': v.crossed}
#                        for v in vehicles[dir][lane]] if lane in [0,1,2] else vehicles[dir]['crossed']
#                 for lane in vehicles[dir]
#             } for dir in vehicles
#         },
#         'currentGreen': currentGreen,
#         'currentYellow': currentYellow,
#         'timeElapsed': timeElapsed
#     }
