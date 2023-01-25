export default function AppointmentsList( {appointments} ) {

    if (appointments === undefined) {
        return null;
    }

    return (
        <table className="table table-striped">
            <thead>
            <tr>
                <th>VIN</th>
                <th>Customer name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Technician name</th>
                <th>Reason</th>
            </tr>
            </thead>
            <tbody>
            {appointments.map(appointment => {
                return (
                <tr key={appointment.id}>
                    <td>{ appointment.vin }</td>
                    <td>{ appointment.customer_name }</td>
                    <td>{ appointment.date_time }</td>
                    <td>{ appointment.date_time }</td>
                    <td>{ appointment.technician_name.technician_name }</td>
                    <td>{ appointment.reason }</td>
                </tr>
                );
            })}
            </tbody>
        </table>
    );
}
