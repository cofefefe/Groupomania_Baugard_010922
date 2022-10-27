import {Link} from 'react-router-dom';
import { UserContext } from '../../Utils/userContext';
import { useContext } from "react";
import { useState } from 'react';
import {Provider, useSelector} from 'react-redux'



function Post(props, index) {

    const [user] = useContext(UserContext);
    const posts = props.post

    console.log(posts)


    
    // posts.map((post)=>{
    //     return(
    //         <li>{post}</li>
    //     )
    // })

    
        // return (
        //     <>
        //         <section>
        //             ??
        //         </section>
        //     </>
        // )

} 
export default Post;
  