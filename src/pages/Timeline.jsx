import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Timeline = () => {
    return (
        <>
            <Navbar title="Event Timeline" />
            <div className="page grid-3">
                <div className="card">Round 1</div>
                <div className="card">Round 2</div>
                <div className="card">Final</div>
            </div>
            <Footer />
        </>
    );
};

export default Timeline;
