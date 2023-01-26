import React, {useEffect, useState} from 'react'

function SalesPersonForm() {
    const [name, setName] = useState('');
    const [employee_number, setEmployeeNumber] = useState("");

    const handleChangeName = (event) => {
        setName(event.target.value);
    }
    const handleChangeEmployeeNumber = (event) => {
        setEmployeeNumber(event.target.value);
    }
    const handleSubmit = async (event) => {
      event.preventDefault();
      const data = {};
      data.name = name;
      data.employee_number = employee_number;

      const salespersonUrl = 'http://localhost:8090/api/salesperson/';
      const fetchOptions = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const salespersonResponse = await fetch(salespersonUrl, fetchOptions);

      if (salespersonResponse.ok) {
        const salesperson = await salespersonResponse.json();
        setName("");
        setEmployeeNumber("");
      }
    }

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a Sales Person</h1>
                    <form onSubmit={handleSubmit} id="create-salesman-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleChangeName} value={name} placeholder="Name" required type="text" name="name" id="name" className="form-control"/>
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleChangeEmployeeNumber}  placeholder="Employee Number" required type="text" name="employee_number" id="employee_number" className="form-control"/>
                            <label htmlFor="employee_number">Employee Number</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
         </div>
    )
}
export default SalesPersonForm;
