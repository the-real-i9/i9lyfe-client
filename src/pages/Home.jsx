import PostCard from "../components/post/PostCard"
import LinkIcon from "../components/misc/LinkIcon"
import GeneralStickyPageHeader from "../components/misc/GeneralStickyPageHeader"
import { useSelector } from "react-redux"

export default function Home() {
  const { feedPosts } = useSelector((state) => state.homeFeed)

  return (
    <>
      <GeneralStickyPageHeader noBack={true}>
        <div className="flex items-center justify-between w-full -my-1">
          <div className="logo-wrapper">
            <p
              style={{ fontFamily: "Foco" }}
              className="logo text-3xl font-bold"
            >
              <span className="text-prim">i9X</span>
              <span className="text-gray-900 text-sm">mas</span>
            </p>
          </div>
          <div className="notif-link-wrapper sm:hidden">
            <LinkIcon size={7} to="/notifications">
              {/* Icon goes here */}
            </LinkIcon>
          </div>
        </div>
      </GeneralStickyPageHeader>
      <div className="post-cards-main pb-12 sm:pb-0">
        {feedPosts.map((post) => (
          <PostCard key={post.post_id} data={post} />
        ))}
      </div>
    </>
  )
}
