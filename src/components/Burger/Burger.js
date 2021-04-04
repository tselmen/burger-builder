import Ingredient from "./Ingredient/Ingredient";
import './Burger.css'

function Burger(props) {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(keys => {
      return [...Array(props.ingredients[keys])].map((_, i) => {
        return <Ingredient type={keys} key={keys + i}/>
      })
    })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, [])

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>
  }
  return (
    <div className={"Burger"}>
      <Ingredient type={"bread-top"}/>
      {transformedIngredients}
      <Ingredient type={"bread-bottom"}/>
    </div>
  );
}

export default Burger;