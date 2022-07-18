export default function Button(props) {
	return (
		<a
			className="button"
			href={props.href}
			target={props.target}
			rel={props.rel}
		>
			<div className="button__text">{props.text}</div>
			<div className="icon">{props.icon}</div>
		</a>
	);
}
