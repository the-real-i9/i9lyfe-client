import { Outlet } from "react-router-dom";

export default function Auth() {
  return (
    <div className="auth--wrapper">
      <Outlet />
    </div>
  )
}
