import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import profilePic from '../style/ressources/new.webp'
import thinHeart from '../style/ressources/thinheart.png'
import share from '../style/ressources/share.png'

function Homepage() {
    return (
<main className="homepage container-fluid pt-3">
        <aside className="container d-flex rounded-2">
            <div className="col-2 homepage__profile d-flex mt-4">
                <img src={profilePic} className="homepage__profile--pic" alt="portrait individuel"></img>
                <p>Nom utilisateur</p>
            </div>
            <div className="col-10 homepage__textarea d-flex mt-4">
                <textarea placeholder="Quoi de neuf ?" className="rounded-2"></textarea>
                <div className="homepage__button d-flex offset-6 mt-4 mb-4">
                    <button>Ajouter photo</button>
                    <button>Envoyer</button>
                </div>                
            </div>
        </aside>    
        <div className="homepage__border col-12 container"></div>
        <h4 className="container">Dernières publications</h4>
        <aside className="container d-flex rounded-2">
            <div className="col-2 homepage__profile d-flex mt-4">
                <img src={profilePic} className="homepage__profile--pic" alt="portrait individuel"></img>
                <p>Nom utilisateur</p>
                <div className="homepage__update d-flex">
                    <button className="mt-2">Modifier</button>
                    <button className="mt-2">Supprimer</button>
                </div>   
            </div>
            <div className="col-10 homepage__textarea d-flex mt-4">
                <div className="rounded-2 bg-light p-2">Exemple de post concret sur l'affichage. Lorem ipsum dolor sit amet consectetur adipisicing elit. In nobis natus rerum! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident adipisci nobis officiis quod ratione soluta! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores molestias minus, velit eum nobis cum veniam maiores dolores, nulla facere aut doloribus at veritatis ipsam rem, ullam dignissimos magni praesentium nihil sit?</div>
                <div className="homepage__icon mt-2 p-2 justify-content-between d-flex">
                    <div>Il y à x minutes</div>
                    <div className="sharelike">
                        <img src={share} alt="icone de partage"></img>
                        <img src={thinHeart} alt="coeur"></img>
                    </div>
                </div>
            </div>
        </aside>  
</main>
    );
  }
  
  export default Homepage;