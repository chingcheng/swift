import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import SalesRecordList from './SalesRecordList';
import SalesPersonForm from './SalesPersonForm';
import CustomerForm from './CustomerForm';
import React, { useEffect, useState} from 'react'
import SalesRecordForm from './SalesRecordForm';
import SalesRecordHistory from './SalesRecordHistory';
import AutomobileList from './AutomobilesList';
import AutomobileForm from './AutomobileForm';


function App() {

  const [salesrecord,setSalesrecord] = useState([])
  const fetchSalesRecord = async () => {
    const salesrecordUrl = "http://localhost:8090/api/salesrecord/";
    const salesrecordResponse = await fetch(salesrecordUrl);
    if (salesrecordResponse.ok){
        const data = await salesrecordResponse.json();

        const salesrecord = data.salesRecord;
        setSalesrecord(salesrecord);
    }
  }

  const [automobile, setAutomobile] = useState([]);
  const fetchAutomobiles = async () => {
    const url = 'http://localhost:8090/api/automobiles/';
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();

      setAutomobile(data.automobiles)
      }
  }

  const [salesperson, setSalesperson] = useState([]);
  const fetchSalesperson = async () => {
    const url = 'http://localhost:8090/api/salesperson/';
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setSalesperson(data.salesPerson)
      }
  }

  const [customer, setCustomer] = useState([]);
  const fetchCustomer = async () => {
    const url = 'http://localhost:8090/api/potentialcustomer/';
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setCustomer(data.potentialCustomer)
      }
  }
  // console.log("customer: ",customer)
  // console.log("salesperson: ",salesperson)
  // console.log("automobile: ",automobile)
  // console.log("salesrecord: ",salesrecord)


  useEffect(() => {
    fetchSalesRecord();
    fetchAutomobiles();
    fetchSalesperson();
    fetchCustomer();
  }, []);



  return (
    <BrowserRouter>
      <Nav />
      <div className="container">

        <Routes>
          <Route path="/" element={<MainPage />} />
          
          <Route path="automobiles">
            <Route path="" element={<AutomobileList />} />
            <Route path="new" element={<AutomobileForm />} />
          </Route>

          <Route path="salesperson">
            <Route path="new" element={<SalesPersonForm />} />
          </Route>
          <Route path="customer">
            <Route path="new" element={<CustomerForm />} />
          </Route>
          <Route path="salesrecord">
            <Route path="" element={<SalesRecordList salesrecord={salesrecord} />} />
            <Route path="new" element={<SalesRecordForm automobile={automobile} salesperson={salesperson} customer={customer} />} />
            <Route path="history" element={<SalesRecordHistory salesrecord={salesrecord}/>} />

          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
