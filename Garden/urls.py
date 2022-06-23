from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path
from core.views import front, note, note_detail

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", front, name="front"),
    path("plants/", note, name="plant"),
    path("plants/<int:pk>/", note_detail, name="detail"),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)