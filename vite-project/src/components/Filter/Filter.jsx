import { useContext, useEffect, useState } from 'react'
import './style.css'
import { FilterContext } from '../../context/FilterContextProvider'

function Filter({category}){

    const {filter ,setFilter} = useContext(FilterContext)

    const handleCheckBox = (e, filed) => {
        const check = e.target.checked
        return setFilter(prev => 
            ({...prev,
                [filed]:check ? true : null
            })
        )
        
    
    }
    return(
        <>
        <div className="continer-filter">
            <p className='font-bold'>category:</p>
            {
                category.map(item => (
                    <p 
                    key={item} 
                    className={`cursor-pointer pl-4 ${
                        filter.cat === item ? "font-bold text-blue-600" : ""
                    }`}
                    onClick={()=>setFilter(prev => ({...prev,cat: item}))}>
                        {item}
                    </p>
                   
                   
                ))
            }
            
            <div className='pt-4'>
                <div className='flex gap-6 items-center'>
                    <p className='font-bold'>discount</p>
                    <input type='checkbox' checked={filter.is_discount === true} onChange={(e)=>handleCheckBox(e, 'is_discount')}/>
                </div>
                <div className='flex  gap-14 items-center'>
                    <p className='font-bold'>new</p>
                    <input type='checkbox' checked={filter.is_new === true} onChange={(e)=>handleCheckBox(e,'is_new')}/>
                </div>
                <div className='flex  gap-9 items-center'>
                    <p className='font-bold'>limited</p>
                    <input type='checkbox' checked={filter.is_limited === true} onChange={(e)=>handleCheckBox(e, 'is_limited')}/>
                </div>
            </div>
        </div>
        
        
        </>
    )
}
export default Filter