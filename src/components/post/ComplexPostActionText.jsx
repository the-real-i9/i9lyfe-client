import { Link } from "react-router-dom"

export default function ComplexPostActionText({
	userPicksNames,
	others,
	postId,
	actionPlural : fragment,
	isPost,
}) {
	const userPicksNamesPartition = userPicksNames.length > 1 && [
		userPicksNames.slice(0, -1),
		userPicksNames.slice(-1),
	]

	return !userPicksNames.length && others > -1 ? (
			/* If there aren't any selected users and there are others, even zero(0) (might be the case for post, but can never be true for notifications, so we're safe). We want to use the "total number" which is what {others} is, recall that we subtract from {others} the users that are selected. The report phrase for posts is `${others} "likes"`, while for notifications it is `${others} "people" (liked | commented on) your post.` */
			<Link className="font-bold" to={`/posts/${postId}#${fragment}`}>
				{others} {isPost ? "likes" : "people"}
			</Link>
	) : userPicksNames.length === 1 && !others ? (
			/* If selected users is exactly one, and there are no others. We want to reference just that one user */
			userPicksNames.map(({ username, displayName }) => (
				<Link className="font-bold" key={username} to={`/users/${username}`}>
					{displayName}
				</Link>
			))
	) : userPicksNames.length > 1 && !others ? (
		/* If selected users is more than one (max of 3), and there are no others. We do the "and"ing trick with the names. */
		<span>
			{userPicksNamesPartition[0].map(({ username, displayName }, index) => (
				<Link key={username} to={`/users/${username}`}>
					{index !== 0 ? ", " : ""}{" "}
					<span className="font-bold">{displayName}</span>
				</Link>
			))}{" "}
			and{" "}
			{userPicksNamesPartition[1].map(({ username, displayName }) => (
				<Link className="font-bold" key={username} to={`/users/${username}`}>
					{displayName}
				</Link>
			))}
		</span>
	) : (
		/* If none of these is true then we're getting `${name} and ${others} others` */
		<span>
			{userPicksNames.map(({ username, displayName }, index) => (
				<Link key={username} to={`/users/${username}`}>
					{index !== 0 ? ", " : ""}{" "}
					<span className="font-bold">{displayName}</span>
				</Link>
			))}{" "}
			and{" "}
			<Link className="font-bold" to={`/posts/${postId}#${fragment}`}>
				{others} others
			</Link>
		</span>
	)
}
