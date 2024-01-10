import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Pagination, TextField, Stack } from "@mui/material";

const url = "https://jsonplaceholder.typicode.com/posts?";

const PostsPage = () => {
    const [posts, setPosts] = useState<any>([]);
    const [query, setQuery] = useState<any>("");
    const [page, setPage] = useState<any>(1);
    const [pageQty, setPageQty] = useState<any>(0);

    async function getPageQty() {
        try {
            const { data } = await axios.get(url + `q=${query}`);
            setPageQty(Math.ceil(data.length / 10));
        } catch (error) {
            console.log(error);
        }
    }
    async function getPosts() {
        try {
            const { data } = await axios.get(url + `q=${query}&_page=${page}`);
            setPosts(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPosts();
        getPageQty();
    }, [query, page]);

    return (
        <Container>
            <TextField
                fullWidth
                label="query"
                size="small"
                margin="normal"
                value={query}
                onChange={(
                    event: React.ChangeEvent<
                        HTMLInputElement | HTMLTextAreaElement
                    >
                ) => setQuery(event.target.value)}
            />
            <Stack>
                {posts.length ? (
                    posts.map((post: any) => {
                        return <p key={post.id}>{post.title}</p>;
                    })
                ) : (
                    <div className="text-center">Loaling...</div>
                )}
                {!!pageQty && (
                    <Pagination
                        siblingCount={0}
                        color="primary"
                        variant="outlined"
                        count={pageQty}
                        page={page}
                        onChange={(_, num: number) => setPage(num)}
                        sx={{ marginX: "auto", marginY: 1 }}
                    />
                )}
            </Stack>
        </Container>
    );
};

export default PostsPage;
