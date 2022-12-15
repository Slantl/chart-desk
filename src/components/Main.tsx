import { FC } from "react"
import { Desk } from "./Desk"
import { Header } from "./Header"

export const Main: FC = () => {
    return (
        <section>
            <Header />
            <Desk />
        </section>
    )
}