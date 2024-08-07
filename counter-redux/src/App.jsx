import Header from './components/Header.jsx'
import DisplayCounter from './components/DisplayCounter.jsx'
import Controllers from './components/Controllers.jsx'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  
  return (
<div className="px-4 py-5 my-5 text-center">
    <Header />
    <div class="col-lg-6 mx-auto">
    <DisplayCounter />
    <Controllers />
    </div>
  </div>
  )
}

export default App
