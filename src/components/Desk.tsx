import { FC, useEffect, useState } from "react"
import { BarChart } from "./DeskComponents/BarChart"
import { DataTable } from "./DeskComponents/DataTable"
import { PeriodForm } from "./DeskComponents/PeriodForm"
import { PieChart } from "./DeskComponents/PieChart"
import { CalendarForm } from "./DeskComponents/CalendarForm"

export interface Entity {
    name: string,
    color: string,  
    visible: boolean,
    info: {[key: string]: number}
  }

export const Desk: FC = () => {
    const [period, setPeriod] = useState<Date[]>([])
    const [data, setData] = useState<Entity[]>([
      {
        name: "",
        color: "#4000c0",
        visible: true,
        info: {}
      }
    ])

    useEffect(() => {
        let temp = data.map(x => x)
        temp.forEach((x, i) => {
          period.forEach((y) => {
            if (!(y.getTime().toString() in x.info))
            temp[i].info[y.getTime().toString()] = 0
          })
        })
        setData(temp)
    }, [period])


    return (
        <div className="[&>div]:bg-primary grid grid-cols-1 grid-rows-deskR1 md:grid-cols-deskC md:grid-rows-deskR gap-2 p-2 h-full w-full md:overflow-hidden">
            <DataTable data={data} setData={setData} period={period}/>
            <CalendarForm period={period} setPeriod={setPeriod}/>
            <BarChart data={data} period={period}/>
            <PieChart data={data} period={period}/>
        </div>
    )
}