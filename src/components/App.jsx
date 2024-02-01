import { Outlet } from "react-router-dom"

export default function App() {
  return (
    <div className="app--wrapper">
      <div className="tabs"></div>
      <div className="tab--wrapper">
        <Outlet />
      </div>
    </div>
  )
}
