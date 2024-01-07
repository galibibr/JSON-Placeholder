import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./layout/Layout"
import HomePage from "./pages/HomePage"
import PostsPage from "./pages/PostsPage"
import CommentsPage from "./pages/CommentsPage"
import AlbumsPage from "./pages/AlbumsPage"
import PhotosPage from "./pages/PhotosPage"
import TodosPage from "./pages/TodosPage"
import UsersPage from "./pages/UsersPage"

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'posts',
          element: <PostsPage />,
        },
        {
          path: 'comments',
          element: <CommentsPage />,
        },
        {
          path: 'albums',
          element: <AlbumsPage />,
        },
        {
          path: 'photos',
          element: <PhotosPage />,
        },
        {
          path: 'todos',
          element: <TodosPage />,
        },
        {
          path: 'users',
          element: <UsersPage />,
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
