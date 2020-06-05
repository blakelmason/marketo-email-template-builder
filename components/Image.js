import React from 'react'
import get from 'lodash/get'

export default function Image({ style, alt, src, className }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={get(style, 'width')}
      style={{
        margin: 'auto',
        height: 'auto',
        maxWidth: '100%',
        ...style,
      }}
    />
  )
}
