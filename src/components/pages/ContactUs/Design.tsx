import contactUsImage from "../../../../public/contact-us.png"

const Design = () => {
  return (
    <div
      style={{ backgroundImage: `url(${contactUsImage})` }}
      className="bg-cover bg-center h-screen flex flex-col items-center justify-center lg:-mt-28 relative"
    >
      <div className="absolute bg-black bg-opacity-70 p-8 inset-0 mx-auto h-full w-full ">
      </div>
        <h1 className="text-white text-3xl md:text-6xl font-bold mb-4 uppercase -mt-10 md:-mt-28 px-5 md:px-20 relative text-center leading-tight md:leading-snug">
         
          <span className="text-customOrange"> Contact Us</span>  
        </h1>
       
    </div>
  );
};

export default Design;
