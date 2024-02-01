import axios from "axios"
import { useRef, useState } from "react"
import { useFetcher } from "react-router-dom"

export default function CreatePost() {
  const fetcher = useFetcher()

  const [postType, setPostType] = useState("Photo")
  const [postDescription, setPostDescription] = useState("")
  const mediaContents = useRef(null)

  const handleSubmit = async () => {
    try {
      const formData = new FormData()
      formData.append("user_id", "3")
      formData.append("post_type", postType)
      formData.append("description", postDescription)
      for (let i = 0; i < mediaContents.current.files.length; i++) {
        formData.append("media_contents", mediaContents.current.files[i])
      }

      const res = await axios.post(
        "http://localhost:5000/create_post",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      console.log(res.status)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="mx-auto w-64 flex flex-col items-center">
      <div className="my-2 text-lg font-bold">Create Post</div>
      <fetcher.Form method="post" className="flex flex-col gap-2">
        <select
          name="post_type"
          id="post_type"
          className="border"
          value={postType}
          onChange={(ev) => setPostType(ev.target.value)}
        >
          <option value="Photo">photo</option>
          <option value="Video">video</option>
          <option value="Story">story</option>
          <option value="Reel">reel</option>
        </select>
        <input
          ref={mediaContents}
          type="file"
          name="media_contents"
          id="media_contents"
          multiple
          accept={
            postType === "Story"
              ? ".jpg,.jpeg,.png,.mp4,.mkv,.webm,.webp"
              : ["Video", "Reel"].includes(postType)
              ? ".mp4,.mkv,.webm"
              : ".jpg,.jpeg,.png"
          }
          placeholder="Medias"
          required
        />
        <input
          type="text"
          name="description"
          id="description"
          className="border"
          onChange={(ev) => setPostDescription(ev.target.value)}
        />
        <button
          type="button"
          className="border w-1/2 h-10 self-center"
          onClick={handleSubmit}
        >
          Create Post!
        </button>
      </fetcher.Form>
    </div>
  )
}
