import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Teams = () => {
    return (
        <>
            <Navbar title="Teams" />
            <div className="page grid-2">
                <div className="card">Team 1</div>
                <div className="card">Team 2</div>
                <div className="card">Team 3</div>
                <div className="card">Team 4</div>
            </div>
            <Footer />
        </>
    );
};

export default Teams;
