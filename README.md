# CarCar

Team:
<table>
<tr>
<td>


* Ching Cheng -  Service Microservice

* Lynn Lyu - Sales Microservice

</td>
</tr>
</table>

## Design

<table>
<tr>
<td>

Welcome to CarCar! CarCar is an app where you can manage your car dealership inventory, sales, and service all together.

CarCar's frontend is built with React. The application's backend is built with Django and is made up of three microservices, inventory, sales, and services.

The inventory domain allows you to view, add, update, and delete manufacturers, vehicle models, and automobiles. The sales domain allows you to track and manage your customers, salespeople, and sales records. The service domain allows you to track and manage your service appointments and technicians.

</td>
</tr>
</table>

## Context Map

![diagram](/img/CarCarContextMap.jpg)

## Getting Started

#### Cloning the repository
* Type this command in your terminal: `git clone <repo-url>`
* Switch directories to this project directory.
* Type this command in your terminal: `code .` to open Visual Studio Code.

#### Starting the application with Docker
* Type the following commands in your terminal and hit enter after each one:

* Create a docker volume: `docker volume create beta-data`
* Build docker image: `docker-compose build`
* Run docker containers: `docker-compose up`

#### Accessing the browser
* Go to http://localhost:3000 to access React frontend.

## Inventory microservice

The inventory microservice includes the following models: Manufacturer, VehicleModel, Automobile.


### Inventory API

* PORT 8100

#### Manufacturers
| Feature                   | Method       | URL          |
|:--------------------------|:-------------|:-------------|
|List all manufacturers        |   GET     |http://localhost:8100/manufacturers/|
|Create a manufacturer         |   POST    |http://localhost:8010/manufacturers/|
|Get a specific manufacturer   |   GET     |http://localhost:8100/api/manufacturers/:id/|
|Update a specific manufacturer|   PUT     |http://localhost:8100/api/manufacturers/:id/|
|Delete a specific manufacturer|   DELETE  |http://localhost:8100/api/manufacturers/:id/|


#### POST request to http://localhost:8100/manufacturers/

```sh
{
    "name": "Chrysler"
}
```

#### Vehicle Models
| Feature                           | Method       | URL          |
|:----------------------------------|:-------------|:-------------|
|List all vehicle models            | GET          |http://localhost:8100/models/|
|Create a vehicle model             |POST          |http://localhost:8100/models/|
|Get a specific vehicle model       | GET          |http://localhost:8100/api/models/:id/|
|Update a specific vehicle model	|PUT           |http://localhost:8100/api/models/:id/|
|Delete a specific vehicle model	|DELETE        |http://localhost:8100/api/models/:id/|

#### POST request to http://localhost:8100/models/

```sh
{
    "name": "Sebring",
    "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
    "manufacturer_id": 1
}
```


#### Automobiles
| Feature                      | Method       | URL          |
|:-----------------------------|:-------------|:-------------|
|List automobiles	           | GET          |http://localhost:8100/api/automobiles/|
|Create an automobile	       | POST         |http://localhost:8100/api/automobiles/:vin/|
|Get a specific automobile	   | GET          |http://localhost:8100/api/automobiles/:vin/|
|Update a specific automobile  | PUT          |http://localhost:8100/api/automobiles/:vin/|
|Delete a specific automobile  | DELETE       |http://localhost:8100/api/automobiles/:vin/|

#### POST request to http://localhost:8100/automobiles/

```sh
{
    "color": "red",
    "year": 2012,
    "vin": "1C3CC5FB2AN120174",
    "model_id": 1
}
```



## Service microservice

The service microservice includes the following models: AutomobileVO, Technician, and Appointment. Service polls the inventory for automobile data, creating a value object copy of the data. This allows service to handle its own automobile data without affecting the data from the inventory.

### Service API

* PORT 8080

#### Technicians
| Feature                   | Method       | URL          |
|:--------------------------|:-------------|:-------------|
|List all technicians       | GET          |http://localhost:8080/technicians/|
|Create a technician        | POST         |http://localhost:8080/technicians/|

#### Appointments
| Feature                   | Method       | URL          |
|:--------------------------|:-------------|:-------------|
|List all appointments      | GET          |http://localhost:8080/appointments/|
|Create an appointment      | POST         |http://localhost:8080/appointments/|
|Get a specific appointment | GET          |http://localhost:8080/appointments/:id/|
|List appointments by VIN   | GET          |http://localhost:8080/appointments/:vin/|
|Update an appointment      | PUT          |http://localhost:8080/appointments/:id/|
|Delete an appointment      | DELETE       |http://localhost:8080/appointments/:id/|

### JSON body examples for POST request

#### POST request to http://localhost:8080/api/technicians/
```sh
 {
    "technician_name": "Arthur the technician",
    "employee_number": 525
}
```

#### POST request to http://localhost:8080/api/appointments/
```sh
{
    "vin": "1ZVBP8CH7A5121324",
    "customer_name": "DW Read",
    "date_time": "2023-02-20 08:30:00",
    "technician_name": "Arthur the technician",
    "reason": "Rotate tires"
}
```


## Sales microservice

Sales microservice has four models: AutomobileVO, SalesPerson, PotentialCustomer, and SaleRecord. Sales polls the inventory for automobile data using a poller. Users can create salespeople, customers, and log sale records in the frontend and backend.

### Sales API

* PORT 8090

|     Feature      |    Method    |     URL      |
|:-----------------|:-------------|:-------------|
|List all salespeople|    GET     |http://localhost:8090/api/salesperson/|
|Create a salespeople|    POST    |http://localhost:8090/api/salesperson/|
|List all customers|      GET     |http://localhost:8090/api/potentialcustomer/|
|Create a customer|       POST    |http://localhost:8090/api/potentialcustomer/|
|List all automobiles|    GET     |http://localhost:8090/api/automobiles/|
|List all sales records|  GET     |http://localhost:8090/api/salesrecord/|
|Create a sales record|   POST    |http://localhost:8090/api/salesrecord/|



### JSON body Examples for Post Requests

#### POST request to http://localhost:8090/api/salesperson/
```sh
{
    "name": "David W",
    "employee_number": 1078
}
```

#### POST request to http://localhost:8090/api/potentialcustomer/
```sh
{
    "name": "Alex J",
    "address": "alex st",
    "phone_number": 5851234890

}
```

#### POST request to http://localhost:8090/api/salesrecord/
```sh
{
    "automobile": "4Y1SL65848Z411439",
    "salesperson": "Flower H",
    "customer":"5",
    "price": 1999
}
```
