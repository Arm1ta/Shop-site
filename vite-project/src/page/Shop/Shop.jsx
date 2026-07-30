import axios from "axios"
import { useContext, useEffect, useState } from "react"
import Card from "../../components/card/Card"
import Loading from "../../components/Loading/Loading"
import { FilterContext } from "../../context/FilterContextProvider"
import { AuthContext } from "../../context/AuthContextProvider"

function Shop(){
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {filter} = useContext(FilterContext)

    

    

    useEffect(()=>{
        axios.get('/mock/products.json')
        .then(res => {setProducts(res.data.products)
        })
        .finally(()=>setLoading(false))

    },[]) 


    
const filterItem = products.filter(item => 
    (filter.cat === '' || item.category?.name?.en === filter.cat) &&
    (filter.is_discount === null || item.is_discount === filter.is_discount) &&
    (filter.is_new === null || item.is_new === filter.is_new) &&
    (filter.is_limited === null || item.is_limited === filter.is_limited)
);

    const {auth} = useContext(AuthContext)
    console.log(auth);
    
    
    
    if(loading) return <Loading/>
    
    return(
        <>
        {filter && <Card products={filterItem}/>}
       
        </>
    )
}

export default Shop