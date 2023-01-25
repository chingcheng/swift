import React, {useEffect, useState} from 'react'

function SalesRecordForm(props) {

    const [automobile, setautomobile] = useState('');
    const [salesperson, setsalesperson] = useState('');
    const [customer, setcustomer] = useState('');
    const [price, setprice] = useState("");


   const handleAutomobileChange = (event) => {
        const value = event.target.value;
        setautomobile(value);
    }

    const handleSalesPersonChange = (event) => {
        const value = event.target.value;
        setsalesperson(value);
    }

    const handleCustomerChange = (event) => {
        const value = event.target.value;
        setcustomer(value);
    }

    const handlePriceChange = (event) => {
        const value = event.target.value;
        setprice(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};
        data.salesperson = salesperson;
        data.automobile = automobile;
        data.customer = customer;
        data.price = price;

        const salesRecordUrl = 'http://localhost:8090/api/salesrecord/';
        const fetchOptions = {
          method: 'post',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        };

        const response = await fetch(salesRecordUrl, fetchOptions);
        console.log(response)

        if (response.ok) {
            const salesRecord = await response.json();
            setautomobile("");
            setsalesperson("");
            setcustomer("");
            setprice("");

        }
    }


    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a new sales record</h1>
            <form onSubmit={handleSubmit} id="create-auto-form">
              <div className="mb-3">
                <select onChange={handleAutomobileChange} required id="automobile" name="automobile" className="form-select">
                    <option value="">Choose a automobile</option>
                    {props.automobile.map(automobile => {
                        return (
                            <option key={automobile.id} value={automobile.vin}>
                            {automobile.vin}
                            </option>
                        );
                    })}
                </select>
              </div>
              <div className="mb-3">
                <select onChange={handleSalesPersonChange} required id="salesperson"  name="salesperson" className="form-select">
                    <option value="">Choose a salesperson</option>
                    {props.salesperson.map(salesperson => {
                        return (
                            <option key={salesperson.id} value={salesperson.name}>
                            {salesperson.name}
                            </option>
                        );
                    })}
                </select>
              </div>

              <div className="mb-3">
                <select onChange={handleCustomerChange} required id="customer"  name="customer" className="form-select">
                    <option value="">Choose a customer</option>
                    {props.customer.map(customer => {
                        return (
                            <option key={customer.id} value={customer.id}>
                            {customer.name}
                            </option>
                        );
                    })}
                </select>
              </div>

              <div className="form-floating mb-3">
                    <input onChange={handlePriceChange}  placeholder="price" required type="number" name="price" id="price" className="form-control"/>
                    <label htmlFor="price">Price</label>
              </div>
              <button
                variant="contained"
                size="medium"
                style={{
                  backgroundColor: "black",
                  fontWeight: "bolder",
                  color: "white",
                  paddingTop: "4px",
                  paddingBottom: "4px",
                }}
              >
                CREATE
              </button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default SalesRecordForm;
