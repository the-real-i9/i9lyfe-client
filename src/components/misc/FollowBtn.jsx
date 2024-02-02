export default function FollowBtn({ size, userId, following }) {
	function handleFollow() {
		console.log(userId)
	}

	return (
		<div className="follow-btn-wrapper">
			<button
				onClick={handleFollow}
				className={`${
					size === "sm"
						? "rounded-i9-2xs px-4 py-2"
						: size === "lg"
						? "rounded-i9-xs px-6 py-2.5"
						: ""
				} ${
					following ? "text-prim ring-1 ring-gray-200" : "text-white bg-prim"
				} font-bold text-xs`}
			>
				{following ? "Following" : "Follow"}
			</button>
		</div>
	)
}
