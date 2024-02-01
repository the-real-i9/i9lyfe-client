import { Outlet } from "react-router-dom"

export default function Root() {
  return (
    <div className="w-full h-full md:w-[412px] mx-auto">
      <div>{/* Sidebar with navigation liks */}</div>
      <div className="view_wrapper">
        <Outlet />
      </div>
    </div>
  )
}
