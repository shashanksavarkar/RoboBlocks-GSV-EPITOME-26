import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Organizers = () => {
    return (
        <>
            <Navbar title="Organizers" />
            <div className="page grid-2">
                <div className="card">Event Heads</div>
                <div className="card">Support Team</div>
            </div>
            <Footer />
        </>
    );
};

export default Organizers;
