import { useContext } from "react"
import { CartContext, ADD } from "../../context/CartContextProvider"



function ButtonCart({item, styleButton}){

    const {dispatch} = useContext(CartContext)


    return(
        <>
            <button className={styleButton} onClick={()=>dispatch({type:ADD, payload: item})}>add to card</button>
        
        </>
    )
}
export default ButtonCart