import React, { useState } from 'react';

export default function ManufacturerForm({ getManufacturers }) {

    const [name, setName] = useState('')

    const handleNameChange = (event) => {
        const value = event.target.value
        setName(value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const data = {}
        data.name = name

        const url = 'http://localhost:8100/api/manufacturers/';
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

          setName('');
          getManufacturers()
        }
    }

    return (
        <div className="my-5 container">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a manufacturer</h1>
            <form onSubmit={handleSubmit} id="add-appointment-form">
              <div className="form-floating mb-3">
                <input onChange={handleNameChange} value={name} placeholder="Name" required type="text" name="name" className="form-control"/>
                <label htmlFor="name">Name</label>
              </div>
              <button className="btn btn-primary">Add</button>
            </form>
          </div>
        </div>
      </div>
    )
}
