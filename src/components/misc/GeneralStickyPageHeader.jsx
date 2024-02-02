import { useNavigate } from "react-router-dom"
import ButtonIcon from "./ButtonIcon"

export default function GeneralStickyPageHeader({ children, noBack, fixed }) {
	const navigate = useNavigate()

	return (
		<div className={`header flex items-center px-gl py-3 top-0 bg-white gap-5 z-10 ${fixed ? "fixed" : "sticky"}`}>
			{!noBack ? (
				<div className="back-button">
					<ButtonIcon
						size={7}
						onClick={() => {
							navigate(-1, { preventScrollReset: true })
						}}
					>
						{/* Icon goes here */}
					</ButtonIcon>
				</div>
			) : null}
			<div className="w-full flex items-center">{children}</div>
		</div>
	)
}
