import { useNavigate } from "react-router-dom";

const Success = () => {
    const navigate = useNavigate();

    return (
        <div className="center">
            <h2>Registered Successfully!</h2>
            <button onClick={() => navigate("/team")}>
                Continue to Team Page →
            </button>
        </div>
    );
};

export default Success;
