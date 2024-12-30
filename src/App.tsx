import Fetchdata from "./fetch/fetch.tsx"
import Layout from "./layout/layout.tsx"

function App() {
  return(
    <>
    <Layout>
      <div className=" flex justify-center">
        <div className="h-[650px] bg-gray-900 p-10 rounded-lg my-10 w-80 md:w-[600px] md:h-96">
          <Fetchdata/>  
        </div>
      </div>  
    </Layout>
    </>
  )
}

export default App
