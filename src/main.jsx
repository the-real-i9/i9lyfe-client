import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'

import AppStateStore from './lib/appState/store'
import * as Actions from './lib/actions'
import * as Loaders from './lib/loaders'

import './index.css'
import Root from './components/Root'
import App from './components/App'
import Auth from './components/auth/Auth'
import Home from './pages/Home'
import Error from './pages/Error'
import CreatePost from './pages/CreatePost'
import Signin from './pages/auth/Signin'
import Signup from './pages/auth/Signup'
import VerifyEmail from './pages/auth/VerifyEmail'
import NewAccountInfo from './pages/auth/NewAccountInfo'
import UploadProfilePicture from './pages/auth/UploadProfilePicture'
import ConfirmPwdrEmail from './pages/auth/ConfirmPwdrEmail'
import ResetPassword from './pages/auth/ResetPassword'

const router = createBrowserRouter([
  {
    // path: "/",
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
        // path: "/auth",
        element: <Auth />,
        errorElement: <Error />,
        children: [
          {
            path: "/auth/signup",
            element: <Signup />,
            action: Actions.newAccountRequest,
          },
          {
            path: "/auth/signup/verify_email",
            element: <VerifyEmail />,
            loader: Loaders.emailVerification,
            action: Actions.emailVerification
          },
          {
            path: "/auth/signup/register",
            element: <NewAccountInfo />,
            action: Actions.userRegistration,
          },
          {
            path: "/auth/signup/upload_your_profile_picture",
            element: <UploadProfilePicture />
          },
          {
            path: "/auth/signin",
            element: <Signin />,
            action: Actions.userSignin,
          },
          {
            path: "/auth/forgot_password",
            element: <ConfirmPwdrEmail />
          },
          {
            path: "/auth/reset_your_password",
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
