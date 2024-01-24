import { useProducts } from "../../hooks"
import Item from "../../components/Item"
import Styled from './styles'

function Landing() {
  
  const { data: response, isLoading } = useProducts()
  console.log('response: ', response)

  if(isLoading){
    return <p>Loading...</p>
  }
  
  return (
    <>
      <h1>Hello word</h1>
      <main>
        {response?.data?.map((product) => {
          return (
            <>
              <Styled.List>
                <li>
                  <Item product={product} />
                </li>
              </Styled.List>
            </>
          )
        })}
      </main>
    </>
  )
}

export default Landing
