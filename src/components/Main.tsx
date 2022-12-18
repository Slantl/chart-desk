import { FC } from "react"
import { Desk } from "./Desk"
import { Header } from "./Header"

export const Main: FC = () => {
    return (
        <div className="flex flex-col bg-back w-full h-screen">
            <Header />
            <Desk />
        </div>
    )
}