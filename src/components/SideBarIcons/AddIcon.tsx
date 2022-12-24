import { FC, useContext, useEffect, useState } from "react"
import { AiOutlinePlusCircle } from "react-icons/ai"
import { userContext } from "../../App"

interface Props {
    upAnim: string,
    setUpAnim: React.Dispatch<React.SetStateAction<string>>
}

export const AddIcon: FC<Props> = ({ upAnim, setUpAnim }) => {
    const { desks, setDesks } = useContext(userContext)
    const [ visible, setVisible ] = useState(true)

    const add = (e: React.MouseEvent<HTMLDivElement>) => {
        if (desks.length >= 5) return
        let cl = e.currentTarget.classList.value.split(" ")
        cl[cl.length] = "animate-slideDown"
        e.currentTarget.className = cl.join(" ")
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

    const delanim = (e: React.AnimationEvent<HTMLDivElement>) => {
        let cl = e.currentTarget.classList.value.split(" ")
        if (cl.indexOf("animate-slideDown") >= 0)
        cl.splice(cl.indexOf("animate-slideDown"), 1)
        if (cl.indexOf("animate-slideUp") >= 0)
        setUpAnim("")
        e.currentTarget.className = cl.join(" ")
    }

    useEffect(() => {
        desks.length >= 5 ? setVisible(false) : setVisible(true)
    }, [desks.length])

    return (
        <div className={"sideIcon md:flexgroup transition-all " + upAnim} style={visible ? {} : {display: "none"}} onAnimationEnd={delanim} onClick={add}>
            <AiOutlinePlusCircle />

            <span className="sidebar-tooltip group-hover:scale-100">Add Desk</span>
        </div>
    )
}