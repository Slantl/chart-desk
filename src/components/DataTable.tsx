import { FC, Dispatch, SetStateAction } from "react"
import { Entity } from "../App"

interface Props {
    data: Entity[],
    setData: Dispatch<SetStateAction<Entity[]>>
}

export const DataTable: FC<Props> = ({ data, setData }) => {

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>N</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    )
}