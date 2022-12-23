import { FC, useContext } from "react"
import { userContext } from "../../App"

interface Props {
    i: number
}

export const DeskIcon: FC<Props> = ({ i }) => {
    const { desks, activeDesk, setActiveDesk } = useContext(userContext)

    const setA = (e: React.MouseEvent<HTMLDivElement>) => {
        setActiveDesk(parseInt(e.currentTarget.getAttribute("data-i") || ""))
    }

    return (
        <div data-i={i} className={"sideIcon md:flex animate-slideRight group " + (activeDesk == i ? "bg-back rounded-xl" : "")} onClick={setA}>
            {i + 1}
            <span className="sidebar-tooltip group-hover:scale-100">{desks[i].name}</span>
        </div>
    )
}