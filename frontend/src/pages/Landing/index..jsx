import { useProducts } from "../../hooks"
import Item from "../../components/Item"

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
              <ul>
                <li>
                  <Item product={product} />
                </li>
              </ul>
            </>
          )
        })}
      </main>
    </>
  )
}

export default Landing
