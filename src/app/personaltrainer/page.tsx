import { NextPage } from "next"

import WhatsAppIcon from "@/modules/whatsapp/Whatsapp"
import HeroSection from "@/modules/hero/Hero"
import AboutPage from "@/modules/about/About"
import OurTeam from "@/modules/ourteam/OurTeam"
const PersonalTrainer: NextPage = () => {
  return(
    <>
        <WhatsAppIcon />
        <HeroSection />
        <AboutPage />
        <OurTeam />
    </>
  )
}

export default PersonalTrainer
