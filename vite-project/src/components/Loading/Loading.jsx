import { CgSpinner } from "react-icons/cg";

function Loading(){
    return(
        <>
        <div className="w-full h-screen flex items-center justify-center absolute bg-gray-300/50">
            <CgSpinner size={40} className="animate-spin"/>
        </div>
        </>
    )
}
export default Loading