import Cookies from "js-cookie";
import axios, { AxiosResponse } from "axios";
import Swal from "sweetalert2";

interface LoginResponse {
    token: string;
}

export const loginUser = async (email: string, password: string) => {
    try {
        const response: AxiosResponse<LoginResponse> = await axios.post(
            "http://localhost:3000/auth/login",
            {
                email,
                password,
            }
        );

        if (!response.data.token) {
            throw new Error("Login failed");
        }

        const token: string = response.data.token;

        Cookies.set("token", token);

        Swal.fire({
            icon: "success",
            title: "Success...",
            text: "Login Account Successfully!",
        });
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Error...",
            text: `Error during login: ${error}`,
        });
    }
};

export const registerUser = async (
    name: string,
    email: string,
    password: string
) => {
    try {
        const response = await axios.post(
            "http://localhost:3000/auth/register",
            {
                name,
                email,
                password,
            }
        );
        Swal.fire({
            icon: "success",
            title: "Success...",
            text: "Register Account Successfully!",
        });
        return response.data;
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Error...",
            text: `Error during Registration: ${error}`,
        });
    }
};

export const getTodos = async () => {
    const token = Cookies.get("token");
    try {
        const response = await axios.get("http://localhost:3000/todos", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Error...",
            text: `Error while fetching todos: ${error}`,
        });
    }
};

export const getTodoById = async (id: string) => {
    const token = Cookies.get("token");
    try {
        const response = await axios.get(`http://localhost:3000/todos/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Error...",
            text: `Error while fetching todo with ID ${id}: ${error}`,
        });
    }
};

export const createTodo = async (
    title: string,
    tanggal: Date,
    start_time: string,
    end_time: string,
    status: boolean
) => {
    const token = Cookies.get("token");
    try {
        const response = await axios.post(
            "http://localhost:3000/todos",
            {
                title,
                tanggal,
                start_time,
                end_time,
                status,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        Swal.fire({
            icon: "success",
            title: "Success...",
            text: "Create Todo Successfully!",
        });
        return response.data;
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Error...",
            text: `Error while creating todo: ${error}`,
        });
    }
};

export const updateTodo = async (
    id: string,
    title: string,
    tanggal: string,
    start_time: string,
    end_time: string,
    status: string
) => {
    const token = Cookies.get("token");
    try {
        const response = await axios.put(
            `http://localhost:3000/todos/${id}`,
            {
                title,
                tanggal,
                start_time,
                end_time,
                status,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        Swal.fire({
            icon: "success",
            title: "Success...",
            text: "Update Todo Successfully!",
        });
        return response.data;
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Error...",
            text: `Error while updating todo: ${error}`,
        });
    }
};

export const deleteTodo = async (id: string) => {
    try {
        const token = Cookies.get("token");
        const response = await axios.delete(
            `http://localhost:3000/todos/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        Swal.fire({
            icon: "success",
            title: "Success...",
            text: "Delete Todo Successfully!",
        });
        return response.data;
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Error...",
            text: `Error while Deleting todo: ${error}`,
        });
    }
};
