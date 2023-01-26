import React, {useEffect, useState} from 'react'

function SalesRecordForm(props) {


    const [formautomobile, setformautomobile] = useState('');
    const [formautomobiles, setFormAutomobiles] = useState([])

    const [formsalesperson, setformsalesperson] = useState('');
    const [formcustomer, setformcustomer] = useState('');
    const [formprice, setformprice] = useState("");


   const handleAutomobileChange = (event) => {
        const value = event.target.value;
        setformautomobile(value);
    }

    const handleSalesPersonChange = (event) => {
        const value = event.target.value;
        setformsalesperson(value);
    }

    const handleCustomerChange = (event) => {
        const value = event.target.value;
        setformcustomer(value);
    }

    const handlePriceChange = (event) => {
        const value = event.target.value;
        setformprice(value);
    }


    const fetchAutomobiles = async () => {
      const url = 'http://localhost:8090/api/automobiles/';

      const response = await fetch(url);

      if (response.ok) {
      const data = await response.json();
      setFormAutomobiles(data.automobiles)
      }
  }


    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};
        data.salesperson = formsalesperson;
        data.automobile = formautomobile;
        data.customer = formcustomer;
        data.price = formprice;

        const salesRecordUrl = 'http://localhost:8090/api/salesrecord/';
        const fetchOptions = {
          method: 'post',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        };

        const response = await fetch(salesRecordUrl, fetchOptions);

        if (response.ok) {
            const salesRecord = await response.json();
            setformautomobile("");
            setformsalesperson("");
            setformcustomer("");
            setformprice("");

        }

    }

    useEffect(() => {
      fetchAutomobiles();
      }, []);




    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a sales record</h1>
            <form onSubmit={handleSubmit} id="create-salesrecord-form">
              <div className="mb-3">
                <select onChange={handleAutomobileChange} required id="automobile" name="automobile" className="form-select">
                    <option value="">Choose a automobile</option>
                    {/* {props.automobile.} */}
                    {formautomobiles.map(automobile => {
                      if (automobile.availability === true) {
                        return (
                            <option key={automobile.id} value={automobile.vin}>
                            {automobile.vin}
                            </option>
                        );
                      }
                    })}
                </select>
              </div>
              <div className="mb-3">
                <select onChange={handleSalesPersonChange} required id="salesperson"  name="salesperson" className="form-select">
                    <option value="">Choose a salesperson</option>
                    {props.salesperson.map(salesperson => {
                        return (
                            <option key={salesperson.id} value={salesperson.id}>
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
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default SalesRecordForm;
