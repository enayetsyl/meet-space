import heroImage from "../../../../public/hero.jpg";
const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url(${heroImage})` }}
      className="bg-cover bg-center h-screen flex flex-col items-center justify-center -mt-28 relative"
    >
      <div className="absolute bg-black bg-opacity-70 p-8 inset-0 mx-auto h-full w-full ">
      </div>
        <h1 className="text-white text-3xl md:text-6xl font-bold mb-4 uppercase -mt-10 md:-mt-28 px-10 md:px-32 relative text-center leading-tight md:leading-snug">
          Find your{" "}
          <span className="text-customOrange">dream meeting space</span> in
          prime location
        </h1>
        <button className="uppercase px-8 py-4 text-white bg-customOrange hover:bg-customGreen relative mt-10 font-bold">Book a tour</button>
    </div>
  );
};

export default Hero;
