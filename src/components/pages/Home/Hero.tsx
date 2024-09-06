import { Link } from "react-router-dom";
import heroImage from "../../../../public/hero.jpg";
const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url(${heroImage})` }}
      className="bg-cover bg-center h-screen flex flex-col items-center justify-center lg:-mt-28 relative"
    >
      <div className="absolute bg-black bg-opacity-70 p-8 inset-0 mx-auto h-full w-full ">
      </div>
        <h1 className="text-white text-3xl md:text-6xl font-bold mb-4 uppercase -mt-10 md:-mt-28 px-5 md:px-20 relative text-center leading-tight md:leading-snug">
        Book Your Ideal 
          <span className="text-customOrange"> Meeting Room</span>  with Ease.
        </h1>
        <p className="text-[#d9d9da]  relative md:text-3xl text-center px-5 md:px-20 text-lg ">Efficient, hassle-free room booking for all your meeting needs.</p>
        <Link to='/meeting-rooms'>
        <button className="uppercase px-8 py-4 text-white bg-customOrange hover:bg-customGreen relative mt-10 font-bold">Book Now</button>
        </Link>
    </div>
  );
};

export default Hero;
