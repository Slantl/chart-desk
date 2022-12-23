import { FC } from "react"
import { AiOutlineLogin } from "react-icons/ai"

export const LogInIcon: FC = () => {
    return (
        <div className="mt-auto sideIcon md:flex group">
            <AiOutlineLogin />
            <span className="sidebar-tooltip group-hover:scale-100">Log in</span>
        </div>
    )
}