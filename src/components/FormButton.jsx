export default function FormButton({ action, name, value }) {
	return (
		<button
			type="submit"
			name={name || ""}
			value={value || ""}
			className="h-14 rounded-i9 text-white bg-prim font-bold mt-8"
		>
			{action}
		</button>
	)
}
