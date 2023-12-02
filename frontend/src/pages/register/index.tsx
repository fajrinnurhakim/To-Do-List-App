import { Helmet } from "react-helmet";
import RegisterForm from "../../components/RegisterForm";

function Register() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>TodoList | Register</title>
            </Helmet>
            <RegisterForm />
        </div>
    );
}

export default Register;
