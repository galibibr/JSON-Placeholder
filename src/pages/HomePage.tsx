import { Avatar, Button, Container, ListItem, ListItemAvatar, ListItemText, Skeleton, Stack } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { TAlbum, TComment, TPhoto, TPost, TTodo, TUser } from "../types";
import { Link } from "react-router-dom";

const HomePage = () => {
    const url = "https://jsonplaceholder.typicode.com/";
    const [posts, setPosts] = useState<TPost[]>([]);
    const [comments, setComments] = useState<TComment[]>([]);
    const [albums, setAlbums] = useState<TAlbum[]>([]);
    const [photos, setPhotos] = useState<TPhoto[]>([]);
    const [todos, setTodos] = useState<TTodo[]>([]);
    const [users, setUsers] = useState<TUser[]>([]);

    async function getPosts() {
        try {
            const { data } = await axios.get(url + `posts?_start=1&_end=6`);
            setPosts(data);
        } catch (error) {
            console.log(error);
        }
    }
    async function getComments() {
        try {
            const { data } = await axios.get(url + `comments?_start=1&_end=6`);
            setComments(data);
        } catch (error) {
            console.log(error);
        }
    }
    async function getAlbums() {
        try {
            const { data } = await axios.get(url + `albums?_start=1&_end=6`);
            setAlbums(data);
        } catch (error) {
            console.log(error);
        }
    }
    async function getPhotos() {
        try {
            const { data } = await axios.get(url + `photos?_start=1&_end=6`);
            setPhotos(data);
        } catch (error) {
            console.log(error);
        }
    }
    async function getTodos() {
        try {
            const { data } = await axios.get(url + `todos?_start=1&_end=6`);
            setTodos(data);
        } catch (error) {
            console.log(error);
        }
    }
    async function getUsers() {
        try {
            const { data } = await axios.get(url + `users?_start=1&_end=6`);
            setUsers(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPosts();
        getComments();
        getAlbums();
        getPhotos()
        getTodos()
        getUsers()
    }, []);

    return (
        <Container>
            {/* posts */}
            <section className="mt-3">
                <p className="text-center text-[32px] font-[500] pb-1">Posts</p>
                <Stack spacing={1}>
                    {posts.length ? (
                        posts.map((post: TPost) => {
                            return (
                                <Link
                                    to={`/posts/${post.id}`}
                                    key={post.id}
                                    className="hover:text-blue underline dark:hover:text-blueDark hover:underline duration-100">
                                    {post.title}
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
                <Link to={"posts"} className="flex mt-3">
                    <Button variant="outlined" sx={{ marginX: "auto" }}>
                        See more Posts
                    </Button>
                </Link>
            </section>
            {/* comments */}
            <section className="mt-7">
                <p className="text-center text-[32px] font-[500] mb-2">
                    Comments
                </p>
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
                <Link to={"comments"} className="flex mt-3">
                    <Button variant="outlined" sx={{ marginX: "auto" }}>
                        See more Comments
                    </Button>
                </Link>
            </section>
            {/* albums */}
            <section className="mt-7">
                <p className="text-center text-[32px] font-[500] mb-2">
                    Albums
                </p>
                <Stack spacing={1}>
                    {albums.length ? (
                        albums.map((post: TAlbum) => {
                            return (
                                <Link
                                    to={`/albums/${post.id}`}
                                    key={post.id}
                                    className="hover:text-blue underline dark:hover:text-blueDark hover:underline duration-100">
                                    {post.title}
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
                <Link to={"albums"} className="flex mt-3">
                    <Button variant="outlined" sx={{ marginX: "auto" }}>
                        See more Albums
                    </Button>
                </Link>
            </section>
            {/* photos */}
            <section className="mt-7">
                <p className="text-center text-[32px] font-[500] mb-2">
                    Photos
                </p>
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
                <Link to={"photos"} className="flex mt-3">
                    <Button variant="outlined" sx={{ marginX: "auto" }}>
                        See more Photos
                    </Button>
                </Link>
            </section>
            {/* todos */}
            <section className="mt-7">
                <p className="text-center text-[32px] font-[500] mb-2">
                    Todos
                </p>
                <Stack spacing={1}>
                {todos.length ? (
                    todos.map((todo: TTodo) => {
                        return (
                            <Link
                                to={`/todos/${todo.id}`}
                                key={todo.id}
                                className="hover:text-blue flex items-center gap-2 dark:hover:text-blueDark duration-100">
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                />
                                <p
                                    className={`${
                                        todo.completed && "line-through text-blue"
                                    }`}>
                                    {todo.title}
                                </p>
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
                <Link to={"todos"} className="flex mt-3">
                    <Button variant="outlined" sx={{ marginX: "auto" }}>
                        See more Todos
                    </Button>
                </Link>
            </section>
            {/* users */}
            <section className="my-7">
                <p className="text-center text-[32px] font-[500] mb-2">
                    Users
                </p>
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
                <Link to={"todos"} className="flex mt-3">
                    <Button variant="outlined" sx={{ marginX: "auto" }}>
                        See more Users
                    </Button>
                </Link>
            </section>
        </Container>
    );
};

export default HomePage;
