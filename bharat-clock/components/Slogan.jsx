import {useEffect, useState} from 'react'

const Slogan = () => {
  let [time, setTime] = useState(new Date());
  useEffect(() => {
    let intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000)
    
  return () => {
    clearInterval(intervalId)
  }
  
  }, [])
  return (
    <p>This clock is showimg the time of India in IST standard. Current Time is: <span>{time.toLocaleTimeString()}</span> and Date: <span>{time.toLocaleDateString()}</span></p>
    );
}
export default Slogan;