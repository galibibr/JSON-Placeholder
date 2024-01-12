import { Button, Container, Skeleton } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { TUser } from "../types";
import { TiArrowBackOutline } from "react-icons/ti";

const User_page = () => {
    const url = "https://jsonplaceholder.typicode.com/users?";
    const { id } = useParams<string>();
    const [user, setUser] = useState<TUser | undefined>();
    const navigate: NavigateFunction = useNavigate();

    const handleGoBack = () => navigate(-1);

    async function getUser() {
        try {
            const { data } = await axios.get(url + `id=${id}`);
            setUser(data[0]);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getUser();
    }, [id]);

    return (
        <Container className="py-3">
            <Button
                variant="outlined"
                endIcon={<TiArrowBackOutline />}
                onClick={handleGoBack}>
                Go back
            </Button>
            {user ? (
                <div className="py-3 flex flex-col gap-1">
                    <p><span className="font-[300]">Name:</span> {user?.name}</p>
                    <p><span className="font-[300]">Username:</span> @{user?.username}</p>
                    <p><span className="font-[300]">Email:</span> {user?.email.toLowerCase()}</p>
                    <p><span className="font-[300]">Address:</span> {`${user?.address.street}, ${user.address.city}`}</p>
                    <p><span className="font-[300]">Phone:</span> {`+${user.phone.split(" ")[0]}`}</p>
                    <p><span className="font-[300]">Website:</span> <a className="underline" target="_blank" href={`https://${user.website}`}>{user.website}</a></p>
                </div>
            ) : (
                <div className="text-center py-3 flex flex-col gap-1">
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </div>
            )}
        </Container>
    );
};

export default User_page;
