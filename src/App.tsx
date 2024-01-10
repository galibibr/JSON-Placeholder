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
                    path: "comments",
                    element: <CommentsPage />,
                },
                {
                    path: "albums",
                    element: <AlbumsPage />,
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
