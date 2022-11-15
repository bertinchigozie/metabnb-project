import React from 'react'
import{createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Auxilliary as Aux } from '../../hoc/Auxilliary/Auxilliary'
import Home from '../../components/Pages/home/Home'
import Place from '../../components/Pages/placeToStay/Place'



const router = createBrowserRouter([
  {
    path:'/',
    element: <Home/>,
  },
  {
    path:'/placeToStay',
    element:<Place/>
  }
])


function Metabnb() {
 
  return (
    <Aux>
       <RouterProvider router={router}/>
    </Aux>
  )
}

export default Metabnb