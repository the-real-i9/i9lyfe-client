import UserPic from "../miscs/UserPic";
import ComplexPostActionText from "./ComplexPostActionText";

export default function PostLikesSummary({ postLikesSummary, postId }) {
	return (
		<div className="post-likers flex items-center gap-1 py-1 px-gl">
			{postLikesSummary.userPicksPicUrl.length === 2 ? (
				<div className="multi-pics-wrapper relative w-10 h-6">
					{postLikesSummary.userPicksPicUrl.map((picUrl, picIndex) => (
						<UserPic
							key={picUrl}
							userPicUrl={picUrl}
							size={6}
							extStyle={`absolute border-2 border-white ${
								picIndex === 0 ? "left-0" : "right-0 -z-10"
							}`}
						/>
					))}
				</div>
			) : postLikesSummary.userPicksPicUrl.length === 1 ? (
				<UserPic
					key={postLikesSummary.userPicksPicUrl[0]}
					userPicUrl={postLikesSummary.userPicksPicUrl[0]}
					size={6}
				/>
			) : null}
			<div className="notification-text text-xs">
				{postLikesSummary.userPicksNames.length ? "Liked by " : ""}
				<ComplexPostActionText
					userPicksNames={postLikesSummary.userPicksNames}
					others={postLikesSummary.others}
					postId={postId}
					actionPlural="likes"
					isPost={true}
				/>
			</div>
		</div>
	)
}
