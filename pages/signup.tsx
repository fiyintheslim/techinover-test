
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as Yup from "yup"
import Field from "../components/Fields/input"
import Select from "../components/Fields/Select"
import {SignUpData} from "../utils/types"
import {FormHeading, FormContainer, Form, Button} from "../utils/baseStyles"


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

    const submitHandler = (value: SignUpData) => {

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
            <Select
                label="What is your role"
                id="userType"
                type="userType"
                options={["student", "teacher"]}
                register={register("userType")}
            />
            <Button type="submit">Signup</Button>
        </Form>
    </FormContainer>
  )
}

export default SignUp