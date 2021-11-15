import logo from './logo.svg';
import './App.css';
import ToDo from './components/ToDo/ToDo';
import { useEffect, useState } from 'react';
import Layout from './components/Layout/Layout';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBin, faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter } from 'react-router-dom';

library.add(fab, faTrashAlt, faEdit)

// Sert pour le mock Api
// const fetchUser = async () => {
//   const response = await fetch('http://localhost:3000/user')
//   if(!response.ok) {
//     throw Error("Une erreur est survenue, veuillez réesayer")
//   }
//   return response.json()
// }


function App() {
  const [username, setUsername] = useState(null)
  const [status, setStatus] = useState('Loading')
  const [minute, setMinute] = useState(null);
  

  const dateFrm = () => {
    let dateNow = new Date();
    let hourFormat = String(dateNow.getHours()).length === 1 ? `0${dateNow.getHours()}` : dateNow.getHours()
    let minuteFormat = String(dateNow.getMinutes()).length === 1 ? `0${dateNow.getMinutes()}` : dateNow.getMinutes()
    let secondFormat = String(dateNow.getSeconds()).length === 1 ? `0${dateNow.getSeconds()}` : dateNow.getSeconds()
    let dateDay = hourFormat + ':' + minuteFormat + ':' + secondFormat
    return dateDay
  }

  const handleOclock = () => {
    
    setMinute('dateFrm')
  }
  
  useEffect(() => {

    


    let intervalId
    intervalId = setInterval(handleOclock, 1000)
    return () => clearInterval(intervalId)
  }, [minute])

  return (
    <div className="App">
      <BrowserRouter>
        <Layout>

        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
