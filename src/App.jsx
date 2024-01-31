import { Outlet } from "react-router-dom"

function App() {
  return (
    <div className="w-full h-full">
      <div>{/* Sidebar with navigation liks */}</div>
      <div className="view_wrapper">
        <Outlet />
      </div>
    </div>
  )
}

export default App
