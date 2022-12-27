import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { FC, useContext, useRef, useState } from "react";
import { userContext } from "./App";

interface Props {
    loging: string,
    setLoging: React.Dispatch<React.SetStateAction<string>>
}

export const LogInForm: FC<Props> = ({ loging, setLoging }) => {
    const [err, setErr] = useState<null | string>(null)
    const { auth } = useContext(userContext)
    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
    const [active, setActive] = useState(true)
    const activateLog = () => {
        setActive(true)
    }
    const activateSign = () => {
        setActive(false)
    }
    
    const exit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setLoging("hidden")
    }

    const submit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (email.current?.value == undefined || password.current?.value == undefined)
        return
        if (active == true) {
                signInWithEmailAndPassword(auth, email.current?.value, password.current?.value)
                    .then((userCredential) => {
                        const user = userCredential.user
                        console.log(user)
                    })
                    .catch((error) => {
                        console.log(error.code)
                        if (error.code == "auth/invalid-email") {
                            setErr("Invalid email")
                        } else if (error.code == "auth/wrong-password") {
                            setErr("invalid password")
                        } else if (error.code == "auth/too-many-requests") {
                            setErr("Too many requests")
                        }
                    })
        } else {
            createUserWithEmailAndPassword(auth, email.current?.value, password.current?.value)
                .then((userCredential) => {
                    const user = userCredential.user
                    console.log(user)
                })
        }
    }

    

    return (
        <div className={"bg-back bg-opacity-50 w-screen z-50 flex justify-center items-center h-screen " + loging}>
            <form className="flex w-auto h-auto p-2 rounded-md flex-col bg-primary3 animate-scaleIn">
                <div className="flex justify-between text-2xl mb-2 h-10">
                    <div className={"cursor-pointer h-fit " + (active ? "sign-log" : "")} onClick={activateLog}>
                        <p className="text-center">Log in</p>
                    </div>
                    <div className={"cursor-pointer h-fit " + (active ? "" : "sign-log")} onClick={activateSign}>
                        <p className="text-center">Sign up</p>
                    </div>
                </div>
                <div className="flex flex-col w-48 mx-4">
                    <label htmlFor="" className="pl-2">Mail</label>
                    <input ref={email} type="email" className="input rounded-md" />
                    <label htmlFor="" className="pl-2">Pass</label>
                    <input ref={password} type="password" className="input rounded-md" />
                </div>
                {
                    <div className="text-center text-red-500">{err}</div>
                }
                <div className="flex justify-between text-xl mt-2 mx-4">
                    <button className="bg-accent3 rounded-md px-1" type="submit" onClick={submit}>Submit</button>
                    <button className="bg-accent2 rounded-md px-1" onClick={exit}>Exit</button>
                </div>
            </form>
        </div>
    )
}