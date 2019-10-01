import React from 'react'

const Heading = props => {
  const { title, className } = props
  return <h3 className={className}>{title}</h3>
}

export default Heading
