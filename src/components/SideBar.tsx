import { FC, useContext, useRef, useState } from "react"
import { userContext } from "../App";
import { AddIcon } from "./SideBarIcons/AddIcon";
import { DeskIcon } from "./SideBarIcons/DeskIcon";
import { FooterIcon } from "./SideBarIcons/FooterIcon";
import { LogInIcon } from "./SideBarIcons/LogInIcon";
import { MenuIcon } from "./SideBarIcons/MenuIcon";

export const SideBar: FC = () => {
    const { desks } = useContext(userContext)
    const navRef = useRef<HTMLElement>(null)
    const [upAnim, setUpAnim] = useState<string>("")

    return (
        <>
            <MenuIcon navRef={navRef} />
            <nav ref={navRef} className="-translate-x-16 flex flex-col bg-primary2 w-16 
                                        fixed h-screen md:translate-x-0 md:h-screen z-10 
                                        transition-transform items-center overflow-visible 
                                        shadow-lg animate-slideRight">
                <div className="h-12 m-2 md:hidden"></div>
                {
                    desks.map((x, i) =>
                    <DeskIcon key={"sideItem-" + i} i={i} setUpAnim={setUpAnim} />
                    )
                }
                <AddIcon upAnim={upAnim} setUpAnim={setUpAnim} />
                <LogInIcon />
                <FooterIcon />
            </nav>
        </>
    )
}