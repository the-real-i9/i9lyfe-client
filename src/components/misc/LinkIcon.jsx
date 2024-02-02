import { Link } from "react-router-dom"

export default function LinkIcon({ size, color, to }) {
	return (
		<Link
			className={`block w-[--size] h-[--size] rounded-full border-2 border-${color}`}
			style={{ '--size': `${size * 4}px` }}
			to={to}
		>
			{/* Icon goes here */}
		</Link>
	)
}
