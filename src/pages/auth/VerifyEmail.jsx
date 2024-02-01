import { Form, useActionData, useLoaderData } from "react-router-dom"
import Logo from "../../components/Logo"
import AuthFormField from "../../components/auth/AuthFormField"
import FormButton from "../../components/FormButton"

export default function VerifyEmail() {
  const loaderData = useLoaderData()
  const actionData = useActionData()

  return (
    <div className="email_verification--wrapper h-full flex flex-col items-center justify-center">
      <Logo />
      <p className="font-bold mt-3 text-xl">Verify email</p>
      <Form className="px-gl w-full flex flex-col gap-3 mt-7" method="post">
        <p className="text-center font-medium text-sm underline decoration-dotted underline-offset-4">
          Enter 6-digit code sent to {loaderData.email}
        </p>
        <AuthFormField
          key="verf-code-input"
          type="text"
          placeholder="6-digit code"
          name="verification code"
          isError={actionData ? actionData.error : null}
        />
        <FormButton action="Submit" />
      </Form>
    </div>
  )
}
