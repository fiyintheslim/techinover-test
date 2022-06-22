import axios, {AxiosError} from "axios"
import toast from "react-hot-toast"
import {useState} from "react"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as Yup from "yup"
import Field from "../components/Fields/input"
import {LoginData, ServerResponse, ServerError} from "../utils/types"
import {FormHeading, FormContainer, Form, Button} from "../utils/baseStyles"
import Spinner from "../components/Spinner"
import {postRequest} from "../utils/API"


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
        // try{
        //     // const response = await axios.post("https://auth-test-api-techinnover.herokuapp.com/api/v1/user/login", value)
        //     const 
        //     document.cookie = `userID=${response.data._id}`
        //     console.log("Response", response)
        //     toast.success("Login was successful")
        //     setLoading(false)
        // }catch(err: any){
            
        //         console.log(err.response, err.message)
        //         toast.error(err.data.message)
           
        //     setLoading(false)
        // }
        const res = postRequest<LoginData, ServerResponse>("login", value)
        .then(response=>{
            if(response.success && "_id" in response.data){
            
                toast.success("Login was successful")
                document.cookie = `userID=${response.data._id}`
                setLoading(false)
            }
        })
        .catch((err: AxiosError<ServerError>)=>{
            console.log("Error", err)
            
            if(err.response?.data){  
                toast.error(err.response.data.message)
            }else{
                toast.error(err.message)
            }
                
            setLoading(false)
        })
        
        
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