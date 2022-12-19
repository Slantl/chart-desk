import { useEffect, useRef, useState } from "react"
import { AiOutlineEdit } from "react-icons/ai"

export const Header = () => {
    const [deskName, setDeskName] = useState("Desk name")
    const set = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.currentTarget.style.width = e.currentTarget.value.length + 1 + "ch"
        setDeskName(e.currentTarget.value)
    }

    const dnRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (dnRef.current != null)
    dnRef.current.style.width = dnRef.current?.value.length + 1 + "ch"
    }, [])

    return (
        <header className="flex bg-black bg-opacity-20 h-16 items-center justify-center">
            <form className="flex w-fit">
                <input ref={dnRef} id="dn" className="w-min bg-transparent text-center text-4xl" type="text" autoComplete="off" value={deskName} onChange={set} />
                <label htmlFor="dn"><AiOutlineEdit className="text-4xl end"/></label>
            </form>
        </header>
    )
}