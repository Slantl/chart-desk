import { FC } from "react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Entity } from "../App";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
    data: Entity[],
    period: Date[]
}

export const PieChart: FC<Props> = ({ data, period }) => {
    const pieData = {
        labels: data.map(x => x.name),
        datasets: [
            {
                label: "T",
                data: data.map(x => period.reduce((sum: number, y) => sum + x.info[y.getTime().toString()], 0)),
                backgroundColor: data.map(x => x.color)
            }
        ]
    }
    return (
        <>
            <Pie data={pieData}/>
        </>
    )
}