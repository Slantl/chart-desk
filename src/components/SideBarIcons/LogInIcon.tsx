import { FC, useContext } from "react"
import { AiOutlineLogin } from "react-icons/ai"
import { userContext } from "../../App"

export const LogInIcon: FC = () => {
    const change = () => {
        setLoging("absolute")
    }
    
    const { setLoging } = useContext(userContext)
    return (
        <div className="mt-auto sideIcon md:flex group" onClick={change} >
            <AiOutlineLogin />
            <span className="sidebar-tooltip group-hover:scale-100">Log in</span>
        </div>
    )
}