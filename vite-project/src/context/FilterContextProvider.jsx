import { createContext, useState } from "react";



export const FilterContext = createContext()

function FilterContextProvider({children}){
    const [filter, setFilter] = useState({
        cat:'',
        is_discount:null,
        is_new:null,
        is_limited:null

    })
    return(
        <>
        <FilterContext.Provider value={{filter, setFilter}}>
            {children}
        </FilterContext.Provider>
        
        </>
    )
}
export default FilterContextProvider