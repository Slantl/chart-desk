import { FC, useRef } from "react"
import { AiOutlineLogin, AiOutlineMenu, AiOutlinePlusCircle } from "react-icons/ai";

export const SideBar: FC = () => {
    const navRef = useRef<HTMLElement>(null)
    const side = () => {
        if (navRef.current === null) return
        let nc = navRef.current
        let temp = nc.classList.toString().split(" ")
        if (nc.classList.contains("bg-transparent")) {
            temp[0] = "bg-primary2"
            for (let i in nc.children) {
                if (i === "length") break
                if (nc.children[i].classList.contains("md:hidden")) continue
                let v = nc.children[i].classList.toString().split(" ")
                v[0] = "flex"
                nc.children[i].className = v.join(" ")
            }
            nc.className = temp.join(" ")
        } else {
            temp[0] = "bg-transparent"
            for (let i in nc.children) {
                if (i === "length") break
                if (nc.children[i].classList.contains("md:hidden")) continue
                let v = nc.children[i].classList.toString().split(" ")
                v[0] = "hidden"
                nc.children[i].className = v.join(" ")
            }
            nc.className = temp.join(" ")
        }
    }
    return (
        <nav ref={navRef} className="bg-transparent flex flex-col md:bg-primary2 w-16 fixed h-screen md:h-screen z-10 transition-transform items-center">
            <div className="fixed sideIcon md:hidden" onClick={side}><AiOutlineMenu /></div>
            <div className="hidden sideIcon font-normal text-3xl md:flex">F</div>
            <div className="hidden sideIcon md:flex"><AiOutlinePlusCircle /></div>
            <div className="hidden mt-auto sideIcon md:flex"><AiOutlineLogin /></div>
        </nav>
    )
}