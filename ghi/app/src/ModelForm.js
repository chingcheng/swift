import React, { useState } from 'react';

export default function ModelForm({ getModels, manufacturers }) {

    const [name, setName] = useState('')
    const [pictureUrl, setPictureUrl] = useState('')
    const [manufacturer, setManufacturer] = useState('')

    const handleNameChange = (event) => {
        const value = event.target.value
        setName(value)
    }

    const handlePictureUrlChange = (event) => {
        const value = event.target.value
        setPictureUrl(value)
    }

    const handleManufacturerChange = (event) => {
        const value = event.target.value
        setManufacturer(value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const data = {}
        data.name = name
        data.picture_url = pictureUrl
        data.manufacturer_id = manufacturer

        const url = 'http://localhost:8100/api/models/';
        const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        };

        const response = await fetch(url, fetchConfig);
        if (response.ok) {
          const appointment = await response.json();

          setName('')
          setPictureUrl('')
          setManufacturer('')
          getModels()
        }
    }

    return (
        <div className="my-5 container">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a vehicle model</h1>
            <form onSubmit={handleSubmit} id="add-appointment-form">
              <div className="form-floating mb-3">
                <input onChange={handleNameChange} value={name} placeholder="Name" required type="text" name="name" className="form-control"/>
                <label htmlFor="name">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handlePictureUrlChange} value={pictureUrl} placeholder="Picture URL" required type="text" name="picture_url" className="form-control"/>
                <label htmlFor="picture_url">Picture URL</label>
              </div>
              <div className="mb-3">
                <select onChange={handleManufacturerChange} value={manufacturer} required id="manufacturer" name="manufacturer" className="form-select">
                <option>Choose a manufacturer</option>
                {manufacturers.map(manufacturer => {
                    return (
                    <option key={manufacturer.id} value={manufacturer.id}>
                        {manufacturer.name}
                    </option>
                    );
                })}
                </select>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    )
}
