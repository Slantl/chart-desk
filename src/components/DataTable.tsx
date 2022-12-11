import { FC } from "react"

interface Props {
    period: any[]
    data: any[]
}

export const DataTable: FC<Props> = ({ period, data }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>N</th>
                        <th>Name</th>
                        {period.map(x => <th key={"headDate-" + x}>{x.getDate()}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {data.map((x, i) => {
                        return (
                            <tr key={"entity-" + i}>
                                <th>{i}</th>
                                <th>{x.name}</th>
                                {x.info.filter(y => period.map(y => y.getTime()).includes(y.date.getTime())).map((y, j) => <th key={j}>{y.value}</th>)}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}