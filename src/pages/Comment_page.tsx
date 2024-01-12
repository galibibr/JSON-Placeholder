import { Button, Container, Skeleton } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { TComment } from "../types";
import { TiArrowBackOutline } from "react-icons/ti";

const Comment_page = () => {
    const url = "https://jsonplaceholder.typicode.com/comments?";
    const { id } = useParams<string>();
    const [comment, setComment] = useState<TComment | undefined>();
    const navigate: NavigateFunction = useNavigate();

    const handleGoBack = () => navigate(-1);

    async function getComment() {
        try {
            const { data } = await axios.get(url + `id=${id}`);
            setComment(data[0]);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getComment();
    }, [id]);

    return (
        <Container className="py-3">
            <Button
                variant="outlined"
                endIcon={<TiArrowBackOutline />}
                onClick={handleGoBack}>
                Go back
            </Button>
            {comment ? (
                <div className="py-3 flex flex-col gap-1">
                    <p>{comment?.name}</p>
                    <p>{comment?.email}</p>
                    <p>{comment?.body}</p>
                </div>
            ) : (
                <div className="py-3 flex flex-col gap-1">
                    <Skeleton />
                    <Skeleton />
                    <Skeleton height={50} />
                </div>
            )}
        </Container>
    );
};

export default Comment_page;
