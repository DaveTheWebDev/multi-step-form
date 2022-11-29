import React from "react"

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode
  isSubmitButton?: boolean
  variant: 'primary' | 'dangerous'
}
