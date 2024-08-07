import {useDispatch} from 'react-redux'
import {useRef} from 'react'
const Controllers = () => {
  const dispatch = useDispatch()
  const inputElement = useRef();

  const handleIncrement = () => {
  dispatch({type: 'INCREMENT'})
  }
  const handleDecrement = () => {
    dispatch({type: 'DECREMENT'})
  }
  
  const handleAdd = () => {
  dispatch({type: 'ADD', payload: {add: inputElement.current.value}})
  inputElement.current.value = "";
  }
  
  const handleSubstract = () => {
    dispatch({type: 'SUBSTRACT', payload: {substract: inputElement.current.value}})
  inputElement.current.value = "";
  }
  
  const handlePrivacyToggle = () => {
    dispatch({type: 'PRIVACY_TOGGLE'})
  }
  
  return (  
    
  <div className="gap-2 d-flex flex-column align-items-center">
  <div class="btns-group">
          <button onClick={handleIncrement} type="button" className="btn btn-success btn-lg px-4 me-2 gap-3">+</button>
        <button onClick={handleDecrement} type="button" className="btn btn-primary btn-lg px-4 me-2">-</button>
        <button onClick={handlePrivacyToggle} type="button" className="btn btn-warning btn-lg px-4">PrivacyToggle</button>
</div>

     <div class="input-group my-3">
       <input type="number" style={{width: "8rem"}} ref={inputElement} class="form-control" placeholder="Enter number" aria-label="Recipient's username with two button addons" />
  <button  onClick={handleAdd} class="btn btn-primary" type="button">ADD</button>
  <button onClick={handleSubstract} class="btn btn-danger" type="button">MINUS</button>
  </div>

 </div>
      

      
      );
}

export default Controllers