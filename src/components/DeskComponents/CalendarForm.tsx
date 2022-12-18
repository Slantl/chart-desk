import { FC, useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

interface Props {
    period: Date[],
    setPeriod: React.Dispatch<React.SetStateAction<Date[]>>
}

export const CalendarForm: FC<Props> = ({ period, setPeriod}) => {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const onChange = (dates: any) => {
        const [s, e] = dates
        setStartDate(s)
        setEndDate(e)
        let arr = []
        if (s != null && e != null)
        for (let i = s.getDate(); i <= e.getDate(); i++) {
            arr.push(new Date(s.getFullYear(), s.getMonth(), i))
        }

        setPeriod(arr)        
    }
    return (
        <div>
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