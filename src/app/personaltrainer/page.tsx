import { NextPage } from "next"

import WhatsAppIcon from "@/modules/whatsapp/Whatsapp"
import HeroSection from "@/modules/hero/Hero"
import AboutPage from "@/modules/about/About"
const PersonalTrainer: NextPage = () => {
  return(
    <>
        <WhatsAppIcon />
        <HeroSection />
        <AboutPage />
    </>
  )
}

export default PersonalTrainer
