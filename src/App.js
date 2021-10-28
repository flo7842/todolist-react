import logo from './logo.svg';
import './App.css';
import ToDo from './components/ToDo/ToDo';
import { useEffect, useState } from 'react';
import Layout from './components/Layout/Layout';

function App() {
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
    
    setMinute(dateFrm)
  }
  
  useEffect(() => {
    let intervalId
    intervalId = setInterval(handleOclock, 1000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="App">
      <Layout>
        <ToDo 
          title="Faire une app en React" 
          date="Ajouté le 2/09 à 10h"
          minute={minute}
        />
      </Layout>
    </div>
  );
}

export default App;
