import { FC, useRef } from "react"
import { AiOutlineLogin, AiOutlineMenu, AiOutlinePlusCircle } from "react-icons/ai";

export const SideBar: FC = () => {
    const navRef = useRef<HTMLElement>(null)
    const side = () => {
        if (navRef.current === null) return
        let nc = navRef.current
        let temp = nc.classList.toString().split(" ")
        if (nc.classList.contains("-translate-x-16")) {
            temp[0] = "translate-x-0"
            nc.className = temp.join(" ")
        } else {
            temp[0] = "-translate-x-16"
            nc.className = temp.join(" ")
        }
    }
    return (
        <>
        <div className="fixed sideIcon md:hidden z-20" onClick={side}><AiOutlineMenu /></div>
        <nav ref={navRef} className="-translate-x-16 flex flex-col bg-primary2 w-16 fixed h-screen md:translate-x-0 md:h-screen z-10 transition-transform items-center">
            <div className="h-12 m-2 md:hidden"></div>
            <div className="sideIcon md:flex"><AiOutlinePlusCircle /></div>
            <div className="mt-auto sideIcon md:flex"><AiOutlineLogin /></div>
        </nav>
        </>
    )
}