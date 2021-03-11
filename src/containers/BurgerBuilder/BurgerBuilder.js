import {Component} from "react/cjs/react.production.min";
import Aux from "../../hoc/Auxiliary";

class BurgerBuilder extends Component {
  render() {
    return (
      <Aux>
        <div>Burger</div>
        <div>Build controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;