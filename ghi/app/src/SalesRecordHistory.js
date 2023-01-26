import React, { useState, useEffect } from "react";

export default function SalesRecordHistory(props) {

    const [data,setdata] = useState([])

    const fetchSalesPersonHistory = async () => {
        const salesrecorddUrl = "http://localhost:8090/api/salesrecord/";
        const salesrecordResponse = await fetch(salesrecorddUrl);
        if (salesrecordResponse.ok){
            const data = await salesrecordResponse.json();
            const salesrecord = data.salesRecord;
            // setsalesrecord(salesrecord);
            setdata(salesrecord);
        }
    }



    const [salespersons, setSalespersons] = useState([])
    const fetchsalespersonData = async () => {
        const url = 'http://localhost:8090/api/salesperson/';
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setSalespersons(data.salesPerson)
        }
      }

    const [salesperson, setsalesperson] = useState("");
    const salespersonchange = (event) => {
      const value = event.target.value;
      setsalesperson(value)
    }


    useEffect(() => {
      fetchSalesPersonHistory();
      fetchsalespersonData();
    }, []);



  return (
    <>
      {/* <form id="form_search" name="form_search" method="GET" action="" className="form-inline">
        <div className="form-group">
          <div className="form-group">
            <select onChange={salespersonchange} required id="salesperson" name="saleperson" className="form_select" value={salesperson}>
              <option value="">Choose a sales person</option>
              {data.map(salespersons => {
                return (
                  <option key={salespersons.id} value={salespersons.id}>
                  {salespersons.name}
                  </option>
                );
              })}

            </select>

          </div>
        </div>
      </form> */}

    <div className="my-5 container">
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <div className="card-body">
              <form id="create-sale-form">
                <h1 className="card-title">Sales Person History</h1>
                  <div className="row">
                  <div className="col">
                  <div className="mb-3">
                  <select onChange={salespersonchange} required id="salesperson" name="saleperson" className="form_select" value={salesperson}>
                    <option value="">Choose a sales person</option>
                      {salespersons.map(salesperson => {
                        return (
                          <option key={salesperson.id} value={salesperson.id}>
                          {salesperson.name}
                          </option>
                        );
                      })}
                      </select>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <table className="table table-striped table-hover"
        style={{
          backgroundColor: "#f5f5f5",
          marginBottom: "50px",
          borderRadius: 8,
        }}>
      <thead>
        <tr>
          <th>Sales person</th>
          <th>Customer</th>
          <th>VIN</th>
          <th>Sale price</th>
        </tr>
      </thead>
    <tbody>
      {data && data.filter((salesRecord) => salesRecord.salesperson.name.includes(salesperson)).map((salesrecord) => {
        // if(salesrecord.salesperson.id == salesperson){
          return (
            <tr key={salesrecord.id}>
              <td>{salesrecord.salesperson.name}</td>
              <td>{salesrecord.customer.name}</td>
              <td>{salesrecord.automobile.vin}</td>
              <td>{salesrecord.price}</td>
            </tr>
          );
        // }
      })}


    </tbody>
    </table>

    </>
  )
}
