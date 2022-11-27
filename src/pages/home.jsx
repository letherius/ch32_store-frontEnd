import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <h1>Hello there!</h1>

            <Link to="/catalog">Check out our amazing catalog &gt; </Link>
        </div>
    );
};

export default Home;
