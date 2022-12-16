import { FC } from "react"
import { Main } from "./components/Main"
import { SideBar } from "./components/SideBar"

export const App: FC = () => {
  return (
    <div className="flex h-screen w-full text-secondary">
      <SideBar />
      <Main />
    </div>
  )
}