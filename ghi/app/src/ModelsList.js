import Table from 'react-bootstrap/Table';

export default function ModelsList({ models, getModels }) {
    const deleteModel = async (model) => {
        const url = `http://localhost:8100/api/models/${model.id}/`
        const fetchConfig = {method: "delete"}
        const response = await fetch(url, fetchConfig)
        if (response.ok) {
            getModels()
        }
    }

    if (models === undefined) {
        return null
    }

    return (
        <>
        <div className='pt-5 pb-4 text-left'>
          <h1 className='mb-3 text-center'>Vehicle Models</h1>
          </div>
          <Table striped bordered hover>
              <thead>
              <tr>
                  <th>Name</th>
                  <th>Manufacturer</th>
                  <th>Picture</th>
                  <th>Action</th>
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
                        width="150px"
                    />
                    </td>
                    <td>
                        <button
                            id={ model.id } onClick={() => deleteModel(model)}
                            type="button" className="btn btn-danger">
                            Delete
                        </button>
                    </td>
                  </tr>
                  );
              })}
              </tbody>
          </Table>
      </>
    )
}
