import { FC, useRef } from "react"
import { AiOutlineLogin, AiOutlineMenu, AiOutlinePlusCircle } from "react-icons/ai";
import { Desk } from "../App";

interface Props {
    activeDesk: number,
    setActiveDesk: React.Dispatch<React.SetStateAction<number>>,
    desks: Desk[],
    setDesks: React.Dispatch<React.SetStateAction<Desk[]>>
}

export const SideBar: FC<Props> = ({ activeDesk, setActiveDesk, desks, setDesks}) => {
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

    const add = () => {
        if (desks.length == 9) return
        setDesks([...desks, {
            name: "Desk-" + (desks.length + 1),
            period: [new Date()],
            deskData: [
                {
                    name: "",
                    color: "#4000c0",
                    visible: true,
                    info: {}
                }
            ]
        }])
    }

    const setA = (e: React.MouseEvent<HTMLDivElement>) => {
        setActiveDesk(parseInt(e.currentTarget.getAttribute("data-i") || ""))
    }

    return (
        <>
        <div className="fixed sideIcon md:hidden z-20" onClick={side}><AiOutlineMenu /></div>
        <nav ref={navRef} className="-translate-x-16 flex flex-col bg-primary2 w-16 fixed h-screen md:translate-x-0 md:h-screen z-10 transition-transform items-center overflow-y-auto overflow-x-hidden">
            <div className="h-12 m-2 md:hidden"></div>
            {
                desks.map((x, i) =>
                i == activeDesk ?
                <div key={"sideItem-" + i} data-i={i} className="sideIcon bg-back rounded-xl md:flex" onClick={setA}>{i + 1}</div>
                : <div key={"sideItem-" + i} data-i={i} className="sideIcon md:flex" onClick={setA}>{i + 1}</div>)
            }
            <div className="sideIcon md:flex" style={desks.length >= 5 ? {display: "none"} : {}} onClick={add}><AiOutlinePlusCircle /></div>
            <div className="mt-auto sideIcon md:flex"><AiOutlineLogin /></div>
        </nav>
        </>
    )
}