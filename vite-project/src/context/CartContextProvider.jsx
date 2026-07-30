import { createContext, useReducer, useState } from "react";

export const CartContext = createContext()

export const ADD = 'ADD'
export const REMOVE = 'REMOVE'
export const DECREASE = 'DECREASE'
export const INCREASE = 'INCREASE'

const TaskReducer = (state, action) => {
    const findItem = state.find(itemCart => itemCart.id === action.payload.id)
    switch (action.type){
        case ADD :{
            if(findItem){
                return state.map(prevItem => (
                    prevItem.id == action.payload.id
                    ? {...prevItem, quantity: prevItem.quantity + 1}
                    : prevItem
                ))  
            }
            return [...state, {...action.payload, quantity : 1}]
        }

            
        case REMOVE:
            return state.filter(itemCart => itemCart.id !== action.payload)
            
        case DECREASE:{ 
            if(findItem.quantity === 1){
                return state.filter(itemCart => itemCart.id !== action.payload.id)
            } 
            if(findItem){
                return state.map(prevItem => (
                    prevItem.id == action.payload.id
                    ? {...prevItem, quantity: prevItem.quantity - 1}
                    : prevItem
                ))  
            }
        }

        case INCREASE:{
            if(findItem){
                return state.map(prevItem => (
                    prevItem.id == action.payload.id
                    ? {...prevItem, quantity: prevItem.quantity + 1}
                    : prevItem
                ))  
            } 
        }
            
        default:
            return state
    }
}



function CartContextProvider({children}){
    const [cartItem, dispatch] = useReducer(TaskReducer, [])
    return(
        <>
        <CartContext.Provider value={{cartItem, dispatch}}>
            {children}
        </CartContext.Provider>
        
        </>
    )
}
export default CartContextProvider