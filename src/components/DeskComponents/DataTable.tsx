import { FC } from "react"
import { Desk } from "../../App"

interface Props {
    period: Date[]
    desks: Desk[]
    setDesks: React.Dispatch<React.SetStateAction<Desk[]>>
    activeDesk: number
}

export const DataTable: FC<Props> = ({ period, desks, setDesks, activeDesk }) => {
    const set = (event: React.ChangeEvent<HTMLInputElement>) => {
        let d = desks.map(x => x)
        let temp = d[activeDesk].deskData.map(x => x)
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
        d[activeDesk].deskData = temp
        setDesks(d)
    }

    const add = () => {
        let r = Math.floor(Math.random() * 255).toString(16)
        let g = Math.floor(Math.random() * 160).toString(16)
        let b = Math.floor(Math.random() * 255).toString(16)

        r = r.length == 1 ? "0" + r : r
        g = g.length == 1 ? "0" + g : g
        b = b.length == 1 ? "0" + b : b
        let color = "#" + r + g + b

        let d = desks.map(x => x)
        let temp: {[key: string]: number} = {}
        period.forEach(x => {
            temp[x.getTime().toString()] = 0
        })
        d[activeDesk].deskData[d[activeDesk].deskData.length] = {name: "", color: color, visible: true, info: temp}
        setDesks(d)
    }
    return (
        <div className="overflow-auto">
            <table>
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
                    {desks[activeDesk].deskData.map((x, i) => {
                        return (
                            <tr key={"entity-" + i}>
                                <th><input className="input w-4 h-4" type="checkbox" data-i={i.toString()} checked={x.visible} onChange={set}/></th>
                                <th><input className="input w-6" value={i + 1} readOnly/></th>
                                <th><input className="input w-6" type="color" data-i={i.toString()} value={x.color} onChange={set}/></th>
                                <th><input className="input w-32" type="text" data-i={i.toString()} value={x.name} onChange={set}/></th>
                                <th>
                                    <input readOnly className="input w-8" value=
                                    {
                                        Math.round
                                        (period.reduce((sum, y) => sum + x.info[y.getTime().toString()], 0) /
                                        desks[activeDesk].deskData.reduce((sum, y) => sum + period.reduce((summ, z) => summ + y.info[z.getTime().toString()], 0), 0) *
                                        100) || "-"
                                    }
                                    />
                                </th>
                                <th><input className="input w-16" readOnly value={period.reduce((sum, y) => sum + x.info[y.getTime().toString()], 0)}/></th>
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
            <button onClick={add}>add</button>
        </div>
    )
}