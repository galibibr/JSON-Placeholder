import { Button, Container, Skeleton } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { TAlbum } from "../types";
import { TiArrowBackOutline } from "react-icons/ti";

const Album_page = () => {
    const url = "https://jsonplaceholder.typicode.com/albums?";
    const { id } = useParams<string>();
    const [album, setAlbum] = useState<TAlbum | undefined>();
    const navigate: NavigateFunction = useNavigate();

    const handleGoBack = () => navigate(-1);

    async function getAlbum() {
        try {
            const { data } = await axios.get(url + `id=${id}`);
            setAlbum(data[0]);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getAlbum();
    }, [id]);

    return (
        <Container className="py-3">
            <Button
                variant="outlined"
                endIcon={<TiArrowBackOutline />}
                onClick={handleGoBack}>
                Go back
            </Button>
            {album ? (
                <div className="py-3 flex flex-col gap-1">
                    <p className="text-[20px] font-bold text-center">{album?.title}</p>
                </div>
            ) : (
                <div className="text-center py-3 flex flex-col gap-1">
                    <Skeleton />
                </div>
            )}
        </Container>
    );
};

export default Album_page;
