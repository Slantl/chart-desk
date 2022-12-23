import { FC, useContext, useEffect, useState } from "react"
import { AiOutlinePlusCircle } from "react-icons/ai"
import { userContext } from "../../App"

export const AddIcon: FC = () => {
    const { desks, setDesks } = useContext(userContext)
    const [ visible, setVisible ] = useState(true)

    const add = (e: React.MouseEvent<HTMLDivElement>) => {
        if (desks.length >= 5) return
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

    useEffect(() => {
        desks.length >= 5 ? setVisible(false) : setVisible(true)
    }, [desks.length])

    return (
        <div className="sideIcon md:flexgroup " style={desks.length >= 5 ? {display: "none"} : {}} onClick={add}>
            <AiOutlinePlusCircle />

            <span className="sidebar-tooltip group-hover:scale-100">Add Desk</span>
        </div>
    )
}