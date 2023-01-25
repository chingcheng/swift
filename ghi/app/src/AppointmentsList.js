export default function AppointmentsList( {appointments, getAppointments } ) {
    const cancelAppointment = async (appointment) => {
        const url = `http://localhost:8080/api/appointments/${appointment.id}/`
        const fetchConfig = {method: "delete"}
        const response = await fetch(url, fetchConfig)
        if (response.ok) {
            getAppointments()
        }
    }
    if (appointments === undefined) {
        return null;
    }

    const finishAppointment = async (appointment) => {
        const url = `http://localhost:8080/api/appointments/${appointment.id}/`
        const fetchConfig = {
            method: "put",
            body: JSON.stringify({ finished: true}),
            headers: {
                "Content-Type": "application/json",
            }
        }
        const response = await fetch(url, fetchConfig)
        if (response.ok) {
            getAppointments()
        }
    }


    return (
    <>
      <div className='p-5 text-left bg-light'>
        <h1 className='mb-3'>Service appointments</h1>
        </div>
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
            </tr>
            </thead>
            <tbody>
            {appointments.map(appointment => {
                if  (appointment.finished === false)
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
                    <td>
                        <button
                            id={ appointment.id } onClick={() => cancelAppointment(appointment)}
                            type="button" className="btn btn-danger">
                            Cancel
                        </button>
                    </td>
                    <td>
                        <button
                            id={ appointment.id } onClick={() => finishAppointment(appointment)}
                            type="button" className="btn btn-info">
                            Finished
                        </button>
                    </td>
                </tr>
                );
            })}
            </tbody>
        </table>
    </>
    );
}
