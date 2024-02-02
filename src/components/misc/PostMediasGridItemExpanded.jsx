import { Link } from "react-router-dom";
import UserPic from "./UserPic";
import FollowBtn from "./FollowBtn";
import PostCardMedias from "../Posts/PostCardMedias";
import PostUserActions from "../Posts/PostUserActions";

export default function PostMediasGridItemExpanded({ post }) {
	return (
		<div
			className="fixed top-0 right-0 bottom-0 left-0 z-30 flex justify-center items-center bg-gray-900 bg-opacity-40"
		>
			<div className="expanded-media-modal w-10/12 rounded-i9-sm overflow-clip">
				<div className="header flex gap-2 items-center px-3 py-2 bg-white">
					<UserPic userPicUrl={post.userPicUrl} size={8} />
					<Link
						className="block text-xs font-bold"
						to={`/users/${post.userNames.username}`}
					>
						{post.userNames.displayName}
					</Link>
					<div className="post_header-action-btns ml-auto flex items-center gap-2">
						<FollowBtn size="sm" following={post.following} />
						<Link to={`/posts/${post.id}`}>
							<div className="w-7 h-7 rounded-full border-2">
								{/* view icon goes here */}
							</div>
						</Link>
					</div>
				</div>
				{/* Post card media */}
				<PostCardMedias postMedias={post.medias} postId={post.id} />
				{/* User actions */}
				<div className="py-0.5 -mx-1 bg-white">
					<PostUserActions postId={post.id} />
				</div>
			</div>
		</div>
	)
}
