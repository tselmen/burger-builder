import "./Control.css"

function Control(props) {
  return (
    <div className={"Control"}>
      <div className={"Label"}>{props.label}</div>
      <button className={"Less"} onClick={props.removed} disabled={props.disabled}>Less</button>
      <button className={"More"} onClick={props.added}>More</button>
    </div>
  )
}

export default Control