import {
    Button,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
} from "flowbite-react";
import { useLocation } from "react-router-dom";

const NavbarTop = () => {
    const location = useLocation();

    return (
        <Navbar rounded className="container mx-auto">
            <NavbarBrand>
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                    TodoList
                </span>
            </NavbarBrand>
            <div className="flex space-x-2 md:order-2">
                <Button color="purple">Logout</Button>
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
