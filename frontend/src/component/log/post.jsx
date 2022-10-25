import {Link} from 'react-router-dom';
import { UserContext } from '../../Utils/userContext';
import { useContext } from "react";

function Post(props) {

    const onPostUpdate = () => {
        props.onPostUpdated();
    }
    
    const addPosts = () => {
        return props.posts.map((post) => {
            return < Post
                key={post.id}
                post={post}
                handlePostDelete={() => props.handlePostDelete(post)}
                onPostUpdated={props.onPostUpdated}
            />;
        })
    }

    return (
        <li>{addPosts()}</li>
    );
  }
  
  export default Post;
  