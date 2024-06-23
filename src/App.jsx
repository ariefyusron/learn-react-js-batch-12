import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Home'
import HomePage from './pages/home'
import DetailPage from './pages/detail'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/home',
      element: <Home />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: 'detail',
          element: <DetailPage />
        }
      ]
    },
  ]);

  return <RouterProvider router={router} />
}

export default App;