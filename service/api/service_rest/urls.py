from django.urls import path
from .views import api_technicians, api_appointments, api_appointment, api_appointments_by_vin


urlpatterns = [
    path("technicians/", api_technicians, name="api_technicians"),
    path("appointments/", api_appointments, name="api_appointments"),
    path("appointments/<int:id>/", api_appointment, name="api_appointment"),
    path("appointments/<str:vin>/", api_appointments_by_vin, name="api_appointments_by_vin"),
]
