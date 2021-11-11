import React from 'react'
import l from '../assets/l.png'
import '../styles/Banner.css'

export const Banner = () => {
    const title = "YouTube";
    return (
        <>
      <div className="container-logo">
        <img src={l} alt="youtube" className="logo" />
        <h1 className="logo-title">{title}</h1>
      </div>
    </>
    )
}
