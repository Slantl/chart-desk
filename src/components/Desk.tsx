import { FC, useEffect, useState } from "react"
import { BarChart } from "./DeskComponents/BarChart"
import { DataTable } from "./DeskComponents/DataTable"
import { PeriodForm } from "./DeskComponents/PeriodForm"
import { PieChart } from "./DeskComponents/PieChart"


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
        color: "#ffffff",
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
        <div className="grid grid-cols-2 grid-rows-2 overflow-hidden w-full p-3">
            <PeriodForm period={period} setPeriod={setPeriod}/>
            <DataTable data={data} setData={setData} period={period}/>
            <BarChart data={data} period={period}/>
            <PieChart data={data} period={period}/>
        </div>
    )
}