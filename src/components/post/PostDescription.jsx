import { useState } from "react";
import { Link } from "react-router-dom";

export default function PostDescription({ username, postDescription }) {
	const [expand, setExpand] = useState(false);

	function handleDescExpand() {
		setExpand((prev) => !prev)
	}

	return (
		<div className="post-text-description text-xs px-gl">
			<p className={`${expand ? "" : "truncate"}`}>
				<Link className="font-bold" to={`/users/${username}`}>
					{username}
				</Link>{" "}
				{postDescription}
			</p>
			<button onClick={handleDescExpand} className="text-gray-500">{expand ? "less" : "more"}</button>
		</div>
	)
}
