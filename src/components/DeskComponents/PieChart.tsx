import { FC } from "react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Entity } from "../Desk";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
    entities: Entity[],
    period: Date[]
}

export const PieChart: FC<Props> = ({ entities, period }) => {
    const pieData = {
        labels: entities.filter(x => x.visible).map(x => x.name),
        datasets: [
            {
                label: "T",
                data: entities.filter(x => x.visible).map(x => period.reduce((sum: number, y) => sum + x.info[y.getTime().toString()], 0)),
                backgroundColor: entities.filter(x => x.visible).map(x => x.color)
            }
        ]
    }
    return (
        <div className="flex items-center justify-center relative w-full h-full overflow-hidden">
            <Pie data={pieData}/>
        </div>
    )
}