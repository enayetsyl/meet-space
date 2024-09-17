import { NavLink, useNavigate } from "react-router-dom";
import { navItems } from "../../constant";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/features/authSlice";
import { RootState } from "../../redux/store"; // Assuming this is where your store is defined

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Get authentication status and user role from the Redux store
  const { user } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    // Clear the token from session storage
    sessionStorage.removeItem("token");

    // Dispatch the logout action to clear the user from the Redux store
    dispatch(logout());

    // Redirect to the login page or homepage after logout
    navigate("/login");

    // Optionally, show a logout success message
    console.log("Logout successful");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      closeMenu();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className=" bg-white md:bg-transparent h-20 md:h-28 relative z-50">
      <div className="flex items-center justify-between px-5 md:px-20 py-5">
        <div>
          <NavLink
            to="/"
            className="text-[#00A8E8]  text-3xl md:text-4xl font-bold"
          >
            MeetSpace
          </NavLink>
        </div>
        <div className="hidden md:flex ml-10 space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-[#00A8E8] hover:text-customOrange ${isActive ? "text-customGreen font-bold" : ""}`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Conditionally render links based on user role */}
          {user?.role === "user" && (
            <NavLink
              to="/my-bookings"
              className={({ isActive }) =>
                `text-[#00A8E8]  hover:text-customOrange ${isActive ? "text-customGreen font-bold" : ""}`
              }
            >
              My Bookings
            </NavLink>
          )}

          {/* Conditionally render admin-specific routes */}
          {user?.role === "admin" && (
            <>
              <NavLink
                to="/dashboard/booking-management"
                className={({ isActive }) =>
                  `text-[#00A8E8]  hover:text-customOrange ${isActive ? "text-customGreen font-bold" : ""}`
                }
              >
                Booking
              </NavLink>
              <NavLink
                to="/dashboard/room-management"
                className={({ isActive }) =>
                  `text-[#00A8E8]  hover:text-customOrange ${isActive ? "text-customGreen font-bold" : ""}`
                }
              >
                Room
              </NavLink>
              <NavLink
                to="/dashboard/slot-management"
                className={({ isActive }) =>
                  `text-[#00A8E8]  hover:text-customOrange ${isActive ? "text-customGreen font-bold" : ""}`
                }
              >
                Slot
              </NavLink>
            </>
          )}

          {/* Render logout button if user is authenticated */}
          {user ? (
            <button
              onClick={handleLogout}
              className="text-[#00A8E8]  hover:text-customOrange"
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              className="text-[#00A8E8]  hover:text-customOrange"
            >
              Login
            </NavLink>
          )}
        </div>

        <div className="md:hidden pt-3">
          <button
            onClick={toggleMenu}
            aria-expanded={isOpen}
            className="text-customOrange hover:text-customGreen "
          >
            <GiHamburgerMenu
              className={isOpen ? "h-6 w-6 text-customOrange" : "h-6 w-6 text-customGreen"}
            />
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute top-16 left-0 w-full bg-white p-4 space-y-4 z-20 flex flex-col justify-start items-start px-20 "
        >
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-[#00A8E8]  hover:text-customOrange border-t border-gray-400 w-full  ${
                  isActive ? "text-customGreen font-bold" : ""
                }`
              }
              onClick={closeMenu}
            >
              {item.name}
            </NavLink>
          ))}

          {/* Conditionally render links based on user role */}
          {user?.role === "user" && (
            <NavLink
              to="/my-bookings"
              className="text-[#00A8E8]  hover:text-customOrange border-t border-gray-400 w-full"
              onClick={closeMenu}
            >
              My Bookings
            </NavLink>
          )}

          {/* Conditionally render admin-specific routes */}
          {user?.role === "admin" && (
            <>
              <NavLink
                to="/dashboard/booking-management"
                className="text-[#00A8E8]  hover:text-customOrange border-t border-gray-400 w-full"
                onClick={closeMenu}
              >
                Booking
              </NavLink>
              <NavLink
                to="/dashboard/room-management"
                className="text-[#00A8E8]  hover:text-customOrange border-t border-gray-400 w-full"
                onClick={closeMenu}
              >
                Room 
              </NavLink>
              <NavLink
                to="/dashboard/slot-management"
                className="text-[#00A8E8]  hover:text-customOrange border-t border-gray-400 w-full"
                onClick={closeMenu}
              >
                Slot 
              </NavLink>
            </>
          )}

          {/* Render logout button if user is authenticated */}
          {user ? (
            <button
              onClick={handleLogout}
              className="text-[#00A8E8]  hover:text-customOrange border-t border-gray-400 w-full text-start"
          
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              className="text-[#00A8E8]  hover:text-customOrange border-t border-gray-400 w-full"
              onClick={closeMenu}
            >
              Login
            </NavLink>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
