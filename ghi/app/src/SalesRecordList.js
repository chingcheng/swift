function SalesRecordList(salesrecords) {
    if (salesrecords === undefined) {
        return null
    }

  return (
    <div className="atable table-striped">
        <h1>Sales Records</h1>
            <table
            className="table table-striped table-hover"
            style={{
                backgroundColor: "#f5f5f5",
                marginBottom: "50px",
                borderRadius: 10,
            }}
            >
            <thead>
                <tr>
                <th>Sales person</th>
                <th>Employee Number</th>
                <th>Customer</th>
                <th>VIN</th>
                <th>Sale price</th>
                </tr>
            </thead>
            <tbody>
                {salesrecords.salesrecord.map(salesrecord => {
                    return (
                        <tr key={salesrecord.id}>
                            <td>{salesrecord.salesperson.name}</td>
                            <td>{salesrecord.salesperson.employee_number}</td>
                            <td>{salesrecord.customer.name}</td>
                            <td>{salesrecord.automobile.vin}</td>
                            <td>{salesrecord.price}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
    );
}

export default SalesRecordList;
