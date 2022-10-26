import {Link} from 'react-router-dom';
import { UserContext } from '../../Utils/userContext';
import { useContext } from "react";
import { useState } from 'react';
import {Provider, useSelector} from 'react-redux'

function displayArticles(props){

    props.posts.map(post => {
        return (<li>Ok ?????</li>)
})}

function Post(props, index) {

    const [user] = useContext(UserContext);


    // posts est indéfini si je met une fonction dans le return
   
    return(
        <>
        <section>
            {displayArticles()}
        </section>
        </>
    )}

    

  
export default Post;
  