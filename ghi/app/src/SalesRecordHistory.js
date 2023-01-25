import React, { useState, useEffect } from "react";

export default function SalesRecordHistory() {
    const [search, setSearch] = useState("");

    const [data,setdata] = useState([])

    const fetchSalesPersonHistory = async () => {
        const salesrecordUrl = "http://localhost:8090/api/salesrecord/";
        const salesrecordResponse = await fetch(salesrecordUrl);
        if (salesrecordResponse.ok){
            const data = await salesrecordResponse.json();
            const salesrecord = data.salesRecord;
            // setsalesrecord(salesrecord);
            setdata(salesrecord);
        }
    }

    useEffect(() => {fetchSalesPersonHistory();}, []);
        if (data === undefined){
            return null;
        }





  return (
    <>
      <h1>Sales person history</h1>
      <form id="form_search" name="form_search" method="GET" action="" className="form-inline">
        <div className="form-group">
          <div className="input-group">
            <input onChange={(event) => setSearch(event.target.value)} className="form-control" type="text" placeholder="Search a sales person"/>
          </div>
        </div>
      </form>
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
            {data && data.filter((salesRecord)=>salesRecord.salesperson.name.includes(search)).map((salesrecord) => {
                return(
                    <tr key={salesrecord.id}>
                        <td>{salesrecord.salesperson.name}</td>
                        <td>{salesrecord.customer.name}</td>
                        <td>{salesrecord.automobile.vin}</td>
                        <td>{salesrecord.price}</td>
                    </tr>
                );
            })}
        </tbody>
      </table>
    </>
  );
}
