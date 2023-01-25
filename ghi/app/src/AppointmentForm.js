import React, { useEffect , useState } from 'react';

export default function AppointmentForm({ getAppointments }) {

    const [vin, setVin] = useState('')
    const [customerName, setCustomerName] = useState('')
    const [dateTime, setDateTime] = useState('')
    const [technicianName, setTechnicianName] = useState('')
    const [reason, setReason] = useState('')
    const [technicians, setTechnicians] = useState([])

    const handleVinChange = (event) => {
        const value = event.target.value
        setVin(value)
    }

    const handleCostumerNameChange = (event) => {
        const value = event.target.value
        setCustomerName(value)
    }

    const handleDateTimeChange = (event) => {
        const value = event.target.value
        setDateTime(value)
    }

    const handleTechnicianChange = (event) => {
        const value = event.target.value
        setTechnicianName(value)
    }

    const handleReasonChange = (event) => {
        const value = event.target.value
        setReason(value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const data = {}
        data.vin = vin
        data.customer_name = customerName
        data.date_time = dateTime
        data.technician_name = technicianName
        data.reason = reason
        console.log(data)

        const url = 'http://localhost:8080/api/appointments/';
        const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        };

        const response = await fetch(url, fetchConfig);
        if (response.ok) {
          const appointment = await response.json();
          console.log(appointment);

          setVin('');
          setCustomerName('');
          setDateTime('');
          setTechnicianName('');
          setReason('');
          getAppointments()
        }
    }


    const fetchTechnicians = async() => {
    const url = 'http://localhost:8080/api/technicians/';
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        setTechnicians(data.technicians)
    }
    }

    useEffect(() => {
      fetchTechnicians();
    }, []);


    return (
        <div className="my-5 container">
            <div className="offset-3 col-6">
              <div className="shadow p-4 mt-4">
                <h1>Add a service appointment</h1>
                <form onSubmit={handleSubmit} id="add-appointment-form">
                  <div className="form-floating mb-3">
                    <input onChange={handleVinChange} value={vin} placeholder="VIN" required type="text" name="vin" className="form-control"/>
                    <label htmlFor="vin">VIN</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input onChange={handleCostumerNameChange} value={customerName} placeholder="Costumer name" required type="text" name="costumer_name" className="form-control"/>
                    <label htmlFor="costumer_name">Costumer name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input onChange={handleDateTimeChange} value={dateTime} placeholder="Date and time" required type="datetime-local" name="date_time" className="form-control"/>
                    <label htmlFor="date_time">Date and time</label>
                  </div>
                  <div className="form-floating mb-3">
                    <textarea onChange={handleReasonChange} value={reason} placeholder="Reason for service" required type="text" name="reason" className="form-control"/>
                    <label htmlFor="reason">Reason for service</label>
                  </div>
                  <div className="mb-3">
                    <select onChange={handleTechnicianChange} value={technicianName} placeholder="Technician name" required id="technician" name="technician_name" className="form-select">
                    <option>Technician name</option>
                    {technicians.map(technician => {
                        return (
                        <option key={technician.id} value={technician.technician_name}>
                            {technician.technician_name}
                        </option>
                        );
                    })}
                    </select>
                  </div>
                  <button className="btn btn-primary">Add</button>
                </form>
              </div>
            </div>
          </div>
        );
}
