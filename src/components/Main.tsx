import { FC } from "react"
import { Desk } from "./Desk"
import { Header } from "./Header"

export const Main: FC = () => {
    return (
        <div className="flex flex-col bg-back w-full h-fit min-h-screen md:h-screen md:pl-16">
            <Header />
            <Desk />
        </div>
    )
}