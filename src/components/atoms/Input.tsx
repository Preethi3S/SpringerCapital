import React from 'react'

interface InputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

const Input: React.FC<InputProps> = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="border rounded p-2 w-full"
    />
  )
}

export default Input
