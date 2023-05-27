import { Link } from 'react-router-dom';
import Clara from "../assets/Clara.jpg";
// import { Image } from "react-bootstrap";

function Sidebar() {
  return (
    <div className='sidebar'>
      <img src={Clara} alt='clara-profile-photo' className='profile'></img>
      {/* <Image src="../src/assets/Clara.jpg" roundedCircle/> */}

      <Link to='/' className='menu'>
        Home
      </Link>
      {''}
      <Link to='/about' className='menu'>
        About
      </Link>
      {''}
      <Link to='/experience' className='menu'>
        Experience
      </Link>
      {''}
      <Link to='/skills' className='menu'>
        Skills
      </Link>
      {''}
      <Link to='/interests' className='menu'>
        Interests
      </Link>

    </div>
  );
};

export default Sidebar;

