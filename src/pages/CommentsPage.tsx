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
    Skeleton,
} from "@mui/material";
import { TComment } from "../types";
import { Link } from "react-router-dom";

const CommentsPage = () => {
    const url = "https://jsonplaceholder.typicode.com/comments?";
    const [comments, setComments] = useState<TComment[]>([]);
    const [query, setQuery] = useState<string>("");
    const [page, setPage] = useState<number>(1);
    const [pageQty, setPageQty] = useState<number>(0);
    const [limit, setLimit] = useState<string>(
        sessionStorage.getItem("limitPageComments") || "10"
    );

    async function getPageQty() {
        try {
            const { data } = await axios.get(url + `q=${query}`);
            setPageQty(Math.ceil(data.length / +limit));
        } catch (error) {
            console.log(error);
        }
    }
    async function getComments() {
        try {
            const { data } = await axios.get(
                url + `q=${query}&_page=${page}&_limit=${limit}`
            );
            setComments(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getComments();
        getPageQty();
    }, [query, page, limit]);

    const handleLimit = (event: SelectChangeEvent) => {
        sessionStorage.setItem("limitPageComments", event.target.value);
        setLimit(sessionStorage.getItem("limitPageComments") || "10");
    };

    return (
        <Container>
            <div className="flex gap-3 py-4">
                <TextField
                    fullWidth
                    label="query"
                    size="small"
                    value={query}
                    helperText="Search by query"
                    onChange={(
                        event: React.ChangeEvent<
                            HTMLInputElement | HTMLTextAreaElement
                        >
                    ) => setQuery(event.target.value)}
                />

                <FormControl sx={{ minWidth: 120 }} size="small">
                    <Select
                        value={limit || "10"}
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
            {/* posts list */}
            <Stack spacing={1}>
                {comments.length ? (
                    comments.map((comment: TComment) => {
                        return (
                            <Link
                                to={`/comments/${comment.id}`}
                                key={comment.id}
                                className="duration-100 border border-[#c5c5c5] dark:border-[#333333] hover:border-[#000] dark:hover:border-[#fff] hover:shadow-sm rounded-[4px] p-[13px]">
                                <p>{comment.name}</p>
                                <p>{comment.email}</p>
                            </Link>
                        );
                    })
                ) : (
                    <div className="flex flex-col gap-[8px]">
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </div>
                )}
            </Stack>
            {/* Pagination */}
            <Stack>
                {!!pageQty ? (
                    <Pagination
                        siblingCount={0}
                        color="primary"
                        variant="outlined"
                        count={pageQty}
                        page={page}
                        onChange={(_, num: number) => setPage(num)}
                        sx={{ marginX: "auto", marginY: 3 }}
                    />
                ) : (
                    <Skeleton
                        width={250}
                        height={50}
                        sx={{ marginX: "auto", marginY: 2 }}
                    />
                )}
            </Stack>
        </Container>
    );
};

export default CommentsPage;
