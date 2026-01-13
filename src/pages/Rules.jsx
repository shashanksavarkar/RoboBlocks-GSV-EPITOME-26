import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Rules = () => {
    return (
        <>
            <Navbar title="Rules" />
            <div className="page">
                <div className="card">Rule 1</div>
                <div className="card">Rule 2</div>
                <div className="card">Rule 3</div>
            </div>
            <Footer />
        </>
    );
};

export default Rules;
