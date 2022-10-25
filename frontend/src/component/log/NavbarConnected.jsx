import logo from '../style/ressources/logo.png'
import svgparameter from '../style/ressources/parameter.png' 
import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function NavbarConnected(){
    return (

        <header className="header">
        <nav>
            <img src="./Groupomania Logos (update 2022)/icon-left-font-monochrome-white.svg" alt="logo Groupomania"/>
            <ul class="header__main">
                <li class="header__user">
                    <p>Hervé Bompart</p>
                    <img src="https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg" alt="profile pic"/>
                </li>
                <li class="header__logout">
                    <p>Déconnection</p>
                    <i class="fa-solid fa-right-from-bracket"></i>
                </li>
                <li class="header__edit">
                    <p>Editer</p>
                    <i class="fa-solid fa-pen-to-square"></i>
                </li>
            </ul>
        </nav>
        <div class="header__banner">
        </div>
    </header>
    );
  }
  
  export default NavbarConnected