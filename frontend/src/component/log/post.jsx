import {Link} from 'react-router-dom';
import { UserContext } from '../../Utils/userContext';
import { useContext } from "react";
import { useState } from 'react';
import {useSelector} from 'react-redux'

function Post(props, index) {

    const [user] = useContext(UserContext);
    const postData = useSelector((state)=> state.post)
    console.log(postData)

console.log(props.post)
 
    return(
        <>
            <li className="container">
                <p></p>
            </li>
        </>
    )
}
  
export default Post;
  