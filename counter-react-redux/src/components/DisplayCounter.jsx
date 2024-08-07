import {useSelector} from 'react-redux'
import PrivacyMessage from './PrivacyMessage.jsx'
const DisplayCounter = () => {
  let {counterVal} = useSelector(store => store.counter)
  let privacy = useSelector(store => store.privacy)
  
 
  return ( 
    <>
    { privacy ? <PrivacyMessage /> : <p className="lead mb-4">Current Counter value is: {counterVal}.</p>}
    </>
  );
}

export default DisplayCounter