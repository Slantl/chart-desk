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
                                {
                                period.map(y => {
                                    for (let i of x.info) {
                                        if (i.date.getTime() == y.getTime())
                                        return <th key={y.name + i.date}>{i.value}</th>
                                    }
                                    
                                })
                                }
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}