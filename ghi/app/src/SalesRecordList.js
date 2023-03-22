import Table from 'react-bootstrap/Table';

function SalesRecordList(salesrecords) {
    if (salesrecords === undefined) {
        return null
    }

  return (
    <>
    <div className='pt-5 pb-4 text-left'>
        <h1 className='mb-3 text-center'>Sales Records</h1>
      </div>
              <Table striped bordered hover
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
              </Table>
        </>
    );
}

export default SalesRecordList;
