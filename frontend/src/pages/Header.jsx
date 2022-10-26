import logo from '../style/ressources/logo.png'
import svgparameter from '../style/ressources/parameter.png' 
import {Link} from 'react-router-dom';
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../Utils/userContext";

function Header() {
  const [user, setUser] = useContext(UserContext);

  if(!user){

    return (
      <header className="header container-fluid">
        <nav className="container navbar navbar-light navbar-expand-lg">
          <a className="navbar-brand mb-0 h1 header__info" cursor="pointer">
            <img src={logo} className="header__logo" alt="Logo de groupomania"/>Groupomania
          </a>
          <button data-toggle="collapse" className="header__btn--params navbar-toggler bg-light bg-warning">
            <img className="header__params" src={svgparameter}/>
          </button>
          <div className="collapse navbar-collapse offset-xl-5 offset-md-4 offset-xxl-6" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                <Link to="/signup">
                  <button className="header__button">Inscription</button>
                </Link>
                </li>
                <li className="nav-item active">
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
    <header className="header col-12 container-fluid">
        <nav className="container navbar navbar-light navbar-expand-lg">
          <img src={logo} className="header__logo" alt="logo Groupomania"/>
            <ul className="header__main row col-9 justify-content-end">
                  <li className="header__user rounded-5 col-3 row d-flex ">
                      <p style={{color:"black"}}>{user.name + ' ' + user.firstname}</p>
                      <img src={user.picture} />
                  </li>
                  <li className="header__logout rounded-5 col-3 ">
                      <p style={{color:"black"}}>Déconnection</p>
                      <i className="fa-solid fa-right-from-bracket"></i>
                  </li>
                  <li className="header__edit rounded-5 col-3">
                      <p style={{color:"black"}}>Editer</p>
                      <i className="fa-solid fa-pen-to-square"></i>
                  </li>
              </ul>
        </nav>
    </header>
)}}
  
  export default Header;
  