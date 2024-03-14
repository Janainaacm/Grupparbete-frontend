import React from 'react'
import { useHref } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{backgroundColor: ''}}>
       <button onClickCapture={() => window.location.href = "https://github.com/Janainaacm/Grupparbete-frontend/branches"}></button>
      <p>Om oss </p>
    </div>
  )
}

export default Footer

