import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Nav.css';
import axios from 'axios';
import { useHistory } from 'react-router';
import { updateUser, logout } from '../../redux/reducer';
import { useSelector, useDispatch } from "react-redux";


function Nav() {
  const history = useHistory();
  const [user, setUser] = useState(false);

  const currUser = useSelector(state => state.username);
  const dispatch = useDispatch();


  function getUser() {
    axios
      .get("/api/auth/getUser")
      .then((res) => {
        if (res.data.username) {
          dispatch(updateUser(res.data));
          setUser(true);
        }
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  }

  function logoutUser() {
    axios
      .post("/api/auth/logoutUser")
      .then((_) => {
        alert("You Have Been Logged Out!");
        dispatch(logout());
        setUser(false);
        history.push("/");

      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  }


  let userLogin = (
    <div className="nav-login-container">
      <Link to='/login'><button className='nav-user-button'>Login</button></Link>
      <Link to='/register'><button className='nav-user-button'>Register</button></Link>
    </div>
  );
  <div className="nav-login-container">
    <Link to="/login">
      <button className="nav-login-button">Login</button>
    </Link>
    <Link to="/register">
      <button className="nav-register-button">Register</button>
    </Link>
  </div>


  useEffect(() => {
    getUser();
  }, []);



  return (
    <div className='nav-container-main'>

      <div className='nav-title-div'><p>Apex Listings</p></div>

      <div className='nav-links-box'>
        <Link to='/'><button className='nav-links-button'>Home</button></Link>
        <Link to='/items'><button className='nav-links-button'>Items</button></Link>
        <Link to='/cart'><button className='nav-links-button'>Cart</button></Link>
      </div>

      <div className='nav-user-login-box'>
        {!user ? (
          userLogin
        ) : (
          <div className="nav-user-username">
            <p className="user-username">{`Welcome, ${currUser}`}</p>
            <div className='nav-user-logout'>
              <button className='logout-button' onClick={() => logoutUser()}>
                <p>Logout</p>
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
  )
}

export default withRouter(Nav);
