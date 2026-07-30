
import Cart from "../page/cart/Cart";
import ItemDetail from "../page/ItemsDetail/ItemDetail";
import Login from "../page/Login/Login";
import Shop from "../page/Shop/Shop";
import {createBrowserRouter} from 'react-router'
import PrivateLayout from "../Private/PrivateLayout";
import Error from "../page/Error/Error";




export const router = createBrowserRouter([
  {
    path: '/',
    errorElement:<Error/>,
    element: <Login />
  },
  {
    // errorElement:<Error/>,
    element: <PrivateLayout />,
    children: [

      {
        path: '/shop',
        element: <Shop />
      },
      {
        path: '/products/:productId',
        element: <ItemDetail />
      },
      {
        path: '/shop/cart',
        element: <Cart />
      }
    ]
  }
    
  
]);


