import axios from "axios"
import toast from "react-hot-toast"
import {useState} from "react"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as Yup from "yup"
import Field from "../components/Fields/input"
import {LoginData} from "../utils/types"
import {FormHeading, FormContainer, Form, Button} from "../utils/baseStyles"
import Spinner from "../components/Spinner"

const Login = () => {
    const [loading, setLoading] = useState(false)
    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email").required(),
        password: Yup.string().min(6, "Minimum length of 6 characters.").max(32, "Maximum length of 32 characters.").required(),
        
    })

    const {register, handleSubmit, formState:{errors}, reset} = useForm<LoginData>({
        resolver: yupResolver(validationSchema)
    })

    const submitHandler = async (value: LoginData) => {
        setLoading(true)
        try{
            const response = await axios.post("https://auth-test-api-techinnover.herokuapp.com/api/v1/user/login", value)
            
            document.cookie = `userID=${response.data._id}`
            toast.success("Login was successful")
            setLoading(false)
        }catch(err:any){
            
            toast.error(err.message)
            setLoading(false)
        }
    }
  return (
    <FormContainer onSubmit={handleSubmit(submitHandler)}>
        <FormHeading>Login</FormHeading>
        <Form>
            <Field 
                label="Email address"
                id="email"
                type="email"
                placeholder="Enter your email address"
                register={register("email")}
                error={errors.email}
            />
            <Field 
                label="Password"
                id="password"
                type="password"
                placeholder="Enter your password"
                register={register("password")}
                error={errors.password}
            />
            <Button disabled={loading} type="submit">
                {!loading?
                <span>Login</span>
                :
                <Spinner />
                }</Button>
        </Form>
    </FormContainer>
  )
}

export default Login