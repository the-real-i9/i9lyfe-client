import { useFetcher } from "react-router-dom"
import kehImg from "../../assets/images/kehmathema.png"
import ButtonIcon from "../Miscs/ButtonIcon"
import { forwardRef } from "react"

const WriteComment_Reply = forwardRef(function WriteComment_Reply({
	post_commentId,
	isReplyMode,
	replyingTo,
	cancelReply,
}, ref) {
	const fetcher = useFetcher()

	return (
		<div className="fixed bottom-0 right-0 left-0 z-30">
			{isReplyMode && (
				<div className="replying-to w-full px-4 py-3 bg-gray-200 text-gray-500 border-t text-sm flex justify-between">
					<span>Replying @{replyingTo}</span>
					<ButtonIcon
						size={5}
						color="gray-900"
						onClick={() => {
							cancelReply()
						}}
					></ButtonIcon>
				</div>
			)}
			<fetcher.Form className="write-a-comment w-full flex gap-3 px-gl py-2 items-center bg-white border-t border-gray-100">
				<div className="my-pic-wrapper">
					<img
						className="w-9 h-9 rounded-full border border-gray-200"
						src={kehImg}
						alt="User Picture"
					/>
				</div>
				<div className="input-wrapper flex-1 self-stretch flex items-center">
					<input
						type="text"
						name="form_type"
						value={isReplyMode ? "reply" : "comment"}
						readOnly
						hidden
					/>
					<input
						type="text"
						name={isReplyMode ? "comment_id" : "post_id"}
						value={post_commentId}
						readOnly
						hidden
					/>

					<input
						className="text-sm outline-none w-full"
						type="text"
						name={isReplyMode ? "reply" : "comment"}
						placeholder={`Write a ${isReplyMode ? "Reply" : "Comment"}...`}
						ref={ref}
					/>
				</div>
				<div className="write-comment-actions-wrapper"></div>
			</fetcher.Form>
		</div>
	)
})

export default WriteComment_Reply