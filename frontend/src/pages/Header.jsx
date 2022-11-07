import logo from '../style/ressources/logo.png'
import svgparameter from '../style/ressources/parameter.png' 
import {Link, Navigate, useRouteLoaderData} from 'react-router-dom';
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../Utils/userContext";
import {AiOutlineEdit, AiOutlineLogout} from 'react-icons/ai'

function Header() {
  const [user, setUser] = useContext(UserContext);

    const logout = () => {
      localStorage.removeItem("token");
      setUser(null);
      Navigate('/login');
  }



  
 

  if(!user){

    return (
      <header className="header container-fluid">
        <nav className="container navbar navbar-light navbar-expand-lg ">
          <a className="navbar-brand mb-0 h1 header__info" cursor="pointer">
            <img src={logo} className="header__logo" alt="Logo de groupomania"/>Groupomania
          </a>
          <button data-toggle="collapse" className="header__btn--params navbar-toggler bg-light bg-warning">
            <img className="header__params" src={svgparameter}/>
          </button>
          <div className="collapse navbar-collapse offset-xl-5 offset-md-4 offset-xxl-6" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active header__link">
                <Link to="/signup">
                  <button className="header__button">Inscription</button>
                </Link>
                </li>
                <li className="nav-item active header__link">
                  <Link to="/signin">
                    <button className="header__button ">Connexion</button>
                  </Link>
                </li>
              </ul>
          </div>
        </nav>
          <div className="header__banner--secondary"></div>
      </header>
  )}else{
    return(
    <header className="header d-flex col-12 container">
        <nav className="d-flex">
          <Link to="/">
          <img src={logo} className="header__logo" alt="logo Groupomania"/>
          </Link>
            <ul className="header__main d-flex align-items-center ">
                  <li className="header__user align-items-center rounded-5">
                  <Link to='/homepage/profile' className='='>
                      <button className="rounded-5"style={{color:"black"}}><p style={{color:"black", fontSize:'12px'}}>{user.name + ' ' + user.firstname}</p></button>
                      <img src={user.picture} className="rounded-5" />
                    </Link>
                  </li>
                  <Link to="/EditProfile">
                  <li className="header__edit align-items-center rounded-5">
                      <button className='rounded-5' style={{color:"black", fontSize:'12px'}}><AiOutlineEdit className="header__icon"/></button>
                  </li>
                  </Link>
                  <li className="header__logout align-items-center rounded-5">
                      <button className='rounded-5' onClick={logout} style={{color:"black", fontSize:'12px'}}><AiOutlineLogout className="header__icon" /></button>                     
                  </li>
              </ul>
        </nav>
    </header>
)}}
  

export default Header;
  