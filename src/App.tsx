import { FC, useEffect, useState } from "react"
import "./App.css"
import { BarChart } from "./components/BarChart"
import { DataTable } from "./components/DataTable"
import { PeriodForm } from "./components/PeriodForm"
import { PieChart } from "./components/PieChart"

export interface Entity {
  name: string,
  color: string,  
  visible: boolean,
  info: {[key: string]: number}
}

export const App: FC = () => {
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
    <section>
      <h1>Accounting app</h1>
      <PeriodForm period={period} setPeriod={setPeriod}/>
      <DataTable period={period} data={data} setData={setData}/>
      <BarChart data={data} period={period}/>
      <PieChart data={data} period={period}/>
    </section>
  )
}