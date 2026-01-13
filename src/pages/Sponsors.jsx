import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Sponsors = () => {
    return (
        <>
            <Navbar title="Sponsors" />
            <div className="page">
                <div className="card">Sponsor 1</div>
                <div className="card">Sponsor 2</div>
                <div className="card">Sponsor 3</div>
            </div>
            <Footer />
        </>
    );
};

export default Sponsors;
