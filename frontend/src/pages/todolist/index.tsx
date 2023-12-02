import { Helmet } from "react-helmet";
import TodoListCard from "../../components/TodoListCard";

function TodoList() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>TodoList | Home</title>
            </Helmet>
            <TodoListCard />
        </div>
    );
}

export default TodoList;
