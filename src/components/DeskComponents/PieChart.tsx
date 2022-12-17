import { FC } from "react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Entity } from "../Desk";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
    data: Entity[],
    period: Date[]
}

export const PieChart: FC<Props> = ({ data, period }) => {
    const pieData = {
        labels: data.filter(x => x.visible).map(x => x.name),
        datasets: [
            {
                label: "T",
                data: data.filter(x => x.visible).map(x => period.reduce((sum: number, y) => sum + x.info[y.getTime().toString()], 0)),
                backgroundColor: data.filter(x => x.visible).map(x => x.color)
            }
        ]
    }
    return (
        <div className="relative w-full h-full">
            <Pie data={pieData}/>
        </div>
    )
}