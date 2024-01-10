import axios from "axios";
import React, { useEffect, useState } from "react";
import {
    Container,
    Pagination,
    TextField,
    Stack,
    FormControl,
    Select,
    MenuItem,
    FormHelperText,
    SelectChangeEvent,
} from "@mui/material";
import { TPost } from "../types";

const url = "https://jsonplaceholder.typicode.com/posts?";

const PostsPage = () => {
    const [posts, setPosts] = useState<TPost[]>([]);
    const [query, setQuery] = useState<string>("");
    const [page, setPage] = useState<number>(1);
    const [pageQty, setPageQty] = useState<number>(0);
    const [limit, setLimit] = useState<string>("10");

    async function getPageQty() {
        try {
            const { data } = await axios.get(url + `q=${query}`);
            setPageQty(Math.ceil(data.length / +limit));
        } catch (error) {
            console.log(error);
        }
    }
    async function getPosts() {
        try {
            const { data } = await axios.get(
                url + `q=${query}&_page=${page}&_limit=${limit}`
            );
            setPosts(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPosts();
        getPageQty();
    }, [query, page, limit]);

    const handleLimit = (event: SelectChangeEvent) => {
        setLimit(event.target.value);
    };

    return (
        <Container>
            <div className="flex gap-3 py-4">
                <TextField
                    fullWidth
                    label="query"
                    size="small"
                    value={query}
                    onChange={(
                        event: React.ChangeEvent<
                            HTMLInputElement | HTMLTextAreaElement
                        >
                    ) => setQuery(event.target.value)}
                />
                <FormControl sx={{ minWidth: 115 }} size="small">
                    <Select
                        value={limit}
                        onChange={handleLimit}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}>
                        <MenuItem value={10}>10 items</MenuItem>
                        <MenuItem value={20}>20 items</MenuItem>
                        <MenuItem value={30}>30 items</MenuItem>
                    </Select>
                    <FormHelperText>Items per Page</FormHelperText>
                </FormControl>
            </div>
            <Stack>
                {posts.length ? (
                    posts.map((post: TPost) => {
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
                        sx={{ marginX: "auto", marginY: 3 }}
                    />
                )}
            </Stack>
        </Container>
    );
};

export default PostsPage;
