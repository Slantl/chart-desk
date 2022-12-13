import { FC } from "react"
import { useForm, SubmitHandler } from "react-hook-form"


interface Props {
    period: Date[],
    setPeriod: React.Dispatch<React.SetStateAction<Date[]>>
}

interface FormInput {
    startDate: string,
    endDate: string
}

export const PeriodForm: FC<Props> = ({ period, setPeriod}) => {
    const { register, handleSubmit } = useForm<FormInput>()
    const setp: SubmitHandler<FormInput> = fdata => {
        let s = new Date(fdata.startDate)
        let e = new Date(fdata.endDate)

        let arr = []
        for (let i = s.getDate(); i <= e.getDate(); i++) {
            arr.push(new Date(s.getFullYear(), s.getMonth(), i))
        }

        setPeriod(arr)
    }
    return (
        <form onSubmit={handleSubmit(setp)}>
            <input {...register("startDate")} type="date" />
            <input {...register("endDate")} type="date" />
            <button type="submit">apply</button>
        </form>
    )
}