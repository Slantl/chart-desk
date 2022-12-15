import { FC } from "react"
import "./App.css"
import { Main } from "./components/Main"
import { SideBar } from "./components/SideBar"

export const App: FC = () => {
  return (
    <section>
      <SideBar />
      <Main />
    </section>
  )
}