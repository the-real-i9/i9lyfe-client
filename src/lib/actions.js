import axios from "axios"
import { redirect } from "react-router-dom"

/**
 * @param {object} param0
 * @param {Request} param0.request
 */
export async function newAccountRequest({ request }) {
  try {
    const email = (await request.formData()).get("email")

    await axios.post(
      "http://localhost:5000/api/auth/signup?stage=new_account_request",
      { email },
      { withCredentials: true }
    )

    localStorage.setItem("i9lyfe--ongoing-registration-email", email)

    return redirect("/auth/signup/verify_email")
  } catch (error) {
    const { reason } = error.response.data
    console.log(reason)
    return { error: reason }
  }
}

/**
 * @param {object} param0
 * @param {Request} param0.request
 */
export async function emailVerification({ request }) {
  try {
    const code = (await request.formData()).get("verification code")

    await axios.post(
      "http://localhost:5000/api/auth/signup?stage=email_verification",
      { code },
      { withCredentials: true }
    )

    localStorage.removeItem("i9lyfe--ongoing-registration-email")

    return redirect("/auth/signup/register")
  } catch (error) {
    const { reason } = error.response.data
    console.log(reason)
    return { error: reason }
  }
}

/**
 * @param {object} param0
 * @param {Request} param0.request
 */
export async function userRegistration({ request }) {
  try {
    const { username, password, name, birthday, bio } = Object.fromEntries((await request.formData()).entries)

    await axios.post(
      "http://localhost:5000/api/auth/signup?stage=user_registration",
      { username, password, name, birthday, bio },
      { withCredentials: true }
    )

    return redirect("/auth/signup/upload_your_profile_picture")
  } catch (error) {
    const { reason } = error.response.data
    console.log(reason)
    return { error: reason }
  }
}
