import {
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import { ImFacebook, ImYoutube } from "react-icons/im";
import { RiInstagramLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
 

  return (
    <div className="bg-footerBg text-white px-20 py-24 flex flex-col md:flex-row md:justify-between justify-center md:items-start gap-10">
      <div className="flex flex-col justify-start items-start space-y-5">
        <h2 className="text-2xl font-bold ">Contact Information</h2>
        <p>
          <span className="text-customOrange">Email:</span> info@yourcompany.com
        </p>
        <p>
          <span className="text-customOrange">Phone:</span> -880 1730 197620
        </p>
        <p>
          <span className="text-customOrange">Address:</span> 123 Main Street,
          Sylhet, Bangladesh
        </p>
      </div>
      <div className="flex flex-col justify-start items-start space-y-5">
        <h2 className="text-2xl font-bold ">Social Media</h2>
        <div className="flex justify-start items-center gap-3">
          <Link
            to="https://www.facebook.com/profile.php?id=100094416483981"
            target="_blank"          >
            <ImFacebook className=" font-bold text-white bg-customOrange hover:bg-customGreen text-3xl p-1.5 rounded-md" />
          </Link>
          <Link
            to="https://github.com/enayetsyl"
            target="_blank"          >
          <RiInstagramLine className=" font-bold text-white bg-customOrange hover:bg-customGreen text-3xl p-1.5 rounded-md" />
          </Link>
          <Link
            to="https://x.com/enayetu_syl"
            target="_blank"          >
          <FaTwitter className=" font-bold text-white bg-customOrange hover:bg-customGreen text-3xl p-1.5 rounded-md" />
          </Link>
          <Link
            to="https://www.youtube.com/@MdEnayeturRahman"
            target="_blank"          >
          <ImYoutube className=" font-bold text-white bg-customOrange hover:bg-customGreen text-3xl p-1.5 rounded-md" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/md-enayetur-rahman/"
            target="_blank"          >
          <FaTiktok className=" font-bold text-white bg-customOrange hover:bg-customGreen text-3xl p-1.5 rounded-md" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start space-y-5">
      <h2 className="text-2xl font-bold ">Important Links</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/privacy-policy" className="text-customOrange">Privacy Policy</Link>
        </li>
        <li>

          <Link to="/terms-of-service" className="text-customOrange">Terms of Service</Link>
        </li>
      </ul>
      </div>
    </div>
  );
};

export default Footer;
