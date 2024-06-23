import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from './pages/home'
import DetailPage from './pages/detail'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/detail',
      element: <DetailPage />
    }
  ]);

  return <RouterProvider router={router} />
}

export default App;