import { useContext } from 'react'
import './style.css'
import { CartContext, REMOVE, DECREASE, INCREASE} from '../../context/CartContextProvider'
import { IoIosAddCircle } from "react-icons/io"
import { IoIosRemoveCircle } from "react-icons/io";

function Cart(){
    const {cartItem, dispatch} = useContext(CartContext)

    const total = cartItem.reduce((acc, item)=>{
        console.log('acc',acc);
        console.log('item',item.price.amount*item.quantity);
        return (item.price.amount*item.quantity)+acc
        
         
    },0)



    return(
        <>
        <div className='mt-35'>

            <h2 className="pl-9 mt-16 pb-4 text-xl font-extrabold">Your Cart</h2>
            <div className="content">
                <div className="cart">
                    { cartItem.length === 0 
                    ?(<h1 className='pl-2 font-semibold'>Your cart is empty</h1> )
                    : (
                        <table>
                            <thead>
                                <tr>
                                    <th>item</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartItem.map(item=>(
                                        <>
                                       
                                        <tr key={item.id}>
                                            <td>{item.title?.en}</td>
                                            <td>${item?.price?.amount}</td>
                                            

                                            <td>
                                                <div className="flex items-center gap-2">
                                                    <IoIosRemoveCircle color="red" size={20} className="cursor-pointer" onClick={()=>dispatch({type:DECREASE, payload:item})} />
                                                    <span>{item.quantity}</span>
                                                    <IoIosAddCircle color="green" size={20} className="cursor-pointer" onClick={()=>dispatch({type:INCREASE, payload:item})} />
                                                </div>
                                            </td>
                                                                                            

                                            <td>{(item.price.amount * item.quantity).toFixed(2)}</td>

                                            <td>
                                                <button className="remove-btn" onClick={() => dispatch({type:REMOVE, payload:item.id})}>
                                                remove
                                                </button>
                                            </td>
                                        </tr>

                                         </>
                                    ))
                                }
                            </tbody>
                        </table>
                    )
                    
                    
                    }
                </div>


                 <div className="checkout">
                    <h6 className="text-xl font-bold">order summary:</h6>
                    <div className='text-lg'>Total: ${(total).toFixed(2)}</div>
                    <button className='mt-auto bg-blue-500 rounded text-white font-semibold py-1 cursor-pointer'>checkout</button>

                </div>

            </div>

        </div>
        
        
        
        
        
        </>
    )
}
export default Cart