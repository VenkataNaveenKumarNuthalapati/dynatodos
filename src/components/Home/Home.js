// Home.js
import React, { useEffect, useRef, useState } from "react";
import Header from "../Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

const Home = () => {
    const videoRef = useRef(null);
    const audioRef = useRef(null);
    const [todoList, setTodoList] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [editIndex, setEditIndex] = useState(null);
    const [editInput, setEditInput] = useState("");
    const [showCompleted, setShowCompleted] = useState(false);
    const [showPending, setShowPending] = useState(false);

    useEffect(() => {
        const bgContainerEl = document.getElementById("bg-container");

        const handleMouseMove = () => {
            if (audioRef.current && videoRef.current) {
                videoRef.current.play();
            }
        };

        bgContainerEl.addEventListener("click", handleMouseMove);

        return () => {
            bgContainerEl.removeEventListener("click", handleMouseMove);
        };
    }, []);

    const handleAddTodo = () => {
        if (userInput.trim() === "") {
            alert("Enter Valid Text");
            return;
        }
        const newTodo = {
            text: userInput,
            isChecked: false,
        };
        setTodoList((prevList) => [...prevList, newTodo]);
        setUserInput("");
    };

    const handleTodoStatusChange = (index) => {
        const newList = [...todoList];
        newList[index].isChecked = !newList[index].isChecked;
        setTodoList(newList);
    };

    const handleDeleteTodo = (index) => {
        const newList = todoList.filter((_, i) => i !== index);
        setTodoList(newList);
    };

    const handleEditTodo = (index) => {
        setEditIndex(index);
        setEditInput(todoList[index].text);
    };

    const handleUpdateTodo = (index) => {
        if (editInput.trim() === "") {
            alert("Enter Valid Text");
            return;
        }
        const updatedList = [...todoList];
        updatedList[index].text = editInput;
        setTodoList(updatedList);
        setEditIndex(null);
        setEditInput("");
    };

    const filteredTodos = todoList.filter((todo) => {
        if (showCompleted && todo.isChecked) return true;
        if (showPending && !todo.isChecked) return true;
        if (!showCompleted && !showPending) return true;
        return false;
    });

    // Functions to render different parts of the component
    const renderProfile = () => (
        <div className="flex flex-row items-center justify-items-center bg-transparent p-4 rounded-lg">
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSKbCFe_QYSVH-4FpaszXvakr2Eti9eAJpQ&s"
                alt="Profile"
                className="w-44 h-44 rounded-full mb-4"
            />
            <div className="ml-3 d-flex flex-col justify-center">
                <h2 className="text-white text-xl mb-2">John Doe</h2>
                <p className="text-gray-400">Software Developer</p>
            </div>
        </div>
    );

    const renderTodosInput = () => (
        <div>
            <h1 className="todos-heading text-2xl font-bold mb-4 w-auto">
                Todos
            </h1>
            <h1 className="create-task-heading text-white text-xl mb-4">
                Create{" "}
                <span className="create-task-heading-subpart font-semibold">
                    Task
                </span>
            </h1>
            <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="todo-user-input w-full mb-4 p-2 border border-gray-300 rounded-md"
                placeholder="What needs to be done?"
            />
            <button
                className="w-full py-2 px-4 bg-blue-600 text-white rounded-md"
                onClick={handleAddTodo}
            >
                Add
            </button>
        </div>
    );

    const renderTodosFilter = () => (
        <div className="mt-1 flex flex-wrap">
            <div className="w-full md:w-1/4 flex items-center">
                <input
                    type="checkbox"
                    className="mr-2 text-blue-600 focus:ring-blue-500 h-4 w-4 border-gray-300 rounded"
                    id="showCompleted"
                    checked={showCompleted}
                    onChange={() => setShowCompleted(!showCompleted)}
                />
                <label className="text-white" htmlFor="showCompleted">
                    Show Completed Todos
                </label>
            </div>
            <div className="w-full md:w-1/4 flex items-center">
                <input
                    type="checkbox"
                    className="mr-2 text-blue-600 focus:ring-blue-500 h-4 w-4 border-gray-300 rounded"
                    id="showPending"
                    checked={showPending}
                    onChange={() => setShowPending(!showPending)}
                />
                <label className="text-white" htmlFor="showPending">
                    Show Pending Todos
                </label>
            </div>
        </div>
    );

    const renderTodosList = () => (
        <ul className="row todo-items-container list-unstyled">
            {filteredTodos.map((todo, index) => (
                <li
                    key={index}
                    className="col-md-4 d-flex align-items-center todo-item-container mb-3"
                >
                    <input
                        type="checkbox"
                        className="checkbox-input"
                        checked={todo.isChecked}
                        onChange={() => handleTodoStatusChange(index)}
                    />
                    <div className="label-container flex-grow-1 d-flex justify-content-between align-items-center">
                        {editIndex === index ? (
                            <input
                                type="text"
                                value={editInput}
                                onChange={(e) => setEditInput(e.target.value)}
                                className="form-control me-2"
                                onBlur={() => handleUpdateTodo(index)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter")
                                        handleUpdateTodo(index);
                                }}
                            />
                        ) : (
                            <>
                                <label
                                    className={
                                        todo.isChecked
                                            ? "checkbox-label checked"
                                            : "checkbox-label"
                                    }
                                >
                                    {todo.text}
                                </label>
                                <div className="edit-icon-container">
                                    <i
                                        className="fas fa-edit edit-icon"
                                        onClick={() => handleEditTodo(index)}
                                    ></i>
                                </div>
                            </>
                        )}
                        <div className="delete-icon-container">
                            <i
                                className="far fa-trash-alt delete-icon"
                                onClick={() => handleDeleteTodo(index)}
                            ></i>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );

    return (
        <div className="bg-transparent" id="bg-container">
            <video id="bg-video" ref={videoRef} loop>
                <source
                    src="https://res.cloudinary.com/dwl5qafmd/video/upload/v1679915101/Pexels_Videos_1943483_1_othsxs.mp4"
                    type="video/mp4"
                />
            </video>
            <audio
                src="https://res.cloudinary.com/dwl5qafmd/video/upload/v1679915882/mountain-path-125573_nwqvsc.mp3"
                id="altSound"
                loop
                ref={audioRef}
            ></audio>
            <Header />
            <hr className="text-white mt-0" />
            <div className="container bg-transparent">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {renderProfile()}
                    {renderTodosInput()}
                </div>
                <hr className="text-white" />
                <h1 className="mt-3 todo-items-heading text-white">
                    My <span className="todo-items-heading-subpart">Tasks</span>
                </h1>
                <hr className="text-white" />
                {renderTodosFilter()}
                {renderTodosList()}
            </div>
        </div>
    );
};

export default Home;
