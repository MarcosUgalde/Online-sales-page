import { useProducts } from "../../hooks"
function Landing() {
  
  const { data: response, isLoading } = useProducts()
  console.log('products: ', response)

  if(isLoading){
    return <p>Loading...</p>
  }
  
  return (
    <>
      <h1>Hello word</h1>
      <main>

      </main>
    </>
  )
}

export default Landing
