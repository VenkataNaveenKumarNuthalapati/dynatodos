// Header.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const onLogout = () => {
        navigate("/login");
    };
    return (
        <header className="container bg-transparent pt-2 pb-0 text-white flex justify-between items-center sticky-top z-0">
            <h1 className="text-2xl font-bold text-red-300">
                To-Do's Application
            </h1>
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="font-bold text-white">
                            Home
                        </Link>
                    </li>
                    <li>
                        <button
                            onClick={onLogout}
                            className="text-white font-bold"
                        >
                            Logout
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
