import React from 'react'
import Navigation from './Navigation'
import logo from '../../assets/images/logo-rackext-svgrepo-com.svg';

const Header = () => {
    return (
        <header className='flex justify-between items-center py-4 px-10 border-b-1 border-gray-400'>
            <img src={logo} className='w-10 h-auto' alt='logo' />
            <Navigation />
        </header>
    )
}

export default Header