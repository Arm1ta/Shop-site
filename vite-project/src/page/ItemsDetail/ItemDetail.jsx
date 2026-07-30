import './style.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import {useParams} from 'react-router'
import ItemInfo from '../../components/ItemInfo/ItemInfo';
import Loading from '../../components/Loading/Loading';


function ItemDetail(){
    const param = useParams()
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        axios.get('/mock/products.json')
        .then(res => {
            const data = res.data.products
            const findItem = data.find(item => item.id == param.productId)
            setItem(findItem);
            console.log(findItem);
      
        })
        .finally(() => setLoading(false))

    },[param.productId])

    
    
    if(loading) return <Loading/>
    
    return(
        <>
        <div className="flex p-4 mt-30">
            <ItemInfo {...item } item={item}/>
        </div>
        
        </>
    )
}
export default ItemDetail