import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { IoOptionsOutline } from "react-icons/io5";
import './style.css'
import {Link} from 'react-router'
import { useContext, useState } from "react";
import Filter from "../Filter/Filter";
import axios from "axios";
import { CartContext } from "../../context/CartContextProvider";
import { AuthContext } from "../../context/AuthContextProvider";

function Header(){
    const [toggle, setToggle] = useState(false)
    const [category, setCategory] = useState([])
    const{cartItem} = useContext(CartContext)
    const{auth} = useContext(AuthContext)

    const clickFilter = () => {
       
        if(toggle){
            setToggle(prev => !prev)
        }
        else{

            axios.get('/mock/products.json')
                .then(res => {
                const data = res.data.products;
                const unique = new Set();
        
                data.map(item => {
                    const cat = item.category?.name?.en;
                    if (cat) unique.add(cat);
                });
        
                setCategory([...unique]);
                 setToggle(prev => !prev)
                
                });
        }
     

    }

    return(
        <>
        <div className="header-continer">

            <div >
                <Link to='/shop'>
                    <h1 className='font-bold text-2xl text-blue-500 pt-8'>My Shop</h1>
                </Link>
    
                <div onClick={clickFilter}  className="flex items-center gap-2 mt-4 cursor-pointer">
                    
                    <IoOptionsOutline size={25}/>
                    <p className="text-xl">filter</p>
    
                </div>
                {toggle && <Filter category={category}/>}
             

            </div>
            <div className="flex items-center gap-8 ">
                <Link to='/shop/cart' className="relative flex items-center">
                    <CiShoppingCart size={25} color="gray" className="cursor-pointer"/>
                    <span className="number-cart">{cartItem.length}</span>
                </Link>

                
                <CiUser size={25} color="gray" className="user"/>
                <span className="user-name">{auth.name}</span>

                <Link to='/' className="relative cursor-pointer">
                    <CiLogout size={25} color="gray" className="logo-logout"/>
                    <span className="logOut">log out</span>
                </Link>

            </div>
        </div>
        
        
        </>
    )
}
export default Header