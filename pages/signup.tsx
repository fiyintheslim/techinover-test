import {useState} from "react"
import axios from "axios"
import toast from "react-hot-toast"
import {useRouter} from "next/router"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as Yup from "yup"
import Field from "../components/Fields/input"
import Select from "../components/Fields/Select"
import {SignUpData} from "../utils/types"
import {FormHeading, FormContainer, Form, Button} from "../utils/baseStyles"
import Spinner from "../components/Spinner"

const SignUp = () => {
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email").required(),
        password: Yup.string().min(6, "Minimum length of 6 characters.").max(32, "Maximum length of 32 characters.").required(),
        fullName: Yup.string().required().matches(/([a-z]+ [a-z]+ [a-z]+)/ig, "Please enter firstname middlename and lastname"),
        userType: Yup.string().required()
    })

    const {register, handleSubmit, formState:{errors}, reset} = useForm<SignUpData>({
        resolver: yupResolver(validationSchema)
    })

    const submitHandler = async (value: SignUpData) => {
        setLoading(true)
        try{
            const response = await axios.post("https://auth-test-api-techinnover.herokuapp.com/api/v1/user/create", value)
            toast.success("Sign up was successful")
            router.push("/login")
            setLoading(false)
        }catch(err: any){
            toast.error(err.message)
            setLoading(false)
        }
        

    }
  return (
    <FormContainer>
        <FormHeading>Signup</FormHeading>
        <Form onSubmit={handleSubmit(submitHandler)}>
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
            <Field 
                label="Full name"
                id="fullName"
                type="fullName"
                placeholder="Enter your Full name"
                register={register("fullName")}
                error={errors.fullName}
            />
            <Select
                label="What is your role"
                id="userType"
                type="userType"
                options={["student", "teacher"]}
                register={register("userType")}
                error={errors.userType}
            />
            <Button disabled={loading} type="submit">
                {loading ? 
                    <span>Signup</span>
                :
                <Spinner />
                }
            </Button>
        </Form>
    </FormContainer>
  )
}

export default SignUp