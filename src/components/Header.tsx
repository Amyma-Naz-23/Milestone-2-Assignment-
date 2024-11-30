import React from 'react'
import Link from 'next/link'
import {FaShoppingCart} from 'react-icons/fa'
const Header = () => {
  return (
    <header className='header'>
        <h1 className='logo'>MakeUp City</h1>
        <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/makeup">MakeUp City</Link>
            <Link href="/contact">Contact</Link>
            <FaShoppingCart style={{color:'white',fontSize: '20px'}}></FaShoppingCart>
        </nav>
    </header>
  )
}

export default Header