import { NextPage } from "next"

import WhatsAppIcon from "@/modules/whatsapp/Whatsapp"
import HeroSection from "@/modules/hero/Hero"
import AboutPage from "@/modules/about/About"
import OurTeam from "@/modules/ourteam/OurTeam"
import ProductService from "@/modules/productservice/ProductService"
import OurClientSection from "@/modules/ourclient/OurClient"
const PersonalTrainer: NextPage = () => {
  return(
    <>
        <WhatsAppIcon />
        <HeroSection />
        <AboutPage />
        <OurTeam />
        <ProductService />
        <OurClientSection />
    </>
  )
}

export default PersonalTrainer
