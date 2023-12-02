import { Card, Label, TextInput, Button } from "flowbite-react";
import { loginUser } from "../../utils/fetch";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();

        try {
            await loginUser(email, password);
            navigate("/home");
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    return (
        <>
            <div className="flex items-center justify-center w-screen h-screen">
                <Card className="h-auto w-80">
                    <form
                        className="flex flex-col gap-4"
                        onSubmit={handleLogin}
                    >
                        <div>
                            <img
                                src="src/assets/login.svg"
                                alt="login"
                                className="w-7/12 mx-auto"
                            />
                        </div>
                        <div>
                            <div className="block mb-2">
                                <Label htmlFor="email1" value="Email" />
                            </div>
                            <TextInput
                                id="email1"
                                type="email"
                                placeholder="name@yourmail.com"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <div className="block mb-2">
                                <Label
                                    htmlFor="password1"
                                    value="Your password"
                                />
                            </div>
                            <TextInput
                                id="password1"
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <Button type="submit" color="purple">
                            Login
                        </Button>
                        <p className="text-center">
                            Don't have an account?{" "}
                            <a className="text-blue-700" href="/register">
                                Register
                            </a>
                        </p>
                    </form>
                </Card>
            </div>
        </>
    );
};

export default LoginForm;
