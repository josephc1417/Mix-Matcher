import { useLoaderData } from "react-router-dom"
import axios from "axios"
import CocktailList from "../Components/CocktailList"
import SearchForm  from "../Components/SearchForm"

const cocktailSearchURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="




export const loader = async () => {
const searchTerm = ""
const response = await axios.get(`${cocktailSearchURL}${searchTerm}`)
console.log(response)
  
  return { drinks: response.data.drinks,
    searchTerm
  }
}

const Landing = () => {
  const {drinks, searchTerm} = useLoaderData()
  return (
    <>
      <SearchForm/>
     <CocktailList drinks = {drinks}/>
    </>
  )
}

export default Landing
