from django.db import models
from django.urls import reverse


# Create your models here.
class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True, null=True)
    vin = models.CharField(max_length=17, unique=True)

class SalesPerson(models.Model):
    name = models.CharField(max_length=200)
    employee_number = models.PositiveBigIntegerField()
    def __str__(self):
        return self.name


class PotentialCustomer(models.Model):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    phone_number = models.PositiveBigIntegerField()
    def __str__(self):
        return self.name

class SaleRecord(models.Model):
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="saleRecord",
        on_delete=models.CASCADE,
    )
    salesperson = models.ForeignKey(
        SalesPerson,
        related_name="saleRecord",
        on_delete=models.CASCADE,
    )

    customer = models.ForeignKey(
        PotentialCustomer,
        related_name="saleRecord",
        on_delete=models.CASCADE,
    )
    price = models.FloatField()
  
