import Cookies from "js-cookie";
import axios, { AxiosResponse } from "axios";

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

        console.log("Login successful");
    } catch (error) {
        console.error("Error during login:", error);
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

        return response.data;
    } catch (error) {
        console.error("Error during registration:", error);
        throw error;
    }
};

export const getTodos = async () => {
    try {
        const response = await axios.get("http://localhost:3000/todos");

        return response.data;
    } catch (error) {
        console.error("Error while fetching todos:", error);
        throw error;
    }
};

export const getTodoById = async (id: string) => {
    try {
        const response = await axios.get(`http://localhost:3000/todos/${id}`);

        return response.data;
    } catch (error) {
        console.error(`Error while fetching todo with ID ${id}:`, error);
        throw error;
    }
};

export const createTodo = async (
    title: string,
    tanggal: Date,
    start_time: string,
    end_time: string,
    status: boolean
) => {
    try {
        const response = await axios.post("http://localhost:3000/todos", {
            title,
            tanggal,
            start_time,
            end_time,
            status,
        });

        // Successful response
        return response.data;
    } catch (error) {
        // Handle network errors or any other errors
        console.error("Error while creating todo:", error);
        throw error;
    }
};

export const updateTodo = async (
    id: string,
    title: string,
    tanggal: Date,
    start_time: string,
    end_time: string,
    status: boolean
) => {
    try {
        const response = await axios.put(`http://localhost:3000/todos/${id}`, {
            title,
            tanggal,
            start_time,
            end_time,
            status,
        });

        // Successful response
        return response.data;
    } catch (error) {
        // Handle network errors or any other errors
        console.error(`Error while updating todo with ID ${id}:`, error);
        throw error;
    }
};

export const deleteTodo = async (id: string) => {
    try {
        const response = await axios.delete(
            `http://localhost:3000/todos/${id}`
        );

        return response.data;
    } catch (error) {
        console.error(`Error while deleting todo with ID ${id}:`, error);
        throw error;
    }
};
