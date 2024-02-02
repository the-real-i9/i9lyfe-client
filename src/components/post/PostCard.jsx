import { Link } from "react-router-dom"
import UserPic from "../misc/UserPic"
import FollowBtn from "../misc/FollowBtn"
import PostCardMedias from "./PostCardMedias"
import PostUserActions from "./PostUserActions"
// import PostLikesSummary from "./PostLikesSummary"
import PostDescription from "./PostDescription"
import PostPostedTime from "./PostPostedTime"

export default function PostCard({ data: post, showfs }) {
	return (
		<div className="post-card-wrapper">
			{/* Post card header */}
			<div className="post-card-header flex gap-2 items-center px-gl py-2">
				<UserPic userPicUrl={post.owner.profile_pic_url} size={9} />
				<Link
					className="block text-xs font-bold"
					to={`/users/${post.owner.username}`}
				>
					{post.owner.username}
				</Link>
				<div className="post_header-action-btns ml-auto">
					{showfs && <FollowBtn size="sm" following={post.owner.client_follows} />}
					<Link to={`/posts/${post.post_id}`}>
						<div className="w-6 h-6 rounded-full border-2">
							{/* View icon goes here */}
						</div>
					</Link>
				</div>
			</div>
			{/* Post card media */}
			<PostCardMedias postMedias={post.media_urls} postId={post.post_id} />
			{/* User actions */}
			<PostUserActions postId={post.post_id} />
			{/* Post description */}
			<PostDescription
				username={post.owner.username}
				postDescription={post.description}
			/>
			{/* total comments view */}
			<div className="comments-view-link px-gl">
				<Link
					to={`posts/${post.post_id}#comments`}
					className="text-gray-500 text-sm"
				>
					View all {post.comments_count} comments
				</Link>
			</div>
			{/* time posted */}
			<PostPostedTime timePosted={post.created_at} />
		</div>
	)
}
