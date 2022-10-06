import {Link} from 'react-router-dom';

function Home() {
    return (
    <Link to="/login">
            <button className="btn btn-outline-danger" type="submit">Se connecter</button>
    </Link>)
}



export default Home;