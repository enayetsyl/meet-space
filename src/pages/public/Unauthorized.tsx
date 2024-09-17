import { Link } from "react-router-dom";

const Unauthorized = () => {
  return <div className="min-h-screen flex items-center justify-center flex-col">
     <h1 className="text-3xl md:text-6xl font-bold uppercase text-center pb-20 bg-gradient-to-r from-customOrange to-customGreen bg-clip-text text-transparent leading-tight md:leading-snug animate-float-from-top">Unauthorized - You do not have access to this page</h1>
    <Link to='/'>
    <button className="px-5 py-3 bg-customOrange hover:bg-customGreen text-white font-semibold">Back to home</button>
    </Link>
  </div>;
};

export default Unauthorized;
