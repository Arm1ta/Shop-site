import ButtonCart from '../Button/ButtonCart'
import './card.css'
import { Link, useNavigate, useParams } from "react-router"

function Card({products}){
    
    const navigate = useNavigate()

    const handleClick = (id)=>{
        navigate(`/products/${id}`)
    }
    return(
        <div className='products-continer'>
            {
                products.map(item => (
                   
                        <div key={item.id} className="card-continer" >
                            <div onClick={()=>{handleClick(item.id)}}>
                                <img src={item.images[0].url} alt={item.images[0].alt.en} loading="lazy"/>
                                <div className='flex justify-between items-center mt-5 w-full'>
                                    <h1>{item.title.en}</h1>
                                    <p>{item.price.amount} {item.price.currency}</p>
                                </div>
                                {item.is_discount?  <p className='font-bold text-s text-red-600 w-full text-left mt-4'> discount</p>: ''} 

                            </div>
                            <ButtonCart styleButton={'card-button-add'} item={item}/>
                    

                        </div>
                    
                 
                ))
            }

        </div>
    )
}
export default Card