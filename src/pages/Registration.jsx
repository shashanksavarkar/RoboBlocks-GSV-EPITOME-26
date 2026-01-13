import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Registration = () => {
    const navigate = useNavigate();

    return (
        <>
            <Navbar title="Registration" />
            <div className="page grid-2">
                <div className="card">Leader Details</div>
                <div className="card">Teammate Details</div>
                <div className="card">QR Code + SS Upload</div>
                <button onClick={() => navigate("/success")}>Submit</button>
            </div>
            <Footer />
        </>
    );
};

export default Registration;
