import logo from '../style/ressources/logo.png'
import svgparameter from '../style/ressources/parameter.png' 

function Header() {
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
                <button className="header__button ">Connexion</button>
              </li>
              <li className="nav-item active">
                <button className="header__button ">Inscription</button>
              </li>
            </ul>
          </div>
        </nav>
          <div className="header__banner--secondary"></div>
      </header>
      
    );
  }
  
  export default Header;
  