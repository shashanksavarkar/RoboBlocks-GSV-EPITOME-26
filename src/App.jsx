import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rules from "./pages/Rules";
import Registration from "./pages/Registration";
import Teams from "./pages/Teams";
import Timeline from "./pages/Timeline";
import Organizers from "./pages/Organizers";
import Sponsors from "./pages/Sponsors";
import Success from "./pages/Success";
import TeamDashboard from "./pages/TeamDashboard";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/rules" element={<Rules />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/teams" element={<Teams />} />
                <Route path="/timeline" element={<Timeline />} />
                <Route path="/organizers" element={<Organizers />} />
                <Route path="/sponsors" element={<Sponsors />} />
                <Route path="/success" element={<Success />} />
                <Route path="/team" element={<TeamDashboard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
