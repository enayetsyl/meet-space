import { Link } from "react-router-dom";
import { ImFacebook } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
import { teamMembers } from "../../../constant";



const Team = () => {
  return (
    <div className="bg-white py-16 px-5 md:px-20">
        <h1 className="text-3xl md:text-6xl font-bold uppercase text-center py-20 bg-gradient-to-r from-customOrange to-customGreen bg-clip-text text-transparent leading-tight md:leading-snug animate-float-from-top">
      Meet The Team
    </h1>
      <div className="grid grid-cols-1  lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="flex flex-col items-center bg-white p-6 border border-[#f5f5f5]"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-60 h-60 rounded-full mb-4 object-cover"
            />
            <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
            <p className="text-customGreen italic mb-2">{member.role}</p>
            <div className="flex justify-center items-center gap-3">
            <Link
            to={member.facebook}
            target="_blank"          >
            <ImFacebook className=" font-bold text-white bg-customOrange hover:bg-customGreen text-3xl p-1.5 rounded-full" />
          </Link>
          <Link
            to={member.github}
            target="_blank"          >
          <PiGithubLogoFill   className=" font-bold text-white bg-customOrange hover:bg-customGreen text-3xl p-1.5 rounded-full" />
          </Link>
          <Link
            to={member.twitter}
            target="_blank"          >
          <FaTwitter className=" font-bold text-white bg-customOrange hover:bg-customGreen text-3xl p-1.5 rounded-full" />
          </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
