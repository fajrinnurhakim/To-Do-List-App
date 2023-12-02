import Cookies from "js-cookie";
import {
    Button,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
} from "flowbite-react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const NavbarTop = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <Navbar rounded className="container mx-auto">
            <NavbarBrand>
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                    TodoList
                </span>
            </NavbarBrand>
            <div className="flex space-x-2 md:order-2">
                <Button
                    color="purple"
                    onClick={() => {
                        Cookies.remove("token");
                        Swal.fire({
                            icon: "success",
                            title: "Success...",
                            text: "Logout Account Successfully!",
                        });
                        navigate("/");
                    }}
                >
                    Logout
                </Button>
                <NavbarToggle />
            </div>
            <NavbarCollapse color="purple">
                <NavbarLink
                    href="/home"
                    active={location.pathname === "/home"}
                    className="hover:border-b-2"
                >
                    Home
                </NavbarLink>
                <NavbarLink
                    href="/create"
                    active={location.pathname === "/create"}
                    className="hover:border-b-2 hover:border-blue-900"
                >
                    Create
                </NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
};

export default NavbarTop;
