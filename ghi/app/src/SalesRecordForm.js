import React, {useEffect, useState} from 'react'

function SalesRecordForm(props) {

    const [formAutomobile, setFormAutomobile] = useState('');
    const [formAutomobiles, setFormAutomobiles] = useState([])

    const [formSalesperson, setFormSalesperson] = useState('');
    const [formCustomer, setFormCustomer] = useState('');
    const [formPrice, setFormPrice] = useState("");


   const handleAutomobileChange = (event) => {
        const value = event.target.value;
        setFormAutomobile(value);
    }

    const handleSalespersonChange = (event) => {
        const value = event.target.value;
        setFormSalesperson(value);
    }

    const handleCustomerChange = (event) => {
        const value = event.target.value;
        setFormCustomer(value);
    }

    const handlePriceChange = (event) => {
        const value = event.target.value;
        setFormPrice(value);
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
        data.salesperson = formSalesperson;
        data.automobile = formAutomobile;
        data.customer = formCustomer;
        data.price = formPrice;

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
            setFormAutomobile("");
            setFormSalesperson("");
            setFormCustomer("");
            setFormPrice("");
            props.fetchAutomobiles()
            props.fetchSalesRecord()
            setFormAutomobiles()
            props.updateUnsold()
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
                <select onChange={handleAutomobileChange} value={formAutomobile} required id="automobile" name="automobile" className="form-select">
                    <option value="">Choose a automobile</option>
                    {props.unsold.map(automobile => {
                        return (
                            <option key={automobile.id} value={automobile.vin}>
                            {automobile.vin}
                            </option>
                        );
                      }
                    )}
                </select>
              </div>
              <div className="mb-3">
                <select onChange={handleSalespersonChange} value={formSalesperson} required id="salesperson"  name="salesperson" className="form-select">
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
                <select onChange={handleCustomerChange} value={formCustomer} required id="customer"  name="customer" className="form-select">
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
                    <input onChange={handlePriceChange} value={formPrice} placeholder="price" required type="number" name="price" id="price" className="form-control"/>
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
