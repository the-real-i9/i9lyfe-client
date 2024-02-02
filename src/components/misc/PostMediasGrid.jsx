import { Link, useLocation } from "react-router-dom";

export default function PostMediasGrid({ posts }) {
  const location = useLocation()
	return (
		<div className="post-medias-grid px-gl columns-3 gap-0.5 space-y-0.5 sm:columns-4 md:columns-3 xl:columns-4">
			{posts.map(({ id, medias: [mediaItem] }, i) => (
				<Link className="block" to={`${location.search}#${id}`} relative="route" key={`img-${i}`}>
					<img src={mediaItem} alt={mediaItem} className="rounded-i9-3xs" />
				</Link>
			))}
		</div>
	)
}
