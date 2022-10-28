import {Link} from 'react-router-dom';
import { UserContext } from '../../Utils/userContext';
import { useContext } from "react";
import { useState } from 'react';



function Post(props, index) {

    const [user] = useContext(UserContext);

    function editPostByUser(props){
        if(props.post.posterId === user._id){
            return(
                <div className="post__edit d-flex flex-row p-2 bg-warning">
                    <p>O</p>
                    <p>U</p>
                </div>
            )
        }
    }

    function retrieveUserByPost(){
        
    }
    retrieveUserByPost()
        return (
            <div className="container mt-5 ">
            <aside classname="shadow rounded-5 container post col-lg-10 shadow" style={{backgroundColor:"gray"}}>
                <div className="d-flex flex-direction-row post__info col-9">
                    <div className="post__user d-flex flex-column justify-center mt-2 col-3 align-items-center ">
                        <img src={user.picture} className="rounded-5 post__picture" alt="Photo de profil"/>
                        <p >{user.name + ' ' + user.firstname}</p>
                        <p>{props.post.createdAt.slice(0,10)}</p>
                        {editPostByUser}
                    </div>
                    <p className="post_text bg-light col-12 w-100 mt-2 p-2 rounded-1 shadow-sm">{props.post.content}</p>
                </div>
                <div className="post__react d-flex container justify-content-end ">
                        <i className="post__react--like pb-2">O</i>
                        <i classname="post__react--comment pb-2">U</i>
                </div>  
            </aside>
            </div>
        )

} 
export default Post;
  