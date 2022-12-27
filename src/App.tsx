import { createContext, FC, useState } from "react"
import { Footer } from "./components/DeskComponents/Footer"
import { Main } from "./components/Main"
import { SideBar } from "./components/SideBar"
import { LogInForm } from "./LogInForm"

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBoRnQjaXEtUlBy_fAuRiaapX4I3wVJk54",
  authDomain: "chaar-20baf.firebaseapp.com",
  projectId: "chaar-20baf",
  storageBucket: "chaar-20baf.appspot.com",
  messagingSenderId: "72547749941",
  appId: "1:72547749941:web:1a1ea1caef4a1c7c71e17c",
  measurementId: "G-D43B2X05MQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);

interface UserContext {
  activeDesk: number,
  setActiveDesk: React.Dispatch<React.SetStateAction<number>>,
  desks: Desk[],
  setDesks: React.Dispatch<React.SetStateAction<Desk[]>>,
  ftCheck: boolean,
  setFtCheck: React.Dispatch<React.SetStateAction<boolean>>,
  setLoging: React.Dispatch<React.SetStateAction<string>>,
  auth: any
}

export const userContext = createContext<UserContext>({
  activeDesk: 0,
  setActiveDesk: () => {},
  desks: [],
  setDesks: () => {},
  ftCheck: false,
  setFtCheck: () => {},
  setLoging: () => {},
  auth: null
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
  const [loging, setLoging] = useState<string>("hidden")
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
          setDesks: setDesks,
          ftCheck: ftCheck,
          setFtCheck: setFtCheck,
          setLoging: setLoging,
          auth: auth
        }
      }>
        <LogInForm loging={loging} setLoging={setLoging}/>
        <SideBar />
        <Main />
      </userContext.Provider>
    </div>
    <Footer ftCheck={ftCheck}/>
    </>
  )
}