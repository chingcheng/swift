import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import AppointmentsList from './AppointmentsList';
import { useEffect , useState } from 'react';


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

  useEffect(() => {
    getAppointments();
  }, [setAppointments])

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="appointments">
            <Route path="" element={<AppointmentsList appointments={appointments} getAppointments={getAppointments} />}/>
            <Route path="new" />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
