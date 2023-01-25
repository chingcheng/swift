export default function ModelsList({ models }) {
    if (models === undefined) {
        return null
    }

    return (
        <>
        <div className='p-5 text-left bg-light'>
          <h1 className='mb-3'>Vehicle Models</h1>
          </div>
          <table className="table table-striped">
              <thead>
              <tr>
                  <th>Name</th>
                  <th>Manufacturer</th>
                  <th>Picture</th>
              </tr>
              </thead>
              <tbody>
              {models.map(model => {
                  return (
                  <tr key={ model.id }>
                      <td>{ model.name }</td>
                      <td>{ model.manufacturer.name }</td>
                    <td>
                    <img
                        src={model.picture_url}
                        className="img-fluid"
                        alt=""
                        width="200px"
                        height="auto"
                    />
                    </td>
                  </tr>
                  );
              })}
              </tbody>
          </table>
      </>
    )
}
