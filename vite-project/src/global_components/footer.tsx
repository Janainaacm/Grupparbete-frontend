import React from 'react'
import { useHref } from 'react-router-dom'

const Footer = () => {
  return (
    <footer style={{backgroundColor: "black"}}>
      <h1>footer<button onClickCapture={() => window.location.href = "https://github.com/Janainaacm/Grupparbete-frontend/branches"}>
        Om oss</button></h1>
       
     
    </footer>
  )
}

export default Footer

