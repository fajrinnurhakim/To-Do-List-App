import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import NavbarTop from "./components/Navbar";
import TodoList from "./pages/todolist";
import CreateTodo from "./pages/createTodo";
import "./index.css";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Login />
                            </>
                        }
                    />
                    <Route
                        path="/register"
                        element={
                            <>
                                <Register />
                            </>
                        }
                    />
                    <Route
                        path="/home"
                        element={
                            <>
                                <NavbarTop />
                                <TodoList />
                            </>
                        }
                    />
                    <Route
                        path="/create"
                        element={
                            <>
                                <NavbarTop />
                                <CreateTodo />
                            </>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
