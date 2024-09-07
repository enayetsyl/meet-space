import { FaLocationDot } from "react-icons/fa6";
import {  FaRegEnvelope } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const ContactInfo = () => {
  return (
    <div className="bg-white px-8 pt-8 pb-12 shadow-lg w-full">
      <h1 className="text-2xl font-semibold pb-5">Head Office</h1>
      <div className="space-y-10">
      <div className="flex items-center justify-start gap-5">
      <IoCall className=" font-bold text-white bg-customOrange hover:bg-customGreen text-5xl p-2 " />
      <div className="flex flex-col gap-1"> 
        <p>Call: +0088-01730-197620</p>
        <p>Sunday-Thursday (6am-6pm)</p>
      </div>
      </div>
      <div className="flex items-center justify-start gap-5">
      <FaRegEnvelope className=" font-bold text-white bg-customOrange hover:bg-customGreen text-5xl p-2 " />
      <div className="flex flex-col gap-1"> 
        <p>Email: enayetfl@gmail.com</p>
        <p>Web: www.md-enayetur-rahman-portfolio.vercel.app</p>
      </div>
      </div>
      <div className="flex items-center justify-start gap-5">
      <FaLocationDot className=" font-bold text-white bg-customOrange hover:bg-customGreen text-5xl p-2 " />
      <div className="flex flex-col gap-1"> 
        <p>Location: Sylhet City</p>
        <p>Sylhet Division, Bangladesh</p>
      </div>
      </div>
      </div>
    </div>
  )
}

export default ContactInfo