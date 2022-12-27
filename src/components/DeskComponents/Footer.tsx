import { FC } from "react"
import { SiReact, SiTailwindcss } from "react-icons/si"

interface Props {
    ftCheck: boolean
}

export const Footer: FC<Props> = ({ ftCheck }) => {

    return (
        <footer className={"footer " + (ftCheck ? "-translate-y-52" : "")}>
            <ul className="flex gap-6 text-6xl">
                <li><SiReact style={{color: "#61DAFB"}} /></li>
                <li><SiTailwindcss style={{color: "#38BDF8"}}/></li>
            </ul>
            <a href="https://github.com/Slantl/chart-desk">Github: https://github.com/Slantl/chart-desk</a>
        </footer>
    )
}