import { Outlet } from "react-router-dom"
import Navbar from "../components/shared/Navbar"
import Footer from "../components/shared/Footer"
import ScrollToTopButton from "../components/shared/ScrollToTop"

const PublicLayout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <ScrollToTopButton/>
      <Footer/>
    </div>
  )
}

export default PublicLayout