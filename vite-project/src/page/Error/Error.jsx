import { Link } from "react-router"
import { useRouteError, isRouteErrorResponse } from "react-router"
import './style.css'

function Error(){
    const error = useRouteError()
    return(
        <div className="error-page">
            <div >

                <h1 className="text-9xl font-bold text-red-500">Error</h1>
                <p className="text-center text-lg my-4">
                    {isRouteErrorResponse(error)?'this page dosent exist':'sth is wrong'}
                </p>
                <Link to='/' className="text-lg font-bold border rounded py-1 px-2">back</Link>
                
            </div>
            

        </div>
        
        
        
    )
}
export default Error