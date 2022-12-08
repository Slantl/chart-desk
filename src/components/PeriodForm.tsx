import { FC, useRef } from "react";
import { Period } from "../App";

interface Props {
    period: Period | undefined,
    setPeriod: React.Dispatch<React.SetStateAction<Period | undefined>>
}

// interface ChangePeriod {
//     (s:Date, e:Date): React.FormEventHandler<HTMLFormElement>
// }

export const PeriodForm: FC<Props> = ({ period, setPeriod}) => {
    const startRef = useRef<HTMLInputElement>(null)
    const endRef = useRef<HTMLInputElement>(null)

    const changePeriod = (s: Date, e: Date) => {

        let arr = []
        for (let i = s; i <= e; i.setDate(i.getDate() + 1)) {
            arr.push(new Date(i))
        }

        setPeriod({
            start: s,
            end: e,
            interval: arr
        })
    }

    return (
        <form onSubmit={changePeriod(new Date(startRef.current?.value), new Date(endRef.current?.value))}>
            <h3>Period</h3>
            <input ref={startRef} type={"date"}/>
            <input ref={endRef} type={"date"}/>
            <button type="submit">Apply</button>
        </form>
    )
}