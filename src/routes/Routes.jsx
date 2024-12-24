import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home'
import Login from '../pages/Authentication/Login'
import Register from '../pages/Authentication/Register'
import ErrorPage from '../pages/ErrorPage'
import AllFoods from '../pages/AllFoods'
import AddFood from '../pages/AddFood'
import MyFoods from '../pages/MyFoods'
import UpdateFood from '../pages/UpdateFood'
import FoodDetails from '../components/FoodDetails'
import Purchase from '../pages/Purchase'
// import PrivateRoute from './PrivateRoute'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/registration',
        element: <Register />,
      },

      {
        path: '/all-foods',
        element: <AllFoods></AllFoods>
      },
      {
        path: '/add-food',
        element: <AddFood></AddFood>
      },
      
        {
          path: '/my-foods',
          element: <MyFoods></MyFoods>
        },
        {
          path: '/update/:id',
          element: <UpdateFood></UpdateFood>
        },
        {
          path: '/food-details/:id',
          element: <FoodDetails></FoodDetails>
        },
        {
          path: '/purchase/:id',
          element: <Purchase></Purchase>
        }
      
      
      
      
    ],
  },
])

export default router
