import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import PostsPage from "./pages/PostsPage";
import CommentsPage from "./pages/CommentsPage";
import AlbumsPage from "./pages/AlbumsPage";
import PhotosPage from "./pages/PhotosPage";
import TodosPage from "./pages/TodosPage";
import UsersPage from "./pages/UsersPage";
import NotFound from "./pages/NotFound";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useTheme } from "./store/store";
import { PaletteMode } from "@mui/material";
import Post_page from "./pages/Post_page";
import Comment_page from "./pages/Comment_page";
import Album_page from "./pages/Album_page";

function App() {
    const theme = useTheme<PaletteMode | undefined>((state: any) => state.theme);
    const appTheme = createTheme({
        palette: {
            mode: theme,
        },
    });

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <HomePage />,
                },
                {
                    path: "posts",
                    element: <PostsPage />,
                },
                {
                    path: "posts/:id",
                    element: <Post_page />,
                },
                {
                    path: "comments",
                    element: <CommentsPage />,
                },
                {
                    path: "comments/:id",
                    element: <Comment_page />,
                },
                {
                    path: "albums",
                    element: <AlbumsPage />,
                },
                {
                    path: "albums/:id",
                    element: <Album_page />,
                },
                {
                    path: "photos",
                    element: <PhotosPage />,
                },
                {
                    path: "todos",
                    element: <TodosPage />,
                },
                {
                    path: "users",
                    element: <UsersPage />,
                },
                {
                    path: "*",
                    element: <NotFound />,
                },
            ],
        },
    ]);

    return (
        <ThemeProvider theme={appTheme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
