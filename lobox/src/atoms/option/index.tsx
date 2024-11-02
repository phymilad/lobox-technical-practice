import React from 'react'
import { Option } from '../../models/types'
import { Typography } from '../typography'

type Props = {
    option: Option
    isSelected: boolean
    onClick: (id: number) => void
}

export const OptionItem = ({
    option,
    isSelected,
    onClick,
} : Props) => {
  return (
    <div 
        style={{
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center",
            backgroundColor: isSelected ? "blue" : "white",
            borderRadius: ".25rem"
        }}
        onClick={() => onClick(option.id)}
    >
        <Typography text={option.label} />
        <p>Tick</p>
    </div>
  )
}
