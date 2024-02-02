import { Link } from "react-router-dom"
import ButtonIcon from "../Miscs/ButtonIcon"
import UserPic from "../Miscs/UserPic"
import { useState } from "react"

export default function Comment_ReplyCard({
	data,
	activateReply,
	showReplies,
	setShowReplies,
}) {
	const [expand, setExpand] = useState(false)

	function handleCommentExpand() {
		setExpand((prev) => !prev)
	}

	return (
		<div className="flex gap-3">
			<div className="min-w-fit">
				<UserPic userPicUrl={data.userPicUrl} size={10} />
			</div>
			<div>
				<div
					className={`text-xs text-gray-900 ${
						!expand ? "overflow-hidden text-ellipsis" : ""
					}`}
					style={
						!expand
							? {
									display: "-webkit-box",
									WebkitLineClamp: 2,
									WebkitBoxOrient: "vertical",
							  }
							: null
					}
				>
					<Link
						className="font-bold"
						to={`/users/${data.userNames.username}`}
					>
						{data.userNames.displayName}
					</Link>{" "}
					{data.text}
				</div>
				<button onClick={handleCommentExpand} className="text-xs text-gray-400">
					{expand ? "less" : "more"}
				</button>
				<div className="flex items-center gap-4">
					<button
						onClick={activateReply}
						className="reply-action text-[10px] font-bold text-gray-700 my-2"
					>
						Reply
					</button>
					{data.replies.length > 0 && (
						<button
							onClick={() => {
								setShowReplies((prev) => !prev)
							}}
							className="replies-toggle flex items-center gap-1"
						>
							<div className="w-5 h-[1px] bg-gray-500"></div>
							<span className="text-[10px] font-bold text-gray-500">
								{showReplies
									? "Hide replies"
									: `Show ${data.repliesCount} more replies`}
							</span>
						</button>
					)}
				</div>
			</div>
			<div className="like flex flex-col items-center ml-auto">
				<ButtonIcon size={4}>{/* Icon goes here */}</ButtonIcon>
				<span className="text-[10px] text-gray-400 mt-1">
					{data.likesCount || ""}
				</span>
			</div>
		</div>
	)
}
