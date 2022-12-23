import { FC, useContext, useEffect } from "react"
import { BarChart } from "./DeskComponents/BarChart"
import { DataTable } from "./DeskComponents/DataTable"
import { PieChart } from "./DeskComponents/PieChart"
import { CalendarForm } from "./DeskComponents/CalendarForm"
import { userContext } from "../App"

export const Desk: FC = () => {
  const {activeDesk, desks, setDesks} = useContext(userContext)

  useEffect(() => {
    let d = desks.map(x => x)
    let temp = d[activeDesk].deskData.map(x => x)
    temp.forEach((x, i) => {
      desks[activeDesk].period.forEach((y) => {
        if (!(y.getTime().toString() in x.info))
        temp[i].info[y.getTime().toString()] = 0
      })
    })
    d[activeDesk].deskData = temp
    setDesks(d)
}, [desks[activeDesk].period])
    return (
        <div className="[&>div]:bg-primary grid grid-cols-1 grid-rows-deskR1 md:grid-cols-deskC md:grid-rows-deskR md:h-full animate-fadeIn gap-2 p-2 h-full w-full md:overflow-hidden">
            <DataTable period={desks[activeDesk].period} desks={desks} setDesks={setDesks} activeDesk={activeDesk}/>
            <CalendarForm desks={desks} setDesks={setDesks} activeDesk={activeDesk}/>
            <BarChart entities={desks[activeDesk].deskData} period={desks[activeDesk].period}/>
            <PieChart entities={desks[activeDesk].deskData} period={desks[activeDesk].period}/>
        </div>
    )
}