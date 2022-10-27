import { Link, useNavigate } from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../Utils/userContext";
import Post from "../component/log/Post";
import Nav from './Header'


function Home(props) {
    const [user] = useContext(UserContext);
    
    const navigate = useNavigate()

    return (
        <>
    <div className="homepage container-fluid pt-3">
        <aside className="container d-flex rounded-2">
            <div className="col-2 homepage__profile d-flex mt-4">
                <Link to="homepage/profile">
                    <img src={user.picture} className="homepage__profile--pic" alt="portrait individuel"></img>
                </Link>
                <p>{user.firstname + ' ' + user.name}</p>
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
    </div><Post /></>)
}



export default Home;