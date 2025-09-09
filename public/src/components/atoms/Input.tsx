import React from 'react'

interface InputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

const Input: React.FC<InputProps> = ({ value, onChange, placeholder }) => {
  return (
    <input
      className="border rounded p-2 w-full"
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

export default Input
