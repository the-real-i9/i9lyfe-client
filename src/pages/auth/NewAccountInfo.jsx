import { Form, useActionData } from "react-router-dom"
import Logo from "../../components/Logo"
import AuthFormField from "../../components/auth/AuthFormField"
import FormButton from "../../components/FormButton"

export default function NewAccountInfo() {
  const actionData = useActionData()

  return (
    <div className="new_account_info--wrapper h-full flex flex-col items-center justify-center">
      <Logo />
      <p className="font-bold mt-3 text-xl">Profile Info</p>
      <Form className="px-gl w-full flex flex-col gap-3 mt-7" method="post">
        <p className="text-center font-medium text-sm underline decoration-dotted underline-offset-4">
          Update your profile
        </p>
        <AuthFormField
          key="username-input"
          type="text"
          placeholder="username"
          name="username"
          isError={actionData ? actionData.error.username : null}
        />
        <AuthFormField
          key="password-input"
          type="password"
          placeholder="password"
          name="password"
          isError={actionData ? actionData.error.password : null}
        />
        <AuthFormField
          key="name-input"
          type="text"
          placeholder="Display name"
          name="name"
          isError={actionData ? actionData.error.name : null}
        />
        <AuthFormField
          key="birthday-input"
          type="date"
          placeholder="Birthday"
          name="birthday"
          isError={actionData ? actionData.error.birthday : null}
        />
        <AuthFormField
          key="bio-input"
          type="text"
          placeholder="Bio"
          name="bio"
          isError={actionData ? actionData.error.bio : null}
        />
        <FormButton action="Submit" />
      </Form>
    </div>
  )
}
