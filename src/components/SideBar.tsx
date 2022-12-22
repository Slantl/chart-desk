import { FC, useContext, useRef } from "react"
import { userContext } from "../App";
import { AddIcon } from "./SideBarIcons/AddIcon";
import { DeskIcon } from "./SideBarIcons/DeskIcon";
import { FooterIcon } from "./SideBarIcons/FooterIcon";
import { LogInIcon } from "./SideBarIcons/LogInIcon";
import { MenuIcon } from "./SideBarIcons/MenuIcon";

export const SideBar: FC = () => {
    const { desks } = useContext(userContext)
    const navRef = useRef<HTMLElement>(null)
    return (
        <>
            <MenuIcon navRef={navRef} />
            <nav ref={navRef} className="-translate-x-16 flex flex-col bg-primary2 w-16 fixed h-screen md:translate-x-0 md:h-screen z-10 transition-transform items-center overflow-y-auto overflow-x-hidden">
                <div className="h-12 m-2 md:hidden"></div>
                {
                    desks.map((x, i) =>
                    <DeskIcon i={i} />
                    )
                }
                <AddIcon />
                <LogInIcon />
                <FooterIcon />
            </nav>
        </>
    )
}