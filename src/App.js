import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ToDo from './components/ToDo/ToDo';
import { useEffect, useState } from 'react';

function App() {

  let dateNow = new Date();
  let hourFormat = String(dateNow.getHours()).length === 1 ? `0${dateNow.getHours()}` : dateNow.getHours()
  let minuteFormat = String(dateNow.getMinutes()).length === 1 ? `0${dateNow.getMinutes()}` : dateNow.getMinutes()
  let secondFormat = String(dateNow.getSeconds()).length === 1 ? `0${dateNow.getSeconds()}` : dateNow.getSeconds()

  let dateDay = hourFormat + ':' + minuteFormat + ':' + secondFormat

  const [minute, setMinute] = useState(null);


  useEffect(() => {
    let intervalId
    intervalId = setInterval(() => {
      
      setMinute(dateDay)
      
    }, 1000)

    return () => clearInterval(intervalId)
  }, [minute])

  return (
    <div className="App">
      <Header/>
      <ToDo 
        title="Faire une app en React" 
        date="Ajouté le 2/09 à 10h"
        minute={minute}
      />
      <Footer/>
    </div>
  );
}

export default App;
