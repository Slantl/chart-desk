import { FC } from "react"
import { Entity } from "../App"

interface Props {
    period: any[]
    data: any[]
    setData: React.Dispatch<React.SetStateAction<Entity[]>>
}

export const DataTable: FC<Props> = ({ period, data, setData }) => {
    const set = (event: React.ChangeEvent<HTMLInputElement>) => {
        let temp = data.map(x => x)
        console.log(event.currentTarget.parentElement)
        //setData()
    }
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
                                <th><input type="text" value={x.name} onChange={set}/></th>
                                {
                                    period.map(y => {
                                        if (y.getTime().toString() in x.info)
                                        return (
                                        <th key={x.name + y.getTime().toString()}>
                                            <input type="number" value={x.info[y.getTime().toString()]} onChange={set}/>
                                        </th>)})
                                }
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}