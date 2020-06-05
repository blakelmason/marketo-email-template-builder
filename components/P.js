import React from 'react'

export default function P({ y, className, style, children }) {
  const Fill = () => (
    <img
      className={className}
      src="http://probablyprogramming.com/wp-content/uploads/2009/03/handtinytrans.gif"
      style={{ height: y, ...style }}
      height={y}
    />
  )
  if (children) return <Fill>{children}</Fill>
  else return <Fill />
}
