import image from "../../../public/meeting-6.jpg";
import SignUpForm from "../../components/pages/SignUp/SignUpForm";

const SignUp = () => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="bg-cover bg-center min-h-screen flex flex-col items-center justify-center lg:-mt-28 relative"
    >
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 pb-32 px-5 md:px-20 mt-40">
        <h1 className="text-customOrange text-3xl md:text-6xl font-bold mb-4 uppercase  px-5  relative text-center leading-tight md:leading-snug">
          Register for  an Account
         
        </h1>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;
