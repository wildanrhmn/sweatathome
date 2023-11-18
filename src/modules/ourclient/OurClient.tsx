'use client'

import '../../styles/ourclient.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import image1 from '../../assets/images/client/1.webp';
import image2 from '../../assets/images/client/2.webp';
import image3 from '../../assets/images/client/3.webp';
import image4 from '../../assets/images/client/4.webp';
import image5 from '../../assets/images/client/5.webp';
import image6 from '../../assets/images/client/6.webp';
import image7 from '../../assets/images/client/7.webp';
import image8 from '../../assets/images/client/8.webp';
import image9 from '../../assets/images/client/9.webp';
import image10 from '../../assets/images/client/10.webp';
import image11 from '../../assets/images/client/11.webp';

const OurClientSection: React.FC = () => {
    return (
        <section className="our-client">
            <div className="container d-flex justify-content-center align-items-center flex-column">
                <div className="section__header">
                    <h1>Klien Kami</h1>
                </div>
                <div className='our-client__slider pt-5'>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={3}
                        coverflowEffect={{
                            rotate: 50, // Adjust rotation angle
                            stretch: 0, // Set to 0 to prevent stretching
                            depth: 100, // Adjust depth
                            modifier: 1, // Modifier of the depth effect, better to keep it close to 1
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <Image src={image1} alt="client" className='our-client__slider' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={image2} alt="client" className='our-client__slider' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={image3} alt="client" className='our-client__slider' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={image4} alt="client" className='our-client__slider' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={image5} alt="client" className='our-client__slider' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={image6} alt="client" className='our-client__slider' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={image7} alt="client" className='our-client__slider' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={image8} alt="client" className='our-client__slider' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={image9} alt="client" className='our-client__slider' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={image10} alt="client" className='our-client__slider' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={image11} alt="client" className='our-client__slider' />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default OurClientSection;