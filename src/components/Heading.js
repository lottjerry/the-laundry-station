export default function Heading(props) {
  return (
    <div className="heading">
      <div className="title">{props.title}</div>
      <div className="subtitle">{props.subtitle}</div>
    </div>
  )
}