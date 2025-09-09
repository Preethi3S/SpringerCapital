import React from 'react'

interface ButtonProps {
  label: string
  onClick: () => void
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button
