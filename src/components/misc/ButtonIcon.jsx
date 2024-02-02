export default function ButtonIcon({ size, color, children, onClick }) {
	function handleClick() {
		onClick()
	}
	
	return (
		<button
			onClick={handleClick}
			className={`w-[--size] h-[--size] rounded-full border-2 border-${color}`}
			style={{ "--size": `${size * 4}px` }}
		>
			{children}
		</button>
	)
}
