import { FC, useContext } from "react"
import { AiOutlineDelete } from "react-icons/ai"
import { userContext } from "../../App"

interface Props {
    i: number
    setUpAnim: React.Dispatch<React.SetStateAction<string>>
}

export const DeskIcon: FC<Props> = ({ i, setUpAnim }) => {
    const { desks, activeDesk, setActiveDesk, setDesks } = useContext(userContext)

    let check = true
    const del = (e: React.MouseEvent<HTMLSpanElement>) => {
        if (desks.length == 1) return
        check = false
        setUpAnim("animate-slideUp")
        let d = desks.map(x => x)
        d.splice(parseInt(e.currentTarget.getAttribute("data-i") || "-1"), 1)
        if (d.length - 1 < activeDesk) setActiveDesk(d.length - 1)
        setDesks(d)
    }

    const setA = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.currentTarget.getAttribute("data-i") == null) return
        if (check != true) {
            check = true
            return
        }
        setActiveDesk(parseInt(e.currentTarget.getAttribute("data-i") || ""))
    }


    return (
        <>
        <div data-i={i} className={"sideIcon md:flex animate-slideRight group " + (activeDesk == i ? "bg-back rounded-xl" : "")} onClick={setA}>
            {i + 1}
            <span className="sidebar-tooltip group-hover:scale-100">{desks[i].name}</span>
            <span className={"del-tooltip group-hover:scale-100 " + (desks.length == 1 ? "hidden" : "")} data-i={i} onClick={del}><AiOutlineDelete /></span>
        </div>
        </>
    )
}