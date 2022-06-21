import {Label, Input, FieldGroup} from "./style"
import {UseFormRegister} from "react-hook-form"
import Props from "./types"



const Index = ({label, type, id, placeholder, register}:Props) => {
  return (
    <FieldGroup>
        <Label htmlFor={id}>{label}</Label>
        <Input {...register} id={id} type={type} placeholder={placeholder} />
    </FieldGroup>
  )
}

export default Index