import { Link } from "react-router-dom"
import FollowBtn from "./FollowBtn"
import UserPic from "./UserPic"

export default function UserFollowCard({ data: user }) {
	return (
		<div className="user-follow-card-wrapper flex items-center">
			<Link to={`/users/${user.id}`} className="flex items-center gap-4 self-stretch">
				<UserPic userPicUrl={user.picUrl} size={14} />
				<div>
					<p className="display-name text-gray-900 text-sm font-bold">
						{user.names.displayName}
					</p>
					<p className="username text-xs text-gray-400">
						@{user.names.username}
					</p>
				</div>
			</Link>
			<div className="ml-auto">
				<FollowBtn size="lg" userId={user.id} following={user.following} />
			</div>
		</div>
	)
}
