import ButtonIcon from "../Miscs/ButtonIcon"
import LinkIcon from "../Miscs/LinkIcon"

export default function PostUserActions({ postId }) {
	return (
		<div className="post-user-actions flex gap-3 items-center px-gl py-2 bg-white">
			<ButtonIcon name="like" size={7} color="gray-900">
				{/* Icon goes here */}
			</ButtonIcon>
			<LinkIcon
				name="comment"
				size={7}
				color="gray-900"
				to={`/posts/${postId}#comments`}
			>
				{/* Icon goes here */}
			</LinkIcon>

			<div className="ml-auto">
				<ButtonIcon name="save" size={7} color="gray-900">
					{/* Icon goes here */}
				</ButtonIcon>
			</div>
		</div>
	)
}
