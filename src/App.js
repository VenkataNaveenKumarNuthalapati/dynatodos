import RegisterFrom from "./components/RegisterForm/RegisterForm";
import LoginForm from "./components/LoginForm/LoginForm";

import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => (
    <div className="bg-transparent">
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<RegisterFrom />} />
                <Route exact path="/login" element={<LoginForm />} />
                <Route exact path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    </div>
);

export default App;
