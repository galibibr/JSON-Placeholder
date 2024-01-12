import { Button, Container, Skeleton } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { TTodo } from "../types";
import { TiArrowBackOutline } from "react-icons/ti";

const Todo_page = () => {
    const url = "https://jsonplaceholder.typicode.com/todos?";
    const { id } = useParams<string>();
    const [todo, setTodo] = useState<TTodo | undefined>();
    const navigate: NavigateFunction = useNavigate();

    const handleGoBack = () => navigate(-1);

    async function getTodo() {
        try {
            const { data } = await axios.get(url + `id=${id}`);
            setTodo(data[0]);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getTodo();
    }, [id]);

    return (
        <Container className="py-3">
            <Button
                variant="outlined"
                endIcon={<TiArrowBackOutline />}
                onClick={handleGoBack}>
                Go back
            </Button>
            {todo ? (
                <div className="py-3 flex gap-2 justify-center">
                    <input type="checkbox" checked={todo.completed} />
                    <p
                        className={`${
                            todo.completed && "line-through text-blue"
                        }`}>
                        {todo.title}
                    </p>
                </div>
            ) : (
                <div className="text-center py-3 flex flex-col gap-1">
                    <Skeleton />
                </div>
            )}
        </Container>
    );
};

export default Todo_page;
