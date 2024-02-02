import { Outlet, useLoaderData } from "react-router-dom"
import { initClientUser } from "../lib/appState/slices/clientUserSlice"
import { initHomeFeed } from "../lib/appState/slices/homeFeedSlice"
import { useDispatch } from "react-redux"
import { useCallback } from "react"

export default function App() {
  const loaderData = useLoaderData()
  const dispatch = useDispatch()

  useCallback(() => {
    dispatch(initClientUser(loaderData.clientUser))
    dispatch(initHomeFeed(loaderData.homeFeedPosts))
  }, [dispatch, loaderData.clientUser, loaderData.homeFeedPosts])

  return (
    <div className="app--wrapper">
      <div className="tabs"></div>
      <div className="tab--wrapper">
        <Outlet />
      </div>
    </div>
  )
}
