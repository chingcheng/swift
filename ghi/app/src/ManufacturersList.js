export default function ManufacturersList({ manufacturers }) {

    if (manufacturers === undefined) {
        return null
    }

    return (
        <>
        <div className='p-5 text-left bg-light'>
          <h1 className='mb-3 text-center'>Manufacturers</h1>
          </div>
          <table className="table table-striped table-hover">
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
