import {useContext, useEffect, useState} from "react";
import {UserContext} from "../Utils/userContext";
import BodyMenu from "./BodyMenu";
import {deleteArticle, getArticles} from "../api/apiCalls";
import Post from "../component/log/Post";
import Nav from "./Header";
import CreatePost from "./CreatePost";


function Homepage() {
    const [user] = useContext(UserContext);
    const [posts, setPosts] = useState([]);

    const refreshPosts = () => {
        getArticles().then((postsResult) => {
            setPosts(postsResult)
        })
    }

    const onPostCreated = () => {
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
                <CreatePost onPostCreated={onPostCreated} />
                {
                    posts.map((post) => {
                        return <Post key={post._id} post={post} onPostUpdated={refreshPosts}/>
                    })
                }
            </>
        )
    }
}

export default Homepage;