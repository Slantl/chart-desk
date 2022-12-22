import { FC, useContext } from "react"
import { AiOutlinePlusCircle } from "react-icons/ai"
import { userContext } from "../../App"

export const AddIcon: FC = () => {
    const { desks, setDesks } = useContext(userContext)

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

    return (
        <div className="sideIcon md:flex" style={desks.length >= 5 ? {display: "none"} : {}} onClick={add}>
            <AiOutlinePlusCircle />
        </div>
    )
}