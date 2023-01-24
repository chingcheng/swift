from django.db import models


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    import_href = models.CharField(max_length=200, unique=True, null=True)

    def __str__(self):
        return self.vin


class Technician(models.Model):
    technician_name = models.CharField(max_length=200)
    employee_number = models.PositiveBigIntegerField()

    def __str__(self):
        return self.technician_name


class Appointment(models.Model):
    vin = models.CharField(max_length=17)
    customer_name = models.CharField(max_length=50)
    # date = models.DateField()
    # time = models.TimeField()
    date_time = models.DateTimeField(null=True, auto_now_add=False)
    technician_name = models.ForeignKey(
        Technician,
        related_name = "appointments",
        on_delete=models.CASCADE,
    )
    reason = models.TextField(max_length=400)
    finished = models.BooleanField(default=False)
    vip = models.BooleanField(default=False)

    def __str__(self):
        return self.vin
