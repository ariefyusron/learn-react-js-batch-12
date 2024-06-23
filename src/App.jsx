import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Home'
import HomePage from './pages/home'
import DetailPage from './pages/detail'
import CreatePage from './pages/create'

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
        }
      ]
    },
  ]);

  return <RouterProvider router={router} />
}

export default App;