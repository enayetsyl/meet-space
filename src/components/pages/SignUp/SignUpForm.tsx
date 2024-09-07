// - **Form Fields:** Name, email, password, phone number, address.

import { Link } from "react-router-dom";

const SignUpForm = () => {
  return (
    <div className="bg-gradient-to-r from-[#4d71da] to-[#6E6EE2] px-5 w-full py-5">
      <h1 className="text-3xl md:text-6xl font-bold uppercase text-center text-white  leading-tight md:leading-snug animate-float-from-top mb-5">
        Sign Up
      </h1>
         
      <form className="flex flex-col gap-5">
        <input className="p-3 bg-white w-full outline-none" type="text" placeholder="Full Name" required />
        <input className="p-3 bg-white outline-none w-full" type="text" placeholder="Email" required />
        <input className="p-3 bg-white outline-none w-full" type="text" placeholder="Password" required />
        <input className="p-3 bg-white outline-none w-full" type="text" placeholder="Phone Number" required />
        <input className="p-3 bg-white outline-none w-full" type="text" placeholder="Address" required />
        <button className="border border-white text-white p-3 uppercase font-bold hover:bg-white hover:text-black">Sign Up</button>
      </form>
      <p className="text-center text-white pt-5">Already have and account. <Link to="/login"><span className="underline text-customOrange">Login</span></Link>
      </p>
    </div>
  );
};

export default SignUpForm;
