import {useState, useCallback, useEffect, useRef} from 'react'

function App() {
const [range, setRange] = useState(8)
const [numberAllowed, setNumberAllowed] = useState(false)
const [stringAllowed, setStringAllowed] = useState(false)
const [symbolsAllowed, setSymbolsAllowed] = useState(false)
const [password, setPassword] = useState("")
const passwordRef = useRef(null)

const passwordGenerator = useCallback(() => {
  let pass = "";
  let str = "";
  stringAllowed ? str+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" : null;
  numberAllowed ? str+="0123456789" : null
  symbolsAllowed ? str+="@#_&()*;?':/$={}%[]'" : null ;
  
  for(let i = 1; i <= range; i++ ) {
    let randValue = Math.floor(Math.random() * str.length + 1)
    let strVal = str.charAt(randValue)
    pass+=strVal
  }
  setPassword(pass)
}, [range, numberAllowed, stringAllowed, symbolsAllowed, setPassword] )

useEffect(() => {
  passwordGenerator()
}, [range, numberAllowed, stringAllowed, symbolsAllowed])

const handleCopyPassword = useCallback(() => {
passwordRef.current?.select()
  window.navigator.clipboard.writeText(password)
, [password]})

  return (
  
<main className="container w-full h-screen bg-zinc-700 flex justify-center items-center">
<div class="password-generator p-5 bg-white rounded-lg">
<h1 className="font-bold text-2xl text-center mb-3">Password Generator</h1>
<div class="password-inputs">
<input className="border border-2 rounded-s-lg border-blue-700 p-1 outline-none border-e-0 ps-2 placeholder-blue-700 selection:bg-blue-600 selection:text-white" ref={passwordRef} type="text" value={password} readOnly />
<button onClick={handleCopyPassword} className="copy bg-white text-black hover:bg-blue-700  hover:text-white rounded-e-lg border-blue-700 border-2 p-1">Copy</button>
<h3 className="text-center text-lg font-bold mt-4">Select Password Inputs</h3>
<div class="pass-inputs flex justify-between items-center">
<input type="checkbox" onClick={() => {setNumberAllowed(prev => !prev)}}  id="number" />
<label className="font-semibold"  for="number">Number</label>
<input type="checkbox" onClick={() => {setStringAllowed(prev => !prev)}}  id="string" />
<label className="font-semibold" for="string">String</label>
<input type="checkbox" onClick={() => {setSymbolsAllowed(prev => !prev)}}  id="symbols" />
<label className="font-semibold" for="symbols">Symbols</label>
</div>
<h3 className="text-center text-lg my-2 font-semibold my-2">Choose your password range:</h3>
<div class="pass-range flex flex-col items-center gap-y-2">
<input className="self-stretch my-3" type="range" onChange={(e) => setRange(e.target.value)} on min={8} max={100} id="range"/>
<label className="font-semibold text-2xl text-blue-600" for="range">Password range: {range}</label>
</div>
</div>
</div>
</main>
    
  )
}

export default App
