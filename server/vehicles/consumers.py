import json
from channels.generic.websocket import AsyncWebsocketConsumer

class VehicleStatsConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.channel_layer.group_add("vehicle_stats", self.channel_name)
        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard("vehicle_stats", self.channel_name)

    async def send_stats(self, event):
        await self.send(text_data=json.dumps(event["data"]))
