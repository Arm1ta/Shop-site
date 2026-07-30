import {useForm} from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { useContext } from 'react'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContextProvider'
import './login.css'
import {useNavigate} from 'react-router'

const validationScheme = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().required().email()
})

function Login(){
    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver:yupResolver(validationScheme)
    })
    const navigate = useNavigate()

    const {auth ,setAuth } = useContext(AuthContext)
    console.log('login page',auth);
    

    const submit = async (value) => {
        try{
            const res = await axios.get('/mock/users.json');
            const user = res.data.users.find(users => users.name === value.name)
            console.log(user);
            if(!user){
                alert('اشتباه وارد کردید')
            }
            setAuth(user)
            navigate('/shop')
            
        }
        catch(err){
            console.log(err);
        }
    }

    return(
    <div className='outer-continer'>

       
        <div className='login-continer'>
            <div className='image-continer'>
                <img src="/online-shop-logo.jpg" alt="" />
            </div>
            <form onSubmit={handleSubmit(submit)}>  
                <h1 className='text-3xl font-semibold mb-8'>Login</h1>
                <label htmlFor="name" className='text-lg'>username</label>
                <input type="text" id='name' className='input-form' {...register('name')}/>
                <p className='text-red-600'>{errors.name?.message}</p>

                <label htmlFor="email" className='text-lg'>email</label>
                <input type="text" id='email' className='input-form' {...register('email')}/>
                <p className='text-red-600'>{errors.email?.message}</p>

                <button className='input-button'>submit</button>
            </form>
        </div>
    </div>
    )
}
export default Login;
