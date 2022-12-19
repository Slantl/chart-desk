import { FC } from "react"
import { AiOutlineLogin, AiOutlinePlusCircle } from "react-icons/ai";

export const SideBar: FC = () => {
    return (
        <nav className="flex flex-col bg-primary2 w-16 fixed h-16 md:h-screen z-10 items-center">
            <div className="sideIcon font-normal text-3xl">F</div>
            <div className="sideIcon"><AiOutlinePlusCircle /></div>
            <div className="mt-auto sideIcon"><AiOutlineLogin /></div>
        </nav>
    )
}