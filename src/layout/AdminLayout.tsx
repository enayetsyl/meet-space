import { Outlet } from "react-router-dom"
import Navbar from "../components/shared/Navbar"
import meeting2 from "../../public/meeting-11.jpg"

const AdminLayout = () => {
  return (
    <div  className="px-5 md:px-20 bg-white pb-32"
    style={{
      backgroundImage: `url(${meeting2})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '120vh', 
      paddingTop: '120px',
      height: 'full',
     marginTop: '-112px', 
    }}>
      <Navbar/>
      <Outlet />
    </div>
  )
}

export default AdminLayout