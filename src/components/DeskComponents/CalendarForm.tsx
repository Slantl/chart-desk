import { FC, useEffect, useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { Desk } from "../../App";

interface Props {
    desks: Desk[],
    setDesks: React.Dispatch<React.SetStateAction<Desk[]>>,
    activeDesk: number
}

export const CalendarForm: FC<Props> = ({ desks, setDesks, activeDesk }) => {
    const [startDate, setStartDate] = useState(desks[activeDesk].period[0])
    const [endDate, setEndDate] = useState(desks[activeDesk].period[desks[activeDesk].period.length - 1])

    useEffect(() => {
        setStartDate(desks[activeDesk].period[0])
        setEndDate(desks[activeDesk].period[desks[activeDesk].period.length - 1])
    }, [activeDesk])

    const onChange = (dates: any) => {
        const [s, e] = dates
        setStartDate(s)
        setEndDate(e)
        let d = desks.map(x => x)
        let arr = []
        if (s != null && e != null)
        for (let i = s.getDate(); i <= e.getDate(); i++) {
            arr.push(new Date(s.getFullYear(), s.getMonth(), i))
        }
        d[activeDesk].period = arr
        setDesks(d)        
    }

    return (
        <div className="flex justify-center items-center bg-primary2 w-full">
            <DatePicker
                selected={startDate}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                inline
            />
        </div>
    )
}