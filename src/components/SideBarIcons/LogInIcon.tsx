import { onAuthStateChanged, signOut, User } from "firebase/auth"
import { FC, useContext, useState } from "react"
import { AiOutlineLogin, AiOutlineLogout, AiOutlineUser } from "react-icons/ai"
import { auth, userContext } from "../../App"

export const LogInIcon: FC = () => {
    const [email, setEmail] = useState<string | null>(null)
    const { setLoging, setDesks } = useContext(userContext)
    let check = true
    const change = () => {
        if (!check) {
            check = true
            return
        }
        setLoging("absolute")
    }
    const logout = () => {
        check = false
        signOut(auth)
        // ASDQWE
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
    }
    onAuthStateChanged(auth, u => {
        if (email != u?.email) {
            setEmail(u?.email || null)
        }
    })
    return (
        <div className="mt-auto sideIcon md:flex group" onClick={change} >
            { email ? <AiOutlineUser /> : <AiOutlineLogin /> }
            <span className="sidebar-tooltip group-hover:scale-100">
                {
                    email ? email : "Log in"
                }
            </span>
            {
                email ?
                <span className="del-tooltip text-lg p-1 rounded-3xl group-hover:scale-100" onClick={logout}><AiOutlineLogout /></span>
                : <span></span>
            }
        </div>
    )
}