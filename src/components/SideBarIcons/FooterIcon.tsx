import { FC, useContext } from "react"
import { AiOutlineArrowUp } from "react-icons/ai"
import { userContext } from "../../App"

export const FooterIcon: FC = () => {
    const { ftCheck, setFtCheck } = useContext(userContext)


    const toggleFooter = () => {
        setFtCheck(!ftCheck)
    }

    return (
        <div className="sideIcon hidden md:flex group" onClick={toggleFooter}>
            <AiOutlineArrowUp className={"text-3xl transition-all duration-200 " + (ftCheck ? "rotate-180" : "rotate-0")}/>
            <span className="sidebar-tooltip group-hover:scale-100">{ftCheck ? "Hide Footer" : "Show Footer"}</span>
        </div>
    )
}