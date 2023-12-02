import { Helmet } from "react-helmet";
import LoginForm from "../../components/LoginForm";

function Login() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>TodoList | Login</title>
            </Helmet>
            <LoginForm />
        </div>
    );
}

export default Login;
