import React from 'react'

type Props = {
    text: string
}

export const Typography = ({
    text
} : Props) => {
  return (
    <p>
        {text}
    </p>
  )
}
