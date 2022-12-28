import { createContext, FC, useEffect, useState } from "react"
import { Footer } from "./components/DeskComponents/Footer"
import { Main } from "./components/Main"
import { SideBar } from "./components/SideBar"
import { LogInForm } from "./LogInForm"

import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { addDoc, collection, doc, Firestore, getDoc, getFirestore, setDoc } from "firebase/firestore";

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
  auth: any,
  currentUser: null | User
}

export const userContext = createContext<UserContext>({
  activeDesk: 0,
  setActiveDesk: () => {},
  desks: [],
  setDesks: () => {},
  ftCheck: false,
  setFtCheck: () => {},
  setLoging: () => {},
  auth: null,
  currentUser: null
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
  const [currentUser, setCurrentUser] = useState<null | User>(null)
  const [loging, setLoging] = useState<string>("hidden")
  const [ftCheck, setFtCheck] = useState(false)
  const [activeDesk, setActiveDesk] = useState(0)
  let user: any = null
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

  onAuthStateChanged(auth, async u => {
    if (u == null && currentUser != null) {
      setCurrentUser(null)
      return
    }
    if (u == null) return
    if (currentUser == null || u.email != currentUser.email) {
      setCurrentUser(u)
      
    }
  })

  useEffect(() => {
    if (currentUser == null) {
      setDesks([{
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
      return
    }
    let f = async () => {
      let p: any = doc(db, `${currentUser.email}/desks`)
      p = await getDoc(p)
      let temp = p.data().desks
      temp.forEach((x: any, i: number) => {
        temp[i].period = x.period.map((y: any) => new Date(y.seconds * 1000))
      })
      setDesks(temp)
    }
    f()
  }, [currentUser])

  useEffect(() => {
    if (currentUser == null) return
    const p = doc(db, `${currentUser.email}/desks`)
    setDoc(p, {desks: desks})
    console.log("setDoc")
  }, [desks])

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
          auth: auth,
          currentUser: currentUser
        }
      }>
        <LogInForm loging={loging} setLoging={setLoging}/>
        <SideBar />
        <Main />
      </userContext.Provider>
    </div>
    <Footer ftCheck={ftCheck} />
    </>
  )
}