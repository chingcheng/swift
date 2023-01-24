from django.urls import path
from .views import api_list_salesPerson,api_list_potentialCustomer,api_list_salesRecord,api_show_salesRecord

urlpatterns = [

    path("salesperson/", api_list_salesPerson, name="api_create_salesperson"),

    path("potentialcustomer/", api_list_potentialCustomer, name="api_create_potentialcustomer"),

    path("salesrecord/", api_list_salesRecord, name="api_create_salesrecord"),

    # path("automobiles/<int:automobile_vo_id>/salesrecord/", api_list_salesRecord,name="api_list_salesrecord"),


    path("salesrecord/<int:pk>/",api_show_salesRecord, name="api_show_salesrecord"),
]
