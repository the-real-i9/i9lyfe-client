import { useSelector } from "react-redux"

import SplashPage from "./pages/SplashPage"
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage"

export default function App() {
  const currentPage = useSelector((state) => state.pages.current)

  const renderPage = () => {
    switch (currentPage) {
      case "Login":
        return <LoginPage />
      case "Home":
        return <HomePage />
      case "Splash":
      default:
        return <SplashPage />
    }
  }

  return (
    <>
      {renderPage()}
    </>
  )
}
