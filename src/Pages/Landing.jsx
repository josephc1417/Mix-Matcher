import { useLoaderData } from "react-router-dom"
import axios from "axios"
import CocktailList from "../Components/CocktailList"
import SearchForm  from "../Components/SearchForm"
import { useQuery } from "@tanstack/react-query"

const cocktailSearchURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

const searchCocktailsQuery = (searchTerm) => {
  return{
    queryKey:['search',searchTerm ||'all'],
    queryFn: async () => {
      const response = await axios.get(`${cocktailSearchURL}${searchTerm}`)
      return response.data.drinks
    }
  }
}


export const loader=(queryClient) => 
  async ({request}) => {
  const url = new URL(request.url)
  
  const searchTerm = url.searchParams.get('search') || 'all';
  await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm))
  
  return {searchTerm}
}




{/*Passing {searchTerm} to the SearchForm component as a prop to establish persistance */}
const Landing = () => {
  const {searchTerm} = useLoaderData()
  const {data:drinks} = useQuery(searchCocktailsQuery(searchTerm))
  return (
    <>
      <SearchForm searchTerm = {searchTerm}/>
     <CocktailList drinks = {drinks}/>
    </>
  )
}

export default Landing
 