import React, { useState } from "react";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Reset messages
        setErrorMessage("");
        setSuccessMessage("");

        // Simple validation
        if (!username || !password) {
            setErrorMessage("Both fields are required.");
            return;
        }

        // Here, you would typically handle authentication
        // For demo purposes, we'll assume login is always successful
        setSuccessMessage("Login successful!");
        // You can add additional logic for form submission here
    };

    return (
        <div className="bg-gradient-to-r from-cyan-200 to-blue-300">
            <div className="h-screen flex flex-col justify-center">
                <header className="bg-gradient-to-r from-purple-300 to-blue-300 p-2 text-white ">
                    <h1 className="text-2xl font-bold">To-Do's Application</h1>
                </header>
                <form
                    className="border border-red-500 w-96 p-5 rounded bg-white m-auto min-w-min"
                    onSubmit={handleSubmit}
                >
                    <h1 className="text-red-400 text-4xl mb-2 text-center">
                        User Login
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
                        placeholder="Enter Your Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
