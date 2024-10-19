import React, { useState } from "react";

const RegisterFrom = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conformPassword, setConformPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Reset messages
        setErrorMessage("");
        setSuccessMessage("");

        // Simple validation
        if (!username || !email || !password || !conformPassword) {
            setErrorMessage("All fields are required.");
            return;
        }

        if (username.includes(" ")) {
            setErrorMessage("Username should not contain spaces.");
            return;
        }

        // Basic email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setErrorMessage("Please enter a valid email address.");
            return;
        }

        if (password !== conformPassword) {
            setErrorMessage("Passwords do not match.");
            return;
        }

        // On successful registration
        setSuccessMessage("Registration successful!");
        // You can add additional logic for form submission here
    };

    return (
        <div className="">
            <div className="min-h-screen flex flex-col justify-center bg-gradient-to-r from-cyan-200 to-blue-300">
                <header className="bg-gradient-to-r from-purple-300 to-blue-300 p-2 text-white mb-2">
                    <h1 className="text-2xl font-bold">To-Do's Application</h1>
                </header>
                <form
                    className="border border-red-500 w-96 p-3 rounded bg-white m-auto min-w-min"
                    onSubmit={handleSubmit}
                >
                    <h1 className="text-red-400 text-4xl mb-2 text-center">
                        User Registration Form
                    </h1>

                    <label
                        htmlFor="username"
                        className="text-gray-700 font-medium mb-2 mr-3"
                    >
                        Username:
                    </label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        className="mb-3 w-80 border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Your Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <br />

                    <label
                        htmlFor="email"
                        className="text-gray-700 font-medium mb-2 mr-3"
                    >
                        Email:
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="mb-3 w-80 border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />

                    <label
                        htmlFor="password"
                        className="text-gray-700 font-medium mb-2 mr-3"
                    >
                        Password:
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="mb-3 w-80 border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Password Here"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />

                    <label
                        htmlFor="conformPassword"
                        className="text-gray-700 font-medium mb-2 mr-3"
                    >
                        Confirm Password:
                    </label>
                    <input
                        type="password"
                        name="conformPassword"
                        id="conformPassword"
                        className="mb-3 w-80 border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Confirm Password Here"
                        value={conformPassword}
                        onChange={(e) => setConformPassword(e.target.value)}
                    />
                    <br />

                    {errorMessage && (
                        <p className="text-red-500 text-sm mb-2">
                            {errorMessage}
                        </p>
                    )}
                    {successMessage && (
                        <p className="text-green-500 text-sm mb-2">
                            {successMessage}
                        </p>
                    )}
                    <button
                        type="submit"
                        className="bg-green-400 text-white font-bold rounded p-2 mt-3 m-auto block"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterFrom;
