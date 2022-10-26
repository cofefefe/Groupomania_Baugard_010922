import {useContext, useEffect, useState} from "react";
import {UserContext} from "../Utils/userContext";
import BodyMenu from "./BodyMenu";
import {deleteArticle, getArticles} from "../api/apiCalls";
import * as PropTypes from "prop-types";
import Post from "../component/log/Post";
import Nav from "./Header";
import Home from './Home'

Post.propTypes = {
    post: PropTypes.shape({minLength: PropTypes.number, type: PropTypes.any, mxLength: PropTypes.number}),
    handlePostDelete: PropTypes.func
};

function Homepage() {
    const [user] = useContext(UserContext);
    const [posts, setPosts] = useState([]);

    const refreshPosts = () => {
        getArticles().then((postsResult) => {
           // console.log(postsResult)
            setPosts(postsResult)
        })
    }
    const onPostCreated = () => {
        refreshPosts()
    }
    const onPostUpdated = () => {
        refreshPosts();
    }

    useEffect(() => {
        if (user) {
            refreshPosts();
        }
    }, [user]);
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