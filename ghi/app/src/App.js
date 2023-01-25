import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import SalesRecordList from './SalesRecordList';
import SalesPersonForm from './SalesPersonForm';
import CustomerForm from './CustomerForm';
import React, { useEffect, useState} from 'react'
import SalesRecordForm from './SalesRecordForm';
import SalesRecordHistory from './SalesRecordHistory';



function App() {

  const [salesrecord,setsalesrecord] = useState([])
  const fetchSalesRecord = async () => {
    const salesrecordUrl = "http://localhost:8090/api/salesrecord/";
    const salesrecordResponse = await fetch(salesrecordUrl);
    if (salesrecordResponse.ok){
        const data = await salesrecordResponse.json();

        const salesrecord = data.salesRecord;
        setsalesrecord(salesrecord);
    }
  }

  useEffect(() => {fetchSalesRecord();}, []);
    if (salesrecord === undefined){
      return null;
    }



  return (
    <BrowserRouter>
      <Nav />
      <div className="container">

        <Routes>
          {/* <Route path="/" element={<MainPage />} />
          /* <Route path="manufacturers">
            <Route path="" element={<ManufacturerList />} />
            <Route path="new" element={<ManufacturerForm />} />
          </Route>
          <Route path="models">
            <Route path="" element={<ModelList />} />
            <Route path="customer" element={<ModelListCustomer />} />
            <Route path="new" element={<ModelForm />} />
          </Route>
          <Route path="automobiles">
            <Route path="" element={<AutomobileList />} />
            <Route path="new" element={<AutomobileForm />} />
          </Route> */}

          <Route path="salesperson">
            <Route path="new" element={<SalesPersonForm />} />
          </Route>
          <Route path="customer">
            <Route path="new" element={<CustomerForm />} />
          </Route>
          <Route path="salesrecord">
            <Route path="" element={<SalesRecordList salesrecord={salesrecord} />} />
            <Route path="new" element={<SalesRecordForm salesrecord={salesrecord}/>} />
            <Route path="history" element={<SalesRecordHistory salesrecord={salesrecord}/>} />

          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
