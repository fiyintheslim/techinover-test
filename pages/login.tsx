import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as Yup from "yup"
import Field from "../components/Fields/input"
import {LoginData} from "../utils/types"
import {FormHeading, FormContainer, Form, Button} from "../utils/baseStyles"

const Login = () => {

    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email").required(),
        password: Yup.string().min(6, "Minimum length of 6").max(32, "Maximum length of 32").required(),
        
    })

    const {register, handleSubmit, formState:{errors}, reset} = useForm<LoginData>({
        resolver: yupResolver(validationSchema)
    })

    const submitHandler = (value: LoginData) => {

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
            />
            <Field 
                label="Password"
                id="password"
                type="password"
                placeholder="Enter your password"
                register={register("password")}
            />
            <Button type="submit">Login</Button>
        </Form>
    </FormContainer>
  )
}

export default Login