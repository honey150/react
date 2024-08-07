import 'bootstrap/dist/css/bootstrap.min.css'
import {useState} from 'react'
function App() {
  const [color, setColor] = useState('Orange')
  document.body.style.backgroundColor = color;
  const handleColor = (clr) => {
  setColor(clr)

  // normal javadcript method
  
// let colorArr = ['Red','Green', 'Blue', 'Olive', 'Grey', 'Yellow', 'Pink', 'Purple', 'Lavender', 'White', 'Black']

// colorArr.forEach((clr) => {
//   if(clr === color) {
    
//     document.body.style.backgroundColor = color
//   }
//})
  }

  return (
    <>
    <div className="btn-container">
    <button onClick={() => handleColor("red")}  className="btn red">Red</button>
    <button onClick={() => handleColor("green")}  className="btn green">Green</button>
    <button onClick={() => handleColor("blue")}  className="btn blue">Blue</button>
    <button onClick={() => handleColor("olive")}  className="btn olive">Olive</button>
    <button onClick={() => handleColor("grey")}  className="btn grey">Grey</button>
    <button onClick={() => handleColor("yellow")}  className="btn yellow">Yellow</button>
    <button onClick={() => handleColor("pink")}  className="btn pink">Pink</button>
    <button onClick={() => handleColor("purple")}  className="btn purple">Purple</button>
    <button onClick={() => handleColor("lavender")}  className="btn lavender">Lavender</button>
    <button onClick={() => handleColor("white")}  className="btn white">White</button>
    <button onClick={() => handleColor("black")}  className="btn black">Black</button>
    </div>
    </>
  )
}

export default App
