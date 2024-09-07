import FeaturedRooms from "../../components/pages/Home/FeaturedRooms"
import Hero from "../../components/pages/Home/Hero"
import HowItWorks from "../../components/pages/Home/HowItWorks"
import Service from "../../components/pages/Home/Service"
import Testimonials from "../../components/pages/Home/Testimonial"
import WhyUs from "../../components/pages/Home/WhyUs"

const Home = () => {
  return (
    <>
    <Hero />
    <Service />
    <FeaturedRooms/>
    <WhyUs />
    <HowItWorks/>
    <Testimonials/>
    </>
  )
}

export default Home