
import Wrapper from '../assets/wrappers/ErrorPage'
import { Link,useRouteError } from 'react-router-dom'
import img from '../assets/not-found.svg'
const Error = () => {
  const error = useRouteError();
  console.log('====================================');
  console.log(error);
  console.log('====================================');
  
  return (
    <div>
      <h1>Error</h1>
    </div>
  )
}

export default Error
