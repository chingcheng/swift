import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect , useState } from 'react';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturersList from './ManufacturersList';
import ManufacturerForm from './ManufacturerForm';
import ModelsList from './ModelsList';
import ModelForm from './ModelForm';
import AutomobileList from './AutomobilesList';
import AutomobileForm from './AutomobileForm';
import TechnicianForm from './TechnicianForm';
import TechniciansList from './TechniciansList';
import AppointmentsList from './AppointmentsList';
import AppointmentForm from './AppointmentForm';
import ServiceHistory from './ServiceHistory';
import SalesPersonForm from './SalesPersonForm';
import CustomerForm from './CustomerForm';
import SalesRecordForm from './SalesRecordForm';
import SalesRecordHistory from './SalesRecordHistory';
import SalesRecordList from './SalesRecordList';


function App() {
  const [manufacturers, setManufacturers] = useState([])
  const [models, setModels] = useState([])
  const [automobiles, setAutomobiles] = useState([])
  const [technicians, setTechnicians] = useState([])
  const [appointments, setAppointments] = useState([])
  const [salesperson, setSalesperson] = useState([])
  const [customer, setCustomer] = useState([])
  const [salesrecords,setSalesrecords] = useState([])


  const getManufacturers = async () => {
    const url = 'http://localhost:8100/api/manufacturers/'
    const response = await fetch(url)

    if (response.ok) {
      const data = await response.json()
      const manufacturers = data.manufacturers
      setManufacturers(manufacturers)
    }
  }

  const getModels = async () => {
    const url = 'http://localhost:8100/api/models/'
    const response = await fetch(url)

    if (response.ok) {
      const data = await response.json()
      const models = data.models
      setModels(models)
    }
  }

  const fetchAutomobiles = async () => {
    const url = 'http://localhost:8090/api/automobiles/'
    const response = await fetch(url)

    if (response.ok) {
      const data = await response.json()
      setAutomobiles(data.automobiles)
      }
  }

  const getTechnicians = async () => {
    const url = 'http://localhost:8080/api/technicians/'
    const response = await fetch(url)

    if (response.ok) {
      const data = await response.json()
      const technicians = data.technicians
      setTechnicians(technicians)
    }
  }

  const getAppointments = async () => {
    const url = 'http://localhost:8080/api/appointments/'
    const response = await fetch(url)

    if (response.ok) {
      const data = await response.json()
      const appointments = data.appointments
      setAppointments(appointments)
    }
  }

  const fetchSalesperson = async () => {
    const url = 'http://localhost:8090/api/salesperson/'
    const response = await fetch(url)

    if (response.ok) {
      const data = await response.json()
      setSalesperson(data.salesPerson)
      }
  }

  const fetchCustomer = async () => {
    const url = 'http://localhost:8090/api/potentialcustomer/'
    const response = await fetch(url)

    if (response.ok) {
      const data = await response.json()
      setCustomer(data.potentialCustomer)
      }
  }

  const fetchSalesRecord = async () => {
    const salesrecordUrl = "http://localhost:8090/api/salesrecord/"
    const salesrecordResponse = await fetch(salesrecordUrl)

    if (salesrecordResponse.ok){
        const data = await salesrecordResponse.json()
        const salesrecords = data.salesRecord
        setSalesrecords(salesrecords)
    }
  }

  useEffect(() => {
    getManufacturers()
    getModels()
    fetchAutomobiles()
    getTechnicians()
    getAppointments()
    fetchSalesperson()
    fetchCustomer()
    fetchSalesRecord()
  }, [])


  return (
    <BrowserRouter>
      <Nav />
      <div className="container">

        <Routes>
          <Route path="/" element={<MainPage />} />

          <Route path="manufacturers">
            <Route path="" element={<ManufacturersList manufacturers={manufacturers} getManufacturers={getManufacturers} />} />
            <Route path="new" element={<ManufacturerForm getManufacturers={getManufacturers} />}/>
          </Route>

          <Route path="models">
            <Route path="" element={<ModelsList models={models} getModels={getModels} />}/>
            <Route path="new" element={<ModelForm getModels={getModels} manufacturers={manufacturers}/>}/>
          </Route>

          <Route path="automobiles">
            <Route path="" element={<AutomobileList />} />
            <Route path="new" element={<AutomobileForm fetchAutomobiles={fetchAutomobiles} models={models}/>} />
          </Route>

          <Route path="appointments">
            <Route path="" element={<AppointmentsList appointments={appointments} getAppointments={getAppointments} />}/>
            <Route path="new" element={<AppointmentForm getAppointments={getAppointments} technicians={technicians} />}/>
            <Route path="history"  element={<ServiceHistory appointments={appointments} setAppointments={setAppointments}/>}/>
          </Route>

          <Route path="technicians">
            <Route path="" element={<TechniciansList technicians={technicians} getTechnicians={getTechnicians} />}/>
            <Route path="new" element={<TechnicianForm getTechnicians={getTechnicians}/>} />
          </Route>

          <Route path="salesrecords">
            <Route path="" element={<SalesRecordList salesrecord={salesrecords} />} />
            <Route path="new" element={<SalesRecordForm automobiles={automobiles} salesperson={salesperson} customer={customer} fetchSalesRecord={fetchSalesRecord} fetchAutomobiles={fetchAutomobiles}/>} />
            <Route path="history" element={<SalesRecordHistory salesrecords={salesrecords} salesperson={salesperson}/>} />
          </Route>

          <Route path="salesperson">
            <Route path="new" element={<SalesPersonForm fetchSalesperson={fetchSalesperson}/>} />
          </Route>
          <Route path="customer">
            <Route path="new" element={<CustomerForm fetchCustomer={fetchCustomer}/>} />
          </Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
