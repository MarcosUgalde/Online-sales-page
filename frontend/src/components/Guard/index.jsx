import { useUser } from "../../hooks"
import { Redirect } from "wouter"

const Guard = ({ component: Component }) => {
    const { data, isLoading } = useUser()
    console.log('Data en guard component: ', data)
    if(isLoading) return <p>Loading...</p>
    // return data ? <Component /> : <Redirect to="/login" />
    return <Component />
}

export default Guard