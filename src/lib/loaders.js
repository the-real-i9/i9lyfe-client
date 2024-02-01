/**
 * @param {object} param0
 * @param {Request} param0.request
 */
export async function emailVerification() {
  return { email: localStorage.getItem("i9lyfe--ongoing-registration-email") }
}
