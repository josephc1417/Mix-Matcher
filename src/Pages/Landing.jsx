import { useLoaderData } from "react-router-dom"
import axios from "axios"
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="



export const loader = async () => {
const searchTerm = "margarita"
const response = await axios .get(`${cocktailSearchURL}${searchTerm}`)
console.log(response.data)
  return "something "
}

const Landing = () => {
  const data = useLoaderData()
  console.log(data)
  return (
    <div>
      <h1>I'm the first page that will show because I'm the index. I will also inherit from HomeLayout</h1>
    </div>
  )
}

export default Landing
