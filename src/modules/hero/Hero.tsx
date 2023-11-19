'use client'

import Image from 'next/image'
import '../../styles/hero.css'

import backgroundImg from '../../assets/images/background/hero.webp'
const HeroSection: React.FC = () => {
    return (
        <section className="hero">
            <div className="hero__text">
                <h3>Transformasi Tubuh, Gaya Hidup Sehat</h3>
                <h1>Bersama Sweat at Home</h1>
                <h1>Dirumah aja, yuk!</h1>
            </div>
            <Image alt="hero-background" src={backgroundImg} className='hero__img' priority /> 
        </section>
    )
}

export default HeroSection