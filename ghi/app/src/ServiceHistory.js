import { useState } from 'react';

export default function ServiceHistory({ appointments, setAppointments }) {

    const [vinSearch, setVinSearch] = useState('')

    const handleSearchInput = async (event) => {
        const value = event.target.value
        setVinSearch(value)
    }

    const handleSearch = async (event) => {
        if (vinSearch.length !== 0) {
            event.preventDefault()
        }
        const filteredAppointments = appointments.filter((appointment) =>
            appointment.vin.includes(vinSearch)
        )
        setAppointments(filteredAppointments)
    }

    return (
        <>
          <form onSubmit={handleSearch} className="input-group mb-3 mt-3">
            <input onChange={handleSearchInput} type="search" className="form-control rounded" placeholder="Search by VIN" aria-label="Search" aria-describedby="search-addon" />
            <button type="submit" className="btn btn-primary">search</button>
            </form>
            <h1 className="mb-3 mt-3 text-center">Service History</h1>
          <table className="table table-striped table-hover">
              <thead>
              <tr>
                  <th>VIN</th>
                  <th>Customer name</th>
                  <th>VIP</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Technician name</th>
                  <th>Reason</th>
                  <th>Status</th>
              </tr>
              </thead>
              <tbody>
              {appointments.map(appointment => {
                  return (
                  <tr key={appointment.id}>
                      <td>{ appointment.vin }</td>
                      <td>{ appointment.customer_name }</td>
                      <td>{ appointment.vip ?
                            <img
                            src="https://cdn-icons-png.flaticon.com/128/6941/6941697.png"
                            width="25px"
                            />
                            :""}</td>
                      <td>{ new Date(appointment.date_time).toLocaleDateString("en-US") }</td>
                      <td>{ new Date(appointment.date_time).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                      }) }</td>
                      <td>{ appointment.technician_name.technician_name }</td>
                      <td>{ appointment.reason }</td>
                      <td>{ appointment.finished ?
                            <img
                            src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
                            width="25px"
                            />
                            :
                            <img
                            src="https://cdn-icons-png.flaticon.com/512/463/463575.png"
                            width="25px"
                            />
                            } </td>
                  </tr>
                  );
              })}
              </tbody>
          </table>
      </>
    )
}
