import {Label, Input, FieldGroup, SelectInput, Error} from "./style"
import Props from "./types"

interface SelectProps extends Props {
    options: string[]
}

const Select = ({label, type, id, placeholder, register, options, error}: SelectProps) => {
  return (
    <FieldGroup>
        <Label htmlFor={id}>{label}</Label>
        <SelectInput {...register} id={id} type={type} placeholder={placeholder} >
            <option value="">Choose</option>
            {options.map((option, i)=>(
                <option key={i} value={option}>{option}</option>
            ))}
        </SelectInput>
        {error && <Error>{error.message}</Error>}
    </FieldGroup>
  )
}

export default Select