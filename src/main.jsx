import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './components/Root'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AppStateStore from './lib/appState/store'
import { Provider as ReduxProvider } from 'react-redux'
import App from './components/App'
import Auth from './components/Auth'
import Home from './pages/Home'
import Error from './pages/Error'
import CreatePost from './pages/CreatePost'
import Signin from './pages/auth/Signin'
import Signup from './pages/auth/Signup'
import VerifyEmail from './pages/auth/VerifyEmail'
import ProfileInfo from './pages/auth/ProfileInfo'
import UploadProfilePicture from './pages/auth/UploadProfilePicture'
import ConfirmPwdrEmail from './pages/auth/ConfirmPwdrEmail'
import ResetPassword from './pages/auth/ResetPassword'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/create_post",
            element: <CreatePost />
          }
        ],
      },
      {
        path: "/auth",
        element: <Auth />,
        errorElement: <Error />,
        children: [
          {
            path: "/signup",
            element: <Signup />
          },
          {
            path: "/verify_email",
            element: <VerifyEmail />
          },
          {
            path: "/update_your_profile",
            element: <ProfileInfo />
          },
          {
            path: "upload_your_profile_picture",
            element: <UploadProfilePicture />
          },
          {
            path: "/signin",
            element: <Signin />
          },
          {
            path: "forgort_password",
            element: <ConfirmPwdrEmail />
          },
          {
            path: "reset_your_password",
            element: <ResetPassword />
          }
        ]
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReduxProvider store={AppStateStore}>
      <RouterProvider router={router} />
    </ReduxProvider>
  </React.StrictMode>,
)
