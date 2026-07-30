import { useContext } from 'react'
import './style.css'
import { CartContext } from '../../context/CartContextProvider'
import ButtonCart from '../Button/ButtonCart'

function ItemInfo({
    item,
    title,
    description,
    images,
    is_new,
    is_discount,
    is_limited,
    stock,
    
}){

    
    
    return(
        <>
       
            <div className="item-detail">
                <div className='img-continer'>
                    <img src={images?.[0]?.url} alt={images?.[0]?.alt?.en} />
                </div>
                <div className="itemInfo">
                    <div className='border-b-3 border-white'>
                        <h1 className='text-lg font-bold'>{title?.en}</h1>
                        <div className='flex gap-8 my-4'>
                            <p>Availability : {stock}</p>
                            {is_new?<p className='text-blue-300 font-bold'>New Item</p>: null}
                            {is_limited?<p className='text-blue-300 font-bold'>Limited</p>: null}
                            {is_discount?<p className='text-blue-300 font-bold'>Discount</p>: null}
                        </div>
                    </div>
                    <div>
                        <p className='font-semibold text-lg'>About Item:</p>
                        <p>{description?.en}</p>
                    </div>

                    <ButtonCart styleButton={'button-item-detail'} item={item}/>
                </div>
            </div>

           
        
        
        
        
        </>
    )
}
export default ItemInfo