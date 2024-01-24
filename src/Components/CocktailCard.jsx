import {Link} from 'react-router-dom'
import Wrapper from '../assets/wrappers/CocktailCard'

const CocktailCard = ({id,name,image,info,glass}) => {
  return (
    <Wrapper>
      <img src={image} alt={name} />
      <div className="footer">
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className='btn'>Details</Link>
      </div>
    
    </Wrapper>
  )
}

export default CocktailCard
