import Ingredient from "./Ingredient/Ingredient";
import {Component} from "react/cjs/react.production.min";
import './Burger.css'

class Burger extends Component {
  transformedIngredients = Object.keys(this.props.ingredients)
    .map(keys => {
      return [...Array(this.props.ingredients[keys])].map((_, i) => {
        return <Ingredient type={keys} key={keys + i}/>
      })
    })

  render() {
    return (
      <div className={"Burger"}>
        <Ingredient type={"bread-top"}/>
        {this.transformedIngredients}
        <Ingredient type={"bread-bottom"}/>
      </div>
    );
  }
}

export default Burger;