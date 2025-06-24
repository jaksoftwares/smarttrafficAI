import os
import django
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
from django.core.asgi import get_asgi_application
import vehicles.routing

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
django.setup()

application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": AuthMiddlewareStack(
        URLRouter(
            vehicles.routing.websocket_urlpatterns
        )
    ),
})
