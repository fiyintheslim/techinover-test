import {Label, Input, FieldGroup, Error} from "./style"
import {UseFormRegister} from "react-hook-form"
import Props from "./types"



const Index = ({label, type, id, placeholder, register, error}:Props) => {
  return (
    <FieldGroup>
        <Label htmlFor={id}>{label}</Label>
        <Input {...register} id={id} type={type} placeholder={placeholder} />
        {error && <Error>{error.message}</Error>}
    </FieldGroup>
  )
}

export default Index