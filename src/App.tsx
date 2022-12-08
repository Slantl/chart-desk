import { useState } from 'react'
import './App.css'
import { DataTable } from './components/DataTable'
import { PeriodForm } from './components/PeriodForm'

export interface Entity {
  name: string,
  info: {date: string, values: Number[]}[]
}

export interface Period {
  start: Date | null,
  end: Date | null,
  interval: Date[]
}

function App() {
  const [data, setData] = useState<Entity[]>([])
  const [period, setPeriod] = useState<Period>()

  return (
    <div className="App">
      <PeriodForm period={period} setPeriod={setPeriod}/>
      <DataTable data={data} setData={setData}/>
    </div>
  )
}

export default App
