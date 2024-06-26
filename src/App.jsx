import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Home'
import HomePage from './pages/home'
import DetailPage from './pages/detail'
import CreatePage from './pages/create'
import EditPage from './pages/edit'
import PostPage from './pages/post'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: 'detail',
          element: <DetailPage />
        },
        {
          path: 'create',
          element: <CreatePage />
        },
        {
          path: 'edit/:id',
          element: <EditPage />
        }
      ]
    },
    {
      path: '/post',
      element: <PostPage />
    }
  ]);

  return <RouterProvider router={router} />
}

export default App;