export default function UserPic({ userPicUrl, size, extStyle }) {
	return (
		<div className="pic-wrapper">
			<img
				className={`w-[--size] h-[--size] rounded-full ${extStyle}`}
				src={userPicUrl}
				alt="User Picture"
				style={{ '--size': `${size * 4}px` }}
			/>
		</div>
	)
}
