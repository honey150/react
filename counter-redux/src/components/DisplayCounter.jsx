import {useSelector} from 'react-redux'
import PrivacyMessage from './PrivacyMessage.jsx'
const DisplayCounter = () => {
  let counter = useSelector(store => store.counter)
  let privacy = useSelector(store => store.privacy)
  console.log(privacy)
  return ( 
    <>
    { privacy ? <PrivacyMessage /> : <p className="lead mb-4">Current Counter value is: {counter}.</p>}
    </>
  );
}

export default DisplayCounter