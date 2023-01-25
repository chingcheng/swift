import { useState } from 'react';

export default function ServiceHistory({ appointments, setAppointments }) {
    const [vin, setVin] = useState('')

    const handleSearch = async (event) => {
        const appointmentsByVin = appointments.filter((appointment) =>
        appointment.vin.includes(setVin)
        )
        setAppointments(appointmentsByVin)
    }
    const handleSearchInput = async (event) => {
        const value = event.target.value
        setVin(value)
    }
    console.log(appointments)
    return (
        <>
          <form onSubmit={handleSearch} className="input-group mb-3 mt-3">
            <input onChange={handleSearchInput} type="search" className="form-control rounded" placeholder="Search by VIN" aria-label="Search" aria-describedby="search-addon" />
            <button type="submit" className="btn btn-primary">search</button>
            </form>
            <h1 className="mb-3 mt-3">Service History</h1>
          <table className="table table-striped">
              <thead>
              <tr>
                  <th>VIN</th>
                  <th>Customer name</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Technician name</th>
                  <th>Reason</th>
                  <th>VIP</th>
                  <th>Status</th>
              </tr>
              </thead>
              <tbody>
              {appointments.map(appointment => {
                  return (
                  <tr key={appointment.id}>
                      <td>{ appointment.vin }</td>
                      <td>{ appointment.customer_name }</td>
                      <td>{ new Date(appointment.date_time).toLocaleDateString("en-US") }</td>
                      <td>{ new Date(appointment.date_time).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                      }) }</td>
                      <td>{ appointment.technician_name.technician_name }</td>
                      <td>{ appointment.reason }</td>
                      <td>{ appointment.vip ? "👑": ""}</td>
                      <td>{ appointment.finished ? "Finished": "In progress"} </td>
                  </tr>
                  );
              })}
              </tbody>
          </table>
      </>
    )
}
