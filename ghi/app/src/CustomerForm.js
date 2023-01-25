import React, {useEffect, useState} from 'react'

function CustomerForm() {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone_number, setPhone_number] = useState("");

    const handleChangeName = (event) => {
        const value = event.target.value
        setName(value);
    }
    const handleChangeAddress = (event) => {
        const value = event.target.value

        setAddress(value);
    }
    const handlePhoneNumber = (event) => {
        const value = event.target.value

        setPhone_number(value);
    }

    const handleSubmit = async (event) => {
      event.preventDefault();
      const data = {};
      data.name = name;
      data.address = address;
      data.phone_number = phone_number;

      const customerUrl = 'http://localhost:8090/api/potentialcustomer/';
      const fetchOptions = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const customerResponse = await fetch(customerUrl,fetchOptions);
      console.log(customerResponse)

      if (customerResponse.ok) {
        const customer = await customerResponse.json();
        setName("");
        setAddress("");
        setPhone_number("");
      }
    }

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a new Customer</h1>
                    <form onSubmit={handleSubmit} id="create-customer-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleChangeName} value={name} placeholder="Name" required type="text" name="name" id="name" className="form-control"/>
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleChangeAddress}  placeholder="Address" required type="text" name="address" id="address" className="form-control"/>
                            <label htmlFor="address">Address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handlePhoneNumber}  placeholder="Phone Number" required type="text" name="phone_number" id="phone_number" className="form-control"/>
                            <label htmlFor="phone_number">Phone Number</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
         </div>
    )
}
export default CustomerForm;
