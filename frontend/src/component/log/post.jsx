import {Link} from 'react-router-dom';
import { UserContext } from '../../Utils/userContext';
import { useContext } from "react";
import { useState } from 'react';
import { FaRegHeart, FaEdit } from 'react-icons/fa'
import { addLike, deleteArticle, getArticles, modifyArticle } from '../../api/apiCalls';
import {BsTrash} from 'react-icons/bs'
import { json } from 'body-parser';

function Post(props, index) {

    const [user] = useContext(UserContext);

    function onClickHandler(){
        addLike()
    }
    function refreshPost(){
        getArticles()
    }

    function deletePost(req,res,next){
        let params = {
            post: {
                content:props.post.content,
                posterId: user._id
            }}
            deleteArticle(params).then(function () {
                refreshPost()         
            });
    }

    function updateArticle(req,res,next){
        let params = {
            post: {
                content:props.post.content,
                posterId: user._id
            }}
            modifyArticle(params).then(function(){
                console.log('on est au bout ?')
            })
    }

    if(props.post.posterId === user._id){
        return(
            <div className="container mt-5 ">
            <aside className="rounded-1 container post shadow">
                <div className="d-flex flex-direction-row post__info col-9">
                    <div className="post__user d-flex flex-column justify-center mt-2 col-3 align-items-center ">
                        <img src={user.picture} className="rounded-5 post__picture" alt="Photo de profil"/>
                        <p >{user.name + ' ' + user.firstname}</p>
                        <p>{props.post.createdAt.slice(0,10)}</p>                       
                        <div className="post__edit d-flex flex-row p-2">
                            <button onClick={updateArticle}><FaEdit /></button>
                            <button onClick={deletePost}><BsTrash /></button>
                        </div>               
                    </div>
                    <p className="post_text bg-light col-12 w-100 mt-2 p-2 rounded-1 shadow-sm">{props.post.content}</p>
                </div>
                <div className="post__react d-flex container justify-content-end ">
                        <i className="post__react--like pb-2">{props.post.like}<FaRegHeart  onClick={onClickHandler} style={{width:30,height:30,cursor:'pointer'}}/></i>
                </div>  
            </aside>
            </div>
        )
    }else{
        return (
            <div className="container mt-5 ">
            <aside className="rounded-1 container post shadow">
                <div className="d-flex flex-direction-row post__info col-9">
                    <div className="post__user d-flex flex-column justify-center mt-2 col-3 align-items-center ">
                        <img src={user.picture} className="rounded-5 post__picture" alt="Photo de profil"/>
                        <p >{user.name + ' ' + user.firstname}</p>
                        <p>{props.post.createdAt.slice(0,10)}</p>
                    </div>
                    <p className="post_text bg-light col-12 w-100 mt-2 p-2 rounded-1 shadow-sm">{props.post.content}</p>
                </div>
                <div className="post__react d-flex container justify-content-end ">
                        <i className="post__react--like pb-2">{props.post.like}<FaRegHeart  onClick={onClickHandler} style={{width:30,height:30,cursor:'pointer'}}/></i>
                </div>  
            </aside>
            </div>
        )
    }

 
    



} 
export default Post;
  