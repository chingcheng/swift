export default function ManufacturersList({ manufacturers, getManufacturers }) {

    if (manufacturers === undefined) {
        return null
    }

    return (
        <>
        <div className='p-5 text-left bg-light'>
          <h1 className='mb-3'>Manufacturers</h1>
          </div>
          <table className="table table-striped">
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
          </table>
      </>
    )
}
