import { useForm } from "react-hook-form"
import { useMutation, useQueryClient } from "react-query"
import { useLocation } from "wouter"
import { useEffect } from "react"
import { useUser } from "../../hooks"
import { auth } from "../../services"
import { login } from "../../misc/templates"

const Login = () => {
    const { register, formState, handleSubmit } = useForm()
    const [, setLocation] = useLocation()
    const { data } = useUser()

    const queryClient = useQueryClient()

    const { mutate } = useMutation({
        mutationFn: auth.signin,
        onSuccess: (response) => {
            if(response.success) queryClient.invalidateQueries({ queryKey: ['user']}) && setLocation('/')
        }
    })

    const handleForm = (data) => {
        console.info('Form data: ', data)
        mutate(data)
    }

    useEffect(() => {
        data && setLocation('/')
    }, [data])

    const { errors } = login

    return (
        <>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit(handleForm)}>
                <label htmlFor="email">Insert a valid email</label>
                <input type="text" name="email" id="email" placeholder="" {...register('email', {required: true})} />
                <p>{formState.errors && errors[formState.errors?.email?.type]}</p>
                <label htmlFor="password">Insert password</label>
                <input type="password" name="password" id="password" {...register('password', {required: true, minLength: 4})} />
                <p>{formState.errors && errors[formState.errors?.password?.type]}</p>
                <input type="submit" />
            </form>
            <footer>
                Register
            </footer>
        </>
    )
}

export default Login