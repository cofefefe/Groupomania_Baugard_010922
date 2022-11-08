import { UserContext } from '../../Utils/userContext';
import { useContext } from "react";
import { useState } from 'react';
import { FaRegHeart, FaEdit } from 'react-icons/fa'
import { addLike, deleteArticle, getArticles, modifyArticle } from '../../api/apiCalls';
import {BsTrash} from 'react-icons/bs'
import * as PropTypes from "prop-types";
import UpdatePost from "../../pages/UpdatePost";

UpdatePost.propTypes = {
    handleCancel: PropTypes.func,
    onPostUpdated: PropTypes.any
};

function Post(props, index) {
    const [image, setImage] = useState("")
    const [user] = useContext(UserContext);
    const [editMode, setEditMode] = useState(false);

    let params = {
        post: {
            content:props.post.content,
            posterId: user._id,
            _id:props.post._id,
            imageUrl: props.post.imageUrl
        }}

    
    function refreshPost(){
        getArticles()
    }

    const likeHandler = () => {
        addLike(params).then(function(){
            console.log('like Handler' + JSON.stringify(params))
        })
    }

    function handlePostDelete(req, res, next){
        deleteArticle(params).then(function(){
            refreshPost()
        })
    }

    const displayActionButtons = () => {
        if (user.isAdmin || user.id === props.post.userId) {
            //console.log(props.post)
            return (
                <div className="post__edit d-flex flex-row p-2">
                    <button onClick={() => setEditMode(!editMode)}><FaEdit /></button>
                    <button onClick={handlePostDelete}><BsTrash /></button>
                </div>
            )
        }
    }

    // const displayImg = () => {
    //     if(props.post.imageUrl){
    //         return <img src={props.post.imageUrl} className="post-img img-fluid" alt={props.post.id} />
    //     }
    // }
  
    const onPostUpdated = () => {
        setEditMode(false);
        props.onPostUpdated();
    }


    if(props.post.posterId === user._id || user.isAdmin){
        return(
            editMode ? <UpdatePost post={props.post} onPostUpdated={onPostUpdated} handleCancel={() => setEditMode(false)} /> :
            <div className="container mt-5 ">
                <aside className="rounded-1 container post shadow">
                    <div className="d-flex flex-direction-row post__info col-9">
                        <div className="post__user d-flex flex-column justify-center mt-2 col-3 align-items-center ">
                            <img src={user.picture} className="rounded-5 post__picture" alt="Photo de profil"/>
                            <p >{params.post.name + ' ' + user.firstname}</p>
                            <p>{(new Date(props.post.updatedAt)).toLocaleString()}</p>
                            {displayActionButtons()}
                        </div>
                        <p className="post__text bg-light col-12 w-100 mt-2 p-2 rounded-1 shadow-sm d-flex">{props.post.content}
                        {
                            props.post.imageUrl ? <img src={props.post.imageUrl} className="post-img align-self-center mt-2 img-fluid" alt={props.post.id} style={{maxWidth:'90%', maxHeight:'400px'}} /> : <></>
                        }
                        </p>
                        {/* {displayImg()} */}
                    </div>
                    <div className="post__react d-flex container justify-content-end ">
                        <i className="post__react--like pb-2">{props.post.likes}<FaRegHeart  className="m-1" onClick={likeHandler} style={{width:30,height:30,cursor:'pointer'}}/></i>
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
                            <p>{(new Date(props.post.updatedAt)).toLocaleString()}</p>
                        </div>
                        <p className="post_text bg-light col-12 w-100 mt-2 p-2 rounded-1 shadow-sm">{props.post.content}</p>
                        {/* {displayImg()} */}
                        {
                        props.post.imageUrl ? <img src={params.post.imageUrl} className="post-img img-fluid" alt={props.post.id} /> : <></>
                        }
                    </div>
                    <div className="post__react d-flex container justify-content-end ">
                        <i className="post__react--like pb-2">{props.post.likes}<FaRegHeart className="m-1" onClick={likeHandler} style={{width:30,height:30,cursor:'pointer'}}/></i>
                    </div>
                </aside>
            </div>
        )
    }

}
export default Post;