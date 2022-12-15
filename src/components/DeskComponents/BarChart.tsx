import { Bar } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { FC } from "react";
import { Entity } from "../Desk";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

interface Props {
    data: Entity[],
    period: Date[]
}

export const BarChart: FC<Props> = ({ data, period }) => {
    const labels = period.map(x => x.getDate())
    const barData = {
        labels,
        datasets: data.filter(x => x.visible).map(x => {
            return ({
                label: x.name,
                data: period.map(y => {
                    if (y.getTime().toString() in x.info)
                    return x.info[y.getTime().toString()]
                }),
                backgroundColor: x.color
            })
        })
    }
    return (
        <>
            <Bar data={barData}/>
        </>
    )
}