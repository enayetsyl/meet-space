import { Link } from "react-router-dom"
import error404 from "../../../public/404.png"

const Error404 = () => {
  return (
    <div
    style={{ backgroundImage: `url(${error404})` }}
    className="bg-cover bg-center h-screen flex flex-col items-center justify-center relative"
  >
    <Link to="/">
    <button className="uppercase px-8 py-4 text-white bg-customOrange hover:bg-customGreen relative mt-72 font-bold">Back to Home</button>
    </Link>
  </div>
  )
}

export default Error404