import React from 'react'
import { TextField } from '@mui/material'
import { BaseTextFieldProps } from '@mui/material'

interface IModalInputProp extends BaseTextFieldProps
{
  name: string
  label: string
  variant?: 'standard' | 'filled' | 'outlined'
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const ModalInput = (props: IModalInputProp) => {
  const { name, label, variant, ...restProps } = props
  return (
    <TextField
      variant={variant || "standard"}
      name={name}
      id={name}
      label={label}
      {...restProps}
    />
  )
}

export default ModalInput