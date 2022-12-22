import { FC, useContext } from "react"
import { userContext } from "../../App"

interface Props {
    i: number
}

export const DeskIcon: FC<Props> = ({ i }) => {
    const { activeDesk, setActiveDesk } = useContext(userContext)

    const setA = (e: React.MouseEvent<HTMLDivElement>) => {
        setActiveDesk(parseInt(e.currentTarget.getAttribute("data-i") || ""))
    }

    return (
        <div key={"sideItem-" + i} data-i={i} className={"sideIcon md:flex " + (activeDesk == i ? "bg-back rounded-xl" : "")} onClick={setA}>{i + 1}</div>
    )
}