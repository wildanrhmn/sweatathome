'use client'

import '../../styles/footer.css'

import Link from 'next/link'

const Footer: React.FC = () => {
    const linkSocmed = {
        tiktok: 'https://www.linkedin.com/company/sweatathome/',
        instagram: 'https://www.instagram.com/sweatathome/',
        youtube: 'https://twitter.com/SweatAtHome',
    }
    return (
        <section className='footer'>
            <div className='container'>
                <div className='footer__wrapper'>
                    <div className='footer__header'>
                        <h1>Mari Terhubung</h1>
                        <div className='row'>
                            <div className='col-lg-4'>
                                <div className='footer__content'>
                                    <h5>Sosial Media Kami</h5>
                                    <ul>
                                        <li onClick={() => window.open(linkSocmed.tiktok, '_blank')}>
                                            <span>@sweatathome.id</span>
                                        </li>
                                        <li onClick={() => window.open(linkSocmed.tiktok, '_blank')}>
                                            <span>Sweat At Home</span>
                                        </li>
                                        <li onClick={() => window.open(linkSocmed.tiktok, '_blank')}>
                                            <span>WORKOUTAINMENT by Sweat at Home</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className='col-lg-4'>
                                <div className='footer__content'>
                                    <h5>Sosial Media Kami</h5>
                                    <ul>
                                        <li onClick={() => window.open(linkSocmed.instagram, '_blank')}>
                                            <span>@sweatathome.id</span>
                                        </li>
                                        <li onClick={() => window.open(linkSocmed.tiktok, '_blank')}>
                                            <span>Sweat At Home</span>
                                        </li>
                                        <li onClick={() => window.open(linkSocmed.youtube, '_blank')}>
                                            <span>WORKOUTAINMENT by Sweat at Home</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;