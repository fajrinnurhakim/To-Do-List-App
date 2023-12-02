import TodoForm from "../../components/TodoForm";
import { Helmet } from "react-helmet";

function CreateTodo() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>TodoList | Create</title>
            </Helmet>
            <TodoForm />
        </div>
    );
}

export default CreateTodo;
