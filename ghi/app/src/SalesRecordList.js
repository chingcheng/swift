import React, { useState, useEffect } from "react";

function SalesRecordList(salesrecord) {
    // async function deleteShoes(id) {
    //     const url = "http://localhost:8080/api/shoes/${id}";
    //     const fetchConfig = {
    //         method: "DELETE",
    //     }
    //     const response = await fetch(url, fetchConfig);
    //     return fetchShoes(response);

    // }

  return (
    <div className="atable table-striped">
        <h1>Sales Records</h1>
            <table
            className="table table-striped table-hover"
            style={{
                backgroundColor: "#f5f5f5",
                marginBottom: "50px",
                borderRadius: 10,
            }}
            >
            <thead>
                <tr>
                <th>Sales person</th>
                <th>Employee Number</th>
                <th>Customer</th>
                <th>VIN</th>
                <th>Sale price</th>
                </tr>
            </thead>
            <tbody>
                {salesrecord.salesrecord.map(salesrecords => {
                    return (
                        <tr key={salesrecords.id}>
                            <td>{salesrecords.salesperson.name}</td>
                            <td>{salesrecords.salesperson.employee_number}</td>
                            <td>{salesrecords.customer.name}</td>
                            <td>{salesrecords.automobile.vin}</td>
                            <td>{salesrecords.price}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
    );
}

export default SalesRecordList;
