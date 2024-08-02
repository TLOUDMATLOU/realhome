
import './App.css'
import Home from './pages/Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import SearchProperties from './pages/SearchProperties';
import RootLayout from './components/RootLayout';
import ErrorPage from './pages/ErrorPage';
import Property from './pages/Property';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },

      {
        path: "properties",
        element: <SearchProperties/>
      },

      {
        path: "properties/:id",
        element: <Property/>
      }
    ]
  },

  {
    path: "/signin",
    element: <SignIn />
  },
  {
    path: "/signup",
    element: <SignUp />
  },
 

]);

function App() {
  return (
  <RouterProvider router={router}/>
  )
}

export default App
