import React from 'react'
import Link from 'next/link'
import styles from '../../styles/MainHeader.module.css'

const MainNavigation = () => {
  return (
    <nav className="main-nav">
      <Link href="/about">
        <a>About Us</a>
      </Link>
    </nav>
  )
}

export default MainNavigation
