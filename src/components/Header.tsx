import { useContext, useEffect, useRef, useState } from "react"
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai"
import { userContext } from "../App"

export const Header = () => {
    const {activeDesk, desks, setDesks, setActiveDesk} = useContext(userContext)

    const set = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.currentTarget.style.width = e.currentTarget.value.length + 1 + "ch"
        let temp = desks.map(x => x)
        temp[activeDesk].name = e.currentTarget.value
        setDesks(temp)
    }

    // const del = () => {
    //     if (desks.length == 1) return
    //     let d = desks.map(x => x)
    //     if ((d.length - 1) == activeDesk) {
    //         setActiveDesk(activeDesk - 1)
    //     }
    //     d.splice(activeDesk, 1)
    //     setDesks(d)
    // }

    const dnRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (dnRef.current != null)
    dnRef.current.style.width = dnRef.current?.value.length + 1 + "ch"
    }, [])

    return (
        <header className="flex bg-black bg-opacity-20 h-16 animate-slideDown items-center justify-center px-4">
            {/* <div></div> */}

            <form className="flex w-fit">
                <input ref={dnRef} id="dn" className="w-min bg-transparent text-center text-4xl" type="text" autoComplete="off" maxLength={20} value={desks[activeDesk].name} onChange={set} />
                <label htmlFor="dn"><AiOutlineEdit className="text-4xl end cursor-pointer"/></label>
            </form>

            {/* <div className="group items-center flex">
                <span className="right-tooltip group-hover:scale-100">Delete {desks[activeDesk].name}</span>
                <AiOutlineDelete className="text-4xl cursor-pointer" onClick={del} />
            </div> */}
        </header>
    )
}