import { FC, useEffect, useState } from "react"
import "./App.css"
import { DataTable } from "./components/DataTable"
import { PeriodForm } from "./components/PeriodForm"

export interface Entity {
    name: string,
    info: {date: Date, value: number}[]
}

export const App: FC = () => {
  const [period, setPeriod] = useState<Date[]>([])
  const [data, setData] = useState<Entity[]>([
    {
      name: "qwe",
      info: [
        {date: new Date(2022, 11, 5), value: 111},
        {date: new Date(2022, 11, 6), value: 222}
      ]
    },
    {
      name: "asd",
      info: [
        {date: new Date(2022, 11, 6), value: 333},
        {date: new Date(2022, 11, 7), value: 444}
      ]
    }
  ])

  useEffect(() => {
    let temp = data.map(x => x)
    for (let i in temp) {
      period.forEach(x => {
        if (!temp[i].info.some(y => y.date.getTime() == x.getTime()))
        temp[i].info.push({date: x, value: 0})
      })
    }
    setData(temp)
    console.log(data)
  }, [period])

  return (
    <section>
      <h1>Accounting app</h1>
      <PeriodForm period={period} setPeriod={setPeriod}/>
      <DataTable period={period} data={data}/>
    </section>
  )
}