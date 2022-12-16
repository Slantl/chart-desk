import { FC } from "react"
import { Entity } from "../Desk"

interface Props {
    period: Date[]
    data: Entity[]
    setData: React.Dispatch<React.SetStateAction<Entity[]>>
}

export const DataTable: FC<Props> = ({ period, data, setData }) => {
    const set = (event: React.ChangeEvent<HTMLInputElement>) => {
        let temp: Entity[] = data.map(x => x)
        let i = parseInt(event.currentTarget.getAttribute("data-i") || "")
        let t = event.currentTarget.getAttribute("data-t") || 1
        switch(event.currentTarget.type) {
            case "checkbox":
                temp[i].visible = event.currentTarget.checked
                break
            case "color":
                temp[i].color = event.currentTarget.value
                break
            case "text":
                temp[i].name = event.currentTarget.value
                break
            case "number":
                temp[i].info[t] = parseInt(event.currentTarget.value)
                break
        }
        setData(temp)
    }

    const add = () => {
        let temp: {[key: string]: number} = {}
        period.forEach(x => {
            temp[x.getTime().toString()] = 0
        })
        setData([...data, {name: "", color: "#ffffff", visible: true, info: temp}])
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>V</th>
                        <th>C</th>
                        <th>Name</th>
                        {period.map(x => <th key={"headDate-" + x}>{x.getDate()}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {data.map((x, i) => {
                        return (
                            <tr key={"entity-" + i}>
                                <th>{i + 1}</th>
                                <th><input className="input" type="checkbox" data-i={i.toString()} checked={x.visible} onChange={set}/></th>
                                <th><input className="input" type="color" data-i={i.toString()} value={x.color} onChange={set}/></th>
                                <th><input className="input w-36" type="text" data-i={i.toString()} value={x.name} onChange={set}/></th>
                                {
                                    period.map(y => {
                                        if (y.getTime().toString() in x.info)
                                        return (
                                        <th key={x.name + y.getTime().toString()}>
                                            <input  className="input w-16" type="number" data-i={i.toString()} data-t={y.getTime().toString()} value={x.info[y.getTime().toString()]} onChange={set}/>
                                        </th>)})
                                }
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <button onClick={add}>add new</button>
        </div>
    )
}