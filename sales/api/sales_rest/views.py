from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from common.json import ModelEncoder
from .models import AutomobileVO,SalesPerson,PotentialCustomer,SaleRecord

class AutomobileVODetailEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["import_href","vin","id"]

class SalesPersonListEncoder(ModelEncoder):
    model = SalesPerson
    properties = ["name","employee_number","id"]

class PotentialCustomerEncoder(ModelEncoder):
    model = PotentialCustomer
    properties = ["name","address", "phone_number","id"]


class SaleRecordListEncoder(ModelEncoder):
    model = SaleRecord
    properties = [
        "automobile",
        "salesperson",
        "customer",
        "price",
        "id",
    ]
    encoders = {
        "automobile": AutomobileVODetailEncoder(),
        "salesperson": SalesPersonListEncoder(),
        "customer": PotentialCustomerEncoder(),
    }
    

class SaleRecordDetailEncoder(ModelEncoder):
    model = SaleRecord
    properties = [
        "automobile",
        "salesperson",
        "customer",
        "price",
        "id",
    ]
    encoders = {
        "automobile": AutomobileVODetailEncoder(),
        "salesperson": SalesPersonListEncoder(),
        "customer": PotentialCustomerEncoder(),
    }


@require_http_methods(["GET", "POST"])
def api_list_salesPerson(request):
    if request.method == "GET":
        salesPerson = SalesPerson.objects.all()

        return JsonResponse(
            {"salesRecord": salesPerson},
            encoder=SalesPersonListEncoder,
        )
    else:
        try:
        # print("body",request.body)
            content = json.loads(request.body)
            salesPerson = SalesPerson.objects.create(**content)
            return JsonResponse(
                salesPerson,
                encoder=SalesPersonListEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the salesPerson"}
            )
            response.status_code = 400
            return response


@require_http_methods(["DELETE", "GET"])
def api_show_salesPerson(request, pk):
    if request.method == "GET":
        salePerson = SalesPerson.objects.get(id=pk)
        return JsonResponse(
            salePerson,
            encoder=SalesPersonListEncoder,
            safe=False,
        )
    else:
        if request.method == "DELETE":
            count, _ = SalesPerson.objects.filter(id=pk).delete()
            return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def api_list_potentialCustomer(request):
    if request.method == "GET":
        potentialCustomer = PotentialCustomer.objects.all()

        return JsonResponse(
            {"potentialCustomer": potentialCustomer},
            encoder=PotentialCustomerEncoder,
            safe=False,
        )
    else:
        try:
        # print("body",request.body)
            content = json.loads(request.body)
            potentialCustomer = PotentialCustomer.objects.create(**content)
            return JsonResponse(
                potentialCustomer,
                encoder=PotentialCustomerEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the potentialCustomer"}
            )
            response.status_code = 400
            return response


@require_http_methods(["DELETE", "GET"])
def api_show_potentialCustomer(request, pk):
    if request.method == "GET":
        potentialCustomer = PotentialCustomer.objects.get(id=pk)
        return JsonResponse(
            potentialCustomer,
            encoder=PotentialCustomerEncoder,
            safe=False,
        )
    else:
        if request.method == "DELETE":
            count, _ = PotentialCustomer.objects.filter(id=pk).delete()
            return JsonResponse({"deleted": count > 0})



@require_http_methods(["GET", "POST"])
def api_list_salesRecord(request):
    if request.method == "GET":
        salesRecord = SaleRecord.objects.all()

        return JsonResponse(
            {"salesRecord": salesRecord},
            encoder=SaleRecordListEncoder,
            safe=False,
        )
    else:
        # print("body",request.body)
        content = json.loads(request.body)


        # Get the Bin object and put it in the content dict
        try:
            # print(BinVO.objects.all())

            # automobile_href = content["automobile"]
            automobile = AutomobileVO.objects.get(vin=content["automobile"])
            content["automobile"] = automobile

        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid vin number"},
                status = 400,
                safe=False,
            )
        try:

            # salesperson_href = content["salesperson"]
            salesperson = SalesPerson.objects.get(name=content["salesperson"])
            content["salesperson"] = salesperson

        except SalesPerson.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid salesprson "},
                status = 400,
                safe=False,

            )

        try:
            # customer_name = content["customer"]
            customer = PotentialCustomer.objects.get(id=content["customer"])
            content["customer"] = customer
        except PotentialCustomer.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid customer "},
            )

        salesRecord = SaleRecord.objects.create(**content)
        return JsonResponse(
            salesRecord,
            encoder=SaleRecordListEncoder,
            safe=False,
        )




@require_http_methods(["DELETE", "GET"])
def api_show_salesRecord(request, pk):
    if request.method == "GET":
        saleRecord = SaleRecord.objects.get(id=pk)
        return JsonResponse(
            saleRecord,
            encoder=SaleRecordDetailEncoder,
            safe=False,
        )
    else:
        if request.method == "DELETE":
            count, _ = SaleRecord.objects.filter(id=pk).delete()
            return JsonResponse({"deleted": count > 0})
