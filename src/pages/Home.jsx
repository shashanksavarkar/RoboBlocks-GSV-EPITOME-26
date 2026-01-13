import Scene from "../canvas/Scene";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="canvas-bg"><Scene /></div>

            <div className="ui">
                <div className="grid">
                    <Link to="/rules">Rules</Link>
                    <Link to="/registration">Registration</Link>
                    <Link to="/timeline">Event Timeline</Link>
                    <Link to="/teams">Teams</Link>
                    <Link to="/organizers">Organizers</Link>
                    <Link to="/sponsors">Sponsors</Link>
                </div>
            </div>
        </>
    );
};

export default Home;
