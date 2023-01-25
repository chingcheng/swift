import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect , useState } from 'react';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturersList from './ManufacturersList';
import ManufacturerForm from './ManufacturerForm';
import ModelsList from './ModelsList';
import AppointmentsList from './AppointmentsList';
import AppointmentForm from './AppointmentForm';
import TechnicianForm from './TechnicianForm';
import TechniciansList from './TechniciansList';
import ServiceHistory from './ServiceHistory';


function App() {
  const [manufacturers, setManufacturers] = useState([])
  const getManufacturers = async () => {
    const url = 'http://localhost:8100/api/manufacturers/'
    const response = await fetch(url)

    if (response.ok) {
      const data = await response.json()
      const manufacturers = data.manufacturers
      setManufacturers(manufacturers)
    }
  }

  const [models, setModels] = useState([])
  const getModels = async () => {
    const url = 'http://localhost:8100/api/models/'
    const response = await fetch(url)

    if (response.ok) {
      const data = await response.json()
      const models = data.models
      setModels(models)
    }
  }

  const [appointments, setAppointments] = useState([])
  const getAppointments = async () => {
    const url = 'http://localhost:8080/api/appointments/'
    const response = await fetch(url)

    if (response.ok) {
      const data = await response.json()
      const appointments = data.appointments
      setAppointments(appointments)
    }
  }

  const [technicians, setTechnicians] = useState([])
  const getTechnicians = async () => {
    const url = 'http://localhost:8080/api/technicians/'
    const response = await fetch(url)

    if (response.ok) {
      const data = await response.json()
      const technicians = data.technicians
      setTechnicians(technicians)
    }
  }

  useEffect(() => {
    getAppointments()
    getTechnicians()
    getManufacturers()
    getModels()
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
          </Route>
          <Route path="appointments">
            <Route path="" element={<AppointmentsList appointments={appointments} getAppointments={getAppointments} />}/>
            <Route path="new" element={<AppointmentForm getAppointments={getAppointments} />}/>
            <Route path="service-history"  element={<ServiceHistory appointments={appointments} setAppointments={setAppointments}/>}/>
          </Route>
          <Route path="technicians">
            <Route path="" element={<TechniciansList technicians={technicians} getTechnicians={getTechnicians} />}/>
            <Route path="new" element={<TechnicianForm getTechnicians={getTechnicians}/>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
