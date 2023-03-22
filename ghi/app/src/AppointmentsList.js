import Table from 'react-bootstrap/Table';

export default function AppointmentsList( {appointments, getAppointments } ) {

    const cancelAppointment = async (appointment) => {
        const url = `http://localhost:8080/api/appointments/${appointment.id}/`
        const fetchConfig = {method: "delete"}
        const response = await fetch(url, fetchConfig)
        if (response.ok) {
            getAppointments()
        }
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

    if (appointments === undefined) {
        return null;
    }

    return (
    <>
      <div className='p-5 text-left'>
        <h1 className='mb-3 text-center'>Service appointments</h1>
        </div>
        <Table striped bordered hover>
        <thead>
            <tr>
                <th>VIN</th>
                <th>Customer name</th>
                <th>VIP</th>
                <th>Date</th>
                <th>Time</th>
                <th>Technician name</th>
                <th>Reason</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {appointments.map(appointment => {
                if  (appointment.finished === false)
                return (
                <tr key={appointment.id}>
                    <td>{ appointment.vin }</td>
                    <td>{ appointment.customer_name }</td>
                    <td>{ appointment.vip ?
                            <img
                            src="https://cdn-icons-png.flaticon.com/128/6941/6941697.png"
                            width="25px"
                            alt=""
                            />
                            :""}</td>
                    <td>{ new Date(appointment.date_time).toLocaleDateString("en-US") }</td>
                    <td>{ new Date(appointment.date_time).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                    }) }</td>
                    <td>{ appointment.technician_name.technician_name }</td>
                    <td>{ appointment.reason }</td>
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
                            type="button" className="btn btn-success">
                            Finished
                        </button>
                    </td>
                </tr>
                );
            })}
            </tbody>
        </Table>
    </>
    );
}
