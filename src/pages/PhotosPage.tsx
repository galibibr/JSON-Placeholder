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
    ListItem,
    ListItemAvatar,
    List,
} from "@mui/material";
import { TPhoto } from "../types";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const PhotosPage = () => {
    const url = "https://jsonplaceholder.typicode.com/photos?";
    const [photos, setPhotos] = useState<TPhoto[]>([]);
    const [query, setQuery] = useState<string>("");
    const [page, setPage] = useState<number>(1);
    const [pageQty, setPageQty] = useState<number>(0);
    const [limit, setLimit] = useState<string>(
        sessionStorage.getItem("limitPhotosPage") || "10"
    );

    async function getPageQty() {
        try {
            const { data } = await axios.get(url + `q=${query}`);
            setPageQty(Math.ceil(data.length / +limit));
        } catch (error) {
            console.log(error);
        }
    }
    async function getPhotos() {
        try {
            const { data } = await axios.get(
                url + `q=${query}&_page=${page}&_limit=${limit}`
            );
            setPhotos(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPhotos();
        getPageQty();
    }, [query, page, limit]);

    const handleLimit = (event: SelectChangeEvent) => {
        sessionStorage.setItem("limitPhotosPage", event.target.value);
        setLimit(sessionStorage.getItem("limitPhotosPage") || "10");
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

            {/* photos list */}
            <List>
                <Stack spacing={1}>
                {photos.length ? (
                    photos.map((photo: TPhoto) => {
                        return (
                            <Link
                                to={`/photos/${photo.id}`}
                                key={photo.id}
                                className="duration-100 border border-[#c5c5c5] dark:border-[#333333] hover:border-[#000] dark:hover:border-[#fff] hover:shadow-sm rounded-[4px]">
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar
                                            alt="Remy Sharp"
                                            src={photo.url}
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={`Item ${photo.id}`}
                                        secondary={photo.title}
                                    />
                                </ListItem>
                            </Link>
                        );
                    })
                ) : (
                    <div>
                        <Skeleton height={70}/>
                        <Skeleton height={70}/>
                        <Skeleton height={70}/>
                        <Skeleton height={70}/>
                        <Skeleton height={70}/>
                        <Skeleton height={70}/>
                        <Skeleton height={70}/>
                        <Skeleton height={70}/>
                        <Skeleton height={70}/>
                        <Skeleton height={70}/>
                    </div>
                )}
                </Stack>
            </List>
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

export default PhotosPage;
