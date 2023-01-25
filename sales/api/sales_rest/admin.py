from django.contrib import admin

# Register your models here.
from .models import PotentialCustomer, SaleRecord, SalesPerson, AutomobileVO


@admin.register(PotentialCustomer)
class PotentialCustomerAdmin(admin.ModelAdmin):
    pass


@admin.register(SaleRecord)
class SaleRecordAdmin(admin.ModelAdmin):
    pass

@admin.register(SalesPerson)
class SalesPersonAdmin(admin.ModelAdmin):
    pass

@admin.register(AutomobileVO)
class AutomobileVOAdmin(admin.ModelAdmin):
    pass