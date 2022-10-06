import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function Homepage() {
    return (
<main className="homepage container-fluid">
    <div className="homepage__post container">
        <aside className="">
            <img className="homepage__profile" src="https://i.pinimg.com/originals/39/e9/b3/39e9b39628e745a39f900dc14ee4d9a7.jpg"/>
            <input type="text" placeholder="Quoi de neuf ?" className="hompepage__text rounded-3"/>
            <div className="homepage__select row justify-content-between d-flex">
                <div className="homepage__addfiles bg-light rounded-3">Ajouter une image</div>
                <div className="homepage__send bg-light rounded-3">Envoyer</div>
            </div>
        </aside>
    </div>
    

</main>
    );
  }
  
  export default Homepage;