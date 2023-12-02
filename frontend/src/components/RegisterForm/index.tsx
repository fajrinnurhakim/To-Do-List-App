import { FormEvent, useState } from "react";
import { Card, Label, TextInput, Checkbox, Button } from "flowbite-react";
import { registerUser } from "../../utils/fetch";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const RegisterForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [agreed, setAgreed] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (e: FormEvent) => {
        e.preventDefault();

        try {
            if (!agreed) {
                Swal.fire({
                    icon: "error",
                    title: "Error...",
                    text: "Please agree to the Terms & Conditions.",
                });
            } else {
                await registerUser(name, email, password);
                navigate("/");
            }
        } catch (error) {
            console.error("Error during registration:", error);
        }
    };

    return (
        <>
            <div className="flex items-center justify-center w-screen h-screen">
                <Card className="h-auto w-80">
                    <form
                        className="flex flex-col gap-4"
                        onSubmit={handleRegister}
                    >
                        <div>
                            <div className="block mb-2">
                                <Label htmlFor="name1" value="Name" />
                            </div>
                            <TextInput
                                id="name1"
                                type="text"
                                placeholder="Your name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
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
                        <div className="flex items-center gap-2">
                            <Checkbox
                                id="term"
                                checked={agreed}
                                onChange={(e) => setAgreed(e.target.checked)}
                            />
                            <Label htmlFor="term">
                                I read and agree to{" "}
                                <span className="text-blue-700">
                                    Term & Conditions
                                </span>
                            </Label>
                        </div>
                        <Button type="submit" color="purple">
                            Register
                        </Button>
                        <p className="text-center">
                            You have an account?{" "}
                            <a className="text-blue-700" href="/">
                                Login
                            </a>
                        </p>
                    </form>
                </Card>
            </div>
        </>
    );
};

export default RegisterForm;
