import React from 'react'

export default function Table({ w, p, m, children, style, td, ...rest }) {
  const width = 640
  return (
    <table
      role="presentation"
      border-collapse="collapse"
      border="0"
      cellPadding={p || 0}
      cellSpacing={m || 0}
      width={w || width}
      style={{
        WebkitTextSizeAdjust: '100%',
        msTextSizeAdjust: '100%',
        msoTableLspace: '0pt',
        msoTableRspace: '0pt',
        borderSpacing: 0,
        margin: 'auto',
        width: '100%',
        maxWidth: width,
        ...style,
      }}
      {...rest}
    >
      <tbody>
        <tr>{td ? children : <td>{children}</td>}</tr>
      </tbody>
    </table>
  )
}
