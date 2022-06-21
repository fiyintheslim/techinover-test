
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as Yup from "yup"
import Field from "../components/Field"
import {SignUpData} from "../utils/types"
import {FormHeading, FormContainer, Form} from "../utils/baseStyles"


const SignUp = () => {
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
    <FormContainer>
        <FormHeading>Signup</FormHeading>
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
            <Field 
                label="Full name"
                id="fullName"
                type="fullName"
                placeholder="Enter your Full name"
                register={register("fullName")}
            />
        </Form>
    </FormContainer>
  )
}

export default SignUp