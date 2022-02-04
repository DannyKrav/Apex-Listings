import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


function Home() {






  return (
    <div className='home-container-main'>

      <div className='home-main-div'>


        <Link to='/items'><button className='home-button'>
          <p>Items are 25% off!</p>
        </button>
        </Link>


      </div>

    </div>
  )
}

export default Home;
