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
            <table className="">
                <thead>
                    <tr>
                        <th></th>
                        <th><input className="input w-6" value="#" readOnly/></th>
                        <th><input className="input w-6" value="C" readOnly/></th>
                        <th><input className="input w-32" value="Name" readOnly/></th>
                        <th><input className="input w-8" value="%" readOnly/></th>
                        <th><input className="input w-16" value="sum" readOnly/></th>
                        {period.map(x => <th key={"headDate-" + x}>{<input className="input w-16" value={x.getDate()} readOnly/>}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {data.map((x, i) => {
                        return (
                            <tr key={"entity-" + i}>
                                <th><input className="input w-4 h-4" type="checkbox" data-i={i.toString()} checked={x.visible} onChange={set}/></th>
                                <th><input className="input w-6" value={i + 1} readOnly/></th>
                                <th><input className="input w-6" type="color" data-i={i.toString()} value={x.color} onChange={set}/></th>
                                <th><input className="input w-32" type="text" data-i={i.toString()} value={x.name} onChange={set}/></th>
                                <th>
                                    <input className="input w-8" value=
                                    {
                                        Math.round
                                        (period.reduce((sum, y) => sum + x.info[y.getTime().toString()], 0) /
                                        data.reduce((sum, y) => sum + period.reduce((summ, z) => summ + y.info[z.getTime().toString()], 0), 0) *
                                        100)
                                    }
                                    />
                                </th>
                                <th><input className="input w-16" value={period.reduce((sum, y) => sum + x.info[y.getTime().toString()], 0)}/></th>
                                {
                                    period.map(y => {
                                        if (y.getTime().toString() in x.info)
                                        return (
                                        <th key={x.name + y.getTime().toString()}>
                                            <input
                                                className="input w-16"
                                                type="number"
                                                data-i={i.toString()}
                                                data-t={y.getTime().toString()}
                                                value={x.info[y.getTime().toString()]}
                                                onChange={set}
                                            />
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