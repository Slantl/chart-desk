import { FC } from "react"
import { Desk } from "./Desk"
import { Header } from "./Header"

export const Main: FC = () => {
    return (
        <div className="flex flex-col bg-primary w-full">
            <Header />
            <Desk />
        </div>
    )
}