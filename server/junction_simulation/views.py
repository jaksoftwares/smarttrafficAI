# from django.http import JsonResponse
# from .engine import get_simulation_state, initialize, generateVehicles, simulationTime
# import threading

# simulation_started = False

# def start_simulation(request):
#     global simulation_started
#     if not simulation_started:
#         simulation_started = True
#         threading.Thread(target=simulationTime, daemon=True).start()
#         threading.Thread(target=initialize, daemon=True).start()
#         threading.Thread(target=generateVehicles, daemon=True).start()
#     return JsonResponse({'status': 'Simulation started'})

# def get_state(request):
#     state = get_simulation_state()
#     return JsonResponse(state)
