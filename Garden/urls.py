from django.contrib import admin
from django.urls import path
from core.views import front, note, note_detail

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", front, name="front"),
    path("notes/", note, name="note"),
    path("notes/<int:pk>/", note_detail, name="detail"),
]
