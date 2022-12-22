import { createContext, FC, useState } from "react"
import { Footer } from "./components/DeskComponents/Footer"
import { Main } from "./components/Main"
import { SideBar } from "./components/SideBar"

interface UserContext {
  activeDesk: number,
  setActiveDesk: React.Dispatch<React.SetStateAction<number>>,
  desks: Desk[],
  setDesks: React.Dispatch<React.SetStateAction<Desk[]>>
}

export const userContext = createContext<UserContext>({
  activeDesk: 0,
  setActiveDesk: () => {},
  desks: [],
  setDesks: () => {}
})

export interface Entity {
  name: string,
  color: string,  
  visible: boolean,
  info: {[key: string]: number}
}

export interface Desk {
  name: string,
  period: Date[],
  deskData: Entity[] 
}

export const App: FC = () => {
  const [ftCheck, setFtCheck] = useState(false)
  const [activeDesk, setActiveDesk] = useState(0)
  const [desks, setDesks] = useState<Desk[]>([{
    name: "Desk-1",
    period: [new Date()],
    deskData: [
      {
        name: "",
        color: "#4000c0",
        visible: true,
        info: {}
      }
    ]
  }])

  return (
    <>
    <div className="flex md:h-screen w-full text-secondary">
      <userContext.Provider value={
        {
          activeDesk: activeDesk,
          setActiveDesk: setActiveDesk,
          desks: desks,
          setDesks: setDesks
        }
      }>
        <SideBar activeDesk={activeDesk} setActiveDesk={setActiveDesk} desks={desks} setDesks={setDesks} ftCheck={ftCheck} setFtCheck={setFtCheck}/>
        <Main />
      </userContext.Provider>
    </div>
    <Footer ftCheck={ftCheck}/>
    </>
  )
}