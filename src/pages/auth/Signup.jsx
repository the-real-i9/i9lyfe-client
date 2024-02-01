import { Form, Link, useActionData } from "react-router-dom"
import Logo from "../../components/Logo"
import AuthFormField from "../../components/auth/AuthFormField"
import FormButton from "../../components/FormButton"

export default function Signup() {
  const actionData = useActionData()

  return (
    <div className="signup--wrapper h-full flex flex-col items-center justify-center">
      <Logo />
      <Form className="px-gl w-full flex flex-col gap-3 mt-7" method="post">
        <AuthFormField
          key="email-input"
          type="text"
          placeholder="email"
          name="email"
          isError={actionData ? actionData.error : null}
        />
        <FormButton action="Sign up" />
      </Form>
      <p className="text-sm mt-8 text-gray-400">
        Have an account?{" "}
        <Link to="/signin" replace className="text-prim font-medium">
          Sign in
        </Link>
      </p>
    </div>
  )
}
