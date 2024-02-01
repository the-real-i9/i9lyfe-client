import { Outlet } from "react-router-dom"

export default function Root() {
  return (
    <div className="app--root w-full h-full md:w-[412px] mx-auto">
      <Outlet />
    </div>
  )
}
