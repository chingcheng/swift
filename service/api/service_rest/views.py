from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .models import AutomobileVO, Technician, Appointment
import json
from .encoders import AutomobileVO, TechnicianEncoder, AppointmentEncoder


@require_http_methods(["GET", "POST"])
def api_appointments(request, vin=None):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder = AppointmentEncoder,
        )

    elif request.method == "POST":
        content = json.loads(request.body)
        try:
            technician_name = content["technician_name"]
            technician = Technician.objects.get(technician_name=technician_name)
            content["technician_name"] = technician

        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Technician does not exist"},
                status = 404,
            )
        try:
            if AutomobileVO.objects.filter(vin=content["vin"]).exists():
                content["vip"] = True
            else:
                content["vip"] = False
            appointment = Appointment.objects.create(**content)
            return JsonResponse(
                appointment,
                encoder = AppointmentEncoder,
                safe = False,
            )
        except:
            return JsonResponse(
                {"message": "Could not create appointment"},
                status = 400
            )


@require_http_methods(["GET", "DELETE", "PUT"])
def api_appointment(request, id):
    if request.method == "GET":
        try:
            appointment = Appointment.objects.get(id=id)
            return JsonResponse(
                appointment,
                encoder = AppointmentEncoder,
                safe = False
            )
        except Appointment.DoesNotExist:
            return JsonResponse(
                {"message": "Appointment does not exist"},
                status = 404,
            )

    elif request.method == "DELETE":
        count, _ = Appointment.objects.filter(id=id).delete()
        return JsonResponse({"delete": count > 0})

    elif request.method =="PUT":
        content = json.loads(request.body)
        Appointment.objects.filter(id=id).update(**content)
        appointment = Appointment.objects.get(id=id)
        return JsonResponse(
            appointment,
            encoder = AppointmentEncoder,
            safe = False
        )


@require_http_methods(["GET", "POST"])
def api_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianEncoder,
        )
    elif request.method == "POST":
        try:
            content = json.loads(request.body)
            technician = Technician.objects.create(**content)
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False,
            )
        except:
            return JsonResponse(
                {"message": "Could not create the technician"},
                code = 400,
            )


@require_http_methods(["GET"])
def api_appointments_by_vin(request, vin):
    try:
        if request.method == "GET":
            appointments_by_vin = Appointment.objects.filter(vin=vin)
            return JsonResponse(
                appointments_by_vin,
                encoder = AppointmentEncoder,
                safe=False
            )
    except Appointment.DoesNotExist:
        return JsonResponse(
            {"message": "Does not exist"},
            code = 404
        )
