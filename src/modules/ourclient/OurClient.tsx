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
                        pagination={{
                            el: '.my-custom-pagination-div',
                          }}
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
                    </Swiper>
                    <div className="my-custom-pagination-div" />
                </div>
            </div>
        </section>
    )
}

export default OurClientSection;