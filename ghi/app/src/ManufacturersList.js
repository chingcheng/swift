import Table from 'react-bootstrap/Table';

export default function ManufacturersList({ manufacturers }) {

    if (manufacturers === undefined) {
        return null
    }

    return (
        <>
        <div className='pt-5 pb-4 text-left'>
          <h1 className='mb-3 text-center'>Manufacturers</h1>
          </div>
          <Table striped bordered hover>
              <thead>
              <tr>
                  <th>Name</th>
              </tr>
              </thead>
              <tbody>
              {manufacturers.map(manufacturer => {
                  return (
                  <tr key={manufacturer.id}>
                      <td>{ manufacturer.name }</td>
                  </tr>
                  );
              })}
              </tbody>
          </Table>
      </>
    )
}
