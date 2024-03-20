import { useLoaderData } from "react-router-dom"
import axios from "axios"
import CocktailList from "../Components/CocktailList"
import SearchForm  from "../Components/SearchForm"
import { useQuery } from "@tanstack/react-query"

const cocktailSearchURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

const searchCocktailsQuery = (searchTerm) => {
  return{
    queryKey:['search',searchTerm ||'all'],
  }
}

{/*Accessed the GET request object from the Search Form Submission (*/}
{/*The loader function will handle the response form the API/CocktailDB and return the data to the loader function*/}
export const loader = async ({request}) => {

{/*(new URL instance) Accessed the URLfrom the request object above {request}*/}
{/*The request.url property represents the URL of the current request (GET request object from the Search Form = URL/Cocktail DB + Query string = search=Vodka). */}
{/*Axios will serialize the new query string to the URL. We will then have a GET request to the URL (Cocktail DB) and a new value to search for  (Query string) = Vodka  */}
const url = new URL(request.url)


{/*searchTerm represents an [array] of different drinks */}
{/*We want to make a GET request to the API/CocktailDB to extract, and send all data on drinks related to the search term (Vodka)*/}
{/*Before sending the GET request, we will set the query string to the value of the searchTerm (searchTerm = Vodka) so the API/ CocktailDB will return only drinks related to the search term (Vodka)*/}

{/*(Condition) if returned by searchTerm  empty, set searchTerm to an empty string,else set searchTerm to the value of 'search' in the URL(vodka) */}
const searchTerm = url.searchParams.get('search') || "";
// const response = await axios.get(`${cocktailSearchURL}${searchTerm}`)
// console.log(response)
  
   return { 
    searchTerm
  }
}


{/*Passing {searchTerm} to the SearchForm component as a prop to establish persistance */}
const Landing = () => {
  const {drinks, searchTerm} = useLoaderData()
  return (
    <>
      <SearchForm searchTerm = {searchTerm}/>
     <CocktailList drinks = {drinks}/>
    </>
  )
}

export default Landing
 