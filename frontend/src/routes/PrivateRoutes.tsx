import { ReactNode } from "react";
import { Navigate, RouteProps } from "react-router-dom";
import Cookies from "js-cookie";

const PrivateRoutes: React.FC<RouteProps & { children: ReactNode }> = ({
    children,
}) => {
    const isUserLoggedIn = Cookies.get("token") !== undefined;

    if (!isUserLoggedIn) {
        return <Navigate to="/" />;
    }

    return <>{children}</>;
};

export default PrivateRoutes;
