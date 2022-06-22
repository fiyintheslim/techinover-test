import {FieldError} from "react-hook-form"

export default interface Props {
    label:string,
    id:string,
    type: string,
    placeholder?:string,
    error?:FieldError,
    register: any
}