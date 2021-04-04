import "./Controls.css"
import Control from "./Control/Control";

const controls = [
  {label: "Salad", type: "salad"},
  {label: "Cheese", type: "cheese"},
  {label: "Meat", type: "meat"},
  {label: "Bacon", type: "bacon"},
]

function Controls(props) {
  return (
    <div className={"Controls"}>
      {controls.map(control =>
        <Control key={control.label} label={control.label}
                 added={() => props.ingredientAdded(control.type)}
                 removed={() => props.ingredientRemoved(control.type)} disabled={props.disabled[control.type]}/>
      )}
      Controls
    </div>
  )
}

export default Controls