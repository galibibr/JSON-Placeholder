import axios from "axios";
import React, { useEffect, useState } from "react";
import {
    Container,
    TextField,
    Stack,
    Skeleton,
} from "@mui/material";
import { TUser } from "../types";
import { Link } from "react-router-dom";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

const UsersPage = () => {
    const url = "https://jsonplaceholder.typicode.com/users?";
    const [users, setUsers] = useState<TUser[]>([]);
    const [query, setQuery] = useState<string>("");

    async function getUsers() {
        try {
            const { data } = await axios.get(url + `q=${query}`);
            setUsers(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUsers();
    }, [query]);

    return (
        <Container className="mb-4">
            <div className="py-4">
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
            </div>
            {/* users list */}
            <Stack spacing={1}>
                {users.length ? (
                    users.map((user: TUser) => {
                        return (
                            <Link
                                to={`/users/${user.id}`}
                                key={user.id}
                                className="duration-100 border border-[#c5c5c5] dark:border-[#333333] hover:border-[#000] dark:hover:border-[#fff] hover:shadow-sm rounded-[4px]">
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar
                                            alt={user.name}
                                            src="/static/images/avatar/1.jpg"
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={user.name}
                                        secondary={user.email}
                                    />
                                </ListItem>
                            </Link>
                        );
                    })
                ) : (
                    <div>
                        <Skeleton height={70} />
                        <Skeleton height={70} />
                        <Skeleton height={70} />
                        <Skeleton height={70} />
                        <Skeleton height={70} />
                        <Skeleton height={70} />
                        <Skeleton height={70} />
                        <Skeleton height={70} />
                        <Skeleton height={70} />
                        <Skeleton height={70} />
                    </div>
                )}
            </Stack>
        </Container>
    );
};

export default UsersPage;
