export default function TechniciansList( {technicians, getTechnicians } ) {
    const deleteTechnician = async (technician) => {
        const url = `http://localhost:8080/api/technicians/${technician.id}/`
        const fetchConfig = {method: "delete"}
        const response = await fetch(url, fetchConfig)
        if (response.ok) {
            getTechnicians()
        }
    }
    if (technicians === undefined) {
        return null;
    }

    return (
    <>
      <div className='p-5 text-left bg-light'>
        <h1 className='mb-3 text-center'>Technicians</h1>
        </div>
        <table className="table table-striped">
            <thead>
            <tr>
                <th>Technician name</th>
                <th>Employee number</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {technicians.map(technician => {
                return (
                <tr key={technician.id}>
                    <td>{ technician.technician_name }</td>
                    <td>{ technician.employee_number }</td>
                    <td>
                        <button
                            id={ technician.id } onClick={() => deleteTechnician(technician)}
                            type="button" className="btn btn-danger">
                            Delete
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
