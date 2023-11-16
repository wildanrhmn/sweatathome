'use client'

import { useState, useEffect } from 'react'
import '../../styles/header.css'

import Image from 'next/image'
import Link from 'next/link'

import logo from '../../assets/icon/logo.png'
import { useMediaQuery } from 'react-responsive'

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const isMobile = useMediaQuery({
        query: '(max-width: 576px)'
    })

    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.pageYOffset;
    
          // Check if the user has scrolled past a certain point (e.g., 50px)
          setIsScrolled(scrollTop > 50);
        };
    
        window.addEventListener('scroll', handleScroll);
        
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return(
        <section className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className='container d-flex align-items-center'>
                <div className="header__content d-flex justify-content-between align-items-center">
                    <div className="header__logo">
                        <Image src={logo} alt="logo" width={isMobile ? 65 : 125} height={isMobile ? 65 : 125} />
                    </div>
                    <div className="header__menu d-none d-lg-block">
                        <Link href={'#our-team'}>Tim Kami</Link>
                        <Link href={'#consultation'}>Konsultasi</Link>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Header