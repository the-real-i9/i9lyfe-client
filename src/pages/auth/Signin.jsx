import { Form, Link, useActionData } from "react-router-dom"
import Logo from "../../components/Logo"
import AuthFormField from "../../components/auth/AuthFormField"
import FormButton from "../../components/FormButton"

export default function Signin() {
  const actionData = useActionData()

  return (
    <div className="signin--wrapper h-full flex flex-col items-center justify-center">
      <Logo />
      <Form className="px-gl w-full flex flex-col gap-3 mt-7" method="post">
        <AuthFormField
          key="email-input"
          type="text"
          placeholder="email"
          name="email"
          isError={actionData ? actionData.error.email : null}
        />
        <AuthFormField
          key="password-input"
          type="password"
          placeholder="password"
          name="password"
          isError={actionData ? actionData.error.password : null}
        />
        <Link
          to="/auth/forgot_password"
          className="text-sm text-gray-400 self-end pr-4 -mt-2 focus:underline hover:underline"
        >
          Forgot Password?
        </Link>
        <FormButton action="Sign in" />
      </Form>
      <p className="text-sm mt-10 text-gray-400">
        Don&apos;t have an account?{" "}
        <Link to="/auth/signup" className="text-prim font-medium">
          Sign up
        </Link>
      </p>
    </div>
  )
}
