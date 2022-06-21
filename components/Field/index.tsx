import {Label, Input} from "./style"

interface Props {
    label:string,
    id:string,
    type: string,
    placeholder:string,
}

const index = ({label, id, type, placeholder}:Props) => {
  return (
    <div>
        <Label htmlFor={id}>{label}</Label>
        <Input id={id} type={type} placeholder={placeholder} />
    </div>
  )
}

export default index