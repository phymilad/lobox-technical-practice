import React from 'react'

type Props = {
    value: string
    type: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week"
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder: string
}

export const Input = ({
    value,
    onChange,
    placeholder
}: Props) => {
  return (
    <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
    />
  )
}
