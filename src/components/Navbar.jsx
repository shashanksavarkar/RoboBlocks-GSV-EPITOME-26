import { Link } from "react-router-dom";

const Navbar = ({ title }) => {
    return (
        <div className="navbar">
            <Link to="/">← Back</Link>
            <h3>{title}</h3>
            <span>LOGO</span>
        </div>
    );
};

export default Navbar;
