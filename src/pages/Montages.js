import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';


function Montages() {
  return (
    <><nav>
      <Link to="/horizontallinearstepper">HorizontalLinearStepper</Link>
    </nav><div className='montages'>
        <Navbar></Navbar>

      </div></>
    
  );
}

export default Montages;