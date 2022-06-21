import React from 'react'
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import Yup from "yup"
import Field from "../components/Field"
import {SignUpData} from "../types"


const signup = () => {
    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email").required(),
        password: Yup.string().min(6, "Minimum length of 6").max(32, "Maximum length of 32").required(),
        fullName: Yup.string().required(),
        userType: Yup.string().required()
    })
    const {register, handleSubmit, formState:{errors}, reset} = useForm<SignUpData>({
        resolver: yupResolver(validationSchema)
    })
  return (
    <div>
        <form>

        </form>
    </div>
  )
}

export default signup