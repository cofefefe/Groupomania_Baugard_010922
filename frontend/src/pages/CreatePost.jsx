import { Link, useNavigate } from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../Utils/userContext";
import Nav from './Header'
import {addArticle} from "../api/apiCalls";


function CreatePost(props) {
    const [user] = useContext(UserContext);
    const [post, setPost] = useState(null);
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');

    const navigate = useNavigate()

    const onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage(img);
            console.log("img", img)
        }
    };

    const createPost = (req,res,next) => {
    
        let params = {
            post: {
                content:content,
                posterId: user._id,
                imageUrl: image
            },
        }
        addArticle(params).then(function () {
            props.onPostCreated();
        });
    }

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
                <textarea value={content} placeholder="Quoi de neuf ?" className="rounded-2" onChange={(e) => setContent(e.target.value)}></textarea>
                <div className="homepage__button d-flex offset-6 mt-4 mb-4">
                    <input className="form-control form-control-sm btn btn-danger" id="formFileSm" type="file" onChange={onImageChange} />
                    <button onClick={createPost}>Envoyer</button>
                </div>                
            </div>
        </aside>    
        <div className="homepage__border col-12 container"></div>
        <h4 className="container">Dernières publications</h4>
    </div></>)
}



export default CreatePost;