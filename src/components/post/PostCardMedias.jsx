import { useEffect, useState } from "react"
import Swiper from "swiper"
import "swiper/css"

export default function PostCardMedias({ postMedias, postId }) {
	const [currImgIndex, setCurrImgIndex] = useState(0)

	useEffect(() => {
		new Swiper(`.swiper#${postId}`, {
			on: {
				activeIndexChange(swiper) {
					setCurrImgIndex(swiper.activeIndex)
				}
			}
		})
	}, [postId])

	return (
		<div className="relative swiper" id={postId}>
			<div
				className="post-medias-wrapper swiper-wrapper"
			>
				{postMedias.map((mediaUrl, index) => (
					<div key={`image-${index}-${mediaUrl}`} className="swiper-slide">
						<img
							src={mediaUrl}
							alt={mediaUrl}
							loading="lazy"
						/>
					</div>
				))}
			</div>
			{postMedias.length > 1 ? (
				<div className="index-track absolute top-2 right-2 px-2.5 py-1.5 text-xs rounded-full bg-white bg-opacity-90 text-black z-10">
					{postMedias.length ? currImgIndex + 1  : 0} | {postMedias.length}
				</div>
			) : null}
		</div>
	)
}
