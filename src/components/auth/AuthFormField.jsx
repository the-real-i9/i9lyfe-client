import { useState } from "react"

export default function AuthFormField({
  type,
  placeholder,
  name,
  isError,
  inputValue,
  setInputValue,
}) {
  const [focused, setFocused] = useState(false)

  return (
    <div className={`field-wrapper bg-gray-100 h-14 rounded-i9 p-1`}>
      <div
        className={`field-inner-wrapper flex items-center w-full h-full rounded-i9-md overflow-clip gap-3 px-3 ${
          focused ? "bg-white" : "bg-transparent"
        }`}
      >
        <div
          className={`icon w-7 h-7 rounded-full ${
            focused ? "bg-prim" : "bg-gray-300"
          }`}
        >
          {/* Icon goes here: Provide icon prop */}
        </div>
        <input
          type={type}
          name={name}
          className="self-stretch flex-1 outline-none text-sm bg-transparent placeholder:text-gray-400 placeholder:capitalize"
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(ev) =>
            setInputValue ? setInputValue(ev.target.value) : null
          }
          value={inputValue}
          required
        />
        {isError ? (
          <div
            title={isError}
            className="validity-check w-4 h-4 rounded-full border border-red-600"
          >
            {/* Icon goes here */}
          </div>
        ) : null}
      </div>
    </div>
  )
}
