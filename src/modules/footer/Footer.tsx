'use client'

import '../../styles/footer.css'

import Image from 'next/image'

import instagram from '../../assets/icon/insta.webp'
import tiktok from '../../assets/icon/tiktok.webp'
import youtube from '../../assets/icon/youtube.webp'
import hour from '../../assets/icon/hour.webp'
import place from '../../assets/icon/place.webp'

const Footer: React.FC = () => {
    const linkSocmed = {
        tiktok: 'https://www.tiktok.com/@sweatathome.id',
        instagram: 'https://www.instagram.com/sweatathome.id/',
        youtube: 'https://www.youtube.com/@workoutainmentbysweatathom9665',
    }
    return (
        <section className='footer'>
            <div className='container'>
                <div className='footer__wrapper'>
                    <div className='footer__header'>
                        <h1>Mari Terhubung</h1>
                        <div className='row'>
                            <div className='col-12 col-md-6 col-lg-4'>
                                <div className='footer__content'>
                                    <h5>Sosial Media Kami</h5>
                                    <ul>
                                        <li onClick={() => window.open(linkSocmed.instagram, '_blank')}>
                                            <Image src={instagram} alt="instagram icon" width={22} />
                                            <span>@sweatathome.id</span>
                                        </li>
                                        <li onClick={() => window.open(linkSocmed.tiktok, '_blank')}>
                                            <Image src={tiktok} alt="tiktok icon" width={22} />
                                            <span>Sweat At Home</span>
                                        </li>
                                        <li onClick={() => window.open(linkSocmed.youtube, '_blank')}>
                                            <Image src={youtube} alt="youtube icon" width={22} />
                                            <span>WORKOUTAINMENT by Sweat at Home</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-lg-4'>
                                <div className='footer__content'>
                                    <h5>Kantor Kami</h5>
                                    <ul>
                                        <li>
                                            <Image src={place} alt="place icon" width={22} />
                                            <span style={{fontWeight: '600'}}>Momentum Office Suites</span>
                                        </li>
                                        <li style={{width: '85%', paddingLeft: '28px'}} >
                                            <span>Jl. Palmerah Barat No.45 B, RW.3, Grogol Utara, Kec. Kby. Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12210</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-lg-4'>
                                <div className='footer__content'>
                                    <h5>Operasional</h5>
                                    <ul>
                                        <li>
                                            <Image src={hour} alt="hour icon" width={22} />
                                            <span>Jam Operasional Admin</span>
                                        </li>
                                        <li style={{paddingLeft: '28px'}}>
                                            <span>Senin - Jumat</span>
                                        </li>
                                        <li style={{paddingLeft: '28px'}}>
                                            <span>09.00 - 17.00 WIB</span>
                                        </li>
                                    </ul>
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