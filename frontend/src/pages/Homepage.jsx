import {useContext, useEffect, useState} from "react";
import {UserContext} from "../Utils/userContext";
import BodyMenu from "./BodyMenu";
import {getArticles} from "../api/apiCalls";
import * as PropTypes from "prop-types";
import Post from "../component/log/post";
import Nav from "./Header";
import Home from './Home'

Post.propTypes = {
    post: PropTypes.shape({minLength: PropTypes.number, type: PropTypes.any, mxLength: PropTypes.number}),
    handlePostDelete: PropTypes.func
};

function Homepage() {
    const [user] = useContext(UserContext);
    const [posts, setPosts] = useState([]);
   
    useEffect(() => {
        if (user) {refreshPosts();}}, [user]
    );
    const refreshPosts = () => {
        console.log("refreshPosts")
        getArticles().then((articles) => {
            articles = [
                {id:1, content:"mon article de test"}, {id:2, content:"mon article de test 2"}
            ]
            setPosts(articles);
        })
    };

    if (!user) {
        return (<>
                <Nav/>
                <BodyMenu/>
                </>)
    } else {
        return (
            
            <>
            <Nav />
            <Home />
                {
                    posts.map((post) => {return <Post key={post.id} post={post} onPostUpdated={refreshPosts}/>})
                }
            </>
        )
    }
}

export default Homepage;