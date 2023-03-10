import { Bar } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Chart,
} from 'chart.js';
import { FC } from "react";
import { Entity } from "../../App";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

interface Props {
    entities: Entity[],
    period: Date[]
}

Chart.defaults.color = "#ffffff"
Chart.defaults.borderColor = "#888888"

export const BarChart: FC<Props> = ({ entities, period }) => {
    const options = {maintainAspectRatio: false}
    const labels = period.map(x => x.getDate() + "." + x.getMonth())
    const barData = {
        labels,
        datasets: entities.filter(x => x.visible).map(x => {
            return ({
                label: x.name,
                data: period.map(y => {
                    if (y.getTime().toString() in x.info)
                    return x.info[y.getTime().toString()]
                }),
                backgroundColor: x.color,
            })
        })
    }
    return (
        <div className="relative w-full h-full overflow-hidden">
            <Bar data={barData} options={options}/>
        </div>
    )
}