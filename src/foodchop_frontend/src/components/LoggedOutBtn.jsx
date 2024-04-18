import { useAuth } from "../use-auth-client";
// import {icp} from '../assets/images';


// eslint-disable-next-line react/prop-types
const LoggedOutBtn = ({content}) => {
    const { login } = useAuth();

    return (
      <div>
        <button onClick={login} className='bg-secondary flex text-white md:py-3 py-1 md:text-xl text-base md:font-semibold font-medium hover:bg-secondary/95 hover:text-white active:bg-primary active:text-white md:px-6 px-3 rounded-md'>
        {/* <img src={icp} /> */}
          {content}
        </button>
      </div>
    )
  }
  
  export default LoggedOutBtn