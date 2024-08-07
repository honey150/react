
import Header from '../components/Header.jsx'
import Slogan from '../components/Slogan.jsx'
import {useState} from 'react'
import './App.css'
function App() {
 let [counter, setCounter] = useState(15)
 console.log('value of counter: ', counter)
  const handleAddCounter = () => {

    counter > 19 ? setCounter(counter = 20) : setCounter(counter+=1);
   console.log(counter)
  }
  
  const handleRemoveCounter = () => {

    counter < 1 ? setCounter(counter = 0) : setCounter(counter+-1);
  }
  return (
    <>
    <Header />
    <Slogan />
    <button onClick={handleAddCounter}>Addbutton: {counter}</button>
    <button onClick={handleRemoveCounter}>Removebutton: {counter}</button>
    </>
  )
}

export default App
