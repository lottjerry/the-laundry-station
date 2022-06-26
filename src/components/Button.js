export default function Button (props) {
  return (
    <div className="button">
      <div className="button__text">{props.text}</div>
      <img src={props.src} alt={props.alt} />
    </div>
  )
}