import { Card, Label, TextInput, Checkbox, Button } from "flowbite-react";

const RegisterForm = () => {
    return (
        <>
            <div className="flex items-center justify-center w-screen h-screen">
                <Card className="h-auto w-80">
                    <form className="flex flex-col gap-4">
                        <div>
                            <div className="block mb-2">
                                <Label htmlFor="name1" value="Name" />
                            </div>
                            <TextInput
                                id="name1"
                                type="text"
                                placeholder="Your name"
                                required
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
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="term" />
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
