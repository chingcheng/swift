import React, { useState } from "react";

export default function SalesRecordHistory(salesrecords) {

  const [name, setName] = useState('');
  const handleNameChange = (event) => {
      const value = event.target.value;
      setName(value);
  }

    return (
    <>
        <h1>Sales Person History</h1>
        <div className="mb-3">
            <select value={name} onChange={handleNameChange} required id="name" name="name" className="form-select">
                <option value="">Choose a sales person</option>
                {salesrecords.salesperson.map(salespersons => {
                        return (
                            <option key={salespersons.name} value={salespersons.name}>
                                {salespersons.name}
                            </option>
                        );
                    })}
            </select>
        </div>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Sales Person</th>
                    <th>Customer</th>
                    <th>VIN</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {salesrecords.salesrecords.filter(salesRecord => salesRecord.salesperson.name === name)
                .map(sale => {
                return (
                    <tr key={sale.automobile.vin}>
                        <td>{sale.salesperson.name}</td>
                        <td>{sale.customer.name}</td>
                        <td>{sale.automobile.vin}</td>
                        <td>${sale.price}</td>
                    </tr>
                    );
                })}
            </tbody>
        </table>
    </>
    )
}
