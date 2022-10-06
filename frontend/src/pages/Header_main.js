import image_main from '../style/ressources/entreprise.webp'
import image_meeting from '../style/ressources/meeting.webp'
import image_new from '../style/ressources/new.webp'
import logo from '../style/ressources/logo.png'

function Header_main() {
    return (
      <div>
      <main className="main">
        <img className="main__img" src={image_main}></img>
        <div className="main__banner">
            <div className="container col-12">
            <div className="main__cards row justify-content-between align-items-center">
                <aside className="container__card col-lg-5 col-sm-12">
                    <img src={image_new} alt="image d'employé travaillant"></img>
                    <div class="container__card--register ">
                        <h4><span>Pas</span> inscrit ?</h4>
                        <p>Inscrivez vous !</p>
                        <button className="">Inscription</button>
                    </div>
                </aside>
                <div className="main__logo--card col-1">
                    <img className="main__logo" src={logo} alt="logo groupomania"/>
                </div>
                <aside className="container__card col-lg-5 col-sm-12">
                    <img src={image_meeting} alt="image d'employé travaillant"></img>
                    <div class="container__card--connect">
                        <h4><span>Déjà</span> inscrit ?</h4>
                        <p>Connectez vous !</p>
                        <button className="">Connexion</button>
                    </div>
                </aside>
            </div>
            </div>
        </div>
      </main>
      </div>
      
    );
  }
  
  export default Header_main;
  