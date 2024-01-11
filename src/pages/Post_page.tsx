import { Button, Container, Skeleton } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { TPost } from "../types";
import { TiArrowBackOutline } from "react-icons/ti";

const Post_page = () => {
    const url = "https://jsonplaceholder.typicode.com/posts?";
    const { id } = useParams<string>();
    const [post, setPost] = useState<TPost | undefined>();
    const navigate: NavigateFunction = useNavigate();

    const handleGoBack = () => navigate(-1);

    async function getPost() {
        try {
            const { data } = await axios.get(url + `id=${id}`);
            setPost(data[0]);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getPost();
    }, [id]);

    return (
        <Container className="py-3">
            <Button
                variant="outlined"
                endIcon={<TiArrowBackOutline />}
                onClick={handleGoBack}>
                Go back
            </Button>
            {post ? (
                <div className="py-3 flex flex-col gap-1">
                    <p className="text-[20px] font-bold text-center">{post?.title}</p>
                    <p>{post?.body}</p>
                </div>
            ) : (
                <div className="text-center py-3 flex flex-col gap-1">
                    <Skeleton />
                    <Skeleton height={50} />
                </div>
            )}
        </Container>
    );
};

export default Post_page;
