import { Button, Container, Skeleton } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { TPhoto } from "../types";
import { TiArrowBackOutline } from "react-icons/ti";

const Photo_page = () => {
    const url = "https://jsonplaceholder.typicode.com/photos?";
    const { id } = useParams<string>();
    const [photo, setPhoto] = useState<TPhoto | undefined>();
    const navigate: NavigateFunction = useNavigate();

    const handleGoBack = () => navigate(-1);

    async function getPhoto() {
        try {
            const { data } = await axios.get(url + `id=${id}`);
            setPhoto(data[0]);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getPhoto();
    }, [id]);

    return (
        <Container className="py-3">
            <Button
                variant="outlined"
                endIcon={<TiArrowBackOutline />}
                onClick={handleGoBack}>
                Go back
            </Button>
            {photo ? (
                <div className="py-3 flex flex-col gap-1">
                    <img src={photo.url} className="sm:w-[200px] sm:h-[200px] w-[120px] h-[120px] rounded-full mx-auto" alt="img" />
                    <p className="text-[20px] font-bold text-center">{photo?.title}</p>
                </div>
            ) : (
                <div className="text-center py-3 flex items-center flex-col gap-1">
                    <Skeleton variant="circular" width={200} height={200} />
                    <Skeleton height={50} sx={{width: '100%'}} />
                </div>
            )}
        </Container>
    );
};

export default Photo_page;
