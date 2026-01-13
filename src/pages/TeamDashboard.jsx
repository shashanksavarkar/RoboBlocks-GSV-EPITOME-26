import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TeamDashboard = () => {
    return (
        <>
            <Navbar title="RoboBlocks | Team Name" />
            <div className="page grid-2">
                <div className="card">OC Updates</div>
                <div className="card">Team Status</div>
            </div>
            <Footer />
        </>
    );
};

export default TeamDashboard;
