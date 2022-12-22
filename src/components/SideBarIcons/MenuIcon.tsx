import { FC } from "react"
import { AiOutlineMenu } from "react-icons/ai"

interface Props {
    navRef: React.RefObject<HTMLElement>
}

export const MenuIcon: FC<Props> = ({ navRef }) => {
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
        <div className="fixed sideIcon md:hidden z-20" onClick={side}>
            <AiOutlineMenu />
        </div>
    )
}