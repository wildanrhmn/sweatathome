'use client'

import Image from 'next/image'
import '../../styles/hero.css'
import { useMediaQuery } from 'react-responsive'

import backgroundImg from '../../assets/images/background/hero.png'
import backgroundImgLarger from '../../assets/images/background/hero_larger.png'
const HeroSection: React.FC = () => {
    const isDesktop = useMediaQuery({
        query: '(max-width: 992px)'
    })
    return (
        <section className="hero">
            <div className="hero__text">
                <h3>Transformasi Tubuh, Gaya Hidup Sehat!</h3>
                <h1>Bersama Personal Trainer Profesional!</h1>
            </div>
            {isDesktop ? 
            <Image alt="hero-background" src={backgroundImgLarger} /> :
            <Image alt="hero-background" src={backgroundImg} /> }
        </section>
    )
}

export default HeroSection