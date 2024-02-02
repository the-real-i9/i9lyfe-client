import appAxios from "./appAxios"

/**
 * @param {object} param0
 * @param {Request} param0.request
 */
export async function emailVerification() {
  return { email: localStorage.getItem("i9lyfe--ongoing-registration-email") }
}

export async function appInit() {
  try {
    const {
      data: { clientUser },
    } = await appAxios.get("/user_private/client_user")

    const {
      data: { homeFeedPosts },
    } = await appAxios.get("/post_comment/home_feed?limit=10&offset=0")

    return { clientUser, homeFeedPosts }
  } catch (error) {
    console.error(error)
    throw error
  }
}
