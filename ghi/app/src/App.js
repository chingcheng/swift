import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import AppointmentsList from './AppointmentsList';
import AppointmentForm from './AppointmentForm';
import TechnicianForm from './TechnicianForm';
import { useEffect , useState } from 'react';
import TechniciansList from './TechniciansList';


function App() {
  const [appointments, setAppointments] = useState([])
  const getAppointments = async () => {
    const url= 'http://localhost:8080/api/appointments/'
    const response = await fetch(url)

    if (response.ok) {
      const data = await response.json()
      const appointments = data.appointments
      console.log(appointments)
      setAppointments(appointments)
    }
  }

  const [technicians, setTechnicians] = useState([])
  const getTechnicians = async () => {
    const url= 'http://localhost:8080/api/technicians/'
    const response = await fetch(url)

    if (response.ok) {
      const data = await response.json()
      const technicians = data.technicians
      console.log(technicians)
      setTechnicians(technicians)
    }
  }

  useEffect(() => {
    getAppointments();
    getTechnicians();
  }, [])

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="appointments">
            <Route path="" element={<AppointmentsList appointments={appointments} getAppointments={getAppointments} />}/>
            <Route path="new" element={<AppointmentForm getAppointments={getAppointments} />}/>
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
