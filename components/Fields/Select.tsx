import {Label, Input, FieldGroup, SelectInput} from "./style"
import Props from "./types"

interface SelectProps extends Props {
    options: string[]
}

const Select = ({label, type, id, placeholder, register, options}: SelectProps) => {
  return (
    <FieldGroup>
        <Label htmlFor={id}>{label}</Label>
        <SelectInput {...register} id={id} type={type} placeholder={placeholder} >
            <option value="">Choose</option>
            {options.map((option)=>(
                <option value={option}>{option}</option>
            ))}
        </SelectInput>
    </FieldGroup>
  )
}

export default Select