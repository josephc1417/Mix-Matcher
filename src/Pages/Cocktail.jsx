import { useLoaderData,Link } from "react-router-dom"
import axios from "axios";
import Wrapper from "../assets/wrappers/CocktailPage"

const singleCocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="



//!Setting up the loader function 
//?Extract the id from the url(obj)
//^request the data from the api(axios)
//&Return the data from the api to the loader function 

export const loader  = async ({params}) => {
const {id} = params 
const {data} = await axios.get(`${singleCocktailURL}${id}`);

  return {id,data}
}

//*use data from the api to render the page (useLoaderData)
const Cocktail = () => {
const {id,data}= useLoaderData()
if (!data) return <h2>Something went wrong...</h2>
  
  const singleDrink = data.drinks[0]
  const {strDrink: name, strDrinkThumb: image, strAlcoholic: info, strGlass: glass, strInstructions: instructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5} = singleDrink;

  console.log(singleDrink);
  
  const validIngredients = Object.keys(singleDrink).filter((key) => key.startsWith("strIngredient") && singleDrink[key]  !== null).map((key) => singleDrink[key]);

  console.log(validIngredients);
  
  
  
  return (
    <Wrapper>
      <header>
        <Link to= '/' className="btn">Back Home</Link>
        <h3>{name}</h3>
      </header>
      <div>
        <img src={image} alt={name}/>
        <div>
          <p>
            <span className="drink-data">Name:</span>
            {name}
          </p>
          <p>
            <span className="drink-data">info:</span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass :</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">Instructions :</span>
            {instructions }
          </p>
          <p>
            <span className="drink-data">Instructions :</span>
            {validIngredients.map((ingredient, index) => {
              return <span className="ing" key={item}>{ingredient}
              {item}{index< validIngredients.length-1 ? ',':''}
              </span> 
            })}
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

export default Cocktail
 