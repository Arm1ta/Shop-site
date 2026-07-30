import { useContext } from "react"
import { AuthContext } from "../context/AuthContextProvider"
import Header from "../components/Header/Header"
import { Navigate, Outlet } from "react-router"
import CartContextProvider from "../context/CartContextProvider"
import FilterContextProvider from "../context/FilterContextProvider"



function PrivateLayout(){
    const {auth} = useContext(AuthContext)
    if(!auth){
        return <Navigate to='/'/>
    }

    return(
        <>
        
        <CartContextProvider>
            <FilterContextProvider>

                <Header/>
                <Outlet/>

            </FilterContextProvider>
        </CartContextProvider>
         </>
    )
}
export default PrivateLayout