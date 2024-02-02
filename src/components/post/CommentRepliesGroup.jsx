import { useState } from "react"
// import { commentReplies } from "../../lib/dummyDatas"
import Comment_ReplyCard from "./Comment_ReplyCard"

export default function CommentRepliesGroup({ data, replyAction }) {
	const [showReplies, setShowReplies] = useState(false)

	/* Replies will be fetched with SWR later */

	function activateReply() {
		replyAction({
			state: true,
			commentToReply: {
				commentId: data.id,
				commentUsername: data.userNames.username,
			},
		})
	}

	return (
		<div className="comment-replies-group flex flex-col">
			<Comment_ReplyCard data={data} activateReply={activateReply} showReplies={showReplies} setShowReplies={setShowReplies} />
			
			{showReplies && (
				<div className="comment-replies ml-12 mt-2 flex flex-col gap-2">
					{data.replies.map((data) => (
						<CommentRepliesGroup
							key={data.id}
							data={data}
							replyAction={replyAction}
						/>
					))}
				</div>
			)}
		</div>
	)
}
